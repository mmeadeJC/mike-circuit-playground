import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, defineComponent, markRaw, ref } from 'vue';
import {
  AppNavigation,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellStatus,
  DataTableToolbar,
  PageHeader,
} from '@jumpcloud/circuit/components';
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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  BellIcon,
  ChartBarSquareIcon,
  ChevronRightIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
  Cog6ToothIcon,
  CommandLineIcon,
  HomeIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
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

import AdminTopBar from '@/components/AdminTopBar.vue';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';
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

// ─── Mock Data ───

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

// Drawer access path mock data per entity type
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

// ─── Columns ───

const resourceColumns = [
  { field: 'resourceName', header: 'Resource', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'resourceType', header: 'Type', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalIdentities', header: 'Identities', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'staleAccess', header: 'Stale', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'riskLevel', header: 'Risk', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Low: { label: 'Low', severity: 'success' },
      Medium: { label: 'Medium', severity: 'warn' },
      High: { label: 'High', severity: 'danger' },
    },
  },
  { field: 'lastReviewed', header: 'Last Reviewed', sortable: true, component: markRaw(DataTableCellText) },
];

const identityColumns = [
  { field: 'name', header: 'Identity', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'type', header: 'Type', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Human: { label: 'Human', severity: 'info' },
      'Service Account': { label: 'Service Acct', severity: 'warn' },
      'API Key': { label: 'API Key', severity: 'warn' },
    },
  },
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
  { field: 'lastActive', header: 'Last Active', sortable: true, component: markRaw(DataTableCellText) },
];

const groupColumns = [
  { field: 'groupName', header: 'Group', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'memberCount', header: 'Members', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'totalResources', header: 'Resources', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'privilegedResources', header: 'Privileged', sortable: true, component: markRaw(DataTableCellText) },
  { field: 'nestingDepth', header: 'Nesting', sortable: true, component: markRaw(DataTableCellText) },
  {
    field: 'riskLevel', header: 'Risk', sortable: true,
    component: markRaw(DataTableCellStatus),
    tokenMapping: {
      Low: { label: 'Low', severity: 'success' },
      Medium: { label: 'Medium', severity: 'warn' },
      High: { label: 'High', severity: 'danger' },
    },
  },
];

// ─── Component ───

const ISPMExplorerPage = defineComponent({
  name: 'ISPMExplorerPage',
  components: {
    AppNavigation,
    CircuitDataTable,
    DataTableToolbar,
    PageHeader,
    AdminTopBar,
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
    MagnifyingGlassIcon,
    ArrowDownTrayIcon,
    ChevronRightIcon,
    XMarkIcon,
  },
  setup() {
    const activeTab = ref('resource');
    const typeFilter = ref<'all' | 'human' | 'nhi'>('all');
    const typeFilterOptions = [
      { label: 'All', value: 'all' },
      { label: 'Human', value: 'human' },
      { label: 'Non-Human', value: 'nhi' },
    ];

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
        { label: 'Privileged', value: String(g.privilegedResources) },
        { label: 'Nesting Depth', value: String(g.nestingDepth) },
        { label: 'Risk', value: g.riskLevel },
      ];
      drawerPaths.value = getAccessPaths('group', g.id);
      drawerVisible.value = true;
    }

    return {
      menuItems,
      profileMenuItems,
      activeTab,
      typeFilter,
      typeFilterOptions,
      drawerVisible,
      drawerTitle,
      drawerSubtitle,
      drawerDetails,
      drawerPaths,
      filteredIdentityData,
      resourceTabLabel,
      identityTabLabel,
      groupTabLabel,
      resourceData,
      groupData,
      resourceColumns,
      identityColumns,
      groupColumns,
      openResourceDrawer,
      openIdentityDrawer,
      openGroupDrawer,
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
          title="Access Explorer"
          subtitleText="Browse and understand who has access to what"
        >
          <template #icon>
            <MagnifyingGlassIcon class="size-7" />
          </template>
          <template #actions>
            <PvButton label="Export" severity="secondary" variant="outlined">
              <template #icon="iconProps">
                <ArrowDownTrayIcon :class="iconProps.class" />
              </template>
            </PvButton>
          </template>
        </PageHeader>

        <ListPageLayout class="w-full! h-full!">
          <div class="flex flex-col gap-4 px-6 py-4">

            <PvTabs v-model:value="activeTab">
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

                <!-- By Identity -->
                <PvTabPanel value="identity">
                  <div class="flex items-center justify-between py-2">
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
                      class="ml-3"
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
        </ListPageLayout>

        <!-- Access Detail Drawer -->
        <PvDrawer
          v-model:visible="drawerVisible"
          :header="drawerTitle"
          position="right"
          class="w-[640px]!"
        >
          <div class="flex flex-col gap-4">
            <span class="text-body-md text-neutral-subtle">{{ drawerSubtitle }}</span>

            <PvDivider />

            <!-- Key-value summary -->
            <div class="grid grid-cols-2 gap-x-6 gap-y-3">
              <DetailsKeyValue
                v-for="d in drawerDetails"
                :key="d.label"
                :label="d.label"
                :value="d.value"
              />
            </div>

            <PvDivider />

            <!-- Access Paths -->
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
                    <PvTag
                      :severity="step.type === 'identity' ? 'info' : step.type === 'resource' ? 'success' : step.type === 'permission' ? 'warn' : 'secondary'"
                    >{{ step.label }}</PvTag>
                    <ChevronRightIcon v-if="sIdx < path.length - 1" class="size-3 text-neutral-subtle" />
                  </template>
                </div>
              </div>
            </div>

            <PvDivider />

            <PvButton label="Add to Review Campaign" severity="secondary" variant="outlined" class="w-full" />
          </div>

          <template #footer>
            <div class="flex gap-sm justify-end">
              <PvButton label="Close" severity="secondary" variant="text" @click="drawerVisible = false" />
            </div>
          </template>
        </PvDrawer>
      </div>
    </div>
  `,
});

// ─── Story ───

const meta: Meta<typeof ISPMExplorerPage> = {
  title: "Projects/Raj's Playground/Pages/ISPM v2/2 — Access Explorer",
  component: ISPMExplorerPage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ISPMExplorerPage>;

export const Default: Story = {};
