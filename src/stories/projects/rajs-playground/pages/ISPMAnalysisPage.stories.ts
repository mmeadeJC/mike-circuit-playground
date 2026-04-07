import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, defineComponent, markRaw, ref } from 'vue';
import {
  AppNavigation,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellStatus,
  DataTableToolbar,
  MessageNotification,
  PageHeader,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import {
  ArrowDownTrayIcon,
  BellIcon,
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  PlayIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  UserIcon,
  UsersIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
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
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';
import ListPageLayout from '@/components/layout/page-layouts/ListPageLayout.vue';

// ─── Navigation Data ───

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
      {
        label: 'Admin IT',
        itemType: 'profile_large',
        name: 'Admin IT',
        email: 'admin_it@company.com',
        initials: 'AT',
      },
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

interface ResourceAnalysisRow {
  id: number;
  resourceName: string;
  resourceType: string;
  totalUsers: number;
  staleAssignments: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  reviewState: 'Scheduled' | 'In Progress' | 'Needs Attention' | 'Complete';
}

interface PersonAnalysisRow {
  id: number;
  person: string;
  email: string;
  team: string;
  totalResources: number;
  privilegedAccess: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  managerDecision: 'Approved' | 'Needs Review' | 'Revoke Recommended';
}

interface GroupAnalysisRow {
  id: number;
  groupName: string;
  memberCount: number;
  totalResources: number;
  privilegedResources: number;
  complianceState: 'Healthy' | 'Watchlist' | 'Action Required';
}

interface DetailRelationshipRow {
  id: number;
  entity: string;
  type: string;
  accessPath: string;
  lastUsed: string;
  recommendation: 'Keep' | 'Review' | 'Remove';
}

// ─── Mock Data ───

const resourceAnalysisData: ResourceAnalysisRow[] = [
  { id: 1, resourceName: 'Salesforce', resourceType: 'Application', totalUsers: 50, staleAssignments: 4, riskLevel: 'Medium', reviewState: 'In Progress' },
  { id: 2, resourceName: 'Production Mac Fleet', resourceType: 'Device Group', totalUsers: 19, staleAssignments: 1, riskLevel: 'Low', reviewState: 'Scheduled' },
  { id: 3, resourceName: 'Corporate LDAP', resourceType: 'LDAP', totalUsers: 22, staleAssignments: 5, riskLevel: 'High', reviewState: 'Needs Attention' },
  { id: 4, resourceName: 'VPN RADIUS', resourceType: 'RADIUS', totalUsers: 29, staleAssignments: 2, riskLevel: 'Medium', reviewState: 'In Progress' },
  { id: 5, resourceName: 'SSH Key Vault', resourceType: 'SSH Keys', totalUsers: 17, staleAssignments: 3, riskLevel: 'High', reviewState: 'Needs Attention' },
  { id: 6, resourceName: 'Jira Cloud', resourceType: 'Application', totalUsers: 35, staleAssignments: 0, riskLevel: 'Low', reviewState: 'Complete' },
  { id: 7, resourceName: 'GitHub Enterprise', resourceType: 'Application', totalUsers: 41, staleAssignments: 2, riskLevel: 'Medium', reviewState: 'In Progress' },
  { id: 8, resourceName: 'AWS Console', resourceType: 'Application', totalUsers: 14, staleAssignments: 1, riskLevel: 'High', reviewState: 'Needs Attention' },
];

const personAnalysisData: PersonAnalysisRow[] = [
  { id: 1, person: 'Sarah Chen', email: 'sarah.chen@acme.com', team: 'Sales', totalResources: 9, privilegedAccess: 1, riskLevel: 'Low', managerDecision: 'Approved' },
  { id: 2, person: 'Mike Johnson', email: 'mike.j@acme.com', team: 'Engineering', totalResources: 13, privilegedAccess: 3, riskLevel: 'High', managerDecision: 'Needs Review' },
  { id: 3, person: 'Emily Davis', email: 'emily.d@acme.com', team: 'Marketing', totalResources: 6, privilegedAccess: 0, riskLevel: 'Low', managerDecision: 'Approved' },
  { id: 4, person: 'Derek Huang', email: 'derek.h@acme.com', team: 'Security', totalResources: 14, privilegedAccess: 4, riskLevel: 'High', managerDecision: 'Needs Review' },
  { id: 5, person: 'Laura Kim', email: 'laura.k@acme.com', team: 'Design', totalResources: 8, privilegedAccess: 1, riskLevel: 'Medium', managerDecision: 'Revoke Recommended' },
  { id: 6, person: 'Tom Wilson', email: 'tom.w@acme.com', team: 'Sales', totalResources: 7, privilegedAccess: 0, riskLevel: 'Low', managerDecision: 'Approved' },
  { id: 7, person: 'Nina Patel', email: 'nina.p@acme.com', team: 'Engineering', totalResources: 11, privilegedAccess: 3, riskLevel: 'High', managerDecision: 'Needs Review' },
];

const groupAnalysisData: GroupAnalysisRow[] = [
  { id: 1, groupName: 'Engineering Admins', memberCount: 12, totalResources: 22, privilegedResources: 4, complianceState: 'Action Required' },
  { id: 2, groupName: 'Support Team', memberCount: 24, totalResources: 30, privilegedResources: 2, complianceState: 'Watchlist' },
  { id: 3, groupName: 'Sales Managers', memberCount: 9, totalResources: 11, privilegedResources: 0, complianceState: 'Healthy' },
  { id: 4, groupName: 'IT Operations', memberCount: 16, totalResources: 30, privilegedResources: 5, complianceState: 'Action Required' },
  { id: 5, groupName: 'Contractors', memberCount: 8, totalResources: 6, privilegedResources: 0, complianceState: 'Watchlist' },
];

// ─── Column Definitions ───

const resourceColumns = [
  { field: 'resourceName', header: 'Resource', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'resourceType', header: 'Type', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalUsers', header: 'Total Users', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'staleAssignments', header: 'Stale', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'riskLevel', header: 'Risk', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Low: { label: 'Low', severity: 'success' },
      Medium: { label: 'Medium', severity: 'warn' },
      High: { label: 'High', severity: 'danger' },
    },
  },
  {
    field: 'reviewState', header: 'Review', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Scheduled: { label: 'Scheduled', severity: 'info' },
      'In Progress': { label: 'In Progress', severity: 'warn' },
      'Needs Attention': { label: 'Needs Attention', severity: 'danger' },
      Complete: { label: 'Complete', severity: 'success' },
    },
  },
];

