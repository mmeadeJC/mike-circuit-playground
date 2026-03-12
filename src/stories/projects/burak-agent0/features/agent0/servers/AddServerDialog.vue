<script setup lang="ts">
import { computed, ref } from 'vue';
import { CheckboxWithLabel, FormField } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import type { ServerFormState } from '../shared/types';

interface SsoApp {
  id: string;
  name: string;
  domain: string;
}

const props = defineProps<{
  visible: boolean;
  serverForm: ServerFormState;
  authStyleOptions: { label: string; value: string }[];
}>();

const emit = defineEmits<{
  'update:visible': [value: boolean];
  cancel: [];
  create: [];
}>();

const modeOptions = ['Select From SSO Apps', 'Custom Server'];
const selectedMode = ref('Select From SSO Apps');

const ssoApps: SsoApp[] = [
  { id: 'github', name: 'GitHub', domain: 'github.com' },
  { id: 'slack', name: 'Slack', domain: 'slack.com' },
  { id: 'notion', name: 'Notion', domain: 'notion.so' },
  { id: 'figma', name: 'Figma', domain: 'figma.com' },
  { id: 'stripe', name: 'Stripe', domain: 'stripe.com' },
  { id: 'salesforce', name: 'Salesforce', domain: 'salesforce.com' },
  { id: 'jira', name: 'Jira', domain: 'atlassian.com' },
  { id: 'linear', name: 'Linear', domain: 'linear.app' },
  { id: 'sentry', name: 'Sentry', domain: 'sentry.io' },
  { id: 'asana', name: 'Asana', domain: 'asana.com' },
  { id: 'datadog', name: 'Datadog', domain: 'datadoghq.com' },
  { id: 'confluence', name: 'Confluence', domain: 'atlassian.com' },
];

const searchQuery = ref('');
const selectedApp = ref<string | null>(null);
const bindUserGroup = ref(true);

const filteredApps = computed(() => {
  if (!searchQuery.value) return ssoApps;
  const q = searchQuery.value.toLowerCase();
  return ssoApps.filter((app) => app.name.toLowerCase().includes(q));
});

function getFaviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function selectApp(appId: string) {
  selectedApp.value = selectedApp.value === appId ? null : appId;
}

function handleCancel() {
  emit('cancel');
}

function handleCreate() {
  emit('create');
}

const isCustomFormValid = computed(() => {
  const f = props.serverForm;
  return f.targetId.trim() !== '' && f.name.trim() !== '' && f.url.trim() !== '' && f.authConfig.trim() !== '';
});

const isCreateDisabled = computed(() => {
  if (selectedMode.value === 'Select From SSO Apps') return !selectedApp.value;
  return !isCustomFormValid.value;
});

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
    header="Add Server"
    :style="{ width: '720px' }"
  >
    <template #closeicon><XMarkIcon /></template>

    <div class="flex flex-col gap-md">
      <div class="flex items-center gap-md">
        <SelectButton
          v-model="selectedMode"
          :options="modeOptions"
          :allowEmpty="false"
        />

        <IconField v-if="selectedMode === 'Select From SSO Apps'" class="flex-1">
          <InputIcon>
            <MagnifyingGlassIcon />
          </InputIcon>
          <InputText
            v-model="searchQuery"
            placeholder="Search apps..."
            aria-label="Search SSO apps"
          />
        </IconField>
      </div>

      <template v-if="selectedMode === 'Select From SSO Apps'">

        <div class="grid grid-cols-4 gap-4">
          <div
            v-for="app in filteredApps"
            :key="app.id"
            class="flex flex-col items-center gap-2 p-3 rounded-md bg-neutral-surface shadow-e100 cursor-pointer transition-colors border-2"
            :class="[
              selectedApp === app.id
                ? 'border-branding-base'
                : 'border-transparent hover:bg-neutral-surface_alt',
            ]"
            @click="selectApp(app.id)"
          >
            <img
              :src="getFaviconUrl(app.domain)"
              :alt="app.name"
              class="size-10 rounded"
            />
            <span class="text-body-sm font-semibold text-neutral-base">{{ app.name }}</span>
          </div>
        </div>

        <div v-if="filteredApps.length === 0" class="flex items-center justify-center py-8">
          <span class="text-body-md text-neutral-subtle">No apps match your search</span>
        </div>

        <Divider />

        <CheckboxWithLabel v-model="bindUserGroup" :binary="true">
          <template #label>Bind SSO App user group to the server</template>
          <template #description>Automatically bind the SSO app's user group to this server for streamlined access</template>
        </CheckboxWithLabel>
      </template>

      <template v-if="selectedMode === 'Custom Server'">
        <FormField label="Target ID" :required="true" helpText="Unique identifier for this target">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.targetId" class="w-full" placeholder="e.g. my-server" />
          </template>
        </FormField>
        <FormField label="Name" :required="true">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.name" class="w-full" />
          </template>
        </FormField>
        <FormField label="URL" :required="true">
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
        <FormField label="Auth Config (JSON)" :required="true" helpText="JSON object with authentication configuration">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="serverForm.authConfig" class="w-full" :rows="5" />
          </template>
        </FormField>
      </template>
    </div>

    <template #footer>
      <div class="flex items-center flex-1 min-w-0"></div>
      <div class="flex gap-sm shrink-0">
        <Button label="Cancel" severity="secondary" variant="text" @click="handleCancel" />
        <Button label="Create" :disabled="isCreateDisabled" @click="handleCreate" />
      </div>
    </template>
  </Dialog>
</template>
