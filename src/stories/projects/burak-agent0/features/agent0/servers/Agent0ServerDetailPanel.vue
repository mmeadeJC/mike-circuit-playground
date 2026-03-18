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
  isAddMode?: boolean;
}>();

const emit = defineEmits<{
  cancel: [];
  save: [];
}>();
</script>

<template>
  <div class="flex flex-col gap-md">
    <FormField label="Target ID" helpText="Unique identifier for this target">
      <template #default="{ inputId }">
        <InputText :id="inputId" v-model="serverForm.targetId" class="w-full" :disabled="!isAddMode" :placeholder="isAddMode ? 'e.g. my-server' : undefined" />
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
        <Textarea :id="inputId" v-model="serverForm.authConfig" class="w-full" :rows="5" />
      </template>
    </FormField>
    <div class="flex items-center justify-end gap-sm pt-sm">
      <Button label="Cancel" severity="secondary" variant="text" @click="emit('cancel')" />
      <Button :label="isAddMode ? 'Create' : 'Save'" @click="emit('save')" />
    </div>
  </div>
</template>
