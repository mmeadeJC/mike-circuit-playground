import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, reactive } from 'vue';
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
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import MultiSelect from 'primevue/multiselect';
import Dialog from 'primevue/dialog';
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
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
  EyeIcon,
  EyeSlashIcon,
  ArrowTrendingUpIcon,
  ServerStackIcon,
  UserCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  BoltIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';
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

// ─── Tabs ───

const mainTabs = [
  { label: 'Dashboard', value: 'dashboard' },
  { label: 'Servers', value: 'servers' },
  { label: 'Profiles', value: 'profiles' },
  { label: 'Activity Log', value: 'activity' },
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
      width: '200px',
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
      width: '200px',
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

const dashboardStats = [
  { label: 'Total Users', value: '142', trend: '+12%', trendUp: true, icon: markRaw(UserCircleIcon) },
  { label: 'Active Servers', value: '4 / 6', trend: '66%', trendUp: true, icon: markRaw(ServerStackIcon) },
  { label: 'Profiles', value: '3', trend: '', trendUp: true, icon: markRaw(UsersIcon) },
  { label: 'Total Requests (24h)', value: '12,847', trend: '+8.3%', trendUp: true, icon: markRaw(BoltIcon) },
  { label: 'Avg Response Time', value: '245ms', trend: '-12ms', trendUp: true, icon: markRaw(ClockIcon) },
  { label: 'Error Rate', value: '0.8%', trend: '-0.2%', trendUp: true, icon: markRaw(ExclamationTriangleIcon) },
];

const recentActivity = [
  { time: '2 min ago', event: 'User john.doe@company.com connected to Figma MCP server' },
  { time: '5 min ago', event: 'Profile "engineering" updated — added Github server' },
  { time: '12 min ago', event: 'Atlassian server health check passed' },
  { time: '28 min ago', event: 'New user sarah.chen@company.com added to Design profile' },
  { time: '1 hour ago', event: 'Salesforce server connection failed — retrying' },
  { time: '2 hours ago', event: 'LLM configuration updated — switched to Bedrock Claude' },
  { time: '3 hours ago', event: 'Slack server added by admin' },
];

const topServerUsage = [
  { name: 'Atlassian', requests: 4521, percentage: 35 },
  { name: 'Github', requests: 3892, percentage: 30 },
  { name: 'Figma', requests: 2614, percentage: 20 },
  { name: 'JumpCloud Labs Admin', requests: 1820, percentage: 15 },
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
  cost: string;
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
    cost: '$0.0037',
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
    cost: '$0.00',
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
    cost: '$0.0103',
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
    cost: '$0.00',
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
    cost: '$0.0263',
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
    cost: '$0.0063',
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
    cost: '$40.00',
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
    cost: '$0.00',
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
    cost: '$0.0126',
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
    cost: '$0.00',
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
    cost: '$0.0057',
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
    cost: '$0.00',
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
    cost: '$0.0017',
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
    cost: '$0.0044',
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
    cost: '$0.00',
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
    cost: '$0.0086',
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
    cost: '$127.45',
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
    cost: '$0.00',
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
    cost: '$0.0190',
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
    cost: '$0.0029',
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
    field: 'cost',
    header: 'Cost',
    sortable: true,
    width: '100px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.cost,
    }),
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
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvMultiSelect: MultiSelect,
    PvDialog: Dialog,
    PvDivider: Divider,
    TopBar,
    ListPageLayout,
    ConfigPageLayout,
    DashboardPageLayout,
    XMarkIcon,
    EyeIcon,
    EyeSlashIcon,
    ArrowTrendingUpIcon,
    CheckCircleIcon,
    TrashIcon: TrashIcon,
  },
  setup() {
    // ─── View State ───
    const currentView = ref<'main' | 'server-detail' | 'settings'>('main');
    const activeTab = ref('dashboard');

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
      if (currentView.value === 'server-detail' && selectedServer.value) {
        return selectedServer.value.name;
      }
      if (currentView.value === 'settings') {
        return 'Agent0 Settings';
      }
      return 'Agent0';
    });

    const pageTabs = computed(() => {
      if (currentView.value === 'main') return mainTabs;
      return undefined;
    });

    const currentActiveTab = computed(() => {
      if (currentView.value === 'main') return activeTab.value;
      return undefined;
    });

    const selectedProviderData = computed(() =>
      llmProviders.find((p) => p.id === selectedProvider.value),
    );

    const profileColumns = getProfileColumns(serversData);

    // ─── Navigation ───
    function handleTabChange(tab: string) {
      activeTab.value = tab;
    }

    function openSettings() {
      currentView.value = 'settings';
    }

    function openServerDetail(server: Server) {
      selectedServer.value = server;
      serverForm.targetId = server.slug;
      serverForm.name = server.name;
      serverForm.url = server.url;
      serverForm.authStyle = server.connectionType;
      serverForm.authConfig = server.authConfig;
      currentView.value = 'server-detail';
    }

    function backToMain() {
      currentView.value = 'main';
    }

    function backFromServerDetail() {
      activeTab.value = 'servers';
      currentView.value = 'main';
    }

    // ─── Server Row Click ───
    function handleServerRowClick(row: { data: Server }) {
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
      openEditProfile(row.data);
    }

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
      serverColumns,
      profilesData,
      profileColumns,
      dashboardStats,
      recentActivity,
      topServerUsage,
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
          v-if="currentView === 'server-detail'"
          showBackButton
          backButtonLabel="Servers"
          @back="backFromServerDetail"
        />
        <TopBar
          v-if="currentView === 'settings'"
          showBackButton
          backButtonLabel="Agent0"
          @back="backToMain"
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
            />
          </template>
        </PageHeader>

        <!-- ═══════════════ MAIN VIEW ═══════════════ -->
        <template v-if="currentView === 'main'">

          <!-- Dashboard Tab -->
          <div v-if="activeTab === 'dashboard'" class="flex-1 overflow-auto bg-neutral-surface">
            <DashboardPageLayout class="w-full! h-full!">
              <div class="flex flex-col gap-6">

                <!-- Stat Cards -->
                <div class="grid grid-cols-3 gap-4">
                  <div
                    v-for="stat in dashboardStats"
                    :key="stat.label"
                    class="rounded-lg border border-neutral-default_solid bg-neutral-surface_raised p-md"
                  >
                    <div class="flex items-center justify-between mb-3">
                      <span class="text-body-sm text-neutral-subtle">{{ stat.label }}</span>
                      <component :is="stat.icon" class="size-5 text-neutral-subtle" />
                    </div>
                    <div class="flex items-end gap-2">
                      <span class="text-heading-1 text-neutral-base">{{ stat.value }}</span>
                      <span
                        v-if="stat.trend"
                        class="text-body-sm text-status-success-base mb-0.5"
                      >{{ stat.trend }}</span>
                    </div>
                  </div>
                </div>

                <!-- Recent Activity -->
                <CollapsiblePanel header="Recent Activity">
                  <div class="flex flex-col gap-3">
                    <div
                      v-for="(activity, i) in recentActivity"
                      :key="i"
                      class="flex items-start gap-3 py-2"
                      :class="{ 'border-b border-neutral-default_solid': i < recentActivity.length - 1 }"
                    >
                      <span class="text-body-sm text-neutral-subtle whitespace-nowrap min-w-[90px]">{{ activity.time }}</span>
                      <span class="text-body-md text-neutral-base">{{ activity.event }}</span>
                    </div>
                  </div>
                </CollapsiblePanel>

                <!-- Top Servers by Usage -->
                <CollapsiblePanel header="Top Servers by Usage">
                  <div class="flex flex-col gap-4">
                    <div
                      v-for="server in topServerUsage"
                      :key="server.name"
                      class="flex flex-col gap-1.5"
                    >
                      <div class="flex items-center justify-between">
                        <span class="text-body-md text-neutral-base">{{ server.name }}</span>
                        <span class="text-body-sm text-neutral-subtle">{{ server.requests.toLocaleString() }} requests</span>
                      </div>
                      <div class="h-2 rounded-full bg-neutral-surface_deep overflow-hidden">
                        <div
                          class="h-full rounded-full bg-button-primary-base"
                          :style="{ width: server.percentage + '%' }"
                        ></div>
                      </div>
                    </div>
                  </div>
                </CollapsiblePanel>
              </div>
            </DashboardPageLayout>
          </div>

          <!-- Servers Tab -->
          <div v-if="activeTab === 'servers'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <ListPageLayout class="w-full! h-full!">
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
          </div>

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

        <!-- ═══════════════ SERVER DETAIL VIEW ═══════════════ -->
        <template v-if="currentView === 'server-detail' && selectedServer">
          <div class="flex-1 overflow-auto bg-neutral-surface">
            <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
              <div class="flex flex-col gap-6">
                <CollapsiblePanel header="Server Configuration">
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
                </CollapsiblePanel>

                <PvDivider />
                <div class="flex justify-end gap-sm">
                  <PvButton label="Cancel" severity="secondary" variant="outlined" @click="backFromServerDetail" />
                  <PvButton label="Save" @click="backFromServerDetail" />
                </div>
              </div>
            </ConfigPageLayout>
          </div>
        </template>

        <!-- ═══════════════ SETTINGS VIEW ═══════════════ -->
        <template v-if="currentView === 'settings'">
          <div class="flex-1 overflow-auto bg-neutral-surface">
            <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
              <div class="flex flex-col gap-6">

                <!-- LLM Configuration -->
                <CollapsiblePanel header="LLM Configuration">
                  <div class="flex flex-col gap-6">
                    <p class="text-body-md text-neutral-subtle">
                      Configure the LLM provider used for A2A and ADK agent orchestration. The LLM selects which targets and tools to use when processing A2A and ADK requests.
                    </p>

                    <!-- Provider Cards -->
                    <div>
                      <span class="text-body-md-semi-bold text-neutral-base mb-3 block">LLM Provider</span>
                      <div class="grid grid-cols-3 gap-3">
                        <div
                          v-for="provider in llmProviders"
                          :key="provider.id"
                          class="relative rounded-lg border-2 p-md cursor-pointer transition-all"
                          :class="selectedProvider === provider.id
                            ? 'border-button-primary-base bg-neutral-surface_raised'
                            : 'border-neutral-default_solid bg-neutral-surface_raised hover:border-neutral-strong_solid'"
                          @click="selectedProvider = provider.id"
                        >
                          <div v-if="selectedProvider === provider.id" class="absolute top-2 right-2">
                            <CheckCircleIcon class="size-5 text-button-primary-base" />
                          </div>
                          <div class="flex flex-col gap-1">
                            <span class="text-body-md-semi-bold text-neutral-base">{{ provider.name }}</span>
                            <span class="text-body-sm text-neutral-subtle">{{ provider.subtitle }}</span>
                            <span class="text-body-xs text-neutral-muted font-mono mt-1">{{ provider.model }}</span>
                          </div>
                        </div>
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
                </CollapsiblePanel>

                <!-- Instructions -->
                <CollapsiblePanel header="Instructions">
                  <template #actions>
                    <PvButton label="+ Add Instruction" size="small" severity="secondary" variant="outlined" @click="addInstruction" />
                  </template>
                  <div class="flex flex-col gap-2">
                    <p class="text-body-md text-neutral-subtle mb-2">
                      Configure prompts that guide the LLM's behavior during A2A task planning and execution.
                    </p>
                    <div
                      v-for="instruction in instructions"
                      :key="instruction.id"
                      class="rounded-lg border border-neutral-default_solid p-md"
                    >
                      <div class="flex items-center gap-3 mb-3">
                        <ToggleSwitch v-model="instruction.enabled" />
                        <span class="text-body-md-semi-bold text-neutral-base flex-1">{{ instruction.name }}</span>
                        <PvButton
                          severity="secondary"
                          variant="text"
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
                </CollapsiblePanel>
              </div>
            </ConfigPageLayout>
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
  title: 'Projects/Agent 0/Pages/Agent0',
  component: Agent0Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Agent0Page>;

export const Default: Story = {};
