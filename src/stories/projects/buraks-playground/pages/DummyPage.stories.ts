import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw, defineComponent } from 'vue';
import { AppNavigation, CollapsiblePanel } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

// Heroicons
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
  RectangleStackIcon,
  EllipsisHorizontalIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';

// JumpCloud custom icons
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

const DummyPage = defineComponent({
  name: 'DummyPage',
  components: {
    AppNavigation,
    PvButton: Button,
    PvTag: Tag,
    AdminTopBar,
    RectangleStackIcon,
    EllipsisHorizontalIcon,
    ArrowDownIcon,
    ArrowUpIcon,
    ArrowRightIcon,
    CollapsiblePanel,
  },
  setup() {
    const certificates = [
      { name: 'Azure AD Connect Certificate', status: 'expired', daysLeft: null, date: 'Sep 15, 2025', type: 'SSO', action: 'Replace' },
      { name: 'VPN Server Certificate', status: 'warning', daysLeft: '8 days left,', date: 'Oct 3, 2025', type: 'VPN', action: 'Renew' },
      { name: 'Device Enrollment Certificate', status: 'warning', daysLeft: '9 days left,', date: 'Oct 4, 2025', type: 'Device Enrollment', action: 'Renew' },
      { name: 'Apple Push Notification Certificate', status: 'info', daysLeft: '26 days left,', date: 'Oct 21, 2025', type: 'APNs', action: 'View' },
      { name: 'Apple Push Notification Certificate', status: 'info', daysLeft: '27 days left', date: 'Oct 22, 2025', type: 'VPN', action: 'View' },
      { name: 'LDAP Server Certificate', status: 'info', daysLeft: '81 days left', date: 'Dec 15, 2025', type: 'LDAP', action: 'View' },
      { name: 'Google Workspace SSO Certificate', status: 'success', daysLeft: '120 days left', date: 'Jan 23, 2026', type: 'SSO', action: 'View' },
    ];

    const alerts = [
      { priority: 'High Priority', count: 3, countColor: 'text-error-base', newCount: 3 },
      { priority: 'Medium Priority', count: 2, countColor: 'text-warning-base', newCount: 1 },
      { priority: 'Low Priority', count: 4, countColor: 'text-info-base', newCount: 2 },
    ];

    const softwarePlatforms = [
      { name: 'Apple', icon: '\uF8FF', count: '389 Apps' },
      { name: 'Windows', icon: '\u2756', count: '267 Apps' },
      { name: 'Google', icon: 'G', count: '169 Apps' },
    ];

    return { menuItems, profileMenuItems, certificates, alerts, softwarePlatforms };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="home"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <!-- AdminTopBar -->
        <AdminTopBar />

        <!-- Page Header -->
        <div class="border-b border-neutral-default_solid bg-neutral-base shrink-0">
          <div class="flex flex-wrap items-start gap-4 px-6 py-4">
            <div class="flex-1 min-w-0 flex items-center gap-2 py-1">
              <RectangleStackIcon class="w-6 h-6 text-neutral-base shrink-0" />
              <h1 class="text-heading-2 text-neutral-base">Dashboard</h1>
            </div>
            <div class="flex items-center gap-2">
              <PvButton label="Customize" severity="secondary" variant="outlined" />
              <PvButton label="Export" severity="secondary" variant="outlined" />
              <PvButton severity="secondary" variant="outlined">
                <template #icon>
                  <EllipsisHorizontalIcon class="w-5 h-5" />
                </template>
              </PvButton>
            </div>
          </div>
        </div>

        <!-- Page Content -->
        <div class="flex-1 overflow-auto bg-neutral-surface p-6">
          <div class="grid grid-cols-4 gap-4">

            <!-- Row 1: Summary Stats -->
            <!-- Total Users -->
            <CollapsiblePanel header="Total Users">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">1,743</span>
                  <span class="text-heading-3 text-neutral-base self-end">Users</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowDownIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">8%</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">vs last month</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- User Groups -->
            <CollapsiblePanel header="User Groups">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">12</span>
                  <span class="text-heading-3 text-neutral-base self-end">Groups</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">2</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">new this month</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Managed Devices -->
            <CollapsiblePanel header="Managed Devices">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">2,643</span>
                  <span class="text-heading-3 text-neutral-base self-end">Devices</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">23%</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">vs last month</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Managed Software (small) -->
            <CollapsiblePanel header="Managed Software">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">825</span>
                  <span class="text-heading-3 text-neutral-base self-end">Apps</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">5,3%</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">vs last month</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 2: Recent Certificates & Tokens (full width) -->
            <CollapsiblePanel header="Recent Certificates & Tokens" class="col-span-4">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-4 mb-1">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">12</span> Total token</span>
                  <span class="text-body-sm text-error-base"><span class="text-body-sm-bold">1</span> Expired / Invalid</span>
                  <span class="text-body-sm text-warning-base"><span class="text-body-sm-bold">2</span> Within 10 days</span>
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">3</span> Within 30 days</span>
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">6</span> Past 30 days</span>
                </div>
                <span class="text-body-sm text-neutral-subtle mb-3">3 new in this week</span>

                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(cert, index) in certificates" :key="index" class="flex items-center py-3 gap-3">
                    <span class="text-body-md-bold text-neutral-base shrink-0">{{ cert.name }}</span>
                    <PvTag v-if="cert.status === 'expired'" value="Expired" severity="danger" class="shrink-0" />
                    <span v-if="cert.status === 'expired'" class="text-body-sm text-error-base shrink-0">9 days ago,</span>
                    <span v-if="cert.status === 'warning'" class="text-body-sm text-warning-base shrink-0">{{ cert.daysLeft }}</span>
                    <span v-if="cert.status === 'info'" class="text-body-sm text-success-base shrink-0">{{ cert.daysLeft }}</span>
                    <span v-if="cert.status === 'success'" class="text-body-sm text-success-base shrink-0">{{ cert.daysLeft }}</span>
                    <span class="text-body-sm text-neutral-subtle shrink-0">{{ cert.date }}</span>
                    <span class="text-body-sm text-neutral-subtle shrink-0">Type: {{ cert.type }}</span>
                    <div class="flex items-center gap-2 ml-auto shrink-0">
                      <PvButton
                        :label="cert.action"
                        :severity="cert.action === 'Replace' ? 'primary' : 'secondary'"
                        variant="outlined"
                        size="small"
                      >
                        <template #icon>
                          <ArrowRightIcon class="w-4 h-4" />
                        </template>
                      </PvButton>
                      <PvButton severity="secondary" variant="text" size="small">
                        <template #icon>
                          <EllipsisHorizontalIcon class="w-4 h-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 3: Open Alerts (2 cols) + Managed Software detail (2 cols) -->
            <CollapsiblePanel header="Open Alerts" class="col-span-2">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col divide-y divide-neutral-default_solid">
                <div v-for="(alert, index) in alerts" :key="index" class="flex items-center justify-between py-3">
                  <div class="flex items-center gap-2">
                    <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px]" :class="alert.countColor">{{ alert.count }}</span>
                    <span class="text-heading-4 text-neutral-base">{{ alert.priority }}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-neutral-subtle" />
                    <span class="text-body-sm text-neutral-subtle">{{ alert.newCount }} new today</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="Managed Software" class="col-span-2">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">825</span> Total apps</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">5,3%</span>
                    <span class="text-body-sm text-neutral-subtle">vs last month</span>
                  </div>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-2">
                      <span class="text-body-md text-neutral-base">Apple</span>
                    </div>
                    <PvTag value="389 Apps" severity="secondary" />
                  </div>
                  <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-2">
                      <span class="text-body-md text-neutral-base">Windows</span>
                    </div>
                    <PvTag value="267 Apps" severity="secondary" />
                  </div>
                  <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-2">
                      <span class="text-body-md text-neutral-base">Google</span>
                    </div>
                    <PvTag value="169 Apps" severity="secondary" />
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 4: Four small stat panels -->
            <!-- Passwords Expiring -->
            <CollapsiblePanel header="Passwords Expiring">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-error-base">6</span>
                  <span class="text-heading-3 text-neutral-base self-end">Users</span>
                </div>
                <span class="text-body-sm text-neutral-subtle">Next 7 days</span>
              </div>
            </CollapsiblePanel>

            <!-- Expired Passwords -->
            <CollapsiblePanel header="Expired Passwords">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-error-base">7</span>
                  <span class="text-heading-3 text-neutral-base self-end">Users</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">3</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">new in this week</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- User Lockouts -->
            <CollapsiblePanel header="User Lockouts">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-success-base">12</span>
                  <span class="text-heading-3 text-neutral-base self-end">Lockouts</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">3</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">in last hour</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Device Policies -->
            <CollapsiblePanel header="Device Policies">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">60</span>
                  <span class="text-heading-3 text-neutral-base self-end">Policies</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">3</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">new this month</span>
                </div>
              </div>
            </CollapsiblePanel>

          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof DummyPage> = {
  title: "Projects/Burak's Playground/Pages/Dummy Page",
  component: DummyPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DummyPage>;

export const Default: Story = {};
