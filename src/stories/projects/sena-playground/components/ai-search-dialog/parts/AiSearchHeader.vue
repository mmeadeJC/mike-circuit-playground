<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { AiSearchIcon } from '@jumpcloud/icons';
import AiSearchTag from './AiSearchTag.vue';

const modelValue = defineModel<string>({ default: '' });

const props = withDefaults(
  defineProps<{
    placeholder?: string;
    clearLabel?: string;
    /** When true, shows the AI Search tag left of the clear button (e.g. no directory matches). */
    showAiSearchTag?: boolean;
    /** When false, Enter does not emit enterKey (e.g. default search dialog). */
    enableEnterKey?: boolean;
  }>(),
  {
    placeholder: 'Search Users, Devices, Apps...',
    clearLabel: 'Clear search',
    showAiSearchTag: false,
    enableEnterKey: true,
  }
);

const emit = defineEmits<{
  (e: 'clear'): void;
  (e: 'enterKey'): void;
}>();

function handleClear() {
  modelValue.value = '';
  emit('clear');
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && props.enableEnterKey) {
    emit('enterKey');
  }
}
</script>

<template>
  <div
    class="flex w-full min-w-[15rem] items-center border-b border-neutral-default_solid px-md py-sm"
  >
    <div class="flex min-w-0 flex-1 items-center gap-2">
      <slot name="leading">
        <AiSearchIcon
          class="size-4 shrink-0 text-neutral-base"
          aria-hidden="true"
        />
      </slot>
      <div class="min-w-0 flex-1 px-1 py-0.5">
        <InputText
          v-model="modelValue"
          type="text"
          inputmode="search"
          class="w-full min-w-0 !h-auto !rounded-none !border-none !bg-transparent !px-0 !py-0 !shadow-none text-body-md text-field-base placeholder:text-field-placeholder"
          :placeholder="placeholder"
          autocomplete="off"
          @keydown="handleKeydown"
        />
      </div>
    </div>
    <div class="flex shrink-0 items-center gap-2">
      <AiSearchTag v-if="showAiSearchTag" />
      <Button
        type="button"
        class="shrink-0"
        severity="secondary"
        variant="text"
        :aria-label="clearLabel"
        @click="handleClear"
      >
        <template #icon="iconProps">
          <XMarkIcon :class="iconProps.class" />
        </template>
      </Button>
    </div>
  </div>
</template>
