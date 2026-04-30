import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { markRaw, defineComponent, ref, computed, watch } from 'vue';
import {
  AppNavigation,
  CollapsiblePanel,
  PageHeader,
  ToggleSwitch,
  MessageNotification,
  ConfigPageLayout,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';

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
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  WorkflowIcon,
  AiAgentIcon,
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

const AiSettingsOptionB = defineComponent({
  name: 'AiSettingsOptionB',
  components: {
    AppNavigation,
    PvButton: Button,
    PvTag: Tag,
    PvDivider: Divider,
    AdminTopBar,
    PageHeader,
    ConfigPageLayout,
    CollapsiblePanel,
    ToggleSwitch,
    MessageNotification,
    SparklesIcon,
    ChevronRightIcon,
    AiAgentIcon,
  },
  setup() {
    const activeTab = ref('Administrators');
    const sectionCollapsed = ref(false);

    const featureStates = ref({
      assistant: true,
      search: true,
      commands: false,
      mcp: true,
    });

    const previousStates = ref<Record<string, boolean> | null>(null);
    const showUndoToast = ref(false);
    const undoAction = ref('');

    const features = [
      {
        id: 'assistant',
        name: 'AI Assistant',
        isPreview: true,
        description: 'AI Assistant helps you quickly find, manage, and report on your users, devices, and SSO applications from a chat interface, without the need to navigate within the Admin Portal.',
      },
      {
        id: 'search',
        name: 'AI Search',
        isPreview: false,
        description: 'No Customer Data is used to train internal or external AI models. Only the text of your search or question is processed by Google Gemini to create the query that generates the output provided by JumpCloud AI Search.',
      },
      {
        id: 'commands',
        name: 'AI Commands Builder',
        isPreview: false,
        description: 'AI Commands Builder uses AI to generate and optimize commands for managed systems. It improves efficiency and ensures you spend less time troubleshooting by eliminating command-line errors.',
      },
      {
        id: 'mcp',
        name: 'MCP Server',
        isPreview: false,
        description: 'The MCP Server facilitates policy enforcement, system commands, and configuration delivery across managed devices. It ensures secure and reliable communication between the device and the JumpCloud platform.',
      },
    ];

    const enabledCount = computed(() => Object.values(featureStates.value).filter(Boolean).length);
    const totalCount = features.length;

    const enableAll = () => {
      previousStates.value = { ...featureStates.value };
      for (const key of Object.keys(featureStates.value)) {
        featureStates.value[key as keyof typeof featureStates.value] = true;
      }
      undoAction.value = 'Enabled all AI features.';
      showUndoToast.value = true;
    };

    const disableAll = () => {
      previousStates.value = { ...featureStates.value };
      for (const key of Object.keys(featureStates.value)) {
        featureStates.value[key as keyof typeof featureStates.value] = false;
      }
      undoAction.value = 'Disabled all AI features.';
      showUndoToast.value = true;
    };

    const undo = () => {
      if (previousStates.value) {
        featureStates.value = { ...previousStates.value } as typeof featureStates.value;
        previousStates.value = null;
      }
      showUndoToast.value = false;
    };

    const dismissToast = () => {
      showUndoToast.value = false;
      previousStates.value = null;
    };

    const toggleFeature = (featureId: string) => {
      const key = featureId as keyof typeof featureStates.value;
      featureStates.value[key] = !featureStates.value[key];
      showUndoToast.value = false;
    };

    const hasUnsavedChanges = ref(false);
    watch(featureStates, () => { hasUnsavedChanges.value = true; }, { deep: true });

    return {
      menuItems, profileMenuItems, settingsTabs, activeTab, sectionCollapsed,
      featureStates, features, enabledCount, totalCount,
      enableAll, disableAll, undo, dismissToast,
      showUndoToast, undoAction, toggleFeature,
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

            <CollapsiblePanel
              v-model:collapsed="sectionCollapsed"
              toggleable
              header="JumpCloud AI"
            >
              <template #titleicon="iconProps">
                <AiAgentIcon :class="iconProps.class" />
              </template>
              <template #toggleicon="iconProps">
                <ChevronRightIcon :class="iconProps.class" />
              </template>
              <template #actions>
                <span class="text-body-sm text-neutral-subtle flex items-center">{{ enabledCount }} of {{ totalCount }} enabled</span>
                <PvButton
                  label="Disable all"
                  severity="secondary"
                  variant="outlined"
                  size="small"
                  :disabled="enabledCount === 0"
                  @click.stop="disableAll"
                />
                <PvButton
                  label="Enable all"
                  severity="primary"
                  size="small"
                  :disabled="enabledCount === totalCount"
                  @click.stop="enableAll"
                />
              </template>

              <div class="flex flex-col gap-3">
                <p class="text-body-md text-neutral-subtle">
                  Centralized control for all AI-related capabilities within the JumpCloud platform.
                  This section governs how AI is used to enhance platform intelligence, improve workflows, and support administrative operations.
                </p>

                <!-- Undo notification -->
                <MessageNotification v-if="showUndoToast" severity="info" :title="undoAction">
                  <template #actions>
                    <PvButton label="Undo" severity="secondary" variant="outlined" size="small" @click="undo" />
                    <PvButton label="Dismiss" severity="secondary" variant="text" size="small" @click="dismissToast" />
                  </template>
                </MessageNotification>

                <PvDivider />

                <!-- Feature items separated by dividers -->
                <div class="flex flex-col">
                  <template v-for="(feature, index) in features" :key="feature.id">
                    <PvDivider v-if="index > 0" />
                    <div class="flex items-start justify-between gap-4 py-3">
                      <div class="flex flex-col gap-1 flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="text-heading-4 text-neutral-base">{{ feature.name }}</span>
                          <PvTag v-if="feature.isPreview" value="PREVIEW" severity="info" />
                        </div>
                        <p class="text-body-md text-neutral-subtle">{{ feature.description }}</p>
                      </div>
                      <div class="flex items-center gap-3 shrink-0">
                        <PvButton label="Learn More" variant="text" severity="secondary" size="small" />
                        <div class="border-l border-neutral-default_solid h-5"></div>
                        <ToggleSwitch
                          :modelValue="featureStates[feature.id]"
                          @update:modelValue="toggleFeature(feature.id)"
                        />
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </CollapsiblePanel>

          </div>
        </ConfigPageLayout>
      </div>
    </div>
  `,
});

const meta: Meta<typeof AiSettingsOptionB> = {
  title: "Projects/Burak's Playground/Pages/AI Settings - Option B (Bulk Actions)",
  component: AiSettingsOptionB,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiSettingsOptionB>;

export const Default: Story = {};
