import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  DataTableCellAction,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
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
  ClipboardDocumentCheckIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  LockClosedIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  WorkflowIcon,
  AppleIcon,
  WindowsIcon,
  UbuntuIcon,
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

const osIconMap: Record<string, ReturnType<typeof markRaw>> = {
  mac: markRaw(AppleIcon),
  windows: markRaw(WindowsIcon),
  linux: markRaw(UbuntuIcon),
};

const StatusCell = markRaw(defineComponent({
  name: 'StatusCell',
  props: {
    data: { type: Object, default: () => ({}) },
  },
  setup(props) {
    return () => {
      const status = props.data?.status;
      const isActive = status === 'Active';
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, {
          severity: isActive ? 'success' : 'danger',
          class: 'shrink-0',
        }, {
          icon: () => h(isActive ? CheckCircleIcon : XCircleIcon, { class: 'size-4' }),
          default: () => status,
        }),
      ]);
    };
  },
}));

const MdmStatusCell = markRaw(defineComponent({
  name: 'MdmStatusCell',
  props: {
    data: { type: Object, default: () => ({}) },
  },
  setup(props) {
    return () => {
      const mdmStatus = props.data?.mdmStatus;
      const isEnrolled = mdmStatus === 'Enrolled';
      const iconClass = isEnrolled ? 'size-5 text-icon-success-base' : 'size-5 text-icon-error-base';
      const icon = isEnrolled ? CheckCircleIcon : ExclamationCircleIcon;
      return h('div', { class: 'flex items-center gap-2 p-2 min-h-12' }, [
        h(icon, { class: iconClass }),
        h('span', { class: 'text-body-md text-neutral-base' }, mdmStatus),
      ]);
    };
  },
}));

const deviceColumns = [
  {
    field: 'deviceName',
    header: 'Device name',
    width: '240px',
    sortable: true,
    component: markRaw(DataTableCellLink),
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      label: slotProps.data.deviceName,
      description: slotProps.data.deviceId,
      href: '#',
      size: 'default',
    }),
  },
  {
    field: 'status',
    header: 'Status',
    width: '130px',
    sortable: true,
    component: StatusCell,
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      data: slotProps.data,
    }),
  },
  {
    field: 'os',
    header: 'Operating system',
    width: '200px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      label: slotProps.data.os,
      icon: osIconMap[slotProps.data.osType as string],
      size: 'default',
    }),
  },
  {
    field: 'lastContact',
    header: 'Last contact',
    width: '160px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      label: slotProps.data.lastContact,
      size: 'default',
    }),
  },
  {
    field: 'primaryUser',
    header: 'Primary user',
    width: '160px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      label: slotProps.data.primaryUser,
      size: 'default',
    }),
  },
  {
    field: 'agentVersion',
    header: 'Agent version',
    width: '140px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      label: slotProps.data.agentVersion,
      size: 'default',
    }),
  },
  {
    field: 'mdmStatus',
    header: 'MDM Status',
    width: '150px',
    sortable: true,
    component: MdmStatusCell,
    componentProps: (slotProps: { data: Record<string, unknown> }) => ({
      data: slotProps.data,
    }),
  },
  {
    field: 'actions',
    header: '',
    width: '170px',
    component: markRaw(DataTableCellAction),
    componentProps: () => ({
      type: 'Button Group',
      iconButtons: [
        { icon: markRaw(CommandLineIcon) },
        { icon: markRaw(ChartBarSquareIcon) },
        { icon: markRaw(LockClosedIcon) },
        { icon: markRaw(Cog6ToothIcon) },
      ],
      maxVisibleIconButtons: 3,
      size: 'default',
    }),
  },
];

