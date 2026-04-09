<script setup lang="ts">
import Button from 'primevue/button';
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';

export interface UserTopBarProps {
  /** URL for the admin portal launch link */
  adminPortalHref?: string;
  /** URL for the learn-more link */
  learnMoreHref?: string;
  /** Visible label for the admin portal link */
  adminPortalLabel?: string;
  /** Visible label for the learn-more link */
  learnMoreLabel?: string;
}

withDefaults(defineProps<UserTopBarProps>(), {
  adminPortalHref: '#',
  learnMoreHref: '#',
  adminPortalLabel: 'Launch Admin Portal',
  learnMoreLabel: 'Learn more',
});
</script>

<template>
  <div
    class="h-12 shrink-0 flex items-center justify-end gap-md px-6 border-b border-neutral-default_solid bg-neutral-surface"
  >
    <Button
      as="a"
      :href="adminPortalHref"
      target="_blank"
      rel="noopener noreferrer"
      severity="secondary"
      variant="outlined"
      size="small"
      :label="adminPortalLabel"
      icon-pos="right"
    >
      <template #icon="iconProps">
        <ArrowTopRightOnSquareIcon :class="iconProps.class" />
      </template>
    </Button>
    <a
      :href="learnMoreHref"
      target="_blank"
      rel="noopener noreferrer"
      class="text-body-sm text-link-base hover:text-link-hover active:text-link-active"
    >
      {{ learnMoreLabel }}
    </a>
  </div>
</template>
