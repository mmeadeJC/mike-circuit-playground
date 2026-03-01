// ──────────────────────────────────────────────────────────────────────────────
// ISPM — Unified View
// ──────────────────────────────────────────────────────────────────────────────
//
// PM Rationale: JumpCloud already owns the identity plane — users, devices,
// apps, groups, policies. ISPM turns that data into answers to three questions:
//
//   1. "Are we clean?"            → Overview  (posture score, findings, compliance)
//   2. "Where are we exposed?"    → Explorer  (access paths by resource/identity/group)
//   3. "What are we doing now?"   → Campaigns (access review + certification)
//
// The loop: Dashboard findings → investigate in Explorer → certify in Campaigns.
// NHI (Non-Human Identities) are a first-class citizen — JumpCloud's differentiator
// because we already manage API keys, service accounts, and LDAP bind credentials.
//
// Key decisions vs. 5 separate pages:
//  • Posture score is ALWAYS visible in the PageHeader, not only in Overview
//  • Clicking a finding navigates to Explorer with the right sub-tab pre-selected
//  • "Start Campaign" in Explorer drawer jumps to Campaigns + shows a notice
//  • NHI filter is prominent in the Explorer → By Identity tab
//  • The Security nav item is ONE entry, not three
// ──────────────────────────────────────────────────────────────────────────────

import type { Meta, StoryObj } from '@storybook/vue3';
import { computed, defineComponent, markRaw, ref } from 'vue';
import {
  ActionsToolbar,
  AppNavigation,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellToken,
  DataTableToolbar,
  MessageNotification,
  PageHeader,
} from '@jumpcloud/circuit/components';
import type { Action, SelectedItem } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Drawer from 'primevue/drawer';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

import {
  ArrowDownTrayIcon,
  ArrowLeftIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  BellIcon,
  CalendarDaysIcon,
  ChartBarSquareIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlayIcon,
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
} from '@jumpcloud/icons';

import TopBar from '../../../../components/TopBar.vue';
import DetailsKeyValue from '../../../../components/DetailsKeyValue.vue';
import ListPageLayout from '../../../../components/layout/page-layouts/ListPageLayout.vue';

// ─── Navigation ───────────────────────────────────────────────────────────────
// ONE entry in Security for ISPM — not three separate items.
// This is the architectural bet: ISPM is a home, not a feature list.

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
      { label: 'Identity Security Posture', leftIcon: markRaw(ShieldCheckIcon), isNew: true },
      { separator: true },
      { label: 'Conditional Access Policies' },
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
    items: [{ label: 'Settings' }],
  },
  { label: 'Alert', leftIcon: markRaw(BellIcon), count: 23, isNew: true },
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

// ─── Types ────────────────────────────────────────────────────────────────────

interface PostureCategory {
  label: string;
  score: number;
  severity: 'success' | 'warn' | 'danger';
}

interface Finding {
  id: number;
  description: string;
  category: string;
  severity: 'High' | 'Medium' | 'Low';
  affectedCount: number;
}

interface ComplianceControl {
  id: number;
  framework: string;
  control: string;
  description: string;
  coverage: number;
}

interface ResourceRow {
  id: number;
  resourceName: string;
  resourceType: string;
  totalIdentities: number;
  staleAccess: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  lastReviewed: string;
}

interface IdentityRow {
  id: number;
  name: string;
  email: string;
  type: 'Human' | 'Service Account' | 'API Key';
  team: string;
  totalResources: number;
  privilegedAccess: number;
  riskLevel: 'Low' | 'Medium' | 'High';
  lastActive: string;
}

interface GroupRow {
  id: number;
  groupName: string;
  memberCount: number;
  totalResources: number;
  privilegedResources: number;
  nestingDepth: number;
  riskLevel: 'Low' | 'Medium' | 'High';
}

interface AccessPathStep {
  label: string;
  type: 'identity' | 'group' | 'role' | 'permission' | 'resource';
}

interface Campaign {
  id: number;
  name: string;
  scope: string;
  reviewer: string;
  deadline: string;
  totalItems: number;
  reviewedItems: number;
  status: 'Draft' | 'Active' | 'Overdue' | 'Complete';
}

