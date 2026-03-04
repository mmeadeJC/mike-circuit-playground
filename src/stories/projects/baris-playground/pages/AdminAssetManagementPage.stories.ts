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
  FormField,
  ToggleSwitch,
  CheckboxWithLabel,
  MessageNotification,
  SeverityDialog,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import SelectButton from 'primevue/selectbutton';
import MultiSelect from 'primevue/multiselect';

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
  ChevronRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  ClockIcon,
  DocumentTextIcon,
  AdjustmentsHorizontalIcon,
  TrashIcon,
  PencilIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  EllipsisHorizontalIcon,
  ClipboardDocumentCheckIcon,
  MinusCircleIcon,
  ListBulletIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';

// @ts-expect-error Vue SFC import
import TopBar from '../../../../components/TopBar.vue';
// @ts-expect-error Vue SFC import
import DetailPageLayout from '../../../../components/layout/page-layouts/DetailPageLayout.vue';
// @ts-expect-error Vue SFC import
import ConfigPageLayout from '../../../../components/layout/page-layouts/ConfigPageLayout.vue';
// @ts-expect-error Vue SFC import
import DetailsKeyValue from '../../../../components/DetailsKeyValue.vue';

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
    label: 'Admin IT',
    itemType: 'profile_compact',
    initials: 'AT',
    name: 'Admin IT',
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

// ─── Interfaces ───

interface AssetDevice {
  id: number;
  assetTag: string;
  deviceName: string;
  type: string;
  assignedTo: string;
  os: string;
  osType: string;
  status: string;
  location: string;
  model: string;
  serialNumber: string;
  manufacturer: string;
  processor: string;
  memory: string;
  storage: string;
  purchaseDate: string;
  purchaseCost: string;
  warrantyExpiry: string;
  warrantyPeriod: string;
  vendor: string;
  poNumber: string;
  supplier: string;
  ownershipType: string;
  acknowledged: 'Pending' | 'Acknowledged' | 'Denied' | 'Not Requested';
  acknowledgedAt: string | null;
  acknowledgedBy: string | null;
  deniedAt: string | null;
  deniedBy: string | null;
  denialReason: string | null;
  acknowledgmentRequestedAt: string | null;
  acknowledgmentRequestedBy: string | null;
  reportedLostStolen: boolean;
  reportedLostStolenAt: string | null;
  reportedLostStolenBy: string | null;
}

interface HistoryEntry {
  id: number;
  action: string;
  performedBy: string;
  date: string;
  details: string;
}

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

interface AssetLocation {
  id: number;
  name: string;
  address: string;
  city: string;
  country: string;
  devicesCount: number;
  accessoriesCount: number;
}

// ─── Mock Data: Devices ───

