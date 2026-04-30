<script setup lang="ts">
defineProps<{
  /** Status message shown below the illustration */
  message: string;
}>();
</script>

<template>
  <div class="px-2">
    <div
      class="rounded-md border border-dashed border-neutral-strong_solid px-4 py-8"
    >
      <div
        class="flex flex-col items-center justify-center gap-sm text-center"
      >
        <div
          class="flex w-[100px] shrink-0 flex-col items-center justify-center"
        >
          <slot name="illustration" />
        </div>
        <p class="m-0 text-body-sm text-neutral-muted" role="status">
          {{ message }}
        </p>
      </div>
    </div>
  </div>
</template>
