import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  DataTableCellStatus,
  DataTableCellAction,
  FormField,
  ToggleSwitch,
  CheckboxWithLabel,
  MessageNotification,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
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
  ArrowLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon,
  XCircleIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  ClockIcon,
  LinkIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ListBulletIcon,
  AdjustmentsHorizontalIcon,
  TrashIcon,
  PencilIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';
import DetailPageLayout from '@/components/layout/page-layouts/DetailPageLayout.vue';
import ConfigPageLayout from '@/components/layout/page-layouts/ConfigPageLayout.vue';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';

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

// ─── OS Icon Map ───

const osIconMap: Record<string, ReturnType<typeof markRaw>> = {
  mac: markRaw(AppleIcon),
  windows: markRaw(WindowsIcon),
  linux: markRaw(UbuntuIcon),
};

// ─── Status Cell ───

const StatusCell = markRaw(defineComponent({
  name: 'StatusCell',
  props: { data: { type: Object, default: () => ({}) } },
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

// ─── Mock Data: Devices (Assets) ───

interface AssetDevice {
  id: number;
  assetTag: string;
  deviceName: string;
  assignedTo: string;
  os: string;
  osType: string;
  status: string;
  location: string;
  purchaseDate: string;
  warrantyExpiry: string;
  serialNumber: string;
  model: string;
  processor: string;
  memory: string;
  storage: string;
  manufacturer: string;
  purchasePrice: string;
  vendor: string;
  poNumber: string;
}

const deviceAssetsData: AssetDevice[] = [
  { id: 1, assetTag: 'AST-001', deviceName: 'Apple MacBook Pro 16"', assignedTo: 'Jona Travis', os: 'MacOS 26.2', osType: 'mac', status: 'Active', location: 'San Francisco HQ', purchaseDate: 'Jan 15, 2025', warrantyExpiry: 'Jan 15, 2028', serialNumber: 'C02ZW1KZMD6T', model: 'MacBook Pro (16-inch, 2024)', processor: 'Apple M3 Max', memory: '36 GB', storage: '1 TB SSD', manufacturer: 'Apple', purchasePrice: '$3,499.00', vendor: 'Apple Store', poNumber: 'PO-2025-0012' },
  { id: 2, assetTag: 'AST-002', deviceName: 'Lenovo ThinkPad X1 Carbon', assignedTo: 'Caterina Rossi', os: 'Ubuntu 22.04 LTS', osType: 'linux', status: 'Active', location: 'Berlin Office', purchaseDate: 'Mar 22, 2025', warrantyExpiry: 'Mar 22, 2028', serialNumber: 'PF3KXYZ1', model: 'ThinkPad X1 Carbon Gen 11', processor: 'Intel Core i7-1365U', memory: '32 GB', storage: '512 GB SSD', manufacturer: 'Lenovo', purchasePrice: '$1,849.00', vendor: 'CDW', poNumber: 'PO-2025-0034' },
  { id: 3, assetTag: 'AST-003', deviceName: 'HP Spectre x360', assignedTo: 'Shea Anderson', os: 'Windows 11 Pro', osType: 'windows', status: 'Inactive', location: 'Austin Office', purchaseDate: 'Nov 10, 2024', warrantyExpiry: 'Nov 10, 2027', serialNumber: '5CD2345XYZ', model: 'Spectre x360 14', processor: 'Intel Core i7-1355U', memory: '16 GB', storage: '512 GB SSD', manufacturer: 'HP', purchasePrice: '$1,599.00', vendor: 'HP Direct', poNumber: 'PO-2024-0089' },
  { id: 4, assetTag: 'AST-004', deviceName: 'Microsoft Surface Laptop 5', assignedTo: 'Brycen Miller', os: 'Windows 11 Pro', osType: 'windows', status: 'Active', location: 'San Francisco HQ', purchaseDate: 'Feb 01, 2025', warrantyExpiry: 'Feb 01, 2028', serialNumber: 'MS1234ABC', model: 'Surface Laptop 5', processor: 'Intel Core i7-1265U', memory: '16 GB', storage: '512 GB SSD', manufacturer: 'Microsoft', purchasePrice: '$1,699.00', vendor: 'Microsoft Store', poNumber: 'PO-2025-0019' },
  { id: 5, assetTag: 'AST-005', deviceName: 'Dell XPS 15', assignedTo: 'Bryon Clarke', os: 'Windows 11 Pro', osType: 'windows', status: 'Active', location: 'London Office', purchaseDate: 'Apr 05, 2025', warrantyExpiry: 'Apr 05, 2028', serialNumber: 'DELL9876FG', model: 'XPS 15 9530', processor: 'Intel Core i9-13900H', memory: '64 GB', storage: '2 TB SSD', manufacturer: 'Dell', purchasePrice: '$2,799.00', vendor: 'Dell Direct', poNumber: 'PO-2025-0045' },
  { id: 6, assetTag: 'AST-006', deviceName: 'Apple MacBook Air M3', assignedTo: 'Jalon Franco', os: 'MacOS 26.2', osType: 'mac', status: 'Active', location: 'San Francisco HQ', purchaseDate: 'May 20, 2025', warrantyExpiry: 'May 20, 2028', serialNumber: 'C02AA2BBMD6T', model: 'MacBook Air (15-inch, M3, 2024)', processor: 'Apple M3', memory: '24 GB', storage: '512 GB SSD', manufacturer: 'Apple', purchasePrice: '$1,499.00', vendor: 'Apple Store', poNumber: 'PO-2025-0067' },
  { id: 7, assetTag: 'AST-007', deviceName: 'Razer Blade 15', assignedTo: 'Arnulfo Reyes', os: 'Windows 11 Pro', osType: 'windows', status: 'Inactive', location: 'Austin Office', purchaseDate: 'Aug 12, 2024', warrantyExpiry: 'Aug 12, 2026', serialNumber: 'RZ09-456DEF', model: 'Blade 15 Advanced', processor: 'Intel Core i9-13950HX', memory: '32 GB', storage: '1 TB SSD', manufacturer: 'Razer', purchasePrice: '$3,199.00', vendor: 'Amazon', poNumber: 'PO-2024-0102' },
  { id: 8, assetTag: 'AST-008', deviceName: 'Apple iMac 24"', assignedTo: 'Antonie Weber', os: 'MacOS 26.2', osType: 'mac', status: 'Active', location: 'Berlin Office', purchaseDate: 'Jun 18, 2025', warrantyExpiry: 'Jun 18, 2028', serialNumber: 'C02CC3DDMD6T', model: 'iMac (24-inch, M3, 2024)', processor: 'Apple M3', memory: '24 GB', storage: '1 TB SSD', manufacturer: 'Apple', purchasePrice: '$1,999.00', vendor: 'Apple Store', poNumber: 'PO-2025-0078' },
  { id: 9, assetTag: 'AST-009', deviceName: 'ASUS ZenBook 14', assignedTo: 'Kael Harvey', os: 'Windows 11 Pro', osType: 'windows', status: 'Active', location: 'London Office', purchaseDate: 'Sep 30, 2024', warrantyExpiry: 'Sep 30, 2027', serialNumber: 'ASUS789GHI', model: 'ZenBook 14 UX3402', processor: 'Intel Core i7-1260P', memory: '16 GB', storage: '512 GB SSD', manufacturer: 'ASUS', purchasePrice: '$1,199.00', vendor: 'Newegg', poNumber: 'PO-2024-0115' },
  { id: 10, assetTag: 'AST-010', deviceName: 'Samsung Galaxy Book3 Pro', assignedTo: 'Doug Chapman', os: 'Windows 11 Pro', osType: 'windows', status: 'Inactive', location: 'San Francisco HQ', purchaseDate: 'Jul 14, 2024', warrantyExpiry: 'Jul 14, 2027', serialNumber: 'SAM456JKL', model: 'Galaxy Book3 Pro 14', processor: 'Intel Core i7-1360P', memory: '16 GB', storage: '512 GB SSD', manufacturer: 'Samsung', purchasePrice: '$1,349.00', vendor: 'Samsung Direct', poNumber: 'PO-2024-0130' },
];

// ─── Mock Data: Accessories ───

interface AssetAccessory {
  id: number;
  assetTag: string;
  name: string;
  type: string;
  assignedTo: string;
  status: string;
  location: string;
  serialNumber: string;
}

const accessoryAssetsData: AssetAccessory[] = [
  { id: 1, assetTag: 'ACC-001', name: 'Apple Magic Keyboard', type: 'Keyboard', assignedTo: 'Jona Travis', status: 'Active', location: 'San Francisco HQ', serialNumber: 'MK2C3LL/A' },
  { id: 2, assetTag: 'ACC-002', name: 'Logitech MX Master 3S', type: 'Mouse', assignedTo: 'Caterina Rossi', status: 'Active', location: 'Berlin Office', serialNumber: '910-006556' },
  { id: 3, assetTag: 'ACC-003', name: 'Dell UltraSharp U2723QE', type: 'Monitor', assignedTo: 'Shea Anderson', status: 'Active', location: 'Austin Office', serialNumber: 'CN-0A1B2C' },
  { id: 4, assetTag: 'ACC-004', name: 'CalDigit TS4 Thunderbolt', type: 'Dock', assignedTo: 'Brycen Miller', status: 'Active', location: 'San Francisco HQ', serialNumber: 'CD-TS4-001' },
  { id: 5, assetTag: 'ACC-005', name: 'Sony WH-1000XM5', type: 'Headset', assignedTo: 'Bryon Clarke', status: 'Inactive', location: 'London Office', serialNumber: 'SN-WH5-789' },
  { id: 6, assetTag: 'ACC-006', name: 'LG 27UK850-W', type: 'Monitor', assignedTo: 'Jalon Franco', status: 'Active', location: 'San Francisco HQ', serialNumber: 'LG-27UK-456' },
];

// ─── Mock Data: Locations ───

interface AssetLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  devicesCount: number;
  accessoriesCount: number;
}

const locationData: AssetLocation[] = [
  { id: 1, name: 'San Francisco HQ', address: '580 Howard St', city: 'San Francisco, CA', country: 'United States', devicesCount: 45, accessoriesCount: 120 },
  { id: 2, name: 'Berlin Office', address: 'Friedrichstraße 123', city: 'Berlin', country: 'Germany', devicesCount: 22, accessoriesCount: 55 },
  { id: 3, name: 'Austin Office', address: '1100 Congress Ave', city: 'Austin, TX', country: 'United States', devicesCount: 18, accessoriesCount: 42 },
  { id: 4, name: 'London Office', address: '30 Finsbury Square', city: 'London', country: 'United Kingdom', devicesCount: 31, accessoriesCount: 78 },
];

// ─── Mock Data: History ───

interface HistoryEntry {
  id: number;
  action: string;
  performedBy: string;
  date: string;
  details: string;
}

const historyData: HistoryEntry[] = [
  { id: 1, action: 'Asset Assigned', performedBy: 'Admin IT', date: 'Feb 20, 2026 10:30 AM', details: 'Assigned to Jona Travis' },
  { id: 2, action: 'Warranty Updated', performedBy: 'Admin IT', date: 'Feb 18, 2026 3:15 PM', details: 'Extended warranty until Jan 15, 2028' },
  { id: 3, action: 'Location Changed', performedBy: 'System', date: 'Feb 15, 2026 9:00 AM', details: 'Moved from Austin Office to San Francisco HQ' },
  { id: 4, action: 'Asset Created', performedBy: 'Admin IT', date: 'Jan 15, 2025 2:00 PM', details: 'Initial asset registration' },
  { id: 5, action: 'Hardware Spec Updated', performedBy: 'Admin IT', date: 'Jan 20, 2025 11:00 AM', details: 'Memory upgraded from 16 GB to 36 GB' },
];

// ─── Mock Data: Custom Fields ───

interface CustomField {
  id: number;
  name: string;
  type: string;
  required: boolean;
  visibleInList: boolean;
}

const customFieldsData: CustomField[] = [
  { id: 1, name: 'Department', type: 'Text', required: true, visibleInList: true },
  { id: 2, name: 'Cost Center', type: 'Text', required: false, visibleInList: true },
  { id: 3, name: 'Insurance Policy #', type: 'Text', required: false, visibleInList: false },
  { id: 4, name: 'Condition', type: 'Select', required: true, visibleInList: true },
  { id: 5, name: 'Notes', type: 'Textarea', required: false, visibleInList: false },
];

// ─── Column Definitions: Devices ───

const deviceAssetColumns = [
  {
    field: 'assetTag',
    header: 'Asset Tag',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.assetTag,
    }),
  },
  {
    field: 'deviceName',
    header: 'Device Name',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.deviceName,
      description: sp.data.serialNumber,
      href: '#',
    }),
  },
  {
    field: 'assignedTo',
    header: 'Assigned To',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.assignedTo,
    }),
  },
  {
    field: 'os',
    header: 'Operating System',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.os,
      icon: osIconMap[sp.data.osType as string],
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'location',
    header: 'Location',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.location,
    }),
  },
  {
    field: 'purchaseDate',
    header: 'Purchase Date',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.purchaseDate,
    }),
  },
];

