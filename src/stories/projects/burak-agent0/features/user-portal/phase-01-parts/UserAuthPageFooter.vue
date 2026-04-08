<script setup lang="ts">
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';
import Button from 'primevue/button';

withDefaults(
  defineProps<{
    /** Primary action label */
    authorizeLabel?: string;
    /** Supporting copy shown next to the button */
    hint?: string;
    loading?: boolean;
    disabled?: boolean;
  }>(),
  {
    authorizeLabel: 'Authorize tools',
    hint: 'Only the selected tools will be available to Cursor through JumpCloud.',
    loading: false,
    disabled: false,
  }
);

const emit = defineEmits<{
  authorize: [];
}>();
</script>

<template>
  <footer
    class="ml-[-8px] w-[calc(100%+16px)] rounded-lg bg-neutral-bold p-md shadow-e100"
    aria-label="Authorization actions"
  >
    <div class="flex flex-row flex-wrap items-center gap-md">
      <Button
        :label="authorizeLabel"
        :loading="loading"
        :disabled="disabled"
        class="shrink-0"
        @click="emit('authorize')"
      >
        <template #icon="iconProps">
          <CheckBadgeIcon :class="iconProps.class" />
        </template>
      </Button>
      <p class="text-body-md text-neutral-ghost m-0 min-w-0 flex-1 basis-48">
        {{ hint }}
      </p>
    </div>
  </footer>
</template>