const initialDeviceData: AssetDevice[] = [
  {
    id: 1, assetTag: 'AST-001', deviceName: 'Apple MacBook Pro 16"', type: 'Laptop',
    assignedTo: 'Jona Travis', os: 'MacOS 26.2', osType: 'mac',
    status: 'In Use', location: 'San Francisco HQ', model: 'MacBook Pro (16-inch, 2024)',
    serialNumber: 'C02ZW1KZMD6T', manufacturer: 'Apple',
    processor: 'Apple M3 Max', memory: '36 GB', storage: '1 TB SSD',
    purchaseDate: 'Jan 15, 2025', purchaseCost: '$3,499.00', warrantyExpiry: 'Jan 15, 2028',
    warrantyPeriod: '36 months', vendor: 'Apple Store', poNumber: 'PO-2025-0012', supplier: 'Apple',
    ownershipType: 'Company Owned',
    acknowledged: 'Acknowledged', acknowledgedAt: 'Feb 10, 2026 @ 03:15 PM',
    acknowledgedBy: 'Jona Travis', deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: 'Feb 08, 2026 @ 09:00 AM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 2, assetTag: 'AST-002', deviceName: 'Lenovo ThinkPad X1 Carbon', type: 'Laptop',
    assignedTo: 'Caterina Rossi', os: 'Ubuntu 22.04 LTS', osType: 'linux',
    status: 'In Use', location: 'Berlin Office', model: 'ThinkPad X1 Carbon Gen 11',
    serialNumber: 'PF3KXYZ1', manufacturer: 'Lenovo',
    processor: 'Intel Core i7-1365U', memory: '32 GB', storage: '512 GB SSD',
    purchaseDate: 'Mar 22, 2025', purchaseCost: '$1,849.00', warrantyExpiry: 'Mar 22, 2028',
    warrantyPeriod: '36 months', vendor: 'CDW', poNumber: 'PO-2025-0034', supplier: 'Lenovo',
    ownershipType: 'Company Owned',
    acknowledged: 'Pending', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: 'Feb 22, 2026 @ 10:00 AM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 3, assetTag: 'AST-003', deviceName: 'HP Spectre x360', type: 'Laptop',
    assignedTo: 'Shea Anderson', os: 'Windows 11 Pro', osType: 'windows',
    status: 'Lost', location: 'Austin Office', model: 'Spectre x360 14',
    serialNumber: '5CD2345XYZ', manufacturer: 'HP',
    processor: 'Intel Core i7-1355U', memory: '16 GB', storage: '512 GB SSD',
    purchaseDate: 'Nov 10, 2024', purchaseCost: '$1,599.00', warrantyExpiry: 'Nov 10, 2027',
    warrantyPeriod: '36 months', vendor: 'HP Direct', poNumber: 'PO-2024-0089', supplier: 'HP',
    ownershipType: 'Company Owned',
    acknowledged: 'Denied', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: 'Feb 14, 2026 @ 11:30 AM', deniedBy: 'Shea Anderson',
    denialReason: 'This device was never delivered to me. I believe it was assigned in error.',
    acknowledgmentRequestedAt: 'Feb 13, 2026 @ 08:00 AM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: true, reportedLostStolenAt: 'Feb 15, 2026 @ 09:45 AM', reportedLostStolenBy: 'Shea Anderson',
  },
  {
    id: 4, assetTag: 'AST-004', deviceName: 'Microsoft Surface Laptop 5', type: 'Laptop',
    assignedTo: 'Brycen Miller', os: 'Windows 11 Pro', osType: 'windows',
    status: 'Ready', location: 'San Francisco HQ', model: 'Surface Laptop 5',
    serialNumber: 'MS1234ABC', manufacturer: 'Microsoft',
    processor: 'Intel Core i7-1265U', memory: '16 GB', storage: '512 GB SSD',
    purchaseDate: 'Feb 01, 2025', purchaseCost: '$1,699.00', warrantyExpiry: 'Feb 01, 2028',
    warrantyPeriod: '36 months', vendor: 'Microsoft Store', poNumber: 'PO-2025-0019', supplier: 'Microsoft',
    ownershipType: 'Company Owned',
    acknowledged: 'Not Requested', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: null, acknowledgmentRequestedBy: null,
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 5, assetTag: 'AST-005', deviceName: 'Dell XPS 15', type: 'Laptop',
    assignedTo: 'Bryon Clarke', os: 'Windows 11 Pro', osType: 'windows',
    status: 'In Use', location: 'London Office', model: 'XPS 15 9530',
    serialNumber: 'DELL9876FG', manufacturer: 'Dell',
    processor: 'Intel Core i9-13900H', memory: '64 GB', storage: '2 TB SSD',
    purchaseDate: 'Apr 05, 2025', purchaseCost: '$2,799.00', warrantyExpiry: 'Apr 05, 2028',
    warrantyPeriod: '36 months', vendor: 'Dell Direct', poNumber: 'PO-2025-0045', supplier: 'Dell',
    ownershipType: 'Company Owned',
    acknowledged: 'Acknowledged', acknowledgedAt: 'Feb 12, 2026 @ 10:45 AM',
    acknowledgedBy: 'Bryon Clarke', deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: 'Feb 11, 2026 @ 02:00 PM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 6, assetTag: 'AST-006', deviceName: 'Apple MacBook Air M3', type: 'Laptop',
    assignedTo: 'Jalon Franco', os: 'MacOS 26.2', osType: 'mac',
    status: 'Maintenance', location: 'San Francisco HQ', model: 'MacBook Air (15-inch, M3, 2024)',
    serialNumber: 'C02AA2BBMD6T', manufacturer: 'Apple',
    processor: 'Apple M3', memory: '24 GB', storage: '512 GB SSD',
    purchaseDate: 'May 20, 2025', purchaseCost: '$1,499.00', warrantyExpiry: 'May 20, 2028',
    warrantyPeriod: '36 months', vendor: 'Apple Store', poNumber: 'PO-2025-0067', supplier: 'Apple',
    ownershipType: 'Company Owned',
    acknowledged: 'Pending', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: 'Feb 20, 2026 @ 11:30 AM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 7, assetTag: 'AST-007', deviceName: 'Razer Blade 15', type: 'Laptop',
    assignedTo: 'Arnulfo Reyes', os: 'Windows 11 Pro', osType: 'windows',
    status: 'Retired', location: 'Austin Office', model: 'Blade 15 Advanced',
    serialNumber: 'RZ09-456DEF', manufacturer: 'Razer',
    processor: 'Intel Core i9-13950HX', memory: '32 GB', storage: '1 TB SSD',
    purchaseDate: 'Aug 12, 2024', purchaseCost: '$3,199.00', warrantyExpiry: 'Aug 12, 2026',
    warrantyPeriod: '24 months', vendor: 'Amazon', poNumber: 'PO-2024-0102', supplier: 'Razer',
    ownershipType: 'Company Owned',
    acknowledged: 'Not Requested', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: null, acknowledgmentRequestedBy: null,
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 8, assetTag: 'AST-008', deviceName: 'Apple iMac 24"', type: 'Desktop',
    assignedTo: 'Antonie Weber', os: 'MacOS 26.2', osType: 'mac',
    status: 'In Use', location: 'Berlin Office', model: 'iMac (24-inch, M3, 2024)',
    serialNumber: 'C02CC3DDMD6T', manufacturer: 'Apple',
    processor: 'Apple M3', memory: '24 GB', storage: '1 TB SSD',
    purchaseDate: 'Jun 18, 2025', purchaseCost: '$1,999.00', warrantyExpiry: 'Jun 18, 2028',
    warrantyPeriod: '36 months', vendor: 'Apple Store', poNumber: 'PO-2025-0078', supplier: 'Apple',
    ownershipType: 'Company Owned',
    acknowledged: 'Denied', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: 'Feb 18, 2026 @ 04:00 PM', deniedBy: 'Antonie Weber',
    denialReason: 'I already returned this device to the IT department last month.',
    acknowledgmentRequestedAt: 'Feb 17, 2026 @ 09:00 AM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 9, assetTag: 'AST-009', deviceName: 'ASUS ZenBook 14', type: 'Laptop',
    assignedTo: 'Kael Harvey', os: 'Windows 11 Pro', osType: 'windows',
    status: 'In Use', location: 'London Office', model: 'ZenBook 14 UX3402',
    serialNumber: 'ASUS789GHI', manufacturer: 'ASUS',
    processor: 'Intel Core i7-1260P', memory: '16 GB', storage: '512 GB SSD',
    purchaseDate: 'Sep 30, 2024', purchaseCost: '$1,199.00', warrantyExpiry: 'Sep 30, 2027',
    warrantyPeriod: '36 months', vendor: 'Newegg', poNumber: 'PO-2024-0115', supplier: 'ASUS',
    ownershipType: 'BYOD',
    acknowledged: 'Acknowledged', acknowledgedAt: 'Feb 05, 2026 @ 09:20 AM',
    acknowledgedBy: 'Kael Harvey', deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: 'Feb 03, 2026 @ 10:00 AM', acknowledgmentRequestedBy: 'Admin IT',
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
  {
    id: 10, assetTag: 'AST-010', deviceName: 'Samsung Galaxy Book3 Pro', type: 'Laptop',
    assignedTo: 'Doug Chapman', os: 'Windows 11 Pro', osType: 'windows',
    status: 'Repair', location: 'San Francisco HQ', model: 'Galaxy Book3 Pro 14',
    serialNumber: 'SAM456JKL', manufacturer: 'Samsung',
    processor: 'Intel Core i7-1360P', memory: '16 GB', storage: '512 GB SSD',
    purchaseDate: 'Jul 14, 2024', purchaseCost: '$1,349.00', warrantyExpiry: 'Jul 14, 2027',
    warrantyPeriod: '36 months', vendor: 'Samsung Direct', poNumber: 'PO-2024-0130', supplier: 'Samsung',
    ownershipType: 'Company Owned',
    acknowledged: 'Not Requested', acknowledgedAt: null,
    acknowledgedBy: null, deniedAt: null, deniedBy: null, denialReason: null,
    acknowledgmentRequestedAt: null, acknowledgmentRequestedBy: null,
    reportedLostStolen: false, reportedLostStolenAt: null, reportedLostStolenBy: null,
  },
];

// ─── Mock Data: Accessories ───

const accessoryAssetsData: AssetAccessory[] = [
  { id: 1, assetTag: 'ACC-001', name: 'Apple Magic Keyboard', type: 'Keyboard', assignedTo: 'Jona Travis', status: 'In Use', location: 'San Francisco HQ', serialNumber: 'MK2C3LL/A' },
  { id: 2, assetTag: 'ACC-002', name: 'Logitech MX Master 3S', type: 'Mouse', assignedTo: 'Caterina Rossi', status: 'In Use', location: 'Berlin Office', serialNumber: '910-006556' },
  { id: 3, assetTag: 'ACC-003', name: 'Dell UltraSharp U2723QE', type: 'Monitor', assignedTo: 'Shea Anderson', status: 'In Use', location: 'Austin Office', serialNumber: 'CN-0A1B2C' },
  { id: 4, assetTag: 'ACC-004', name: 'CalDigit TS4 Thunderbolt', type: 'Dock', assignedTo: 'Brycen Miller', status: 'In Use', location: 'San Francisco HQ', serialNumber: 'CD-TS4-001' },
  { id: 5, assetTag: 'ACC-005', name: 'Sony WH-1000XM5', type: 'Headset', assignedTo: 'Bryon Clarke', status: 'Retired', location: 'London Office', serialNumber: 'SN-WH5-789' },
  { id: 6, assetTag: 'ACC-006', name: 'LG 27UK850-W', type: 'Monitor', assignedTo: 'Jalon Franco', status: 'In Use', location: 'San Francisco HQ', serialNumber: 'LG-27UK-456' },
];

// ─── Mock Data: Locations ───

const locationData: AssetLocation[] = [
  { id: 1, name: 'San Francisco HQ', address: '580 Howard St', city: 'San Francisco, CA', country: 'United States', devicesCount: 45, accessoriesCount: 120 },
  { id: 2, name: 'Berlin Office', address: 'Friedrichstraße 123', city: 'Berlin', country: 'Germany', devicesCount: 22, accessoriesCount: 55 },
  { id: 3, name: 'Austin Office', address: '1100 Congress Ave', city: 'Austin, TX', country: 'United States', devicesCount: 18, accessoriesCount: 42 },
  { id: 4, name: 'London Office', address: '30 Finsbury Square', city: 'London', country: 'United Kingdom', devicesCount: 31, accessoriesCount: 78 },
];

// ─── Mock Data: History ───

const historyData: HistoryEntry[] = [
  { id: 1, action: 'Asset Acknowledged', performedBy: 'Jona Travis', date: 'Feb 24, 2026 04:15 PM', details: 'Asset acknowledged by end user' },
  { id: 2, action: 'Acknowledgment Requested', performedBy: 'Admin IT', date: 'Feb 24, 2026 02:30 PM', details: 'Acknowledgment request sent to Jona Travis' },
  { id: 3, action: 'Status Changed', performedBy: 'Admin IT', date: 'Feb 22, 2026 10:00 AM', details: 'Status changed from Ready to In Use' },
  { id: 4, action: 'Owner Changed', performedBy: 'Admin IT', date: 'Feb 20, 2026 09:30 AM', details: 'Assigned to Jona Travis' },
  { id: 5, action: 'Reported Lost/Stolen', performedBy: 'Shea Anderson', date: 'Feb 15, 2026 09:45 AM', details: 'Device reported as lost by end user. Status changed to Lost.' },
  { id: 6, action: 'Location Changed', performedBy: 'System', date: 'Feb 15, 2026 09:00 AM', details: 'Moved from Austin Office to San Francisco HQ' },
  { id: 7, action: 'Acknowledgment Denied', performedBy: 'Shea Anderson', date: 'Feb 14, 2026 11:30 AM', details: 'Denied: This device was never delivered to me' },
  { id: 8, action: 'Acknowledgment Requested', performedBy: 'Admin IT', date: 'Feb 13, 2026 08:00 AM', details: 'Acknowledgment request sent to Shea Anderson' },
  { id: 9, action: 'Acknowledgment Reset', performedBy: 'Admin IT', date: 'Feb 10, 2026 02:00 PM', details: 'Acknowledgment status reset to Not Requested' },
  { id: 10, action: 'Warranty Updated', performedBy: 'Admin IT', date: 'Feb 08, 2026 03:15 PM', details: 'Extended warranty until Jan 15, 2028' },
  { id: 11, action: 'Asset Created', performedBy: 'Admin IT', date: 'Jan 15, 2025 02:00 PM', details: 'Initial asset registration' },
];

// ─── Custom Cell Components ───

const StatusCell = markRaw(defineComponent({
  name: 'StatusCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const status = props.data?.status as string;
      const severityMap: Record<string, string> = {
        'In Use': 'success', 'Ready': 'info', 'Retired': 'secondary',
        'Repair': 'warn', 'Maintenance': 'warn', 'Lost': 'danger',
      };
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, { severity: severityMap[status] || 'info', class: 'shrink-0 !normal-case' }, {
          default: () => status,
        }),
      ]);
    };
  },
}));

