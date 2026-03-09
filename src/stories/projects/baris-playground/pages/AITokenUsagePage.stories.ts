import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable as CircuitDataTable,
  DataTableToolbar,

} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import SelectButton from 'primevue/selectbutton';

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
  KeyIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/vue/24/outline';

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

// @ts-expect-error Vue SFC import
import TopBar from '../../../../components/TopBar.vue';

const ClaudePageIcon = defineComponent({
  name: 'ClaudePageIcon',
  inheritAttrs: false,
  setup() {
    const claudeSvg = () => h('svg', {
      class: 'size-7 shrink-0',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    }, [
      h('rect', { width: '24', height: '24', rx: '6', fill: '#D4A27F' }),
      h('path', {
        d: 'M14.603 8.148a.35.35 0 0 0-.66 0L12.66 11.89a.35.35 0 0 1-.2.2L8.717 13.37a.35.35 0 0 0 0 .66l3.742 1.283a.35.35 0 0 1 .2.2l1.283 3.742a.35.35 0 0 0 .66 0l1.283-3.742a.35.35 0 0 1 .2-.2l3.742-1.283a.35.35 0 0 0 0-.66l-3.742-1.283a.35.35 0 0 1-.2-.2l-1.283-3.742Z',
        fill: '#1A1A1A',
      }),
      h('path', {
        d: 'M8.478 5.578a.21.21 0 0 0-.396 0L7.4 7.505a.21.21 0 0 1-.12.12L5.353 8.306a.21.21 0 0 0 0 .396l1.927.681a.21.21 0 0 1 .12.12l.681 1.927a.21.21 0 0 0 .396 0l.681-1.927a.21.21 0 0 1 .12-.12l1.927-.681a.21.21 0 0 0 0-.396l-1.927-.681a.21.21 0 0 1-.12-.12l-.681-1.927Z',
        fill: '#1A1A1A',
      }),
    ]);

    return () => h('div', { class: 'flex items-center gap-sm' }, [
      claudeSvg(),
      h('span', { class: 'text-heading-2 text-neutral-base' }, 'Claude'),
      h(Tag, { severity: 'success', class: '!normal-case' }, { default: () => 'Approved' }),
    ]);
  },
});

// ─── Navigation Data ───

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alerts', leftIcon: markRaw(BellIcon), count: 23 },
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
    ],
  },
  { label: 'Workflows', leftIcon: markRaw(WorkflowIcon) },
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
    items: [{ label: 'Reports' }, { label: 'Directory Insights' }],
  },
  { label: 'Settings', leftIcon: markRaw(Cog6ToothIcon) },
];

const profileMenuItems = [
  {
    label: 'Admin IT',
    itemType: 'profile_compact',
    initials: 'AT',
    name: 'Admin IT',
    items: [
      { label: 'Admin IT', itemType: 'profile_large', name: 'Admin IT', email: 'admin_it@company.com', initials: 'AT' },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
    ],
  },
];

// ─── Interfaces ───

interface ModelBreakdown {
  model: string;
  tokensUsed: number;
  estimatedCost: string;
  status: string;
}

interface TokenUsageRow {
  id: number;
  consumerType: 'api_key' | 'org';
  name: string;
  identifier: string;
  models: string[];
  tokensUsed: number;
  estimatedCost: string;
  status: string;
  createdAt: string;
  breakdown: ModelBreakdown[];
  _isBreakdown?: boolean;
  _parentId?: number;
  _model?: string;
}

// ─── Mock Data ───

