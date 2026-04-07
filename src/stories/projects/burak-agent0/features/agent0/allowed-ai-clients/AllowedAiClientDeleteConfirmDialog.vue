<script setup lang="ts">
import { computed } from 'vue';
import { SeverityDialog } from '@jumpcloud/circuit/components';

const props = defineProps<{
  /** Client origin string shown in the message */
  clientOriginLabel?: string;
}>();

const visible = defineModel<boolean>('visible', { required: true });

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const dialogContent = computed(() => {
  const label = props.clientOriginLabel?.trim() || 'this AI client';
  return `Are you sure you want to remove **${label}** from allowed AI clients?`;
});

function handleAction() {
  emit('confirm');
  visible.value = false;
}

function handleCancel() {
  emit('cancel');
  visible.value = false;
}
</script>

<template>
  <SeverityDialog
    class="allowed-ai-client-delete-confirm"
    v-model:visible="visible"
    variant="sev2"
    dialog-title="Remove allowed AI client"
    message-title="Allowed AI clients"
    message-content="Removing a client may block legitimate apps until you add it again."
    :show-message-icon="true"
    :dialog-content="dialogContent"
    action-text="Remove"
    cancel-text="Cancel"
    @action="handleAction"
    @cancel="handleCancel"
  />
</template>

<style scoped>
/* SeverityDialog body uses flex-col + items-start; message would otherwise shrink to content width. */
.allowed-ai-client-delete-confirm :deep([role='alert']) {
  @apply w-full;
}
</style>
