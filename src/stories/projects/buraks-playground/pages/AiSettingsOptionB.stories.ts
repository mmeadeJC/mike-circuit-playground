import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw, defineComponent, ref, computed, watch } from 'vue';
import {
  AppNavigation,
  CollapsiblePanel,
  PageHeader,
  ToggleSwitch,
  MessageNotification,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowTopRightOnSquareIcon as LearnMoreIcon,
  SparklesIcon,
  ArrowPathIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';
import ConfigPageLayout from '../../../../components/layout/page-layouts/ConfigPageLayout.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
      { separator: true },
      { label: 'Active Directory' },
      { label: 'Cloud Directories' },
      { label: 'HR Directories' },
      { label: 'Identity Provider' },
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
      { label: 'Policy Groups' },
      { label: 'Software Deployment' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    count: 1,
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'Access Reports', isNew: true },
      { label: 'SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'Password Management', leftIcon: markRaw(PasswordManagerIcon) },
      { label: 'LDAP' },
      { label: 'RADIUS' },
    ],
  },
  {
    label: 'Security',
    leftIcon: markRaw(ShieldCheckIcon),
    items: [
      { label: 'Conditional Access Policies' },
      { label: 'Conditional List' },
      { label: 'MFA Configurations' },
      { label: 'Device Trust' },
    ],
  },
  {
    label: 'Insights',
    leftIcon: markRaw(ChartBarSquareIcon),
    items: [{ label: 'Reports' }, { label: 'Directory Insights' }],
  },
  {
    label: 'Settings',
    leftIcon: markRaw(Cog6ToothIcon),
    items: [{ label: 'Reports' }],
  },
  { label: 'Alert', leftIcon: markRaw(BellIcon), count: 23, isNew: true },
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
    TopBar,
    PageHeader,
    ConfigPageLayout,
    CollapsiblePanel,
    ToggleSwitch,
    MessageNotification,
    SparklesIcon,
    ArrowPathIcon,
    ChevronRightIcon,
  },
  setup() {
    const activeTab = ref('Administrators');

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
        recommendation: 'Enable System Insights for optimal results.',
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

    const resetToRecommended = () => {
      previousStates.value = { ...featureStates.value };
      featureStates.value.assistant = true;
      featureStates.value.search = true;
      featureStates.value.commands = true;
      featureStates.value.mcp = true;
      undoAction.value = 'Reset to recommended defaults.';
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
      menuItems, profileMenuItems, settingsTabs, activeTab,
      featureStates, features, enabledCount, totalCount,
      enableAll, disableAll, resetToRecommended, undo, dismissToast,
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
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />
        <PageHeader
          title="Settings"
          :icon="$options.components.SparklesIcon"
          :tabs="settingsTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        />

        <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
          <div class="flex flex-col gap-6">

            <!-- Section header with bulk actions -->
            <div class="flex flex-col gap-1">
              <div class="flex items-center justify-between">
                <h2 class="text-heading-2 text-neutral-base">JumpCloud AI</h2>
                <div class="flex items-center gap-2">
                  <PvButton
                    label="Reset to recommended"
                    severity="secondary"
                    variant="text"
                    size="small"
                    @click="resetToRecommended"
                  >
                    <template #icon>
                      <ArrowPathIcon class="w-4 h-4" />
                    </template>
                  </PvButton>
                  <PvButton
                    label="Disable all"
                    severity="secondary"
                    variant="outlined"
                    size="small"
                    :disabled="enabledCount === 0"
                    @click="disableAll"
                  />
                  <PvButton
                    label="Enable all"
                    severity="primary"
                    size="small"
                    :disabled="enabledCount === totalCount"
                    @click="enableAll"
                  />
                </div>
              </div>
              <p class="text-body-md text-neutral-subtle">
                Centralized control for all AI-related capabilities within the JumpCloud platform.
                This section governs how AI is used to enhance platform intelligence, improve workflows, and support administrative operations.
              </p>
            </div>

            <!-- Undo notification -->
            <MessageNotification v-if="showUndoToast" severity="info" :title="undoAction">
              <template #actions>
                <PvButton label="Undo" severity="secondary" variant="outlined" size="small" @click="undo" />
                <PvButton label="Dismiss" severity="secondary" variant="text" size="small" @click="dismissToast" />
              </template>
            </MessageNotification>

            <!-- Feature cards -->
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
                  <PvTag v-if="feature.isPreview" value="PREVIEW" severity="info" />
                  <ToggleSwitch
                    :modelValue="featureStates[feature.id]"
                    @update:modelValue="toggleFeature(feature.id)"
                    @click.stop
                  />
                  <PvButton label="Learn More" variant="outlined" severity="secondary" size="small" />
                </template>
                <div class="flex flex-col gap-3">
                  <p class="text-body-md text-neutral-subtle">{{ feature.description }}</p>
                  <div v-if="feature.recommendation" class="flex flex-col gap-1">
                    <p class="text-body-md-semi-bold text-neutral-base">Recommended:</p>
                    <p class="text-body-md text-neutral-subtle">{{ feature.recommendation }}</p>
                  </div>
                </div>
              </CollapsiblePanel>
            </div>

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