const tokenUsageData: TokenUsageRow[] = [
  {
    id: 1, consumerType: 'api_key', name: 'Production Backend', identifier: 'sk-ant-api03-...xR9f',
    models: ['Claude 4 Opus', 'Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 2_847_300, estimatedCost: '$142.37', status: 'Active', createdAt: 'Oct 12, 2025',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 1_240_000, estimatedCost: '$93.00', status: 'Active' },
      { model: 'Claude 3.5 Sonnet', tokensUsed: 985_200, estimatedCost: '$29.56', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 622_100, estimatedCost: '$19.81', status: 'Active' },
    ],
  },
  {
    id: 2, consumerType: 'org', name: 'Engineering — Platform Team', identifier: 'org-plat-...4kM2',
    models: ['Claude 4 Opus', 'Claude 3.5 Sonnet'],
    tokensUsed: 1_923_500, estimatedCost: '$96.18', status: 'Active', createdAt: 'Nov 03, 2025',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 1_120_000, estimatedCost: '$84.00', status: 'Active' },
      { model: 'Claude 3.5 Sonnet', tokensUsed: 803_500, estimatedCost: '$12.18', status: 'Active' },
    ],
  },
  {
    id: 3, consumerType: 'api_key', name: 'CI/CD Pipeline', identifier: 'sk-ant-api03-...m4Pq',
    models: ['Claude 3.5 Haiku'],
    tokensUsed: 4_512_800, estimatedCost: '$45.13', status: 'Active', createdAt: 'Sep 28, 2025',
    breakdown: [
      { model: 'Claude 3.5 Haiku', tokensUsed: 4_512_800, estimatedCost: '$45.13', status: 'Active' },
    ],
  },
  {
    id: 4, consumerType: 'org', name: 'Research & ML Ops', identifier: 'org-mlops-...8nW1',
    models: ['Claude 4 Opus', 'Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 6_241_000, estimatedCost: '$287.42', status: 'Active', createdAt: 'Aug 15, 2025',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 3_800_000, estimatedCost: '$228.00', status: 'Active' },
      { model: 'Claude 3.5 Sonnet', tokensUsed: 1_641_000, estimatedCost: '$41.03', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 800_000, estimatedCost: '$18.39', status: 'Active' },
    ],
  },
  {
    id: 5, consumerType: 'api_key', name: 'Customer Support Bot', identifier: 'sk-ant-api03-...tK7n',
    models: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 8_934_200, estimatedCost: '$178.68', status: 'Active', createdAt: 'Jul 20, 2025',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 3_420_000, estimatedCost: '$102.60', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 5_514_200, estimatedCost: '$76.08', status: 'Active' },
    ],
  },
  {
    id: 6, consumerType: 'api_key', name: 'Staging Environment', identifier: 'sk-ant-api03-...r2W5',
    models: ['Claude 3.5 Sonnet'],
    tokensUsed: 412_600, estimatedCost: '$12.38', status: 'Active', createdAt: 'Dec 01, 2025',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 412_600, estimatedCost: '$12.38', status: 'Active' },
    ],
  },
  {
    id: 7, consumerType: 'org', name: 'Data Analytics Team', identifier: 'org-data-...3jF9',
    models: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 3_187_400, estimatedCost: '$79.69', status: 'Active', createdAt: 'Oct 22, 2025',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 1_287_400, estimatedCost: '$38.62', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 1_900_000, estimatedCost: '$41.07', status: 'Active' },
    ],
  },
  {
    id: 8, consumerType: 'api_key', name: 'Content Generation Service', identifier: 'sk-ant-api03-...bN4x',
    models: ['Claude 4 Opus', 'Claude 3.5 Sonnet'],
    tokensUsed: 1_678_900, estimatedCost: '$88.42', status: 'Active', createdAt: 'Nov 18, 2025',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 890_000, estimatedCost: '$66.75', status: 'Active' },
      { model: 'Claude 3.5 Sonnet', tokensUsed: 788_900, estimatedCost: '$21.67', status: 'Active' },
    ],
  },
  {
    id: 9, consumerType: 'api_key', name: 'Legacy Integration Key', identifier: 'sk-ant-api03-...qZ2m',
    models: ['Claude 3.5 Haiku'],
    tokensUsed: 234_100, estimatedCost: '$2.34', status: 'Inactive', createdAt: 'Jun 05, 2025',
    breakdown: [
      { model: 'Claude 3.5 Haiku', tokensUsed: 234_100, estimatedCost: '$2.34', status: 'Inactive' },
    ],
  },
  {
    id: 10, consumerType: 'org', name: 'Product Engineering', identifier: 'org-prod-...1wQ8',
    models: ['Claude 4 Opus', 'Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 5_102_700, estimatedCost: '$214.83', status: 'Active', createdAt: 'Sep 10, 2025',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 2_100_000, estimatedCost: '$157.50', status: 'Active' },
      { model: 'Claude 3.5 Sonnet', tokensUsed: 1_802_700, estimatedCost: '$36.05', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 1_200_000, estimatedCost: '$21.28', status: 'Active' },
    ],
  },
  {
    id: 11, consumerType: 'api_key', name: 'QA Automation', identifier: 'sk-ant-api03-...hG6v',
    models: ['Claude 3.5 Haiku'],
    tokensUsed: 1_890_500, estimatedCost: '$18.91', status: 'Active', createdAt: 'Jan 14, 2026',
    breakdown: [
      { model: 'Claude 3.5 Haiku', tokensUsed: 1_890_500, estimatedCost: '$18.91', status: 'Active' },
    ],
  },
  {
    id: 12, consumerType: 'org', name: 'Security & Compliance', identifier: 'org-sec-...5tR3',
    models: ['Claude 4 Opus'],
    tokensUsed: 780_200, estimatedCost: '$58.52', status: 'Active', createdAt: 'Dec 20, 2025',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 780_200, estimatedCost: '$58.52', status: 'Active' },
    ],
  },
  {
    id: 13, consumerType: 'api_key', name: 'Internal Documentation Bot', identifier: 'sk-ant-api03-...yP1c',
    models: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 2_341_800, estimatedCost: '$52.14', status: 'Active', createdAt: 'Feb 02, 2026',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 941_800, estimatedCost: '$28.25', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 1_400_000, estimatedCost: '$23.89', status: 'Active' },
    ],
  },
  {
    id: 14, consumerType: 'api_key', name: 'Dev Sandbox Key', identifier: 'sk-ant-api03-...eJ8w',
    models: ['Claude 3.5 Sonnet'],
    tokensUsed: 89_400, estimatedCost: '$2.68', status: 'Active', createdAt: 'Feb 18, 2026',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 89_400, estimatedCost: '$2.68', status: 'Active' },
    ],
  },
  {
    id: 15, consumerType: 'org', name: 'Customer Success', identifier: 'org-cs-...9mK4',
    models: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 1_456_300, estimatedCost: '$36.41', status: 'Active', createdAt: 'Nov 28, 2025',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 556_300, estimatedCost: '$16.69', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 900_000, estimatedCost: '$19.72', status: 'Active' },
    ],
  },
  {
    id: 16, consumerType: 'api_key', name: 'Deprecated v1 Key', identifier: 'sk-ant-api03-...aB3f',
    models: ['Claude 3.5 Haiku'],
    tokensUsed: 0, estimatedCost: '$0.00', status: 'Revoked', createdAt: 'Apr 10, 2025',
    breakdown: [],
  },
  {
    id: 17, consumerType: 'api_key', name: 'Partner Integration', identifier: 'sk-ant-api03-...wN5k',
    models: ['Claude 3.5 Sonnet'],
    tokensUsed: 3_420_100, estimatedCost: '$102.60', status: 'Active', createdAt: 'Oct 01, 2025',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 3_420_100, estimatedCost: '$102.60', status: 'Active' },
    ],
  },
  {
    id: 18, consumerType: 'org', name: 'Infrastructure & DevOps', identifier: 'org-infra-...2pL7',
    models: ['Claude 3.5 Haiku'],
    tokensUsed: 2_210_600, estimatedCost: '$22.11', status: 'Active', createdAt: 'Jan 05, 2026',
    breakdown: [
      { model: 'Claude 3.5 Haiku', tokensUsed: 2_210_600, estimatedCost: '$22.11', status: 'Active' },
    ],
  },
  {
    id: 19, consumerType: 'api_key', name: 'Mobile App Backend', identifier: 'sk-ant-api03-...jT4s',
    models: ['Claude 3.5 Sonnet', 'Claude 3.5 Haiku'],
    tokensUsed: 4_102_000, estimatedCost: '$89.23', status: 'Active', createdAt: 'Aug 30, 2025',
    breakdown: [
      { model: 'Claude 3.5 Sonnet', tokensUsed: 1_602_000, estimatedCost: '$48.06', status: 'Active' },
      { model: 'Claude 3.5 Haiku', tokensUsed: 2_500_000, estimatedCost: '$41.17', status: 'Active' },
    ],
  },
  {
    id: 20, consumerType: 'api_key', name: 'Analytics Summarizer', identifier: 'sk-ant-api03-...cH9r',
    models: ['Claude 4 Opus'],
    tokensUsed: 520_400, estimatedCost: '$39.03', status: 'Active', createdAt: 'Feb 10, 2026',
    breakdown: [
      { model: 'Claude 4 Opus', tokensUsed: 520_400, estimatedCost: '$39.03', status: 'Active' },
    ],
  },
];

