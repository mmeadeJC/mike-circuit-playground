<script setup lang="ts">
import EmptyStateContainer from './EmptyStateContainer.vue';
import noRecentIllustration from './assets/no-recent-searches.png';
</script>

<template>
  <EmptyStateContainer message="No recent searches yet.">
    <template #illustration>
      <img
        :src="noRecentIllustration"
        alt=""
        class="mx-auto h-auto w-[100px] max-w-full object-contain"
        width="100"
        loading="lazy"
        decoding="async"
      />
    </template>
  </EmptyStateContainer>
</template>
