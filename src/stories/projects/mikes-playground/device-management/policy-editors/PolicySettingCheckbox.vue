<script setup lang="ts">
import { CheckboxWithLabel } from '@jumpcloud/circuit/components';
import { InformationCircleIcon } from '@heroicons/vue/24/outline';

/** Policy setting toggle with the legacy info tooltip beside its label. */
defineProps<{
  label: string;
  tooltip: string;
  inputId: string;
}>();

const model = defineModel<boolean>({ required: true });
</script>

<template>
  <CheckboxWithLabel v-model="model" :inputId="inputId" :binary="true">
    <template #label>
      <!-- Inline flow (not flex) so the icon trails the last word when the label wraps. -->
      <span>{{ label
        }}<button
          type="button"
          class="ml-1 inline rounded-full align-middle text-neutral-subtle hover:text-neutral-base"
          aria-label="More information"
          v-tooltip.top="tooltip"
        ><InformationCircleIcon class="inline size-4 align-text-bottom" /></button></span>
    </template>
  </CheckboxWithLabel>
</template>
