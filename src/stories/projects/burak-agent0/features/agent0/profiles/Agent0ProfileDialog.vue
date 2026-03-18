<script setup lang="ts">
import { computed } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';

interface ProfileFormState {
  name: string;
  serverIds: string[];
  userGroupIds: string[];
}

const props = defineProps<{
  visible: boolean;
  editingProfile: { id: number } | null;
  profileForm: ProfileFormState;
  serverOptions: { label: string; value: string }[];
  userGroupOptions: { label: string; value: string }[];
}>();

const emit = defineEmits<{
  'update:visible': [boolean];
  save: [];
}>();

const dialogVisible = computed({
  get: () => props.visible,
  set: (value: boolean) => emit('update:visible', value),
});

const isNameValid = computed(() => props.profileForm.name.trim().length > 0);
</script>

<template>
  <Dialog
    v-model:visible="dialogVisible"
    :draggable="false"
    modal
    :header="editingProfile ? 'Edit Profile' : 'Add Profile'"
    :style="{ width: '560px' }"
  >
    <template #closeicon><XMarkIcon /></template>
    <div class="flex flex-col gap-4">
      <FormField label="Profile Name" :required="true">
        <template #default="{ inputId }">
          <InputText
            :id="inputId"
            v-model="profileForm.name"
            class="w-full"
            placeholder="e.g. Engineering"
          />
        </template>
      </FormField>
      <FormField label="Servers">
        <template #default="{ inputId }">
          <MultiSelect
            :id="inputId"
            v-model="profileForm.serverIds"
            :options="serverOptions"
            optionLabel="label"
            optionValue="value"
            display="chip"
            class="w-full"
            placeholder="Select servers..."
          />
        </template>
      </FormField>
      <FormField label="User Groups">
        <template #default="{ inputId }">
          <MultiSelect
            :id="inputId"
            v-model="profileForm.userGroupIds"
            :options="userGroupOptions"
            optionLabel="label"
            optionValue="value"
            display="chip"
            class="w-full"
            placeholder="Select user groups..."
          />
        </template>
      </FormField>
    </div>
    <template #footer>
      <div class="flex items-center w-full"></div>
      <div class="flex gap-sm">
        <Button label="Cancel" severity="secondary" variant="text" @click="emit('update:visible', false)" />
        <Button :label="editingProfile ? 'Update' : 'Create'" :disabled="!isNameValid" @click="emit('save')" />
      </div>
    </template>
  </Dialog>
</template>
