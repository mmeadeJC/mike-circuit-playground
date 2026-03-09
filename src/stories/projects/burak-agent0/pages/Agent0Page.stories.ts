import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, reactive, onMounted, onUnmounted, watch } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellLink,
  DataTableCellButton,
  DataTableCellToken,
  CollapsiblePanel,
  FormField,
  ToggleSwitch,
  SeverityDialog,
  CheckboxWithLabel,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import MultiSelect from 'primevue/multiselect';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Drawer from 'primevue/drawer';
import SelectButton from 'primevue/selectbutton';
import Chart from 'primevue/chart';

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
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowTrendingUpIcon,
  ArrowUpIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';
import PageSection from '../../../../components/PageSection.vue';
import ListPageLayout from '../../../../components/layout/page-layouts/ListPageLayout.vue';
import ConfigPageLayout from '../../../../components/layout/page-layouts/ConfigPageLayout.vue';
import DashboardPageLayout from '../../../../components/layout/page-layouts/DashboardPageLayout.vue';

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

// ─── Mock Data: Servers ───

interface Server {
  id: number;
  name: string;
  slug: string;
  url: string;
  connectionType: string;
  connectionTypeSeverity: string;
  status: string;
  statusConnected: boolean;
  createdAt: string;
  authConfig: string;
}

const serversData: Server[] = [
  {
    id: 1,
    name: 'Figma',
    slug: 'figma',
    url: 'https://mcp.figma.com/mcp',
    connectionType: 'OAuth',
    connectionTypeSeverity: 'accent-aster',
    status: 'Connected',
    statusConnected: true,
    createdAt: '2/17/2026',
    authConfig: '{\n  "redirect_uri": "warp://callback"\n}',
  },
  {
    id: 2,
    name: 'Github',
    slug: 'github',
    url: 'https://api.githubcopilot.com/mcp/',
    connectionType: 'API Token',
    connectionTypeSeverity: 'accent-yellow',
    status: 'Connected',
    statusConnected: true,
    createdAt: '2/13/2026',
    authConfig: '{\n  "token_env": "GITHUB_TOKEN"\n}',
  },
  {
    id: 3,
    name: 'JumpCloud Labs Admin',
    slug: 'jclabs',
    url: 'https://labs.jumpcloud.com/mcp/admin',
    connectionType: 'OAuth',
    connectionTypeSeverity: 'accent-aster',
    status: 'Connected',
    statusConnected: true,
    createdAt: '2/11/2026',
    authConfig: '{\n  "redirect_uri": "https://labs.jumpcloud.com/callback"\n}',
  },
  {
    id: 4,
    name: 'Atlassian',
    slug: 'jira',
    url: 'https://mcp.atlassian.com/v1/sse',
    connectionType: 'SSE',
    connectionTypeSeverity: 'accent-moss',
    status: 'Connected',
    statusConnected: true,
    createdAt: '2/10/2026',
    authConfig: '{\n  "oauth_scope": "read:jira-work"\n}',
  },
  {
    id: 5,
    name: 'Salesforce',
    slug: 'salesforce',
    url: 'https://api.salesforce.com/platform/mcp/v1-beta.2',
    connectionType: 'OAuth',
    connectionTypeSeverity: 'accent-aster',
    status: 'Not connected',
    statusConnected: false,
    createdAt: '2/12/2026',
    authConfig: '{\n  "redirect_uri": "https://salesforce.com/oauth/callback"\n}',
  },
  {
    id: 6,
    name: 'Slack',
    slug: 'slack',
    url: 'https://api.slack.com/mcp/v1',
    connectionType: 'API Token',
    connectionTypeSeverity: 'accent-yellow',
    status: 'Not connected',
    statusConnected: false,
    createdAt: '2/15/2026',
    authConfig: '{\n  "token_env": "SLACK_BOT_TOKEN"\n}',
  },
];

// ─── Mock Data: Profiles ───

interface Profile {
  id: number;
  name: string;
  profileId: string;
  label: string;
  serverIds: string[];
  createdAt: string;
}

const profilesData: Profile[] = [
  {
    id: 1,
    name: 'Engineering',
    profileId: 'engineering',
    label: 'engineering',
    serverIds: ['jira', 'github'],
    createdAt: '2/10/2026',
  },
  {
    id: 2,
    name: 'Design',
    profileId: 'design',
    label: 'design',
    serverIds: ['figma', 'slack'],
    createdAt: '2/12/2026',
  },
  {
    id: 3,
    name: 'Sales',
    profileId: 'sales',
    label: 'sales',
    serverIds: ['salesforce'],
    createdAt: '2/14/2026',
  },
];

// ─── Mock Data: User Groups (bound to profiles) ───

interface UserGroup {
  id: number;
  name: string;
  slug: string;
  memberCount: number;
  createdAt: string;
}

const userGroupsData: UserGroup[] = [
  { id: 1, name: 'Backend Engineers', slug: 'backend-eng', memberCount: 24, createdAt: '1/15/2026' },
  { id: 2, name: 'Frontend Engineers', slug: 'frontend-eng', memberCount: 18, createdAt: '1/15/2026' },
  { id: 3, name: 'DevOps', slug: 'devops', memberCount: 8, createdAt: '1/20/2026' },
  { id: 4, name: 'Design Team', slug: 'design-team', memberCount: 12, createdAt: '2/01/2026' },
  { id: 5, name: 'Sales Team', slug: 'sales-team', memberCount: 15, createdAt: '2/05/2026' },
  { id: 6, name: 'Marketing', slug: 'marketing', memberCount: 10, createdAt: '2/05/2026' },
  { id: 7, name: 'QA Engineers', slug: 'qa-eng', memberCount: 6, createdAt: '2/10/2026' },
];

const profileUserGroups: Record<string, string[]> = {
  engineering: ['backend-eng', 'frontend-eng', 'devops', 'qa-eng'],
  design: ['design-team', 'frontend-eng'],
  sales: ['sales-team', 'marketing'],
};

// ─── Tabs ───

const mainTabs = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Servers', value: 'servers' },
  { label: 'Profiles', value: 'profiles' },
  { label: 'Activity Log', value: 'activity' },
];

const profileDetailTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Servers', value: 'profile-servers' },
  { label: 'User Groups', value: 'profile-user-groups' },
];

// ─── Profile Detail: Bound Servers Columns ───

const profileServerColumns = [
  {
    field: 'name',
    header: 'Server Name',
    sortable: true,
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      href: '#',
    }),
  },
  {
    field: 'url',
    header: 'URL',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.url }),
  },
  {
    field: 'connectionType',
    header: 'Connection Type',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellToken),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.connectionType,
      severity: sp.data.connectionTypeSeverity,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.status,
      class: sp.data.statusConnected ? 'text-status-success-base' : 'text-error-base',
    }),
  },
];

// ─── Profile Detail: Bound User Groups Columns ───

const profileUserGroupColumns = [
  {
    field: 'name',
    header: 'Group Name',
    sortable: true,
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      href: '#',
    }),
  },
  {
    field: 'slug',
    header: 'Slug',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.slug }),
  },
  {
    field: 'memberCount',
    header: 'Members',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.memberCount),
    }),
  },
  {
    field: 'createdAt',
    header: 'Created At',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.createdAt }),
  },
];

// ─── Server Table Columns ───

const serverColumns = [
  {
    field: 'name',
    header: 'Server Name',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      href: '#',
    }),
  },
  {
    field: 'url',
    header: 'URL',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.url,
    }),
  },
  {
    field: 'connectionType',
    header: 'Connection Type',
    width: '150px',
    component: markRaw(Tag),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      value: sp.data.connectionType,
      severity: sp.data.connectionTypeSeverity,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '180px',
    component: markRaw(Tag),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      value: sp.data.status,
      severity: sp.data.statusConnected ? 'success' : 'danger',
    }),
  },
  {
    field: 'createdAt',
    header: 'Created At',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.createdAt,
    }),
  },
  {
    field: 'actions',
    header: '',
    width: '100px',
    component: markRaw(DataTableCellButton),
    componentProps: () => ({
      type: 'Button Group' as const,
      iconButtons: [
        { icon: markRaw(PencilSquareIcon) },
        { icon: markRaw(TrashIcon) },
      ],
    }),
  },
];

// ─── Profile Table Columns ───

