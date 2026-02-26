<template>
  <div class="flex gap-2 items-start">
    <div
      :class="labelClasses"
      :data-test-id="testId || undefined"
    >
      {{ label }}
    </div>
    <div class="flex-1 flex items-center gap-1">
      <component
        :is="icon"
        v-if="icon"
        :class="iconClasses"
      />
      <slot>
        <span
          :class="valueClasses"
        >
          {{ displayValue }}
        </span>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';

defineOptions({
  name: 'DetailsKeyValue',
});

interface Props {
  label: string;
  value?: string | null;
  icon?: Component;
  iconColor?: string;
  testId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: undefined,
  icon: undefined,
  iconColor: undefined,
  testId: undefined,
});

const EMPTY_TEXT = '--';

const displayValue = computed(() => props.value || EMPTY_TEXT);

const valueClasses = computed(() => [
  'text-body-md',
  'py-0.5',
  props.value ? 'text-neutral-base' : 'text-neutral-ghost',
]);

const labelClasses = computed(() => [
  'w-48',
  'shrink-0',
  'text-body-md-semi-bold',
  'text-neutral-base',
  'min-h-6',
  'py-0.5',
  'flex',
  'items-start',
]);

const iconClasses = computed(() => [
  'w-5',
  'h-5',
  props.iconColor || '',
]);
</script>
