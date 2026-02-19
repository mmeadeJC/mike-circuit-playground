import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellLink,
  DataTableCellButton,
} from '@jumpcloud/circuit/components';
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
  CpuChipIcon,
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';
import ListPageLayout from '../../../../components/layout/page-layouts/ListPageLayout.vue';

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

const targetsData = [
  {
    id: 1,
    name: 'Figma',
    slug: 'figma',
    url: 'https://mcp.figma.com/mcp',
    auth: 'oauth',
    authSeverity: 'accent-aster',
    status: 'Not connected',
    statusConnected: false,
    created: '2/17/2026',
  },
  {
    id: 2,
    name: 'Github',
    slug: 'github',
    url: 'https://api.githubcopilot.com/mcp/',
    auth: 'api-token',
    authSeverity: 'accent-yellow',
    status: 'Not connected',
    statusConnected: false,
    created: '2/13/2026',
  },
  {
    id: 3,
    name: 'Atlassian',
    slug: 'jira',
    url: 'https://mcp.atlassian.com/v1/sse',
    auth: 'oauth',
    authSeverity: 'accent-aster',
    status: 'Connected',
    statusConnected: true,
    created: '2/10/2026',
  },
  {
    id: 4,
    name: 'Salesforce',
    slug: 'salesforce',
    url: 'https://api.salesforce.com/platform/mcp/v1-beta.2/p...',
    auth: 'oauth',
    authSeverity: 'accent-aster',
    status: 'Connected',
    statusConnected: true,
    created: '2/12/2026',
  },
];

const targetsColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.slug,
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
    field: 'auth',
    header: 'Auth',
    width: '140px',
    component: markRaw(Tag),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      value: sp.data.auth,
      severity: sp.data.authSeverity,
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
      icon: sp.data.statusConnected ? markRaw(CheckCircleIcon) : markRaw(XCircleIcon),
    }),
  },
  {
    field: 'created',
    header: 'Created',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.created,
    }),
  },
  {
    field: 'actions',
    header: 'Actions',
    width: '120px',
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

const TargetsPage = defineComponent({
  name: 'TargetsPage',
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable,
    DataTableToolbar,
    PvTag: Tag,
    TopBar,
    ListPageLayout,
  },
  setup() {
    const selectedTargets = ref([] as typeof targetsData);

    return {
      menuItems,
      profileMenuItems,
      targetsData,
      targetsColumns,
      selectedTargets,
      CpuChipIcon: markRaw(CpuChipIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="settings"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />

        <PageHeader
          title="Targets"
          :icon="CpuChipIcon"
          subtitleText="Agent 0 — Manage your MCP target connections"
        />

        <div class="flex-1 overflow-hidden flex flex-col">
          <div class="flex-1 overflow-auto bg-neutral-surface">
            <ListPageLayout class="w-full! h-full!">
              <div class="flex flex-col gap-0">
                <DataTableToolbar
                  searchPlaceholder="Search targets..."
                  :showAddButton="true"
                  addButtonLabel="Add Target"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                />

                <CircuitDataTable
                  :columns="targetsColumns"
                  :data="targetsData"
                  selectionMode="multiple"
                  :selection="selectedTargets"
                  @update:selection="selectedTargets = $event"
                />
              </div>
            </ListPageLayout>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof TargetsPage> = {
  title: 'Projects/Agent 0/Pages/Targets',
  component: TargetsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TargetsPage>;

export const Default: Story = {};