function getProfileColumns(serversRef: Server[]) {
  return [
    {
      field: 'name',
      header: 'Name',
      sortable: true,
      component: markRaw(DataTableCellLink),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.name,
        description: sp.data.profileId,
        href: '#',
      }),
    },
    {
      field: 'serverIds',
      header: 'Servers',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => {
        const ids = sp.data.serverIds as string[];
        if (ids.length === 1) {
          const server = serversRef.find((s) => s.slug === ids[0]);
          return { label: server ? server.name : ids[0] };
        }
        return { label: `${ids.length} servers` };
      },
    },
    {
      field: 'createdAt',
      header: 'Created At',
      sortable: true,
      width: '140px',
      component: markRaw(DataTableCellText),
      componentProps: (sp: { data: Record<string, unknown> }) => ({
        label: sp.data.createdAt,
      }),
    },
    {
      field: 'actions',
      header: '',
      width: '100px',
      component: markRaw(DataTableCellButton),
      componentProps: () => ({
        type: 'Button Group' as const,
        iconButtons: [
          { icon: markRaw(PencilSquareIcon) },
          { icon: markRaw(TrashIcon) },
        ],
      }),
    },
  ];
}

// ─── Dashboard Data ───

const recentActivity = [
  { user: 'John Doe', server: 'Figma', time: '2 min ago', event: 'Connected to Figma MCP server' },
  { user: 'John Doe', server: 'Github', time: '8 min ago', event: 'Tool call: list_pull_requests — 1,240 tokens' },
  { user: 'Sarah Chen', server: 'Figma', time: '12 min ago', event: 'Tool call: get_file — 8,750 tokens' },
  { user: 'Sarah Chen', server: 'Figma', time: '15 min ago', event: 'OAuth token refreshed automatically' },
  { user: 'John Doe', server: 'Atlassian', time: '18 min ago', event: 'Tool call: search_issues — 3,420 tokens' },
  { user: 'Mike Ross', server: 'Salesforce', time: '25 min ago', event: 'Tool call: query_records — failed (connection timeout)' },
  { user: 'Sarah Chen', server: 'Atlassian', time: '32 min ago', event: 'Connected to Atlassian MCP server' },
  { user: 'John Doe', server: 'Github', time: '38 min ago', event: 'Tool call: create_pull_request — 1,890 tokens' },
  { user: 'Lisa Wang', server: 'Figma', time: '45 min ago', event: 'Tool call: get_comments — 560 tokens' },
  { user: 'Mike Ross', server: 'Salesforce', time: '52 min ago', event: 'Connected to Salesforce MCP server' },
  { user: 'Sarah Chen', server: 'JumpCloud Labs', time: '1 hour ago', event: 'Tool call: list_users — 4,200 tokens' },
  { user: 'John Doe', server: 'Github', time: '1.2 hours ago', event: 'Tool call: get_file_contents — 6,320 tokens' },
  { user: 'Lisa Wang', server: 'Atlassian', time: '1.5 hours ago', event: 'Connected to Atlassian MCP server' },
  { user: 'Alex Kim', server: 'Github', time: '1.8 hours ago', event: 'Tool call: list_repositories — 3,750 tokens' },
  { user: 'Sarah Chen', server: 'Figma', time: '2 hours ago', event: 'Tool call: search_files — 2,100 tokens' },
  { user: 'Mike Ross', server: 'Salesforce', time: '2.2 hours ago', event: 'Tool call: update_record — failed (auth expired)' },
  { user: 'John Doe', server: 'Atlassian', time: '2.5 hours ago', event: 'Tool call: create_issue — 2,870 tokens' },
  { user: 'Alex Kim', server: 'Github', time: '2.8 hours ago', event: 'Connected to Github MCP server' },
  { user: 'Sarah Chen', server: 'JumpCloud Labs', time: '3 hours ago', event: 'Tool call: create_user_group — 980 tokens' },
  { user: 'Lisa Wang', server: 'Figma', time: '3.2 hours ago', event: 'Tool call: get_file — 4,100 tokens' },
  { user: 'John Doe', server: 'Github', time: '3.5 hours ago', event: 'Tool call: search_code — 1,450 tokens' },
  { user: 'Mike Ross', server: 'Salesforce', time: '4 hours ago', event: 'OAuth token refreshed automatically' },
  { user: 'Sarah Chen', server: 'Atlassian', time: '4.3 hours ago', event: 'Tool call: get_project — 1,620 tokens' },
  { user: 'Alex Kim', server: 'JumpCloud Labs', time: '4.5 hours ago', event: 'Tool call: list_devices — 3,200 tokens' },
  { user: 'John Doe', server: 'Figma', time: '5 hours ago', event: 'Tool call: export_component — 5,800 tokens' },
  { user: 'Lisa Wang', server: 'Atlassian', time: '5.5 hours ago', event: 'Tool call: add_comment — 720 tokens' },
  { user: 'Sarah Chen', server: 'Github', time: '6 hours ago', event: 'Connected to Github MCP server' },
  { user: 'Mike Ross', server: 'JumpCloud Labs', time: '6.5 hours ago', event: 'Tool call: get_user — 890 tokens' },
  { user: 'John Doe', server: 'Atlassian', time: '7 hours ago', event: 'Tool call: transition_issue — 1,100 tokens' },
  { user: 'Alex Kim', server: 'Figma', time: '7.5 hours ago', event: 'Connected to Figma MCP server' },
  { user: 'Sarah Chen', server: 'Github', time: '8 hours ago', event: 'Tool call: create_issue — 1,950 tokens' },
  { user: 'Lisa Wang', server: 'JumpCloud Labs', time: '8.5 hours ago', event: 'Tool call: list_user_groups — 2,400 tokens' },
  { user: 'John Doe', server: 'Github', time: '9 hours ago', event: 'Tool call: merge_pull_request — 680 tokens' },
  { user: 'Alex Kim', server: 'Atlassian', time: '10 hours ago', event: 'Tool call: search_issues — 3,100 tokens' },
  { user: 'Sarah Chen', server: 'Figma', time: '11 hours ago', event: 'Tool call: get_styles — 1,340 tokens' },
  { user: 'John Doe', server: 'JumpCloud Labs', time: '12 hours ago', event: 'Tool call: list_policies — 2,750 tokens' },
  { user: 'Mike Ross', server: 'Salesforce', time: 'Yesterday', event: 'Tool call: create_lead — 1,560 tokens' },
  { user: 'Lisa Wang', server: 'Github', time: 'Yesterday', event: 'Tool call: list_commits — 4,200 tokens' },
  { user: 'Alex Kim', server: 'Figma', time: 'Yesterday', event: 'Tool call: get_variables — 920 tokens' },
  { user: 'John Doe', server: 'Atlassian', time: 'Yesterday', event: 'Connected to Atlassian MCP server' },
];

const topServerUsage = [
  { name: 'Atlassian', requests: 4521 },
  { name: 'Github', requests: 3892 },
  { name: 'Figma', requests: 2614 },
  { name: 'JumpCloud Labs', requests: 1820 },
  { name: 'Salesforce', requests: 1340 },
];

// ─── Monthly Usage by Server (Chart.js line chart) ───

const getCssVar = (name: string) =>
  typeof document !== 'undefined'
    ? getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    : '';

