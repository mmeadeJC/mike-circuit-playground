<script setup lang="ts">
import EmptyStateContainer from './EmptyStateContainer.vue';
import noResultIllustration from './assets/no-result-found.png';

withDefaults(
  defineProps<{
    /**
     * Empty-state copy. Defaults to the AI search dialog message;
     * pass a shorter string for the default search dialog.
     */
    message?: string;
  }>(),
  {
    message: 'No matches found. Try AI search for broader results.',
  }
);
</script>

<template>
  <EmptyStateContainer :message="message">
    <template #illustration>
      <img
        :src="noResultIllustration"
        alt=""
        class="mx-auto h-auto w-[100px] max-w-full object-contain"
        width="100"
        loading="lazy"
        decoding="async"
      />
    </template>
  </EmptyStateContainer>
</template>
