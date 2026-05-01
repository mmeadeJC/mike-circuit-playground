<script setup lang="ts">
import { computed, ref, toRaw, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import type { AllowedAiClient, AllowedAiClientDialogSnapshot, AllowedAiClientSubmitPayload } from '../../shared/types';
import { computeOriginPreview, defaultSnapshot, isSnapshotValid } from '../allowedAiClientOrigin';
import AllowedAiClientFormContent from './AllowedAiClientFormContent.vue';

const props = defineProps<{
  editingEntry: AllowedAiClient | null;
}>();

const visible = defineModel<boolean>('visible', { required: true });

const emit = defineEmits<{
  cancel: [];
  submit: [payload: AllowedAiClientSubmitPayload];
}>();

const snapshot = ref<AllowedAiClientDialogSnapshot>(defaultSnapshot());

/** Plain copy — table rows are reactive proxies; `structuredClone` throws DataCloneError on proxies. */
function copyDialogSnapshot(s: AllowedAiClientDialogSnapshot): AllowedAiClientDialogSnapshot {
  const raw = toRaw(s);
  return {
    mode: raw.mode,
    protocol: raw.protocol,
    singleHost: raw.singleHost,
    singlePort: raw.singlePort,
    patternValue: raw.patternValue,
    localPreset: raw.localPreset,
    localCustom: raw.localCustom,
    customProtocolName: raw.customProtocolName,
    customDomainValue: raw.customDomainValue,
    note: raw.note,
  };
}

watch(
  () => [visible.value, props.editingEntry] as const,
  ([v, entry]) => {
    if (!v || !entry) return;
    const s = entry.snapshot;
    snapshot.value = {
      ...defaultSnapshot(s.mode),
      ...copyDialogSnapshot(s),
    };
  },
);

const preview = computed(() => computeOriginPreview(snapshot.value));

const isPrimaryDisabled = computed(
  () => !isSnapshotValid(snapshot.value) || props.editingEntry == null,
);

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
  const id = props.editingEntry?.id;
  if (id == null) return;
  const noteTrim = snapshot.value.note.trim();
  emit('submit', {
    id,
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
    header="Edit allowed AI client"
    :style="{ width: '720px' }"
  >
    <template #closeicon><XMarkIcon /></template>

    <AllowedAiClientFormContent v-model:snapshot="snapshot" />

    <template #footer>
      <div class="flex items-center flex-1 min-w-0"></div>
      <div class="flex gap-sm shrink-0">
        <Button label="Cancel" severity="secondary" variant="text" @click="handleCancel" />
        <Button label="Save" :disabled="isPrimaryDisabled" @click="handlePrimary" />
      </div>
    </template>
  </Dialog>
</template>
