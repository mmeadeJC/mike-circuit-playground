<script setup lang="ts">
import { FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import type { ServerFormState } from '../shared/types';

defineProps<{
  serverForm: ServerFormState;
  authStyleOptions: { label: string; value: string }[];
}>();

const emit = defineEmits<{
  cancel: [];
  save: [];
}>();
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="flex-1 overflow-auto p-4 border-t border-b border-neutral-default_solid">
      <div class="flex flex-col gap-4">
        <FormField label="Target ID" helpText="Unique identifier for this target">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.targetId" class="w-full" disabled />
          </template>
        </FormField>
        <FormField label="Name">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.name" class="w-full" />
          </template>
        </FormField>
        <FormField label="URL">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.url" class="w-full" />
          </template>
        </FormField>
        <FormField label="Auth Style">
          <template #default="{ inputId }">
            <Select
              :id="inputId"
              v-model="serverForm.authStyle"
              :options="authStyleOptions"
              optionLabel="label"
              optionValue="value"
              class="w-full"
            />
          </template>
        </FormField>
        <FormField label="Auth Config (JSON)" helpText="JSON object with authentication configuration">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="serverForm.authConfig" class="w-full" :rows="6" />
          </template>
        </FormField>
      </div>
    </div>
    <div class="flex items-center justify-end gap-3 p-4 shrink-0">
      <Button label="Cancel" severity="secondary" variant="outlined" @click="emit('cancel')" />
      <Button label="Save" @click="emit('save')" />
    </div>
  </div>
</template>
