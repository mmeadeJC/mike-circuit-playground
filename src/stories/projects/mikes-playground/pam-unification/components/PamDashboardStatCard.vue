<script setup lang="ts">
import type { Component } from 'vue';
import { CollapsiblePanel } from '@jumpcloud/circuit/components';
import { ArrowDownIcon, ArrowUpIcon, ChartBarIcon } from '@heroicons/vue/24/outline';

withDefaults(
  defineProps<{
    header: string;
    value: string;
    subtitle?: string;
    valueClass?: string;
    changeValue?: string;
    changeLabel?: string;
    trendDirection?: 'up' | 'down';
    icon?: Component;
  }>(),
  {
    trendDirection: 'up',
  },
);

const trendValueClass = (direction: 'up' | 'down') =>
  direction === 'down' ? 'text-error-base' : 'text-success-base';
</script>

<template>
  <CollapsiblePanel :header="header">
    <template #titleicon="iconProps">
      <component :is="icon ?? ChartBarIcon" :class="iconProps.class" />
    </template>
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-sm">
        <span class="text-heading-0" :class="valueClass || 'text-neutral-base'">{{ value }}</span>
        <span v-if="subtitle" class="text-heading-3 text-neutral-base self-end">{{ subtitle }}</span>
      </div>
      <div v-if="changeValue" class="flex items-center gap-1.5">
        <div class="flex items-center gap-0.5">
          <ArrowDownIcon
            v-if="trendDirection === 'down'"
            class="size-4"
            :class="trendValueClass('down')"
          />
          <ArrowUpIcon
            v-else
            class="size-4"
            :class="trendValueClass('up')"
          />
          <span class="text-body-sm-bold" :class="trendValueClass(trendDirection)">{{ changeValue }}</span>
        </div>
        <span v-if="changeLabel" class="text-body-sm text-neutral-subtle">{{ changeLabel }}</span>
      </div>
      <span v-else-if="changeLabel" class="text-body-sm text-neutral-subtle">{{ changeLabel }}</span>
    </div>
  </CollapsiblePanel>
</template>