// ─── Model Color Map ───

const modelColors: Record<string, string> = {
  'Claude 4 Opus': '#D97706',
  'Claude 3.5 Sonnet': '#8B5CF6',
  'Claude 3.5 Haiku': '#06B6D4',
};

// ─── Custom Cell Components ───

const ConsumerCell = markRaw(defineComponent({
  name: 'ConsumerCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const row = props.data as TokenUsageRow;

      if (row._isBreakdown) {
        return h('div', { class: 'flex items-center gap-3 p-2 min-h-10 pl-14' }, [
          h('div', {
            class: 'size-3 rounded-full shrink-0',
            style: `background-color: ${modelColors[row._model || ''] || '#6B7280'};`,
          }),
          h('span', { class: 'text-body-md text-neutral-subtle' }, row._model),
        ]);
      }

      const isApiKey = row.consumerType === 'api_key';
      return h('div', { class: 'flex items-center gap-3 p-2 min-h-12' }, [
        h('div', {
          class: 'shrink-0 size-8 rounded-full bg-neutral-surface flex items-center justify-center',
        }, [h(KeyIcon, { class: 'size-4 text-neutral-subtle' })]),
        h('div', { class: 'flex flex-col gap-0 min-w-0' }, [
          h('div', { class: 'flex items-center gap-2' }, [
            h('span', { class: 'text-body-md text-neutral-base truncate' }, row.name),
            h(Tag, {
              severity: isApiKey ? 'warn' : 'info',
              class: 'shrink-0 !normal-case text-body-sm',
            }, { default: () => isApiKey ? 'API Key' : 'Organization' }),
          ]),
          h('span', { class: 'text-body-sm text-neutral-subtle truncate' }, row.identifier),
        ]),
      ]);
    };
  },
}));

