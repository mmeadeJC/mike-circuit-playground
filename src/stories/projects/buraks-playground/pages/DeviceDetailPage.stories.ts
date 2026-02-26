import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
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
  ComputerDesktopIcon,
  CheckCircleIcon,
  LockClosedIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  AppleIcon,
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
    items: [
      { label: 'Reports' },
      { label: 'Directory Insights' },
    ],
  },
  {
    label: 'Settings',
    leftIcon: markRaw(Cog6ToothIcon),
    items: [
      { label: 'Reports' },
    ],
  },
  {
    label: 'Alert',
    leftIcon: markRaw(BellIcon),
    count: 23,
    isNew: true,
  },
];

const profileMenuItems = [
  {
    label: 'Burak Başcı',
    itemType: 'profile_compact',
    initials: 'BB',
    name: 'Burak Başcı',
    items: [
      {
        label: 'Admin IT',
        itemType: 'profile_large',
        name: 'Admin IT',
        email: 'admin_it@company.com',
        initials: 'AT',
      },
      { separator: true },
      {
        label: 'Logout',
        rightIcon: markRaw(ArrowRightStartOnRectangleIcon),
      },
      { separator: true },
      { label: 'Change Password' },
      {
        label: 'Launch User Portal',
        rightIcon: markRaw(ArrowTopRightOnSquareIcon),
      },
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
      { separator: true },
      {
        label: 'Use Old Navigation',
        itemType: 'button',
      },
    ],
  },
];

const tabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policies', value: 'policies' },
  { label: 'Users & Groups', value: 'users-groups' },
  { label: 'Software', value: 'software' },
  { label: 'Commands', value: 'commands' },
];

const deviceInfo = {
  deviceName: 'Apple MacBook Pro',
  deviceId: 'c4d3e2f1b6a79e0a123456789abc',
  status: 'Active',
  os: 'MacOS 26.2',
  lastContact: '4 months ago',
  primaryUser: 'Jona Travis',
  agentVersion: '11.5.2',
  mdmStatus: 'Enrolled',
  serialNumber: 'C02ZW1KZMD6T',
  model: 'MacBook Pro (16-inch, 2024)',
  processor: 'Apple M3 Max',
  memory: '36 GB',
  storage: '1 TB SSD',
  ipAddress: '192.168.1.42',
  macAddress: 'A4:83:E7:2B:91:F0',
};

const DeviceDetailPage = defineComponent({
  name: 'DeviceDetailPage',
  components: {
    AppNavigation,
    PageHeader,
    PvButton: Button,
    PvTag: Tag,
    TopBar,
    ComputerDesktopIcon,
    CommandLineIcon,
    ChartBarSquareIcon,
    LockClosedIcon,
    EllipsisHorizontalIcon,
    CheckCircleIcon,
  },
  setup() {
    const activeTab = ref('details');

    return {
      menuItems,
      profileMenuItems,
      tabs,
      activeTab,
      deviceInfo,
      AppleIcon: markRaw(AppleIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />

        <PageHeader
          :title="deviceInfo.deviceName"
          :icon="AppleIcon"
          :tabs="tabs"
          :activeTab="activeTab"
          :subtitleText="deviceInfo.serialNumber"
          @update:activeTab="activeTab = $event"
        >
          <template #actions>
            <div class="flex items-center gap-2">
              <PvButton severity="secondary" variant="text" size="small">
                <template #icon>
                  <CommandLineIcon class="size-5" />
                </template>
              </PvButton>
              <PvButton severity="secondary" variant="text" size="small">
                <template #icon>
                  <ChartBarSquareIcon class="size-5" />
                </template>
              </PvButton>
              <PvButton severity="secondary" variant="text" size="small">
                <template #icon>
                  <LockClosedIcon class="size-5" />
                </template>
              </PvButton>
              <PvButton severity="secondary" variant="text" size="small">
                <template #icon>
                  <EllipsisHorizontalIcon class="size-5" />
                </template>
              </PvButton>
            </div>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface">
          <div v-if="activeTab === 'details'" class="p-6 flex flex-col gap-6">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6">
                <h3 class="text-heading-4 text-neutral-base mb-4">Device Information</h3>
                <dl class="grid grid-cols-2 gap-y-3 gap-x-4">
                  <dt class="text-body-sm text-neutral-subtle">Status</dt>
                  <dd>
                    <PvTag :value="deviceInfo.status" severity="success">
                      <template #icon>
                        <CheckCircleIcon class="size-4" />
                      </template>
                    </PvTag>
                  </dd>
                  <dt class="text-body-sm text-neutral-subtle">Operating System</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.os }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">Model</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.model }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">Serial Number</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.serialNumber }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">Agent Version</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.agentVersion }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">Last Contact</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.lastContact }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">MDM Status</dt>
                  <dd>
                    <PvTag :value="deviceInfo.mdmStatus" severity="success">
                      <template #icon>
                        <CheckCircleIcon class="size-4" />
                      </template>
                    </PvTag>
                  </dd>
                </dl>
              </div>

              <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6">
                <h3 class="text-heading-4 text-neutral-base mb-4">Hardware</h3>
                <dl class="grid grid-cols-2 gap-y-3 gap-x-4">
                  <dt class="text-body-sm text-neutral-subtle">Processor</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.processor }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">Memory</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.memory }}</dd>
                  <dt class="text-body-sm text-neutral-subtle">Storage</dt>
                  <dd class="text-body-sm text-neutral-base">{{ deviceInfo.storage }}</dd>
                </dl>
              </div>
            </div>

            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6">
              <h3 class="text-heading-4 text-neutral-base mb-4">Network</h3>
              <dl class="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4">
                <dt class="text-body-sm text-neutral-subtle">Primary User</dt>
                <dd class="text-body-sm text-neutral-base">{{ deviceInfo.primaryUser }}</dd>
                <dt class="text-body-sm text-neutral-subtle">IP Address</dt>
                <dd class="text-body-sm text-neutral-base">{{ deviceInfo.ipAddress }}</dd>
                <dt class="text-body-sm text-neutral-subtle">MAC Address</dt>
                <dd class="text-body-sm text-neutral-base">{{ deviceInfo.macAddress }}</dd>
                <dt class="text-body-sm text-neutral-subtle">Device ID</dt>
                <dd class="text-body-sm text-neutral-base break-all">{{ deviceInfo.deviceId }}</dd>
              </dl>
            </div>

          </div>

          <div v-if="activeTab !== 'details'" class="p-6">
            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-8 text-center">
              <p class="text-body-lg text-neutral-subtle">{{ activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' & ') }} content coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof DeviceDetailPage> = {
  title: "Projects/Burak's Playground/Pages/Device Detail",
  component: DeviceDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DeviceDetailPage>;

export const Default: Story = {};
