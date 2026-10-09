<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import {
  ConfigPageLayout,
  FormField,
  MessageNotification,
  PageSaveBar,
  PageSection,
} from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import JumpServerStatusCell from '../components/JumpServerStatusCell.vue';
import ClusterHealthCell from './components/ClusterHealthCell.vue';
import ClusterTag from './components/ClusterTag.vue';
import {
  clusterHealth,
  initialClusters,
  initialJumpServers,
  membersOf,
  policyLabel,
  type ClusterHealth,
  type ServerStatus,
} from './data/clusterData';

const props = withDefaults(
  defineProps<{
    /** Saved association for this resource. `js-11` = a single Jump Server (today's behaviour). */
    savedValue?: string | null;
    /** Pre-select a value so the story starts dirty. */
    initialValue?: string | null;
    /** Open the dropdown on mount (for the "dropdown" story). */
    openDropdown?: boolean;
  }>(),
  { savedValue: 'js-11', initialValue: undefined, openDropdown: false }
);

const servers = initialJumpServers();
const clusters = initialClusters();

interface Option {
  value: string;
  label: string;
  kind: 'cluster' | 'server';
  status?: ServerStatus;
  health?: ClusterHealth;
  meta: string;
}

/** Clusters appear in the SAME dropdown as individual Jump Servers (PPB-110). Clusters first, then servers. */
const options: Option[] = [
  ...clusters.map<Option>((c) => ({
    value: c.id,
    label: c.name,
    kind: 'cluster',
    health: clusterHealth(c, servers),
    meta: `${membersOf(c, servers).length} Jump Servers · ${policyLabel(c.policy)}`,
  })),
  ...servers.map<Option>((s) => ({
    value: s.id,
    label: s.name,
    kind: 'server',
    status: s.status,
    meta: s.ip,
  })),
];

// Baseline / dirty / save / discard wiring (CLAUDE.md §9)
const baseline = ref<string | null>(props.savedValue);
const jumpServer = ref<string | null>(props.initialValue !== undefined ? props.initialValue : props.savedValue);
const isDirty = computed(() => jumpServer.value !== baseline.value);
const isSaving = ref(false);
const showSaved = ref(false);

function handleSave() {
  isSaving.value = true;
  setTimeout(() => {
    baseline.value = jumpServer.value;
    isSaving.value = false;
    showSaved.value = true;
    setTimeout(() => (showSaved.value = false), 2500);
  }, 500);
}
function handleDiscard() {
  jumpServer.value = baseline.value;
}

const selected = computed(() => options.find((o) => o.value === jumpServer.value) ?? null);
const selectedCluster = computed(() =>
  selected.value?.kind === 'cluster' ? clusters.find((c) => c.id === selected.value!.value) ?? null : null
);

const selectRef = ref<any>(null);
onMounted(async () => {
  if (props.openDropdown) {
    await nextTick();
    setTimeout(() => {
      selectRef.value?.show?.();
      // PrimeVue scrolls to the selected option; reset so the Cluster entries at the top are visible.
      setTimeout(() => {
        let el: HTMLElement | null = document.querySelector('[role="listbox"]');
        while (el && el.scrollHeight <= el.clientHeight) el = el.parentElement;
        if (el) el.scrollTop = 0;
      }, 150);
    }, 300);
  }
});
</script>

<template>
  <div class="flex-1 min-h-0 overflow-auto bg-neutral-surface relative">
    <ConfigPageLayout class="w-full!" max-width="1024">
      <div class="flex flex-col gap-lg pb-24">
        <PageSection title="Edit Server" subtitle-text="Update how users reach this resource." />

        <div class="grid grid-cols-2 gap-x-6 gap-y-4">
          <FormField label="Name" required>
            <template #default="{ inputId }">
              <InputText :id="inputId" model-value="prod-api-01" class="w-full" />
            </template>
          </FormField>
          <FormField label="Address" required>
            <template #default="{ inputId }">
              <InputText :id="inputId" model-value="10.0.5.21" class="w-full" />
            </template>
          </FormField>

          <FormField
            label="Jump Server"
            required
            class="col-span-2"
            help-text="Choose a single Jump Server, or a cluster to route connections to a healthy Jump Server automatically."
          >
            <template #default="{ inputId }">
              <Select
                ref="selectRef"
                :input-id="inputId"
                v-model="jumpServer"
                :options="options"
                option-label="label"
                option-value="value"
                placeholder="Select a Jump Server or cluster"
                filter
                filter-placeholder="Search Jump Servers and clusters"
                class="w-full!"
              >
                <template #filtericon><MagnifyingGlassIcon /></template>
                <template #value="slotProps">
                  <div v-if="selected" class="flex items-center gap-sm">
                    <span class="text-body-md text-field-base">{{ selected.label }}</span>
                    <ClusterTag v-if="selected.kind === 'cluster'" />
                    <JumpServerStatusCell v-else-if="selected.status" :status="selected.status" />
                  </div>
                  <span v-else class="text-body-md text-field-placeholder">{{ slotProps.placeholder }}</span>
                </template>
                <template #option="{ option }">
                  <div class="flex items-center justify-between gap-md w-full">
                    <div class="flex flex-col min-w-0">
                      <span class="text-body-md text-neutral-base truncate">{{ option.label }}</span>
                      <span class="text-body-xs text-neutral-subtle truncate">{{ option.meta }}</span>
                    </div>
                    <div class="flex items-center gap-xs shrink-0">
                      <template v-if="option.kind === 'cluster'">
                        <ClusterHealthCell :health="option.health" />
                        <ClusterTag />
                      </template>
                      <JumpServerStatusCell v-else :status="option.status" />
                    </div>
                  </div>
                </template>
              </Select>
            </template>
          </FormField>
        </div>

        <MessageNotification
          v-if="selectedCluster"
          :severity="clusterHealth(selectedCluster, servers) === 'Unavailable' ? 'error' : 'info'"
          :title="clusterHealth(selectedCluster, servers) === 'Unavailable' ? 'This cluster has no eligible Jump Servers' : `Connections route through “${selectedCluster.name}”`"
          :detail="clusterHealth(selectedCluster, servers) === 'Unavailable'
            ? 'Users will not be able to connect to this resource until a Jump Server in the cluster is Online.'
            : `A healthy Jump Server is chosen for each new connection using ${policyLabel(selectedCluster.policy)}. Selecting a cluster replaces the single Jump Server selection — a resource uses one or the other, never both.`"
        />
        <MessageNotification
          v-else-if="selected && selected.kind === 'server'"
          severity="secondary"
          title="Single Jump Server"
          detail="This resource keeps working exactly as it does today. If this Jump Server goes offline, access stops until an administrator takes action."
        />
      </div>
    </ConfigPageLayout>

    <PageSaveBar
      :visible="isDirty"
      :saving="isSaving"
      :saved="showSaved"
      message="You have unsaved changes"
      @save="handleSave"
      @discard="handleDiscard"
    />
  </div>
</template>
