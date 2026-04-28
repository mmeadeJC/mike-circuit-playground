<script setup lang="ts">
import Button from 'primevue/button';
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/vue/24/outline';
import { AiSearchIcon } from '@jumpcloud/icons';

withDefaults(
  defineProps<{
    title: string;
    showIcon?: boolean;
    showFeedback?: boolean;
    thumbUpLabel?: string;
    thumbDownLabel?: string;
  }>(),
  {
    showIcon: true,
    showFeedback: false,
    thumbUpLabel: 'Thumbs up',
    thumbDownLabel: 'Thumbs down',
  }
);
</script>

<template>
  <div
    class="flex w-full min-w-0 shrink-0 items-center gap-2 px-2 py-2"
  >
    <div class="flex min-w-0 flex-1 items-center gap-2">
      <div
        v-if="showIcon"
        class="flex h-auto w-auto shrink-0 items-center justify-center"
      >
        <AiSearchIcon
          class="size-4 shrink-0 text-neutral-base"
          aria-hidden="true"
        />
      </div>
      <div class="min-w-0 flex-1 truncate text-heading-4 text-neutral-base">
        {{ title }}
      </div>
    </div>
    <div
      v-if="showFeedback"
      class="flex h-auto w-auto shrink-0 flex-wrap items-center justify-end gap-2"
    >
      <Button
        type="button"
        severity="secondary"
        variant="outlined"
        size="small"
        :aria-label="thumbUpLabel"
      >
        <template #icon="iconProps">
          <HandThumbUpIcon :class="iconProps.class" />
        </template>
      </Button>
      <Button
        type="button"
        severity="secondary"
        variant="outlined"
        size="small"
        :aria-label="thumbDownLabel"
      >
        <template #icon="iconProps">
          <HandThumbDownIcon :class="iconProps.class" />
        </template>
      </Button>
    </div>
  </div>
</template>
