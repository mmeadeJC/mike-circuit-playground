import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw, defineComponent, ref, computed, watch } from 'vue';
import {
  AppNavigation,
  CollapsiblePanel,
  PageHeader,
  ToggleSwitch,
  CheckboxWithLabel,
  MessageNotification,
  LinkText,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';

import {
  RocketLaunchIcon,
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  BellIcon,
  UserIcon,
  UsersIcon,
  CommandLineIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowTopRightOnSquareIcon as LearnMoreIcon,
  SparklesIcon,
  XMarkIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';
import ConfigPageLayout from '@/components/layout/page-layouts/ConfigPageLayout.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  WorkflowIcon,
} from '@jumpcloud/icons';

const menuItems = [
  {
    label: 'Get Started',
    leftIcon: markRaw(RocketLaunchIcon),
  },
  {
    label: 'Home',
    leftIcon: markRaw(HomeIcon),
  },
  {
    label: 'Alerts',
    leftIcon: markRaw(BellIcon),
    count: 25,
  },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
      { separator: true },
      { label: 'Active Directories' },
      { label: 'Cloud Directories' },
      { label: 'HR Directories' },
      { label: 'Identity Providers' },
    ],
  },
  {
    label: 'Device Management',
    leftIcon: markRaw(DeviceManagementIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(DeviceListsIcon) },
      { label: 'Device Groups', leftIcon: markRaw(DeviceGroupsIcon) },
      { label: 'Commands', leftIcon: markRaw(CommandLineIcon) },
      { label: 'Asset Management', leftIcon: markRaw(ClipboardDocumentListIcon), isNew: true },
      { separator: true },
      { label: 'Policy Management' },
      { label: 'Patch Management' },
      { label: 'Policy Groups' },
      { label: 'Software Management' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'Access Requests', leftIcon: markRaw(ClipboardDocumentCheckIcon) },
      { label: 'AI & SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'Vault', leftIcon: markRaw(PasswordManagerIcon), isNew: true },
      { separator: true },
      { label: 'LDAP' },
      { label: 'RADIUS' },
    ],
  },
  {
    label: 'Workflows',
    leftIcon: markRaw(WorkflowIcon),
  },
  {
    label: 'Security',
    leftIcon: markRaw(ShieldCheckIcon),
    items: [
      { label: 'Conditional Access Policies' },
      { label: 'Conditional Lists' },
      { label: 'Certificate Authority', isNew: true },
      { label: 'MFA Configurations' },
      { label: 'Device Trust' },
      { label: 'Password Policies' },
    ],
  },
  {
    label: 'Insights',
    leftIcon: markRaw(ChartBarSquareIcon),
    items: [
      { label: 'Reports' },
      { label: 'Directory Insights' },
    ],
  },
  {
    label: 'Settings',
    leftIcon: markRaw(Cog6ToothIcon),
  },
];

const profileMenuItems = [
  {
    label: 'Burak Başcı',
    itemType: 'profile_compact',
    initials: 'BB',
    name: 'Burak Başcı',
    items: [
      { label: 'Admin IT', itemType: 'profile_large', name: 'Admin IT', email: 'admin_it@company.com', initials: 'AT' },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
      { separator: true },
      { label: 'Use Old Navigation', itemType: 'button' },
    ],
  },
];

const settingsTabs = [
  { label: 'Organization Profile' },
  { label: 'Notification Channels' },
  { label: 'Security' },
  { label: 'Administrators' },
  { label: 'Service Accounts' },
  { label: 'Customize Branding' },
];

