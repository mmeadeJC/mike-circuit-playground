<script setup lang="ts">
import Button from 'primevue/button';
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/outline';

defineProps<{
  data: Record<string, unknown>;
  rowIndex?: number;
  onEdit?: () => void;
  onDelete?: () => void;
}>();
</script>

<template>
  <!-- Stop row-level click / selection from stealing events from action icons (PrimeVue row handler + narrow hit targets). -->
  <div class="flex items-center gap-1 p-2 pb-1.75 h-full" @click.stop>
    <Button
      type="button"
      variant="text"
      severity="secondary"
      size="small"
      aria-label="Edit allowed AI client"
      @click="onEdit?.()"
    >
      <template #icon="iconProps">
        <PencilSquareIcon :class="iconProps.class" />
      </template>
    </Button>
    <Button
      type="button"
      variant="text"
      severity="secondary"
      size="small"
      aria-label="Delete allowed AI client"
      @click="onDelete?.()"
    >
      <template #icon="iconProps">
        <TrashIcon :class="iconProps.class" />
      </template>
    </Button>
  </div>
</template>
