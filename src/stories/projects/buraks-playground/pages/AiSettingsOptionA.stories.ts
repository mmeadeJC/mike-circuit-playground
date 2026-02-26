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
      { label: 'Software Management' },
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

const AiSettingsOptionA = defineComponent({
  name: 'AiSettingsOptionA',
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
    ChevronRightIcon,
  },
  setup() {
    const activeTab = ref('Administrators');

    const masterEnabled = ref(true);

    const featureOverrides = ref({
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

    const enabledCount = computed(() => {
      if (!masterEnabled.value) return 0;
      return Object.values(featureOverrides.value).filter(Boolean).length;
    });

    const totalCount = features.length;

    const isFeatureEffectivelyEnabled = (featureId: string) => {
      return masterEnabled.value && featureOverrides.value[featureId as keyof typeof featureOverrides.value];
    };

    const toggleFeature = (featureId: string) => {
      const key = featureId as keyof typeof featureOverrides.value;
      featureOverrides.value[key] = !featureOverrides.value[key];
    };

    const hasUnsavedChanges = ref(false);

    watch([masterEnabled, featureOverrides], () => {
      hasUnsavedChanges.value = true;
    }, { deep: true });

    const saveChanges = () => {
      hasUnsavedChanges.value = false;
    };

    const cancelChanges = () => {
      hasUnsavedChanges.value = false;
    };

    return {
      menuItems, profileMenuItems, settingsTabs, activeTab,
      masterEnabled, featureOverrides, features, enabledCount, totalCount,
      isFeatureEffectivelyEnabled, toggleFeature,
      hasUnsavedChanges, saveChanges, cancelChanges,
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

            <!-- Section header with master toggle -->
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-3">
                <h2 class="text-heading-2 text-neutral-base">JumpCloud AI</h2>
                <ToggleSwitch v-model="masterEnabled" />
                <span class="text-body-sm text-neutral-subtle">
                  {{ enabledCount }} of {{ totalCount }} features enabled
                </span>
              </div>
              <p class="text-body-md text-neutral-subtle">
                Centralized control for all AI-related capabilities within the JumpCloud platform.
                This section governs how AI is used to enhance platform intelligence, improve workflows, and support administrative operations.
              </p>
            </div>

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
                  <div class="flex items-center gap-sm">
                    <PvTag v-if="feature.isPreview" value="PREVIEW" severity="info" />
                    <ToggleSwitch
                      :modelValue="isFeatureEffectivelyEnabled(feature.id)"
                      :disabled="!masterEnabled"
                      @update:modelValue="toggleFeature(feature.id)"
                      @click.stop
                    />
                    <PvButton label="Learn More" variant="outlined" severity="secondary" size="small" />
                  </div>
                </template>
                <div class="flex flex-col gap-3" :class="{ 'opacity-50': !masterEnabled }">
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

const meta: Meta<typeof AiSettingsOptionA> = {
  title: "Projects/Burak's Playground/Pages/AI Settings - Option A (Master Toggle)",
  component: AiSettingsOptionA,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiSettingsOptionA>;

export const Default: Story = {};
