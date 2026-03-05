import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, defineComponent, markRaw, ref } from 'vue';
import {
  ActionsToolbar,
  AppNavigation,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellToken,
  DataTableToolbar,
  MessageNotification,
  PageHeader,
} from '@jumpcloud/circuit/components';
import type { Action, SelectedItem } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import {
  ArrowLeftIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  BellIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  CheckIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  HomeIcon,
  PlusIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  XMarkIcon,
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

import TopBar from '@/components/TopBar.vue';
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

interface Campaign {
  id: number;
  name: string;
  scope: string;
  reviewer: string;
  deadline: string;
  totalItems: number;
  reviewedItems: number;
  status: 'Draft' | 'Active' | 'Overdue' | 'Complete';
  createdAt: string;
}

interface ReviewItem {
  id: number;
  campaignId: number;
  identity: string;
  identityType: 'Human' | 'Service Account';
  resource: string;
  resourceType: string;
  accessPath: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  lastUsed: string;
  decision: 'Pending' | 'Certify' | 'Revoke';
}

interface DecisionLogEntry {
  id: number;
  identity: string;
  resource: string;
  decision: 'Certify' | 'Revoke';
  decidedBy: string;
  decidedAt: string;
  reason: string;
}

// ─── Mock Data ───

const campaignsData: Campaign[] = [
  { id: 1, name: 'Q1 2026 Engineering Access Review', scope: 'Engineering → Production', reviewer: 'Derek Huang', deadline: 'Mar 15, 2026', totalItems: 62, reviewedItems: 47, status: 'Active', createdAt: 'Feb 1, 2026' },
  { id: 2, name: 'Contractor Access Recertification', scope: 'Contractors → All Resources', reviewer: 'Admin IT', deadline: 'Feb 28, 2026', totalItems: 18, reviewedItems: 18, status: 'Complete', createdAt: 'Feb 10, 2026' },
  { id: 3, name: 'SOC 2 Annual Review — Applications', scope: 'All Users → SSO Applications', reviewer: 'Sarah Chen', deadline: 'Feb 20, 2026', totalItems: 45, reviewedItems: 30, status: 'Overdue', createdAt: 'Jan 20, 2026' },
  { id: 4, name: 'LDAP/RADIUS Privileged Access', scope: 'All → LDAP & RADIUS', reviewer: 'Derek Huang', deadline: 'Mar 31, 2026', totalItems: 28, reviewedItems: 0, status: 'Draft', createdAt: 'Feb 25, 2026' },
  { id: 5, name: 'NHI Credential Rotation Check', scope: 'Service Accounts → All', reviewer: 'Nina Patel', deadline: 'Mar 10, 2026', totalItems: 12, reviewedItems: 4, status: 'Active', createdAt: 'Feb 15, 2026' },
];

const reviewItemsForCampaign1: ReviewItem[] = [
  { id: 1, campaignId: 1, identity: 'Mike Johnson', identityType: 'Human', resource: 'AWS Console', resourceType: 'Application', accessPath: 'Engineering Admins → Admin Role', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 2, campaignId: 1, identity: 'Mike Johnson', identityType: 'Human', resource: 'SSH Key Vault', resourceType: 'SSH Keys', accessPath: 'Direct Assignment', riskLevel: 'High', lastUsed: 'Feb 27, 2026', decision: 'Pending' },
  { id: 3, campaignId: 1, identity: 'Nina Patel', identityType: 'Human', resource: 'AWS Console', resourceType: 'Application', accessPath: 'Engineering Admins → Admin Role', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 4, campaignId: 1, identity: 'Nina Patel', identityType: 'Human', resource: 'GitHub Enterprise', resourceType: 'Application', accessPath: 'Direct Assignment', riskLevel: 'Medium', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
  { id: 5, campaignId: 1, identity: 'deploy-bot', identityType: 'Service Account', resource: 'AWS Console', resourceType: 'Application', accessPath: 'IT Operations → Production Access', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 6, campaignId: 1, identity: 'deploy-bot', identityType: 'Service Account', resource: 'SSH Key Vault', resourceType: 'SSH Keys', accessPath: 'Production Access → Service Role', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
  { id: 7, campaignId: 1, identity: 'Laura Kim', identityType: 'Human', resource: 'Salesforce', resourceType: 'Application', accessPath: 'Direct Assignment', riskLevel: 'Low', lastUsed: 'Feb 26, 2026', decision: 'Certify' },
  { id: 8, campaignId: 1, identity: 'Tom Wilson', identityType: 'Human', resource: 'Salesforce', resourceType: 'Application', accessPath: 'Sales Managers', riskLevel: 'Low', lastUsed: 'Feb 25, 2026', decision: 'Certify' },
  { id: 9, campaignId: 1, identity: 'Emily Davis', identityType: 'Human', resource: 'Jira Cloud', resourceType: 'Application', accessPath: 'All Employees', riskLevel: 'Low', lastUsed: 'Feb 27, 2026', decision: 'Certify' },
  { id: 10, campaignId: 1, identity: 'ci-runner', identityType: 'Service Account', resource: 'GitHub Enterprise', resourceType: 'Application', accessPath: 'Engineering Admins → CI Role', riskLevel: 'Medium', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 11, campaignId: 1, identity: 'Derek Huang', identityType: 'Human', resource: 'Corporate LDAP', resourceType: 'LDAP', accessPath: 'IT Operations → Admin', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
  { id: 12, campaignId: 1, identity: 'Derek Huang', identityType: 'Human', resource: 'VPN RADIUS', resourceType: 'RADIUS', accessPath: 'IT Operations', riskLevel: 'Medium', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
];

const decisionLog: DecisionLogEntry[] = [
  { id: 1, identity: 'Nina Patel', resource: 'GitHub Enterprise', decision: 'Certify', decidedBy: 'Derek Huang', decidedAt: 'Feb 27, 2026 2:14 PM', reason: 'Active daily contributor' },
  { id: 2, identity: 'deploy-bot', resource: 'SSH Key Vault', decision: 'Certify', decidedBy: 'Derek Huang', decidedAt: 'Feb 27, 2026 2:16 PM', reason: 'Required for CI/CD pipeline' },
  { id: 3, identity: 'Laura Kim', resource: 'Salesforce', decision: 'Certify', decidedBy: 'Derek Huang', decidedAt: 'Feb 26, 2026 10:30 AM', reason: 'Design team needs CRM access for user research' },
  { id: 4, identity: 'Tom Wilson', resource: 'Salesforce', decision: 'Certify', decidedBy: 'Derek Huang', decidedAt: 'Feb 26, 2026 10:31 AM', reason: 'Sales team — core tool' },
  { id: 5, identity: 'Emily Davis', resource: 'Jira Cloud', decision: 'Certify', decidedBy: 'Derek Huang', decidedAt: 'Feb 25, 2026 4:00 PM', reason: 'Cross-functional project tracking' },
  { id: 6, identity: 'Derek Huang', resource: 'Corporate LDAP', decision: 'Certify', decidedBy: 'Admin IT', decidedAt: 'Feb 25, 2026 11:00 AM', reason: 'Security team lead — needs LDAP admin' },
  { id: 7, identity: 'Derek Huang', resource: 'VPN RADIUS', decision: 'Certify', decidedBy: 'Admin IT', decidedAt: 'Feb 25, 2026 11:01 AM', reason: 'On-call remote access requirement' },
];

// ─── Columns ───

const campaignColumns = [
  { field: 'name', header: 'Campaign', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'scope', header: 'Scope', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'reviewer', header: 'Reviewer', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'deadline', header: 'Deadline', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'status', header: 'Status', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: {
      Draft: { label: 'Draft', severity: 'secondary' },
      Active: { label: 'Active', severity: 'info' },
      Overdue: { label: 'Overdue', severity: 'danger' },
      Complete: { label: 'Complete', severity: 'success' },
    },
  },
];

const reviewItemColumns = [
  { field: 'identity', header: 'Identity', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'identityType', header: 'Type', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: {
      Human: { label: 'Human', severity: 'info' },
      'Service Account': { label: 'Service Acct', severity: 'warn' },
    },
  },
  { field: 'resource', header: 'Resource', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'resourceType', header: 'Resource Type', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'accessPath', header: 'Access Path', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'riskLevel', header: 'Risk', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: {
      Low: { label: 'Low', severity: 'success' },
      Medium: { label: 'Medium', severity: 'warn' },
      High: { label: 'High', severity: 'danger' },
    },
  },
  { field: 'lastUsed', header: 'Last Used', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'decision', header: 'Decision', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: {
      Pending: { label: 'Pending', severity: 'warn' },
      Certify: { label: 'Certified', severity: 'success' },
      Revoke: { label: 'Revoked', severity: 'danger' },
    },
  },
];

const decisionLogColumns = [
  { field: 'identity', header: 'Identity', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'resource', header: 'Resource', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'decision', header: 'Decision', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: {
      Certify: { label: 'Certified', severity: 'success' },
      Revoke: { label: 'Revoked', severity: 'danger' },
    },
  },
  { field: 'decidedBy', header: 'Decided By', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'decidedAt', header: 'Decided At', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'reason', header: 'Reason', sortable: true, component: markRaw(DataTableCellText) },
];

// ─── Component ───

const ISPMCampaignsPage = defineComponent({
  name: 'ISPMCampaignsPage',
  components: {
    ActionsToolbar,
    AppNavigation,
    CircuitDataTable,
    DataTableToolbar,
    MessageNotification,
    PageHeader,
    TopBar,
    ListPageLayout,
    PvButton: Button,
    PvDialog: Dialog,
    PvDivider: Divider,
    PvTag: Tag,
    PvTabs: Tabs,
    PvTabList: TabList,
    PvTab: Tab,
    PvTabPanels: TabPanels,
    PvTabPanel: TabPanel,
    ClipboardDocumentCheckIcon,
    CalendarDaysIcon,
    ArrowLeftIcon,
    CheckIcon,
    PlusIcon,
    XMarkIcon,
  },
  setup() {
    const currentView = ref<'list' | 'detail'>('list');
    const selectedCampaign = ref<Campaign | null>(null);
    const reviewItems = ref<ReviewItem[]>(reviewItemsForCampaign1.map((r) => ({ ...r })));
    const selectedReviewItems = ref<ReviewItem[]>([]);
    const detailTab = ref('queue');
    const actionNotice = ref<{ severity: 'success' | 'warn' | 'error'; title: string; detail: string } | null>(null);

    // Campaign list data
    const campaigns = ref<Campaign[]>(campaignsData.map((c) => ({ ...c })));

    const activeCampaigns = computed(() => campaigns.value.filter((c) => c.status === 'Active').length);
    const overdueCampaigns = computed(() => campaigns.value.filter((c) => c.status === 'Overdue').length);

    // Campaign detail computations
    const progress = computed(() => {
      if (!selectedCampaign.value) return 0;
      return Math.round((selectedCampaign.value.reviewedItems / selectedCampaign.value.totalItems) * 100);
    });

    const pendingCount = computed(() => reviewItems.value.filter((r) => r.decision === 'Pending').length);
    const certifiedCount = computed(() => reviewItems.value.filter((r) => r.decision === 'Certify').length);
    const revokedCount = computed(() => reviewItems.value.filter((r) => r.decision === 'Revoke').length);

    // ActionsToolbar items
    const bulkActions: Action[] = [
      { id: 'certify', label: 'Certify Selected' },
      { id: 'revoke', label: 'Revoke Selected' },
    ];

    const toolbarSelectedItems = computed<SelectedItem[]>(() =>
      selectedReviewItems.value.map((r) => ({
        id: String(r.id),
        label: r.identity,
        description: `${r.resource} — ${r.decision}`,
      })),
    );

    function openCampaign(event: { data: Campaign }) {
      selectedCampaign.value = event.data;
      detailTab.value = 'queue';
      actionNotice.value = null;
      selectedReviewItems.value = [];
      if (event.data.id === 1) {
        reviewItems.value = reviewItemsForCampaign1.map((r) => ({ ...r }));
      } else {
        reviewItems.value = [];
      }
      currentView.value = 'detail';
    }

    function backToList() {
      currentView.value = 'list';
      selectedCampaign.value = null;
      actionNotice.value = null;
      selectedReviewItems.value = [];
    }

    function handleReviewRowClick(event: { data: ReviewItem }) {
      const item = event.data;
      if (item.decision !== 'Pending') return;

      const existing = selectedReviewItems.value.findIndex((r) => r.id === item.id);
      if (existing >= 0) {
        selectedReviewItems.value = selectedReviewItems.value.filter((r) => r.id !== item.id);
      } else {
        selectedReviewItems.value = [...selectedReviewItems.value, item];
      }
    }

    function applyBulkAction(action: Action) {
      const decision = action.id === 'certify' ? 'Certify' as const : 'Revoke' as const;
      const ids = new Set(selectedReviewItems.value.map((r) => r.id));
      reviewItems.value = reviewItems.value.map((r) =>
        ids.has(r.id) ? { ...r, decision } : r,
      );

      if (selectedCampaign.value) {
        selectedCampaign.value.reviewedItems = reviewItems.value.filter((r) => r.decision !== 'Pending').length;
      }

      actionNotice.value = {
        severity: decision === 'Certify' ? 'success' : 'warn',
        title: `${ids.size} items ${decision === 'Certify' ? 'certified' : 'revoked'}`,
        detail: `Decisions recorded for ${ids.size} access relationships.`,
      };
      selectedReviewItems.value = [];
    }

    function handleDeselectItem(item: SelectedItem) {
      selectedReviewItems.value = selectedReviewItems.value.filter((r) => String(r.id) !== item.id);
    }

    function clearSelection() {
      selectedReviewItems.value = [];
    }

    function certifySingle(item: ReviewItem) {
      reviewItems.value = reviewItems.value.map((r) =>
        r.id === item.id ? { ...r, decision: 'Certify' as const } : r,
      );
      if (selectedCampaign.value) {
        selectedCampaign.value.reviewedItems = reviewItems.value.filter((r) => r.decision !== 'Pending').length;
      }
    }

    function revokeSingle(item: ReviewItem) {
      reviewItems.value = reviewItems.value.map((r) =>
        r.id === item.id ? { ...r, decision: 'Revoke' as const } : r,
      );
      if (selectedCampaign.value) {
        selectedCampaign.value.reviewedItems = reviewItems.value.filter((r) => r.decision !== 'Pending').length;
      }
    }

    return {
      menuItems,
      profileMenuItems,
      currentView,
      selectedCampaign,
      campaigns,
      reviewItems,
      selectedReviewItems,
      detailTab,
      actionNotice,
      activeCampaigns,
      overdueCampaigns,
      progress,
      pendingCount,
      certifiedCount,
      revokedCount,
      bulkActions,
      toolbarSelectedItems,
      campaignColumns,
      reviewItemColumns,
      decisionLogColumns,
      decisionLog,
      openCampaign,
      backToList,
      handleReviewRowClick,
      applyBulkAction,
      handleDeselectItem,
      clearSelection,
      certifySingle,
      revokeSingle,
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
        <TopBar />

        <!-- Campaign List View -->
        <template v-if="currentView === 'list'">
          <PageHeader
            title="Review Campaigns"
            subtitleText="Create and manage access certification campaigns"
          >
            <template #icon>
              <ClipboardDocumentCheckIcon class="size-7" />
            </template>
          </PageHeader>

          <ListPageLayout class="w-full! h-full!">
            <div class="flex flex-col gap-4 px-6 py-4">

              <!-- Campaign summary -->
              <div class="flex items-center gap-4 pb-2">
                <PvTag severity="info">{{ activeCampaigns }} Active</PvTag>
                <PvTag v-if="overdueCampaigns > 0" severity="danger">{{ overdueCampaigns }} Overdue</PvTag>
              </div>

              <DataTableToolbar
                searchPlaceholder="Search campaigns..."
                :showAddButton="true"
                addButtonLabel="Create Campaign"
                :showFilterButton="true"
                :showRefreshButton="true"
              />

              <CircuitDataTable
                @row-click="openCampaign"
                :data="campaigns"
                :columns="campaignColumns"
                :paginator="true"
                :rows="10"
                dataKey="id"
              />
            </div>
          </ListPageLayout>
        </template>

        <!-- Campaign Detail View -->
        <template v-if="currentView === 'detail' && selectedCampaign">
          <PageHeader
            :title="selectedCampaign.name"
            :subtitleText="selectedCampaign.scope + ' · Reviewer: ' + selectedCampaign.reviewer"
            :breadcrumbs="[{ label: 'Review Campaigns' }, { label: selectedCampaign.name }]"
          >
            <template #icon>
              <ClipboardDocumentCheckIcon class="size-7" />
            </template>
            <template #actions>
              <PvButton label="Back to Campaigns" severity="secondary" variant="text" @click="backToList">
                <template #icon="iconProps">
                  <ArrowLeftIcon :class="iconProps.class" />
                </template>
              </PvButton>
            </template>
          </PageHeader>

          <ListPageLayout class="w-full! h-full!">
            <div class="flex flex-col gap-4 px-6 py-4">

              <!-- Overdue warning -->
              <MessageNotification
                v-if="selectedCampaign.status === 'Overdue'"
                severity="error"
                title="Campaign overdue"
                :detail="'This campaign is past its deadline of ' + selectedCampaign.deadline + '. ' + pendingCount + ' items still pending review.'"
              />

              <!-- Action notice -->
              <MessageNotification
                v-if="actionNotice"
                :severity="actionNotice.severity"
                :title="actionNotice.title"
                :detail="actionNotice.detail"
              />

              <!-- Progress bar -->
              <div class="rounded-md border border-neutral-default_solid p-4">
                <div class="flex items-center justify-between pb-2">
                  <div class="flex items-center gap-3">
                    <span class="text-heading-3 text-neutral-base">{{ progress }}%</span>
                    <span class="text-body-md text-neutral-subtle">reviewed</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="flex items-center gap-1">
                      <CalendarDaysIcon class="size-4 text-neutral-subtle" />
                      <span class="text-body-sm text-neutral-subtle">Due {{ selectedCampaign.deadline }}</span>
                    </div>
                  </div>
                </div>
                <div class="h-2 w-full rounded-full bg-neutral-surface_raised">
                  <div
                    class="h-2 rounded-full transition-all"
                    :class="progress === 100 ? 'bg-success-base' : selectedCampaign.status === 'Overdue' ? 'bg-error-base' : 'bg-info-base'"
                    :style="{ width: progress + '%' }"
                  ></div>
                </div>
                <div class="flex items-center gap-4 pt-2">
                  <span class="text-body-sm text-neutral-subtle">{{ selectedCampaign.reviewedItems }} of {{ selectedCampaign.totalItems }} items</span>
                  <PvTag severity="warn">{{ pendingCount }} Pending</PvTag>
                  <PvTag severity="success">{{ certifiedCount }} Certified</PvTag>
                  <PvTag v-if="revokedCount > 0" severity="danger">{{ revokedCount }} Revoked</PvTag>
                </div>
              </div>

              <!-- Tabs: Review Queue / Decision Log -->
              <PvTabs v-model:value="detailTab">
                <PvTabList>
                  <PvTab value="queue">Review Queue ({{ pendingCount }} pending)</PvTab>
                  <PvTab value="log">Decision Log ({{ decisionLog.length }})</PvTab>
                </PvTabList>
                <PvTabPanels>

                  <!-- Review Queue -->
                  <PvTabPanel value="queue">
                    <ActionsToolbar
                      :actions="bulkActions"
                      :selectedItems="toolbarSelectedItems"
                      @action="applyBulkAction"
                      @deselect="handleDeselectItem"
                      @close="clearSelection"
                    />

                    <CircuitDataTable
                      :data="reviewItems"
                      :columns="reviewItemColumns"
                      :paginator="true"
                      :rows="15"
                      dataKey="id"
                      v-model:selection="selectedReviewItems"
                      selectionMode="multiple"
                    />
                  </PvTabPanel>

                  <!-- Decision Log -->
                  <PvTabPanel value="log">
                    <CircuitDataTable
                      :data="decisionLog"
                      :columns="decisionLogColumns"
                      :paginator="true"
                      :rows="15"
                      dataKey="id"
                    />
                  </PvTabPanel>

                </PvTabPanels>
              </PvTabs>
            </div>
          </ListPageLayout>
        </template>
      </div>
    </div>
  `,
});

// ─── Story ───

const meta: Meta<typeof ISPMCampaignsPage> = {
  title: "Projects/Raj's Playground/Pages/ISPM v2/3 — Review Campaigns",
  component: ISPMCampaignsPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ISPMCampaignsPage>;

export const Default: Story = {};