const AiSettingsOptionD = defineComponent({
  name: 'AiSettingsOptionD',
  components: {
    AppNavigation,
    PvButton: Button,
    PvTag: Tag,
    PvDialog: Dialog,
    AdminTopBar,
    PageHeader,
    ConfigPageLayout,
    CollapsiblePanel,
    ToggleSwitch,
    CheckboxWithLabel,
    MessageNotification,
    LinkText,
    SparklesIcon,
    XMarkIcon,
    ChevronRightIcon,
  },
  setup() {
    const activeTab = ref('Administrators');

    const aiEnabled = ref(false);
    const showWizardDialog = ref(false);
    const wizardStep = ref<'choose' | 'customize'>('choose');

    const featureStates = ref({
      assistant: false,
      search: false,
      commands: false,
      mcp: false,
    });

    const wizardSelections = ref({
      assistant: true,
      search: true,
      commands: true,
      mcp: true,
    });

    const features = [
      {
        id: 'assistant',
        name: 'AI Assistant',
        isPreview: true,
        description: 'Quickly find, manage, and report on your users, devices, and SSO applications directly from a chat interface, without navigating the Admin Portal.',
        fullDescription: 'AI Assistant helps you quickly find, manage, and report on your users, devices, and SSO applications from a chat interface, without the need to navigate within the Admin Portal.',
      },
      {
        id: 'search',
        name: 'AI Search',
        isPreview: false,
        description: 'Answer questions and search for information using AI models. Note: Enable System Insights for optimal results.',
        fullDescription: 'No Customer Data is used to train internal or external AI models. Only the text of your search or question is processed by Google Gemini to create the query that generates the output provided by JumpCloud AI Search.',
        recommendation: 'Enable System Insights for optimal results.',
      },
      {
        id: 'commands',
        name: 'AI Commands Builder',
        isPreview: false,
        description: 'Generate and optimize commands for managed systems, improving efficiency and reducing command-line errors.',
        fullDescription: 'AI Commands Builder uses AI to generate and optimize commands for managed systems. It improves efficiency and ensures you spend less time troubleshooting by eliminating command-line errors.',
      },
      {
        id: 'mcp',
        name: 'MCP Server',
        isPreview: false,
        description: 'Enforce policies, manage system commands, and deliver configurations securely across managed devices.',
        fullDescription: 'The MCP Server facilitates policy enforcement, system commands, and configuration delivery across managed devices. It ensures secure and reliable communication between the device and the JumpCloud platform.',
      },
    ];

    const enabledCount = computed(() => Object.values(featureStates.value).filter(Boolean).length);
    const totalCount = features.length;

    const openWizard = () => {
      wizardStep.value = 'choose';
      wizardSelections.value = { assistant: true, search: true, commands: true, mcp: true };
      showWizardDialog.value = true;
    };

    const enableAllFromWizard = () => {
      for (const key of Object.keys(featureStates.value)) {
        featureStates.value[key as keyof typeof featureStates.value] = true;
      }
      aiEnabled.value = true;
      showWizardDialog.value = false;
    };

    const goToCustomize = () => {
      wizardStep.value = 'customize';
    };

    const goBack = () => {
      wizardStep.value = 'choose';
    };

    const enableCustomFromWizard = () => {
      for (const [key, val] of Object.entries(wizardSelections.value)) {
        featureStates.value[key as keyof typeof featureStates.value] = val;
      }
      aiEnabled.value = true;
      showWizardDialog.value = false;
    };

    const dismissWizard = () => {
      showWizardDialog.value = false;
    };

    const toggleFeature = (featureId: string) => {
      const key = featureId as keyof typeof featureStates.value;
      featureStates.value[key] = !featureStates.value[key];
    };

    const toggleWizardSelection = (featureId: string) => {
      const key = featureId as keyof typeof wizardSelections.value;
      wizardSelections.value[key] = !wizardSelections.value[key];
    };

    const hasUnsavedChanges = ref(false);
    watch(featureStates, () => { hasUnsavedChanges.value = true; }, { deep: true });

    return {
      menuItems, profileMenuItems, settingsTabs, activeTab,
      aiEnabled, showWizardDialog, wizardStep,
      featureStates, wizardSelections, features, enabledCount, totalCount,
      openWizard, enableAllFromWizard, goToCustomize, goBack, enableCustomFromWizard, dismissWizard,
      toggleFeature, toggleWizardSelection,
      hasUnsavedChanges,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="settings"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <AdminTopBar />
        <PageHeader
          title="Settings"
          :icon="$options.components.SparklesIcon"
          :tabs="settingsTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        />

        <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
          <div class="flex flex-col gap-6">

            <!-- Section header -->
            <div class="flex flex-col gap-1">
              <h2 class="text-heading-2 text-neutral-base">JumpCloud AI</h2>
              <p class="text-body-md text-neutral-subtle">
                Centralized control for all AI-related capabilities within the JumpCloud platform.
                This section governs how AI is used to enhance platform intelligence, improve workflows, and support administrative operations.
              </p>
            </div>

            <!-- Not yet enabled: show enablement card -->
            <template v-if="!aiEnabled">
              <CollapsiblePanel>
                <div class="flex flex-col items-center text-center gap-4 py-6">
                  <div class="flex items-center justify-center w-16 h-16 rounded-full bg-info-surface">
                    <SparklesIcon class="w-8 h-8 text-info-base" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <h3 class="text-heading-3 text-neutral-base">Enable JumpCloud AI features</h3>
                    <p class="text-body-md text-neutral-subtle max-w-md">
                      Enable AI-powered capabilities to enhance platform intelligence and automate tasks.
                    </p>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <PvButton label="Enable all AI features" @click="enableAllFromWizard" />
                    <PvButton label="Customize selection" severity="secondary" variant="outlined" @click="openWizard" />
                    <PvButton label="Not now" severity="secondary" variant="text" />
                  </div>
                </div>
              </CollapsiblePanel>
            </template>

            <!-- Already enabled: show feature cards -->
            <template v-else>
              <div class="flex flex-col gap-4">
                <CollapsiblePanel
                  v-for="feature in features"
                  :key="feature.id"
                  :header="feature.name"
                  :toggleable="true"
                >
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <template #actions>
                    <div class="flex items-center gap-sm">
                      <PvTag v-if="feature.isPreview" value="PREVIEW" severity="info" />
                      <ToggleSwitch
                        :modelValue="featureStates[feature.id]"
                        @update:modelValue="toggleFeature(feature.id)"
                        @click.stop
                      />
                      <LinkText label="Learn More" href="#" target="_blank" />
                    </div>
                  </template>
                  <div class="flex flex-col gap-3">
                    <p class="text-body-md text-neutral-subtle">{{ feature.fullDescription }}</p>
                    <div v-if="feature.recommendation" class="flex flex-col gap-1">
                      <p class="text-body-md-semi-bold text-neutral-base">Recommended:</p>
                      <p class="text-body-md text-neutral-subtle">{{ feature.recommendation }}</p>
                    </div>
                  </div>
                </CollapsiblePanel>
              </div>

            </template>

          </div>
        </ConfigPageLayout>

        <!-- Wizard Dialog -->
        <PvDialog
          v-model:visible="showWizardDialog"
          :modal="true"
          :closable="true"
          :draggable="false"
          :style="{ width: '520px' }"
        >
          <template #header>
            <div class="flex items-center gap-2">
              <SparklesIcon class="w-5 h-5 text-info-base" />
              <span class="text-heading-3 text-neutral-base">Enable JumpCloud AI features</span>
            </div>
          </template>

          <!-- Step 1: Choose -->
          <template v-if="wizardStep === 'choose'">
            <p class="text-body-md text-neutral-subtle mb-6">
              Select the AI-powered capabilities you'd like to enable to enhance intelligence and automate tasks.
            </p>
            <div class="flex flex-col gap-4">
              <div
                v-for="feature in features"
                :key="feature.id"
                class="flex items-start gap-3 py-3 border-b border-neutral-default_solid last:border-0"
              >
                <ToggleSwitch
                  :modelValue="wizardSelections[feature.id]"
                  @update:modelValue="toggleWizardSelection(feature.id)"
                />
                <div class="flex flex-col gap-1 flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">{{ feature.name }}</span>
                    <PvTag v-if="feature.isPreview" value="PREVIEW" severity="info" />
                    <PvTag v-if="wizardSelections[feature.id]" value="Yes" severity="success" class="ml-auto" />
                  </div>
                  <p class="text-body-sm text-neutral-subtle">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </template>

          <template #footer>
            <div class="flex items-center justify-between w-full">
              <PvButton
                v-if="wizardStep === 'choose'"
                label="Back"
                severity="secondary"
                variant="outlined"
                @click="dismissWizard"
              />
              <PvButton
                v-if="wizardStep === 'choose'"
                label="Enable AI features"
                severity="danger"
                @click="enableCustomFromWizard"
              />
            </div>
          </template>
        </PvDialog>
      </div>
    </div>
  `,
});

const meta: Meta<typeof AiSettingsOptionD> = {
  title: "Projects/Burak's Playground/Pages/AI Settings - Option D (First-Time Wizard)",
  component: AiSettingsOptionD,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiSettingsOptionD>;

export const Default: Story = {};
