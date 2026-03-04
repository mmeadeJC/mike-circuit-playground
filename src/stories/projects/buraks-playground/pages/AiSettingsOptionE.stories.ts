import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw, defineComponent, ref, computed, watch } from 'vue';
import {
  AppNavigation,
  CollapsiblePanel,
  PageHeader,
  ToggleSwitch,
  MessageNotification,
  LinkText,
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
  ClipboardDocumentCheckIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowTopRightOnSquareIcon as LearnMoreIcon,
  SparklesIcon,
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
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

const AiSettingsOptionE = defineComponent({
  name: 'AiSettingsOptionE',
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
    LinkText,
    SparklesIcon,
    ChevronRightIcon,
    ChatBubbleLeftRightIcon,
    MagnifyingGlassIcon,
    WrenchScrewdriverIcon,
    ServerStackIcon,
  },
  setup() {
    const activeTab = ref('Administrators');

    const masterEnabled = ref(true);

    const featureGroups = ref([
      {
        id: 'conversational',
        name: 'Conversational AI',
        description: 'Chat-based AI features for admin interaction and support.',
        groupEnabled: true,
        features: [
          {
            id: 'assistant',
            name: 'AI Assistant',
            isPreview: true,
            enabled: true,
            description: 'Quickly find, manage, and report on your users, devices, and SSO applications directly from a chat interface.',
          },
        ],
      },
      {
        id: 'intelligence',
        name: 'Search & Intelligence',
        description: 'AI-powered search and data analysis capabilities.',
        groupEnabled: true,
        features: [
          {
            id: 'search',
            name: 'AI Search',
            isPreview: false,
            enabled: true,
            description: 'Answer questions and search for information using AI models. Only the text of your search is processed by Google Gemini.',
            recommendation: 'Enable System Insights for optimal results.',
          },
        ],
      },
      {
        id: 'automation',
        name: 'Automation & Commands',
        description: 'AI tools for automating system management and command execution.',
        groupEnabled: true,
        features: [
          {
            id: 'commands',
            name: 'AI Commands Builder',
            isPreview: false,
            enabled: true,
            description: 'Generate and optimize commands for managed systems, improving efficiency and reducing command-line errors.',
          },
          {
            id: 'mcp',
            name: 'MCP Server',
            isPreview: false,
            enabled: true,
            description: 'Enforce policies, manage system commands, and deliver configurations securely across managed devices.',
          },
        ],
      },
    ]);

    const enabledCount = computed(() => {
      if (!masterEnabled.value) return 0;
      return featureGroups.value.reduce((sum, group) => {
        return sum + group.features.filter(f => f.enabled && group.groupEnabled).length;
      }, 0);
    });

    const totalCount = computed(() => {
      return featureGroups.value.reduce((sum, group) => sum + group.features.length, 0);
    });

    const toggleGroupEnabled = (groupId: string) => {
      const group = featureGroups.value.find(g => g.id === groupId);
      if (!group) return;
      group.groupEnabled = !group.groupEnabled;
      for (const feature of group.features) {
        feature.enabled = group.groupEnabled;
      }
    };

    const toggleFeature = (groupId: string, featureId: string) => {
      const group = featureGroups.value.find(g => g.id === groupId);
      if (!group) return;
      const feature = group.features.find(f => f.id === featureId);
      if (!feature) return;
      feature.enabled = !feature.enabled;
      group.groupEnabled = group.features.some(f => f.enabled);
    };

    const isFeatureEffective = (groupId: string, featureId: string) => {
      if (!masterEnabled.value) return false;
      const group = featureGroups.value.find(g => g.id === groupId);
      if (!group || !group.groupEnabled) return false;
      const feature = group.features.find(f => f.id === featureId);
      return feature?.enabled ?? false;
    };

    const getGroupEnabledCount = (group: typeof featureGroups.value[0]) => {
      if (!masterEnabled.value || !group.groupEnabled) return 0;
      return group.features.filter(f => f.enabled).length;
    };

    const hasUnsavedChanges = ref(false);
    watch([masterEnabled, featureGroups], () => { hasUnsavedChanges.value = true; }, { deep: true });

    return {
      menuItems, profileMenuItems, settingsTabs, activeTab,
      masterEnabled, featureGroups, enabledCount, totalCount,
      toggleGroupEnabled, toggleFeature, isFeatureEffective, getGroupEnabledCount,
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
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <h2 class="text-heading-2 text-neutral-base">JumpCloud AI</h2>
                  <ToggleSwitch v-model="masterEnabled" />
                  <span class="text-body-sm text-neutral-subtle">
                    {{ enabledCount }} of {{ totalCount }} features enabled
                  </span>
                </div>
              </div>
              <p class="text-body-md text-neutral-subtle">
                Centralized control for all AI-related capabilities within the JumpCloud platform.
                This section governs how AI is used to enhance platform intelligence, improve workflows, and support administrative operations.
              </p>
            </div>

            <!-- Feature groups (accordion pattern) -->
            <div class="flex flex-col gap-4">
              <CollapsiblePanel
                v-for="group in featureGroups"
                :key="group.id"
                :header="group.name"
                :toggleable="true"
              >
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <div class="flex items-center gap-3">
                    <PvTag
                      :value="getGroupEnabledCount(group) + '/' + group.features.length + ' enabled'"
                      :severity="getGroupEnabledCount(group) === group.features.length ? 'success' : 'secondary'"
                    />
                    <ToggleSwitch
                      :modelValue="masterEnabled && group.groupEnabled"
                      :disabled="!masterEnabled"
                      @update:modelValue="toggleGroupEnabled(group.id)"
                      @click.stop
                    />
                  </div>
                </template>
                <div class="flex flex-col" :class="{ 'opacity-50': !masterEnabled }">
                  <p class="text-body-sm text-neutral-subtle mb-4">{{ group.description }}</p>
                  <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                    <div
                      v-for="feature in group.features"
                      :key="feature.id"
                      class="flex items-center gap-3 py-4"
                    >
                      <ToggleSwitch
                        :modelValue="isFeatureEffective(group.id, feature.id)"
                        :disabled="!masterEnabled || !group.groupEnabled"
                        @update:modelValue="toggleFeature(group.id, feature.id)"
                      />
                      <div class="flex flex-col gap-1 flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                          <span class="text-body-md-semi-bold text-neutral-base">{{ feature.name }}</span>
                          <PvTag v-if="feature.isPreview" value="PREVIEW" severity="info" />
                          <LinkText label="Learn More" href="#" target="_blank" class="ml-auto" />
                        </div>
                        <p class="text-body-sm text-neutral-subtle">{{ feature.description }}</p>
                        <div v-if="feature.recommendation" class="mt-1">
                          <p class="text-body-sm-bold text-neutral-base">Recommended:</p>
                          <p class="text-body-sm text-neutral-subtle">{{ feature.recommendation }}</p>
                        </div>
                      </div>
                    </div>
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

const meta: Meta<typeof AiSettingsOptionE> = {
  title: "Projects/Burak's Playground/Pages/AI Settings - Option E (Parent Card Accordion)",
  component: AiSettingsOptionE,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AiSettingsOptionE>;

export const Default: Story = {};