// ─── Column Definitions: Accessories ───

const accessoryColumns = [
  {
    field: 'assetTag',
    header: 'Asset Tag',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.assetTag,
    }),
  },
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.type,
      href: '#',
    }),
  },
  {
    field: 'type',
    header: 'Type',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.type,
    }),
  },
  {
    field: 'assignedTo',
    header: 'Assigned To',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.assignedTo,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'location',
    header: 'Location',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.location,
    }),
  },
];

// ─── Column Definitions: Locations ───

const locationColumns = [
  {
    field: 'name',
    header: 'Location',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.address,
      href: '#',
    }),
  },
  {
    field: 'city',
    header: 'City',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.city,
    }),
  },
  {
    field: 'country',
    header: 'Country',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.country,
    }),
  },
  {
    field: 'devicesCount',
    header: 'Devices',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.devicesCount),
    }),
  },
  {
    field: 'accessoriesCount',
    header: 'Accessories',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.accessoriesCount),
    }),
  },
];

// ─── Column Definitions: History ───

const historyColumns = [
  {
    field: 'action',
    header: 'Action',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.action,
    }),
  },
  {
    field: 'performedBy',
    header: 'Performed By',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.performedBy,
    }),
  },
  {
    field: 'date',
    header: 'Date',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.date,
    }),
  },
  {
    field: 'details',
    header: 'Details',
    width: '300px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.details,
    }),
  },
];

