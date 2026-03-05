<script setup lang="ts">
import { CollapsiblePanel } from '@jumpcloud/circuit/components';
import { ArrowUpIcon } from '@heroicons/vue/24/outline';

defineProps<{
  header: string;
  value: string;
  subtitle?: string;
  valueClass?: string;
  changeValue?: string;
  changeLabel?: string;
  showArrow?: boolean;
}>();
</script>

<template>
  <CollapsiblePanel :header="header">
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-[7px]">
        <span
          class="text-[32px] font-semibold leading-8 tracking-[-0.5px]"
          :class="valueClass || 'text-neutral-base'"
        >{{ value }}</span>
        <span v-if="subtitle" class="text-heading-3 text-neutral-base self-end">{{ subtitle }}</span>
      </div>
      <div v-if="changeValue" class="flex items-center gap-1.5">
        <div v-if="showArrow" class="flex items-center gap-0.5">
          <ArrowUpIcon class="w-4 h-4 text-success-base" />
          <span class="text-body-sm-bold text-success-base">{{ changeValue }}</span>
        </div>
        <span v-else class="text-body-sm-bold text-success-base">{{ changeValue }}</span>
        <span v-if="changeLabel" class="text-body-sm text-neutral-subtle">{{ changeLabel }}</span>
      </div>
      <span v-else-if="changeLabel" class="text-body-sm text-neutral-subtle">{{ changeLabel }}</span>
    </div>
  </CollapsiblePanel>
</template>
