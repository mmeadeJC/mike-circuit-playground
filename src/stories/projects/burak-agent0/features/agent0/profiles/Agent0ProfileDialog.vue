<script setup lang="ts">
import { computed } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import { XMarkIcon } from '@heroicons/vue/24/outline';

interface ProfileFormState {
  profileId: string;
  label: string;
  serverIds: string[];
}

const props = defineProps<{
  visible: boolean;
  editingProfile: { id: number } | null;
  profileForm: ProfileFormState;
  serverOptions: { label: string; value: string }[];
  serversData: { slug: string; name: string }[];
}>();

const emit = defineEmits<{
  'update:visible': [boolean];
  save: [];
}>();

const dialogVisible = computed({
  get: () => props.visible,
  set: (value: boolean) => emit('update:visible', value),
});
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
      <FormField label="Profile ID" helpText="Unique identifier for this profile">
        <template #default="{ inputId }">
          <InputText
            :id="inputId"
            v-model="profileForm.profileId"
            class="w-full"
            :disabled="!!editingProfile"
            placeholder="e.g. engineering"
          />
        </template>
      </FormField>
      <FormField label="Label" helpText="URL-friendly name (used in /mcp/{orgID}/{label} routes)">
        <template #default="{ inputId }">
          <InputText
            :id="inputId"
            v-model="profileForm.label"
            class="w-full"
            placeholder="e.g. engineering"
          />
        </template>
      </FormField>
      <FormField label="Target IDs">
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

      <Divider />
      <div>
        <span class="text-body-sm-semi-bold text-neutral-subtle block mb-2">Available Targets:</span>
        <div class="flex flex-wrap gap-2">
          <Tag
            v-for="server in serversData"
            :key="server.slug"
            :value="server.name + ' (' + server.slug + ')'"
            severity="neutral"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex items-center w-full"></div>
      <div class="flex gap-sm">
        <Button label="Cancel" severity="secondary" variant="text" @click="emit('update:visible', false)" />
        <Button :label="editingProfile ? 'Update' : 'Create'" @click="emit('save')" />
      </div>
    </template>
  </Dialog>
</template>
