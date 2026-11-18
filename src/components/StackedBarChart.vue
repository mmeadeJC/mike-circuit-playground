<script setup lang="ts">
import { computed } from 'vue';

/**
 * Lightweight stacked bar chart built from Circuit tokens (no chart library).
 * Each bucket is a column; hovering a column shows a Circuit tooltip with the
 * bucket's time range and per-series counts.
 */

export type StackedBarSeries = {
  key: string;
  label: string;
  /** Tailwind bg classes using Circuit chart tokens, e.g. `bg-chart-success-base`. */
  barClass: string;
  /** Tailwind bg class for the legend swatch. */
  swatchClass: string;
};

export type StackedBarBucket = {
  id: string;
  /** X-axis label, e.g. "Nov 09". */
  label: string;
  startTime: string;
  endTime: string;
  values: Record<string, number>;
};

const props = defineProps<{
  buckets: StackedBarBucket[];
  series: StackedBarSeries[];
  xAxisTitle?: string;
  /** Show every Nth x-axis label so dense ranges stay readable. */
  labelEvery?: number;
}>();

function bucketTotal(bucket: StackedBarBucket) {
  return props.series.reduce((sum, s) => sum + (bucket.values[s.key] ?? 0), 0);
}

const yTicks = computed(() => {
  const max = Math.max(1, ...props.buckets.map(bucketTotal));
  const steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
  const step = steps.find((candidate) => max / candidate <= 4) ?? 1000;
  const top = Math.ceil(max / step) * step;
  const ticks: number[] = [];
  for (let value = 0; value <= top; value += step) ticks.push(value);
  return ticks;
});

const yMax = computed(() => yTicks.value[yTicks.value.length - 1] || 1);

function percent(value: number) {
  return `${(value / yMax.value) * 100}%`;
}

function tooltipFor(bucket: StackedBarBucket) {
  const rows = props.series
    .map((s) => `${s.label}: <strong>${bucket.values[s.key] ?? 0}</strong>`)
    .join('<br>');
  return {
    value:
      `Start Time<br><strong>${bucket.startTime}</strong><br>`
      + `End Time<br><strong>${bucket.endTime}</strong><br>${rows}`,
    escape: false,
  };
}

function showLabel(index: number) {
  const every = props.labelEvery ?? 1;
  return index % every === 0;
}
</script>

<template>
  <div class="flex h-full min-h-0 flex-col gap-sm">
    <div class="flex min-h-40 flex-1">
      <div class="relative w-8 shrink-0" aria-hidden="true">
        <span
          v-for="tick in yTicks"
          :key="tick"
          class="absolute right-xs translate-y-1/2 text-body-xs text-neutral-subtle"
          :style="{ bottom: percent(tick) }"
        >
          {{ tick }}
        </span>
      </div>

      <div class="relative flex-1">
        <div
          v-for="tick in yTicks"
          :key="`grid-${tick}`"
          class="absolute inset-x-0 border-t border-neutral-default_solid"
          :style="{ bottom: percent(tick) }"
          aria-hidden="true"
        />

        <div class="absolute inset-0 flex items-end gap-xs">
          <div
            v-for="bucket in buckets"
            :key="bucket.id"
            v-tooltip.top="tooltipFor(bucket)"
            class="group flex h-full min-w-0 flex-1 cursor-default flex-col justify-end rounded-xs transition-colors hover:bg-neutral-surface_alt"
            role="img"
            :aria-label="`${bucket.label}: ${bucketTotal(bucket)} events`"
          >
            <div class="flex h-full w-full flex-col-reverse px-px">
              <div
                v-for="s in series"
                :key="s.key"
                :class="[s.barClass, 'w-full']"
                :style="{ height: percent(bucket.values[s.key] ?? 0) }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex">
      <div class="w-8 shrink-0" />
      <div class="flex flex-1 gap-xs">
        <span
          v-for="(bucket, index) in buckets"
          :key="`x-${bucket.id}`"
          class="relative min-w-0 flex-1 text-center text-body-xs text-neutral-subtle"
        >
          <span v-if="showLabel(index)" class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
            {{ bucket.label }}
          </span>
          <span class="invisible">.</span>
        </span>
      </div>
    </div>

    <div class="flex flex-col items-center gap-xs">
      <span v-if="xAxisTitle" class="text-body-sm-semi-bold text-neutral-base">{{ xAxisTitle }}</span>
      <div class="flex items-center gap-md">
        <span v-for="s in series" :key="`legend-${s.key}`" class="flex items-center gap-xs text-body-xs text-neutral-subtle">
          <span :class="[s.swatchClass, 'size-2.5 rounded-xs']" />
          {{ s.label }}
        </span>
      </div>
    </div>
  </div>
</template>