const personColumns = [
  { field: 'person', header: 'Person', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'email', header: 'Email', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'team', header: 'Team', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalResources', header: 'Resources', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'privilegedAccess', header: 'Privileged', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'riskLevel', header: 'Risk', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Low: { label: 'Low', severity: 'success' },
      Medium: { label: 'Medium', severity: 'warn' },
      High: { label: 'High', severity: 'danger' },
    },
  },
  {
    field: 'managerDecision', header: 'Decision', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Approved: { label: 'Approved', severity: 'success' },
      'Needs Review': { label: 'Needs Review', severity: 'warn' },
      'Revoke Recommended': { label: 'Revoke', severity: 'danger' },
    },
  },
];

const groupColumns = [
  { field: 'groupName', header: 'Group', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'memberCount', header: 'Members', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalResources', header: 'Resources', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'privilegedResources', header: 'Privileged', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'complianceState', header: 'Compliance', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Healthy: { label: 'Healthy', severity: 'success' },
      Watchlist: { label: 'Watchlist', severity: 'warn' },
      'Action Required': { label: 'Action Required', severity: 'danger' },
    },
  },
];

const detailRelationshipColumns = [
  { field: 'entity', header: 'Entity', component: markRaw(DataTableCellText) },
  { field: 'type', header: 'Type', component: markRaw(DataTableCellText) },
  { field: 'accessPath', header: 'Access Path', component: markRaw(DataTableCellText) },
  { field: 'lastUsed', header: 'Last Used', component: markRaw(DataTableCellText) },
  {
    field: 'recommendation', header: 'Recommendation',
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Keep: { label: 'Keep', severity: 'success' },
      Review: { label: 'Review', severity: 'warn' },
      Remove: { label: 'Remove', severity: 'danger' },
    },
  },
];

// ─── Component ───