const deviceData = [
  { deviceName: 'Apple MacBook Pro', deviceId: 'c4d3e2f1b6a79e0a123456789abc', status: 'Active', os: 'MacOS 26.2', osType: 'mac', lastContact: '4 months ago', primaryUser: 'Jona Travis', agentVersion: '11.5.2', mdmStatus: 'Enrolled' },
  { deviceName: "Burak Basci's VM", deviceId: 'Parallels-9B 65 1D 40 B6 98 4D B2 8C', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '1 hour ago', primaryUser: 'Kael Harvey', agentVersion: '7.2.14', mdmStatus: 'Enrolled' },
  { deviceName: 'Lenovo ThinkPad X1 Carbon', deviceId: 'a1b2c3d4e5f67890abcdef123456', status: 'Active', os: 'Ubuntu 22.04 LTS', osType: 'linux', lastContact: '2 hours ago', primaryUser: 'Caterina Rossi', agentVersion: '16.9.6', mdmStatus: 'Enrolled' },
  { deviceName: 'HP Spectre x360', deviceId: '3c1b2a4f6e5d8f7g6h5i4j3k2l1m', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '30 minutes ago', primaryUser: 'Shea Anderson', agentVersion: '26.6.4', mdmStatus: 'Not Enrolled' },
  { deviceName: 'Microsoft Surface Laptop 4', deviceId: '5e4d3c2b1a0f9e8d7c6b5a4f3e2d', status: 'Active', os: 'Windows 10 Pro', osType: 'windows', lastContact: '23 minutes ago', primaryUser: 'Brycen Miller', agentVersion: '23.4.5', mdmStatus: 'Enrolled' },
  { deviceName: 'Asus ZenBook 13', deviceId: '1f2e3d4c5b6a789abcde0f12a34b', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '12 minutes ago', primaryUser: 'Bryon Clarke', agentVersion: '25.8.7', mdmStatus: 'Enrolled' },
  { deviceName: 'Razer Blade 15', deviceId: 'd5e6f7g8h9i0j1k2l3m4n5o6p7q8r', status: 'Active', os: 'Windows 10 Pro', osType: 'windows', lastContact: '1 minute ago', primaryUser: 'Jalon Franco', agentVersion: '24.2.1', mdmStatus: 'Enrolled' },
  { deviceName: 'Acer Swift 3', deviceId: '9c8d7e6f5a4b3c2d1e0f9g8h7i6j', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '4 minutes ago', primaryUser: 'Arnulfo Reyes', agentVersion: '21.7.2', mdmStatus: 'Not Enrolled' },
  { deviceName: 'Apple iMac 24', deviceId: 'abcdef1234567890fedcba9876543210', status: 'Active', os: 'MacOS 26.2', osType: 'mac', lastContact: '34 minutes ago', primaryUser: 'Antonie Weber', agentVersion: '20.1.10', mdmStatus: 'Enrolled' },
  { deviceName: 'LG Gram 17', deviceId: '2b3c4d5e6f7g8h9a0bc1d2c3e4f5g6', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '40 minutes ago', primaryUser: 'Coty Jast', agentVersion: '19.3.4', mdmStatus: 'Enrolled' },
  { deviceName: 'Microsoft Surface Book 3', deviceId: '4d5e6f7g8h9i0j1a2b3c4d5e6f7g8h', status: 'Active', os: 'Windows 10 Pro', osType: 'windows', lastContact: '2 hours ago', primaryUser: 'Jalon Franco', agentVersion: '22.5.9', mdmStatus: 'Enrolled' },
  { deviceName: 'Huawei MateBook X Pro', deviceId: '3f2e1d0c9b8a7e6f5d4c3b2a1f0e9', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '2 hours ago', primaryUser: 'Jayson Park', agentVersion: '17.7.1', mdmStatus: 'Enrolled' },
  { deviceName: 'Gigabyte Aero 15', deviceId: 'b1c2d3e4f5g6a7b8c9d0e1f2g3h4i5', status: 'Active', os: 'Windows 10 Pro', osType: 'windows', lastContact: '2 hours ago', primaryUser: 'Arlie Quinn', agentVersion: '14.8.11', mdmStatus: 'Enrolled' },
  { deviceName: 'Samsung Galaxy Book Pro', deviceId: 'b1c2d3e4f5g6a7b8c9d0e1f2g3h4i5', status: 'Inactive', os: 'Windows 10 Pro', osType: 'windows', lastContact: '1 hour ago', primaryUser: 'Doug Chapman', agentVersion: '10.0.4', mdmStatus: 'Enrolled' },
  { deviceName: 'Sony VAIO SX14', deviceId: '7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c', status: 'Active', os: 'Windows 10 Pro', osType: 'windows', lastContact: '3 hours ago', primaryUser: 'Alex Morgan', agentVersion: '9.1.2', mdmStatus: 'Enrolled' },
];

