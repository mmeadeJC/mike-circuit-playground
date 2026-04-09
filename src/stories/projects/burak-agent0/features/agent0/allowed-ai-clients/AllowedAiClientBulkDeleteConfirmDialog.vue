<script setup lang="ts">
import { computed } from 'vue';
import { SeverityDialog } from '@jumpcloud/circuit/components';

const props = defineProps<{
  count: number;
}>();

const visible = defineModel<boolean>('visible', { required: true });

const emit = defineEmits<{
  confirm: [];
  cancel: [];
}>();

const dialogContent = computed(() => {
  const n = props.count;
  const noun = n === 1 ? 'AI client' : 'AI clients';
  return `You are about to remove **${n}** allowed ${noun}.`;
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
    class="allowed-ai-client-bulk-delete-confirm"
    v-model:visible="visible"
    variant="sev2"
    dialog-title="Remove allowed AI clients"
    message-title="Bulk removal"
    message-content="This affects every selected row."
    :show-message-icon="true"
    :dialog-content="dialogContent"
    action-text="Remove all"
    cancel-text="Cancel"
    @action="handleAction"
    @cancel="handleCancel"
  />
</template>

<style scoped>
.allowed-ai-client-bulk-delete-confirm :deep([role='alert']) {
  @apply w-full;
}
</style>
