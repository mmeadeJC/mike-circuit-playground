<script setup lang="ts">
import { computed } from 'vue';
import { CollapsiblePanel } from '@jumpcloud/circuit/components';
import { ShieldCheckIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const props = defineProps<{
  policies: { name: string; profiles?: string[]; servers?: string[] }[];
  scopeType?: 'profiles' | 'servers';
}>();

const emit = defineEmits<{
  'create-policy': [];
  'view-policies': [];
  'see-all': [];
}>();

const isEmpty = computed(() => props.policies.length === 0);
const policyCount = computed(() => props.policies.length);
const isServerScope = computed(() => props.scopeType === 'servers');
const defaultLabel = computed(() => isServerScope.value ? 'All Servers' : 'All Profiles');
</script>

<template>
  <CollapsiblePanel header="Governance">
    <template #titleicon="iconProps">
      <ShieldCheckIcon :class="iconProps.class" />
    </template>
    <template v-if="!isEmpty" #actions>
      <div class="flex items-center gap-2">
        <span class="text-body-sm-semi-bold text-neutral-subtle">
          {{ policyCount }} {{ policyCount === 1 ? 'policy' : 'policies' }} applied
        </span>
        <Button label="See all" severity="secondary" variant="outlined" size="small" @click="emit('see-all')" />
      </div>
    </template>

    <div class="flex flex-col gap-3">
      <!-- Empty state -->
      <template v-if="isEmpty">
        <p class="text-neutral-subtle">
          <span class="text-body-md-semi-bold">No conditional access policies are applied to AI Connector.</span><br>
          <span class="text-body-md">Create policies to control access to MCP servers and connected profiles.</span>
        </p>
        <div class="flex items-center gap-sm">
          <Button label="Create policy" severity="secondary" size="small" @click="emit('create-policy')" />
          <Button severity="secondary" variant="text" size="small" class="gap-2" @click="emit('view-policies')">
            View policies
            <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5" />
          </Button>
        </div>
      </template>

      <!-- Applied state -->
      <template v-else>
        <div class="flex flex-col divide-y divide-neutral-default_solid border-y border-neutral-default_solid">
          <div
            v-for="policy in policies"
            :key="policy.name"
            class="flex items-center justify-between py-2"
          >
            <div class="flex items-center">
              <span class="text-body-md-semi-bold text-neutral-base">{{ policy.name }}</span>
              <Divider layout="vertical" />
              <span v-if="policy.servers?.length" class="text-body-md text-neutral-subtle">
                {{ policy.servers.length === 1 ? policy.servers[0] : `${policy.servers.length} Servers` }}
              </span>
              <span v-else-if="policy.profiles?.length" class="text-body-md text-neutral-subtle">
                {{ policy.profiles.length === 1 ? policy.profiles[0] : `${policy.profiles.length} Profiles` }}
              </span>
              <span v-else class="text-body-md text-neutral-subtle">
                {{ defaultLabel }}
              </span>
            </div>
            <Button label="View" severity="secondary" variant="outlined" size="small" />
          </div>
        </div>
      </template>
    </div>
  </CollapsiblePanel>
</template>