// ─── Column Definitions: Custom Fields ───

const customFieldColumns = [
  {
    field: 'name',
    header: 'Field Name',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
    }),
  },
  {
    field: 'type',
    header: 'Type',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.type,
    }),
  },
  {
    field: 'required',
    header: 'Required',
    width: '100px',
    component: markRaw(DataTableCellStatus),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: sp.data.required ? 'Yes' : 'No',
    }),
  },
  {
    field: 'visibleInList',
    header: 'Visible in List',
    width: '120px',
    component: markRaw(DataTableCellStatus),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: sp.data.visibleInList ? 'Yes' : 'No',
    }),
  },
  {
    field: 'actions',
    header: '',
    width: '120px',
    component: markRaw(DataTableCellAction),
    componentProps: () => ({
      type: 'Button Group',
      iconButtons: [
        { icon: markRaw(PencilIcon) },
        { icon: markRaw(TrashIcon) },
      ],
      maxVisibleIconButtons: 2,
      size: 'default',
    }),
  },
];

// ─── Asset type options ───

const assetTypeOptions = [
  { label: 'Laptop', value: 'laptop' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'Tablet', value: 'tablet' },
  { label: 'Phone', value: 'phone' },
  { label: 'Monitor', value: 'monitor' },
  { label: 'Accessory', value: 'accessory' },
];