const AcknowledgedCell = markRaw(defineComponent({
  name: 'AcknowledgedCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const ack = props.data?.acknowledged as string;
      const severityMap: Record<string, string> = {
        Acknowledged: 'success', Pending: 'warn', Denied: 'danger', 'Not Requested': 'secondary',
      };
      const iconMap: Record<string, typeof CheckCircleIcon> = {
        Acknowledged: CheckCircleIcon, Pending: ExclamationTriangleIcon,
        Denied: XCircleIcon, 'Not Requested': MinusCircleIcon,
      };
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, { severity: severityMap[ack] || 'info', class: 'shrink-0 !normal-case' }, {
          icon: () => h(iconMap[ack] || MinusCircleIcon, { class: 'size-4' }),
          default: () => ack,
        }),
      ]);
    };
  },
}));

const ActionCell = markRaw(defineComponent({
  name: 'ActionCell',
  props: {
    data: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null },
  },
  setup(props) {
    return () => h('div', { class: 'flex items-center justify-center p-2 min-h-12' }, [
      h(Button, {
        severity: 'secondary',
        variant: 'text',
        size: 'small',
        rounded: true,
        onClick: (e: MouseEvent) => {
          e.stopPropagation();
          if (props.onAction) props.onAction(e, props.data);
        },
      }, {
        icon: () => h(EllipsisHorizontalIcon, { class: 'size-5' }),
      }),
    ]);
  },
}));

// ─── Column Definitions: Devices ───

const deviceAssetColumns = [
  {
    field: 'assetTag',
    header: 'Asset Tag',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.assetTag }),
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
    header: 'Owner',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.assignedTo }),
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
    width: '130px',
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'acknowledged',
    header: 'Acknowledgment',
    sortable: true,
    width: '170px',
    component: AcknowledgedCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'location',
    header: 'Location',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.location }),
  },
];

// ─── Column Definitions: Accessories ───

const accessoryColumns = [
  {
    field: 'assetTag', header: 'Asset Tag', sortable: true, width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.assetTag }),
  },
  {
    field: 'name', header: 'Name', sortable: true, width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.type, href: '#' }),
  },
  {
    field: 'type', header: 'Type', sortable: true, width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.type }),
  },
  {
    field: 'assignedTo', header: 'Assigned To', sortable: true, width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.assignedTo }),
  },
  {
    field: 'status', header: 'Status', sortable: true, width: '120px',
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'location', header: 'Location', sortable: true, width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.location }),
  },
];

// ─── Column Definitions: Locations ───

const locationColumns = [
  {
    field: 'name', header: 'Location', sortable: true, width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.address, href: '#' }),
  },
  {
    field: 'city', header: 'City', sortable: true, width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.city }),
  },
  {
    field: 'country', header: 'Country', sortable: true, width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.country }),
  },
  {
    field: 'devicesCount', header: 'Devices', sortable: true, width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.devicesCount) }),
  },
  {
    field: 'accessoriesCount', header: 'Accessories', sortable: true, width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.accessoriesCount) }),
  },
];

// ─── Column Definitions: History ───

const historyColumns = [
  {
    field: 'action', header: 'Action', sortable: true, width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.action }),
  },
  {
    field: 'performedBy', header: 'Performed By', sortable: true, width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.performedBy }),
  },
  {
    field: 'date', header: 'Date', sortable: true, width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.date }),
  },
  {
    field: 'details', header: 'Details', width: '300px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.details }),
  },
];

// ─── Tabs ───

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
  { label: 'Manage Fields', value: 'fields' },
];

// ─── Options ───

const assetTypeOptions = [
  { label: 'Laptop', value: 'laptop' },
  { label: 'Desktop', value: 'desktop' },
  { label: 'Tablet', value: 'tablet' },
  { label: 'Phone', value: 'phone' },
  { label: 'Monitor', value: 'monitor' },
];

const locationOptions = [
  { label: 'San Francisco HQ', value: 'sf' },
  { label: 'Berlin Office', value: 'berlin' },
  { label: 'Austin Office', value: 'austin' },
  { label: 'London Office', value: 'london' },
];

const statusOptions = [
  { label: 'In Use', value: 'In Use' },
  { label: 'Ready', value: 'Ready' },
  { label: 'Maintenance', value: 'Maintenance' },
  { label: 'Retired', value: 'Retired' },
  { label: 'Repair', value: 'Repair' },
  { label: 'Lost', value: 'Lost' },
];

const adminOptions = [
  { label: 'Admin IT', value: 'admin-it' },
  { label: 'Sarah Connor', value: 'sarah-connor' },
  { label: 'John Smith', value: 'john-smith' },
  { label: 'Emily Rodriguez', value: 'emily-rodriguez' },
  { label: 'Michael Chen', value: 'michael-chen' },
  { label: 'Lisa Thompson', value: 'lisa-thompson' },
];

