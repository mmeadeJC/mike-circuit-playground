<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { CheckboxWithLabel, FormField } from '@jumpcloud/circuit/components';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import { XMarkIcon, CommandLineIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import type { ServerFormState } from '../shared/types';

interface SsoApp {
  id: string;
  name: string;
  domain: string;
  description: string;
  mcpDocsUrl: string;
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

const ssoApps: SsoApp[] = [
  { id: 'github', name: 'GitHub', domain: 'github.com', description: 'Access repositories, issues, pull requests, and code search via GitHub\'s MCP integration.', mcpDocsUrl: 'https://github.com/github/github-mcp-server' },
  { id: 'slack', name: 'Slack', domain: 'slack.com', description: 'Send messages, manage channels, and search conversations through Slack\'s MCP server.', mcpDocsUrl: 'https://api.slack.com/docs/mcp' },
  { id: 'notion', name: 'Notion', domain: 'notion.so', description: 'Query and update Notion pages, databases, and workspaces via the MCP protocol.', mcpDocsUrl: 'https://developers.notion.com/docs/mcp' },
  { id: 'figma', name: 'Figma', domain: 'figma.com', description: 'Inspect designs, extract tokens, and read component data from Figma files.', mcpDocsUrl: 'https://www.figma.com/developers/mcp' },
  { id: 'stripe', name: 'Stripe', domain: 'stripe.com', description: 'Manage payments, subscriptions, and customer data through Stripe\'s MCP server.', mcpDocsUrl: 'https://docs.stripe.com/mcp' },
  { id: 'salesforce', name: 'Salesforce', domain: 'salesforce.com', description: 'Access CRM records, reports, and automation workflows via Salesforce MCP.', mcpDocsUrl: 'https://developer.salesforce.com/docs/mcp' },
  { id: 'jira', name: 'Jira', domain: 'atlassian.com', description: 'Create and manage issues, sprints, and project boards through Jira\'s MCP integration.', mcpDocsUrl: 'https://developer.atlassian.com/cloud/jira/mcp' },
  { id: 'linear', name: 'Linear', domain: 'linear.app', description: 'Track issues, cycles, and projects using Linear\'s MCP server.', mcpDocsUrl: 'https://linear.app/docs/mcp' },
  { id: 'sentry', name: 'Sentry', domain: 'sentry.io', description: 'Monitor errors, performance issues, and release health via Sentry MCP.', mcpDocsUrl: 'https://docs.sentry.io/mcp' },
  { id: 'asana', name: 'Asana', domain: 'asana.com', description: 'Manage tasks, projects, and team workloads through Asana\'s MCP server.', mcpDocsUrl: 'https://developers.asana.com/docs/mcp' },
  { id: 'datadog', name: 'Datadog', domain: 'datadoghq.com', description: 'Query metrics, logs, and monitors via Datadog\'s MCP integration.', mcpDocsUrl: 'https://docs.datadoghq.com/mcp' },
  { id: 'confluence', name: 'Confluence', domain: 'atlassian.com', description: 'Search and manage wiki pages, spaces, and documentation through Confluence MCP.', mcpDocsUrl: 'https://developer.atlassian.com/cloud/confluence/mcp' },
];

const selectedApp = ref<string | null>(null);
const isCustomMode = ref(false);
const bindUserGroup = ref(true);

const selectedAppData = computed(() =>
  ssoApps.find((app) => app.id === selectedApp.value) ?? null,
);

const appSelectRef = ref();

function getFaviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function handleSelectCustomApp() {
  selectedApp.value = null;
  isCustomMode.value = true;
  appSelectRef.value?.hide();
}

function handleCancel() {
  emit('cancel');
}

function handleCreate() {
  emit('create');
}

watch(selectedApp, (appId) => {
  if (appId) {
    isCustomMode.value = false;
    const app = ssoApps.find((a) => a.id === appId);
    if (app) {
      props.serverForm.name = app.name;
    }
  }
});

const isCustomFormValid = computed(() => {
  const f = props.serverForm;
  return f.targetId.trim() !== '' && f.name.trim() !== '' && f.url.trim() !== '' && f.authConfig.trim() !== '';
});

const isSsoFormValid = computed(() => {
  const f = props.serverForm;
  return selectedApp.value !== null && f.name.trim() !== '' && f.url.trim() !== '' && f.authConfig.trim() !== '';
});

const isCreateDisabled = computed(() => {
  if (isCustomMode.value) return !isCustomFormValid.value;
  return !isSsoFormValid.value;
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
      <FormField label="App">
        <template #default="{ inputId }">
          <Select
            ref="appSelectRef"
            :id="inputId"
            v-model="selectedApp"
            :options="ssoApps"
            optionLabel="name"
            optionValue="id"
            placeholder="Select an app..."
            filter
            filterPlaceholder="Search apps..."
            class="w-full!"
          >
            <template #filtericon>
              <MagnifyingGlassIcon />
            </template>
            <template #option="{ option }">
              <div class="flex items-center gap-sm">
                <img
                  :src="getFaviconUrl(option.domain)"
                  :alt="option.name"
                  class="size-5 rounded-xs"
                />
                <span class="text-body-md">{{ option.name }}</span>
              </div>
            </template>
            <template #value="slotProps">
              <div v-if="slotProps.value && !isCustomMode" class="flex items-center gap-sm">
                <img
                  :src="getFaviconUrl(selectedAppData?.domain ?? '')"
                  :alt="selectedAppData?.name"
                  class="size-5 rounded-xs"
                />
                <span class="text-body-md text-field-base">{{ selectedAppData?.name }}</span>
              </div>
              <div v-else-if="isCustomMode" class="flex items-center gap-sm">
                <CommandLineIcon class="size-5 text-neutral-subtle" />
                <span class="text-body-md text-field-base">Custom App</span>
              </div>
              <span v-else class="text-body-md text-field-placeholder">Select an app...</span>
            </template>
            <template #footer>
              <div class="p-sm border-t border-neutral-default_solid">
                <div
                  class="flex items-center gap-sm px-3 py-2 rounded-sm cursor-pointer hover:bg-state-hover transition-colors"
                  @click="handleSelectCustomApp"
                >
                  <CommandLineIcon class="size-5 text-neutral-subtle" />
                  <span class="text-body-md">Custom App</span>
                </div>
              </div>
            </template>
          </Select>
        </template>
      </FormField>

      <!-- Empty state -->
      <template v-if="!selectedAppData && !isCustomMode">
        <Divider />

        <div class="bg-neutral-surface_deep rounded-sm p-md flex items-center justify-center h-[460px]">
          <span class="text-body-md text-neutral-subtle">Select an app to get started</span>
        </div>
      </template>

      <!-- SSO App flow -->
      <template v-if="selectedAppData && !isCustomMode">
        <Divider />

        <div class="flex flex-col gap-xs">
          <h3 class="text-heading-3 text-neutral-base">{{ selectedAppData.name }}</h3>
          <span class="text-body-md text-neutral-subtle">{{ selectedAppData.description }}</span>
          <a
            :href="selectedAppData.mcpDocsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-body-md font-semibold text-link-base hover:text-link-hover active:text-link-active"
          >
            View MCP Documentation
          </a>
        </div>

        <FormField label="Name" :required="true">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.name" class="w-full" />
          </template>
        </FormField>
        <FormField label="URL" :required="true">
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="serverForm.url" class="w-full" placeholder="e.g. https://mcp.example.com/sse" />
          </template>
        </FormField>
        <FormField label="Auth Config (JSON)" :required="true" helpText="JSON object with authentication configuration">
          <template #default="{ inputId }">
            <Textarea :id="inputId" v-model="serverForm.authConfig" class="w-full" :rows="4" />
          </template>
        </FormField>

        <Divider />

        <CheckboxWithLabel v-model="bindUserGroup" :binary="true">
          <template #label>Bind SSO App user group to the server</template>
          <template #description>Automatically bind the SSO app's user group to this server for streamlined access</template>
        </CheckboxWithLabel>
      </template>

      <!-- Custom App flow -->
      <template v-if="isCustomMode">
        <Divider />

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
