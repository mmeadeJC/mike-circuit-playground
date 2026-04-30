<script setup lang="ts">
import EmptyStateContainer from './EmptyStateContainer.vue';
import noResultIllustration from './assets/no-result-found.png';
</script>

<template>
  <EmptyStateContainer message="No AI result matches found.">
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
