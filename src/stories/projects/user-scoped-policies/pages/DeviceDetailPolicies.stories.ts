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
  ComputerDesktopIcon,
  ChevronDownIcon,
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

// ─── Policy Results Status Tag ──────────────────────────────────────

const PolicyResultStatusTag = defineComponent({
  props: {
    status: { type: String, required: true },
  },
  components: { PvTag: Tag, CheckCircleIcon, ExclamationCircleIcon },
  computed: {
    severity(): 'danger' | 'warn' | 'success' {
      if (this.status === 'Failed') return 'danger';
      if (this.status === 'Pending') return 'warn';
      return 'success';
    },
    StatusIcon() {
      return this.status === 'Success' ? CheckCircleIcon : ExclamationCircleIcon;
    },
  },
  template: `
    <PvTag :severity="severity" class="shrink-0">
      <template #icon>
        <component :is="StatusIcon" class="size-4" />
      </template>
      {{ status }}
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

// ─── Policies Tab Data (binding table) ───────────────────────────────

const policiesBindingData = [
  { id: 1, name: 'User Policy 01', description: 'Description', policyLevel: 'User', userName: 'User Name', bound: false },
  { id: 2, name: 'User Policy 02', description: 'Description', policyLevel: 'User', userName: 'User Name', bound: false },
  { id: 3, name: 'User Policy 03', description: 'Description', policyLevel: 'Device', userName: 'User Name', bound: false },
  { id: 4, name: 'User Policy 04', description: 'Description', policyLevel: 'User', userName: 'User Name', bound: true },
  { id: 5, name: 'User Policy 05', description: 'Description', policyLevel: 'Device', userName: 'User Name', bound: true },
  { id: 6, name: 'User Policy 06', description: 'Description', policyLevel: 'Device', userName: 'User Name', bound: true },
  { id: 7, name: 'User Policy 07', description: 'Description', policyLevel: 'User', userName: 'User Name', bound: false },
  { id: 8, name: 'User Policy 08', description: 'Description', policyLevel: 'User', userName: 'User Name', bound: false },
  { id: 9, name: 'User Policy 09', description: 'Description', policyLevel: 'Device', userName: 'User Name', bound: false },
  { id: 10, name: 'User Policy 10', description: 'Description', policyLevel: 'User', userName: 'User Name', bound: true },
];

const policiesBindingColumns = [
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
    field: 'policyLevel',
    header: 'Policy Level',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.policyLevel as string,
      icon: sp.data.policyLevel === 'User' ? markRaw(UserIcon) : markRaw(DeviceManagementIcon),
    }),
  },
  {
    field: 'userName',
    header: 'User Name',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.userName }),
  },
];

// ─── Policy Results Tab Data ────────────────────────────────────────

const policyResultsData = [
  { id: 1, status: 'Failed', policy: 'Install Cert', policyLevel: 'User', userName: 'Hari' },
  { id: 2, status: 'Failed', policy: 'Install Cert', policyLevel: 'User', userName: 'Mike' },
  { id: 3, status: 'Pending', policy: 'Allow Camera', policyLevel: 'Device', userName: '—' },
  { id: 4, status: 'Pending', policy: 'Application Restriction', policyLevel: 'Device', userName: '—' },
  { id: 5, status: 'Success', policy: 'User Policy 05', policyLevel: 'Device', userName: '—' },
  { id: 6, status: 'Success', policy: 'User Policy 06', policyLevel: 'User', userName: 'Hari' },
  { id: 7, status: 'Failed', policy: 'User Policy 07', policyLevel: 'User', userName: 'Mike' },
  { id: 8, status: 'Success', policy: 'User Policy 08', policyLevel: 'Device', userName: '—' },
  { id: 9, status: 'Success', policy: 'User Policy 09', policyLevel: 'Device', userName: '—' },
  { id: 10, status: 'Success', policy: 'User Policy 10', policyLevel: 'Device', userName: '—' },
];

const policyResultsColumns = [
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    component: markRaw(PolicyResultStatusTag),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ status: sp.data.status }),
  },
  {
    field: 'policy',
    header: 'Policy',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.policy }),
  },
  {
    field: 'policyLevel',
    header: 'Policy Level',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.policyLevel }),
  },
  {
    field: 'userName',
    header: 'User Name',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.userName }),
  },
  {
    field: 'details',
    header: 'Details',
    component: markRaw(DataTableCellLink),
    componentProps: () => ({ label: 'View', href: '#' }),
  },
];

// ─── Tabs ───────────────────────────────────────────────────────────

const deviceDetailTabs = [
  { label: 'Highlights', value: 'highlights' },
  { label: 'Insights', value: 'insights' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Users', value: 'users' },
  { label: 'MDM', value: 'mdm' },
  { label: 'Apps', value: 'apps' },
  { label: 'Policies', value: 'policies' },
  { label: 'Policy Results', value: 'policy-results' },
  { label: 'Commands', value: 'commands' },
  { label: 'Background Activity', value: 'background-activity' },
];

// ─── Device Detail Page Component ────────────────────────────────────

function createDeviceDetailPage(initialTab: string) {
  return defineComponent({
    name: 'DeviceDetailPoliciesPage',
    computerIcon: markRaw(ComputerDesktopIcon),
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
      ComputerDesktopIcon,
      ChevronDownIcon,
      MagnifyingGlassIcon,
      FunnelIcon,
      ArrowPathIcon,
    },
    setup() {
      const activeTab = ref(initialTab);
      const selectedPolicies = ref<typeof policiesBindingData>(
        policiesBindingData.filter((r) => r.bound)
      );
      const selectedPolicyResults = ref<typeof policyResultsData>([]);
      const showBoundPolicies = ref(false);

      const boundPolicyCount = computed(() => selectedPolicies.value.length);
      const totalPolicyCount = policiesBindingData.length;
      const policiesDisplayData = computed(() =>
        showBoundPolicies.value ? selectedPolicies.value : policiesBindingData
      );

      function stopCheckboxRowClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (
          target.closest('[data-pc-name="checkbox"]') ||
          target.closest('[data-pc-section="input"]')
        ) {
          event.stopPropagation();
        }
      }

      return {
        menuItems,
        profileMenuItems,
        deviceDetailTabs,
        activeTab,
        policiesBindingData,
        policiesBindingColumns,
        policiesDisplayData,
        selectedPolicies,
        boundPolicyCount,
        totalPolicyCount,
        showBoundPolicies,
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
          activeItem="device management"
          :collapsible="true"
          :topNavToggle="true"
        />
        <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
          <TopBar showBackButton backButtonLabel="Devices" @back="() => {}" />

          <PageHeader
            title="Mike's VM"
            :icon="$options.computerIcon"
            subtitleText="Primary User: Unassigned   Serial Number: 4F6HJS3   OS: Windows 11 pro"
            :tabs="deviceDetailTabs"
            :activeTab="activeTab"
            :tabsScrollable="true"
            @update:activeTab="activeTab = $event"
          >
            <template #actions>
              <PvButton label="Actions" severity="secondary" variant="outlined" iconPos="right">
                <template #icon="iconProps">
                  <ChevronDownIcon :class="iconProps.class" />
                </template>
              </PvButton>
            </template>
          </PageHeader>

          <div class="flex-1 overflow-auto bg-neutral-surface">
            <!-- Policies Tab -->
            <div v-if="activeTab === 'policies'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-4">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center">
                    <MagnifyingGlassIcon class="w-4 h-4" />
                  </PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <span class="text-body-md text-neutral-subtle whitespace-nowrap">
                  {{ boundPolicyCount }} of {{ totalPolicyCount }} user policies bound
                </span>
                <div class="flex-1"></div>
                <CheckboxWithLabel v-model="showBoundPolicies" :binary="true" inputId="show-bound-policies">
                  <template #label>
                    <span class="text-body-md">Show bound user policies ({{ boundPolicyCount }})</span>
                  </template>
                </CheckboxWithLabel>
              </div>
              <div @click.capture="stopCheckboxRowClick">
                <CircuitDataTable
                  :columns="policiesBindingColumns"
                  :data="policiesDisplayData"
                  selectionMode="multiple"
                  v-model:selection="selectedPolicies"
                  dataKey="id"
                  compareSelectionBy="dataKey"
                  scrollable
                  scrollHeight="flex"
                />
              </div>
            </div>

            <!-- Policy Results Tab -->
            <div v-if="activeTab === 'policy-results'" class="p-6 pr-4 flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <PvIconField class="w-[500px]">
                  <PvInputIcon class="flex items-center justify-center">
                    <MagnifyingGlassIcon class="w-4 h-4" />
                  </PvInputIcon>
                  <PvInputText placeholder="Search" class="w-full" />
                </PvIconField>
                <PvButton severity="secondary" variant="text" rounded aria-label="Filter">
                  <template #icon><FunnelIcon class="w-5 h-5" /></template>
                </PvButton>
                <PvButton severity="secondary" variant="text" rounded aria-label="Refresh">
                  <template #icon><ArrowPathIcon class="w-5 h-5" /></template>
                </PvButton>
              </div>
              <CircuitDataTable
                :columns="policyResultsColumns"
                :data="policyResultsData"
                selectionMode="multiple"
                v-model:selection="selectedPolicyResults"
                dataKey="id"
                scrollable
                scrollHeight="flex"
              />
            </div>
          </div>

          <!-- Cancel/Save Footer -->
          <div
            class="flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base shrink-0"
          >
            <PvButton label="Cancel" severity="secondary" variant="text" />
            <PvButton label="Save" />
          </div>
        </div>
      </div>
    `,
  });
}

const DeviceDetailPoliciesTab = createDeviceDetailPage('policies');
const DeviceDetailPolicyResultsTab = createDeviceDetailPage('policy-results');

// ─── Meta & Stories ──────────────────────────────────────────────────

const meta: Meta<typeof DeviceDetailPoliciesTab> = {
  title: "Projects/Mike's Playground/User Scoped Policies/Pages/Device Detail",
  component: DeviceDetailPoliciesTab,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DeviceDetailPoliciesTab>;

export const PoliciesTab: Story = {
  render: () => ({
    components: { DeviceDetailPoliciesTab },
    template: '<DeviceDetailPoliciesTab />',
  }),
};

export const PolicyResultsTab: Story = {
  render: () => ({
    components: { DeviceDetailPolicyResultsTab },
    template: '<DeviceDetailPolicyResultsTab />',
  }),
};
