<script setup lang="ts">
import { computed } from 'vue';
import defaultArrowSrc from './assets/auth-arrow.png';
import defaultJumpCloudBrandSrc from './assets/jumpcloud-brand.svg';

const props = withDefaults(
  defineProps<{
    /** Shown in the title after “Authorize Tool Access for …” */
    toolName?: string;
    /** Lead paragraph under the title */
    description?: string;
    /** Tool mark in the right illustration box (default: favicon from cursor.com) */
    toolFaviconSrc?: string;
    /** Override arrow image; defaults to bundled auth-arrow.png */
    arrowImageSrc?: string;
    /** Override JumpCloud mark in the left box (default: bundled brand SVG, 32×32) */
    jumpCloudBrandSrc?: string;
  }>(),
  {
    toolName: 'Cursor',
    description:
      'Review the tool connections below and authorize which ones Cursor can access through JumpCloud.',
    toolFaviconSrc: 'https://cursor.com/favicon.svg',
  }
);

const resolvedArrowSrc = computed(() => props.arrowImageSrc ?? defaultArrowSrc);

const resolvedToolFaviconSrc = computed(() => {
  const url = props.toolFaviconSrc?.trim();
  return url || null;
});

const resolvedJumpCloudBrandSrc = computed(() => {
  const url = props.jumpCloudBrandSrc?.trim();
  return url || defaultJumpCloudBrandSrc;
});
</script>

<template>
  <div
    class="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 text-center"
  >
    <div class="flex items-center justify-center gap-8" aria-hidden="true">
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-md bg-neutral-base p-sm shadow-e100"
      >
        <img
          :src="resolvedJumpCloudBrandSrc"
          alt=""
          class="size-8 shrink-0"
          width="32"
          height="32"
        />
      </div>
      <img
        :src="resolvedArrowSrc"
        alt=""
        class="h-6 w-auto max-w-full shrink-0 object-contain"
      />
      <div
        class="flex size-12 shrink-0 items-center justify-center rounded-md bg-neutral-base p-sm shadow-e100"
      >
        <img
          v-if="resolvedToolFaviconSrc"
          :src="resolvedToolFaviconSrc"
          alt=""
          class="size-6"
          width="24"
          height="24"
        />
      </div>
    </div>
    <div class="flex w-full flex-col gap-sm">
      <h1 class="text-heading-1 text-neutral-base m-0">
        Authorize Tool Access for {{ toolName }}
      </h1>
      <p class="text-body-md text-neutral-base m-0">
        {{ description }}
      </p>
    </div>
  </div>
</template>