const ModelCell = markRaw(defineComponent({
  name: 'ModelCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const row = props.data as TokenUsageRow;
      if (row._isBreakdown) return h('div', { class: 'p-2 min-h-10' });

      const models = row.models || [];
      const dots = models.map(m =>
        h('div', {
          class: 'size-6 rounded-full border-2 border-neutral-base flex items-center justify-center',
          style: `background-color: ${modelColors[m] || '#6B7280'};`,
          title: m,
        }, h('span', { class: 'text-[9px] font-bold text-neutral-inverted' }, m.split(' ').pop()?.charAt(0).toUpperCase()))
      );

      return h('div', { class: 'flex items-center gap-0 p-2 min-h-12' }, [
        h('div', { class: 'flex items-center -space-x-1' }, dots),
      ]);
    };
  },
}));

const BreakdownAwareTextCell = markRaw(defineComponent({
  name: 'BreakdownAwareTextCell',
  props: {
    data: { type: Object, default: () => ({}) },
    field: { type: String, required: true },
    format: { type: String, default: 'text' },
  },
  setup(props) {
    return () => {
      const row = props.data as TokenUsageRow;
      const isBreakdown = row._isBreakdown;
      const value = (row as unknown as Record<string, unknown>)[props.field];
      let displayValue = String(value ?? '');
      if (props.format === 'number' && typeof value === 'number') {
        displayValue = value.toLocaleString();
      }
      if (!displayValue) return h('div', { class: isBreakdown ? 'p-2 min-h-10' : 'p-2 min-h-12' });
      return h('div', {
        class: `flex items-center p-2 ${isBreakdown ? 'min-h-10' : 'min-h-12'}`,
      }, [
        h('span', {
          class: `text-body-md ${isBreakdown ? 'text-neutral-subtle' : 'text-neutral-base'}`,
        }, displayValue),
      ]);
    };
  },
}));

const StatusCell = markRaw(defineComponent({
  name: 'StatusCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const row = props.data as TokenUsageRow;
      const status = row?.status || 'Active';
      if (row._isBreakdown) {
        return h('div', { class: 'flex items-center p-2 min-h-10' }, [
          h(Tag, { severity: 'secondary', class: 'shrink-0 !normal-case' }, { default: () => status.toUpperCase() }),
        ]);
      }
      const severityMap: Record<string, string> = { Active: 'success', Inactive: 'danger', Revoked: 'secondary' };
      const severity = severityMap[status] || 'secondary';
      return h('div', { class: 'flex items-center p-2 min-h-12' }, [
        h(Tag, { severity, class: 'shrink-0 !normal-case' }, { default: () => status.toUpperCase() }),
      ]);
    };
  },
}));

