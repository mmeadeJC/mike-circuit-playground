<script setup lang="ts">
import { computed, defineComponent, h, inject, markRaw, ref, watch } from 'vue';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';
import {
  CollapsiblePanel,
  DataTable,
  DataTableCellText,
  FormField,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import {
  ArrowRightIcon,
  ChevronRightIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
} from '@heroicons/vue/24/outline';
import type { ReviewDecision, ReviewQueueItem } from '../types';
import type { AccessReviewM1Store } from '../accessReviewM1Store';
import { ACCESS_REVIEW_M1_STORE_KEY } from '../accessReviewM1Store';

defineOptions({ name: 'AccessReviewsReviewerPortal' });

const store = inject(ACCESS_REVIEW_M1_STORE_KEY) as AccessReviewM1Store;

const selectedId = ref<string | null>(store.reviewQueue[0]?.id ?? null);

const selectedItem = computed(() =>
  store.reviewQueue.find((r) => r.id === selectedId.value) ?? null,
);

const campaignConfig = computed(() =>
  selectedItem.value ? store.getCampaign(selectedItem.value.campaignId) : undefined,
);

const draftDecision = ref<ReviewDecision>(null);
const draftJustification = ref('');

watch(
  selectedItem,
  (item) => {
    if (!item) return;
    draftDecision.value = item.decision;
    draftJustification.value = item.justification;
  },
  { immediate: true },
);

const ReviewTypeCell = markRaw(
  defineComponent({
    name: 'ArM1ReviewTypeCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const row = props.data as ReviewQueueItem;
        const app = row.scopeType === 'application';
        return h('div', { class: 'flex items-center gap-sm p-2 min-h-12' }, [
          h(app ? BuildingOfficeIcon : UserGroupIcon, { class: 'size-5 text-neutral-subtle shrink-0' }),
          h(Tag, {
            value: app ? 'Application access' : 'Group membership',
            severity: app ? 'info' : 'success',
          }),
        ]);
      };
    },
  }),
);

const StatusTokenCell = markRaw(
  defineComponent({
    name: 'ArM1QueueStatusCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const st = (props.data as ReviewQueueItem).status;
        const map = {
          pending: { label: 'Pending', severity: 'warn' as const },
          complete: { label: 'Complete', severity: 'success' as const },
          overdue: { label: 'Overdue', severity: 'danger' as const },
        };
        const m = map[st];
        return h('div', { class: 'flex items-center p-2 min-h-12' }, [
          h(Tag, { value: m.label, severity: m.severity }),
        ]);
      };
    },
  }),
);

const queueColumns = markRaw([
  {
    field: 'scopeType',
    header: 'Review type',
    width: '200px',
    component: ReviewTypeCell,
    componentProps: (sp: { data: ReviewQueueItem }) => ({ data: sp.data }),
  },
  {
    field: 'campaignName',
    header: 'Campaign',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: ReviewQueueItem }) => ({ label: sp.data.campaignName }),
  },
  {
    field: 'subjectUser',
    header: 'User',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: ReviewQueueItem }) => ({
      label: sp.data.subjectUser.name,
      description: sp.data.subjectUser.email,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    width: '120px',
    component: StatusTokenCell,
    componentProps: (sp: { data: ReviewQueueItem }) => ({ data: sp.data }),
  },
]);

function onRowClick(ev: { data: ReviewQueueItem }) {
  selectedId.value = ev.data.id;
}

const decisionOptions = [
  { label: 'Approve access', value: 'keep' },
  { label: 'Revoke access', value: 'revoke' },
];

const canSubmit = computed(() => {
  if (!selectedItem.value || selectedItem.value.status === 'complete') return false;
  if (!draftDecision.value) return false;
  if (campaignConfig.value?.mandatoryJustification && !draftJustification.value.trim()) return false;
  return true;
});

function submitDecision() {
  if (!selectedItem.value || !draftDecision.value) return;
  store.setReviewDecision(selectedItem.value.id, draftDecision.value, draftJustification.value.trim());
}

const graphCollapsed = ref(false);
</script>

