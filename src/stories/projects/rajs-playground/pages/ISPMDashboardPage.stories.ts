import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent, markRaw, ref } from 'vue';
import {
  AppNavigation,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellStatus,
  MessageNotification,
  PageHeader,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';

import {
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  BellIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  GlobeAltIcon,
  HomeIcon,
  KeyIcon,
  PlayIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline';
import {
  AccessIcon,
  DeviceGroupsIcon,
  DeviceListsIcon,
  DeviceManagementIcon,
  PasswordManagerIcon,
  SaasManagementIcon,
  SsoIcon,
  WorkflowIcon,
} from '@jumpcloud/icons';

import AdminTopBar from '@/components/AdminTopBar.vue';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';

// ─── Navigation ───

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
    label: 'Raj',
    itemType: 'profile_compact',
    initials: 'RK',
    name: 'Raj',
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

// ─── Types ───

interface PostureCategory {
  label: string;
  score: number;
  total: number;
  severity: 'success' | 'warn' | 'danger';
}

interface Finding {
  id: number;
  description: string;
  category: string;
  severity: 'High' | 'Medium' | 'Low';
  affectedCount: number;
  recommendation: string;
}

interface ComplianceControl {
  id: number;
  framework: string;
  control: string;
  description: string;
  coverage: number;
}

// ─── Mock Data ───

const postureCategories: PostureCategory[] = [
  { label: 'Applications', score: 78, total: 100, severity: 'warn' },
  { label: 'Devices', score: 91, total: 100, severity: 'success' },
  { label: 'LDAP / RADIUS', score: 54, total: 100, severity: 'danger' },
  { label: 'SSH Keys', score: 62, total: 100, severity: 'warn' },
  { label: 'Non-Human Identities', score: 45, total: 100, severity: 'danger' },
];

const findingsData: Finding[] = [
  { id: 1, description: '12 users have SSH key access unused for 90+ days', category: 'SSH Keys', severity: 'High', affectedCount: 12, recommendation: 'Revoke stale SSH key assignments' },
  { id: 2, description: '3 service accounts have credentials older than 180 days', category: 'NHI', severity: 'High', affectedCount: 3, recommendation: 'Rotate service account credentials' },
  { id: 3, description: 'Engineering Admins group grants access to 22 resources including production AWS', category: 'Groups', severity: 'High', affectedCount: 22, recommendation: 'Reduce blast radius of Engineering Admins' },
  { id: 4, description: '8 users have privileged LDAP access with no MFA', category: 'LDAP / RADIUS', severity: 'High', affectedCount: 8, recommendation: 'Enforce MFA for privileged LDAP accounts' },
  { id: 5, description: '5 users access Salesforce via 2+ paths (direct + group)', category: 'Applications', severity: 'Medium', affectedCount: 5, recommendation: 'Consolidate redundant access paths' },
  { id: 6, description: '2 dormant accounts still have active application access', category: 'Applications', severity: 'Medium', affectedCount: 2, recommendation: 'Deprovision dormant user accounts' },
  { id: 7, description: 'Contractors group has 6 members with no access review in 120 days', category: 'Groups', severity: 'Medium', affectedCount: 6, recommendation: 'Schedule contractor access review' },
  { id: 8, description: '4 API keys have read-write scope that could be read-only', category: 'NHI', severity: 'Low', affectedCount: 4, recommendation: 'Reduce API key scope to least privilege' },
  { id: 9, description: 'All device groups have been reviewed within 90 days', category: 'Devices', severity: 'Low', affectedCount: 0, recommendation: 'No action needed' },
];

const complianceControls: ComplianceControl[] = [
  { id: 1, framework: 'SOC 2', control: 'CC6.1', description: 'Logical access security', coverage: 75 },
  { id: 2, framework: 'SOC 2', control: 'CC6.2', description: 'Access provisioning', coverage: 82 },
  { id: 3, framework: 'SOC 2', control: 'CC6.3', description: 'Access removal & modification', coverage: 68 },
  { id: 4, framework: 'ISO 27001', control: 'A.9.2.5', description: 'Review of user access rights', coverage: 60 },
  { id: 5, framework: 'ISO 27001', control: 'A.9.2.6', description: 'Removal of access rights', coverage: 71 },
  { id: 6, framework: 'ISO 27001', control: 'A.9.4.1', description: 'Information access restriction', coverage: 85 },
];

// ─── Columns ───

const findingColumns = [
  { field: 'description', header: 'Finding', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'category', header: 'Category', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'severity', header: 'Severity', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      High: { label: 'High', severity: 'danger' },
      Medium: { label: 'Medium', severity: 'warn' },
      Low: { label: 'Low', severity: 'success' },
    },
  },
  { field: 'affectedCount', header: 'Affected', sortable: true, component: markRaw(DataTableCellText) },
];

const complianceColumns = [
  { field: 'framework', header: 'Framework', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'control', header: 'Control', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'description', header: 'Description', sortable: true, component: markRaw(DataTableCellText) },
];

// ─── Component ───

const ISPMDashboardPage = defineComponent({
  name: 'ISPMDashboardPage',
  components: {
    AppNavigation,
    CollapsiblePanel,
    CircuitDataTable,
    MessageNotification,
    PageHeader,
    AdminTopBar,
    ListPageLayout,
    PvButton: Button,
    PvDivider: Divider,
    PvTag: Tag,
    ShieldCheckIcon,
    ExclamationTriangleIcon,
    ComputerDesktopIcon,
    GlobeAltIcon,
    KeyIcon,
    ServerStackIcon,
    ClockIcon,
    CalendarDaysIcon,
    PlayIcon,
  },
  setup() {
    const overallScore = 72;
    const scanRunning = ref(false);

    const highFindings = findingsData.filter((f) => f.severity === 'High').length;
    const mediumFindings = findingsData.filter((f) => f.severity === 'Medium').length;

    function runScan() {
      scanRunning.value = true;
      setTimeout(() => { scanRunning.value = false; }, 2000);
    }

    return {
      menuItems,
      profileMenuItems,
      overallScore,
      postureCategories,
      findingsData,
      complianceControls,
      findingColumns,
      complianceColumns,
      highFindings,
      mediumFindings,
      scanRunning,
      runScan,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="security"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <AdminTopBar />
        <PageHeader
          title="Identity Posture"
          subtitleText="Last scan: Feb 28, 2026 at 3:45 PM"
        >
          <template #icon>
            <ShieldCheckIcon class="size-7" />
          </template>
          <template #actions>
            <PvButton label="Schedule" severity="secondary" variant="outlined">
              <template #icon="iconProps">
                <CalendarDaysIcon :class="iconProps.class" />
              </template>
            </PvButton>
            <PvButton label="Run Scan" :loading="scanRunning" @click="runScan">
              <template #icon="iconProps">
                <PlayIcon :class="iconProps.class" />
              </template>
            </PvButton>
          </template>
        </PageHeader>

        <ListPageLayout class="w-full! h-full!">
          <div class="flex flex-col gap-6 px-6 py-4">

            <!-- Posture Score -->
            <CollapsiblePanel header="Overall Posture">
              <template #titleicon="iconProps">
                <ShieldCheckIcon :class="iconProps.class" />
              </template>
              <div class="flex items-center gap-6 py-2">
                <div class="flex items-center gap-3">
                  <span class="text-heading-1 text-neutral-base">{{ overallScore }}</span>
                  <div class="flex flex-col gap-1">
                    <PvTag severity="warn">Moderate</PvTag>
                    <span class="text-body-sm text-neutral-subtle">out of 100</span>
                  </div>
                </div>
                <div class="h-10 w-px bg-neutral-default_solid"></div>
                <div class="flex items-center gap-4">
                  <span class="text-body-sm text-error-base">{{ highFindings }} critical findings</span>
                  <span class="text-body-sm text-neutral-subtle">&middot;</span>
                  <span class="text-body-sm text-warning-base">{{ mediumFindings }} moderate findings</span>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Category Breakdown -->
            <div class="grid grid-cols-5 gap-4">
              <div v-for="cat in postureCategories" :key="cat.label" class="flex flex-col gap-2 rounded-md border border-neutral-default_solid p-4">
                <span class="text-body-sm-semi-bold text-neutral-base">{{ cat.label }}</span>
                <div class="flex items-baseline gap-2">
                  <span class="text-heading-3 text-neutral-base">{{ cat.score }}</span>
                  <PvTag :severity="cat.severity">{{ cat.score >= 80 ? 'Good' : cat.score >= 60 ? 'Fair' : 'Poor' }}</PvTag>
                </div>
                <div class="h-1.5 w-full rounded-full bg-neutral-surface_raised">
                  <div
                    class="h-1.5 rounded-full transition-all"
                    :class="cat.severity === 'success' ? 'bg-success-base' : cat.severity === 'warn' ? 'bg-warning-base' : 'bg-error-base'"
                    :style="{ width: cat.score + '%' }"
                  ></div>
                </div>
              </div>
            </div>

            <PvDivider />

            <!-- Findings -->
            <div>
              <div class="flex items-center justify-between pb-3">
                <div>
                  <p class="text-heading-4 text-neutral-base">Findings</p>
                  <p class="text-body-sm text-neutral-subtle">Actionable issues ranked by severity</p>
                </div>
                <div class="flex items-center gap-2">
                  <PvTag severity="danger">{{ highFindings }} High</PvTag>
                  <PvTag severity="warn">{{ mediumFindings }} Medium</PvTag>
                </div>
              </div>

              <CircuitDataTable
                :data="findingsData"
                :columns="findingColumns"
                :paginator="true"
                :rows="10"
                dataKey="id"
              />
            </div>

            <PvDivider />

            <!-- Compliance Coverage -->
            <div>
              <div class="flex items-center justify-between pb-3">
                <div>
                  <p class="text-heading-4 text-neutral-base">Compliance Coverage</p>
                  <p class="text-body-sm text-neutral-subtle">Control mapping across active frameworks</p>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 pb-4">
                <div v-for="ctrl in complianceControls" :key="ctrl.id" class="flex flex-col gap-2 rounded-md border border-neutral-default_solid p-4">
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm-semi-bold text-neutral-base">{{ ctrl.framework }} {{ ctrl.control }}</span>
                    <span class="text-body-sm-semi-bold" :class="ctrl.coverage >= 80 ? 'text-success-base' : ctrl.coverage >= 60 ? 'text-warning-base' : 'text-error-base'">{{ ctrl.coverage }}%</span>
                  </div>
                  <span class="text-body-sm text-neutral-subtle">{{ ctrl.description }}</span>
                  <div class="h-1.5 w-full rounded-full bg-neutral-surface_raised">
                    <div
                      class="h-1.5 rounded-full transition-all"
                      :class="ctrl.coverage >= 80 ? 'bg-success-base' : ctrl.coverage >= 60 ? 'bg-warning-base' : 'bg-error-base'"
                      :style="{ width: ctrl.coverage + '%' }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ListPageLayout>
      </div>
    </div>
  `,
});

// ─── Story ───

const meta: Meta<typeof ISPMDashboardPage> = {
  title: "Projects/Raj's Playground/Pages/ISPM v2/1 — Identity Posture",
  component: ISPMDashboardPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ISPMDashboardPage>;

export const Default: Story = {};
