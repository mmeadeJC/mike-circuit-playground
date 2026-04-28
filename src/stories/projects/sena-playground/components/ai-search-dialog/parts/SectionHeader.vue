<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import {
  HandThumbDownIcon as HandThumbDownOutline,
  HandThumbUpIcon as HandThumbUpOutline,
} from '@heroicons/vue/24/outline';
import {
  HandThumbDownIcon as HandThumbDownSolid,
  HandThumbUpIcon as HandThumbUpSolid,
} from '@heroicons/vue/24/solid';
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

type FeedbackSelection = 'up' | 'down' | null;

const feedbackSelection = ref<FeedbackSelection>(null);

function toggleThumb(which: 'up' | 'down') {
  feedbackSelection.value = feedbackSelection.value === which ? null : which;
}
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
        variant="text"
        size="small"
        :aria-pressed="feedbackSelection === 'up'"
        :aria-label="thumbUpLabel"
        @click="toggleThumb('up')"
      >
        <template #icon="iconProps">
          <HandThumbUpSolid
            v-if="feedbackSelection === 'up'"
            :class="iconProps.class"
          />
          <HandThumbUpOutline
            v-else
            :class="iconProps.class"
          />
        </template>
      </Button>
      <Button
        type="button"
        severity="secondary"
        variant="text"
        size="small"
        :aria-pressed="feedbackSelection === 'down'"
        :aria-label="thumbDownLabel"
        @click="toggleThumb('down')"
      >
        <template #icon="iconProps">
          <HandThumbDownSolid
            v-if="feedbackSelection === 'down'"
            :class="iconProps.class"
          />
          <HandThumbDownOutline
            v-else
            :class="iconProps.class"
          />
        </template>
      </Button>
    </div>
  </div>
</template>
