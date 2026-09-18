<script setup lang="ts">
import { ref } from 'vue';
import { LinkText, MessageNotification } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';

const visible = ref(true);
</script>

<template>
  <MessageNotification
    v-if="visible"
    class="[&_.text-body-sm]:block"
    severity="warn"
    title="This Policy Will Be Deprecated"
    detail="Support for this legacy policy ends December 15, 2026. Legacy policies are not supported on macOS 15 and later. Move to the DDM-based Automatic macOS Updates policy to continue managing software updates."
    closable
    @close="visible = false"
  >
    <template #button>
      <div class="flex shrink-0 flex-wrap items-center gap-sm self-start">
        <LinkText label="Learn More" href="#" target="_blank" />
        <div class="rounded-sm bg-button-secondary-base">
          <Button label="Go To New Policy" severity="secondary" size="small" />
        </div>
      </div>
    </template>
  </MessageNotification>
</template>