const ExpandCell = markRaw(defineComponent({
  name: 'ExpandCell',
  props: {
    data: { type: Object, default: () => ({}) },
    onToggle: { type: Function, default: null },
    expandedRows: { type: Object, default: () => ({}) },
  },
  setup(props) {
    return () => {
      const row = props.data as TokenUsageRow;
      if (row._isBreakdown) return h('div', { class: 'p-2 min-h-10 w-6' });

      const hasBreakdown = row.breakdown && row.breakdown.length > 0;
      if (!hasBreakdown) return h('div', { class: 'p-2 min-h-12 w-6' });

      const isExpanded = !!(props.expandedRows as Record<number, boolean>)[row.id];
      const Icon = isExpanded ? ChevronUpIcon : ChevronDownIcon;

      return h('div', {
        class: 'flex items-center p-2 min-h-12 cursor-pointer',
        onClick: (e: MouseEvent) => {
          e.stopPropagation();
          if (props.onToggle) props.onToggle(row.id);
        },
      }, [
        h(Icon, { class: 'size-5 text-neutral-subtle' }),
      ]);
    };
  },
}));

// ─── Summary Stats ───

const summaryStats = {
  totalTokens: 51_965_800,
  totalCost: '$1,368.93',
  remainingQuota: '100M',
  quotaPercent: 48,
  changePercent: 18.3,
};

// ─── Tabs ───

const appTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Accounts (23)', value: 'accounts' },
  { label: 'Licenses', value: 'licenses' },
  { label: 'Tokens', value: 'tokens' },
];

// ─── Period Options ───

const periodOptions = [
  { label: 'Monthly', value: 'monthly' },
  { label: 'Quarterly', value: 'quarterly' },
];

// ─── Component Definition ───

