import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, onMounted, computed, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellToken,
  MessageNotification,
  ProgressSpinner,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ComputerDesktopIcon,
  ServerStackIcon,
  GlobeAltIcon,
  KeyIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';
import DashboardPageLayout from '../../../../components/layout/page-layouts/DashboardPageLayout.vue';
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

import {
  useSystemUsers,
  useSystems,
  useUserGroups,
  useSystemGroups,
  useApplications,
  usePolicies,
  useDirectoryInsights,
  useApiKeyStatus,
} from '../../../../composables/useJumpCloudApi';

// ─── Navigation Data ───

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
    items: [{ label: 'Reports' }],
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

// ─── Page Component ───

const RajPlaygroundPage = defineComponent({
  name: 'RajPlaygroundPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CircuitDataTable,
    DataTableToolbar,
    MessageNotification,
    ProgressSpinner,
    PvButton: Button,
    PvTag: Tag,
    PvDivider: Divider,
    TopBar,
    DashboardPageLayout,
    ListPageLayout,
    UserIcon,
    UsersIcon,
    ComputerDesktopIcon,
    ServerStackIcon,
    GlobeAltIcon,
    KeyIcon,
    ChevronRightIcon,
    CheckCircleIcon,
    ExclamationCircleIcon,
  },
  setup() {
    const activeTab = ref('overview');
    const tabs = [
      { label: 'Overview', value: 'overview' },
      { label: 'Users', value: 'users' },
      { label: 'Systems', value: 'systems' },
      { label: 'Directory Insights', value: 'insights' },
    ];

    const { isConfigured, maskedKey } = useApiKeyStatus();

    const systemUsersApi = useSystemUsers();
    const systemsApi = useSystems();
    const userGroupsApi = useUserGroups();
    const systemGroupsApi = useSystemGroups();
    const applicationsApi = useApplications();
    const policiesApi = usePolicies();
    const insightsApi = useDirectoryInsights();

    const overviewLoading = computed(
      () =>
        systemUsersApi.loading.value ||
        systemsApi.loading.value ||
        userGroupsApi.loading.value ||
        systemGroupsApi.loading.value ||
        applicationsApi.loading.value ||
        policiesApi.loading.value,
    );

    const summaryCards = computed(() => [
      {
        label: 'System Users',
        count: systemUsersApi.totalCount.value,
        icon: 'UserIcon',
        loading: systemUsersApi.loading.value,
      },
      {
        label: 'Systems',
        count: systemsApi.totalCount.value,
        icon: 'ComputerDesktopIcon',
        loading: systemsApi.loading.value,
      },
      {
        label: 'User Groups',
        count: userGroupsApi.groups.value.length,
        icon: 'UsersIcon',
        loading: userGroupsApi.loading.value,
      },
      {
        label: 'System Groups',
        count: systemGroupsApi.groups.value.length,
        icon: 'ServerStackIcon',
        loading: systemGroupsApi.loading.value,
      },
      {
        label: 'Applications',
        count: applicationsApi.applications.value.length,
        icon: 'GlobeAltIcon',
        loading: applicationsApi.loading.value,
      },
      {
        label: 'Policies',
        count: policiesApi.policies.value.length,
        icon: 'KeyIcon',
        loading: policiesApi.loading.value,
      },
    ]);

    const userColumns = computed(() =>
      (systemUsersApi.users.value.length > 0
        ? [
            { field: 'username', header: 'Username', component: markRaw(DataTableCellText) },
            { field: 'email', header: 'Email', component: markRaw(DataTableCellText) },
            { field: 'firstname', header: 'First Name', component: markRaw(DataTableCellText) },
            { field: 'lastname', header: 'Last Name', component: markRaw(DataTableCellText) },
            { field: 'activated', header: 'Activated', component: markRaw(DataTableCellToken), tokenMapping: { true: { label: 'Yes', severity: 'success' }, false: { label: 'No', severity: 'danger' } } },
          ]
        : []),
    );

    const systemColumns = computed(() =>
      (systemsApi.systems.value.length > 0
        ? [
            { field: 'displayName', header: 'Display Name', component: markRaw(DataTableCellText) },
            { field: 'hostname', header: 'Hostname', component: markRaw(DataTableCellText) },
            { field: 'os', header: 'OS', component: markRaw(DataTableCellText) },
            { field: 'version', header: 'Version', component: markRaw(DataTableCellText) },
            { field: 'active', header: 'Active', component: markRaw(DataTableCellToken), tokenMapping: { true: { label: 'Yes', severity: 'success' }, false: { label: 'No', severity: 'danger' } } },
          ]
        : []),
    );

    const insightColumns = [
      { field: 'event_type', header: 'Event Type', component: markRaw(DataTableCellText) },
      { field: 'service', header: 'Service', component: markRaw(DataTableCellText) },
      { field: 'initiated_by.type', header: 'Initiated By', component: markRaw(DataTableCellText) },
      { field: 'timestamp', header: 'Timestamp', component: markRaw(DataTableCellText) },
    ];

    function loadOverview() {
      if (!isConfigured) return;
      systemUsersApi.fetch(10);
      systemsApi.fetch(10);
      userGroupsApi.fetch(10);
      systemGroupsApi.fetch(10);
      applicationsApi.fetch(10);
      policiesApi.fetch(10);
    }

    function loadUsers() {
      if (!isConfigured) return;
      systemUsersApi.fetch(100);
    }

    function loadSystems() {
      if (!isConfigured) return;
      systemsApi.fetch(100);
    }

    function loadInsights() {
      if (!isConfigured) return;
      insightsApi.fetch(['all'], 7, 50);
    }

    function handleTabChange(value: string) {
      activeTab.value = value;
      if (value === 'overview') loadOverview();
      if (value === 'users') loadUsers();
      if (value === 'systems') loadSystems();
      if (value === 'insights') loadInsights();
    }

    onMounted(() => {
      loadOverview();
    });

    return {
      menuItems,
      profileMenuItems,
      activeTab,
      tabs,
      isConfigured,
      maskedKey,
      overviewLoading,
      summaryCards,
      systemUsersApi,
      systemsApi,
      insightsApi,
      userColumns,
      systemColumns,
      insightColumns,
      handleTabChange,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="home"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />
        <PageHeader
          title="Raj's Playground"
          subtitle="JumpCloud API exploration workspace"
          :tabs="tabs"
          :activeTab="activeTab"
          @tab-change="handleTabChange"
        >
          <template #icon>
            <RocketLaunchIcon class="size-7" />
          </template>
        </PageHeader>

        <!-- API Key Warning -->
        <div v-if="!isConfigured" class="px-6 py-3">
          <MessageNotification
            severity="warn"
            title="API Key Not Configured"
            detail="Set JUMPCLOUD_API_KEY in your .env file and restart Storybook to enable live API data."
          />
        </div>

        <div v-if="isConfigured && activeTab === 'overview'" class="px-6 pt-1 pb-0">
          <MessageNotification
            severity="info"
            title="Connected to JumpCloud"
            :detail="'API Key: ' + maskedKey + ' — Data is fetched live from your JumpCloud org.'"
          />
        </div>

        <!-- ═══ Overview Tab ═══ -->
        <DashboardPageLayout v-if="activeTab === 'overview'" class="w-full! h-full!">
          <div class="flex flex-col gap-4">
            <!-- Summary Cards -->
            <div class="grid grid-cols-3 gap-4">
              <CollapsiblePanel
                v-for="card in summaryCards"
                :key="card.label"
                :header="card.label"
              >
                <template #titleicon="iconProps">
                  <component :is="card.icon" :class="iconProps.class" />
                </template>
                <div class="flex items-center justify-between py-2">
                  <ProgressSpinner v-if="card.loading" size="small" />
                  <span v-else class="text-heading-2 text-neutral-base">{{ card.count }}</span>
                </div>
              </CollapsiblePanel>
            </div>

            <!-- Recent Users Preview -->
            <CollapsiblePanel header="Recent Users">
              <template #titleicon="iconProps">
                <UserIcon :class="iconProps.class" />
              </template>
              <template #actions>
                <PvButton
                  label="View All Users"
                  variant="outlined"
                  severity="secondary"
                  size="small"
                  @click="handleTabChange('users')"
                />
              </template>
              <div v-if="systemUsersApi.loading.value" class="flex items-center justify-center py-8">
                <ProgressSpinner />
              </div>
              <div v-else-if="systemUsersApi.error.value" class="py-4">
                <MessageNotification severity="error" title="Failed to load users" :detail="systemUsersApi.error.value" />
              </div>
              <div v-else-if="systemUsersApi.users.value.length === 0" class="py-4 text-body-md text-neutral-subtle">
                No users found in your JumpCloud org.
              </div>
              <div v-else class="flex flex-col gap-2">
                <div
                  v-for="user in systemUsersApi.users.value.slice(0, 5)"
                  :key="user._id || user.id"
                  class="flex items-center justify-between py-2 px-3 rounded-md bg-neutral-surface"
                >
                  <div class="flex flex-col">
                    <span class="text-body-md-semi-bold text-neutral-base">
                      {{ user.firstname }} {{ user.lastname }}
                    </span>
                    <span class="text-body-sm text-neutral-subtle">{{ user.email }}</span>
                  </div>
                  <PvTag
                    :severity="user.activated ? 'success' : 'danger'"
                  >
                    <template #icon>
                      <CheckCircleIcon v-if="user.activated" class="size-4" />
                      <ExclamationCircleIcon v-else class="size-4" />
                    </template>
                    {{ user.activated ? 'Active' : 'Inactive' }}
                  </PvTag>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Recent Systems Preview -->
            <CollapsiblePanel header="Recent Systems">
              <template #titleicon="iconProps">
                <ComputerDesktopIcon :class="iconProps.class" />
              </template>
              <template #actions>
                <PvButton
                  label="View All Systems"
                  variant="outlined"
                  severity="secondary"
                  size="small"
                  @click="handleTabChange('systems')"
                />
              </template>
              <div v-if="systemsApi.loading.value" class="flex items-center justify-center py-8">
                <ProgressSpinner />
              </div>
              <div v-else-if="systemsApi.error.value" class="py-4">
                <MessageNotification severity="error" title="Failed to load systems" :detail="systemsApi.error.value" />
              </div>
              <div v-else-if="systemsApi.systems.value.length === 0" class="py-4 text-body-md text-neutral-subtle">
                No systems found in your JumpCloud org.
              </div>
              <div v-else class="flex flex-col gap-2">
                <div
                  v-for="system in systemsApi.systems.value.slice(0, 5)"
                  :key="system._id || system.id"
                  class="flex items-center justify-between py-2 px-3 rounded-md bg-neutral-surface"
                >
                  <div class="flex flex-col">
                    <span class="text-body-md-semi-bold text-neutral-base">
                      {{ system.displayName || system.hostname }}
                    </span>
                    <span class="text-body-sm text-neutral-subtle">{{ system.os }} {{ system.version }}</span>
                  </div>
                  <PvTag
                    :severity="system.active ? 'success' : 'danger'"
                  >
                    <template #icon>
                      <CheckCircleIcon v-if="system.active" class="size-4" />
                      <ExclamationCircleIcon v-else class="size-4" />
                    </template>
                    {{ system.active ? 'Online' : 'Offline' }}
                  </PvTag>
                </div>
              </div>
            </CollapsiblePanel>

            <!-- Placeholder: build more features here -->
            <CollapsiblePanel header="Your Next Feature">
              <template #titleicon="iconProps">
                <RocketLaunchIcon :class="iconProps.class" />
              </template>
              <div class="py-8 text-center">
                <p class="text-body-lg text-neutral-subtle">
                  This is your playground. Build something awesome here.
                </p>
                <p class="text-body-md text-neutral-ghost mt-2">
                  Available composables: useSystemUsers, useSystems, useUserGroups,
                  useSystemGroups, useApplications, usePolicies, useDirectoryInsights
                </p>
              </div>
            </CollapsiblePanel>
          </div>
        </DashboardPageLayout>

        <!-- ═══ Users Tab ═══ -->
        <ListPageLayout v-if="activeTab === 'users'" class="w-full! h-full!">
          <div class="flex flex-col">
            <DataTableToolbar
              searchPlaceholder="Search users..."
              :showAddButton="false"
              :showFilterButton="false"
              :showRefreshButton="true"
              @refresh="systemUsersApi.fetch(100)"
            />
            <div v-if="systemUsersApi.loading.value" class="flex items-center justify-center py-16">
              <ProgressSpinner />
            </div>
            <div v-else-if="systemUsersApi.error.value" class="px-6 py-4">
              <MessageNotification severity="error" title="Failed to load users" :detail="systemUsersApi.error.value" />
            </div>
            <CircuitDataTable
              v-else
              :data="systemUsersApi.users.value"
              :columns="userColumns"
              :rows="20"
              :paginator="true"
              dataKey="_id"
            />
          </div>
        </ListPageLayout>

        <!-- ═══ Systems Tab ═══ -->
        <ListPageLayout v-if="activeTab === 'systems'" class="w-full! h-full!">
          <div class="flex flex-col">
            <DataTableToolbar
              searchPlaceholder="Search systems..."
              :showAddButton="false"
              :showFilterButton="false"
              :showRefreshButton="true"
              @refresh="systemsApi.fetch(100)"
            />
            <div v-if="systemsApi.loading.value" class="flex items-center justify-center py-16">
              <ProgressSpinner />
            </div>
            <div v-else-if="systemsApi.error.value" class="px-6 py-4">
              <MessageNotification severity="error" title="Failed to load systems" :detail="systemsApi.error.value" />
            </div>
            <CircuitDataTable
              v-else
              :data="systemsApi.systems.value"
              :columns="systemColumns"
              :rows="20"
              :paginator="true"
              dataKey="_id"
            />
          </div>
        </ListPageLayout>

        <!-- ═══ Directory Insights Tab ═══ -->
        <ListPageLayout v-if="activeTab === 'insights'" class="w-full! h-full!">
          <div class="flex flex-col">
            <DataTableToolbar
              searchPlaceholder="Search events..."
              :showAddButton="false"
              :showFilterButton="false"
              :showRefreshButton="true"
              @refresh="insightsApi.fetch(['all'], 7, 50)"
            />
            <div v-if="insightsApi.loading.value" class="flex items-center justify-center py-16">
              <ProgressSpinner />
            </div>
            <div v-else-if="insightsApi.error.value" class="px-6 py-4">
              <MessageNotification severity="error" title="Failed to load events" :detail="insightsApi.error.value" />
            </div>
            <CircuitDataTable
              v-else
              :data="insightsApi.events.value"
              :columns="insightColumns"
              :rows="20"
              :paginator="true"
              dataKey="id"
            />
          </div>
        </ListPageLayout>
      </div>
    </div>
  `,
});

// ─── Story ───

const meta: Meta<typeof RajPlaygroundPage> = {
  title: "Projects/Raj's Playground/Pages/Raj Playground",
  component: RajPlaygroundPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof RajPlaygroundPage>;

export const Default: Story = {};
