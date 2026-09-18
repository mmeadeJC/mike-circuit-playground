<script setup lang="ts">
import { LinkText, MessageNotification } from '@jumpcloud/circuit/components';
</script>

<template>
  <div class="flex w-full min-w-0 max-w-full flex-col gap-md">
    <MessageNotification
      severity="info"
      detail="JumpCloud MDM enrollment for macOS 11.0+"
    >
      <template #button>
        <LinkText label="Learn more" href="#" target="_blank" />
      </template>
    </MessageNotification>

    <div class="flex flex-col gap-md">
      <h3 class="text-heading-3 text-neutral-base m-0">macOS</h3>
      <div class="flex flex-col gap-xs w-full">
        <span class="text-body-md-semi-bold text-neutral-base">Minimum Supported Version</span>
        <p class="text-body-md text-neutral-base m-0">macOS 11.0 or later</p>
      </div>
    </div>
  </div>
</template>
