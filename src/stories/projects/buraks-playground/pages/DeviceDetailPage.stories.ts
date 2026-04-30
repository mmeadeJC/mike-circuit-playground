import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DetailPageLayout,
  CollapsiblePanel,
  KeyValue,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Menu from 'primevue/menu';
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
  ComputerDesktopIcon,
  LockClosedIcon,
  EllipsisHorizontalIcon,
  ChevronDownIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline';

import { CheckCircleIcon } from '@heroicons/vue/24/solid';

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
    DetailPageLayout,
    CollapsiblePanel,
    KeyValue,
    PvButton: Button,
    PvTag: Tag,
    PvMenu: Menu,
    PvDivider: Divider,
    AdminTopBar,
    ComputerDesktopIcon,
    CommandLineIcon,
    ChartBarSquareIcon,
    LockClosedIcon,
    EllipsisHorizontalIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    CpuChipIcon,
    GlobeAltIcon,
  },
  setup() {
    const activeTab = ref('details');
    const showSidebar = ref(true);

    const agentMenu = ref();
    const mdmMenu = ref();
    const agentMenuItems = [
      { label: 'Restart Agent' },
      { label: 'Unmanage Device' },
    ];
    const mdmMenuItems = [
      { label: 'Unenroll from MDM' },
      { label: 'Wipe Device' },
    ];

    return {
      menuItems,
      profileMenuItems,
      tabs,
      activeTab,
      showSidebar,
      deviceInfo,
      agentMenu,
      mdmMenu,
      agentMenuItems,
      mdmMenuItems,
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
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopBar />

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

        <div class="flex-1 overflow-hidden flex flex-col">

          <DetailPageLayout v-if="activeTab === 'details'" class="w-full! h-full!" :max-width="showSidebar ? '1440' : '1280'" :show-sidebar="showSidebar">
            <div class="flex flex-col gap-6">

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CollapsiblePanel header="Device Information">
                  <template #titleicon="iconProps">
                    <ComputerDesktopIcon :class="iconProps.class" />
                  </template>
                  <div class="flex flex-col gap-3">
                    <KeyValue label="Status" :value="deviceInfo.status" />
                    <KeyValue label="Operating System" :value="deviceInfo.os" />
                    <KeyValue label="Model" :value="deviceInfo.model" />
                    <KeyValue label="Serial Number" :value="deviceInfo.serialNumber" />
                    <KeyValue label="Agent Version" :value="deviceInfo.agentVersion" />
                    <KeyValue label="Last Contact" :value="deviceInfo.lastContact" />
                    <KeyValue label="MDM Status" :value="deviceInfo.mdmStatus" />
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel header="Hardware">
                  <template #titleicon="iconProps">
                    <CpuChipIcon :class="iconProps.class" />
                  </template>
                  <div class="flex flex-col gap-3">
                    <KeyValue label="Processor" :value="deviceInfo.processor" />
                    <KeyValue label="Memory" :value="deviceInfo.memory" />
                    <KeyValue label="Storage" :value="deviceInfo.storage" />
                  </div>
                </CollapsiblePanel>
              </div>

              <CollapsiblePanel header="Network">
                <template #titleicon="iconProps">
                  <GlobeAltIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-3">
                  <KeyValue label="Primary User" :value="deviceInfo.primaryUser" />
                  <KeyValue label="IP Address" :value="deviceInfo.ipAddress" />
                  <KeyValue label="MAC Address" :value="deviceInfo.macAddress" />
                  <KeyValue label="Device ID" :value="deviceInfo.deviceId" />
                </div>
              </CollapsiblePanel>

            </div>

            <template v-if="showSidebar" #sidebar>
              <div class="flex flex-col gap-6">

                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">Device Status</h3>
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                      <span class="w-48 shrink-0 text-body-md-semi-bold text-neutral-base">Agent</span>
                      <PvTag :value="deviceInfo.status" severity="success">
                        <template #icon><CheckCircleIcon class="size-4" /></template>
                      </PvTag>
                      <PvButton variant="text" severity="secondary" size="small" @click="agentMenu.toggle($event)">
                        <template #icon>
                          <ChevronDownIcon class="size-4" />
                        </template>
                      </PvButton>
                      <PvMenu ref="agentMenu" :model="agentMenuItems" :popup="true" />
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="w-48 shrink-0 text-body-md-semi-bold text-neutral-base">MDM</span>
                      <PvTag :value="deviceInfo.mdmStatus" severity="success">
                        <template #icon><CheckCircleIcon class="size-4" /></template>
                      </PvTag>
                      <PvButton variant="text" severity="secondary" size="small" @click="mdmMenu.toggle($event)">
                        <template #icon>
                          <ChevronDownIcon class="size-4" />
                        </template>
                      </PvButton>
                      <PvMenu ref="mdmMenu" :model="mdmMenuItems" :popup="true" />
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-3">
                  <h3 class="text-heading-3 text-neutral-base">Quick Actions</h3>
                  <div class="flex items-center gap-2">
                    <PvButton label="Run Command" severity="secondary" size="small" />
                    <PvButton label="Lock Device" variant="outlined" severity="secondary" size="small" />
                  </div>
                </div>

                <PvDivider />

                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">Device Summary</h3>
                  <div class="flex flex-col gap-3">
                    <KeyValue label="Primary User" :value="deviceInfo.primaryUser" class="w-full" />
                    <KeyValue label="Last Contact" :value="deviceInfo.lastContact" class="w-full" />
                    <KeyValue label="Agent Version" :value="deviceInfo.agentVersion" class="w-full" />
                    <KeyValue label="Operating System" :value="deviceInfo.os" class="w-full" />
                    <KeyValue label="Model" :value="deviceInfo.model" class="w-full" />
                    <KeyValue label="Serial Number" :value="deviceInfo.serialNumber" class="w-full" />
                  </div>
                </div>

                <PvDivider />

                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">Hardware</h3>
                  <div class="flex flex-col gap-3">
                    <KeyValue label="Processor" :value="deviceInfo.processor" class="w-full" />
                    <KeyValue label="Memory" :value="deviceInfo.memory" class="w-full" />
                    <KeyValue label="Storage" :value="deviceInfo.storage" class="w-full" />
                    <KeyValue label="IP Address" :value="deviceInfo.ipAddress" class="w-full" />
                    <KeyValue label="MAC Address" :value="deviceInfo.macAddress" class="w-full" />
                  </div>
                </div>

              </div>
            </template>
          </DetailPageLayout>

          <div v-if="activeTab !== 'details'" class="p-6">
            <div class="bg-neutral-base rounded-lg shadow-e100 p-8 text-center">
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
