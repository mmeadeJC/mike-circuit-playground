<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import type { AllowedAiClientDialogSnapshot, AllowedAiClientSubmitPayload } from '../../shared/types';
import { computeOriginPreview, defaultSnapshot, isSnapshotValid } from '../allowedAiClientOrigin';
import AllowedAiClientFormContent from './AllowedAiClientFormContent.vue';

const visible = defineModel<boolean>('visible', { required: true });

const emit = defineEmits<{
  cancel: [];
  submit: [payload: AllowedAiClientSubmitPayload];
}>();

const snapshot = ref<AllowedAiClientDialogSnapshot>(defaultSnapshot());

watch(
  () => visible.value,
  (v) => {
    if (v) {
      snapshot.value = defaultSnapshot();
    }
  },
);

const preview = computed(() => computeOriginPreview(snapshot.value));

const isPrimaryDisabled = computed(() => !isSnapshotValid(snapshot.value));

function snapshotPayload(): AllowedAiClientDialogSnapshot {
  const s = snapshot.value;
  return {
    mode: s.mode,
    protocol: s.protocol,
    singleHost: s.singleHost,
    singlePort: s.singlePort,
    patternValue: s.patternValue,
    localPreset: s.localPreset,
    localCustom: s.localCustom,
    customProtocolName: s.customProtocolName,
    customDomainValue: s.customDomainValue,
    note: s.note,
  };
}

function handleCancel() {
  emit('cancel');
  visible.value = false;
}

function handlePrimary() {
  const noteTrim = snapshot.value.note.trim();
  emit('submit', {
    kind: snapshot.value.mode,
    origin: preview.value,
    note: noteTrim || undefined,
    snapshot: snapshotPayload(),
  });
  visible.value = false;
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :draggable="false"
    modal
    header="Add allowed AI client"
    :style="{ width: '720px' }"
  >
    <template #closeicon><XMarkIcon /></template>

    <AllowedAiClientFormContent v-model:snapshot="snapshot" />

    <template #footer>
      <div class="flex items-center flex-1 min-w-0"></div>
      <div class="flex gap-sm shrink-0">
        <Button label="Cancel" severity="secondary" variant="text" @click="handleCancel" />
        <Button label="Add client" :disabled="isPrimaryDisabled" @click="handlePrimary" />
      </div>
    </template>
  </Dialog>
</template>
