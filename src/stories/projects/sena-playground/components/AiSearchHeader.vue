<script setup lang="ts">
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { AiSearchIcon } from '@jumpcloud/icons';

const modelValue = defineModel<string>({ default: '' });

withDefaults(
  defineProps<{
    placeholder?: string;
    clearLabel?: string;
  }>(),
  {
    placeholder: 'Search Users, Devices, Apps...',
    clearLabel: 'Clear search',
  }
);

const emit = defineEmits<{
  (e: 'clear'): void;
}>();

function handleClear() {
  modelValue.value = '';
  emit('clear');
}
</script>

<template>
  <div
    class="flex w-full min-w-[15rem] items-center border-b border-neutral-default_solid px-md py-sm"
  >
    <div class="flex min-w-0 flex-1 items-center gap-2">
      <AiSearchIcon
        class="size-4 shrink-0 text-neutral-base"
        aria-hidden="true"
      />
      <div class="min-w-0 flex-1 px-1 py-0.5">
        <InputText
          v-model="modelValue"
          type="text"
          inputmode="search"
          class="w-full min-w-0 !h-auto !rounded-none !border-none !bg-transparent !px-0 !py-0 !shadow-none text-body-md text-field-base placeholder:text-field-placeholder"
          :placeholder="placeholder"
          autocomplete="off"
        />
      </div>
    </div>
    <Button
      type="button"
      class="shrink-0"
      size="small"
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
</template>