const monthlyChartData = {
  labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Github',
      data: [820, 1450, 2100, 2680, 3200, 3540, 3892],
      borderColor: 'rgb(45, 180, 175)',
      backgroundColor: 'rgb(45, 180, 175)',
      pointBackgroundColor: 'rgb(45, 180, 175)',
      pointStyle: 'circle',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: false,
    },
    {
      label: 'Atlassian',
      data: [600, 1100, 1800, 2900, 3600, 4100, 4521],
      borderColor: 'rgb(76, 172, 246)',
      backgroundColor: 'rgb(76, 172, 246)',
      pointBackgroundColor: 'rgb(76, 172, 246)',
      pointStyle: 'circle',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: false,
    },
    {
      label: 'Figma',
      data: [400, 750, 1200, 1600, 1900, 2300, 2614],
      borderColor: 'rgb(242, 138, 13)',
      backgroundColor: 'rgb(242, 138, 13)',
      pointBackgroundColor: 'rgb(242, 138, 13)',
      pointStyle: 'circle',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: false,
    },
    {
      label: 'JumpCloud Labs',
      data: [200, 380, 620, 900, 1200, 1540, 1820],
      borderColor: 'rgb(240, 135, 96)',
      backgroundColor: 'rgb(240, 135, 96)',
      pointBackgroundColor: 'rgb(240, 135, 96)',
      pointStyle: 'circle',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: false,
    },
    {
      label: 'Salesforce',
      data: [0, 0, 100, 320, 580, 740, 860],
      borderColor: 'rgb(231, 126, 206)',
      backgroundColor: 'rgb(231, 126, 206)',
      pointBackgroundColor: 'rgb(231, 126, 206)',
      pointStyle: 'circle',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: false,
    },
    {
      label: 'Slack',
      data: [0, 0, 0, 0, 80, 180, 310],
      borderColor: 'rgb(177, 147, 235)',
      backgroundColor: 'rgb(177, 147, 235)',
      pointBackgroundColor: 'rgb(177, 147, 235)',
      pointStyle: 'circle',
      tension: 0.3,
      pointRadius: 2,
      pointHoverRadius: 4,
      fill: false,
    },
  ],
};

function buildMonthlyChartOptions() {
  const subtleText = getCssVar('--jc-color-text-neutral-subtle');
  const gridColor = getCssVar('--jc-color-border-neutral-default_alpha');

  return {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'center' as const,
        labels: {
          usePointStyle: false,
          boxWidth: 8,
          boxHeight: 8,
          useBorderRadius: true,
          borderRadius: 4,
          padding: 20,
          color: subtleText,
          font: { size: 12 },
        },
      },
      tooltip: {
        enabled: false,
        callbacks: {
          label: (ctx: { dataset: { label: string }; parsed: { y: number } }) =>
            `${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString()} requests`,
        },
        external: (context: { chart: { canvas: HTMLCanvasElement }; tooltip: { opacity: number; caretX: number; caretY: number; title: string[]; body: { lines: string[] }[]; labelColors: { borderColor: string; backgroundColor: string }[] } }) => {
          const { chart, tooltip } = context;
          let el = chart.canvas.parentNode?.querySelector('.circuit-chart-tooltip') as HTMLDivElement | null;
          if (!el) {
            el = document.createElement('div');
            el.classList.add('circuit-chart-tooltip');
            chart.canvas.parentNode?.appendChild(el);
          }
          if (tooltip.opacity === 0) { el.style.opacity = '0'; return; }
          const title = tooltip.title?.[0] || '';
          const rows = tooltip.body?.map((b: { lines: string[] }, i: number) => {
            const color = tooltip.labelColors?.[i]?.backgroundColor || '#ccc';
            const text = b.lines[0] || '';
            return `<div style="display:flex;align-items:center;gap:6px;padding:3px 0;">
              <span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;display:inline-block;"></span>
              <span class="text-body-sm text-neutral-base">${text}</span>
            </div>`;
          }).join('') || '';
          el.className = 'circuit-chart-tooltip shadow-e300 rounded-md bg-neutral-surface';
          el.style.cssText = 'position:absolute;pointer-events:none;transition:opacity 0.15s ease;z-index:50;padding:12px 14px;min-width:180px;';
          el.innerHTML = `<div class="text-body-sm-semi-bold text-neutral-base" style="margin-bottom:8px;">${title}</div>${rows}`;
          el.style.opacity = '1';
          el.style.left = tooltip.caretX + 'px';
          el.style.top = tooltip.caretY + 'px';
          el.style.transform = 'translate(-50%, calc(-100% - 12px))';
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: subtleText,
          font: { size: 12 },
        },
      },
      y: {
        beginAtZero: true,
        border: { display: false },
        ticks: {
          color: subtleText,
          font: { size: 12 },
          callback: (value: number) => (value >= 1000 ? `${value / 1000}k` : value),
        },
        grid: {
          color: gridColor,
        },
      },
    },
  };
}

// ─── Top Users ───

const topUsers = [
  { name: 'John Doe', toolCalls: 8240 },
  { name: 'Sarah Chen', toolCalls: 6890 },
  { name: 'Alex Kim', toolCalls: 4120 },
  { name: 'Lisa Wang', toolCalls: 3450 },
  { name: 'Mike Ross', toolCalls: 2180 },
];

// ─── Settings Data ───

const llmProviders = [
  { id: 'gemini', name: 'Google Gemini', subtitle: 'Google AI Studio or Vertex AI', model: 'gemini-2.0-flash' },
  { id: 'openai', name: 'OpenAI ChatGPT', subtitle: 'OpenAI API platform', model: 'gpt-4o' },
  { id: 'bedrock', name: 'Bedrock Claude', subtitle: 'AWS Bedrock — Claude Sonnet 4', model: 'us.anthropic.claude-sonnet-4-20250514-v1:0' },
];

// ─── Mock Data: Activity Log ───

interface ActivityLogEntry {
  id: number;
  timestamp: string;
  user: string;
  action: string;
  actionCategory: string;
  server: string;
  detail: string;
  tokensUsed: number;
  status: string;
  statusSeverity: string;
}

const activityLogData: ActivityLogEntry[] = [
  {
    id: 1,
    timestamp: '2026-03-02 14:32:05',
    user: 'john.doe@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Github',
    detail: 'list_pull_requests — repo:jumpcloud/admin-portal',
    tokensUsed: 1240,

    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 2,
    timestamp: '2026-03-02 14:28:41',
    user: 'sarah.chen@company.com',
    action: 'Token Created',
    actionCategory: 'token',
    server: 'Figma',
    detail: 'OAuth token issued — scopes: read, write',
    tokensUsed: 0,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 3,
    timestamp: '2026-03-02 14:25:18',
    user: 'john.doe@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Atlassian',
    detail: 'search_issues — jql:project=ADMIN AND status="In Progress"',
    tokensUsed: 3420,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 4,
    timestamp: '2026-03-02 14:22:09',
    user: 'admin@company.com',
    action: 'Token Revoked',
    actionCategory: 'token',
    server: 'Slack',
    detail: 'API token revoked for user mike.ross@company.com',
    tokensUsed: 0,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 5,
    timestamp: '2026-03-02 14:18:33',
    user: 'sarah.chen@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Figma',
    detail: 'get_file — file_key:xH2k9mZ, node_ids:12:44',
    tokensUsed: 8750,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 6,
    timestamp: '2026-03-02 14:15:02',
    user: 'mike.ross@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Salesforce',
    detail: 'query_records — SOQL:SELECT Id,Name FROM Account LIMIT 10',
    tokensUsed: 2100,
    status: 'Failed',
    statusSeverity: 'danger',
  },
  {
    id: 7,
    timestamp: '2026-03-02 14:10:45',
    user: 'john.doe@company.com',
    action: 'Budget Spent',
    actionCategory: 'spending',
    server: '—',
    detail: 'Daily budget threshold reached — 80% of $50.00 limit',
    tokensUsed: 0,
    status: 'Warning',
    statusSeverity: 'warn',
  },
  {
    id: 8,
    timestamp: '2026-03-02 14:05:21',
    user: 'admin@company.com',
    action: 'Token Created',
    actionCategory: 'token',
    server: 'Github',
    detail: 'API token issued — permissions: repo, read:org',
    tokensUsed: 0,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 9,
    timestamp: '2026-03-02 13:58:14',
    user: 'sarah.chen@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'JumpCloud Labs Admin',
    detail: 'list_users — filter:active, limit:50',
    tokensUsed: 4200,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 10,
    timestamp: '2026-03-02 13:52:07',
    user: 'mike.ross@company.com',
    action: 'Token Refreshed',
    actionCategory: 'token',
    server: 'Atlassian',
    detail: 'OAuth token auto-refreshed — expires in 3600s',
    tokensUsed: 0,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 11,
    timestamp: '2026-03-02 13:45:33',
    user: 'john.doe@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Github',
    detail: 'create_pull_request — repo:jumpcloud/circuit, base:main',
    tokensUsed: 1890,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 12,
    timestamp: '2026-03-02 13:40:18',
    user: 'admin@company.com',
    action: 'Budget Updated',
    actionCategory: 'spending',
    server: '—',
    detail: 'Monthly budget increased from $500 to $750',
    tokensUsed: 0,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 13,
    timestamp: '2026-03-02 13:35:42',
    user: 'sarah.chen@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Figma',
    detail: 'get_comments — file_key:xH2k9mZ',
    tokensUsed: 560,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 14,
    timestamp: '2026-03-02 13:28:55',
    user: 'mike.ross@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Salesforce',
    detail: 'update_record — object:Contact, id:003xx000004Tmnz',
    tokensUsed: 1450,
    status: 'Failed',
    statusSeverity: 'danger',
  },
  {
    id: 15,
    timestamp: '2026-03-02 13:22:10',
    user: 'john.doe@company.com',
    action: 'Token Created',
    actionCategory: 'token',
    server: 'JumpCloud Labs Admin',
    detail: 'OAuth token issued — scopes: admin:read, admin:write',
    tokensUsed: 0,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 16,
    timestamp: '2026-03-02 13:15:30',
    user: 'sarah.chen@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Atlassian',
    detail: 'create_issue — project:DESIGN, type:Task',
    tokensUsed: 2870,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 17,
    timestamp: '2026-03-02 13:08:22',
    user: 'admin@company.com',
    action: 'Budget Spent',
    actionCategory: 'spending',
    server: '—',
    detail: 'Weekly spending report — total: $127.45 across 4 servers',
    tokensUsed: 0,
    status: 'Info',
    statusSeverity: 'info',
  },
  {
    id: 18,
    timestamp: '2026-03-02 12:55:44',
    user: 'mike.ross@company.com',
    action: 'Token Expired',
    actionCategory: 'token',
    server: 'Slack',
    detail: 'API token expired — last used 14 days ago',
    tokensUsed: 0,
    status: 'Warning',
    statusSeverity: 'warn',
  },
  {
    id: 19,
    timestamp: '2026-03-02 12:42:11',
    user: 'john.doe@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'Github',
    detail: 'get_file_contents — repo:jumpcloud/admin-portal, path:src/index.ts',
    tokensUsed: 6320,
    status: 'Success',
    statusSeverity: 'success',
  },
  {
    id: 20,
    timestamp: '2026-03-02 12:30:08',
    user: 'sarah.chen@company.com',
    action: 'MCP Tool Call',
    actionCategory: 'mcp_usage',
    server: 'JumpCloud Labs Admin',
    detail: 'create_user_group — name:design-team-beta',
    tokensUsed: 980,
    status: 'Success',
    statusSeverity: 'success',
  },
];

