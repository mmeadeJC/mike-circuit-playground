<script setup lang="ts">
import { RadioButtonWithLabel } from '@jumpcloud/circuit/components';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import { InformationCircleIcon } from '@heroicons/vue/24/outline';

defineProps<{
  label: string;
  tooltip?: string;
  options: { label: string; value: string }[];
  inputIdPrefix: string;
}>();

const model = defineModel<string>({ required: true });
</script>

<template>
  <div class="flex flex-col gap-sm">
    <span class="text-body-md-semi-bold text-neutral-base">
      {{ label
      }}<button
        v-if="tooltip"
        type="button"
        class="ml-1 inline rounded-full align-middle text-neutral-subtle hover:text-neutral-base"
        aria-label="More information"
        v-tooltip.top="tooltip"
      ><InformationCircleIcon class="inline size-4 align-text-bottom" /></button>
    </span>

    <RadioButtonGroup v-model="model" class="flex flex-wrap gap-md">
      <RadioButtonWithLabel
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :inputId="`${inputIdPrefix}-${option.value}`"
      >
        <template #label>{{ option.label }}</template>
      </RadioButtonWithLabel>
    </RadioButtonGroup>
  </div>
</template>
