<script setup lang="ts">
import { DetailPageLayout } from '@jumpcloud/circuit/components';
</script>

<template>
  <DetailPageLayout
    class="patch-policy-detail-layout w-full! h-full! min-h-0"
    max-width="1440"
    :show-sidebar="true"
  >
    <slot />
    <template v-if="$slots.sidebar" #sidebar>
      <slot name="sidebar" />
    </template>
  </DetailPageLayout>
</template>