const activityLogColumns = [
  {
    field: 'timestamp',
    header: 'Time',
    sortable: true,
    width: '170px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.timestamp,
    }),
  },
  {
    field: 'user',
    header: 'User',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.user,
      href: '#',
    }),
  },
  {
    field: 'action',
    header: 'Action',
    sortable: true,
    width: '160px',
    component: markRaw(Tag),
    componentProps: (sp: { data: Record<string, unknown> }) => {
      const category = sp.data.actionCategory as string;
      const severityMap: Record<string, string> = {
        mcp_usage: 'accent-aster',
        token: 'accent-yellow',
        spending: 'accent-moss',
      };
      return {
        value: sp.data.action,
        severity: severityMap[category] || 'neutral',
      };
    },
  },
  {
    field: 'server',
    header: 'Server',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.server,
    }),
  },
  {
    field: 'detail',
    header: 'Details',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.detail,
    }),
  },
  {
    field: 'tokensUsed',
    header: 'Tokens',
    sortable: true,
    width: '110px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => {
      const tokens = sp.data.tokensUsed as number;
      return {
        label: tokens > 0 ? tokens.toLocaleString() : '—',
      };
    },
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellToken),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: sp.data.status,
    }),
  },
];

const activityLogFilters = [
  { key: 'Action', operator: 'is', value: 'MCP Tool Call', id: 'filter-action' },
  { key: 'Status', operator: 'is', value: 'Success', id: 'filter-status' },
];

// ─── Component ───

