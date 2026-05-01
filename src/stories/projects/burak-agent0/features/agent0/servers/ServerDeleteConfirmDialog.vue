<script setup lang="ts">
import { computed } from 'vue';
import { SeverityDialog } from '@jumpcloud/circuit/components';

const props = defineProps<{
  /** Optional server display name shown in the title */
  serverName?: string;
}>();

const visible = defineModel<boolean>('visible', { required: true });

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const dialogTitle = 'Delete server';

const messageTitle = 'Used by JumpCloud MCP Connector';

const messageContent =
  'Deleting this server will make it unavailable to apps and connected clients using the JumpCloud MCP Connector.';

const dialogContent = computed(() => {
  const name = props.serverName?.trim();
  const label = name ? name : 'this server';
  return `Are you sure you want to delete **${label}**?`;
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
    v-model:visible="visible"
    variant="sev2"
    :dialog-title="dialogTitle"
    :message-title="messageTitle"
    :message-content="messageContent"
    :show-message-icon="true"
    :dialog-content="dialogContent"
    action-text="Delete"
    cancel-text="Cancel"
    @action="handleAction"
    @cancel="handleCancel"
  />
</template>
