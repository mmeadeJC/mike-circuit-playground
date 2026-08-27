<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import Button from 'primevue/button';
import {
  CloudArrowUpIcon,
  DocumentIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

export interface CircuitUploadFile {
  name: string;
  size: number;
}

const props = withDefaults(
  defineProps<{
    accept?: string;
    uploadLabel?: string;
    buttonLabel?: string;
    replaceButtonLabel?: string;
    supportedFormats?: string;
    multiple?: boolean;
    compactWhenSelected?: boolean;
    /** Storybook preview: force drag-active visuals */
    previewDragState?: boolean;
    previewDragFileName?: string;
  }>(),
  {
    accept: '',
    uploadLabel: 'Drag and drop file here to upload',
    buttonLabel: 'Choose File',
    replaceButtonLabel: 'Replace File',
    supportedFormats:
      'avif, doc, docx, gif, ico, jpeg, jpg, json, key, lic, mov, mp3, mp4, ogg, pdf, png, rar, rtf, svg, txt, wav, webm, webp, xls, .xlsx, .xml, zip',
    multiple: false,
    compactWhenSelected: false,
    previewDragState: false,
    previewDragFileName: '',
  },
);

const modelValue = defineModel<string | null | CircuitUploadFile[]>({ default: null });

const emit = defineEmits<{
  fileContent: [content: string];
}>();

const fileInputRef = ref<HTMLInputElement | null>(null);
const dragActive = ref(false);
const draggedFileName = ref<string | null>(null);
const files = ref<CircuitUploadFile[]>([]);

const isDragActive = computed(() => dragActive.value || props.previewDragState);
const displayDragFileName = computed(
  () => draggedFileName.value ?? props.previewDragFileName ?? null,
);

const hasFiles = computed(() => files.value.length > 0);
const showCompactSelected = computed(
  () => props.compactWhenSelected && !props.multiple && hasFiles.value && !isDragActive.value,
);

const dropzoneClasses = computed(() => {
  if (isDragActive.value) {
    return 'border-brand-primary-base bg-brand-primary-ghost shadow-field-focus';
  }
  return 'border-neutral-default_solid bg-field-base shadow-field-base hover:bg-field-hover';
});

const iconCircleClasses = computed(() =>
  isDragActive.value ? 'bg-brand-primary-ghost' : 'bg-neutral-subtle',
);

const iconClasses = computed(() =>
  isDragActive.value ? 'text-brand-primary-base' : 'text-neutral-base',
);

watch(
  () => modelValue.value,
  (value) => {
    if (props.multiple) {
      files.value = Array.isArray(value) ? value.map((file) => ({ ...file })) : [];
      return;
    }

    const fileName = typeof value === 'string' ? value : null;
    if (!fileName) {
      files.value = [];
      clearFileContent();
      return;
    }

    const existing = files.value.find((file) => file.name === fileName);
    files.value = [{ name: fileName, size: existing?.size ?? 0 }];
  },
  { immediate: true },
);

function emitModelValue() {
  if (props.multiple) {
    modelValue.value = files.value.map((file) => ({ ...file }));
    return;
  }
  modelValue.value = files.value[0]?.name ?? null;
}

function triggerFileInput() {
  fileInputRef.value?.click();
}

function addFiles(incoming: File[]) {
  if (!incoming.length) return;

  if (props.multiple) {
    for (const file of incoming) {
      const duplicate = files.value.some((existing) => existing.name === file.name);
      if (!duplicate) {
        files.value.push({ name: file.name, size: file.size });
      }
    }
    emitModelValue();
    return;
  }

  const file = incoming[0];
  files.value = [{ name: file.name, size: file.size }];
  emitModelValue();
  void readAndEmitFileContent(file);
}

async function readAndEmitFileContent(file: File) {
  try {
    emit('fileContent', await file.text());
  } catch {
    emit('fileContent', '');
  }
}

function clearFileContent() {
  emit('fileContent', '');
}

function handleFileSelect(event: Event) {
  const selected = Array.from((event.target as HTMLInputElement).files ?? []);
  addFiles(selected);
}

function handleDrop(event: DragEvent) {
  event.preventDefault();
  dragActive.value = false;
  draggedFileName.value = null;
  addFiles(Array.from(event.dataTransfer?.files ?? []));
}

function getDraggedFileName(event: DragEvent): string | null {
  const items = event.dataTransfer?.items;
  if (!items?.length) return null;

  for (const item of items) {
    if (item.kind !== 'file') continue;
    return item.getAsFile()?.name ?? null;
  }

  return null;
}

function handleDragOver(event: DragEvent) {
  event.preventDefault();
  dragActive.value = true;
  draggedFileName.value = getDraggedFileName(event);
}

function handleDragLeave(event: DragEvent) {
  const nextTarget = event.relatedTarget as Node | null;
  if (nextTarget && (event.currentTarget as Node).contains(nextTarget)) return;
  dragActive.value = false;
  draggedFileName.value = null;
}

function removeFile(index: number) {
  files.value.splice(index, 1);
  emitModelValue();
  if (!files.value.length) clearFileContent();
  if (fileInputRef.value && !files.value.length) {
    fileInputRef.value.value = '';
  }
}

function formatFileSize(bytes: number): string {
  if (!bytes) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

defineExpose({
  reset() {
    files.value = [];
    emitModelValue();
    clearFileContent();
    if (fileInputRef.value) fileInputRef.value.value = '';
  },
});
</script>

<template>
  <div class="flex flex-col gap-sm">
    <input
      ref="fileInputRef"
      type="file"
      :accept="accept"
      :multiple="multiple"
      class="hidden"
      @change="handleFileSelect"
    />

    <template v-if="showCompactSelected">
      <div class="flex flex-col gap-sm">
        <div class="flex items-center gap-sm">
          <DocumentIcon class="size-5 shrink-0 text-neutral-subtle" />
          <span class="min-w-0 truncate text-body-md text-neutral-base">
            {{ files[0]?.name }}
          </span>
        </div>
        <div class="flex items-start">
          <Button
            :label="replaceButtonLabel"
            size="small"
            @click="triggerFileInput"
          />
        </div>
      </div>
    </template>

    <template v-else>
      <div class="flex items-start">
        <Button
          :label="buttonLabel"
          severity="secondary"
          variant="outlined"
          size="small"
          @click="triggerFileInput"
        />
      </div>

      <div
        class="flex min-h-40 flex-col rounded-sm border border-dashed px-md py-md transition-colors-shadow duration-168"
        :class="dropzoneClasses"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
      >
        <div v-if="hasFiles" class="flex w-full flex-col">
          <div
            v-for="(file, index) in files"
            :key="`${file.name}-${index}`"
            class="flex items-center gap-sm border border-neutral-default_solid bg-neutral-surface px-sm py-xs"
          >
            <DocumentIcon class="size-5 shrink-0 text-neutral-subtle" />
            <span class="min-w-0 truncate text-body-md font-semibold text-neutral-base">
              {{ file.name }}
            </span>
            <span
              v-if="file.size"
              class="h-4 w-px shrink-0 bg-neutral-default_solid"
              aria-hidden="true"
            />
            <span v-if="file.size" class="shrink-0 text-body-md text-neutral-subtle">
              {{ formatFileSize(file.size) }}
            </span>
            <Button
              class="ml-auto shrink-0"
              severity="secondary"
              variant="text"
              size="small"
              :aria-label="`Remove ${file.name}`"
              @click="removeFile(index)"
            >
              <template #icon>
                <XMarkIcon />
              </template>
            </Button>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center gap-sm"
          :class="hasFiles ? 'mt-md py-sm' : 'flex-1 py-xl'"
        >
          <template v-if="!hasFiles || isDragActive">
            <span
              class="flex size-10 items-center justify-center rounded-full"
              :class="iconCircleClasses"
            >
              <CloudArrowUpIcon class="size-5" :class="iconClasses" />
            </span>

            <span
              v-if="isDragActive && displayDragFileName"
              class="rounded-full bg-brand-primary-ghost px-md py-xs text-body-sm text-neutral-base"
            >
              {{ displayDragFileName }}
            </span>
          </template>

          <span class="text-body-md text-neutral-base">{{ uploadLabel }}</span>
        </div>
      </div>

      <p
        v-if="supportedFormats"
        class="text-body-sm text-neutral-subtle m-0"
      >
        Supported formats: {{ supportedFormats }}
      </p>
    </template>
  </div>
</template>
