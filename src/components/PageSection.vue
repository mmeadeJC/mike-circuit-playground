<script lang="ts">
export { PageSection as default } from '@jumpcloud/circuit/components';
</script>

<template>
  <section class="flex gap-4 items-start">
    <div class="flex-1 flex flex-col gap-1 items-start min-w-0 py-1">
      <h2 class="text-heading-2 text-neutral-base truncate w-full">
        {{ title }}
      </h2>
      <div v-if="$slots.subtitle" class="flex items-center w-full">
        <slot name="subtitle">
          <span class="text-body-xs text-neutral-muted">
            Subtitle text
          </span>
        </slot>
      </div>
    </div>

    <div class="flex items-center gap-2 shrink-0">
      <slot name="actions">
        <Button
          label="Button Label"
          severity="secondary"
          variant="outlined"
        />
      </slot>
    </div>
  </section>
</template>