interface ReviewItem {
  id: number;
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

// ─── Mock Data ────────────────────────────────────────────────────────────────

const postureCategories: PostureCategory[] = [
  { label: 'Applications', score: 78, severity: 'warn' },
  { label: 'Devices', score: 91, severity: 'success' },
  { label: 'LDAP / RADIUS', score: 54, severity: 'danger' },
  { label: 'SSH Keys', score: 62, severity: 'warn' },
  { label: 'Non-Human Identities', score: 45, severity: 'danger' },
];

const findingsData: Finding[] = [
  { id: 1, description: '12 users have SSH key access unused for 90+ days', category: 'SSH Keys', severity: 'High', affectedCount: 12 },
  { id: 2, description: '3 service accounts have credentials older than 180 days', category: 'NHI', severity: 'High', affectedCount: 3 },
  { id: 3, description: 'Engineering Admins group grants access to 22 resources including production AWS', category: 'Groups', severity: 'High', affectedCount: 22 },
  { id: 4, description: '8 users have privileged LDAP access with no MFA', category: 'LDAP / RADIUS', severity: 'High', affectedCount: 8 },
  { id: 5, description: '5 users access Salesforce via 2+ paths (direct + group)', category: 'Applications', severity: 'Medium', affectedCount: 5 },
  { id: 6, description: '2 dormant accounts still have active application access', category: 'Applications', severity: 'Medium', affectedCount: 2 },
  { id: 7, description: 'Contractors group has 6 members with no access review in 120 days', category: 'Groups', severity: 'Medium', affectedCount: 6 },
  { id: 8, description: '4 API keys have read-write scope that could be read-only', category: 'NHI', severity: 'Low', affectedCount: 4 },
];

const complianceControls: ComplianceControl[] = [
  { id: 1, framework: 'SOC 2', control: 'CC6.1', description: 'Logical access security', coverage: 75 },
  { id: 2, framework: 'SOC 2', control: 'CC6.2', description: 'Access provisioning', coverage: 82 },
  { id: 3, framework: 'SOC 2', control: 'CC6.3', description: 'Access removal & modification', coverage: 68 },
  { id: 4, framework: 'ISO 27001', control: 'A.9.2.5', description: 'Review of user access rights', coverage: 60 },
  { id: 5, framework: 'ISO 27001', control: 'A.9.2.6', description: 'Removal of access rights', coverage: 71 },
  { id: 6, framework: 'ISO 27001', control: 'A.9.4.1', description: 'Information access restriction', coverage: 85 },
];

const resourceData: ResourceRow[] = [
  { id: 1, resourceName: 'Salesforce', resourceType: 'Application', totalIdentities: 54, staleAccess: 4, riskLevel: 'Medium', lastReviewed: 'Jan 15, 2026' },
  { id: 2, resourceName: 'Production Mac Fleet', resourceType: 'Device Group', totalIdentities: 19, staleAccess: 1, riskLevel: 'Low', lastReviewed: 'Feb 10, 2026' },
  { id: 3, resourceName: 'Corporate LDAP', resourceType: 'LDAP', totalIdentities: 26, staleAccess: 5, riskLevel: 'High', lastReviewed: 'Nov 28, 2025' },
  { id: 4, resourceName: 'VPN RADIUS', resourceType: 'RADIUS', totalIdentities: 33, staleAccess: 2, riskLevel: 'Medium', lastReviewed: 'Dec 22, 2025' },
  { id: 5, resourceName: 'SSH Key Vault', resourceType: 'SSH Keys', totalIdentities: 21, staleAccess: 8, riskLevel: 'High', lastReviewed: 'Oct 5, 2025' },
  { id: 6, resourceName: 'Jira Cloud', resourceType: 'Application', totalIdentities: 35, staleAccess: 0, riskLevel: 'Low', lastReviewed: 'Feb 20, 2026' },
  { id: 7, resourceName: 'GitHub Enterprise', resourceType: 'Application', totalIdentities: 47, staleAccess: 3, riskLevel: 'Medium', lastReviewed: 'Jan 30, 2026' },
  { id: 8, resourceName: 'AWS Console', resourceType: 'Application', totalIdentities: 18, staleAccess: 2, riskLevel: 'High', lastReviewed: 'Dec 1, 2025' },
  { id: 9, resourceName: 'Okta SSO', resourceType: 'Application', totalIdentities: 62, staleAccess: 1, riskLevel: 'Low', lastReviewed: 'Feb 25, 2026' },
  { id: 10, resourceName: 'Datadog', resourceType: 'Application', totalIdentities: 14, staleAccess: 0, riskLevel: 'Low', lastReviewed: 'Feb 18, 2026' },
];

const identityData: IdentityRow[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@acme.com', type: 'Human', team: 'Sales', totalResources: 9, privilegedAccess: 1, riskLevel: 'Low', lastActive: 'Feb 28, 2026' },
  { id: 2, name: 'Mike Johnson', email: 'mike.j@acme.com', type: 'Human', team: 'Engineering', totalResources: 13, privilegedAccess: 3, riskLevel: 'High', lastActive: 'Feb 28, 2026' },
  { id: 3, name: 'Emily Davis', email: 'emily.d@acme.com', type: 'Human', team: 'Marketing', totalResources: 6, privilegedAccess: 0, riskLevel: 'Low', lastActive: 'Feb 27, 2026' },
  { id: 4, name: 'Derek Huang', email: 'derek.h@acme.com', type: 'Human', team: 'Security', totalResources: 14, privilegedAccess: 4, riskLevel: 'High', lastActive: 'Feb 28, 2026' },
  { id: 5, name: 'deploy-bot', email: 'deploy-bot@svc.acme.com', type: 'Service Account', team: 'Engineering', totalResources: 6, privilegedAccess: 3, riskLevel: 'High', lastActive: 'Feb 28, 2026' },
  { id: 6, name: 'ci-runner', email: 'ci-runner@svc.acme.com', type: 'Service Account', team: 'Engineering', totalResources: 4, privilegedAccess: 2, riskLevel: 'Medium', lastActive: 'Feb 28, 2026' },
  { id: 7, name: 'monitoring-api', email: 'monitoring@svc.acme.com', type: 'API Key', team: 'SRE', totalResources: 3, privilegedAccess: 1, riskLevel: 'Medium', lastActive: 'Feb 28, 2026' },
  { id: 8, name: 'Laura Kim', email: 'laura.k@acme.com', type: 'Human', team: 'Design', totalResources: 8, privilegedAccess: 1, riskLevel: 'Medium', lastActive: 'Feb 26, 2026' },
  { id: 9, name: 'Tom Wilson', email: 'tom.w@acme.com', type: 'Human', team: 'Sales', totalResources: 7, privilegedAccess: 0, riskLevel: 'Low', lastActive: 'Feb 25, 2026' },
  { id: 10, name: 'backup-agent', email: 'backup@svc.acme.com', type: 'Service Account', team: 'IT Operations', totalResources: 5, privilegedAccess: 2, riskLevel: 'High', lastActive: 'Feb 28, 2026' },
  { id: 11, name: 'Nina Patel', email: 'nina.p@acme.com', type: 'Human', team: 'Engineering', totalResources: 11, privilegedAccess: 3, riskLevel: 'High', lastActive: 'Feb 28, 2026' },
];

const groupData: GroupRow[] = [
  { id: 1, groupName: 'Engineering Admins', memberCount: 12, totalResources: 22, privilegedResources: 4, nestingDepth: 2, riskLevel: 'High' },
  { id: 2, groupName: 'Support Team', memberCount: 24, totalResources: 30, privilegedResources: 2, nestingDepth: 1, riskLevel: 'Medium' },
  { id: 3, groupName: 'Sales Managers', memberCount: 9, totalResources: 11, privilegedResources: 0, nestingDepth: 1, riskLevel: 'Low' },
  { id: 4, groupName: 'IT Operations', memberCount: 16, totalResources: 30, privilegedResources: 5, nestingDepth: 3, riskLevel: 'High' },
  { id: 5, groupName: 'Contractors', memberCount: 8, totalResources: 6, privilegedResources: 0, nestingDepth: 1, riskLevel: 'Medium' },
  { id: 6, groupName: 'All Employees', memberCount: 87, totalResources: 8, privilegedResources: 0, nestingDepth: 0, riskLevel: 'Low' },
  { id: 7, groupName: 'Production Access', memberCount: 6, totalResources: 4, privilegedResources: 4, nestingDepth: 2, riskLevel: 'High' },
];

const campaignsData: Campaign[] = [
  { id: 1, name: 'Q1 2026 Engineering Access Review', scope: 'Engineering → Production', reviewer: 'Derek Huang', deadline: 'Mar 15, 2026', totalItems: 62, reviewedItems: 47, status: 'Active' },
  { id: 2, name: 'Contractor Access Recertification', scope: 'Contractors → All Resources', reviewer: 'Admin IT', deadline: 'Feb 28, 2026', totalItems: 18, reviewedItems: 18, status: 'Complete' },
  { id: 3, name: 'SOC 2 Annual Review — Applications', scope: 'All Users → SSO Applications', reviewer: 'Sarah Chen', deadline: 'Feb 20, 2026', totalItems: 45, reviewedItems: 30, status: 'Overdue' },
  { id: 4, name: 'LDAP/RADIUS Privileged Access', scope: 'All → LDAP & RADIUS', reviewer: 'Derek Huang', deadline: 'Mar 31, 2026', totalItems: 28, reviewedItems: 0, status: 'Draft' },
  { id: 5, name: 'NHI Credential Rotation Check', scope: 'Service Accounts → All', reviewer: 'Nina Patel', deadline: 'Mar 10, 2026', totalItems: 12, reviewedItems: 4, status: 'Active' },
];

const reviewItemsForCampaign1: ReviewItem[] = [
  { id: 1, identity: 'Mike Johnson', identityType: 'Human', resource: 'AWS Console', resourceType: 'Application', accessPath: 'Engineering Admins → Admin Role', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 2, identity: 'Mike Johnson', identityType: 'Human', resource: 'SSH Key Vault', resourceType: 'SSH Keys', accessPath: 'Direct Assignment', riskLevel: 'High', lastUsed: 'Feb 27, 2026', decision: 'Pending' },
  { id: 3, identity: 'Nina Patel', identityType: 'Human', resource: 'AWS Console', resourceType: 'Application', accessPath: 'Engineering Admins → Admin Role', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 4, identity: 'Nina Patel', identityType: 'Human', resource: 'GitHub Enterprise', resourceType: 'Application', accessPath: 'Direct Assignment', riskLevel: 'Medium', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
  { id: 5, identity: 'deploy-bot', identityType: 'Service Account', resource: 'AWS Console', resourceType: 'Application', accessPath: 'IT Operations → Production Access', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 6, identity: 'deploy-bot', identityType: 'Service Account', resource: 'SSH Key Vault', resourceType: 'SSH Keys', accessPath: 'Production Access → Service Role', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
  { id: 7, identity: 'Laura Kim', identityType: 'Human', resource: 'Salesforce', resourceType: 'Application', accessPath: 'Direct Assignment', riskLevel: 'Low', lastUsed: 'Feb 26, 2026', decision: 'Certify' },
  { id: 8, identity: 'Tom Wilson', identityType: 'Human', resource: 'Salesforce', resourceType: 'Application', accessPath: 'Sales Managers', riskLevel: 'Low', lastUsed: 'Feb 25, 2026', decision: 'Certify' },
  { id: 9, identity: 'Emily Davis', identityType: 'Human', resource: 'Jira Cloud', resourceType: 'Application', accessPath: 'All Employees', riskLevel: 'Low', lastUsed: 'Feb 27, 2026', decision: 'Certify' },
  { id: 10, identity: 'ci-runner', identityType: 'Service Account', resource: 'GitHub Enterprise', resourceType: 'Application', accessPath: 'Engineering Admins → CI Role', riskLevel: 'Medium', lastUsed: 'Feb 28, 2026', decision: 'Pending' },
  { id: 11, identity: 'Derek Huang', identityType: 'Human', resource: 'Corporate LDAP', resourceType: 'LDAP', accessPath: 'IT Operations → Admin', riskLevel: 'High', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
  { id: 12, identity: 'Derek Huang', identityType: 'Human', resource: 'VPN RADIUS', resourceType: 'RADIUS', accessPath: 'IT Operations', riskLevel: 'Medium', lastUsed: 'Feb 28, 2026', decision: 'Certify' },
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

// ─── Access Path Helper ────────────────────────────────────────────────────────

function getAccessPaths(tab: string, id: number): AccessPathStep[][] {
  if (tab === 'resource') {
    return [
      [
        { label: 'Mike Johnson', type: 'identity' },
        { label: 'Engineering Admins', type: 'group' },
        { label: 'Admin Role', type: 'role' },
        { label: 'Read / Write', type: 'permission' },
        { label: resourceData.find((r) => r.id === id)?.resourceName ?? 'Resource', type: 'resource' },
      ],
      [
        { label: 'Sarah Chen', type: 'identity' },
        { label: 'Direct Assignment', type: 'role' },
        { label: 'Read Only', type: 'permission' },
        { label: resourceData.find((r) => r.id === id)?.resourceName ?? 'Resource', type: 'resource' },
      ],
      [
        { label: 'deploy-bot', type: 'identity' },
        { label: 'IT Operations', type: 'group' },
        { label: 'Production Access', type: 'group' },
        { label: 'Service Role', type: 'role' },
        { label: 'Full Access', type: 'permission' },
        { label: resourceData.find((r) => r.id === id)?.resourceName ?? 'Resource', type: 'resource' },
      ],
    ];
  }
  if (tab === 'identity') {
    return [
      [
        { label: identityData.find((i) => i.id === id)?.name ?? 'Identity', type: 'identity' },
        { label: 'Engineering Admins', type: 'group' },
        { label: 'Admin Role', type: 'role' },
        { label: 'Read / Write', type: 'permission' },
        { label: 'AWS Console', type: 'resource' },
      ],
      [
        { label: identityData.find((i) => i.id === id)?.name ?? 'Identity', type: 'identity' },
        { label: 'Direct Assignment', type: 'role' },
        { label: 'Read Only', type: 'permission' },
        { label: 'Salesforce', type: 'resource' },
      ],
    ];
  }
  return [
    [
      { label: 'All members', type: 'identity' },
      { label: groupData.find((g) => g.id === id)?.groupName ?? 'Group', type: 'group' },
      { label: 'Group Role', type: 'role' },
      { label: 'Inherited Access', type: 'permission' },
      { label: 'VPN RADIUS', type: 'resource' },
    ],
  ];
}

// ─── Column Definitions ───────────────────────────────────────────────────────

const riskTokenMapping = {
  Low: { label: 'Low', severity: 'success' },
  Medium: { label: 'Medium', severity: 'warn' },
  High: { label: 'High', severity: 'danger' },
};

const findingColumns = [
  { field: 'description', header: 'Finding', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'category', header: 'Category', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'severity', header: 'Severity', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: { High: { label: 'High', severity: 'danger' }, Medium: { label: 'Medium', severity: 'warn' }, Low: { label: 'Low', severity: 'success' } },
  },
  { field: 'affectedCount', header: 'Affected', sortable: true, component: markRaw(DataTableCellText) },
];

const complianceColumns = [
  { field: 'framework', header: 'Framework', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'control', header: 'Control', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'description', header: 'Description', sortable: true, component: markRaw(DataTableCellText) },
];

const resourceColumns = [
  { field: 'resourceName', header: 'Resource', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'resourceType', header: 'Type', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalIdentities', header: 'Identities', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'staleAccess', header: 'Stale', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'riskLevel', header: 'Risk', sortable: true, component: markRaw(DataTableCellToken), tokenMapping: riskTokenMapping },
  { field: 'lastReviewed', header: 'Last Reviewed', sortable: true, component: markRaw(DataTableCellText) },
];

const identityColumns = [
  { field: 'name', header: 'Identity', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'type', header: 'Type', sortable: true,
    component: markRaw(DataTableCellToken),
    tokenMapping: {
      Human: { label: 'Human', severity: 'info' },
      'Service Account': { label: 'Service Acct', severity: 'warn' },
      'API Key': { label: 'API Key', severity: 'warn' },
    },
  },
  { field: 'team', header: 'Team', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalResources', header: 'Resources', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'privilegedAccess', header: 'Privileged', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'riskLevel', header: 'Risk', sortable: true, component: markRaw(DataTableCellToken), tokenMapping: riskTokenMapping },
  { field: 'lastActive', header: 'Last Active', sortable: true, component: markRaw(DataTableCellText) },
];

const groupColumns = [
  { field: 'groupName', header: 'Group', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'memberCount', header: 'Members', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalResources', header: 'Resources', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'privilegedResources', header: 'Privileged', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'nestingDepth', header: 'Nesting Depth', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'riskLevel', header: 'Risk', sortable: true, component: markRaw(DataTableCellToken), tokenMapping: riskTokenMapping },
];

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
    tokenMapping: { Human: { label: 'Human', severity: 'info' }, 'Service Account': { label: 'Service Acct', severity: 'warn' } },
  },
  { field: 'resource', header: 'Resource', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'resourceType', header: 'Resource Type', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'accessPath', header: 'Access Path', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'riskLevel', header: 'Risk', sortable: true, component: markRaw(DataTableCellToken), tokenMapping: riskTokenMapping },
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
    tokenMapping: { Certify: { label: 'Certified', severity: 'success' }, Revoke: { label: 'Revoked', severity: 'danger' } },
  },
  { field: 'decidedBy', header: 'Decided By', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'decidedAt', header: 'Decided At', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'reason', header: 'Reason', sortable: true, component: markRaw(DataTableCellText) },
];

// ─── Component ────────────────────────────────────────────────────────────────

const ISPMPage = defineComponent({
  name: 'ISPMPage',
  components: {
    ActionsToolbar,
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
    PvDivider: Divider,
    PvDrawer: Drawer,
    PvSelectButton: SelectButton,
    PvTag: Tag,
    PvTabs: Tabs,
    PvTabList: TabList,
    PvTab: Tab,
    PvTabPanels: TabPanels,
    PvTabPanel: TabPanel,
    ArrowDownTrayIcon,
    ArrowLeftIcon,
    CalendarDaysIcon,
    ChevronRightIcon,
    ClipboardDocumentCheckIcon,
    PlayIcon,
    ShieldCheckIcon,
    XMarkIcon,
  },
  setup() {
    // ── Global ──────────────────────────────────────────────────────────────
    const mainTab = ref('overview');
    const scanRunning = ref(false);
    const overallScore = ref(72);

    function runScan() {
      scanRunning.value = true;
      setTimeout(() => { scanRunning.value = false; }, 2000);
    }

    // ── Dashboard ───────────────────────────────────────────────────────────
    const highFindings = findingsData.filter((f) => f.severity === 'High').length;
    const mediumFindings = findingsData.filter((f) => f.severity === 'Medium').length;

    // ── Explorer ────────────────────────────────────────────────────────────
    const explorerTab = ref('resource');
    const typeFilter = ref<'all' | 'human' | 'nhi'>('all');
    const typeFilterOptions = [
      { label: 'All', value: 'all' },
      { label: 'Human', value: 'human' },
      { label: 'Non-Human (NHI)', value: 'nhi' },
    ];

    // Tracks which finding the user navigated from — shown as a context banner
    const explorerFindingContext = ref<string | null>(null);

    const drawerVisible = ref(false);
    const drawerTitle = ref('');
    const drawerSubtitle = ref('');
    const drawerDetails = ref<{ label: string; value: string }[]>([]);
    const drawerPaths = ref<AccessPathStep[][]>([]);

    const filteredIdentityData = computed(() => {
      if (typeFilter.value === 'human') return identityData.filter((i) => i.type === 'Human');
      if (typeFilter.value === 'nhi') return identityData.filter((i) => i.type !== 'Human');
      return identityData;
    });

    const resourceTabLabel = computed(() => `By Resource (${resourceData.length})`);
    const identityTabLabel = computed(() => `By Identity (${filteredIdentityData.value.length})`);
    const groupTabLabel = computed(() => `By Group (${groupData.length})`);

    function openResourceDrawer(event: { data: ResourceRow }) {
      const r = event.data;
      drawerTitle.value = r.resourceName;
      drawerSubtitle.value = r.resourceType;
      drawerDetails.value = [
        { label: 'Type', value: r.resourceType },
        { label: 'Total Identities', value: String(r.totalIdentities) },
        { label: 'Stale Access', value: String(r.staleAccess) },
        { label: 'Risk Level', value: r.riskLevel },
        { label: 'Last Reviewed', value: r.lastReviewed },
      ];
      drawerPaths.value = getAccessPaths('resource', r.id);
      drawerVisible.value = true;
    }

    function openIdentityDrawer(event: { data: IdentityRow }) {
      const i = event.data;
      drawerTitle.value = i.name;
      drawerSubtitle.value = `${i.type} · ${i.email}`;
      drawerDetails.value = [
        { label: 'Type', value: i.type },
        { label: 'Team', value: i.team },
        { label: 'Resources', value: String(i.totalResources) },
        { label: 'Privileged', value: String(i.privilegedAccess) },
        { label: 'Risk', value: i.riskLevel },
        { label: 'Last Active', value: i.lastActive },
      ];
      drawerPaths.value = getAccessPaths('identity', i.id);
      drawerVisible.value = true;
    }

    function openGroupDrawer(event: { data: GroupRow }) {
      const g = event.data;
      drawerTitle.value = g.groupName;
      drawerSubtitle.value = `${g.memberCount} members`;
      drawerDetails.value = [
        { label: 'Members', value: String(g.memberCount) },
        { label: 'Resources', value: String(g.totalResources) },
        { label: 'Privileged Resources', value: String(g.privilegedResources) },
        { label: 'Nesting Depth', value: String(g.nestingDepth) },
        { label: 'Risk', value: g.riskLevel },
      ];
      drawerPaths.value = getAccessPaths('group', g.id);
      drawerVisible.value = true;
    }

    // ── Cross-tab: Finding → Explorer ──────────────────────────────────────
    // This is the core loop: see a problem → investigate access → act on it.
    function investigateFinding(event: { data: Finding }) {
      const f = event.data;
      explorerFindingContext.value = f.description;
      if (f.category === 'NHI') {
        explorerTab.value = 'identity';
        typeFilter.value = 'nhi';
      } else if (f.category === 'Groups') {
        explorerTab.value = 'group';
      } else {
        explorerTab.value = 'resource';
        typeFilter.value = 'all';
      }
      mainTab.value = 'explorer';
    }

    // ── Cross-tab: Explorer → Campaign ─────────────────────────────────────
    // From the drawer, create a campaign scoped to this entity.
    function startCampaignFromDrawer() {
      const entityName = drawerTitle.value;
      drawerVisible.value = false;
      mainTab.value = 'campaigns';
      campaignView.value = 'list';
      campaignActionNotice.value = {
        severity: 'info',
        title: 'Campaign ready to configure',
        detail: `A new Draft campaign scoped to "${entityName}" has been added. Click "Create Campaign" to configure and launch it.`,
      };
    }

    // ── Campaigns ───────────────────────────────────────────────────────────
    const campaignView = ref<'list' | 'detail'>('list');
    const selectedCampaign = ref<Campaign | null>(null);
    const reviewItems = ref<ReviewItem[]>(reviewItemsForCampaign1.map((r) => ({ ...r })));
    const selectedReviewItems = ref<ReviewItem[]>([]);
    const detailTab = ref('queue');
    const campaigns = ref<Campaign[]>(campaignsData.map((c) => ({ ...c })));
    const campaignActionNotice = ref<{ severity: 'success' | 'warn' | 'error' | 'info'; title: string; detail: string } | null>(null);

    const activeCampaignsCount = computed(() => campaigns.value.filter((c) => c.status === 'Active').length);
    const overdueCampaignsCount = computed(() => campaigns.value.filter((c) => c.status === 'Overdue').length);

    const progress = computed(() => {
      if (!selectedCampaign.value) return 0;
      return Math.round((selectedCampaign.value.reviewedItems / selectedCampaign.value.totalItems) * 100);
    });
    const pendingCount = computed(() => reviewItems.value.filter((r) => r.decision === 'Pending').length);
    const certifiedCount = computed(() => reviewItems.value.filter((r) => r.decision === 'Certify').length);
    const revokedCount = computed(() => reviewItems.value.filter((r) => r.decision === 'Revoke').length);

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
      campaignActionNotice.value = null;
      selectedReviewItems.value = [];
      reviewItems.value = event.data.id === 1 ? reviewItemsForCampaign1.map((r) => ({ ...r })) : [];
      campaignView.value = 'detail';
    }

    function backToList() {
      campaignView.value = 'list';
      selectedCampaign.value = null;
      selectedReviewItems.value = [];
    }

    function applyBulkAction(action: Action) {
      const decision = action.id === 'certify' ? 'Certify' as const : 'Revoke' as const;
      const ids = new Set(selectedReviewItems.value.map((r) => r.id));
      reviewItems.value = reviewItems.value.map((r) => ids.has(r.id) ? { ...r, decision } : r);
      if (selectedCampaign.value) {
        selectedCampaign.value.reviewedItems = reviewItems.value.filter((r) => r.decision !== 'Pending').length;
      }
      campaignActionNotice.value = {
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

    return {
      // Global
      menuItems, profileMenuItems, mainTab, scanRunning, overallScore, runScan,
      // Dashboard
      highFindings, mediumFindings, postureCategories, findingsData, complianceControls,
      findingColumns, complianceColumns, investigateFinding,
      // Explorer
      explorerTab, typeFilter, typeFilterOptions, explorerFindingContext,
      drawerVisible, drawerTitle, drawerSubtitle, drawerDetails, drawerPaths,
      filteredIdentityData, resourceTabLabel, identityTabLabel, groupTabLabel,
      resourceData, groupData, resourceColumns, identityColumns, groupColumns,
      openResourceDrawer, openIdentityDrawer, openGroupDrawer, startCampaignFromDrawer,
      // Campaigns
      campaignView, selectedCampaign, campaigns, reviewItems, selectedReviewItems,
      detailTab, campaignActionNotice,
      activeCampaignsCount, overdueCampaignsCount, progress, pendingCount, certifiedCount, revokedCount,
      bulkActions, toolbarSelectedItems, campaignColumns, reviewItemColumns, decisionLogColumns, decisionLog,
      openCampaign, backToList, applyBulkAction, handleDeselectItem, clearSelection,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="security"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />

        <!-- Page Header — posture score always visible regardless of active tab -->
        <PageHeader
          title="Identity Security Posture"
          subtitleText="Last scan: Feb 28, 2026 at 3:45 PM"
        >
          <template #icon>
            <ShieldCheckIcon class="size-7" />
          </template>
          <template #actions>
            <div class="flex items-center gap-2 rounded-md border border-neutral-default_solid px-3 py-1.5">
              <ShieldCheckIcon class="size-4 text-warning-base" />
              <span class="text-body-md-semi-bold text-neutral-base">{{ overallScore }} / 100</span>
              <PvTag severity="warn">Moderate</PvTag>
            </div>
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
          <div class="flex flex-col gap-4 px-6 py-4">
            <PvTabs v-model:value="mainTab">
              <PvTabList>
                <PvTab value="overview">Overview</PvTab>
                <PvTab value="explorer">Explorer</PvTab>
                <PvTab value="campaigns">
                  Campaigns
                  <PvTag v-if="activeCampaignsCount > 0" severity="info" class="ml-2">{{ activeCampaignsCount }} active</PvTag>
                  <PvTag v-if="overdueCampaignsCount > 0" severity="danger" class="ml-1">{{ overdueCampaignsCount }} overdue</PvTag>
                </PvTab>
              </PvTabList>
              <PvTabPanels>

                <!-- ═══════════════════════════════════════════════════════════
                     OVERVIEW — Posture score, findings, compliance
                     ═══════════════════════════════════════════════════════════ -->
                <PvTabPanel value="overview">
                  <div class="flex flex-col gap-6 pt-4">

                    <!-- Posture score + category breakdown -->
                    <div class="grid grid-cols-4 gap-4">
                      <CollapsiblePanel header="Overall Posture">
                        <template #titleicon="iconProps">
                          <ShieldCheckIcon :class="iconProps.class" />
                        </template>
                        <div class="flex items-center gap-3 py-2">
                          <span class="text-heading-1 text-neutral-base">{{ overallScore }}</span>
                          <div class="flex flex-col gap-1">
                            <PvTag severity="warn">Moderate</PvTag>
                            <span class="text-body-sm text-neutral-subtle">out of 100</span>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 pt-1">
                          <span class="text-body-sm text-error-base">{{ highFindings }} critical</span>
                          <span class="text-body-sm text-neutral-subtle">&middot;</span>
                          <span class="text-body-sm text-warning-base">{{ mediumFindings }} moderate</span>
                        </div>
                      </CollapsiblePanel>

                      <div class="col-span-3 grid grid-cols-5 gap-3">
                        <div
                          v-for="cat in postureCategories"
                          :key="cat.label"
                          class="flex flex-col gap-2 rounded-md border border-neutral-default_solid p-3"
                        >
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
                    </div>

                    <PvDivider />

                    <!-- Findings — clicking a row navigates to Explorer with context -->
                    <div>
                      <div class="flex items-center justify-between pb-3">
                        <div>
                          <p class="text-heading-4 text-neutral-base">Findings</p>
                          <p class="text-body-sm text-neutral-subtle">Click any finding to investigate its access relationships in Explorer</p>
                        </div>
                        <div class="flex items-center gap-2">
                          <PvTag severity="danger">{{ highFindings }} High</PvTag>
                          <PvTag severity="warn">{{ mediumFindings }} Medium</PvTag>
                        </div>
                      </div>
                      <CircuitDataTable
                        @row-click="investigateFinding"
                        :data="findingsData"
                        :columns="findingColumns"
                        :paginator="true"
                        :rows="10"
                        dataKey="id"
                      />
                    </div>

                    <PvDivider />

                    <!-- Compliance coverage -->
                    <div>
                      <div class="pb-3">
                        <p class="text-heading-4 text-neutral-base">Compliance Coverage</p>
                        <p class="text-body-sm text-neutral-subtle">Control mapping across active frameworks</p>
                      </div>
                      <div class="grid grid-cols-2 gap-4 pb-4">
                        <div
                          v-for="ctrl in complianceControls"
                          :key="ctrl.id"
                          class="flex flex-col gap-2 rounded-md border border-neutral-default_solid p-4"
                        >
                          <div class="flex items-center justify-between">
                            <span class="text-body-sm-semi-bold text-neutral-base">{{ ctrl.framework }} {{ ctrl.control }}</span>
                            <span
                              class="text-body-sm-semi-bold"
                              :class="ctrl.coverage >= 80 ? 'text-success-base' : ctrl.coverage >= 60 ? 'text-warning-base' : 'text-error-base'"
                            >{{ ctrl.coverage }}%</span>
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
                </PvTabPanel>

                <!-- ═══════════════════════════════════════════════════════════
                     EXPLORER — Access by Resource, Identity (incl. NHI), Group
                     Analysis + Explorer unified: same data, risk scores + paths
                     ═══════════════════════════════════════════════════════════ -->
                <PvTabPanel value="explorer">
                  <div class="flex flex-col gap-4 pt-4">

                    <!-- Context banner when arriving from a Dashboard finding -->
                    <div
                      v-if="explorerFindingContext"
                      class="flex items-center justify-between gap-3 rounded-md border border-neutral-default_solid bg-info-surface px-4 py-3"
                    >
                      <div>
                        <p class="text-body-sm-semi-bold text-neutral-base">Investigating finding</p>
                        <p class="text-body-sm text-neutral-subtle">{{ explorerFindingContext }}</p>
                      </div>
                      <PvButton severity="secondary" variant="text" size="small" @click="explorerFindingContext = null">
                        <template #icon="iconProps">
                          <XMarkIcon :class="iconProps.class" />
                        </template>
                      </PvButton>
                    </div>

                    <!-- Sub-tabs: Resource / Identity / Group -->
                    <PvTabs v-model:value="explorerTab">
                      <PvTabList>
                        <PvTab value="resource">{{ resourceTabLabel }}</PvTab>
                        <PvTab value="identity">{{ identityTabLabel }}</PvTab>
                        <PvTab value="group">{{ groupTabLabel }}</PvTab>
                      </PvTabList>
                      <PvTabPanels>

                        <!-- By Resource -->
                        <PvTabPanel value="resource">
                          <DataTableToolbar
                            searchPlaceholder="Search resources..."
                            :showAddButton="false"
                            :showFilterButton="true"
                            :showRefreshButton="true"
                          />
                          <CircuitDataTable
                            @row-click="openResourceDrawer"
                            :data="resourceData"
                            :columns="resourceColumns"
                            :paginator="true"
                            :rows="10"
                            dataKey="id"
                          />
                        </PvTabPanel>

                        <!-- By Identity — Human + NHI with prominent type filter -->
                        <PvTabPanel value="identity">
                          <div class="flex items-center gap-3 py-2">
                            <DataTableToolbar
                              searchPlaceholder="Search identities..."
                              :showAddButton="false"
                              :showFilterButton="true"
                              :showRefreshButton="true"
                              class="flex-1"
                            />
                            <PvSelectButton
                              v-model="typeFilter"
                              :options="typeFilterOptions"
                              optionLabel="label"
                              optionValue="value"
                            />
                          </div>
                          <CircuitDataTable
                            @row-click="openIdentityDrawer"
                            :data="filteredIdentityData"
                            :columns="identityColumns"
                            :paginator="true"
                            :rows="10"
                            dataKey="id"
                          />
                        </PvTabPanel>

                        <!-- By Group -->
                        <PvTabPanel value="group">
                          <DataTableToolbar
                            searchPlaceholder="Search groups..."
                            :showAddButton="false"
                            :showFilterButton="true"
                            :showRefreshButton="true"
                          />
                          <CircuitDataTable
                            @row-click="openGroupDrawer"
                            :data="groupData"
                            :columns="groupColumns"
                            :paginator="true"
                            :rows="10"
                            dataKey="id"
                          />
                        </PvTabPanel>

                      </PvTabPanels>
                    </PvTabs>
                  </div>
                </PvTabPanel>

                <!-- ═══════════════════════════════════════════════════════════
                     CAMPAIGNS — List + Detail (AccessReview absorbed here)
                     ═══════════════════════════════════════════════════════════ -->
                <PvTabPanel value="campaigns">
                  <div class="flex flex-col gap-4 pt-4">

                    <!-- Notice (e.g. when arriving from Explorer "Start Campaign") -->
                    <MessageNotification
                      v-if="campaignActionNotice && campaignView === 'list'"
                      :severity="campaignActionNotice.severity"
                      :title="campaignActionNotice.title"
                      :detail="campaignActionNotice.detail"
                    />

                    <!-- Campaign List View -->
                    <template v-if="campaignView === 'list'">
                      <div class="flex items-center gap-3">
                        <PvTag severity="info">{{ activeCampaignsCount }} Active</PvTag>
                        <PvTag v-if="overdueCampaignsCount > 0" severity="danger">{{ overdueCampaignsCount }} Overdue</PvTag>
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
                    </template>

                    <!-- Campaign Detail View -->
                    <template v-else-if="campaignView === 'detail' && selectedCampaign">
                      <!-- Breadcrumb back navigation -->
                      <div class="flex items-center gap-2 -mt-1">
                        <PvButton label="All Campaigns" severity="secondary" variant="text" @click="backToList">
                          <template #icon="iconProps">
                            <ArrowLeftIcon :class="iconProps.class" />
                          </template>
                        </PvButton>
                        <span class="text-neutral-subtle">/</span>
                        <span class="text-body-md-semi-bold text-neutral-base">{{ selectedCampaign.name }}</span>
                        <PvTag
                          :severity="selectedCampaign.status === 'Overdue' ? 'danger' : selectedCampaign.status === 'Complete' ? 'success' : selectedCampaign.status === 'Active' ? 'info' : 'secondary'"
                          class="ml-1"
                        >{{ selectedCampaign.status }}</PvTag>
                      </div>

                      <MessageNotification
                        v-if="selectedCampaign.status === 'Overdue'"
                        severity="error"
                        title="Campaign overdue"
                        :detail="'This campaign is past its deadline of ' + selectedCampaign.deadline + '. ' + pendingCount + ' items still pending review.'"
                      />

                      <MessageNotification
                        v-if="campaignActionNotice && campaignView === 'detail'"
                        :severity="campaignActionNotice.severity"
                        :title="campaignActionNotice.title"
                        :detail="campaignActionNotice.detail"
                      />

                      <!-- Progress card -->
                      <div class="rounded-md border border-neutral-default_solid p-4">
                        <div class="flex items-center justify-between pb-2">
                          <div class="flex items-center gap-3">
                            <span class="text-heading-3 text-neutral-base">{{ progress }}%</span>
                            <span class="text-body-md text-neutral-subtle">reviewed</span>
                          </div>
                          <div class="flex items-center gap-4">
                            <span class="text-body-sm text-neutral-subtle">Scope: {{ selectedCampaign.scope }}</span>
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

                      <!-- Review Queue / Decision Log -->
                      <PvTabs v-model:value="detailTab">
                        <PvTabList>
                          <PvTab value="queue">Review Queue ({{ pendingCount }} pending)</PvTab>
                          <PvTab value="log">Decision Log ({{ decisionLog.length }})</PvTab>
                        </PvTabList>
                        <PvTabPanels>
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
                    </template>

                  </div>
                </PvTabPanel>

              </PvTabPanels>
            </PvTabs>
          </div>
        </ListPageLayout>

        <!-- ═══════════════════════════════════════════════════════════════════
             Access Detail Drawer (Explorer)
             Shows: key-value summary + access paths + action to start campaign
             ═══════════════════════════════════════════════════════════════════ -->
        <PvDrawer
          v-model:visible="drawerVisible"
          :header="drawerTitle"
          position="right"
          class="w-[640px]!"
        >
          <div class="flex flex-col gap-4">
            <span class="text-body-md text-neutral-subtle">{{ drawerSubtitle }}</span>

            <PvDivider />

            <div class="grid grid-cols-2 gap-x-6 gap-y-3">
              <DetailsKeyValue
                v-for="d in drawerDetails"
                :key="d.label"
                :label="d.label"
                :value="d.value"
              />
            </div>

            <PvDivider />

            <p class="text-body-md-semi-bold text-neutral-base">Access Paths</p>
            <p class="text-body-sm text-neutral-subtle">How access flows from identity to resource</p>

            <div class="flex flex-col gap-3">
              <div
                v-for="(path, idx) in drawerPaths"
                :key="idx"
                class="rounded-md border border-neutral-default_solid p-3"
              >
                <div class="flex items-center flex-wrap gap-1">
                  <template v-for="(step, sIdx) in path" :key="sIdx">
                    <PvTag :severity="step.type === 'identity' ? 'info' : step.type === 'resource' ? 'success' : step.type === 'permission' ? 'warn' : 'secondary'">
                      {{ step.label }}
                    </PvTag>
                    <ChevronRightIcon v-if="sIdx < path.length - 1" class="size-3 text-neutral-subtle" />
                  </template>
                </div>
              </div>
            </div>

            <PvDivider />

            <!-- The loop closes here: Explorer → Campaign -->
            <PvButton label="Start Review Campaign" @click="startCampaignFromDrawer">
              <template #icon="iconProps">
                <ClipboardDocumentCheckIcon :class="iconProps.class" />
              </template>
            </PvButton>
            <PvButton label="Export Access Report" severity="secondary" variant="outlined">
              <template #icon="iconProps">
                <ArrowDownTrayIcon :class="iconProps.class" />
              </template>
            </PvButton>
          </div>

          <template #footer>
            <div class="flex justify-end">
              <PvButton label="Close" severity="secondary" variant="text" @click="drawerVisible = false" />
            </div>
          </template>
        </PvDrawer>

      </div>
    </div>
  `,
});

// ─── Story ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof ISPMPage> = {
  title: "Projects/Raj's Playground/Pages/ISPM — Unified View",
  component: ISPMPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ISPMPage>;

export const Default: Story = {};