const locationOptions = [
  { label: 'San Francisco HQ', value: 'sf' },
  { label: 'Berlin Office', value: 'berlin' },
  { label: 'Austin Office', value: 'austin' },
  { label: 'London Office', value: 'london' },
];

// ─── Main Page Tabs ───

const listTabs = [
  { label: 'Devices', value: 'devices' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Locations', value: 'locations' },
];

const detailTabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'History', value: 'history' },
];

const settingsTabs = [
  { label: 'General Settings', value: 'general' },
  { label: 'Field Settings', value: 'fields' },
];

// ─── Component Definition ───

const AssetManagementPage = defineComponent({
  name: 'AssetManagementPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CircuitDataTable,
    DataTableToolbar,
    FormField,
    ToggleSwitch,
    CheckboxWithLabel,
    MessageNotification,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvDialog: Dialog,
    PvDivider: Divider,
    PvSelectButton: SelectButton,
    AdminTopBar,
    DetailPageLayout,
    ConfigPageLayout,
    DetailsKeyValue,
    ArrowLeftIcon,
    ChevronRightIcon,
    PlusIcon,
    ArrowUpTrayIcon,
    CheckCircleIcon,
    ComputerDesktopIcon,
    CpuChipIcon,
    CurrencyDollarIcon,
    ClockIcon,
    LinkIcon,
    DocumentTextIcon,
    ArrowPathIcon,
    ListBulletIcon,
    AdjustmentsHorizontalIcon,
    Cog6ToothIcon,
    MapPinIcon,
    WrenchScrewdriverIcon,
    ExclamationTriangleIcon,
    XMarkIcon,
  },
  setup() {
    // ─── View State ───
    const currentView = ref<'list' | 'detail' | 'settings'>('list');
    const activeListTab = ref('devices');
    const activeDetailTab = ref('overview');
    const activeSettingsTab = ref('general');

    // ─── Selected Asset ───
    const selectedAsset = ref<AssetDevice | null>(null);
    const selectedDevices = ref([]);

    // ─── Dialog State ───
    const showAddAssetDialog = ref(false);
    const showImportDialog = ref(false);
    const importStep = ref<1 | 2 | 3>(1);
    const showManageFieldsDialog = ref(false);

    // ─── Add Asset Form ───
    const newAssetName = ref('');
    const newAssetTag = ref('');
    const newAssetType = ref(null);
    const newAssetLocation = ref(null);
    const newAssetSerialNumber = ref('');
    const newAssetAssignedTo = ref('');

    // ─── Settings State ───
    const assetMgmtEnabled = ref(true);
    const autoAssignTags = ref(true);
    const trackWarranty = ref(true);

    // ─── Collapsed Panel States ───
    const deviceMgmtCollapsed = ref(false);
    const assetInfoCollapsed = ref(false);
    const hardwareSpecCollapsed = ref(false);
    const purchaseDetailsCollapsed = ref(false);
    const recentHistoryCollapsed = ref(false);

    // ─── Page Header Computed ───
    const pageTitle = computed(() => {
      if (currentView.value === 'detail' && selectedAsset.value) {
        return selectedAsset.value.deviceName;
      }
      if (currentView.value === 'settings') {
        return 'Asset Management Settings';
      }
      return 'Asset Management';
    });

    const pageIcon = computed(() => {
      if (currentView.value === 'settings') return markRaw(Cog6ToothIcon);
      return markRaw(ClipboardDocumentListIcon);
    });

    const pageTabs = computed(() => {
      if (currentView.value === 'detail') return detailTabs;
      if (currentView.value === 'settings') return settingsTabs;
      return listTabs;
    });

    const activeTab = computed(() => {
      if (currentView.value === 'detail') return activeDetailTab.value;
      if (currentView.value === 'settings') return activeSettingsTab.value;
      return activeListTab.value;
    });

    // ─── Navigation ───
    function handleTabChange(tab: string) {
      if (currentView.value === 'detail') activeDetailTab.value = tab;
      else if (currentView.value === 'settings') activeSettingsTab.value = tab;
      else activeListTab.value = tab;
    }

    function openAssetDetail(asset: AssetDevice) {
      selectedAsset.value = asset;
      activeDetailTab.value = 'overview';
      currentView.value = 'detail';
    }

    function backToList() {
      currentView.value = 'list';
      selectedAsset.value = null;
    }

    function openSettings() {
      activeSettingsTab.value = 'general';
      currentView.value = 'settings';
    }

    function openAddAsset() {
      newAssetName.value = '';
      newAssetTag.value = '';
      newAssetType.value = null;
      newAssetLocation.value = null;
      newAssetSerialNumber.value = '';
      newAssetAssignedTo.value = '';
      showAddAssetDialog.value = true;
    }

    function openImportAssets() {
      importStep.value = 1;
      showImportDialog.value = true;
    }

    function openManageFields() {
      showManageFieldsDialog.value = true;
    }

    function handleRowClick(row: { data: AssetDevice }) {
      openAssetDetail(row.data);
    }

    return {
      currentView,
      activeListTab,
      activeDetailTab,
      activeSettingsTab,
      selectedAsset,
      selectedDevices,
      showAddAssetDialog,
      showImportDialog,
      importStep,
      showManageFieldsDialog,
      newAssetName,
      newAssetTag,
      newAssetType,
      newAssetLocation,
      newAssetSerialNumber,
      newAssetAssignedTo,
      assetMgmtEnabled,
      autoAssignTags,
      trackWarranty,
      deviceMgmtCollapsed,
      assetInfoCollapsed,
      hardwareSpecCollapsed,
      purchaseDetailsCollapsed,
      recentHistoryCollapsed,
      pageTitle,
      pageIcon,
      pageTabs,
      activeTab,
      handleTabChange,
      openAssetDetail,
      backToList,
      openSettings,
      openAddAsset,
      openImportAssets,
      openManageFields,
      handleRowClick,
      menuItems,
      profileMenuItems,
      deviceAssetsData,
      deviceAssetColumns,
      accessoryAssetsData,
      accessoryColumns,
      locationData,
      locationColumns,
      historyData,
      historyColumns,
      customFieldsData,
      customFieldColumns,
      assetTypeOptions,
      locationOptions,
      ClipboardDocumentListIcon: markRaw(ClipboardDocumentListIcon),
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

        <!-- Back button bar (detail/settings view) -->
        <div v-if="currentView !== 'list'" class="shrink-0 flex items-center h-12 px-4 border-b border-navigation-top_bar-default bg-navigation-top_bar-default">
          <PvButton
            label="Asset Management"
            severity="secondary"
            variant="text"
            size="small"
            @click="backToList"
          >
            <template #icon>
              <ArrowLeftIcon class="size-4" />
            </template>
          </PvButton>
        </div>

        <!-- TopBar (list view only) -->
        <AdminTopBar v-if="currentView === 'list'" />

        <PageHeader
          :title="pageTitle"
          :icon="pageIcon"
          :tabs="pageTabs"
          :activeTab="activeTab"
          :subtitleText="currentView === 'detail' && selectedAsset ? selectedAsset.assetTag : undefined"
          @update:activeTab="handleTabChange"
        >
          <template #actions>
            <template v-if="currentView === 'list'">
              <PvButton label="Settings" severity="secondary" variant="outlined" @click="openSettings">
                <template #icon>
                  <Cog6ToothIcon class="size-5" />
                </template>
              </PvButton>
            </template>
            <template v-if="currentView === 'detail'">
              <PvButton label="Go to Device Management" severity="secondary" variant="outlined">
                <template #icon>
                  <LinkIcon class="size-5" />
                </template>
              </PvButton>
            </template>
          </template>
        </PageHeader>

        <!-- ═══════════════ LIST VIEW ═══════════════ -->
        <template v-if="currentView === 'list'">

          <!-- Devices Tab -->
          <div v-if="activeListTab === 'devices'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search devices..."
                :showAddButton="true"
                addButtonLabel="Add Asset"
                @add="openAddAsset"
                :showFilterButton="true"
                :showRefreshButton="true"
                :showColumnsButton="true"
              />
            </div>
            <div class="flex-1 flex flex-col min-h-0 px-6">
              <CircuitDataTable
                :columns="deviceAssetColumns"
                :data="deviceAssetsData"
                selectionMode="multiple"
                :selection="selectedDevices"
                @update:selection="selectedDevices = $event"
                @row-click="handleRowClick"
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

          <!-- Accessories Tab -->
          <div v-if="activeListTab === 'accessories'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search accessories..."
                :showAddButton="true"
                addButtonLabel="Add Accessory"
                @add="openAddAsset"
                :showFilterButton="true"
                :showRefreshButton="true"
                :showColumnsButton="true"
              />
            </div>
            <div class="flex-1 flex flex-col min-h-0 px-6">
              <CircuitDataTable
                :columns="accessoryColumns"
                :data="accessoryAssetsData"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :paginator="true"
                :rows="10"
                :pt="{
                  root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                  tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                }"
                :ptOptions="{ mergeSections: true, mergeProps: true }"
              />
            </div>
          </div>

          <!-- Locations Tab -->
          <div v-if="activeListTab === 'locations'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search locations..."
                :showAddButton="true"
                addButtonLabel="Add Location"
                @add="openAddAsset"
                :showFilterButton="true"
                :showRefreshButton="true"
              />
            </div>
            <div class="flex-1 flex flex-col min-h-0 px-6">
              <CircuitDataTable
                :columns="locationColumns"
                :data="locationData"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :pt="{
                  root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                  tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                }"
                :ptOptions="{ mergeSections: true, mergeProps: true }"
              />
            </div>
          </div>
        </template>

        <!-- ═══════════════ DETAIL VIEW ═══════════════ -->
        <template v-if="currentView === 'detail' && selectedAsset">

          <!-- Overview Tab -->
          <DetailPageLayout v-if="activeDetailTab === 'overview'" class="w-full! h-full!">
            <div class="flex flex-col gap-6">

              <!-- Device Management Connection -->
              <CollapsiblePanel
                v-model:collapsed="deviceMgmtCollapsed"
                toggleable
                header="Device Management"
              >
                <template #titleicon="iconProps">
                  <LinkIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvButton label="Go to Device Detail" variant="outlined" severity="secondary" size="small" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-3">
                  <MessageNotification
                    severity="info"
                    title="Connected to Device Management"
                    detail="This asset is linked to a device record in Device Management. Changes to the device will be reflected here."
                  />
                  <div class="flex flex-col gap-2">
                    <DetailsKeyValue label="Device Name" :value="selectedAsset.deviceName" />
                    <DetailsKeyValue label="Serial Number" :value="selectedAsset.serialNumber" />
                    <DetailsKeyValue label="Operating System" :value="selectedAsset.os" />
                    <DetailsKeyValue label="Status" :value="selectedAsset.status" />
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Asset Detail Informations -->
              <CollapsiblePanel
                v-model:collapsed="assetInfoCollapsed"
                toggleable
                header="Asset Detail Informations"
              >
                <template #titleicon="iconProps">
                  <DocumentTextIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-2">
                  <DetailsKeyValue label="Asset Tag" :value="selectedAsset.assetTag" />
                  <DetailsKeyValue label="Device Name" :value="selectedAsset.deviceName" />
                  <DetailsKeyValue label="Assigned To" :value="selectedAsset.assignedTo" />
                  <DetailsKeyValue label="Location" :value="selectedAsset.location" />
                  <DetailsKeyValue label="Manufacturer" :value="selectedAsset.manufacturer" />
                  <DetailsKeyValue label="Model" :value="selectedAsset.model" />
                  <DetailsKeyValue label="Serial Number" :value="selectedAsset.serialNumber" />
                </div>
              </CollapsiblePanel>

              <!-- Hardware Specifications -->
              <CollapsiblePanel
                v-model:collapsed="hardwareSpecCollapsed"
                toggleable
                header="Hardware Specifications"
              >
                <template #titleicon="iconProps">
                  <CpuChipIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-2">
                  <DetailsKeyValue label="Processor" :value="selectedAsset.processor" />
                  <DetailsKeyValue label="Memory" :value="selectedAsset.memory" />
                  <DetailsKeyValue label="Storage" :value="selectedAsset.storage" />
                  <DetailsKeyValue label="Operating System" :value="selectedAsset.os" />
                </div>
              </CollapsiblePanel>

              <!-- Purchase Details -->
              <CollapsiblePanel
                v-model:collapsed="purchaseDetailsCollapsed"
                toggleable
                header="Purchase Details"
              >
                <template #titleicon="iconProps">
                  <CurrencyDollarIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-2">
                  <DetailsKeyValue label="Purchase Date" :value="selectedAsset.purchaseDate" />
                  <DetailsKeyValue label="Warranty Expiry" :value="selectedAsset.warrantyExpiry" />
                  <DetailsKeyValue label="Purchase Price" :value="selectedAsset.purchasePrice" />
                  <DetailsKeyValue label="Vendor" :value="selectedAsset.vendor" />
                  <DetailsKeyValue label="PO Number" :value="selectedAsset.poNumber" />
                </div>
              </CollapsiblePanel>

              <!-- Recent History -->
              <CollapsiblePanel
                v-model:collapsed="recentHistoryCollapsed"
                toggleable
                header="Recent History"
              >
                <template #titleicon="iconProps">
                  <ClockIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvButton label="View Full History" variant="outlined" severity="secondary" size="small" @click="activeDetailTab = 'history'" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <CircuitDataTable
                  :columns="historyColumns"
                  :data="historyData.slice(0, 3)"
                  size="small"
                  :card="false"
                />
              </CollapsiblePanel>

            </div>

            <template #sidebar>
              <div class="flex flex-col gap-4">
                <h3 class="text-heading-4 text-neutral-base">Quick Info</h3>
                <div class="flex flex-col gap-2">
                  <DetailsKeyValue label="Asset Tag" :value="selectedAsset.assetTag" />
                  <DetailsKeyValue label="Status" :value="selectedAsset.status" />
                  <DetailsKeyValue label="Assigned To" :value="selectedAsset.assignedTo" />
                  <DetailsKeyValue label="Location" :value="selectedAsset.location" />
                  <DetailsKeyValue label="Warranty" :value="selectedAsset.warrantyExpiry" />
                </div>
              </div>
            </template>
          </DetailPageLayout>

          <!-- History Tab -->
          <div v-if="activeDetailTab === 'history'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search history..."
                :showFilterButton="true"
                :showRefreshButton="true"
              />
            </div>
            <div class="flex-1 flex flex-col min-h-0 px-6">
              <CircuitDataTable
                :columns="historyColumns"
                :data="historyData"
                :card="true"
                size="default"
                :scrollable="true"
                scrollHeight="flex"
                :pt="{
                  root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                  tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                }"
                :ptOptions="{ mergeSections: true, mergeProps: true }"
              />
            </div>
          </div>
        </template>

        <!-- ═══════════════ SETTINGS VIEW ═══════════════ -->
        <template v-if="currentView === 'settings'">

          <!-- General Settings Tab -->
          <ConfigPageLayout v-if="activeSettingsTab === 'general'" class="w-full! h-full!" maxWidth="1024">
            <div class="flex flex-col gap-6">

              <!-- Asset Management Control -->
              <CollapsiblePanel header="Asset Management Control">
                <template #titleicon="iconProps">
                  <AdjustmentsHorizontalIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col gap-1">
                      <span class="text-body-md-semi-bold text-neutral-base">Enable Asset Management</span>
                      <span class="text-body-sm text-neutral-subtle">Track and manage hardware assets across your organization.</span>
                    </div>
                    <ToggleSwitch v-model="assetMgmtEnabled" />
                  </div>
                  <PvDivider />
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col gap-1">
                      <span class="text-body-md-semi-bold text-neutral-base">Auto-Assign Asset Tags</span>
                      <span class="text-body-sm text-neutral-subtle">Automatically generate asset tags for new devices.</span>
                    </div>
                    <ToggleSwitch v-model="autoAssignTags" />
                  </div>
                  <PvDivider />
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col gap-1">
                      <span class="text-body-md-semi-bold text-neutral-base">Track Warranty Expiration</span>
                      <span class="text-body-sm text-neutral-subtle">Get notified when asset warranties are approaching expiration.</span>
                    </div>
                    <ToggleSwitch v-model="trackWarranty" />
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Import Assets -->
              <CollapsiblePanel header="Import Assets">
                <template #titleicon="iconProps">
                  <ArrowUpTrayIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Bulk import assets from a CSV file. Download the template to ensure your data is formatted correctly.</p>
                  <div class="flex items-center gap-3">
                    <PvButton label="Import Assets" @click="openImportAssets">
                      <template #icon>
                        <ArrowUpTrayIcon class="size-5" />
                      </template>
                    </PvButton>
                    <PvButton label="Download CSV Template" severity="secondary" variant="outlined">
                      <template #icon>
                        <DocumentTextIcon class="size-5" />
                      </template>
                    </PvButton>
                  </div>
                </div>
              </CollapsiblePanel>

            </div>
          </ConfigPageLayout>

          <!-- Field Settings Tab -->
          <ConfigPageLayout v-if="activeSettingsTab === 'fields'" class="w-full! h-full!" maxWidth="1024">
            <div class="flex flex-col gap-6">

              <CollapsiblePanel header="Manage Fields">
                <template #titleicon="iconProps">
                  <ListBulletIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvButton label="Add Custom Field" variant="outlined" severity="secondary" size="small" @click="openManageFields">
                    <template #icon>
                      <PlusIcon class="size-4" />
                    </template>
                  </PvButton>
                </template>
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Configure custom fields to capture additional asset information. You can add new fields, rearrange field order, and modify field settings.</p>
                  <CircuitDataTable
                    :columns="customFieldColumns"
                    :data="customFieldsData"
                    size="default"
                    :card="false"
                  />
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Field Configuration">
                <template #titleicon="iconProps">
                  <AdjustmentsHorizontalIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Control how fields appear and behave across the asset management system.</p>
                  <div class="flex flex-col gap-3">
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Show asset tag field in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Show warranty expiry in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="false">
                      <template #label>Show purchase price in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Require location for all assets</template>
                    </CheckboxWithLabel>
                  </div>
                </div>
              </CollapsiblePanel>

            </div>
          </ConfigPageLayout>

          <!-- Settings Footer -->
          <div class="shrink-0 flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base">
            <PvButton label="Cancel" severity="secondary" variant="text" @click="backToList" />
            <PvButton label="Save Settings" />
          </div>
        </template>

        <!-- ═══════════════ ADD ASSET DIALOG ═══════════════ -->
        <PvDialog
          v-model:visible="showAddAssetDialog"
          :draggable="false"
          modal
          header="Add Asset"
          :style="{ width: '560px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-4">
            <div class="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField label="Asset Name" required>
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="newAssetName" class="w-full" placeholder="e.g. MacBook Pro 16&quot;" />
                </template>
              </FormField>
              <FormField label="Asset Tag">
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="newAssetTag" class="w-full" placeholder="Auto-generated if empty" />
                </template>
              </FormField>
              <FormField label="Asset Type" required>
                <template #default="{ inputId }">
                  <PvSelect :id="inputId" v-model="newAssetType" :options="assetTypeOptions" optionLabel="label" optionValue="value" class="w-full" placeholder="Select type" />
                </template>
              </FormField>
              <FormField label="Location">
                <template #default="{ inputId }">
                  <PvSelect :id="inputId" v-model="newAssetLocation" :options="locationOptions" optionLabel="label" optionValue="value" class="w-full" placeholder="Select location" />
                </template>
              </FormField>
              <FormField label="Serial Number">
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="newAssetSerialNumber" class="w-full" placeholder="Enter serial number" />
                </template>
              </FormField>
              <FormField label="Assigned To">
                <template #default="{ inputId }">
                  <PvInputText :id="inputId" v-model="newAssetAssignedTo" class="w-full" placeholder="Search users..." />
                </template>
              </FormField>
            </div>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showAddAssetDialog = false" />
              <PvButton label="Add Asset" @click="showAddAssetDialog = false" />
            </div>
          </template>
        </PvDialog>

        <!-- ═══════════════ IMPORT ASSET DIALOG ═══════════════ -->
        <PvDialog
          v-model:visible="showImportDialog"
          :draggable="false"
          modal
          :header="importStep === 1 ? 'Import Assets — Upload Template' : importStep === 2 ? 'Import Assets — Upload Summary' : 'Import Assets — Complete'"
          :style="{ width: '600px' }"
          :closable="importStep !== 3"
        >
          <template #closeicon><XMarkIcon /></template>
          <!-- Step 1: Upload Template (CSV) -->
          <div v-if="importStep === 1" class="flex flex-col gap-4">
            <p class="text-body-md text-neutral-subtle">Upload a CSV file with your asset data. Use the template to ensure correct formatting.</p>
            <div class="flex flex-col items-center gap-4 p-8 border-2 border-dashed border-neutral-default_solid rounded-lg bg-neutral-surface">
              <ArrowUpTrayIcon class="size-10 text-neutral-subtle" />
              <span class="text-body-md text-neutral-base">Drag and drop your CSV file here</span>
              <span class="text-body-sm text-neutral-subtle">or</span>
              <PvButton label="Browse Files" severity="secondary" variant="outlined" />
            </div>
            <MessageNotification
              severity="info"
              title="Formatting requirements"
              detail="Ensure your CSV includes columns: Asset Name, Asset Tag, Type, Serial Number, Location, Assigned To. Download the template for reference."
            />
          </div>

          <!-- Step 2: Upload Summary -->
          <div v-if="importStep === 2" class="flex flex-col gap-4">
            <p class="text-body-md text-neutral-subtle">Review the import summary before proceeding.</p>
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 rounded-lg border border-neutral-default_solid bg-neutral-surface">
                <span class="text-heading-2 text-neutral-base">24</span>
                <p class="text-body-sm text-neutral-subtle">Total records found</p>
              </div>
              <div class="p-4 rounded-lg border border-neutral-default_solid bg-neutral-surface">
                <span class="text-heading-2 text-success-base">22</span>
                <p class="text-body-sm text-neutral-subtle">Valid records</p>
              </div>
              <div class="p-4 rounded-lg border border-neutral-default_solid bg-neutral-surface">
                <span class="text-heading-2 text-error-base">2</span>
                <p class="text-body-sm text-neutral-subtle">Records with errors</p>
              </div>
              <div class="p-4 rounded-lg border border-neutral-default_solid bg-neutral-surface">
                <span class="text-heading-2 text-warning-base">3</span>
                <p class="text-body-sm text-neutral-subtle">Duplicate records</p>
              </div>
            </div>
            <MessageNotification
              severity="warn"
              title="2 records have errors"
              detail="Rows 12 and 18 are missing required fields. These rows will be skipped during import."
            />
          </div>

          <!-- Step 3: Complete -->
          <div v-if="importStep === 3" class="flex flex-col items-center gap-4 py-6">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-success-surface">
              <CheckCircleIcon class="size-10 text-icon-success-base" />
            </div>
            <span class="text-heading-3 text-neutral-base">Import Complete</span>
            <p class="text-body-md text-neutral-subtle text-center">22 assets have been successfully imported into your asset inventory.</p>
          </div>

          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <template v-if="importStep === 1">
                <PvButton label="Cancel" severity="secondary" variant="text" @click="showImportDialog = false" />
                <PvButton label="Upload & Continue" @click="importStep = 2" />
              </template>
              <template v-if="importStep === 2">
                <PvButton label="Back" severity="secondary" variant="text" @click="importStep = 1" />
                <PvButton label="Import Assets" @click="importStep = 3" />
              </template>
              <template v-if="importStep === 3">
                <PvButton label="Done" @click="showImportDialog = false" />
              </template>
            </div>
          </template>
        </PvDialog>

        <!-- ═══════════════ MANAGE FIELDS DIALOG ═══════════════ -->
        <PvDialog
          v-model:visible="showManageFieldsDialog"
          :draggable="false"
          modal
          header="Add Custom Field"
          :style="{ width: '480px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-4">
            <FormField label="Field Name" required>
              <template #default="{ inputId }">
                <PvInputText :id="inputId" class="w-full" placeholder="e.g. Department" />
              </template>
            </FormField>
            <FormField label="Field Type" required>
              <template #default="{ inputId }">
                <PvSelect :id="inputId" :options="[
                  { label: 'Text', value: 'text' },
                  { label: 'Number', value: 'number' },
                  { label: 'Date', value: 'date' },
                  { label: 'Select', value: 'select' },
                  { label: 'Textarea', value: 'textarea' },
                ]" optionLabel="label" optionValue="value" class="w-full" placeholder="Select field type" />
              </template>
            </FormField>
            <CheckboxWithLabel :modelValue="false">
              <template #label>Required field</template>
            </CheckboxWithLabel>
            <CheckboxWithLabel :modelValue="true">
              <template #label>Show in list view</template>
            </CheckboxWithLabel>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showManageFieldsDialog = false" />
              <PvButton label="Add Field" @click="showManageFieldsDialog = false" />
            </div>
          </template>
        </PvDialog>

      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof AssetManagementPage> = {
  title: "Projects/Burak's Playground/Pages/Asset Management",
  component: AssetManagementPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AssetManagementPage>;

export const Default: Story = {};
