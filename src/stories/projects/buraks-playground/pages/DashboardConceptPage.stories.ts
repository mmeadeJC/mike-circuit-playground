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

const DashboardConceptPage = defineComponent({
  name: 'DashboardConceptPage',
  components: {
    AppNavigation,
    PvButton: Button,
    PvTag: Tag,
    AdminTopBar,
    CollapsiblePanel,
    RectangleStackIcon,
    EllipsisHorizontalIcon,
    ArrowDownIcon,
    ArrowUpIcon,
  },
  setup() {
    const aiAppsChartMonths = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    const aiAppsLegend = [
      { name: 'MacOS', color: 'bg-icon-accent-aster-base' },
      { name: 'Windows', color: 'bg-icon-accent-coral-base' },
      { name: 'Linux', color: 'bg-icon-accent-violet-base' },
    ];

    const alerts = [
      { priority: 'High Priority', count: 3, countColor: 'text-error-base', newCount: 3 },
      { priority: 'Medium Priority', count: 2, countColor: 'text-warning-base', newCount: 1 },
      { priority: 'Low Priority', count: 4, countColor: 'text-info-base', newCount: 2 },
    ];

    const softwarePlatforms = [
      { name: 'Apple', icon: '\uF8FF', count: '389 Apps' },
      { name: 'Windows', icon: '\u229E', count: '267 Apps' },
      { name: 'Google', icon: 'G', count: '169 Apps' },
    ];

    const expiredPasswordUsers = [
      { name: 'Sarah Chen', email: 'sarah@company.com', time: '2 minutes ago' },
      { name: 'Marcus Rodriguez', email: 'marcus@company.com', time: '8 minutes ago' },
      { name: 'Emily Johnson', email: 'emily@company.com', time: '8 minutes ago' },
      { name: 'Michael Smith', email: 'michael@company.com', time: '22 minutes ago' },
    ];

    const lockedOutUsers = [
      { name: 'Sarah Chen', email: 'sarah@company.com', time: '2 minutes ago' },
      { name: 'Marcus Rodriguez', email: 'marcus@company.com', time: '8 minutes ago' },
      { name: 'Emily Johnson', email: 'emily@company.com', time: '8 minutes ago' },
      { name: 'Michael Smith', email: 'michael@company.com', time: '22 minutes ago' },
    ];

    const userGroups = [
      { name: 'Engineering', members: 189 },
      { name: 'Sales & Marketing', members: 189 },
      { name: 'IT & Operations', members: 156 },
      { name: 'HR & People Ops', members: 234 },
    ];

    const deviceBreakdown = [
      { name: 'MacOS', percentage: 45 },
      { name: 'Windows', percentage: 22 },
      { name: 'Linux', percentage: 12 },
      { name: 'Ubuntu', percentage: 2 },
    ];

    const chartMonths = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

    return {
      menuItems, profileMenuItems, aiAppsChartMonths, aiAppsLegend, alerts, softwarePlatforms,
      expiredPasswordUsers, lockedOutUsers, userGroups, deviceBreakdown, chartMonths,
    };
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
            <!-- 1. Total Users -->
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

            <!-- 2. User Groups -->
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

            <!-- 3. Managed Devices -->
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

            <!-- 4. Managed Software (small) -->
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

            <!-- Row 2: Devices Used AI Apps (full width) -->
            <CollapsiblePanel header="Devices Used AI Apps" class="col-span-4">
              <template #actions>
                <div class="flex items-center gap-1 bg-neutral-surface_deep rounded p-0.5">
                  <button class="px-2 h-6 text-body-sm-bold text-neutral-base bg-neutral-surface rounded shadow-sm">Monthly</button>
                  <button class="px-2 h-6 text-body-sm text-neutral-subtle rounded">Quarterly</button>
                </div>
              </template>
              <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2">
                  <span class="text-heading-4 text-neutral-base">124</span>
                  <span class="text-heading-4 text-neutral-base font-normal">Devices</span>
                  <div class="w-px h-4 bg-neutral-default_solid mx-1"></div>
                  <div class="flex items-center gap-1.5">
                    <div class="flex items-center gap-0.5">
                      <ArrowUpIcon class="w-4 h-4 text-success-base" />
                      <span class="text-body-sm-bold text-success-base">23%</span>
                    </div>
                    <span class="text-body-sm text-neutral-subtle">vs last month</span>
                  </div>
                </div>

                <div class="relative w-full h-[260px]">
                  <svg class="w-full h-full" viewBox="0 0 660 260" preserveAspectRatio="none">
                    <!-- Grid lines -->
                    <line x1="25" y1="7" x2="660" y2="7" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="39" x2="660" y2="39" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="71" x2="660" y2="71" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="103" x2="660" y2="103" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="135" x2="660" y2="135" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="167" x2="660" y2="167" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="199" x2="660" y2="199" stroke="#e7e9ea" stroke-width="0.5" />
                    <line x1="25" y1="231" x2="660" y2="231" stroke="#e7e9ea" stroke-width="0.5" />

                    <!-- Y-axis labels -->
                    <text x="18" y="11" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">700</text>
                    <text x="18" y="43" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">600</text>
                    <text x="18" y="75" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">500</text>
                    <text x="18" y="107" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">400</text>
                    <text x="18" y="139" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">300</text>
                    <text x="18" y="171" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">200</text>
                    <text x="18" y="203" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">100</text>
                    <text x="18" y="235" fill="rgba(15,32,47,0.74)" font-size="10" text-anchor="end">0</text>

                    <!-- MacOS line (blue/purple - aster) -->
                    <path d="M 40,135 C 80,55 110,55 135,50 C 160,45 185,105 220,90 C 255,75 280,140 310,130 C 340,120 360,55 390,70 C 420,85 450,55 480,70 C 510,85 540,55 570,40 C 600,25 620,55 650,45" fill="none" stroke="#8e9ef5" stroke-width="2" />

                    <!-- Windows line (coral/orange) -->
                    <path d="M 40,60 C 80,40 110,35 135,70 C 160,105 185,130 220,100 C 255,70 280,100 310,50 C 340,0 370,30 390,55 C 420,80 450,130 480,100 C 510,70 540,80 570,95 C 600,110 630,50 650,20" fill="none" stroke="#f08760" stroke-width="2" />

                    <!-- Linux line (pink/violet) -->
                    <path d="M 40,160 C 80,170 110,190 135,200 C 160,210 185,195 220,120 C 255,45 280,65 310,80 C 340,95 370,130 390,120 C 420,110 445,115 480,110 C 510,105 540,115 570,125 C 600,135 630,165 650,200" fill="none" stroke="#e77ece" stroke-width="2" />
                  </svg>

                  <!-- X-axis labels -->
                  <div class="flex justify-between px-6 mt-1">
                    <span v-for="month in aiAppsChartMonths" :key="month" class="text-[10px] text-neutral-ghost">{{ month }}</span>
                  </div>
                </div>

                <!-- Legend -->
                <div class="flex items-center justify-center gap-4">
                  <div v-for="item in aiAppsLegend" :key="item.name" class="flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full" :class="item.color"></span>
                    <span class="text-body-sm-bold text-neutral-base">{{ item.name }}</span>
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
                  <div v-for="(platform, index) in softwarePlatforms" :key="index" class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-2">
                      <span class="text-body-md text-neutral-base">{{ platform.name }}</span>
                    </div>
                    <PvTag :value="platform.count" severity="secondary" />
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 4: Four small stat panels -->
            <!-- 8. Passwords Expiring -->
            <CollapsiblePanel header="Passwords Expiring">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-error-base">6</span>
                  <span class="text-heading-3 text-neutral-base self-end">Users</span>
                </div>
                <span class="text-body-sm text-neutral-subtle">Next 7 days</span>
              </div>
            </CollapsiblePanel>

            <!-- 9. Expired Passwords -->
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

            <!-- 10. User Lockouts -->
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

            <!-- 11. Device Policies -->
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

            <!-- Row 5: Oldest Expired Passwords (2 cols) + Recent User Lockouts (2 cols) -->
            <CollapsiblePanel header="Oldest Expired Passwords" class="col-span-2">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-error-base"><span class="text-body-sm-bold">7</span> Users needs to reset</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">3</span>
                    <span class="text-body-sm text-neutral-subtle">new in this week</span>
                  </div>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(user, index) in expiredPasswordUsers" :key="index" class="flex items-center justify-between py-3">
                    <div class="flex flex-col">
                      <span class="text-body-md-bold text-neutral-base">{{ user.name }}</span>
                      <span class="text-body-xs text-neutral-subtle">{{ user.email }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-body-sm text-neutral-subtle">Expired: <span class="text-error-base">{{ user.time }}</span></span>
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

            <CollapsiblePanel header="Recent User Lockouts" class="col-span-2">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-success-base"><span class="text-body-sm-bold">12</span> Total lockouts</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">3</span>
                    <span class="text-body-sm text-neutral-subtle">in last hour</span>
                  </div>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(user, index) in lockedOutUsers" :key="index" class="flex items-center justify-between py-3">
                    <div class="flex flex-col">
                      <span class="text-body-md-bold text-neutral-base">{{ user.name }}</span>
                      <span class="text-body-xs text-neutral-subtle">{{ user.email }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-body-sm text-neutral-subtle">Locked: <span class="text-error-base">{{ user.time }}</span></span>
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

            <!-- Row 6: User Groups Chart (full width) -->
            <CollapsiblePanel header="User Groups" class="col-span-4">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-2">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">1,743</span> Users</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowDownIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">8%</span>
                    <span class="text-body-sm text-neutral-subtle">vs last month</span>
                  </div>
                </div>
                <div class="flex items-center gap-6 mb-4">
                  <div class="flex items-center gap-[7px]">
                    <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-success-base">1,678</span>
                    <span class="text-heading-3 text-neutral-base self-end">Active Users</span>
                  </div>
                  <div class="flex items-center gap-[7px]">
                    <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-warning-base">65</span>
                    <span class="text-heading-3 text-neutral-base self-end">Suspended Users</span>
                  </div>
                </div>

                <!-- Chart Area -->
                <div class="relative w-full h-[200px] mb-4">
                  <svg class="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <!-- Grid lines -->
                    <line x1="0" y1="25" x2="800" y2="25" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="65" x2="800" y2="65" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="105" x2="800" y2="105" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="145" x2="800" y2="145" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="185" x2="800" y2="185" stroke="#e7e9ea" stroke-width="1" />

                    <!-- Y-axis labels -->
                    <text x="0" y="22" fill="#6b7280" font-size="11">700</text>
                    <text x="0" y="62" fill="#6b7280" font-size="11">600</text>
                    <text x="0" y="102" fill="#6b7280" font-size="11">500</text>
                    <text x="0" y="142" fill="#6b7280" font-size="11">400</text>
                    <text x="0" y="182" fill="#6b7280" font-size="11">300</text>

                    <!-- Total Users line (blue) -->
                    <polyline
                      fill="none"
                      stroke="#3B82F6"
                      stroke-width="2.5"
                      points="40,50 160,65 280,42 400,45 520,48 640,50 760,42"
                    />

                    <!-- Active Users line (green) -->
                    <polyline
                      fill="none"
                      stroke="#22C55E"
                      stroke-width="2.5"
                      points="40,70 160,95 280,78 400,85 520,110 640,115 760,95"
                    />

                    <!-- Suspended Users line (orange) -->
                    <polyline
                      fill="none"
                      stroke="#F59E0B"
                      stroke-width="2.5"
                      points="40,135 160,150 280,158 400,165 520,168 640,175 760,185"
                    />
                  </svg>

                  <!-- X-axis labels -->
                  <div class="flex justify-between px-10 mt-1">
                    <span v-for="month in chartMonths" :key="month" class="text-body-xs text-neutral-subtle">{{ month }}</span>
                  </div>
                </div>

                <!-- Legend -->
                <div class="flex items-center justify-center gap-6">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
                    <span class="text-body-sm text-neutral-subtle">Total Users</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
                    <span class="text-body-sm text-neutral-subtle">Active Users</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span>
                    <span class="text-body-sm text-neutral-subtle">Suspended Users</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 7: User Groups detail (2 cols) + Managed Devices breakdown (2 cols) -->
            <CollapsiblePanel header="User Groups" class="col-span-2">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">12</span> Total groups</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">2</span>
                    <span class="text-body-sm text-neutral-subtle">new this month</span>
                  </div>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(group, index) in userGroups" :key="index" class="flex items-center justify-between py-3">
                    <span class="text-body-md text-neutral-base">{{ group.name }}</span>
                    <span class="text-body-sm-bold text-neutral-base">{{ group.members }} Members</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="Managed Devices" class="col-span-2">
              <template #actions>
                <PvButton label="See All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">2,643</span> Total devices</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">23%</span>
                    <span class="text-body-sm text-neutral-subtle">vs last month</span>
                  </div>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(device, index) in deviceBreakdown" :key="index" class="flex items-center gap-3 py-3">
                    <span class="text-body-md text-neutral-base w-20 shrink-0">{{ device.name }}</span>
                    <span class="text-body-sm text-neutral-subtle w-10 text-right shrink-0">{{ device.percentage }}%</span>
                    <div class="flex-1 h-2 bg-neutral-surface rounded-full overflow-hidden">
                      <div
                        class="h-full bg-neutral-base rounded-full"
                        :style="{ width: device.percentage + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof DashboardConceptPage> = {
  title: "Projects/Burak's Playground/Pages/Dashboard Concept",
  component: DashboardConceptPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DashboardConceptPage>;

export const Default: Story = {};