const ISPMAnalysisPage = defineComponent({
  name: 'ISPMAnalysisPage',
  components: {
    AppNavigation,
    CollapsiblePanel,
    CircuitDataTable,
    DataTableToolbar,
    MessageNotification,
    PageHeader,
    TopBar,
    DetailsKeyValue,
    ListPageLayout,
    PvButton: Button,
    PvDialog: Dialog,
    PvDivider: Divider,
    PvSelectButton: SelectButton,
    PvTag: Tag,
    PvTabs: Tabs,
    PvTabList: TabList,
    PvTab: Tab,
    PvTabPanels: TabPanels,
    PvTabPanel: TabPanel,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    UserIcon,
    UsersIcon,
    ExclamationTriangleIcon,
    ClockIcon,
    ArrowDownTrayIcon,
    PlayIcon,
    XMarkIcon,
  },
  setup() {
    const showDetailsModal = ref(false);
    const selectedAnalysisTab = ref('resource');
    const riskFilter = ref<'all' | 'high'>('all');
    const riskFilterOptions = [
      { label: 'All', value: 'all' },
      { label: 'High Risk', value: 'high' },
    ];

    const resourceRows = ref<ResourceAnalysisRow[]>(resourceAnalysisData.map((r) => ({ ...r })));
    const personRows = ref<PersonAnalysisRow[]>(personAnalysisData.map((r) => ({ ...r })));
    const groupRows = ref<GroupAnalysisRow[]>(groupAnalysisData.map((r) => ({ ...r })));

    const selectedResource = ref<ResourceAnalysisRow | null>(null);
    const selectedPerson = ref<PersonAnalysisRow | null>(null);
    const selectedGroup = ref<GroupAnalysisRow | null>(null);

    const actionNotice = ref<{ severity: 'success' | 'warn'; title: string; detail: string } | null>(null);

    // ─── Filtered data ───

    const filteredResourceData = computed(() =>
      riskFilter.value === 'high' ? resourceRows.value.filter((r) => r.riskLevel === 'High') : resourceRows.value,
    );
    const filteredPersonData = computed(() =>
      riskFilter.value === 'high' ? personRows.value.filter((r) => r.riskLevel === 'High') : personRows.value,
    );
    const filteredGroupData = computed(() =>
      riskFilter.value === 'high' ? groupRows.value.filter((r) => r.complianceState === 'Action Required') : groupRows.value,
    );

    // ─── Posture score ───

    const postureScore = computed(() => {
      const total = resourceRows.value.length;
      if (total === 0) return 100;
      const completed = resourceRows.value.filter((r) => r.reviewState === 'Complete').length;
      const lowRisk = resourceRows.value.filter((r) => r.riskLevel === 'Low').length;
      const highRisk = resourceRows.value.filter((r) => r.riskLevel === 'High').length;
      return Math.round(((completed * 2 + lowRisk * 1.5) / (total * 2)) * 100 - highRisk * 5);
    });

    const postureLabel = computed(() => {
      if (postureScore.value >= 80) return 'Good';
      if (postureScore.value >= 60) return 'Moderate';
      if (postureScore.value >= 40) return 'Needs Work';
      return 'Critical';
    });

    const postureSeverity = computed(() => {
      if (postureScore.value >= 80) return 'success';
      if (postureScore.value >= 60) return 'warn';
      return 'danger';
    });

    // ─── Summary stats ───

    const highRiskCount = computed(() => resourceRows.value.filter((r) => r.riskLevel === 'High').length);
    const staleTotal = computed(() => resourceRows.value.reduce((sum, r) => sum + r.staleAssignments, 0));
    const completedCount = computed(() => resourceRows.value.filter((r) => r.reviewState === 'Complete').length);
    const highRiskPeople = computed(() => personRows.value.filter((r) => r.riskLevel === 'High').length);
    const actionRequiredGroups = computed(() => groupRows.value.filter((r) => r.complianceState === 'Action Required').length);

    // ─── Tab counts ───

    const resourceTabLabel = computed(() => `By Resource (${filteredResourceData.value.length})`);
    const personTabLabel = computed(() => `By Person (${filteredPersonData.value.length})`);
    const groupTabLabel = computed(() => `By User Group (${filteredGroupData.value.length})`);

    // ─── Modal detail content ───

    const detailTitle = computed(() => {
      if (selectedResource.value) return selectedResource.value.resourceName;
      if (selectedPerson.value) return selectedPerson.value.person;
      if (selectedGroup.value) return selectedGroup.value.groupName;
      return '';
    });

    const detailContextLabel = computed(() => {
      if (selectedResource.value) return selectedResource.value.resourceType;
      if (selectedPerson.value) return `${selectedPerson.value.team} · ${selectedPerson.value.email}`;
      if (selectedGroup.value) return `${selectedGroup.value.memberCount} members`;
      return '';
    });

    const selectedDetails = computed(() => {
      if (selectedResource.value) {
        const r = selectedResource.value;
        return [
          { label: 'Type', value: r.resourceType },
          { label: 'Total Users', value: String(r.totalUsers) },
          { label: 'Stale Assignments', value: String(r.staleAssignments) },
          { label: 'Risk Level', value: r.riskLevel },
          { label: 'Review State', value: r.reviewState },
        ];
      }
      if (selectedPerson.value) {
        const p = selectedPerson.value;
        return [
          { label: 'Team', value: p.team },
          { label: 'Email', value: p.email },
          { label: 'Total Resources', value: String(p.totalResources) },
          { label: 'Privileged Access', value: String(p.privilegedAccess) },
          { label: 'Risk Level', value: p.riskLevel },
          { label: 'Manager Decision', value: p.managerDecision },
        ];
      }
      if (selectedGroup.value) {
        const g = selectedGroup.value;
        return [
          { label: 'Members', value: String(g.memberCount) },
          { label: 'Total Resources', value: String(g.totalResources) },
          { label: 'Privileged Resources', value: String(g.privilegedResources) },
          { label: 'Compliance', value: g.complianceState },
        ];
      }
      return [];
    });

    const detailRelationshipRows = computed<DetailRelationshipRow[]>(() => {
      if (selectedResource.value) {
        const r = selectedResource.value;
        return [
          { id: 1, entity: 'Mike Johnson', type: 'User', accessPath: 'Direct Assignment', lastUsed: 'Feb 28, 2026', recommendation: r.riskLevel === 'High' ? 'Review' : 'Keep' },
          { id: 2, entity: 'Engineering Admins', type: 'Group', accessPath: 'Inherited via Group', lastUsed: 'Feb 27, 2026', recommendation: r.staleAssignments > 2 ? 'Review' : 'Keep' },
          { id: 3, entity: 'Contractor Access', type: 'Group', accessPath: 'Inherited via Group', lastUsed: 'Jan 5, 2026', recommendation: r.riskLevel === 'High' ? 'Remove' : 'Review' },
          { id: 4, entity: 'Sarah Chen', type: 'User', accessPath: 'Direct Assignment', lastUsed: 'Feb 26, 2026', recommendation: 'Keep' },
        ];
      }
      if (selectedPerson.value) {
        const p = selectedPerson.value;
        return [
          { id: 1, entity: 'Salesforce', type: 'Application', accessPath: 'Direct Assignment', lastUsed: 'Feb 28, 2026', recommendation: p.managerDecision === 'Revoke Recommended' ? 'Remove' : 'Keep' },
          { id: 2, entity: 'VPN RADIUS', type: 'RADIUS', accessPath: 'Via IT Operations', lastUsed: 'Feb 25, 2026', recommendation: p.riskLevel === 'High' ? 'Review' : 'Keep' },
          { id: 3, entity: 'SSH Key Vault', type: 'SSH Keys', accessPath: 'Via Engineering Admins', lastUsed: 'Feb 20, 2026', recommendation: p.privilegedAccess > 2 ? 'Review' : 'Keep' },
          { id: 4, entity: 'Corporate LDAP', type: 'LDAP', accessPath: 'Via IT Operations', lastUsed: 'Feb 24, 2026', recommendation: p.riskLevel === 'High' ? 'Review' : 'Keep' },
        ];
      }
      if (selectedGroup.value) {
        const g = selectedGroup.value;
        return [
          { id: 1, entity: 'VPN RADIUS', type: 'RADIUS', accessPath: 'Group Assignment', lastUsed: 'Feb 27, 2026', recommendation: g.complianceState === 'Action Required' ? 'Review' : 'Keep' },
          { id: 2, entity: 'Corporate LDAP', type: 'LDAP', accessPath: 'Group Assignment', lastUsed: 'Feb 25, 2026', recommendation: g.privilegedResources > 2 ? 'Review' : 'Keep' },
          { id: 3, entity: 'SSH Key Vault', type: 'SSH Keys', accessPath: 'Group Assignment', lastUsed: 'Jan 15, 2026', recommendation: g.privilegedResources > 1 ? 'Review' : 'Keep' },
          { id: 4, entity: 'AWS Console', type: 'Application', accessPath: 'Group Assignment', lastUsed: 'Feb 28, 2026', recommendation: g.complianceState === 'Action Required' ? 'Remove' : 'Keep' },
        ];
      }
      return [];
    });

    // ─── Modal recommendation banner ───

    const modalRecommendation = computed(() => {
      const rows = detailRelationshipRows.value;
      if (rows.length === 0) return null;
      const flagged = rows.filter((r) => r.recommendation !== 'Keep').length;
      const total = rows.length;
      if (flagged > total / 2) {
        return {
          severity: 'warn' as const,
          title: 'Review recommended',
          detail: `${flagged} of ${total} access relationships are flagged — consider flagging this item for attention.`,
        };
      }
      return {
        severity: 'success' as const,
        title: 'Access looks healthy',
        detail: `${total - flagged} of ${total} relationships are clean. No immediate action needed.`,
      };
    });

    // ─── Actions ───

    function handleRowClick(event: { data: ResourceAnalysisRow | PersonAnalysisRow | GroupAnalysisRow }) {
      selectedResource.value = null;
      selectedPerson.value = null;
      selectedGroup.value = null;

      if (selectedAnalysisTab.value === 'resource') selectedResource.value = event.data as ResourceAnalysisRow;
      if (selectedAnalysisTab.value === 'person') selectedPerson.value = event.data as PersonAnalysisRow;
      if (selectedAnalysisTab.value === 'group') selectedGroup.value = event.data as GroupAnalysisRow;

      showDetailsModal.value = true;
    }

    function handleTabChange(value: string | number) {
      selectedAnalysisTab.value = String(value);
      riskFilter.value = 'all';
      actionNotice.value = null;
    }

    function focusHighRisk(tab: string) {
      riskFilter.value = 'high';
      selectedAnalysisTab.value = tab;
      actionNotice.value = null;
    }

    function applyAction(action: 'approve' | 'flag') {
      if (selectedResource.value) {
        selectedResource.value.reviewState = action === 'approve' ? 'Complete' : 'Needs Attention';
        actionNotice.value = {
          severity: action === 'approve' ? 'success' : 'warn',
          title: action === 'approve' ? 'Approved' : 'Flagged for attention',
          detail: `${selectedResource.value.resourceName} — ${selectedResource.value.reviewState}`,
        };
      }
      if (selectedPerson.value) {
        selectedPerson.value.managerDecision = action === 'approve' ? 'Approved' : 'Revoke Recommended';
        actionNotice.value = {
          severity: action === 'approve' ? 'success' : 'warn',
          title: action === 'approve' ? 'Approved' : 'Flagged for revocation',
          detail: `${selectedPerson.value.person} — ${selectedPerson.value.managerDecision}`,
        };
      }
      if (selectedGroup.value) {
        selectedGroup.value.complianceState = action === 'approve' ? 'Healthy' : 'Action Required';
        actionNotice.value = {
          severity: action === 'approve' ? 'success' : 'warn',
          title: action === 'approve' ? 'Marked healthy' : 'Flagged for action',
          detail: `${selectedGroup.value.groupName} — ${selectedGroup.value.complianceState}`,
        };
      }
      showDetailsModal.value = false;
    }

    return {
      menuItems,
      profileMenuItems,
      showDetailsModal,
      selectedAnalysisTab,
      riskFilter,
      riskFilterOptions,
      filteredResourceData,
      filteredPersonData,
      filteredGroupData,
      actionNotice,
      postureScore,
      postureLabel,
      postureSeverity,
      highRiskCount,
      staleTotal,
      completedCount,
      highRiskPeople,
      actionRequiredGroups,
      resourceTabLabel,
      personTabLabel,
      groupTabLabel,
      detailTitle,
      detailContextLabel,
      selectedDetails,
      detailRelationshipRows,
      modalRecommendation,
      resourceColumns,
      personColumns,
      groupColumns,
      detailRelationshipColumns,
      handleRowClick,
      handleTabChange,
      focusHighRisk,
      applyAction,
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
        <PageHeader
          title="ISPM Analysis"
          subtitleText="Identity security posture — who has access to what"
        >
          <template #icon>
            <ShieldCheckIcon class="size-7" />
          </template>
          <template #actions>
            <PvButton label="Export Report" severity="secondary" variant="outlined">
              <template #icon="iconProps">
                <ArrowDownTrayIcon :class="iconProps.class" />
              </template>
            </PvButton>
            <PvButton label="Run Analysis">
              <template #icon="iconProps">
                <PlayIcon :class="iconProps.class" />
              </template>
            </PvButton>
          </template>
        </PageHeader>

        <ListPageLayout class="w-full! h-full!">
          <div class="flex flex-col gap-4">

            <div v-if="actionNotice" class="px-6 pt-4">
              <MessageNotification
                :severity="actionNotice.severity"
                :title="actionNotice.title"
                :detail="actionNotice.detail"
              />
            </div>

            <!-- Posture score + summary stats -->
            <div class="px-6 pt-4">
              <div class="grid grid-cols-3 gap-4">
                <!-- Posture Score (spans left column) -->
                <CollapsiblePanel header="Posture Score">
                  <template #titleicon="iconProps">
                    <ShieldCheckIcon :class="iconProps.class" />
                  </template>
                  <div class="flex items-center gap-3 py-2">
                    <span class="text-heading-1 text-neutral-base">{{ postureScore }}</span>
                    <div class="flex flex-col">
                      <PvTag :severity="postureSeverity">{{ postureLabel }}</PvTag>
                      <span class="text-body-sm text-neutral-subtle pt-1">out of 100</span>
                    </div>
                  </div>
                </CollapsiblePanel>

                <!-- 2x2 stat grid (spans remaining 2 columns) -->
                <div class="col-span-2 grid grid-cols-2 gap-4">
                  <CollapsiblePanel header="High Risk Resources">
                    <template #titleicon="iconProps">
                      <ExclamationTriangleIcon :class="iconProps.class" />
                    </template>
                    <div class="flex items-baseline gap-2 py-1 cursor-pointer" @click="focusHighRisk('resource')">
                      <span class="text-heading-2 text-error-base">{{ highRiskCount }}</span>
                      <span class="text-body-sm text-neutral-subtle">{{ staleTotal }} stale assignments</span>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Completed Reviews">
                    <template #titleicon="iconProps">
                      <ShieldCheckIcon :class="iconProps.class" />
                    </template>
                    <div class="flex items-baseline gap-2 py-1">
                      <span class="text-heading-2 text-success-base">{{ completedCount }}</span>
                      <span class="text-body-sm text-neutral-subtle">of {{ filteredResourceData.length }} resources</span>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="High Risk People">
                    <template #titleicon="iconProps">
                      <UserIcon :class="iconProps.class" />
                    </template>
                    <div class="flex items-baseline gap-2 py-1 cursor-pointer" @click="focusHighRisk('person')">
                      <span class="text-heading-2 text-error-base">{{ highRiskPeople }}</span>
                      <span class="text-body-sm text-neutral-subtle">need review</span>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Groups Requiring Action">
                    <template #titleicon="iconProps">
                      <UsersIcon :class="iconProps.class" />
                    </template>
                    <div class="flex items-baseline gap-2 py-1 cursor-pointer" @click="focusHighRisk('group')">
                      <span class="text-heading-2 text-error-base">{{ actionRequiredGroups }}</span>
                      <span class="text-body-sm text-neutral-subtle">non-compliant</span>
                    </div>
                  </CollapsiblePanel>
                </div>
              </div>
            </div>

            <!-- Filter bar + timestamp -->
            <div class="px-6 pb-6">
              <div class="flex items-center justify-between pb-3">
                <div class="flex items-center gap-2">
                  <ClockIcon class="size-4 text-neutral-subtle" />
                  <span class="text-body-sm text-neutral-subtle">Last analyzed: Feb 28, 2026 at 3:45 PM</span>
                </div>
                <PvSelectButton
                  v-model="riskFilter"
                  :options="riskFilterOptions"
                  optionLabel="label"
                  optionValue="value"
                />
              </div>

              <PvTabs v-model:value="selectedAnalysisTab" @update:value="handleTabChange">
                <PvTabList>
                  <PvTab value="resource">{{ resourceTabLabel }}</PvTab>
                  <PvTab value="person">{{ personTabLabel }}</PvTab>
                  <PvTab value="group">{{ groupTabLabel }}</PvTab>
                </PvTabList>
                <PvTabPanels>
                  <PvTabPanel value="resource">
                    <DataTableToolbar
                      searchPlaceholder="Search resources..."
                      :showAddButton="false"
                      :showFilterButton="true"
                      :showRefreshButton="true"
                    />
                    <template v-if="filteredResourceData.length > 0">
                      <CircuitDataTable
                        @row-click="handleRowClick"
                        :data="filteredResourceData"
                        :columns="resourceColumns"
                        :paginator="true"
                        :rows="10"
                        dataKey="id"
                      />
                    </template>
                    <div v-else class="py-4">
                      <MessageNotification
                        severity="success"
                        title="No high-risk resources"
                        detail="All resources are within acceptable risk thresholds."
                      />
                    </div>
                  </PvTabPanel>

                  <PvTabPanel value="person">
                    <DataTableToolbar
                      searchPlaceholder="Search people..."
                      :showAddButton="false"
                      :showFilterButton="true"
                      :showRefreshButton="true"
                    />
                    <template v-if="filteredPersonData.length > 0">
                      <CircuitDataTable
                        @row-click="handleRowClick"
                        :data="filteredPersonData"
                        :columns="personColumns"
                        :paginator="true"
                        :rows="10"
                        dataKey="id"
                      />
                    </template>
                    <div v-else class="py-4">
                      <MessageNotification
                        severity="success"
                        title="No high-risk people"
                        detail="All people are within acceptable risk thresholds."
                      />
                    </div>
                  </PvTabPanel>

                  <PvTabPanel value="group">
                    <DataTableToolbar
                      searchPlaceholder="Search groups..."
                      :showAddButton="false"
                      :showFilterButton="true"
                      :showRefreshButton="true"
                    />
                    <template v-if="filteredGroupData.length > 0">
                      <CircuitDataTable
                        @row-click="handleRowClick"
                        :data="filteredGroupData"
                        :columns="groupColumns"
                        :paginator="true"
                        :rows="10"
                        dataKey="id"
                      />
                    </template>
                    <div v-else class="py-4">
                      <MessageNotification
                        severity="success"
                        title="No groups requiring action"
                        detail="All user groups are compliant."
                      />
                    </div>
                  </PvTabPanel>
                </PvTabPanels>
              </PvTabs>
            </div>
          </div>
        </ListPageLayout>

        <!-- Detail Modal -->
        <PvDialog
          v-model:visible="showDetailsModal"
          :draggable="false"
          modal
          :header="detailTitle"
          :style="{ width: '720px' }"
        >
          <template #closeicon><XMarkIcon /></template>

          <span class="text-body-md text-neutral-subtle">{{ detailContextLabel }}</span>

          <div v-if="modalRecommendation" class="pt-3">
            <MessageNotification
              :severity="modalRecommendation.severity"
              :title="modalRecommendation.title"
              :detail="modalRecommendation.detail"
            />
          </div>

          <PvDivider />

          <div class="grid grid-cols-2 gap-x-6 gap-y-3">
            <DetailsKeyValue
              v-for="detail in selectedDetails"
              :key="detail.label"
              :label="detail.label"
              :value="detail.value"
            />
          </div>

          <PvDivider />

          <p class="text-body-md-semi-bold text-neutral-base pb-2">Access Relationships</p>
          <CircuitDataTable
            :data="detailRelationshipRows"
            :columns="detailRelationshipColumns"
            dataKey="id"
          />

          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton
                label="Cancel"
                severity="secondary"
                variant="text"
                @click="showDetailsModal = false"
              />
              <PvButton
                label="Flag"
                severity="secondary"
                variant="outlined"
                @click="applyAction('flag')"
              />
              <PvButton
                label="Approve"
                @click="applyAction('approve')"
              />
            </div>
          </template>
        </PvDialog>
      </div>
    </div>
  `,
});

// ─── Story ───

const meta: Meta<typeof ISPMAnalysisPage> = {
  title: "Projects/Raj's Playground/Pages/ISPM Analysis Playground",
  component: ISPMAnalysisPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ISPMAnalysisPage>;

export const Default: Story = {};
