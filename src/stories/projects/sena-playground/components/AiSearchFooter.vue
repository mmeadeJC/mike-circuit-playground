<script setup lang="ts">
import Button from 'primevue/button';
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
import { LinkText } from '@jumpcloud/circuit/components';
import AiSearchActionButton from './AiSearchActionButton.vue';

withDefaults(
  defineProps<{
    variant?: 'default' | 'ai-mode';
  }>(),
  {
    variant: 'default',
  }
);
</script>

<template>
  <div class="border-t border-neutral-default_solid">
    <!-- Default state -->
    <div
      v-if="variant === 'default'"
      class="flex w-full items-center justify-between gap-4 p-4"
    >
      <span class="min-w-0 flex-1 text-body-sm text-neutral-subtle">
        Search, or let AI be your expert
      </span>
      <LinkText
        label="Learn more"
        href="#"
        :show-icon="false"
        custom-class="shrink-0"
      />
    </div>

    <!-- AI-mode state -->
    <div
      v-else-if="variant === 'ai-mode'"
      class="flex w-full items-center justify-between gap-4 p-4"
    >
      <div class="flex flex-row flex-wrap items-center gap-3">
        <Button
          severity="primary"
          variant="outlined"
          size="small"
          label="View All"
          icon-pos="right"
        >
          <template #icon>
            <ArrowTopRightOnSquareIcon class="size-4" />
          </template>
        </Button>
        <Button
          severity="secondary"
          variant="outlined"
          size="small"
          label="Download"
          icon-pos="right"
        >
          <template #icon>
            <ArrowDownTrayIcon class="size-4" />
          </template>
        </Button>
      </div>
      <AiSearchActionButton />
    </div>
  </div>
</template>
