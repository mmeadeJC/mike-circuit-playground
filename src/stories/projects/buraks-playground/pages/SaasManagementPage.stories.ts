import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw, defineComponent } from 'vue';
import { AppNavigation, CollapsiblePanel, PageHeader } from '@jumpcloud/circuit/components';
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
  ArrowUpIcon,
  ArrowDownIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  EllipsisHorizontalIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  UserMinusIcon,
  ShieldExclamationIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
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

const SaasManagementPage = defineComponent({
  name: 'SaasManagementPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    PvButton: Button,
    PvTag: Tag,
    TopBar,
    ArrowUpIcon,
    ArrowDownIcon,
    ExclamationTriangleIcon,
    CheckCircleIcon,
    XCircleIcon,
    ArrowPathIcon,
    EllipsisHorizontalIcon,
    GlobeAltIcon,
    CurrencyDollarIcon,
    UserMinusIcon,
    ShieldExclamationIcon,
    ArrowTrendingUpIcon,
    ClockIcon,
  },
  setup() {
    const topApps = [
      { name: 'Slack', users: 1284, licenses: 1500, spend: '$18,900', trend: 12, category: 'Collaboration' },
      { name: 'Google Workspace', users: 1743, licenses: 2000, spend: '$34,200', trend: 5, category: 'Productivity' },
      { name: 'Salesforce', users: 423, licenses: 500, spend: '$63,450', trend: -3, category: 'CRM' },
      { name: 'Zoom', users: 1102, licenses: 1500, spend: '$16,530', trend: 8, category: 'Communication' },
      { name: 'Jira', users: 634, licenses: 800, spend: '$12,680', trend: 15, category: 'Project Mgmt' },
      { name: 'Figma', users: 189, licenses: 250, spend: '$5,670', trend: 22, category: 'Design' },
    ];

    const shadowItApps = [
      { name: 'ChatGPT', users: 342, risk: 'High', firstSeen: 'Jan 12, 2026', category: 'AI' },
      { name: 'Notion', users: 156, risk: 'Medium', firstSeen: 'Dec 5, 2025', category: 'Productivity' },
      { name: 'Canva', users: 89, risk: 'Low', firstSeen: 'Nov 18, 2025', category: 'Design' },
      { name: 'Airtable', users: 67, risk: 'Medium', firstSeen: 'Feb 1, 2026', category: 'Database' },
      { name: 'Miro', users: 43, risk: 'Low', firstSeen: 'Jan 28, 2026', category: 'Collaboration' },
    ];

    const unusedLicenses = [
      { app: 'Salesforce', unused: 77, total: 500, monthlyCost: '$11,550', lastActive: '30+ days' },
      { app: 'Zoom', unused: 398, total: 1500, monthlyCost: '$5,970', lastActive: '60+ days' },
      { app: 'Jira', unused: 166, total: 800, monthlyCost: '$3,320', lastActive: '45+ days' },
      { app: 'Slack', unused: 216, total: 1500, monthlyCost: '$3,240', lastActive: '30+ days' },
      { app: 'Figma', unused: 61, total: 250, monthlyCost: '$1,830', lastActive: '90+ days' },
    ];

    const complianceAlerts = [
      { app: 'Dropbox', issue: 'Data residency violation', severity: 'critical', users: 23, date: 'Feb 17, 2026' },
      { app: 'WeTransfer', issue: 'Unapproved file sharing', severity: 'high', users: 45, date: 'Feb 16, 2026' },
      { app: 'ChatGPT', issue: 'Sensitive data exposure risk', severity: 'high', users: 342, date: 'Feb 15, 2026' },
      { app: 'Personal Gmail', issue: 'Corporate data in personal accounts', severity: 'medium', users: 89, date: 'Feb 14, 2026' },
    ];

    const spendByCategory = [
      { category: 'CRM', spend: '$63,450', percentage: 38 },
      { category: 'Productivity', spend: '$34,200', percentage: 20 },
      { category: 'Collaboration', spend: '$22,140', percentage: 13 },
      { category: 'Communication', spend: '$16,530', percentage: 10 },
      { category: 'Project Mgmt', spend: '$12,680', percentage: 8 },
      { category: 'Security', spend: '$9,800', percentage: 6 },
      { category: 'Other', spend: '$8,200', percentage: 5 },
    ];

    const renewals = [
      { app: 'Salesforce', date: 'Mar 15, 2026', cost: '$63,450/yr', daysLeft: 25, status: 'urgent' },
      { app: 'Zoom', date: 'Apr 1, 2026', cost: '$16,530/yr', daysLeft: 42, status: 'upcoming' },
      { app: 'Jira', date: 'Apr 22, 2026', cost: '$12,680/yr', daysLeft: 63, status: 'upcoming' },
      { app: 'Figma', date: 'May 10, 2026', cost: '$5,670/yr', daysLeft: 81, status: 'normal' },
    ];

    return {
      menuItems,
      profileMenuItems,
      topApps,
      shadowItApps,
      unusedLicenses,
      complianceAlerts,
      spendByCategory,
      renewals,
      SaasManagementIcon: markRaw(SaasManagementIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="access"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />

        <PageHeader
          title="SaaS Management"
          :icon="SaasManagementIcon"
          class="shrink-0"
        >
          <template #actions>
            <PvButton label="Discover Apps" severity="secondary" variant="outlined">
              <template #icon>
                <GlobeAltIcon class="size-5" />
              </template>
            </PvButton>
            <PvButton label="Export Report" severity="secondary" variant="outlined" />
            <PvButton label="Sync Now" severity="primary">
              <template #icon>
                <ArrowPathIcon class="size-5" />
              </template>
            </PvButton>
          </template>
        </PageHeader>

        <!-- Page Content -->
        <div class="flex-1 overflow-auto bg-neutral-surface p-6">
          <div class="grid grid-cols-4 gap-4">

            <!-- Row 1: Summary Stats -->
            <CollapsiblePanel header="Total SaaS Apps">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">148</span>
                  <span class="text-heading-3 text-neutral-base self-end">Apps</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-success-base" />
                    <span class="text-body-sm-bold text-success-base">12</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">new this month</span>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="Monthly SaaS Spend">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">$167K</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">8%</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">vs last month</span>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="Unused Licenses">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-warning-base">918</span>
                  <span class="text-heading-3 text-neutral-base self-end">Licenses</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <span class="text-body-sm text-warning-base">$25,910/mo wasted</span>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="Shadow IT">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-[7px]">
                  <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-error-base">37</span>
                  <span class="text-heading-3 text-neutral-base self-end">Apps</span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="flex items-center gap-0.5">
                    <ArrowUpIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">5</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">new this week</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 2: Top Applications (full width) -->
            <CollapsiblePanel header="Top Applications by Usage" class="col-span-4">
              <template #actions>
                <PvButton label="View All Apps" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-4 mb-3">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">148</span> Total apps</span>
                  <span class="text-body-sm text-success-base"><span class="text-body-sm-bold">126</span> Active</span>
                  <span class="text-body-sm text-warning-base"><span class="text-body-sm-bold">22</span> Low usage</span>
                </div>

                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(app, index) in topApps" :key="index" class="flex items-center py-3 gap-4">
                    <div class="flex items-center gap-3 w-48 shrink-0">
                      <span class="text-body-md-bold text-neutral-base">{{ app.name }}</span>
                    </div>
                    <PvTag :value="app.category" severity="secondary" class="shrink-0" />
                    <div class="flex items-center gap-1 shrink-0">
                      <span class="text-body-sm text-neutral-subtle">{{ app.users }} / {{ app.licenses }} licenses</span>
                    </div>
                    <div class="flex-1 h-2 bg-neutral-surface rounded-full overflow-hidden">
                      <div
                        class="h-full rounded-full"
                        :class="app.users / app.licenses > 0.9 ? 'bg-error-base' : app.users / app.licenses > 0.7 ? 'bg-warning-base' : 'bg-success-base'"
                        :style="{ width: Math.round((app.users / app.licenses) * 100) + '%' }"
                      ></div>
                    </div>
                    <span class="text-body-sm-bold text-neutral-base w-24 text-right shrink-0">{{ app.spend }}/mo</span>
                    <div class="flex items-center gap-0.5 w-16 shrink-0">
                      <ArrowUpIcon v-if="app.trend > 0" class="w-3.5 h-3.5 text-success-base" />
                      <ArrowDownIcon v-else class="w-3.5 h-3.5 text-error-base" />
                      <span class="text-body-sm" :class="app.trend > 0 ? 'text-success-base' : 'text-error-base'">{{ Math.abs(app.trend) }}%</span>
                    </div>
                    <PvButton severity="secondary" variant="text" size="small">
                      <template #icon>
                        <EllipsisHorizontalIcon class="w-4 h-4" />
                      </template>
                    </PvButton>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 3: Shadow IT (2 cols) + License Optimization (2 cols) -->
            <CollapsiblePanel header="Shadow IT Detected" class="col-span-2">
              <template #actions>
                <PvButton label="Review All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-error-base"><span class="text-body-sm-bold">37</span> Unapproved apps found</span>
                  <div class="flex items-center gap-1.5">
                    <ArrowUpIcon class="w-4 h-4 text-error-base" />
                    <span class="text-body-sm-bold text-error-base">5</span>
                    <span class="text-body-sm text-neutral-subtle">new this week</span>
                  </div>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(app, index) in shadowItApps" :key="index" class="flex items-center justify-between py-3">
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2">
                        <span class="text-body-md-bold text-neutral-base">{{ app.name }}</span>
                        <PvTag :value="app.category" severity="secondary" />
                      </div>
                      <span class="text-body-xs text-neutral-subtle">{{ app.users }} users &middot; First seen {{ app.firstSeen }}</span>
                    </div>
                    <PvTag
                      :value="app.risk + ' Risk'"
                      :severity="app.risk === 'High' ? 'danger' : app.risk === 'Medium' ? 'warn' : 'secondary'"
                    />
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="License Optimization" class="col-span-2">
              <template #actions>
                <PvButton label="Optimize All" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-warning-base"><span class="text-body-sm-bold">$25,910</span> potential monthly savings</span>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(license, index) in unusedLicenses" :key="index" class="flex items-center justify-between py-3">
                    <div class="flex flex-col">
                      <span class="text-body-md-bold text-neutral-base">{{ license.app }}</span>
                      <span class="text-body-xs text-neutral-subtle">{{ license.unused }} of {{ license.total }} unused &middot; Inactive {{ license.lastActive }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-body-sm-bold text-warning-base">{{ license.monthlyCost }}/mo</span>
                      <PvButton label="Reclaim" severity="secondary" variant="outlined" size="small" />
                    </div>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 4: Spend by Category (2 cols) + Upcoming Renewals (2 cols) -->
            <CollapsiblePanel header="Spend by Category" class="col-span-2">
              <template #actions>
                <PvButton label="Full Report" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">$167,000</span> Total monthly spend</span>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(cat, index) in spendByCategory" :key="index" class="flex items-center gap-3 py-3">
                    <span class="text-body-md text-neutral-base w-28 shrink-0">{{ cat.category }}</span>
                    <div class="flex-1 h-2 bg-neutral-surface rounded-full overflow-hidden">
                      <div
                        class="h-full bg-neutral-base rounded-full"
                        :style="{ width: cat.percentage + '%' }"
                      ></div>
                    </div>
                    <span class="text-body-sm text-neutral-subtle w-10 text-right shrink-0">{{ cat.percentage }}%</span>
                    <span class="text-body-sm-bold text-neutral-base w-20 text-right shrink-0">{{ cat.spend }}</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel header="Upcoming Renewals" class="col-span-2">
              <template #actions>
                <PvButton label="All Renewals" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">4</span> renewals in next 90 days</span>
                  <span class="text-body-sm text-error-base"><span class="text-body-sm-bold">1</span> urgent</span>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(renewal, index) in renewals" :key="index" class="flex items-center justify-between py-3">
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2">
                        <span class="text-body-md-bold text-neutral-base">{{ renewal.app }}</span>
                        <PvTag
                          v-if="renewal.status === 'urgent'"
                          value="Urgent"
                          severity="danger"
                        />
                      </div>
                      <span class="text-body-xs text-neutral-subtle">Renews {{ renewal.date }} &middot; {{ renewal.cost }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="text-body-sm" :class="renewal.daysLeft <= 30 ? 'text-error-base' : 'text-neutral-subtle'">{{ renewal.daysLeft }} days left</span>
                      <PvButton label="Review" severity="secondary" variant="outlined" size="small" />
                    </div>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Row 5: Compliance Alerts (full width) -->
            <CollapsiblePanel header="Compliance & Security Alerts" class="col-span-4">
              <template #actions>
                <PvButton label="View All Alerts" severity="secondary" variant="outlined" size="small" />
              </template>
              <div class="flex flex-col">
                <div class="flex items-center gap-4 mb-3">
                  <span class="text-body-sm text-error-base"><span class="text-body-sm-bold">2</span> Critical / High</span>
                  <span class="text-body-sm text-warning-base"><span class="text-body-sm-bold">1</span> Medium</span>
                  <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">4</span> Total alerts</span>
                </div>
                <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                  <div v-for="(alert, index) in complianceAlerts" :key="index" class="flex items-center py-3 gap-3">
                    <ShieldExclamationIcon
                      class="w-5 h-5 shrink-0"
                      :class="alert.severity === 'critical' ? 'text-error-base' : alert.severity === 'high' ? 'text-error-base' : 'text-warning-base'"
                    />
                    <span class="text-body-md-bold text-neutral-base shrink-0">{{ alert.app }}</span>
                    <span class="text-body-sm text-neutral-base">{{ alert.issue }}</span>
                    <PvTag
                      :value="alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)"
                      :severity="alert.severity === 'critical' ? 'danger' : alert.severity === 'high' ? 'danger' : 'warn'"
                      class="shrink-0"
                    />
                    <span class="text-body-sm text-neutral-subtle shrink-0">{{ alert.users }} users affected</span>
                    <span class="text-body-sm text-neutral-subtle shrink-0">{{ alert.date }}</span>
                    <div class="flex items-center gap-2 ml-auto shrink-0">
                      <PvButton label="Investigate" severity="primary" variant="outlined" size="small" />
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

            <!-- Row 6: SaaS Spend Trend Chart (full width) -->
            <CollapsiblePanel header="SaaS Spend Trend" class="col-span-4">
              <div class="flex flex-col">
                <div class="flex items-center gap-6 mb-4">
                  <div class="flex items-center gap-[7px]">
                    <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-neutral-base">$167K</span>
                    <span class="text-heading-3 text-neutral-base self-end">Current Month</span>
                  </div>
                  <div class="flex items-center gap-[7px]">
                    <span class="text-[32px] font-semibold leading-8 tracking-[-0.5px] text-success-base">$1.89M</span>
                    <span class="text-heading-3 text-neutral-base self-end">Annual Run Rate</span>
                  </div>
                </div>

                <div class="relative w-full h-[200px] mb-4">
                  <svg class="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                    <line x1="0" y1="25" x2="800" y2="25" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="65" x2="800" y2="65" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="105" x2="800" y2="105" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="145" x2="800" y2="145" stroke="#e7e9ea" stroke-width="1" />
                    <line x1="0" y1="185" x2="800" y2="185" stroke="#e7e9ea" stroke-width="1" />

                    <text x="0" y="22" fill="#6b7280" font-size="11">$200K</text>
                    <text x="0" y="62" fill="#6b7280" font-size="11">$175K</text>
                    <text x="0" y="102" fill="#6b7280" font-size="11">$150K</text>
                    <text x="0" y="142" fill="#6b7280" font-size="11">$125K</text>
                    <text x="0" y="182" fill="#6b7280" font-size="11">$100K</text>

                    <!-- Total Spend line -->
                    <polyline
                      fill="none"
                      stroke="#3B82F6"
                      stroke-width="2.5"
                      points="60,145 160,130 280,115 400,105 520,85 640,68 760,55"
                    />

                    <!-- Optimized Spend line -->
                    <polyline
                      fill="none"
                      stroke="#22C55E"
                      stroke-width="2.5"
                      stroke-dasharray="6,4"
                      points="60,155 160,145 280,138 400,130 520,122 640,118 760,110"
                    />
                  </svg>

                  <div class="flex justify-between px-10 mt-1">
                    <span v-for="month in ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb']" :key="month" class="text-body-xs text-neutral-subtle">{{ month }}</span>
                  </div>
                </div>

                <div class="flex items-center justify-center gap-6">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#3B82F6]"></span>
                    <span class="text-body-sm text-neutral-subtle">Total Spend</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-6 h-0 border-t-2 border-dashed border-[#22C55E]"></span>
                    <span class="text-body-sm text-neutral-subtle">Optimized (projected)</span>
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

const meta: Meta<typeof SaasManagementPage> = {
  title: "Projects/Burak's Playground/Pages/SaaS Management",
  component: SaasManagementPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SaasManagementPage>;

export const Default: Story = {};