const Agent0Page = defineComponent({
  name: 'Agent0Page',
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable,
    DataTableToolbar,
    CollapsiblePanel,
    FormField,
    ToggleSwitch,
    SeverityDialog,
    CheckboxWithLabel,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvMultiSelect: MultiSelect,
    PvDialog: Dialog,
    PvDivider: Divider,
    PvDrawer: Drawer,
    PvSelectButton: SelectButton,
    PvChart: Chart,
    TopBar,
    PageSection,
    ListPageLayout,
    ConfigPageLayout,
    DashboardPageLayout,
    XMarkIcon,
    EyeIcon,
    EyeSlashIcon,
    ArrowTrendingUpIcon,
    ArrowUpIcon,
    CheckCircleIcon,
    TrashIcon: TrashIcon,
    Cog6ToothIcon,
  },
  setup() {
    // ─── View State ───
    const currentView = ref<'main' | 'settings' | 'profile-detail'>('main');
    const activeTab = ref('dashboard');
    const profileDetailTab = ref('overview');

    // ─── Content Width Tracking (inline panel vs drawer) ───
    const serversContainerRef = ref<HTMLElement | null>(null);
    const contentWidth = ref(1200);
    const useInlinePanel = computed(() => contentWidth.value >= 1024);
    let resizeObserver: ResizeObserver | null = null;

    // ─── Theme-Reactive Chart Options ───
    const monthlyChartOptions = ref(buildMonthlyChartOptions());
    let themeObserver: MutationObserver | null = null;

    onMounted(() => {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          contentWidth.value = entry.contentRect.width;
        }
      });

      themeObserver = new MutationObserver(() => {
        monthlyChartOptions.value = buildMonthlyChartOptions();
      });
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    });

    watch(serversContainerRef, (el) => {
      if (el && resizeObserver) {
        resizeObserver.observe(el);
      }
    });

    onUnmounted(() => {
      resizeObserver?.disconnect();
      themeObserver?.disconnect();
    });

    // ─── Selected Items ───
    const selectedServer = ref<Server | null>(null);
    const selectedServers = ref([] as Server[]);

    // ─── Server Detail Form ───
    const serverForm = reactive({
      targetId: '',
      name: '',
      url: '',
      authStyle: 'OAuth',
      authConfig: '',
    });

    const authStyleOptions = [
      { label: 'OAuth', value: 'OAuth' },
      { label: 'API Token', value: 'API Token' },
      { label: 'SSE', value: 'SSE' },
    ];

    // ─── Profile Dialog ───
    const showProfileDialog = ref(false);
    const editingProfile = ref<Profile | null>(null);
    const profileForm = reactive({
      profileId: '',
      label: '',
      serverIds: [] as string[],
    });

    const serverOptions = serversData.map((s) => ({
      label: `${s.name} (${s.slug})`,
      value: s.slug,
    }));

    // ─── Delete Dialog ───
    const showDeleteDialog = ref(false);
    const deleteTargetName = ref('');

    // ─── Activity Log State ───
    const activityFilters = ref([...activityLogFilters]);
    const activitySearchQuery = ref('');

    const filteredActivityData = computed(() => {
      let data = [...activityLogData];

      if (activitySearchQuery.value) {
        const q = activitySearchQuery.value.toLowerCase();
        data = data.filter(
          (entry) =>
            entry.user.toLowerCase().includes(q) ||
            entry.action.toLowerCase().includes(q) ||
            entry.detail.toLowerCase().includes(q) ||
            entry.server.toLowerCase().includes(q),
        );
      }

      for (const filter of activityFilters.value) {
        const key = filter.key.toLowerCase();
        if (key === 'action') {
          data = data.filter((e) => e.action === filter.value);
        } else if (key === 'status') {
          data = data.filter((e) => e.status === filter.value);
        } else if (key === 'server') {
          data = data.filter((e) => e.server === filter.value);
        } else if (key === 'user') {
          data = data.filter((e) => e.user.includes(filter.value));
        } else if (key === 'category') {
          data = data.filter((e) => e.actionCategory === filter.value);
        }
      }

      return data;
    });

    function clearActivityFilters() {
      activityFilters.value = [];
    }

    function removeActivityFilter(filter: { id?: string | number; key: string }) {
      activityFilters.value = activityFilters.value.filter(
        (f) => (filter.id ? f.id !== filter.id : f.key !== filter.key),
      );
    }

    function handleActivitySearch(query: string) {
      activitySearchQuery.value = query;
    }

    // ─── Settings State ───
    const selectedProvider = ref('bedrock');
    const apiKey = ref('');
    const apiKeyVisible = ref(false);
    const modelId = ref('anthropic.claude-sonnet-4-5-20250929-v1:0');
    const instructions = ref([
      { id: 1, name: 'Plan Before Execute', enabled: true, content: 'Always build a plan of targets+tools first and then return the plan and ask for confirmation before executing.' },
      { id: 2, name: 'Multi-Step Reasoning', enabled: false, content: 'When a task requires multiple tools or targets, break it down into sequential steps. Execute each step and use the output to inform the next step.' },
      { id: 3, name: 'Error Recovery', enabled: false, content: 'If a tool call fails, analyze the error and try an alternative approach using different tools or targets if available.' },
    ]);
    let nextInstructionId = 4;

    // ─── Computed ───
    const pageTitle = computed(() => {
      if (currentView.value === 'profile-detail' && editingProfile.value) {
        return editingProfile.value.name;
      }
      if (currentView.value === 'settings') {
        return 'Agent0 Settings';
      }
      return 'Agent0';
    });

    const pageTabs = computed(() => {
      if (currentView.value === 'main') return mainTabs;
      if (currentView.value === 'profile-detail') return profileDetailTabs;
      return undefined;
    });

    const currentActiveTab = computed(() => {
      if (currentView.value === 'main') return activeTab.value;
      if (currentView.value === 'profile-detail') return profileDetailTab.value;
      return undefined;
    });

    const selectedProviderData = computed(() =>
      llmProviders.find((p) => p.id === selectedProvider.value),
    );

    const profileColumns = getProfileColumns(serversData);

    // ─── Navigation ───
    function handleTabChange(tab: string) {
      if (currentView.value === 'profile-detail') {
        profileDetailTab.value = tab;
      } else {
        activeTab.value = tab;
      }
    }

    function openSettings() {
      currentView.value = 'settings';
    }

    const showServerDrawer = ref(false);

    function openServerDetail(server: Server) {
      selectedServer.value = server;
      serverForm.targetId = server.slug;
      serverForm.name = server.name;
      serverForm.url = server.url;
      serverForm.authStyle = server.connectionType;
      serverForm.authConfig = server.authConfig;
      showServerDrawer.value = true;
    }

    function backToMain() {
      currentView.value = 'main';
    }

    function backFromServerDetail() {
      showServerDrawer.value = false;
      selectedServers.value = [];
    }

    // ─── Server Row Click ───
    function handleServerRowClick(row: { data: Server }) {
      selectedServers.value = [row.data];
      openServerDetail(row.data);
    }

    // ─── Profile Dialog ───
    function openAddProfile() {
      editingProfile.value = null;
      profileForm.profileId = '';
      profileForm.label = '';
      profileForm.serverIds = [];
      showProfileDialog.value = true;
    }

    function openEditProfile(profile: Profile) {
      editingProfile.value = profile;
      profileForm.profileId = profile.profileId;
      profileForm.label = profile.label;
      profileForm.serverIds = [...profile.serverIds];
      showProfileDialog.value = true;
    }

    function handleProfileRowClick(row: { data: Profile }) {
      openProfileDetail(row.data);
    }

    function openProfileDetail(profile: Profile) {
      editingProfile.value = profile;
      profileForm.profileId = profile.profileId;
      profileForm.label = profile.label;
      profileForm.serverIds = [...profile.serverIds];
      profileDetailTab.value = 'overview';
      currentView.value = 'profile-detail';
    }

    function backFromProfileDetail() {
      activeTab.value = 'profiles';
      currentView.value = 'main';
    }

    const profileBoundServers = computed(() => {
      if (!editingProfile.value) return [];
      return serversData.filter((s) => editingProfile.value!.serverIds.includes(s.slug));
    });

    const profileBoundUserGroups = computed(() => {
      if (!editingProfile.value) return [];
      const groupSlugs = profileUserGroups[editingProfile.value.profileId] || [];
      return userGroupsData.filter((g) => groupSlugs.includes(g.slug));
    });

    const showBoundServersOnly = ref(false);
    const showBoundUserGroupsOnly = ref(false);
    const selectedProfileServerSlugs = ref<Set<string>>(new Set());
    const selectedProfileUserGroupSlugs = ref<Set<string>>(new Set());

    const profileServersTableData = computed(() => {
      const boundSlugs = editingProfile.value?.serverIds || [];
      const source = showBoundServersOnly.value ? profileBoundServers.value : serversData;
      return source
        .map((s) => ({ ...s, bound: boundSlugs.includes(s.slug) }))
        .sort((a, b) => Number(b.bound) - Number(a.bound));
    });

    const selectedProfileServers = computed({
      get: () => profileServersTableData.value.filter((s) => selectedProfileServerSlugs.value.has(s.slug)),
      set: (val) => { selectedProfileServerSlugs.value = new Set(val.map((s) => s.slug)); },
    });

    watch(editingProfile, () => {
      const boundSlugs = editingProfile.value?.serverIds || [];
      selectedProfileServerSlugs.value = new Set(boundSlugs);
    });

    const profileUserGroupsTableData = computed(() => {
      const boundSlugs = editingProfile.value
        ? (profileUserGroups[editingProfile.value.profileId] || [])
        : [];
      const source = showBoundUserGroupsOnly.value ? profileBoundUserGroups.value : userGroupsData;
      return source
        .map((g) => ({ ...g, bound: boundSlugs.includes(g.slug) }))
        .sort((a, b) => Number(b.bound) - Number(a.bound));
    });

    const selectedProfileUserGroups = computed({
      get: () => profileUserGroupsTableData.value.filter((g) => selectedProfileUserGroupSlugs.value.has(g.slug)),
      set: (val) => { selectedProfileUserGroupSlugs.value = new Set(val.map((g) => g.slug)); },
    });

    watch(editingProfile, () => {
      const boundSlugs = editingProfile.value
        ? (profileUserGroups[editingProfile.value.profileId] || [])
        : [];
      selectedProfileUserGroupSlugs.value = new Set(boundSlugs);
    });

    // ─── Delete ───
    function openDeleteDialog(name: string) {
      deleteTargetName.value = name;
      showDeleteDialog.value = true;
    }

    // ─── Settings: Instructions ───
    function addInstruction() {
      instructions.value.push({
        id: nextInstructionId++,
        name: 'New Instruction',
        enabled: false,
        content: '',
      });
    }

    function removeInstruction(id: number) {
      instructions.value = instructions.value.filter((i) => i.id !== id);
    }

    return {
      currentView,
      activeTab,
      selectedServer,
      selectedServers,
      showServerDrawer,
      serversContainerRef,
      useInlinePanel,
      serverForm,
      authStyleOptions,
      showProfileDialog,
      editingProfile,
      profileForm,
      serverOptions,
      showDeleteDialog,
      deleteTargetName,
      selectedProvider,
      apiKey,
      apiKeyVisible,
      modelId,
      instructions,
      pageTitle,
      pageTabs,
      currentActiveTab,
      selectedProviderData,
      menuItems,
      profileMenuItems,
      serversData,
      userGroupsData,
      serverColumns,
      profilesData,
      profileColumns,
      recentActivity,
      topServerUsage,
      monthlyChartData,
      monthlyChartOptions,
      topUsers,
      llmProviders,
      activityLogColumns,
      filteredActivityData,
      activityFilters,
      clearActivityFilters,
      removeActivityFilter,
      handleActivitySearch,
      handleTabChange,
      openSettings,
      openServerDetail,
      backToMain,
      backFromServerDetail,
      handleServerRowClick,
      openAddProfile,
      openEditProfile,
      handleProfileRowClick,
      openProfileDetail,
      backFromProfileDetail,
      profileDetailTab,
      profileBoundServers,
      profileBoundUserGroups,
      profileServerColumns,
      profileUserGroupColumns,
      showBoundServersOnly,
      showBoundUserGroupsOnly,
      selectedProfileServers,
      selectedProfileUserGroups,
      profileServersTableData,
      profileUserGroupsTableData,
      openDeleteDialog,
      addInstruction,
      removeInstruction,
      ArrowTrendingUpIcon: markRaw(ArrowTrendingUpIcon),
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
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <!-- TopBar -->
        <TopBar
          v-if="currentView === 'main'"
        />
        <TopBar
          v-if="currentView === 'settings'"
          showBackButton
          backButtonLabel="Agent0"
          @back="backToMain"
        />
        <TopBar
          v-if="currentView === 'profile-detail'"
          showBackButton
          backButtonLabel="Profiles"
          @back="backFromProfileDetail"
        />

        <!-- PageHeader -->
        <PageHeader
          :title="pageTitle"
          :tabs="pageTabs"
          :activeTab="currentActiveTab"
          @update:activeTab="handleTabChange"
        >
          <template #actions>
            <PvButton
              v-if="currentView === 'main'"
              label="Agent0 Settings"
              severity="secondary"
              @click="openSettings"
            >
              <template #icon="iconProps">
                <Cog6ToothIcon :class="iconProps.class" />
              </template>
            </PvButton>
          </template>
        </PageHeader>

        <!-- ═══════════════ MAIN VIEW ═══════════════ -->
        <template v-if="currentView === 'main'">

          <!-- Dashboard Tab -->
          <div v-if="activeTab === 'dashboard'" class="flex-1 overflow-hidden bg-neutral-surface">
            <DashboardPageLayout class="w-full! h-full!">
              <div class="flex flex-col gap-6">

                <!-- Stat Cards -->
                <div class="grid grid-cols-3 gap-6">
                  <CollapsiblePanel header="Total Users">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-[7px]">
                        <span class="text-heading-0 text-neutral-base">142</span>
                        <span class="text-heading-3 text-neutral-base self-end">Users</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="flex items-center gap-0.5">
                          <ArrowUpIcon class="w-4 h-4 text-success-base" />
                          <span class="text-body-sm-bold text-success-base">12%</span>
                        </div>
                        <span class="text-body-sm text-neutral-subtle">vs last month</span>
                      </div>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Active Servers">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-[7px]">
                        <span class="text-heading-0 text-neutral-base">4 / 6</span>
                        <span class="text-heading-3 text-neutral-base self-end">Servers</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <span class="text-body-sm-bold text-success-base">66%</span>
                        <span class="text-body-sm text-neutral-subtle">active</span>
                      </div>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Profiles">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-[7px]">
                        <span class="text-heading-0 text-neutral-base">3</span>
                        <span class="text-heading-3 text-neutral-base self-end">Profiles</span>
                      </div>
                      <span class="text-body-sm text-neutral-subtle">Configured</span>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Total Requests (24h)">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-[7px]">
                        <span class="text-heading-0 text-neutral-base">12,847</span>
                        <span class="text-heading-3 text-neutral-base self-end">Requests</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="flex items-center gap-0.5">
                          <ArrowUpIcon class="w-4 h-4 text-success-base" />
                          <span class="text-body-sm-bold text-success-base">8.3%</span>
                        </div>
                        <span class="text-body-sm text-neutral-subtle">vs last month</span>
                      </div>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Avg Response Time">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-[7px]">
                        <span class="text-heading-0 text-neutral-base">245ms</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="flex items-center gap-0.5">
                          <ArrowUpIcon class="w-4 h-4 text-success-base" />
                          <span class="text-body-sm-bold text-success-base">-12ms</span>
                        </div>
                        <span class="text-body-sm text-neutral-subtle">vs last month</span>
                      </div>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Error Rate">
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-[7px]">
                        <span class="text-heading-0 text-success-base">0.8%</span>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <div class="flex items-center gap-0.5">
                          <ArrowUpIcon class="w-4 h-4 text-success-base" />
                          <span class="text-body-sm-bold text-success-base">-0.2%</span>
                        </div>
                        <span class="text-body-sm text-neutral-subtle">vs last month</span>
                      </div>
                    </div>
                  </CollapsiblePanel>
                </div>

                <!-- Monthly Usage by Server (Line Chart) -->
                <CollapsiblePanel header="Monthly Usage by Server">
                  <PvChart type="line" :data="monthlyChartData" :options="monthlyChartOptions" />
                </CollapsiblePanel>

                <!-- Top Servers & Top Users — 2-column grid -->
                <div class="grid grid-cols-2 gap-6">
                  <CollapsiblePanel header="Top Servers">
                    <template #actions>
                      <PvButton label="See All" severity="secondary" variant="outlined" size="small" @click="activeTab = 'servers'" />
                    </template>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-3 mb-3">
                        <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">{{ topServerUsage.length }}</span> Active servers</span>
                        <div class="flex items-center gap-1.5">
                          <ArrowUpIcon class="w-4 h-4 text-status-success-base" />
                          <span class="text-body-sm-bold text-status-success-base">12%</span>
                          <span class="text-body-sm text-neutral-subtle">vs last month</span>
                        </div>
                      </div>
                      <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                        <div
                          v-for="server in topServerUsage"
                          :key="server.name"
                          class="flex items-center justify-between py-3"
                        >
                          <span class="text-body-md text-neutral-base">{{ server.name }}</span>
                          <span class="text-body-sm-bold text-neutral-base">{{ server.requests.toLocaleString() }} requests</span>
                        </div>
                      </div>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Top Users">
                    <template #actions>
                      <PvButton label="See All" severity="secondary" variant="outlined" size="small" @click="activeTab = 'profiles'" />
                    </template>
                    <div class="flex flex-col">
                      <div class="flex items-center gap-3 mb-3">
                        <span class="text-body-sm text-neutral-base"><span class="text-body-sm-bold">{{ topUsers.length }}</span> Active users</span>
                        <div class="flex items-center gap-1.5">
                          <ArrowUpIcon class="w-4 h-4 text-status-success-base" />
                          <span class="text-body-sm-bold text-status-success-base">8%</span>
                          <span class="text-body-sm text-neutral-subtle">vs last month</span>
                        </div>
                      </div>
                      <div class="flex flex-col divide-y divide-neutral-default_solid border-t border-neutral-default_solid">
                        <div
                          v-for="user in topUsers"
                          :key="user.name"
                          class="flex items-center justify-between py-3"
                        >
                          <span class="text-body-md text-neutral-base">{{ user.name }}</span>
                          <span class="text-body-sm-bold text-neutral-base">{{ user.toolCalls.toLocaleString() }} tool calls</span>
                        </div>
                      </div>
                    </div>
                  </CollapsiblePanel>
                </div>
              </div>

              <template #sidebar>
                <div class="flex flex-col">
                  <div class="sticky top-0 z-10 bg-neutral-surface border-b border-neutral-default_solid" style="top: -24px; padding-top: 24px; padding-bottom: 16px; margin-top: -24px;">
                    <div class="flex items-center justify-between">
                      <span class="text-heading-3 text-neutral-base">Recent Activity</span>
                      <PvButton label="See All" severity="secondary" variant="outlined" size="small" @click="activeTab = 'activity'" />
                    </div>
                  </div>
                  <div class="flex flex-col pb-6">
                    <div
                      v-for="(activity, i) in recentActivity"
                      :key="i"
                      class="flex flex-col gap-1 py-3"
                      :class="{ 'border-b border-neutral-default_solid': i < recentActivity.length - 1 }"
                    >
                      <span class="text-body-sm text-neutral-subtle"><span class="text-body-sm-semi-bold">{{ activity.user }}</span><template v-if="activity.server !== '—'"> · <span class="text-body-sm-semi-bold">{{ activity.server }}</span></template> · {{ activity.time }}</span>
                      <span class="text-body-md text-neutral-base">{{ activity.event }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </DashboardPageLayout>
          </div>

          <!-- Servers Tab -->
          <div v-if="activeTab === 'servers'" ref="serversContainerRef" class="flex-1 flex min-h-0 overflow-hidden bg-neutral-surface">
            <ListPageLayout class="flex-1 min-w-0 h-full! transition-all duration-300 ease-in-out">
              <CircuitDataTable
                :columns="serverColumns"
                :data="serversData"
                selectionMode="multiple"
                :selection="selectedServers"
                @update:selection="selectedServers = $event"
                @row-click="handleServerRowClick"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :paginator="true"
                :rows="10"
              >
                <template #toolbar>
                  <DataTableToolbar
                    searchPlaceholder="Search servers..."
                    :showAddButton="true"
                    addButtonLabel="Add Server"
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                  />
                </template>
              </CircuitDataTable>
            </ListPageLayout>

            <!-- Server Detail Inline Side Panel (>= 1024px) -->
            <div
              v-if="useInlinePanel"
              class="shrink-0 border-l border-neutral-default_solid bg-neutral-base flex flex-col h-full overflow-hidden transition-[width] duration-300 ease-in-out"
              :class="showServerDrawer && selectedServer ? 'w-[480px]' : 'w-0 border-l-0'"
            >
              <template v-if="selectedServer">
                <div class="flex items-center justify-between p-4 shrink-0 min-w-[480px]">
                  <span class="text-heading-3 text-neutral-base">{{ selectedServer.name }}</span>
                  <PvButton severity="secondary" variant="text" size="small" @click="backFromServerDetail">
                    <template #icon><XMarkIcon class="w-5 h-5" /></template>
                  </PvButton>
                </div>
                <div class="flex-1 overflow-auto p-4 border-t border-b border-neutral-default_solid min-w-[480px]">
                  <div class="flex flex-col gap-4">
                    <FormField label="Target ID" helpText="Unique identifier for this target">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="serverForm.targetId" class="w-full" disabled />
                      </template>
                    </FormField>
                    <FormField label="Name">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="serverForm.name" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="URL">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="serverForm.url" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Auth Style">
                      <template #default="{ inputId }">
                        <PvSelect
                          :id="inputId"
                          v-model="serverForm.authStyle"
                          :options="authStyleOptions"
                          optionLabel="label"
                          optionValue="value"
                          class="w-full"
                        />
                      </template>
                    </FormField>
                    <FormField label="Auth Config (JSON)" helpText="JSON object with authentication configuration">
                      <template #default="{ inputId }">
                        <PvTextarea :id="inputId" v-model="serverForm.authConfig" class="w-full" :rows="6" />
                      </template>
                    </FormField>
                  </div>
                </div>
                <div class="flex items-center justify-end gap-3 p-4 shrink-0 min-w-[480px]">
                  <PvButton label="Cancel" severity="secondary" variant="outlined" @click="backFromServerDetail" />
                  <PvButton label="Save" @click="backFromServerDetail" />
                </div>
              </template>
            </div>
          </div>

          <!-- Server Detail Drawer (< 1024px) -->
          <PvDrawer
            v-if="!useInlinePanel"
            v-model:visible="showServerDrawer"
            :header="selectedServer?.name || 'Server Configuration'"
            position="right"
            size="lg"
            modal
          >
            <template #closebutton="btnProps">
              <PvButton severity="secondary" variant="text" size="small" @click="btnProps.closeCallback">
                <template #icon><XMarkIcon class="w-5 h-5" /></template>
              </PvButton>
            </template>
            <div class="flex flex-col gap-4">
              <FormField label="Target ID" helpText="Unique identifier for this target">
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="serverForm.targetId" class="w-full" disabled />
                </template>
              </FormField>
              <FormField label="Name">
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="serverForm.name" class="w-full" />
                </template>
              </FormField>
              <FormField label="URL">
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="serverForm.url" class="w-full" />
                </template>
              </FormField>
              <FormField label="Auth Style">
                <template #default="{ inputId }">
                  <PvSelect
                    :id="inputId"
                    v-model="serverForm.authStyle"
                    :options="authStyleOptions"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full"
                  />
                </template>
              </FormField>
              <FormField label="Auth Config (JSON)" helpText="JSON object with authentication configuration">
                <template #default="{ inputId }">
                  <PvTextarea :id="inputId" v-model="serverForm.authConfig" class="w-full" :rows="6" />
                </template>
              </FormField>
            </div>
            <template #footer>
              <PvButton label="Cancel" severity="secondary" variant="outlined" @click="backFromServerDetail" />
              <PvButton label="Save" @click="backFromServerDetail" />
            </template>
          </PvDrawer>

          <!-- Profiles Tab -->
          <div v-if="activeTab === 'profiles'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <ListPageLayout class="w-full! h-full!">
              <CircuitDataTable
                :columns="profileColumns"
                :data="profilesData"
                @row-click="handleProfileRowClick"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :paginator="true"
                :rows="10"
              >
                <template #toolbar>
                  <DataTableToolbar
                    searchPlaceholder="Search profiles..."
                    :showAddButton="true"
                    addButtonLabel="Add Profile"
                    @add="openAddProfile"
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                  />
                </template>
              </CircuitDataTable>
            </ListPageLayout>
          </div>

          <!-- Activity Log Tab -->
          <div v-if="activeTab === 'activity'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <ListPageLayout class="w-full! h-full!">
              <CircuitDataTable
                :columns="activityLogColumns"
                :data="filteredActivityData"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :paginator="true"
                :rows="10"
              >
                <template #toolbar>
                  <DataTableToolbar
                    searchPlaceholder="Search activity..."
                    :showAddButton="false"
                    :showFilterButton="true"
                    :showRefreshButton="true"
                    :showDownloadButton="true"
                    :showColumnsButton="false"
                    :activeFilters="activityFilters"
                    :maxVisibleFilters="5"
                    @search="handleActivitySearch"
                    @clear-filters="clearActivityFilters"
                    @remove-filter="removeActivityFilter"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle">{{ filteredActivityData.length }} Events</span>
                    </template>
                  </DataTableToolbar>
                </template>
                <template #empty>
                  <div class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
                    <span class="text-body-md">No activity matches your filters</span>
                    <span class="text-body-sm mt-1">Try adjusting your search or filter criteria</span>
                  </div>
                </template>
              </CircuitDataTable>
            </ListPageLayout>
          </div>
        </template>


        <!-- ═══════════════ SETTINGS VIEW ═══════════════ -->
        <template v-if="currentView === 'settings'">
          <div class="flex-1 overflow-auto bg-neutral-surface">
            <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
              <div class="flex flex-col gap-6">

                <!-- LLM Configuration -->
                <div>
                  <PageSection title="LLM Configuration">
                    <template #subtitle>
                      <span class="text-body-xs text-neutral-muted">
                        Configure the LLM provider used for A2A and ADK agent orchestration. The LLM selects which targets and tools to use when processing A2A and ADK requests.
                      </span>
                    </template>
                    <template #actions><span /></template>
                  </PageSection>
                  <div class="rounded-lg border border-neutral-default_solid p-md">
                    <div class="flex flex-col gap-6">
                      <!-- LLM Provider -->
                      <div class="flex flex-col gap-3">
                        <PvSelectButton
                          v-model="selectedProvider"
                          :options="llmProviders"
                          optionLabel="name"
                          optionValue="id"
                        />
                        <div v-if="selectedProviderData" class="flex flex-col gap-1">
                          <span class="text-body-md-bold text-neutral-base">{{ selectedProviderData.name }}</span>
                          <span class="text-body-xs text-neutral-subtle">{{ selectedProviderData.subtitle }}</span>
                        </div>
                      </div>

                      <!-- API Key -->
                      <FormField label="API Key" helpText="For Bedrock, use your AWS access key. Ensure IAM permissions for bedrock:InvokeModel.">
                        <template #default="{ inputId }">
                          <div class="relative">
                            <PvInputText
                              :id="inputId"
                              v-model="apiKey"
                              :type="apiKeyVisible ? 'text' : 'password'"
                              class="w-full"
                              placeholder="API key is set (leave blank to keep current)"
                            />
                            <button
                              class="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-subtle hover:text-neutral-base"
                              @click="apiKeyVisible = !apiKeyVisible"
                            >
                              <component :is="apiKeyVisible ? EyeSlashIcon : EyeIcon" class="size-5" />
                            </button>
                          </div>
                        </template>
                      </FormField>

                      <!-- Model ID -->
                      <FormField
                        label="Model ID (optional)"
                        :helpText="'Override the default model. Leave blank to use: ' + (selectedProviderData?.model || '')"
                      >
                        <template #default="{ inputId }">
                          <PvInputText :id="inputId" v-model="modelId" class="w-full" />
                        </template>
                      </FormField>

                      <!-- Action Buttons -->
                      <div class="flex gap-sm">
                        <PvButton label="Save LLM Settings" />
                        <PvButton label="Test Connection" severity="secondary" variant="outlined" />
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Instructions -->
                <div>
                  <PageSection title="Instructions">
                    <template #subtitle>
                      <span class="text-body-xs text-neutral-muted">
                        Configure prompts that guide the LLM's behavior during A2A task planning and execution.
                      </span>
                    </template>
                    <template #actions>
                      <PvButton label="+ Add Instruction" severity="secondary" variant="outlined" @click="addInstruction" />
                    </template>
                  </PageSection>
                  <div class="flex flex-col gap-4">
                    <div
                      v-for="(instruction, index) in instructions"
                      :key="instruction.id"
                      class="rounded-lg border border-neutral-default_solid p-md"
                    >
                      <div class="flex items-center gap-3 mb-3">
                        <span class="text-body-md-semi-bold text-neutral-base flex-1">Instruction {{ index + 1 }}</span>
                        <PvButton
                          severity="secondary"
                          variant="outlined"
                          rounded
                          size="small"
                          @click="removeInstruction(instruction.id)"
                          aria-label="Delete instruction"
                        >
                          <template #icon>
                            <TrashIcon class="size-4" />
                          </template>
                        </PvButton>
                      </div>
                      <PvTextarea v-model="instruction.content" class="w-full" :rows="3" />
                    </div>
                  </div>
                </div>
              </div>
            </ConfigPageLayout>
          </div>
        </template>

        <!-- ═══════════════ PROFILE DETAIL VIEW ═══════════════ -->
        <template v-if="currentView === 'profile-detail' && editingProfile">

          <!-- ============ TAB: OVERVIEW ============ -->
          <div v-if="profileDetailTab === 'overview'" class="flex-1 overflow-auto p-6">
            <div class="max-w-2xl flex flex-col gap-6">
              <CollapsiblePanel header="Profile Information">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
                    <span class="text-body-md text-neutral-subtle">Profile ID</span>
                    <span class="text-body-md-semi-bold text-neutral-base">{{ editingProfile.profileId }}</span>
                  </div>
                  <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
                    <span class="text-body-md text-neutral-subtle">Label</span>
                    <span class="text-body-md-semi-bold text-neutral-base">{{ editingProfile.label }}</span>
                  </div>
                  <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
                    <span class="text-body-md text-neutral-subtle">Bound Servers</span>
                    <span class="text-body-md-semi-bold text-neutral-base">{{ profileBoundServers.length }}</span>
                  </div>
                  <div class="flex items-center justify-between py-2 border-b border-neutral-default_solid">
                    <span class="text-body-md text-neutral-subtle">Bound User Groups</span>
                    <span class="text-body-md-semi-bold text-neutral-base">{{ profileBoundUserGroups.length }}</span>
                  </div>
                  <div class="flex items-center justify-between py-2">
                    <span class="text-body-md text-neutral-subtle">Created At</span>
                    <span class="text-body-md-semi-bold text-neutral-base">{{ editingProfile.createdAt }}</span>
                  </div>
                </div>
              </CollapsiblePanel>
            </div>
          </div>

          <!-- ============ TAB: SERVERS (bound to profile) ============ -->
          <div v-if="profileDetailTab === 'profile-servers'" class="flex-1 flex flex-col overflow-hidden p-6 pb-0">
            <CircuitDataTable
              :columns="profileServerColumns"
              :data="profileServersTableData"
              dataKey="slug"
              selectionMode="multiple"
              :selection="selectedProfileServers"
              @update:selection="selectedProfileServers = $event"
              :paginator="true"
              :rows="10"
              scrollable
              scrollHeight="flex"
            >
              <template #toolbar>
                <DataTableToolbar
                  searchPlaceholder="Search servers..."
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                >
                  <template #saved-views>
                    <div class="flex items-center gap-4 px-2 py-1.5 text-body-md">
                      <CheckboxWithLabel v-model="showBoundServersOnly" :binary="true">
                        <template #label>show bound servers ({{ profileBoundServers.length }})</template>
                      </CheckboxWithLabel>
                      <div class="border-l border-neutral-default_solid h-5 shrink-0" />
                      <p class="text-body-md text-neutral-base whitespace-nowrap">
                        <span class="text-body-md-semi-bold">{{ profileBoundServers.length }} of {{ serversData.length }}</span> servers bound
                      </p>
                    </div>
                  </template>
                </DataTableToolbar>
              </template>
            </CircuitDataTable>
          </div>

          <!-- ============ TAB: USER GROUPS (bound to profile) ============ -->
          <div v-if="profileDetailTab === 'profile-user-groups'" class="flex-1 flex flex-col overflow-hidden p-6 pb-0">
            <CircuitDataTable
              :columns="profileUserGroupColumns"
              :data="profileUserGroupsTableData"
              dataKey="slug"
              selectionMode="multiple"
              :selection="selectedProfileUserGroups"
              @update:selection="selectedProfileUserGroups = $event"
              :paginator="true"
              :rows="10"
              scrollable
              scrollHeight="flex"
            >
              <template #toolbar>
                <DataTableToolbar
                  searchPlaceholder="Search user groups..."
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                >
                  <template #saved-views>
                    <div class="flex items-center gap-4 px-2 py-1.5 text-body-md">
                      <CheckboxWithLabel v-model="showBoundUserGroupsOnly" :binary="true">
                        <template #label>show bound user groups ({{ profileBoundUserGroups.length }})</template>
                      </CheckboxWithLabel>
                      <div class="border-l border-neutral-default_solid h-5 shrink-0" />
                      <p class="text-body-md text-neutral-base whitespace-nowrap">
                        <span class="text-body-md-semi-bold">{{ profileBoundUserGroups.length }} of {{ userGroupsData.length }}</span> user groups bound
                      </p>
                    </div>
                  </template>
                </DataTableToolbar>
              </template>
            </CircuitDataTable>
          </div>

        </template>

        <!-- ═══════════════ DIALOGS ═══════════════ -->

        <!-- Profile Add/Edit Dialog -->
        <PvDialog
          v-model:visible="showProfileDialog"
          :draggable="false"
          modal
          :header="editingProfile ? 'Edit Profile' : 'Add Profile'"
          :style="{ width: '560px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-4">
            <FormField label="Profile ID" helpText="Unique identifier for this profile">
              <template #default="{ inputId }">
                <PvInputText
                  :id="inputId"
                  v-model="profileForm.profileId"
                  class="w-full"
                  :disabled="!!editingProfile"
                  placeholder="e.g. engineering"
                />
              </template>
            </FormField>
            <FormField label="Label" helpText="URL-friendly name (used in /mcp/{orgID}/{label} routes)">
              <template #default="{ inputId }">
                <PvInputText
                  :id="inputId"
                  v-model="profileForm.label"
                  class="w-full"
                  placeholder="e.g. engineering"
                />
              </template>
            </FormField>
            <FormField label="Target IDs">
              <template #default="{ inputId }">
                <PvMultiSelect
                  :id="inputId"
                  v-model="profileForm.serverIds"
                  :options="serverOptions"
                  optionLabel="label"
                  optionValue="value"
                  display="chip"
                  class="w-full"
                  placeholder="Select servers..."
                />
              </template>
            </FormField>

            <PvDivider />
            <div>
              <span class="text-body-sm-semi-bold text-neutral-subtle block mb-2">Available Targets:</span>
              <div class="flex flex-wrap gap-2">
                <PvTag
                  v-for="server in serversData"
                  :key="server.slug"
                  :value="server.name + ' (' + server.slug + ')'"
                  severity="neutral"
                />
              </div>
            </div>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showProfileDialog = false" />
              <PvButton :label="editingProfile ? 'Update' : 'Create'" @click="showProfileDialog = false" />
            </div>
          </template>
        </PvDialog>

        <!-- Delete Confirmation Dialog -->
        <SeverityDialog
          v-model:visible="showDeleteDialog"
          dialogTitle="Delete Server"
          variant="sev2"
          messageTitle="This action cannot be undone"
          messageContent="Deleting this server will remove it from all profiles that reference it."
          :showMessageIcon="true"
          :dialogContent="'Are you sure you want to delete **' + deleteTargetName + '**? All associated connections and profile references will be removed.'"
          actionText="Delete"
          cancelText="Cancel"
          @action="showDeleteDialog = false"
          @cancel="showDeleteDialog = false"
        />
      </div>
    </div>
  `,
});

const meta: Meta<typeof Agent0Page> = {
  title: 'Projects/Burak - Agent0/Pages/Agent0',
  component: Agent0Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0Page>;

export const Default: Story = {};
