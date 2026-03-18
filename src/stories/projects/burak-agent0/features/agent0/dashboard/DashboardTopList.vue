<script setup lang="ts">
import { CollapsiblePanel } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import { ArrowUpIcon, ListBulletIcon } from '@heroicons/vue/24/outline';

defineProps<{
  header: string;
  items: { name: string; value: number; valueSuffix: string }[];
  summaryLabel: string;
  trendValue: string;
  trendLabel: string;
}>();

const emit = defineEmits<{
  'see-all': [];
}>();
</script>

<template>
  <CollapsiblePanel :header="header">
    <template #titleicon="iconProps">
      <ListBulletIcon :class="iconProps.class" />
    </template>
    <template #actions>
      <Button label="See All" severity="secondary" variant="outlined" size="small" @click="emit('see-all')" />
    </template>
    <div class="flex flex-col">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-body-sm text-neutral-base">
          <span class="text-body-sm-bold">{{ items.length }}</span> {{ summaryLabel }}
        </span>
        <div class="flex items-center gap-1.5">
          <ArrowUpIcon class="w-4 h-4 text-status-success-base" />
          <span class="text-body-sm-bold text-status-success-base">{{ trendValue }}</span>
          <span class="text-body-sm text-neutral-subtle">{{ trendLabel }}</span>
        </div>
      </div>
      <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
        <div
          v-for="item in items"
          :key="item.name"
          class="flex items-center justify-between py-3"
        >
          <span class="text-body-md text-neutral-base">{{ item.name }}</span>
          <span class="text-body-sm-bold text-neutral-base">{{ item.value.toLocaleString() }} {{ item.valueSuffix }}</span>
        </div>
      </div>
    </div>
  </CollapsiblePanel>
</template>
