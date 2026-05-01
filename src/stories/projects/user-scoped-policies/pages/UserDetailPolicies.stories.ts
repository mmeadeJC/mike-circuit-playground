import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, computed } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable as CircuitDataTable,
  DataTableCellText,
  DataTableCellLink,
  CheckboxWithLabel,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';

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
  ChevronRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/outline';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

import TopBar from '../../../../components/AdminTopBar.vue';

// ─── Icon Components ───────────────────────────────────────────────

const WindowsIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M3 5.548l7.065-0.966v6.822H3V5.548zm0 12.904l7.065 0.966v-6.822H3v5.856zm7.937 1.085L21 21v-7.596H10.937v-0.001 8.133zm0-15.074v8.133H21V3L10.937 4.463z"/></svg>`,
});
const AppleIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
});

const OsTypeIcon = defineComponent({
  name: 'OsTypeIcon',
  props: { os: { type: String, default: 'windows' } },
  components: { WindowsIcon, AppleIcon },
  computed: {
    label(): string { return this.os === 'windows' ? 'Windows' : 'Mac'; },
  },
  template: `
    <div class="flex items-center gap-2">
      <WindowsIcon v-if="os === 'windows'" />
      <AppleIcon v-else />
      <span class="text-body-md text-neutral-base">{{ label }}</span>
    </div>
  `,
});

const OsColumnCell = defineComponent({
  name: 'OsColumnCell',
  props: { os: { type: String, default: 'windows' } },
  components: { WindowsIcon, AppleIcon },
  template: `
    <div class="flex items-center gap-2">
      <WindowsIcon v-if="os === 'windows'" />
      <AppleIcon v-else />
      <span class="text-body-md text-neutral-base">{{ os === 'windows' ? 'Windows' : 'Mac' }}</span>
    </div>
  `,
});

const ViewLink = defineComponent({
  name: 'ViewLink',
  props: { label: { type: String, default: 'View' }, href: { type: String, default: '#' } },
  template: `<div class="px-2 py-1.5"><a :href="href" class="text-body-md-link text-link-base hover:text-link-hover hover:underline active:text-link-active no-underline transition-colors">{{ label }}</a></div>`,
});

const PolicyResultsStatusTag = defineComponent({
  name: 'PolicyResultsStatusTag',
  props: { statusLabel: { type: String, default: 'Success' } },
  components: { PvTag: Tag, CheckCircleIcon, ExclamationCircleIcon },
  computed: {
    isFailed(): boolean {
      return this.statusLabel === 'Failed';
    },
  },
  template: `
    <PvTag :severity="isFailed ? 'danger' : 'success'" class="shrink-0">
      <template #icon>
        <ExclamationCircleIcon v-if="isFailed" class="size-4" />
        <CheckCircleIcon v-else class="size-4" />
      </template>
      {{ statusLabel }}
    </PvTag>
  `,
});

// ─── Navigation Data ───────────────────────────────────────────────

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alert', leftIcon: markRaw(BellIcon), count: 23 },
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
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
      { separator: true },
      { label: 'Use Old Navigation', itemType: 'button' },
    ],
  },
];

// ─── Policies Tab Data ────────────────────────────────────────────

const userPoliciesData = [
  { id: 1, name: 'User Policy 01', description: 'Description text', os: 'mac', bound: true },
  { id: 2, name: 'User Policy 02', description: 'Description text', os: 'mac', bound: true },
  { id: 3, name: 'User Policy 03', description: 'Description text', os: 'windows', bound: true },
  { id: 4, name: 'User Policy 04', description: 'Description text', os: 'windows', bound: true },
  { id: 5, name: 'User Policy 05', description: 'Description text', os: 'mac', bound: false },
  { id: 6, name: 'User Policy 06', description: 'Description text', os: 'mac', bound: false },
  { id: 7, name: 'User Policy 07', description: 'Description text', os: 'mac', bound: false },
  { id: 8, name: 'User Policy 08', description: 'Description text', os: 'windows', bound: false },
  { id: 9, name: 'User Policy 09', description: 'Description text', os: 'windows', bound: false },
  { id: 10, name: 'User Policy 10', description: 'Description text', os: 'windows', bound: false },
];