<template>
  <div class="flex flex-col gap-lg min-h-0">
    <p class="text-body-md text-neutral-subtle max-w-3xl">
      User portal view — assigned reviewers see application vs group reviews with a clear access path and consistent
      status labels (aligned with Access Requests patterns).
    </p>

    <div class="flex flex-col lg:flex-row gap-lg min-h-0 flex-1">
      <div class="flex flex-col min-h-0 flex-1 min-w-0 lg:max-w-xl">
        <DataTable
          :data="store.reviewQueue"
          :columns="queueColumns"
          :loading="false"
          scrollable
          scrollHeight="320px"
          @row-click="onRowClick"
        />
      </div>

      <div
        v-if="selectedItem"
        class="flex flex-col gap-md flex-1 min-w-0 border border-neutral-default_solid rounded-md p-md"
      >
        <div class="flex flex-wrap items-center gap-sm">
          <Tag
            :value="selectedItem.scopeType === 'application' ? 'Application access' : 'Group membership'"
            :severity="selectedItem.scopeType === 'application' ? 'info' : 'success'"
          />
          <Tag
            :value="
              selectedItem.status === 'pending'
                ? 'Pending'
                : selectedItem.status === 'overdue'
                  ? 'Overdue'
                  : 'Complete'
            "
            :severity="
              selectedItem.status === 'pending' ? 'warn' : selectedItem.status === 'overdue' ? 'danger' : 'success'
            "
          />
        </div>

        <div>
          <h2 class="text-heading-3 text-neutral-base">{{ selectedItem.subjectUser.name }}</h2>
          <p class="text-body-md text-neutral-subtle">
            {{ selectedItem.subjectUser.title }} · {{ selectedItem.subjectUser.department }}
          </p>
          <p class="text-body-sm text-neutral-subtle mt-xs">{{ selectedItem.subjectUser.email }}</p>
        </div>

        <DetailsKeyValue
          v-if="selectedItem.applicationName"
          label="Application"
          :value="selectedItem.applicationName"
        />
        <DetailsKeyValue v-if="selectedItem.groupName" label="Group" :value="selectedItem.groupName" />
        <DetailsKeyValue label="Stage" :value="selectedItem.stageLabel" />

        <CollapsiblePanel v-model:collapsed="graphCollapsed" header="How access is granted" toggleable>
          <template #titleicon="iconProps">
            <ArrowRightIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>
          <ul class="list-none p-0 m-0 flex flex-col gap-sm">
            <li
              v-for="(edge, i) in selectedItem.accessGraph"
              :key="i"
              class="flex items-center gap-sm text-body-md text-neutral-base"
            >
              <span class="font-medium">{{ edge.from }}</span>
              <span class="text-body-sm text-neutral-subtle">{{ edge.relationship }}</span>
              <span class="font-medium">{{ edge.to }}</span>
            </li>
          </ul>
        </CollapsiblePanel>

        <div v-if="selectedItem.status !== 'complete'" class="flex flex-col gap-md">
          <span class="text-body-md-bold text-neutral-base">Decision</span>
          <SelectButton
            v-model="draftDecision"
            :options="decisionOptions"
            optionLabel="label"
            optionValue="value"
            :allowEmpty="true"
          />
          <div v-if="campaignConfig?.mandatoryJustification || draftDecision" class="flex flex-col gap-xs">
            <FormField label="Justification">
              <template #default="{ inputId }">
                <Textarea
                  :id="inputId"
                  v-model="draftJustification"
                  class="w-full"
                  :rows="3"
                  placeholder="Explain why access should be kept or removed."
                />
              </template>
            </FormField>
            <p class="text-body-sm text-neutral-subtle">
              {{ campaignConfig?.mandatoryJustification ? 'Required for this campaign.' : 'Optional.' }}
            </p>
          </div>
          <Button label="Submit decision" :disabled="!canSubmit" @click="submitDecision" />
        </div>
        <div v-else class="flex flex-col gap-sm">
          <span class="text-body-md-bold text-neutral-base">Submitted</span>
          <Tag
            :value="selectedItem.decision === 'keep' ? 'Approved access' : 'Revoked access'"
            :severity="selectedItem.decision === 'keep' ? 'success' : 'danger'"
          />
          <p v-if="selectedItem.justification" class="text-body-md text-neutral-base">
            {{ selectedItem.justification }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
