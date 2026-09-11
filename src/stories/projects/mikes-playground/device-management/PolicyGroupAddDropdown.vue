<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import { PlusIcon } from '@heroicons/vue/24/outline';

export type PolicyGroupAddOption = {
  label: string;
  value: string;
};

defineProps<{
  options: PolicyGroupAddOption[];
}>();

const emit = defineEmits<{
  select: [option: PolicyGroupAddOption];
}>();

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function handleSelect(option: PolicyGroupAddOption) {
  emit('select', option);
  isOpen.value = false;
}
</script>

<template>
  <div class="relative text-body-md">
    <Button
      label="Add Policy Group"
      data-test-id="add-policy-group-trigger"
      @click="toggleMenu"
    >
      <template #icon="iconProps">
        <PlusIcon :class="iconProps.class" />
      </template>
    </Button>

    <div
      v-if="isOpen"
      class="absolute top-full left-0 z-50 mt-1 min-w-[17.5rem] rounded-md border border-neutral-default_alpha bg-neutral-base shadow-e300"
      data-test-id="add-policy-group-menu"
    >
      <div class="flex max-h-[328px] flex-col gap-0.5 overflow-auto p-1">
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          class="flex w-full cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-left transition-colors hover:bg-state-hover active:bg-state-pressed"
          @click="handleSelect(option)"
        >
          <span class="text-body-md">{{ option.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