const userPoliciesColumns = [
  {
    field: 'name',
    header: 'Policy',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.description,
    }),
  },
  {
    field: 'os',
    header: 'OS',
    sortable: true,
    component: markRaw(OsTypeIcon),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      os: sp.data.os,
    }),
  },
];

// ─── Policy Results Tab Data ───────────────────────────────────────

const policyResultsData = [
  { id: 1, status: 'Failed', policy: 'User Policy 01', device: "Burak's VM", os: 'mac' },
  { id: 2, status: 'Success', policy: 'User Policy 01', device: "Mike's VM", os: 'mac' },
  { id: 3, status: 'Success', policy: 'User Policy 01', device: "Tim's VM", os: 'windows' },
  { id: 4, status: 'Success', policy: 'User Policy 01', device: "Hari's VM", os: 'windows' },
  { id: 5, status: 'Failed', policy: 'User Policy 02', device: "Burak's VM", os: 'mac' },
  { id: 6, status: 'Success', policy: 'User Policy 02', device: "Mike's VM", os: 'mac' },
  { id: 7, status: 'Success', policy: 'User Policy 02', device: "Tim's VM", os: 'mac' },
  { id: 8, status: 'Success', policy: 'User Policy 02', device: "Hari's VM", os: 'windows' },
  { id: 9, status: 'Success', policy: 'User Policy 03', device: "Todd's VM", os: 'windows' },
  { id: 10, status: 'Success', policy: 'User Policy 03', device: "Lorie's VM", os: 'windows' },
];

const policyResultsColumns = [
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '100px',
    component: markRaw(PolicyResultsStatusTag),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      statusLabel: sp.data.status,
    }),
  },
  {
    field: 'policy',
    header: 'Policy',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.policy,
    }),
  },
  {
    field: 'device',
    header: 'Device',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.device,
    }),
  },
  {
    field: 'os',
    header: 'OS',
    sortable: true,
    component: markRaw(OsColumnCell),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      os: sp.data.os,
    }),
  },
  {
    field: 'details',
    header: 'Details',
    component: markRaw(ViewLink),
    componentProps: () => ({ label: 'View', href: '#' }),
  },
];

// ─── Page Tabs ────────────────────────────────────────────────────

const pageTabs = [
  { label: 'Highlights', value: 'highlights' },
  { label: 'Details', value: 'details' },
  { label: 'User Groups', value: 'user-groups' },
  { label: 'Devices', value: 'devices' },
  { label: 'Directories', value: 'directories' },
  { label: 'Policies', value: 'policies' },
  { label: 'Policy Results', value: 'policy-results' },
];

// ─── Component ─────────────────────────────────────────────────────