const savedViews = [
  { id: '1', label: 'All Active Devices', isFavorite: true },
  { id: '2', label: 'Windows Devices', isFavorite: false },
  { id: '3', label: 'Unenrolled MDM', isFavorite: false },
  { id: '4', label: 'Stale Devices (30+ days)', isFavorite: true },
  { id: '5', label: 'Mac Fleet', isFavorite: false },
];

const defaultViews = [
  { id: 'default-all', label: 'All Devices', editable: false, deletable: false },
  { id: 'default-active', label: 'Active Devices', editable: false, deletable: false },
  { id: 'default-inactive', label: 'Inactive Devices', editable: false, deletable: false },
];

const initialFilters = [
  { key: 'Status', operator: 'is', value: 'Active', id: 'filter-1' },
  { key: 'OS', operator: 'contains', value: 'Windows', id: 'filter-2' },
  { key: 'MDM Status', operator: 'is', value: 'Enrolled', id: 'filter-3' },
];

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Devices', value: 'devices' },
];

const DeviceListPage = defineComponent({
  name: 'DeviceListPage',
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable: DataTable,
    DataTableToolbar,
    PvButton: Button,
    AdminTopBar,
    Cog6ToothIcon,
  },
  setup() {
    const activeTab = ref('devices');
    const selectedDevices = ref([]);
    const selectedViewId = ref('default-all');
    const activeFilters = ref([...initialFilters]);

    const clearAllFilters = () => {
      activeFilters.value = [];
    };

    const removeFilter = (filter: { id?: string | number; key: string }) => {
      activeFilters.value = activeFilters.value.filter(
        (f) => (filter.id ? f.id !== filter.id : f.key !== filter.key)
      );
    };

    return {
      menuItems,
      profileMenuItems,
      deviceColumns,
      deviceData,
      tabs,
      activeTab,
      selectedDevices,
      selectedViewId,
      savedViews,
      defaultViews,
      activeFilters,
      clearAllFilters,
      removeFilter,
      DeviceListsIcon: markRaw(DeviceListsIcon),
    };
  },
  template: `
    <div class="page flex h-screen">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="main flex-[1_1_0] flex flex-col min-w-0 w-full h-full self-stretch">
        <AdminTopBar />

        <div class="page-content flex-[1_1_0] flex flex-col min-h-0 h-full w-full">
          <PageHeader
            title="Devices"
            :icon="DeviceListsIcon"
            :tabs="tabs"
            :activeTab="activeTab"
            @update:activeTab="activeTab = $event"
            class="page-header shrink-0"
          >
            <template #actions>
              <PvButton label="Device Settings" severity="secondary" variant="outlined">
                <template #icon>
                  <Cog6ToothIcon class="size-5" />
                </template>
              </PvButton>
            </template>
          </PageHeader>

          <div v-if="activeTab === 'devices'" class="table-container flex-[1_1_0] flex flex-col min-h-0 h-full w-full bg-neutral-surface">
            <div class="table-toolbox shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search devices..."
                :showFilterButton="true"
                :showRefreshButton="true"
                :showColumnsButton="true"
                :showSaveViewButton="true"
                :savedViews="savedViews"
                :defaultViews="defaultViews"
                :selectedViewId="selectedViewId"
                :showAddNewView="true"
                :activeFilters="activeFilters"
                :maxVisibleFilters="5"
                @clear-filters="clearAllFilters"
                @remove-filter="removeFilter"
              />
            </div>
            <div class="table-wrapper flex-[1_1_0] flex flex-col min-h-0 h-full px-6">
              <CircuitDataTable
                :columns="deviceColumns"
                :data="deviceData"
                selectionMode="multiple"
                :selection="selectedDevices"
                @update:selection="selectedDevices = $event"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :paginator="true"
                :rows="10"
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
                }"
                :ptOptions="{ mergeSections: true, mergeProps: true }"
              />
            </div>
          </div>

          <div v-if="activeTab === 'overview'" class="tab-overview flex-[1_1_0] overflow-auto min-h-0 p-6 bg-neutral-surface">
            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-8 text-center">
              <p class="text-body-lg text-neutral-subtle">Overview content coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof DeviceListPage> = {
  title: "Projects/Burak's Playground/Pages/Device List",
  component: DeviceListPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DeviceListPage>;

export const Default: Story = {};