const statusDefinitions = [
  { name: 'In Use', color: 'Green' },
  { name: 'Ready', color: 'Blue' },
  { name: 'Maintenance', color: 'Yellow' },
  { name: 'Lost', color: 'Red' },
  { name: 'Retired', color: 'Gray' },
  { name: 'Repair', color: 'Orange' },
];

const manageFieldsSubTabs = [
  { label: 'Global', value: 'global' },
  { label: 'Devices', value: 'devices' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Locations', value: 'locations' },
];

const deviceFieldsList = [
  { name: 'Status', type: 'Default Field', removable: false },
  { name: 'Serial Number', type: 'Default Field', removable: false },
  { name: 'Finance Owner', type: 'User', removable: true },
  { name: 'Location', type: 'Default Field', removable: false },
  { name: 'IT Owner', type: 'User', removable: true },
  { name: 'Ownership Type', type: 'Default Field', removable: false },
  { name: 'Date Deployed', type: 'Default Field', removable: false },
  { name: 'Owner', type: 'Default Field', removable: false },
  { name: 'Type', type: 'Default Field', removable: false },
  { name: "Device's Images", type: 'File Upload', removable: true },
];

// ─── Component Definition ───

const AdminAssetManagementPage = defineComponent({
  name: 'AdminAssetManagementPage',
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
    SeverityDialog,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvDialog: Dialog,
    PvDivider: Divider,
    PvMenu: Menu,
    PvSelectButton: SelectButton,
    PvMultiSelect: MultiSelect,
    TopBar,
    DetailPageLayout,
    ConfigPageLayout,
    DetailsKeyValue,
    ChevronRightIcon,
    Cog6ToothIcon,
    DocumentTextIcon,
    ClipboardDocumentCheckIcon,
    CurrencyDollarIcon,
    CpuChipIcon,
    AdjustmentsHorizontalIcon,
    ListBulletIcon,
    PencilIcon,
    XMarkIcon,
    ClockIcon,
    TrashIcon,
    PlusIcon,
    EllipsisHorizontalIcon,
    CheckCircleIcon,
    ExclamationTriangleIcon,
    XCircleIcon,
    MinusCircleIcon,
  },
  setup() {
    // ─── View State ───
    const currentView = ref<'list' | 'detail' | 'settings'>('list');
    const activeListTab = ref('devices');
    const activeDetailTab = ref('overview');
    const activeSettingsTab = ref('general');

    // ─── Data ───
    const assets = ref<AssetDevice[]>(JSON.parse(JSON.stringify(initialDeviceData)));
    const selectedAsset = ref<AssetDevice | null>(null);
    const selectedDevices = ref<AssetDevice[]>([]);
    const rowActionAsset = ref<AssetDevice | null>(null);

    // ─── Dialog State ───
    const showRequestAckDialog = ref(false);
    const showBulkRequestAckDialog = ref(false);
    const showResetAckDialog = ref(false);
    const showAddAssetDialog = ref(false);

    // ─── Form State ───
    const ackRequestNote = ref('');
    const newAssetName = ref('');
    const newAssetTag = ref('');
    const newAssetType = ref(null);
    const newAssetLocation = ref(null);
    const newAssetSerialNumber = ref('');
    const newAssetAssignedTo = ref('');

    // ─── Settings State ───
    const assetMgmtEnabled = ref(true);
    const abmEnabled = ref(true);
    const lenovoWarrantySync = ref(true);
    const autoAssignTags = ref(true);
    const trackWarranty = ref(true);
    const ackEnabled = ref(true);
    const ackAutoStatus = ref(null);
    const denyAutoStatus = ref(null);
    const notifyOnAckDeny = ref(true);
    const notifyAdminsOnAckDeny = ref<string[]>(['admin-it']);
    const lostStolenAutoStatus = ref(null);
    const manageFieldsSubTab = ref('devices');

    // ─── Collapsed Panel State ───
    const assetDetailsCollapsed = ref(false);
    const ackPanelCollapsed = ref(true);
    const purchaseDetailsCollapsed = ref(false);
    const hardwareSpecCollapsed = ref(false);

    // ─── Template Refs ───
    const assetMenuRef = ref();
    const bulkMenuRef = ref();

    // ─── Computed ───
    const pageTitle = computed(() => {
      if (currentView.value === 'detail' && selectedAsset.value) return selectedAsset.value.deviceName;
      if (currentView.value === 'settings') return 'Asset Management Settings';
      return 'Asset Management';
    });

    const pageIcon = computed(() => {
      if (currentView.value === 'settings') return markRaw(Cog6ToothIcon);
      if (currentView.value === 'detail') return markRaw(ComputerDesktopIcon);
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

    const assetMenuModel = computed(() => {
      const asset = rowActionAsset.value;
      const items: Record<string, unknown>[] = [
        { label: 'Clone Device', command: () => {} },
        { label: 'Change Status', command: () => {} },
        { label: 'Change Location', command: () => {} },
        { label: 'Change Type', command: () => {} },
        { label: 'Change Owner', command: () => {} },
        { separator: true },
      ];

      if (asset?.acknowledged === 'Acknowledged') {
        items.push({ label: 'Reset Acknowledgment', command: () => { showResetAckDialog.value = true; } });
      } else {
        items.push({ label: 'Request Acknowledgment', command: () => { showRequestAckDialog.value = true; } });
      }

      items.push({ separator: true });
      items.push({ label: 'Delete Device', command: () => {}, class: 'text-error-base' });
      return items;
    });

    const bulkMenuModel = computed(() => [
      { label: 'Change Status', command: () => {} },
      { label: 'Change Location', command: () => {} },
      { label: 'Change Type', command: () => {} },
      { label: 'Change Owner', command: () => {} },
      { label: 'Update Fields', command: () => {} },
      { separator: true },
      { label: 'Request Acknowledgment', command: () => { showBulkRequestAckDialog.value = true; } },
      { separator: true },
      { label: 'Delete Devices', command: () => {}, class: 'text-error-base' },
    ]);

    const recentHistory = computed(() => historyData.slice(0, 5));

    const resetAckContent = computed(() => {
      if (!rowActionAsset.value) return '';
      return `This will reset the acknowledgment status for **${rowActionAsset.value.deviceName}** (${rowActionAsset.value.assetTag}) back to Not Requested. The assigned user may need to re-acknowledge the asset.`;
    });

    // ─── Functions ───
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

    function handleRowClick(row: { data: AssetDevice }) {
      openAssetDetail(row.data);
    }

    function handleRowAction(event: MouseEvent, asset: AssetDevice) {
      rowActionAsset.value = asset;
      assetMenuRef.value?.toggle(event);
    }

    function toggleDetailActions(event: MouseEvent) {
      rowActionAsset.value = selectedAsset.value;
      assetMenuRef.value?.toggle(event);
    }

    function toggleBulkActions(event: MouseEvent) {
      bulkMenuRef.value?.toggle(event);
    }

    function formatNow(): string {
      const now = new Date();
      return now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        + ' @ '
        + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }

    function confirmRequestAck() {
      const target = rowActionAsset.value;
      if (!target) return;
      const asset = assets.value.find(a => a.id === target.id);
      if (asset) {
        asset.acknowledged = 'Pending';
        asset.acknowledgmentRequestedAt = formatNow();
        asset.acknowledgmentRequestedBy = 'Admin IT';
        asset.deniedAt = null;
        asset.deniedBy = null;
        asset.denialReason = null;
        if (selectedAsset.value?.id === asset.id) selectedAsset.value = { ...asset };
      }
      showRequestAckDialog.value = false;
      ackRequestNote.value = '';
    }

    function confirmBulkRequestAck() {
      const now = formatNow();
      selectedDevices.value.forEach((device: AssetDevice) => {
        const asset = assets.value.find(a => a.id === device.id);
        if (asset) {
          asset.acknowledged = 'Pending';
          asset.acknowledgmentRequestedAt = now;
          asset.acknowledgmentRequestedBy = 'Admin IT';
        }
      });
      showBulkRequestAckDialog.value = false;
      ackRequestNote.value = '';
    }

    function confirmResetAck() {
      const target = rowActionAsset.value;
      if (!target) return;
      const asset = assets.value.find(a => a.id === target.id);
      if (asset) {
        asset.acknowledged = 'Not Requested';
        asset.acknowledgedAt = null;
        asset.acknowledgedBy = null;
        asset.deniedAt = null;
        asset.deniedBy = null;
        asset.denialReason = null;
        asset.acknowledgmentRequestedAt = null;
        asset.acknowledgmentRequestedBy = null;
        if (selectedAsset.value?.id === asset.id) selectedAsset.value = { ...asset };
      }
      showResetAckDialog.value = false;
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

    function requestAckFromDetail() {
      rowActionAsset.value = selectedAsset.value;
      showRequestAckDialog.value = true;
    }

    function resetAckFromDetail() {
      rowActionAsset.value = selectedAsset.value;
      showResetAckDialog.value = true;
    }

    // ─── Columns with Actions (needs closure) ───
    const deviceColumnsWithActions = [
      ...deviceAssetColumns.map(col => {
        if (col.field === 'deviceName') {
          return {
            ...col,
            componentProps: (sp: { data: Record<string, unknown> }) => ({
              label: sp.data.deviceName,
              description: sp.data.serialNumber,
              href: '#',
              onClick: (event: MouseEvent) => {
                event.preventDefault();
                openAssetDetail(sp.data as unknown as AssetDevice);
              },
            }),
          };
        }
        return col;
      }),
      {
        field: 'actions',
        header: 'Actions',
        width: '80px',
        component: ActionCell,
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          data: sp.data,
          onAction: (event: MouseEvent, data: Record<string, unknown>) => {
            handleRowAction(event, data as unknown as AssetDevice);
          },
        }),
      },
    ];

    return {
      currentView, activeListTab, activeDetailTab, activeSettingsTab,
      assets, selectedAsset, selectedDevices, rowActionAsset,
      showRequestAckDialog, showBulkRequestAckDialog, showResetAckDialog, showAddAssetDialog,
      ackRequestNote, newAssetName, newAssetTag, newAssetType, newAssetLocation,
      newAssetSerialNumber, newAssetAssignedTo,
      assetMgmtEnabled, abmEnabled, lenovoWarrantySync, autoAssignTags, trackWarranty,
      ackEnabled, ackAutoStatus, denyAutoStatus, lostStolenAutoStatus,
      notifyOnAckDeny, notifyAdminsOnAckDeny, manageFieldsSubTab,
      assetDetailsCollapsed, ackPanelCollapsed, purchaseDetailsCollapsed, hardwareSpecCollapsed,
      assetMenuRef, bulkMenuRef,
      pageTitle, pageIcon, pageTabs, activeTab,
      assetMenuModel, bulkMenuModel, recentHistory, resetAckContent,
      handleTabChange, openAssetDetail, backToList, openSettings,
      handleRowClick, handleRowAction, toggleDetailActions, toggleBulkActions,
      confirmRequestAck, confirmBulkRequestAck, confirmResetAck,
      openAddAsset, requestAckFromDetail, resetAckFromDetail,
      menuItems, profileMenuItems,
      deviceColumnsWithActions, accessoryColumns, locationColumns,
      accessoryAssetsData, locationData,
      historyData, historyColumns,
      assetTypeOptions, locationOptions, statusOptions, adminOptions,
      statusDefinitions, manageFieldsSubTabs, deviceFieldsList,
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

        <!-- TopBar -->
        <TopBar v-if="currentView === 'list'" />
        <TopBar v-else showBackButton backButtonLabel="Asset Management" @back="backToList" />

        <!-- PageHeader -->
        <PageHeader
          :title="pageTitle"
          :icon="pageIcon"
          :tabs="pageTabs"
          :activeTab="activeTab"
          @update:activeTab="handleTabChange"
        >
          <template v-if="currentView === 'detail' && selectedAsset" #subtitle>
            <div class="flex items-center">
              <PvTag :value="selectedAsset.assetTag" severity="secondary" class="!normal-case" />
              <PvDivider layout="vertical" class="my-0!" />
              <span class="text-body-sm text-neutral-subtle">Serial Number&nbsp;</span>
              <span class="text-body-sm text-neutral-base">{{ selectedAsset.serialNumber }}</span>
            </div>
          </template>
          <template #actions>
            <template v-if="currentView === 'list'">
              <PvButton label="Actions" severity="secondary" variant="outlined" @click="toggleBulkActions($event)" />
              <PvButton label="Settings" severity="secondary" variant="outlined" @click="openSettings">
                <template #icon>
                  <Cog6ToothIcon class="size-5" />
                </template>
              </PvButton>
            </template>
            <template v-if="currentView === 'detail'">
              <PvButton label="Actions" severity="secondary" variant="outlined" @click="toggleDetailActions($event)" />
            </template>
          </template>
        </PageHeader>

        <!-- ═══════════════ LIST VIEW ═══════════════ -->
        <template v-if="currentView === 'list'">

          <!-- Devices Tab -->
          <div v-if="activeListTab === 'devices'" class="flex-1 flex flex-col min-h-0 overflow-hidden px-6 pt-6 relative bg-neutral-surface">
              <CircuitDataTable
                :columns="deviceColumnsWithActions"
                :data="assets"
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
              >
                <template #toolbar>
                  <DataTableToolbar
                    searchPlaceholder="Search devices..."
                    :showAddButton="true"
                    addButtonLabel="Add Asset"
                    @add="openAddAsset"
                    :showFilterButton="true"
                    :showRefreshButton="true"
                    :showColumnsButton="true"
                  />
                </template>
              </CircuitDataTable>
          </div>

          <!-- Accessories Tab -->
          <div v-if="activeListTab === 'accessories'" class="flex-1 flex flex-col min-h-0 overflow-hidden px-6 pt-6 relative bg-neutral-surface">
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
              >
                <template #toolbar>
                  <DataTableToolbar
                    searchPlaceholder="Search accessories..."
                    :showAddButton="true"
                    addButtonLabel="Add Accessory"
                    @add="openAddAsset"
                    :showFilterButton="true"
                    :showRefreshButton="true"
                    :showColumnsButton="true"
                  />
                </template>
              </CircuitDataTable>
          </div>

          <!-- Locations Tab -->
          <div v-if="activeListTab === 'locations'" class="flex-1 flex flex-col min-h-0 overflow-hidden px-6 pt-6 relative bg-neutral-surface">
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
              >
                <template #toolbar>
                  <DataTableToolbar
                    searchPlaceholder="Search locations..."
                    :showAddButton="true"
                    addButtonLabel="Add Location"
                    @add="openAddAsset"
                    :showFilterButton="true"
                    :showRefreshButton="true"
                  />
                </template>
              </CircuitDataTable>
          </div>
        </template>

        <!-- ═══════════════ DETAIL VIEW ═══════════════ -->
        <template v-if="currentView === 'detail' && selectedAsset">

          <!-- Overview Tab -->
          <DetailPageLayout v-if="activeDetailTab === 'overview'" class="w-full! flex-1! min-h-0!">
            <div class="flex flex-col gap-6">

              <!-- Lost/Stolen Banner -->
              <MessageNotification
                v-if="selectedAsset.reportedLostStolen"
                severity="error"
                title="Reported Lost/Stolen"
                :detail="'This asset was reported as lost/stolen by ' + selectedAsset.reportedLostStolenBy + ' on ' + selectedAsset.reportedLostStolenAt + '.'"
              />

              <!-- Asset Details -->
              <CollapsiblePanel
                v-model:collapsed="assetDetailsCollapsed"
                toggleable
                header="Asset Details"
              >
                <template #titleicon="iconProps">
                  <DocumentTextIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <PvButton label="Edit" variant="outlined" severity="secondary" size="small">
                    <template #icon><PencilIcon class="size-4" /></template>
                  </PvButton>
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-4">
                  <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                    <DetailsKeyValue label="Name" :value="selectedAsset.deviceName" />
                    <DetailsKeyValue label="Status">
                      <PvTag :value="selectedAsset.status" :severity="{ 'In Use': 'success', 'Ready': 'info', 'Retired': 'secondary', 'Repair': 'warn', 'Maintenance': 'warn', 'Lost': 'danger' }[selectedAsset.status] || 'info'" class="!normal-case" />
                    </DetailsKeyValue>
                    <DetailsKeyValue label="Asset Tag" :value="selectedAsset.assetTag" />
                    <DetailsKeyValue label="Serial Number" :value="selectedAsset.serialNumber" />
                    <DetailsKeyValue label="Owner">
                      <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.assignedTo }}</a>
                    </DetailsKeyValue>
                    <DetailsKeyValue label="Location" :value="selectedAsset.location" />
                    <DetailsKeyValue label="Type" :value="selectedAsset.type" />
                    <DetailsKeyValue label="Ownership Type" :value="selectedAsset.ownershipType" />
                    <DetailsKeyValue label="Manufacturer" :value="selectedAsset.manufacturer" />
                    <DetailsKeyValue label="Model" :value="selectedAsset.model" />
                    <DetailsKeyValue v-if="selectedAsset.reportedLostStolen" label="Reported Lost/Stolen By">
                      <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.reportedLostStolenBy }}</a>
                    </DetailsKeyValue>
                    <DetailsKeyValue v-if="selectedAsset.reportedLostStolen" label="Reported Lost/Stolen At" :value="selectedAsset.reportedLostStolenAt" />
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- Acknowledgment -->
              <CollapsiblePanel
                v-model:collapsed="ackPanelCollapsed"
                :toggleable="selectedAsset.acknowledged !== 'Not Requested'"
                header="Acknowledgment"
              >
                <template #titleicon="iconProps">
                  <ClipboardDocumentCheckIcon :class="iconProps.class" />
                </template>
                <template #actions>
                  <div class="flex items-center">
                    <PvTag v-if="selectedAsset.acknowledged === 'Acknowledged'" value="Acknowledged" severity="success" class="!normal-case">
                      <template #icon><CheckCircleIcon class="size-4" /></template>
                    </PvTag>
                    <PvTag v-else-if="selectedAsset.acknowledged === 'Denied'" value="Denied" severity="danger" class="!normal-case">
                      <template #icon><XCircleIcon class="size-4" /></template>
                    </PvTag>
                    <PvTag v-else-if="selectedAsset.acknowledged === 'Pending'" value="Pending" severity="warn" class="!normal-case">
                      <template #icon><ExclamationTriangleIcon class="size-4" /></template>
                    </PvTag>
                    <PvTag v-else value="Not Requested" severity="secondary" class="!normal-case">
                      <template #icon><MinusCircleIcon class="size-4" /></template>
                    </PvTag>
                    <template v-if="selectedAsset.acknowledged !== 'Pending'">
                      <PvDivider layout="vertical" class="my-0!" />
                      <PvButton
                        v-if="selectedAsset.acknowledged === 'Not Requested'"
                        label="Request"
                        variant="outlined"
                        severity="secondary"
                        size="small"
                        @click="requestAckFromDetail"
                      />
                      <PvButton
                        v-else-if="selectedAsset.acknowledged === 'Acknowledged'"
                        label="Reset"
                        variant="outlined"
                        severity="secondary"
                        size="small"
                        @click="resetAckFromDetail"
                      />
                      <PvButton
                        v-else-if="selectedAsset.acknowledged === 'Denied'"
                        label="Request Again"
                        variant="outlined"
                        severity="secondary"
                        size="small"
                        @click="requestAckFromDetail"
                      />
                    </template>
                  </div>
                </template>
                <template v-if="selectedAsset.acknowledged !== 'Not Requested'" #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div v-if="selectedAsset.acknowledged !== 'Not Requested'" class="flex flex-col gap-4">

                  <!-- Pending -->
                  <template v-if="selectedAsset.acknowledged === 'Pending'">
                    <div class="flex flex-col gap-4">
                      <DetailsKeyValue label="Assigned To">
                        <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.assignedTo }}</a>
                      </DetailsKeyValue>
                      <DetailsKeyValue label="Requested At" :value="selectedAsset.acknowledgmentRequestedAt" />
                      <DetailsKeyValue label="Requested By">
                        <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.acknowledgmentRequestedBy }}</a>
                      </DetailsKeyValue>
                    </div>
                  </template>

                  <!-- Acknowledged -->
                  <template v-if="selectedAsset.acknowledged === 'Acknowledged'">
                    <div class="flex flex-col gap-4">
                      <DetailsKeyValue label="Acknowledged By">
                        <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.acknowledgedBy }}</a>
                      </DetailsKeyValue>
                      <DetailsKeyValue label="Acknowledged At" :value="selectedAsset.acknowledgedAt" />
                      <DetailsKeyValue label="Requested By">
                        <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.acknowledgmentRequestedBy }}</a>
                      </DetailsKeyValue>
                      <DetailsKeyValue label="Requested At" :value="selectedAsset.acknowledgmentRequestedAt" />
                    </div>
                  </template>

                  <!-- Denied -->
                  <template v-if="selectedAsset.acknowledged === 'Denied'">
                    <div class="flex flex-col gap-4">
                      <DetailsKeyValue label="Denied By">
                        <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.deniedBy }}</a>
                      </DetailsKeyValue>
                      <DetailsKeyValue label="Denied At" :value="selectedAsset.deniedAt" />
                      <DetailsKeyValue label="Denial Reason" :value="selectedAsset.denialReason" />
                      <DetailsKeyValue label="Requested At" :value="selectedAsset.acknowledgmentRequestedAt" />
                      <DetailsKeyValue label="Requested By">
                        <a href="#" class="text-body-md py-0.5 text-info-base hover:underline">{{ selectedAsset.acknowledgmentRequestedBy }}</a>
                      </DetailsKeyValue>
                    </div>
                  </template>

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
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <DetailsKeyValue label="Purchase Date" :value="selectedAsset.purchaseDate" />
                  <DetailsKeyValue label="Purchase Cost" :value="selectedAsset.purchaseCost" />
                  <DetailsKeyValue label="PO Number" :value="selectedAsset.poNumber" />
                  <DetailsKeyValue label="Warranty Period" :value="selectedAsset.warrantyPeriod" />
                  <DetailsKeyValue label="Warranty Expiry" :value="selectedAsset.warrantyExpiry" />
                  <DetailsKeyValue label="Supplier" :value="selectedAsset.supplier" />
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
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <DetailsKeyValue label="Operating System" :value="selectedAsset.os" />
                  <DetailsKeyValue label="Model" :value="selectedAsset.model" />
                  <DetailsKeyValue label="Manufacturer" :value="selectedAsset.manufacturer" />
                  <DetailsKeyValue label="Processor" :value="selectedAsset.processor" />
                  <DetailsKeyValue label="Memory" :value="selectedAsset.memory" />
                  <DetailsKeyValue label="Storage" :value="selectedAsset.storage" />
                </div>
              </CollapsiblePanel>

            </div>

            <template #sidebar>
              <div class="flex flex-col gap-4">
                <div class="flex items-center justify-between">
                  <h3 class="text-heading-4 text-neutral-base">Recent History</h3>
                  <PvButton label="See All History" severity="secondary" variant="text" size="small" @click="activeDetailTab = 'history'" />
                </div>
                <PvButton label="Add Note" severity="secondary" variant="outlined" size="small" class="self-start" />
                <div class="flex flex-col gap-3">
                  <div v-for="entry in recentHistory" :key="entry.id" class="flex flex-col gap-0.5 border-l-2 border-info-base pl-3 py-1">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-body-sm-bold text-info-base">{{ entry.performedBy }}</span>
                      <span class="text-body-sm text-neutral-subtle">{{ entry.date }}</span>
                    </div>
                    <span class="text-body-sm text-neutral-base">{{ entry.action }}</span>
                    <span class="text-body-sm text-neutral-subtle">{{ entry.details }}</span>
                  </div>
                </div>
              </div>
            </template>
          </DetailPageLayout>

          <!-- History Tab -->
          <div v-if="activeDetailTab === 'history'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search history..."
                :showAddButton="true"
                addButtonLabel="Add Note"
                :showFilterButton="true"
                :showRefreshButton="true"
              >
                <template #end>
                  <PvButton label="Export" severity="secondary" variant="outlined" size="small" />
                </template>
              </DataTableToolbar>
            </div>
            <div class="flex-1 overflow-y-auto px-6 pb-6">
              <div class="flex flex-col gap-0">
                <div v-for="entry in historyData" :key="entry.id" class="flex items-start gap-3 py-3 border-b border-neutral-default_solid last:border-b-0">
                  <div class="mt-1.5 size-2 rounded-full bg-info-base shrink-0"></div>
                  <div class="flex flex-col gap-0.5 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                      <span class="text-body-md-semi-bold text-info-base">{{ entry.performedBy }}</span>
                      <span class="text-body-sm text-neutral-subtle">{{ entry.action }}</span>
                      <span class="text-body-sm text-neutral-subtle">{{ entry.date }}</span>
                    </div>
                    <span class="text-body-sm text-neutral-subtle">{{ entry.details }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- ═══════════════ SETTINGS VIEW ═══════════════ -->
        <template v-if="currentView === 'settings'">

          <!-- General Settings Tab -->
          <ConfigPageLayout v-if="activeSettingsTab === 'general'" class="w-full! flex-1! min-h-0!" maxWidth="1024">
            <div class="flex flex-col gap-6">

              <!-- Asset Management Enabled -->
              <div class="flex items-center gap-4 p-md border border-neutral-default_solid rounded-lg bg-neutral-base">
                <ToggleSwitch v-model="assetMgmtEnabled" />
                <div class="flex flex-col gap-0.5 flex-1">
                  <span class="text-body-md-semi-bold text-neutral-base">Asset Management Enabled</span>
                  <span class="text-body-sm text-neutral-subtle">Gain full control over your organization's assets with streamlined tracking and management.</span>
                </div>
              </div>

              <!-- Apple Business Manager Enabled -->
              <div class="flex items-center gap-4 p-md border border-neutral-default_solid rounded-lg bg-neutral-base">
                <ToggleSwitch v-model="abmEnabled" />
                <div class="flex flex-col gap-0.5 flex-1">
                  <span class="text-body-md-semi-bold text-neutral-base">Apple Business Manager Enabled</span>
                  <span class="text-body-sm text-neutral-subtle">Automatically sync devices from Apple Business Manager (ABM) with Asset Management.</span>
                </div>
                <PvButton label="Configure" variant="outlined" severity="secondary" size="small" />
              </div>

              <!-- Lenovo Warranty Sync -->
              <div class="flex items-center gap-4 p-md border border-neutral-default_solid rounded-lg bg-neutral-base">
                <ToggleSwitch v-model="lenovoWarrantySync" />
                <div class="flex flex-col gap-0.5 flex-1">
                  <span class="text-body-md-semi-bold text-neutral-base">Lenovo Warranty Sync</span>
                  <span class="text-body-sm text-neutral-subtle">Set up connection to auto-sync warranty and purchase details for your org assets.</span>
                </div>
              </div>

              <!-- Acknowledgment Settings -->
              <CollapsiblePanel header="Acknowledgment Settings">
                <template #titleicon="iconProps">
                  <ClipboardDocumentCheckIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <div class="flex flex-col gap-1">
                      <span class="text-body-md-semi-bold text-neutral-base">Enable Asset Acknowledgment</span>
                      <span class="text-body-sm text-neutral-subtle">Require end users to acknowledge assets assigned to them via the User Portal.</span>
                    </div>
                    <ToggleSwitch v-model="ackEnabled" />
                  </div>
                  <template v-if="ackEnabled">
                    <PvDivider />
                    <div class="flex items-center justify-between">
                      <div class="flex flex-col gap-1">
                        <span class="text-body-md-semi-bold text-neutral-base">Notify Admins on Acknowledgment & Denial</span>
                        <span class="text-body-sm text-neutral-subtle">Send email notifications to selected admins when an end user acknowledges or denies an asset.</span>
                      </div>
                      <ToggleSwitch v-model="notifyOnAckDeny" />
                    </div>
                    <div v-if="notifyOnAckDeny" class="pl-0">
                      <FormField label="Select admins to notify">
                        <template #default="{ inputId }">
                          <PvMultiSelect :id="inputId" v-model="notifyAdminsOnAckDeny" :options="adminOptions" optionLabel="label" optionValue="value" class="w-full" placeholder="Select admins..." :filter="true" filterPlaceholder="Search admins..." display="chip" :showToggleAll="false" />
                        </template>
                      </FormField>
                    </div>
                  </template>
                </div>
              </CollapsiblePanel>

            </div>
          </ConfigPageLayout>

          <!-- Manage Fields Tab -->
          <ConfigPageLayout v-if="activeSettingsTab === 'fields'" class="w-full! flex-1! min-h-0!" maxWidth="1280">
            <div class="flex flex-col gap-6">
              <div class="px-6 py-3 border-b border-neutral-default_solid">
                <PvSelectButton v-model="manageFieldsSubTab" :options="manageFieldsSubTabs" optionLabel="label" optionValue="value" />
              </div>

              <!-- Devices sub-tab -->
              <template v-if="manageFieldsSubTab === 'devices'">
                <div class="grid grid-cols-2 gap-6">
                  <div class="flex flex-col gap-4">
                    <CollapsiblePanel header="Asset Details" toggleable>
                      <template #titleicon="iconProps">
                        <DocumentTextIcon :class="iconProps.class" />
                      </template>
                      <template #toggleicon="iconProps">
                        <ChevronRightIcon :class="iconProps.class" />
                      </template>
                      <div class="flex flex-col gap-0">
                        <div v-for="field in deviceFieldsList" :key="field.name" class="flex items-center justify-between py-2 px-3 border-b border-neutral-default_solid last:border-b-0 hover:bg-neutral-surface rounded">
                          <div class="flex items-center gap-2">
                            <EllipsisHorizontalIcon class="size-4 text-neutral-subtle cursor-grab" />
                            <span class="text-body-md text-neutral-base">{{ field.name }}</span>
                            <PvTag :value="field.type" severity="secondary" class="text-body-sm !normal-case" />
                          </div>
                          <PvButton v-if="field.removable" severity="secondary" variant="text" size="small" rounded>
                            <template #icon><TrashIcon class="size-4" /></template>
                          </PvButton>
                        </div>
                      </div>
                      <template #actions>
                        <PvButton label="Add Field" variant="outlined" severity="secondary" size="small">
                          <template #icon><PlusIcon class="size-4" /></template>
                        </PvButton>
                      </template>
                    </CollapsiblePanel>
                  </div>

                  <div class="flex flex-col gap-6">
                    <!-- Status Definitions -->
                    <div class="flex flex-col gap-4">
                      <h3 class="text-heading-4 text-neutral-base">Status</h3>
                      <div class="flex flex-col gap-0">
                        <div v-for="status in statusDefinitions" :key="status.name" class="flex items-center justify-between py-2 px-3 border-b border-neutral-default_solid last:border-b-0">
                          <div class="flex items-center gap-3">
                            <EllipsisHorizontalIcon class="size-4 text-neutral-subtle cursor-grab" />
                            <PvInputText :modelValue="status.name" class="w-40" />
                            <PvSelect :modelValue="status.color" :options="['Green','Blue','Yellow','Red','Gray','Orange']" class="w-28" />
                          </div>
                          <PvButton severity="secondary" variant="text" size="small" rounded>
                            <template #icon><TrashIcon class="size-4" /></template>
                          </PvButton>
                        </div>
                      </div>
                      <PvButton label="Add Status" variant="outlined" severity="secondary" size="small" class="self-start">
                        <template #icon><PlusIcon class="size-4" /></template>
                      </PvButton>
                    </div>

                    <!-- Acknowledgment Status Mapping -->
                    <div class="flex flex-col gap-4">
                      <h3 class="text-heading-4 text-neutral-base">Acknowledgment Status Mapping</h3>
                      <div class="flex flex-col border border-neutral-default_solid rounded-lg overflow-hidden">
                        <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
                          <span class="text-body-md text-neutral-base"><strong>Default</strong> Status on Acknowledgment:</span>
                          <PvSelect v-model="ackAutoStatus" :options="statusOptions" optionLabel="label" optionValue="value" class="w-40" placeholder="No change" />
                        </div>
                        <div class="flex items-center justify-between px-4 py-3">
                          <span class="text-body-md text-neutral-base"><strong>Default</strong> Status on Denial:</span>
                          <PvSelect v-model="denyAutoStatus" :options="statusOptions" optionLabel="label" optionValue="value" class="w-40" placeholder="No change" />
                        </div>
                      </div>
                    </div>

                    <!-- Lost/Stolen Status Mapping -->
                    <div class="flex flex-col gap-4">
                      <h3 class="text-heading-4 text-neutral-base">Lost/Stolen Status Mapping</h3>
                      <div class="flex flex-col border border-neutral-default_solid rounded-lg overflow-hidden">
                        <div class="flex items-center justify-between px-4 py-3">
                          <span class="text-body-md text-neutral-base"><strong>Default</strong> Status on Lost/Stolen Report:</span>
                          <PvSelect v-model="lostStolenAutoStatus" :options="statusOptions" optionLabel="label" optionValue="value" class="w-40" placeholder="Lost" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- Global sub-tab -->
              <template v-if="manageFieldsSubTab === 'global'">
                <div class="flex flex-col gap-4 px-6">
                  <p class="text-body-md text-neutral-subtle">Global field settings apply across all asset types.</p>
                  <div class="flex flex-col gap-3">
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Show acknowledgment status in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Show asset tag field in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Show warranty expiry in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="false">
                      <template #label>Show purchase cost in list view</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel :modelValue="true">
                      <template #label>Require location for all assets</template>
                    </CheckboxWithLabel>
                  </div>
                </div>
              </template>

              <!-- Accessories sub-tab -->
              <template v-if="manageFieldsSubTab === 'accessories'">
                <div class="flex flex-col gap-4 px-6">
                  <p class="text-body-md text-neutral-subtle">Configure fields specific to accessory assets.</p>
                </div>
              </template>

              <!-- Locations sub-tab -->
              <template v-if="manageFieldsSubTab === 'locations'">
                <div class="flex flex-col gap-4 px-6">
                  <p class="text-body-md text-neutral-subtle">Configure fields specific to location records.</p>
                </div>
              </template>
            </div>
          </ConfigPageLayout>

          <!-- Settings Footer -->
          <div class="shrink-0 flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base">
            <PvButton label="Cancel" severity="secondary" variant="text" @click="backToList" />
            <PvButton label="Save" />
          </div>
        </template>

        <!-- ═══════════════ DIALOGS ═══════════════ -->

        <!-- Request Acknowledgment Dialog (single) -->
        <PvDialog
          v-model:visible="showRequestAckDialog"
          :draggable="false"
          modal
          header="Request Acknowledgment"
          :style="{ width: '560px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-4">
            <p class="text-body-md text-neutral-base">
              You are about to send an acknowledgment request to <strong>{{ rowActionAsset?.assignedTo }}</strong> for <strong>{{ rowActionAsset?.deviceName }}</strong> ({{ rowActionAsset?.assetTag }}).
            </p>
            <MessageNotification
              severity="info"
              title="Email notification"
              detail="The assigned user will receive an email notification and can acknowledge or deny the asset from the User Portal."
            />
            <FormField label="Note (Optional)">
              <template #default="{ inputId }">
                <PvTextarea :id="inputId" v-model="ackRequestNote" class="w-full" rows="3" placeholder="Add an optional note for the user..." />
              </template>
            </FormField>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm whitespace-nowrap">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showRequestAckDialog = false" />
              <PvButton label="Send Request" @click="confirmRequestAck" />
            </div>
          </template>
        </PvDialog>

        <!-- Bulk Request Acknowledgment Dialog -->
        <PvDialog
          v-model:visible="showBulkRequestAckDialog"
          :draggable="false"
          modal
          header="Request Acknowledgment"
          :style="{ width: '560px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-4">
            <p class="text-body-md text-neutral-base">
              You are about to send acknowledgment requests for <strong>{{ selectedDevices.length }} assets</strong> to their assigned users.
            </p>
            <MessageNotification
              severity="info"
              title="Email notifications"
              detail="Each assigned user will receive an email notification and can acknowledge or deny their assets from the User Portal."
            />
            <FormField label="Note (Optional)">
              <template #default="{ inputId }">
                <PvTextarea :id="inputId" v-model="ackRequestNote" class="w-full" rows="3" placeholder="Add an optional note for the users..." />
              </template>
            </FormField>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm whitespace-nowrap">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showBulkRequestAckDialog = false" />
              <PvButton label="Send Requests" @click="confirmBulkRequestAck" />
            </div>
          </template>
        </PvDialog>

        <!-- Reset Acknowledgment Dialog -->
        <SeverityDialog
          v-model:visible="showResetAckDialog"
          dialogTitle="Reset Acknowledgment"
          variant="sev1"
          :dialogContent="resetAckContent"
          actionText="Reset"
          cancelText="Cancel"
          @action="confirmResetAck"
          @cancel="showResetAckDialog = false"
        />

        <!-- Add Asset Dialog -->
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
            <div class="flex gap-sm whitespace-nowrap">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="showAddAssetDialog = false" />
              <PvButton label="Add Asset" @click="showAddAssetDialog = false" />
            </div>
          </template>
        </PvDialog>

        <!-- Action Menus (popup) -->
        <PvMenu ref="assetMenuRef" :model="assetMenuModel" :popup="true" />
        <PvMenu ref="bulkMenuRef" :model="bulkMenuModel" :popup="true" />

      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof AdminAssetManagementPage> = {
  title: "Projects/Baris' Playground/Pages/Admin Portal - Asset Acknowledgment",
  component: AdminAssetManagementPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AdminAssetManagementPage>;

export const Default: Story = {};