function createUserDetailPage(initialTab: string) {
  return defineComponent({
    name: 'UserDetailPoliciesPage',
    components: {
      AppNavigation,
      PageHeader,
      CircuitDataTable,
      CheckboxWithLabel,
      PvButton: Button,
      PvInputText: InputText,
      PvIconField: IconField,
      PvInputIcon: InputIcon,
      TopBar,
      UserIcon,
      ChevronRightIcon,
      MagnifyingGlassIcon,
      FunnelIcon,
      ArrowPathIcon,
    },
    setup() {
      const activeTab = ref(initialTab);

      // Policies tab state
      const selectedUserPolicies = ref(userPoliciesData.filter((p) => p.bound));
      const showBoundUserPolicies = ref(false);
      const boundUserPolicyCount = computed(() => selectedUserPolicies.value.length);
      const totalUserPolicyCount = 15;

      // Policy Results tab state
      const selectedPolicyResults = ref<typeof policyResultsData>([]);

      function stopCheckboxRowClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (target.closest('[data-pc-name="checkbox"]') || target.closest('[data-pc-section="input"]')) {
          event.stopPropagation();
        }
      }

      return {
        menuItems,
        profileMenuItems,
        pageTabs,
        activeTab,
        userPoliciesData,
        userPoliciesColumns,
        selectedUserPolicies,
        showBoundUserPolicies,
        boundUserPolicyCount,
        totalUserPolicyCount,
        policyResultsData,
        policyResultsColumns,
        selectedPolicyResults,
        stopCheckboxRowClick,
      };
    },
    template: `
      <div class="flex h-screen overflow-hidden">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="user management"
          :collapsible="true"
          :topNavToggle="true"
        />
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopBar showBackButton backButtonLabel="Users" />

          <PageHeader
            title="Marty McFly 85"
            :icon="$options.userIcon"
            :tabs="pageTabs"
            :activeTab="activeTab"
            @update:activeTab="activeTab = $event"
          >
            <template #subtitle>
              <span class="text-body-md text-neutral-subtle">Email: outatime85@example.com</span>
            </template>
            <template #actions>
              <PvButton label="Active" severity="secondary" variant="outlined" iconPos="right">
                <template #icon="iconProps"><ChevronRightIcon :class="[iconProps.class, 'rotate-90']" /></template>
              </PvButton>
            </template>
          </PageHeader>

          <div class="flex-1 overflow-auto bg-neutral-surface">
            <!-- Policies Tab -->
            <div v-if="activeTab === 'policies'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundUserPolicyCount }} of {{ totalUserPolicyCount }} User Policies</span>
                <div class="flex-1"></div>
                <CheckboxWithLabel v-model="showBoundUserPolicies" :binary="true" inputId="show-bound-user-policies">
                  <template #label><span class="text-body-md">Show bound user policies ({{ boundUserPolicyCount }})</span></template>
                </CheckboxWithLabel>
              </div>
              <div @click.capture="stopCheckboxRowClick">
                <CircuitDataTable
                  :columns="userPoliciesColumns"
                  :data="showBoundUserPolicies ? selectedUserPolicies : userPoliciesData"
                  v-model:selection="selectedUserPolicies"
                  selectionMode="multiple"
                  dataKey="id"
                  compareSelectionBy="dataKey"
                  :paginator="true"
                  :rows="50"
                  :totalRecords="totalUserPolicyCount"
                  scrollable
                  scrollHeight="flex"
                />
              </div>
            </div>

            <!-- Policy Results Tab -->
            <div v-if="activeTab === 'policy-results'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <PvButton severity="secondary" variant="text" rounded aria-label="Filter">
                  <template #icon><FunnelIcon class="w-5 h-5" /></template>
                </PvButton>
                <PvButton severity="secondary" variant="text" rounded aria-label="Refresh">
                  <template #icon><ArrowPathIcon class="w-5 h-5" /></template>
                </PvButton>
              </div>
              <div @click.capture="stopCheckboxRowClick">
                <CircuitDataTable
                  :columns="policyResultsColumns"
                  :data="policyResultsData"
                  v-model:selection="selectedPolicyResults"
                  selectionMode="multiple"
                  dataKey="id"
                  compareSelectionBy="dataKey"
                  :paginator="true"
                  :rows="50"
                  :totalRecords="policyResultsData.length"
                  scrollable
                  scrollHeight="flex"
                />
              </div>
            </div>
          </div>

          <!-- Cancel/Save Footer -->
          <div class="flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base shrink-0">
            <PvButton label="Cancel" severity="secondary" variant="text" />
            <PvButton label="Save" />
          </div>
        </div>
      </div>
    `,
    userIcon: markRaw(UserIcon),
  });
}

const UserDetailPoliciesPoliciesTab = createUserDetailPage('policies');
const UserDetailPoliciesPolicyResultsTab = createUserDetailPage('policy-results');

// ─── Meta & Stories ────────────────────────────────────────────────

const meta: Meta<typeof UserDetailPoliciesPoliciesTab> = {
  title: "Projects/Mike's Playground/User Scoped Policies/Pages/User Detail",
  component: UserDetailPoliciesPoliciesTab,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof UserDetailPoliciesPoliciesTab>;

export const PoliciesTab: Story = {
  render: () => ({
    components: { UserDetailPoliciesPoliciesTab },
    template: '<UserDetailPoliciesPoliciesTab />',
  }),
};

export const PolicyResultsTab: Story = {
  render: () => ({
    components: { UserDetailPoliciesPolicyResultsTab },
    template: '<UserDetailPoliciesPolicyResultsTab />',
  }),
};
