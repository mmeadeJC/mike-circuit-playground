<script setup lang="ts">
import { computed, ref, unref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import Phase01ServerDialogForm from './Phase01ServerDialogForm.vue';
import type { Phase01ServerFormState } from '../shared/types';

const props = defineProps<{
  visible: boolean;
  mode: 'add' | 'edit';
  editingServerSlug?: string;
  editingServerName?: string;
  serverForm: Phase01ServerFormState;
  authStyleOptions: { label: string; value: string }[];
  addFlowPreset?: 'initial' | 'custom' | string;
  addFlowSeedMcpUrl?: string;
}>();

const emit = defineEmits<{
  'update:visible': [value: boolean];
  cancel: [];
  create: [];
  save: [];
}>();

const formRef = ref<InstanceType<typeof Phase01ServerDialogForm> | null>(null);

const isPrimaryDisabled = computed(() => {
  const inst = formRef.value;
  if (!inst) return true;
  return unref(inst.isPrimaryDisabled);
});

const dialogVisible = computed({
  get: () => props.visible,
  set: (value: boolean) => emit('update:visible', value),
});

const dialogHeader = computed(() => {
  if (props.mode === 'edit') return 'Edit Server';
  return 'Add Server';
});

const primaryLabel = computed(() => (props.mode === 'edit' ? 'Save' : 'Create'));

function handleCancel() {
  emit('cancel');
}

function handlePrimaryAction() {
  if (props.mode === 'edit') emit('save');
  else emit('create');
}
</script>

<template>
  <Dialog
    v-model:visible="dialogVisible"
    :draggable="false"
    modal
    :header="dialogHeader"
    :style="{ width: '720px' }"
  >
    <template #closeicon><XMarkIcon /></template>

    <Phase01ServerDialogForm
      ref="formRef"
      :active="visible"
      :mode="mode"
      :editing-server-slug="editingServerSlug"
      :editing-server-name="editingServerName"
      :server-form="serverForm"
      :auth-style-options="authStyleOptions"
      :add-flow-preset="addFlowPreset"
      :add-flow-seed-mcp-url="addFlowSeedMcpUrl"
    />

    <template #footer>
      <div class="flex items-center flex-1 min-w-0"></div>
      <div class="flex gap-sm shrink-0">
        <Button label="Cancel" severity="secondary" variant="text" @click="handleCancel" />
        <Button :label="primaryLabel" :disabled="isPrimaryDisabled" @click="handlePrimaryAction" />
      </div>
    </template>
  </Dialog>
</template>