const AITokenUsagePage = defineComponent({
  name: 'AITokenUsagePage',
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable,
    DataTableToolbar,
    PvButton: Button,
    PvTag: Tag,
    PvSelectButton: SelectButton,
    TopBar,
    ArrowTrendingUpIcon,
    ChevronDownIcon,
  },
  setup() {
    const activeTab = ref('tokens');
    const period = ref('monthly');
    const expandedRows = ref<Record<number, boolean>>({});
    const searchQuery = ref('');

    function toggleExpand(id: number) {
      expandedRows.value = { ...expandedRows.value, [id]: !expandedRows.value[id] };
    }

    const filteredData = computed(() => {
      let base = tokenUsageData;
      if (searchQuery.value) {
        const q = searchQuery.value.toLowerCase();
        base = base.filter(r =>
          r.name.toLowerCase().includes(q) ||
          r.identifier.toLowerCase().includes(q)
        );
      }
      const result: TokenUsageRow[] = [];
      for (const row of base) {
        result.push(row);
        if (expandedRows.value[row.id] && row.breakdown.length > 0) {
          for (const b of row.breakdown) {
            result.push({
              id: row.id * 1000 + row.breakdown.indexOf(b),
              consumerType: row.consumerType,
              name: '',
              identifier: '',
              models: [],
              tokensUsed: b.tokensUsed,
              estimatedCost: b.estimatedCost,
              status: b.status,
              createdAt: '',
              breakdown: [],
              _isBreakdown: true,
              _parentId: row.id,
              _model: b.model,
            });
          }
        }
      }
      return result;
    });

    const columns = [
      {
        field: 'expand',
        header: '',
        width: '48px',
        component: ExpandCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          data: sp.data,
          expandedRows: expandedRows.value,
          onToggle: toggleExpand,
        }),
      },
      {
        field: 'name',
        header: 'Consumer',
        sortable: true,
        width: '300px',
        component: ConsumerCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
      },
      {
        field: 'models',
        header: 'Models',
        sortable: false,
        width: '140px',
        component: ModelCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
      },
      {
        field: 'tokensUsed',
        header: 'Tokens Used',
        sortable: true,
        width: '140px',
        component: BreakdownAwareTextCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data, field: 'tokensUsed', format: 'number' }),
      },
      {
        field: 'estimatedCost',
        header: 'Estimated Cost',
        sortable: true,
        width: '140px',
        component: BreakdownAwareTextCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data, field: 'estimatedCost' }),
      },
      {
        field: 'status',
        header: 'Status',
        sortable: true,
        width: '120px',
        component: StatusCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
      },
    ];

    function handleSearch(query: string) {
      searchQuery.value = query;
    }

    function handleTabChange(tab: string) {
      activeTab.value = tab;
    }

    function handleRowClick({ data }: { data: Record<string, unknown> }) {
      const row = data as unknown as TokenUsageRow;
      if (row._isBreakdown) return;
      if (row.breakdown && row.breakdown.length > 0) {
        toggleExpand(row.id);
      }
    }

    const claudePageIcon = markRaw(ClaudePageIcon);

    return {
      activeTab, period, expandedRows, searchQuery,
      filteredData, columns, summaryStats,
      menuItems, profileMenuItems, appTabs, periodOptions,
      handleSearch, handleTabChange, toggleExpand, handleRowClick,
      claudePageIcon,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="access"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <TopBar showBackButton backButtonLabel="Back" />

        <PageHeader
          title=""
          :icon="claudePageIcon"
          :tabs="appTabs"
          :activeTab="activeTab"
          @update:activeTab="handleTabChange"
        >
          <template #actions>
            <PvButton severity="secondary" variant="outlined">
              <span>Actions</span>
              <ChevronDownIcon class="size-4 ml-1" />
            </PvButton>
          </template>
        </PageHeader>

        <!-- Tokens Tab Content -->
        <div v-if="activeTab === 'tokens'" class="flex-1 flex flex-col min-h-0 overflow-auto pt-6 bg-neutral-surface">

          <!-- Header Row: Title + Period Toggle -->
          <div class="flex items-center justify-between px-6 pb-4">
            <h2 class="text-heading-2 text-neutral-base">Token Usage</h2>
            <PvSelectButton v-model="period" :options="periodOptions" optionLabel="label" optionValue="value" />
          </div>

          <!-- Summary Stats -->
          <div class="grid grid-cols-3 gap-4 px-6 pb-6">
            <div class="flex flex-col gap-1 p-md border border-neutral-default_solid rounded-lg bg-neutral-base">
              <span class="text-body-sm text-neutral-subtle">Total Tokens Used</span>
              <span class="text-heading-2 text-neutral-base">{{ summaryStats.totalTokens.toLocaleString() }}</span>
              <div class="flex items-center gap-1">
                <ArrowTrendingUpIcon class="size-4 text-success-base" />
                <span class="text-body-sm text-success-base">+{{ summaryStats.changePercent }}%</span>
                <span class="text-body-sm text-neutral-subtle">vs last period</span>
              </div>
            </div>
            <div class="flex flex-col gap-1 p-md border border-neutral-default_solid rounded-lg bg-neutral-base">
              <span class="text-body-sm text-neutral-subtle">Total Estimated Cost</span>
              <span class="text-heading-2 text-neutral-base">{{ summaryStats.totalCost }}</span>
              <span class="text-body-sm text-neutral-subtle">Based on current pricing model</span>
            </div>
            <div class="flex flex-col gap-1 p-md border border-neutral-default_solid rounded-lg bg-neutral-base">
              <span class="text-body-sm text-neutral-subtle">Remaining Monthly Quota</span>
              <span class="text-heading-2 text-neutral-base">{{ summaryStats.remainingQuota }}</span>
              <div class="w-full bg-neutral-surface rounded-full h-2 mt-1">
                <div
                  class="bg-info-base h-2 rounded-full"
                  :style="{ width: summaryStats.quotaPercent + '%' }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Data Table -->
          <div class="flex-1 flex flex-col min-h-0 px-6 pb-6 relative">
            <CircuitDataTable
              :columns="columns"
              :data="filteredData"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="20"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '20 Items per page', value: 20 },
                { label: '50 Items per page', value: 50 },
              ]"
              :showRowsPerPageOptions="true"
              :showPageReport="true"
              :pt="{
                root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                bodyRow: { class: 'cursor-pointer' },
              }"
              :ptOptions="{ mergeSections: true, mergeProps: true }"
              @row-click="handleRowClick"
            >
              <template #toolbar>
                <DataTableToolbar
                  searchPlaceholder="Search"
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                  :showSaveViewButton="false"
                  @search="handleSearch"
                >
                  <template #saved-views>
                    <PvButton label="Export Data" severity="secondary" variant="outlined" size="small" />
                  </template>
                </DataTableToolbar>
              </template>
            </CircuitDataTable>
          </div>
        </div>

        <!-- Other tabs placeholder -->
        <div v-if="activeTab !== 'tokens'" class="flex-1 flex items-center justify-center bg-neutral-surface">
          <span class="text-body-md text-neutral-subtle">{{ activeTab.charAt(0).toUpperCase() + activeTab.slice(1) }} tab content</span>
        </div>

      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof AITokenUsagePage> = {
  title: "Projects/Baris' Playground/Pages/AI Token Usage",
  component: AITokenUsagePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AITokenUsagePage>;

export const Default: Story = {};
