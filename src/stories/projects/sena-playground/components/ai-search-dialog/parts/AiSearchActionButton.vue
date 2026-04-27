<script setup lang="ts">
import { computed } from 'vue';
import Button from 'primevue/button';

withDefaults(
  defineProps<{
    label?: string;
    disabled?: boolean;
  }>(),
  {
    label: 'Open in AI Assistant',
    disabled: false,
  }
);

defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const buttonPt = computed(() => ({
  root: {
    class: [
      'flex min-w-0 shrink-0 items-center justify-center gap-0 rounded-sm p-1',
      'bg-gradient-to-r from-[#55B3FF] to-[#904CFF]',
      'active:from-[#3F8FFF] active:to-[#6F2FFF]',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
  },
}));
</script>

<template>
  <Button
    type="button"
    :disabled="disabled"
    :aria-label="label"
    :pt="buttonPt"
    @click="$emit('click', $event)"
  >
    <span
      class="h-auto px-1 text-body-sm font-semibold text-badge-contrast-text whitespace-nowrap"
      >{{ label }}</span
    >
  </Button>
</template>
