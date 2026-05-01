<script setup lang="ts">
import Button from 'primevue/button';
import { ArrowDownTrayIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
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
      class="flex w-full flex-wrap items-center gap-2 p-4"
    >
      <span class="min-w-0 text-body-sm text-neutral-subtle">
        Have questions? Search through our JumpCloud Help Center.
      </span>
      <a
        href="#"
        class="inline-flex max-w-fit shrink-0 items-center gap-0.5 no-underline text-body-sm-link text-link-base transition-colors hover:text-link-hover hover:underline hover:underline-offset-2 active:text-link-active active:underline active:underline-offset-2"
      >
        Get Support
      </a>
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
