<script setup lang="ts">
import { FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import { ChevronRightIcon } from '@heroicons/vue/24/outline';
import type { Phase01ServerFormState } from '../shared/types';

defineProps<{
  serverForm: Phase01ServerFormState;
  /** Unique suffix for aria ids when multiple instances exist on one view */
  idSuffix: string;
}>();

const collapsed = defineModel<boolean>('collapsed', { required: true });

function toggleCollapsed() {
  collapsed.value = !collapsed.value;
}
</script>

<template>
  <div class="mt-md flex flex-col overflow-hidden rounded-md bg-neutral-bold">
    <div class="flex w-full shrink-0 cursor-pointer items-center gap-xs p-md"
      role="button"
      tabindex="0"
      :aria-expanded="!collapsed"
      :aria-controls="`phase01-oauth-adv-region-${idSuffix}`"
      :aria-labelledby="`phase01-oauth-adv-heading-${idSuffix}`"
      @click="toggleCollapsed"
      @keydown.enter.prevent="toggleCollapsed"
      @keydown.space.prevent="toggleCollapsed"
    >
      <ChevronRightIcon
        class="h-5 shrink-0 duration-168 ease-out text-neutral-base"
        :class="collapsed ? '' : 'rotate-90'"
      />
      <h4
        :id="`phase01-oauth-adv-heading-${idSuffix}`"
        class="text-heading-4 text-neutral-base m-0"
      >
        Advanced fields
      </h4>
    </div>

    <!-- Persistent grid + row track transition (not v-if): open/close both interpolate 0fr↔1fr -->
    <div
      :id="`phase01-oauth-adv-region-${idSuffix}`"
      class="grid min-h-0 overflow-hidden transition-[grid-template-rows] duration-168 ease-out"
      :class="collapsed ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'"
      role="region"
      :aria-hidden="collapsed"
      :aria-labelledby="`phase01-oauth-adv-heading-${idSuffix}`"
    >
      <div class="min-h-0 overflow-hidden" :inert="collapsed">
        <div class="flex flex-col gap-md pt-0 px-md pb-md">
          <FormField label="Client ID">
            <template #default="{ inputId }">
              <InputText :id="inputId" v-model="serverForm.oauthClientId" class="w-full" />
            </template>
          </FormField>
          <FormField label="Scope">
            <template #default="{ inputId }">
              <InputText :id="inputId" v-model="serverForm.oauthScope" class="w-full" />
            </template>
          </FormField>
        </div>
      </div>
    </div>
  </div>
</template>
