<script setup lang="ts">
import { ref } from 'vue';
import type { FunctionalComponent } from 'vue';
import Button from 'primevue/button';
import { PlusIcon } from '@heroicons/vue/24/outline';

export type PatchPolicyAddOption = {
  label: string;
  value: string;
  icon?: FunctionalComponent<{ class?: string }>;
  isNew?: boolean;
};

defineProps<{
  options: PatchPolicyAddOption[];
}>();

const emit = defineEmits<{
  select: [option: PatchPolicyAddOption];
}>();

const isOpen = ref(false);

/** Same classes as AppNavigation `isNew` badge in NavigationMenuItemContent. */
const newBadgeClass =
  'select-none inline-flex shrink-0 items-center bg-purple-500 text-purple-1000 font-bold text-[0.5rem] leading-none py-0.5 px-1 rounded-xs';

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function handleSelect(option: PatchPolicyAddOption) {
  emit('select', option);
  isOpen.value = false;
}
</script>

<template>
  <div class="relative text-body-md">
    <Button
      label="Add Patch Policy"
      data-test-id="add-patch-policy-trigger"
      @click="toggleMenu"
    >
      <template #icon="iconProps">
        <PlusIcon :class="iconProps.class" />
      </template>
    </Button>

    <div
      v-if="isOpen"
      class="absolute top-full left-0 z-50 mt-1 min-w-[17.5rem] rounded-md border border-neutral-default_alpha bg-neutral-base shadow-e300"
      data-test-id="add-patch-policy-menu"
    >
      <div class="flex max-h-[328px] flex-col gap-0.5 overflow-auto p-1">
        <button
          v-for="option in options"
          :key="option.value"
          type="button"
          class="flex w-full cursor-pointer items-center gap-2 rounded-sm px-3 py-2 text-left transition-colors hover:bg-state-hover active:bg-state-pressed"
          @click="handleSelect(option)"
        >
          <component :is="option.icon" v-if="option.icon" class="size-4 shrink-0" />
          <div class="flex min-w-0 flex-1 items-center justify-between gap-2">
            <span class="text-body-md">{{ option.label }}</span>
            <span v-if="option.isNew" :class="newBadgeClass">NEW</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
