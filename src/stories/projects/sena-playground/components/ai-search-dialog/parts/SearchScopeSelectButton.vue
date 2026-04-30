<script setup lang="ts">
import SelectButton from 'primevue/selectbutton';
import {
  SCOPE_FILTER_OPTIONS,
  type SearchScopeValue,
} from './searchScopeOptions';

const modelValue = defineModel<SearchScopeValue>({ default: 'all' });

const props = withDefaults(
  defineProps<{
    /** When true, labels show mock counts: `All (17)` (AI dialog typing state). */
    showCounts?: boolean;
    /** When true with showCounts, every scope shows `(0)` instead of mock counts (empty result states). */
    showZeroCounts?: boolean;
  }>(),
  {
    showCounts: false,
    showZeroCounts: false,
  }
);

function optionLabel(option: (typeof SCOPE_FILTER_OPTIONS)[number]): string {
  if (props.showCounts) {
    const count = props.showZeroCounts ? 0 : option.count;
    return `${option.label} (${count})`;
  }
  return option.label;
}
</script>

<template>
  <SelectButton
    v-model="modelValue"
    :options="[...SCOPE_FILTER_OPTIONS]"
    option-label="label"
    option-value="value"
    size="small"
    :fluid="false"
    class="w-fit shrink-0"
  >
    <template #option="{ option }">
      <span>{{ optionLabel(option) }}</span>
    </template>
  </SelectButton>
</template>
