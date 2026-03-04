import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellToken,
  MessageNotification,
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
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  ChevronRightIcon,
  DocumentArrowDownIcon,
} from '@heroicons/vue/24/outline';

import { CheckCircleIcon as CheckCircleSolidIcon } from '@heroicons/vue/24/solid';

import TopBar from '../../../../components/TopBar.vue';

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

interface BenchmarkRule {
  id: string;
  ruleId: string;
  title: string;
  category: string;
  level: 'L1' | 'L2';
  status: 'Pass' | 'Fail' | 'Manual' | 'Not Applicable';
  severity: 'High' | 'Medium' | 'Low';
  os: 'windows' | 'mac' | 'linux';
}

const windowsRules: BenchmarkRule[] = [
  { id: 'w-1', ruleId: '1.1.1', title: 'Ensure "Enforce password history" is set to "24 or more password(s)"', category: 'Account Policies', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-2', ruleId: '1.1.2', title: 'Ensure "Maximum password age" is set to "365 or fewer days, but not 0"', category: 'Account Policies', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-3', ruleId: '1.1.3', title: 'Ensure "Minimum password age" is set to "1 or more day(s)"', category: 'Account Policies', level: 'L1', status: 'Fail', severity: 'High', os: 'windows' },
  { id: 'w-4', ruleId: '1.1.4', title: 'Ensure "Minimum password length" is set to "14 or more character(s)"', category: 'Account Policies', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-5', ruleId: '1.1.5', title: 'Ensure "Password must meet complexity requirements" is set to "Enabled"', category: 'Account Policies', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-6', ruleId: '1.2.1', title: 'Ensure "Account lockout duration" is set to "15 or more minute(s)"', category: 'Account Policies', level: 'L1', status: 'Pass', severity: 'Medium', os: 'windows' },
  { id: 'w-7', ruleId: '1.2.2', title: 'Ensure "Account lockout threshold" is set to "5 or fewer invalid logon attempt(s)"', category: 'Account Policies', level: 'L1', status: 'Fail', severity: 'Medium', os: 'windows' },
  { id: 'w-8', ruleId: '2.2.1', title: 'Ensure "Access Credential Manager as a trusted caller" is set to "No One"', category: 'Local Policies', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-9', ruleId: '2.2.2', title: 'Ensure "Access this computer from the network" is set appropriately', category: 'Local Policies', level: 'L1', status: 'Pass', severity: 'Medium', os: 'windows' },
  { id: 'w-10', ruleId: '2.2.3', title: 'Ensure "Act as part of the operating system" is set to "No One"', category: 'Local Policies', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-11', ruleId: '2.3.1', title: 'Ensure "Accounts: Block Microsoft accounts" is set to enabled', category: 'Security Options', level: 'L1', status: 'Fail', severity: 'Medium', os: 'windows' },
  { id: 'w-12', ruleId: '2.3.2', title: 'Ensure "Accounts: Guest account status" is set to "Disabled"', category: 'Security Options', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-13', ruleId: '5.1', title: 'Ensure "Windows Firewall: Domain: Firewall state" is set to "On"', category: 'Windows Firewall', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-14', ruleId: '5.2', title: 'Ensure "Windows Firewall: Private: Firewall state" is set to "On"', category: 'Windows Firewall', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-15', ruleId: '5.3', title: 'Ensure "Windows Firewall: Public: Firewall state" is set to "On"', category: 'Windows Firewall', level: 'L1', status: 'Fail', severity: 'High', os: 'windows' },
  { id: 'w-16', ruleId: '9.1.1', title: 'Ensure "Windows Firewall: Domain: Inbound connections" is set to "Block"', category: 'Windows Firewall', level: 'L1', status: 'Pass', severity: 'Medium', os: 'windows' },
  { id: 'w-17', ruleId: '17.1.1', title: 'Ensure "Audit Credential Validation" is set to "Success and Failure"', category: 'Advanced Audit Policy', level: 'L1', status: 'Pass', severity: 'Medium', os: 'windows' },
  { id: 'w-18', ruleId: '17.2.1', title: 'Ensure "Audit Application Group Management" is set to "Success and Failure"', category: 'Advanced Audit Policy', level: 'L1', status: 'Manual', severity: 'Low', os: 'windows' },
  { id: 'w-19', ruleId: '18.1.1', title: 'Ensure "Prevent enabling lock screen camera" is set to "Enabled"', category: 'Administrative Templates', level: 'L2', status: 'Pass', severity: 'Low', os: 'windows' },
  { id: 'w-20', ruleId: '18.1.2', title: 'Ensure "Prevent enabling lock screen slide show" is set to "Enabled"', category: 'Administrative Templates', level: 'L2', status: 'Not Applicable', severity: 'Low', os: 'windows' },
  { id: 'w-21', ruleId: '18.4.1', title: 'Ensure "Apply UAC restrictions to local accounts on network logons" is set to "Enabled"', category: 'Administrative Templates', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-22', ruleId: '18.4.2', title: 'Ensure "Configure SMB v1 client driver" is set to "Enabled: Disable driver"', category: 'Administrative Templates', level: 'L1', status: 'Fail', severity: 'High', os: 'windows' },
  { id: 'w-23', ruleId: '18.5.1', title: 'Ensure "MSS: (AutoAdminLogon) Enable Automatic Logon" is set to "Disabled"', category: 'Administrative Templates', level: 'L1', status: 'Pass', severity: 'High', os: 'windows' },
  { id: 'w-24', ruleId: '18.9.1', title: 'Ensure "Turn off multicast name resolution" is set to "Enabled"', category: 'Administrative Templates', level: 'L2', status: 'Fail', severity: 'Medium', os: 'windows' },
  { id: 'w-25', ruleId: '18.10.1', title: 'Ensure "Configure Windows Defender SmartScreen" is set to "Enabled"', category: 'Administrative Templates', level: 'L1', status: 'Pass', severity: 'Medium', os: 'windows' },
];

const macRules: BenchmarkRule[] = [
  { id: 'm-1', ruleId: '1.1', title: 'Ensure All Apple-provided Software Is Current', category: 'Software Updates', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-2', ruleId: '1.2', title: 'Ensure Auto Update Is Enabled', category: 'Software Updates', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-3', ruleId: '1.3', title: 'Ensure Download New Updates When Available Is Enabled', category: 'Software Updates', level: 'L1', status: 'Pass', severity: 'Medium', os: 'mac' },
  { id: 'm-4', ruleId: '1.4', title: 'Ensure Installation of App Update Is Enabled', category: 'Software Updates', level: 'L1', status: 'Fail', severity: 'Medium', os: 'mac' },
  { id: 'm-5', ruleId: '1.5', title: 'Ensure System Data Files and Security Updates Are Downloaded Automatically', category: 'Software Updates', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-6', ruleId: '2.1.1', title: 'Ensure Bluetooth Is Disabled If No Devices Are Paired', category: 'System Preferences', level: 'L2', status: 'Manual', severity: 'Low', os: 'mac' },
  { id: 'm-7', ruleId: '2.1.2', title: 'Ensure "Show Bluetooth Status in Menu Bar" Is Enabled', category: 'System Preferences', level: 'L1', status: 'Pass', severity: 'Low', os: 'mac' },
  { id: 'm-8', ruleId: '2.2.1', title: 'Ensure "Set Time and Date Automatically" Is Enabled', category: 'System Preferences', level: 'L1', status: 'Pass', severity: 'Medium', os: 'mac' },
  { id: 'm-9', ruleId: '2.3.1', title: 'Ensure an Inactivity Interval of 20 Minutes Or Less for the Screen Saver Is Enabled', category: 'System Preferences', level: 'L1', status: 'Fail', severity: 'Medium', os: 'mac' },
  { id: 'm-10', ruleId: '2.3.2', title: 'Ensure Screen Saver Corners Are Secure', category: 'System Preferences', level: 'L2', status: 'Pass', severity: 'Low', os: 'mac' },
  { id: 'm-11', ruleId: '2.4.1', title: 'Ensure Remote Apple Events Is Disabled', category: 'Sharing', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-12', ruleId: '2.4.2', title: 'Ensure Internet Sharing Is Disabled', category: 'Sharing', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-13', ruleId: '2.4.3', title: 'Ensure Screen Sharing Is Disabled', category: 'Sharing', level: 'L1', status: 'Fail', severity: 'High', os: 'mac' },
  { id: 'm-14', ruleId: '2.4.4', title: 'Ensure Printer Sharing Is Disabled', category: 'Sharing', level: 'L1', status: 'Pass', severity: 'Medium', os: 'mac' },
  { id: 'm-15', ruleId: '2.4.5', title: 'Ensure Remote Login Is Disabled', category: 'Sharing', level: 'L1', status: 'Fail', severity: 'High', os: 'mac' },
  { id: 'm-16', ruleId: '2.5.1', title: 'Ensure FileVault Is Enabled', category: 'Security & Privacy', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-17', ruleId: '2.5.2', title: 'Ensure Gatekeeper Is Enabled', category: 'Security & Privacy', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-18', ruleId: '2.5.3', title: 'Ensure Firewall Is Enabled', category: 'Security & Privacy', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-19', ruleId: '2.5.4', title: 'Ensure Firewall Stealth Mode Is Enabled', category: 'Security & Privacy', level: 'L1', status: 'Fail', severity: 'Medium', os: 'mac' },
  { id: 'm-20', ruleId: '5.1.1', title: 'Ensure Home Folders Are Secure', category: 'File System Permissions', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-21', ruleId: '5.1.2', title: 'Ensure System Integrity Protection Status (SIP) Is Enabled', category: 'File System Permissions', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-22', ruleId: '6.1.1', title: 'Ensure Login Window Displays as Name and Password Is Enabled', category: 'User Accounts', level: 'L1', status: 'Pass', severity: 'Low', os: 'mac' },
  { id: 'm-23', ruleId: '6.1.2', title: 'Ensure "Show Password Hints" Is Disabled', category: 'User Accounts', level: 'L1', status: 'Pass', severity: 'Medium', os: 'mac' },
  { id: 'm-24', ruleId: '6.1.3', title: 'Ensure Guest Account Is Disabled', category: 'User Accounts', level: 'L1', status: 'Pass', severity: 'High', os: 'mac' },
  { id: 'm-25', ruleId: '6.2', title: 'Ensure "Allow Guest to Connect to Shared Folders" Is Disabled', category: 'User Accounts', level: 'L1', status: 'Not Applicable', severity: 'Medium', os: 'mac' },
];

const linuxRules: BenchmarkRule[] = [
  { id: 'l-1', ruleId: '1.1.1.1', title: 'Ensure mounting of cramfs filesystems is disabled', category: 'Initial Setup', level: 'L1', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-2', ruleId: '1.1.1.2', title: 'Ensure mounting of squashfs filesystems is disabled', category: 'Initial Setup', level: 'L2', status: 'Not Applicable', severity: 'Low', os: 'linux' },
  { id: 'l-3', ruleId: '1.1.1.3', title: 'Ensure mounting of udf filesystems is disabled', category: 'Initial Setup', level: 'L1', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-4', ruleId: '1.1.2', title: 'Ensure /tmp is configured', category: 'Initial Setup', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-5', ruleId: '1.1.3', title: 'Ensure noexec option set on /tmp partition', category: 'Initial Setup', level: 'L1', status: 'Fail', severity: 'High', os: 'linux' },
  { id: 'l-6', ruleId: '1.1.4', title: 'Ensure nosuid option set on /tmp partition', category: 'Initial Setup', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-7', ruleId: '1.3.1', title: 'Ensure AIDE is installed', category: 'Initial Setup', level: 'L1', status: 'Fail', severity: 'High', os: 'linux' },
  { id: 'l-8', ruleId: '1.3.2', title: 'Ensure filesystem integrity is regularly checked', category: 'Initial Setup', level: 'L1', status: 'Fail', severity: 'High', os: 'linux' },
  { id: 'l-9', ruleId: '1.4.1', title: 'Ensure bootloader password is set', category: 'Initial Setup', level: 'L1', status: 'Manual', severity: 'High', os: 'linux' },
  { id: 'l-10', ruleId: '1.4.2', title: 'Ensure permissions on bootloader config are configured', category: 'Initial Setup', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-11', ruleId: '2.1.1', title: 'Ensure time synchronization is in use', category: 'Services', level: 'L1', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-12', ruleId: '2.1.2', title: 'Ensure chrony is configured', category: 'Services', level: 'L1', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-13', ruleId: '2.2.1', title: 'Ensure X11 Server components are not installed', category: 'Services', level: 'L1', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-14', ruleId: '2.2.2', title: 'Ensure Avahi Server is not installed', category: 'Services', level: 'L1', status: 'Fail', severity: 'Medium', os: 'linux' },
  { id: 'l-15', ruleId: '2.2.3', title: 'Ensure CUPS is not installed', category: 'Services', level: 'L2', status: 'Manual', severity: 'Low', os: 'linux' },
  { id: 'l-16', ruleId: '3.1.1', title: 'Ensure IP forwarding is disabled', category: 'Network Configuration', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-17', ruleId: '3.1.2', title: 'Ensure packet redirect sending is disabled', category: 'Network Configuration', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-18', ruleId: '3.2.1', title: 'Ensure source routed packets are not accepted', category: 'Network Configuration', level: 'L1', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-19', ruleId: '3.2.2', title: 'Ensure ICMP redirects are not accepted', category: 'Network Configuration', level: 'L1', status: 'Fail', severity: 'Medium', os: 'linux' },
  { id: 'l-20', ruleId: '4.1.1', title: 'Ensure auditd is installed', category: 'Logging and Auditing', level: 'L2', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-21', ruleId: '4.1.2', title: 'Ensure auditd service is enabled and running', category: 'Logging and Auditing', level: 'L2', status: 'Pass', severity: 'Medium', os: 'linux' },
  { id: 'l-22', ruleId: '5.2.1', title: 'Ensure permissions on /etc/ssh/sshd_config are configured', category: 'Access & Authentication', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-23', ruleId: '5.2.2', title: 'Ensure SSH access is limited', category: 'Access & Authentication', level: 'L1', status: 'Fail', severity: 'High', os: 'linux' },
  { id: 'l-24', ruleId: '5.2.3', title: 'Ensure permissions on SSH private host key files are configured', category: 'Access & Authentication', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
  { id: 'l-25', ruleId: '5.4.1', title: 'Ensure password creation requirements are configured', category: 'Access & Authentication', level: 'L1', status: 'Pass', severity: 'High', os: 'linux' },
];

const allRules = [...windowsRules, ...macRules, ...linuxRules];

function getStats(rules: BenchmarkRule[]) {
  const total = rules.length;
  const pass = rules.filter(r => r.status === 'Pass').length;
  const fail = rules.filter(r => r.status === 'Fail').length;
  const manual = rules.filter(r => r.status === 'Manual').length;
  const na = rules.filter(r => r.status === 'Not Applicable').length;
  const score = total - na > 0 ? Math.round((pass / (total - na)) * 100) : 0;
  return { total, pass, fail, manual, na, score };
}

const StatusCell = markRaw(defineComponent({
  name: 'StatusCell',
  props: {
    data: { type: Object, default: () => ({}) },
  },
  setup(props) {
    return () => {
      const status = props.data?.status as string;
      const severityMap: Record<string, string> = {
        Pass: 'success',
        Fail: 'danger',
        Manual: 'warn',
        'Not Applicable': 'secondary',
      };
      const iconMap: Record<string, unknown> = {
        Pass: CheckCircleIcon,
        Fail: XCircleIcon,
        Manual: ExclamationTriangleIcon,
      };
      const icon = iconMap[status];
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, {
          severity: severityMap[status] || 'secondary',
          class: 'shrink-0',
        }, {
          ...(icon ? { icon: () => h(icon as Parameters<typeof h>[0], { class: 'size-4' }) } : {}),
          default: () => status,
        }),
      ]);
    };
  },
}));

const SeverityCell = markRaw(defineComponent({
  name: 'SeverityCell',
  props: {
    data: { type: Object, default: () => ({}) },
  },
  setup(props) {
    return () => {
      const severity = props.data?.severity as string;
      const severityMap: Record<string, string> = {
        High: 'danger',
        Medium: 'warn',
        Low: 'secondary',
      };
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, {
          value: severity,
          severity: severityMap[severity] || 'secondary',
          class: 'shrink-0',
        }),
      ]);
    };
  },
}));

const LevelCell = markRaw(defineComponent({
  name: 'LevelCell',
  props: {
    data: { type: Object, default: () => ({}) },
  },
  setup(props) {
    return () => {
      const level = props.data?.level as string;
      return h('div', { class: 'flex items-center gap-1 p-2 min-h-12' }, [
        h(Tag, {
          value: level,
          severity: level === 'L1' ? 'info' : 'contrast',
          class: 'shrink-0',
        }),
      ]);
    };
  },
}));

const benchmarkColumns = [
  {
    field: 'ruleId',
    header: 'Rule ID',
    width: '100px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.ruleId,
      size: 'default',
    }),
  },
  {
    field: 'title',
    header: 'Title',
    width: '400px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.title,
      size: 'default',
    }),
  },
  {
    field: 'category',
    header: 'Category',
    width: '180px',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.category,
      size: 'default',
    }),
  },
  {
    field: 'level',
    header: 'Level',
    width: '80px',
    sortable: true,
    component: LevelCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    width: '140px',
    sortable: true,
    component: StatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'severity',
    header: 'Severity',
    width: '110px',
    sortable: true,
    component: SeverityCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
];

const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Windows', value: 'windows' },
  { label: 'macOS', value: 'macos' },
  { label: 'Linux', value: 'linux' },
];

const levelOptions = [
  { label: 'All Levels', value: 'all' },
  { label: 'Level 1', value: 'L1' },
  { label: 'Level 2', value: 'L2' },
];

const CisBenchmarkPage = defineComponent({
  name: 'CisBenchmarkPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CircuitDataTable: DataTable,
    DataTableToolbar,
    MessageNotification,
    PvButton: Button,
    PvTag: Tag,
    PvSelectButton: SelectButton,
    TopBar,
    ShieldCheckIcon,
    CheckCircleSolidIcon,
    XCircleIcon,
    ExclamationTriangleIcon,
    ArrowPathIcon,
    ChevronRightIcon,
    DocumentArrowDownIcon,
  },
  setup() {
    const activeTab = ref('overview');
    const selectedLevel = ref('all');
    const selectedWinRules = ref([]);
    const selectedMacRules = ref([]);
    const selectedLinuxRules = ref([]);

    const windowsCollapsed = ref(false);
    const macCollapsed = ref(false);
    const linuxCollapsed = ref(false);

    const windowsStats = computed(() => getStats(windowsRules));
    const macStats = computed(() => getStats(macRules));
    const linuxStats = computed(() => getStats(linuxRules));
    const overallStats = computed(() => getStats(allRules));

    const filteredWindowsRules = computed(() =>
      selectedLevel.value === 'all'
        ? windowsRules
        : windowsRules.filter(r => r.level === selectedLevel.value),
    );

    const filteredMacRules = computed(() =>
      selectedLevel.value === 'all'
        ? macRules
        : macRules.filter(r => r.level === selectedLevel.value),
    );

    const filteredLinuxRules = computed(() =>
      selectedLevel.value === 'all'
        ? linuxRules
        : linuxRules.filter(r => r.level === selectedLevel.value),
    );

    const windowsCategories = computed(() => {
      const cats = [...new Set(windowsRules.map(r => r.category))];
      return cats.map(cat => {
        const rules = windowsRules.filter(r => r.category === cat);
        return { name: cat, ...getStats(rules) };
      });
    });

    const macCategories = computed(() => {
      const cats = [...new Set(macRules.map(r => r.category))];
      return cats.map(cat => {
        const rules = macRules.filter(r => r.category === cat);
        return { name: cat, ...getStats(rules) };
      });
    });

    const linuxCategories = computed(() => {
      const cats = [...new Set(linuxRules.map(r => r.category))];
      return cats.map(cat => {
        const rules = linuxRules.filter(r => r.category === cat);
        return { name: cat, ...getStats(rules) };
      });
    });

    return {
      menuItems,
      profileMenuItems,
      tabs,
      activeTab,
      selectedLevel,
      levelOptions,
      selectedWinRules,
      selectedMacRules,
      selectedLinuxRules,
      windowsCollapsed,
      macCollapsed,
      linuxCollapsed,
      windowsStats,
      macStats,
      linuxStats,
      overallStats,
      filteredWindowsRules,
      filteredMacRules,
      filteredLinuxRules,
      windowsCategories,
      macCategories,
      linuxCategories,
      benchmarkColumns,
      ShieldCheckIconRaw: markRaw(ShieldCheckIcon),
      WindowsIconRaw: markRaw(WindowsIcon),
      AppleIconRaw: markRaw(AppleIcon),
      UbuntuIconRaw: markRaw(UbuntuIcon),
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
        <TopBar />

        <PageHeader
          title="CIS Benchmarks"
          :icon="ShieldCheckIconRaw"
          subtitleText="Center for Internet Security Compliance"
          :tabs="tabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #actions>
            <div class="flex items-center gap-2">
              <PvButton label="Run Scan" severity="primary">
                <template #icon>
                  <ArrowPathIcon class="size-5" />
                </template>
              </PvButton>
              <PvButton label="Export" severity="secondary" variant="outlined">
                <template #icon>
                  <DocumentArrowDownIcon class="size-5" />
                </template>
              </PvButton>
            </div>
          </template>
        </PageHeader>

        <!-- ========== OVERVIEW TAB ========== -->
        <div v-if="activeTab === 'overview'" class="flex-1 overflow-auto bg-neutral-surface p-6">
          <div class="flex flex-col gap-6 max-w-[1280px] mx-auto">

            <MessageNotification
              title="Last scan completed"
              detail="Full CIS benchmark scan completed on Feb 24, 2026 at 3:42 PM UTC. Next scheduled scan: Feb 25, 2026 at 3:00 AM UTC."
              severity="info"
            />

            <!-- Overall Compliance Summary -->
            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6">
              <div class="flex items-center justify-between mb-6">
                <div class="flex flex-col gap-1">
                  <h2 class="text-heading-3 text-neutral-base">Overall Compliance</h2>
                  <p class="text-body-md text-neutral-subtle">Across all operating systems — {{ overallStats.total }} rules evaluated</p>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-heading-1 text-neutral-base">{{ overallStats.score }}%</span>
                </div>
              </div>

              <!-- Progress bar -->
              <div class="w-full h-3 rounded-full bg-neutral-surface flex overflow-hidden mb-4">
                <div class="bg-success-base h-full transition-all" :style="{ width: (overallStats.pass / overallStats.total * 100) + '%' }" />
                <div class="bg-error-base h-full transition-all" :style="{ width: (overallStats.fail / overallStats.total * 100) + '%' }" />
                <div class="bg-warning-base h-full transition-all" :style="{ width: (overallStats.manual / overallStats.total * 100) + '%' }" />
                <div class="bg-neutral-default_solid h-full transition-all" :style="{ width: (overallStats.na / overallStats.total * 100) + '%' }" />
              </div>

              <div class="grid grid-cols-4 gap-4">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-success-base shrink-0" />
                  <span class="text-body-sm text-neutral-subtle">Pass</span>
                  <span class="text-body-sm-bold text-neutral-base">{{ overallStats.pass }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-error-base shrink-0" />
                  <span class="text-body-sm text-neutral-subtle">Fail</span>
                  <span class="text-body-sm-bold text-neutral-base">{{ overallStats.fail }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-warning-base shrink-0" />
                  <span class="text-body-sm text-neutral-subtle">Manual</span>
                  <span class="text-body-sm-bold text-neutral-base">{{ overallStats.manual }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-neutral-default_solid shrink-0" />
                  <span class="text-body-sm text-neutral-subtle">N/A</span>
                  <span class="text-body-sm-bold text-neutral-base">{{ overallStats.na }}</span>
                </div>
              </div>
            </div>

            <!-- Per-OS Cards -->
            <div class="grid grid-cols-3 gap-6">

              <!-- Windows Card -->
              <div
                class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6 cursor-pointer hover:border-neutral-subtle transition-colors"
                @click="activeTab = 'windows'"
              >
                <div class="flex items-center gap-3 mb-4">
                  <component :is="WindowsIconRaw" class="size-6 text-neutral-base" />
                  <h3 class="text-heading-4 text-neutral-base">Windows</h3>
                  <PvTag :value="windowsStats.score + '%'" :severity="windowsStats.score >= 80 ? 'success' : windowsStats.score >= 60 ? 'warn' : 'danger'" />
                </div>
                <div class="w-full h-2 rounded-full bg-neutral-surface flex overflow-hidden mb-4">
                  <div class="bg-success-base h-full" :style="{ width: (windowsStats.pass / windowsStats.total * 100) + '%' }" />
                  <div class="bg-error-base h-full" :style="{ width: (windowsStats.fail / windowsStats.total * 100) + '%' }" />
                  <div class="bg-warning-base h-full" :style="{ width: (windowsStats.manual / windowsStats.total * 100) + '%' }" />
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-neutral-subtle">Total Rules</span>
                    <span class="text-body-sm-bold text-neutral-base">{{ windowsStats.total }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-success-base">Passing</span>
                    <span class="text-body-sm-bold text-success-base">{{ windowsStats.pass }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-error-base">Failing</span>
                    <span class="text-body-sm-bold text-error-base">{{ windowsStats.fail }}</span>
                  </div>
                </div>
              </div>

              <!-- macOS Card -->
              <div
                class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6 cursor-pointer hover:border-neutral-subtle transition-colors"
                @click="activeTab = 'macos'"
              >
                <div class="flex items-center gap-3 mb-4">
                  <component :is="AppleIconRaw" class="size-6 text-neutral-base" />
                  <h3 class="text-heading-4 text-neutral-base">macOS</h3>
                  <PvTag :value="macStats.score + '%'" :severity="macStats.score >= 80 ? 'success' : macStats.score >= 60 ? 'warn' : 'danger'" />
                </div>
                <div class="w-full h-2 rounded-full bg-neutral-surface flex overflow-hidden mb-4">
                  <div class="bg-success-base h-full" :style="{ width: (macStats.pass / macStats.total * 100) + '%' }" />
                  <div class="bg-error-base h-full" :style="{ width: (macStats.fail / macStats.total * 100) + '%' }" />
                  <div class="bg-warning-base h-full" :style="{ width: (macStats.manual / macStats.total * 100) + '%' }" />
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-neutral-subtle">Total Rules</span>
                    <span class="text-body-sm-bold text-neutral-base">{{ macStats.total }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-success-base">Passing</span>
                    <span class="text-body-sm-bold text-success-base">{{ macStats.pass }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-error-base">Failing</span>
                    <span class="text-body-sm-bold text-error-base">{{ macStats.fail }}</span>
                  </div>
                </div>
              </div>

              <!-- Linux Card -->
              <div
                class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6 cursor-pointer hover:border-neutral-subtle transition-colors"
                @click="activeTab = 'linux'"
              >
                <div class="flex items-center gap-3 mb-4">
                  <component :is="UbuntuIconRaw" class="size-6 text-neutral-base" />
                  <h3 class="text-heading-4 text-neutral-base">Linux</h3>
                  <PvTag :value="linuxStats.score + '%'" :severity="linuxStats.score >= 80 ? 'success' : linuxStats.score >= 60 ? 'warn' : 'danger'" />
                </div>
                <div class="w-full h-2 rounded-full bg-neutral-surface flex overflow-hidden mb-4">
                  <div class="bg-success-base h-full" :style="{ width: (linuxStats.pass / linuxStats.total * 100) + '%' }" />
                  <div class="bg-error-base h-full" :style="{ width: (linuxStats.fail / linuxStats.total * 100) + '%' }" />
                  <div class="bg-warning-base h-full" :style="{ width: (linuxStats.manual / linuxStats.total * 100) + '%' }" />
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-neutral-subtle">Total Rules</span>
                    <span class="text-body-sm-bold text-neutral-base">{{ linuxStats.total }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-success-base">Passing</span>
                    <span class="text-body-sm-bold text-success-base">{{ linuxStats.pass }}</span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-body-sm text-error-base">Failing</span>
                    <span class="text-body-sm-bold text-error-base">{{ linuxStats.fail }}</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- Category Breakdown per OS -->
            <CollapsiblePanel
              v-model:collapsed="windowsCollapsed"
              toggleable
              header="Windows — Category Breakdown"
            >
              <template #titleicon="iconProps">
                <component :is="WindowsIconRaw" :class="iconProps.class" />
              </template>
              <template #toggleicon="iconProps">
                <ChevronRightIcon :class="iconProps.class" />
              </template>
              <template #actions>
                <PvTag :value="windowsStats.score + '% compliant'" :severity="windowsStats.score >= 80 ? 'success' : 'warn'" />
              </template>
              <div class="flex flex-col divide-y divide-neutral-default_solid">
                <div
                  v-for="cat in windowsCategories"
                  :key="cat.name"
                  class="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <span class="text-body-md text-neutral-base">{{ cat.name }}</span>
                  <div class="flex items-center gap-3">
                    <PvTag :value="cat.pass + ' pass'" severity="success" />
                    <PvTag v-if="cat.fail > 0" :value="cat.fail + ' fail'" severity="danger" />
                    <PvTag v-if="cat.manual > 0" :value="cat.manual + ' manual'" severity="warn" />
                    <span class="text-body-sm-bold text-neutral-base w-12 text-right">{{ cat.score }}%</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel
              v-model:collapsed="macCollapsed"
              toggleable
              header="macOS — Category Breakdown"
            >
              <template #titleicon="iconProps">
                <component :is="AppleIconRaw" :class="iconProps.class" />
              </template>
              <template #toggleicon="iconProps">
                <ChevronRightIcon :class="iconProps.class" />
              </template>
              <template #actions>
                <PvTag :value="macStats.score + '% compliant'" :severity="macStats.score >= 80 ? 'success' : 'warn'" />
              </template>
              <div class="flex flex-col divide-y divide-neutral-default_solid">
                <div
                  v-for="cat in macCategories"
                  :key="cat.name"
                  class="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <span class="text-body-md text-neutral-base">{{ cat.name }}</span>
                  <div class="flex items-center gap-3">
                    <PvTag :value="cat.pass + ' pass'" severity="success" />
                    <PvTag v-if="cat.fail > 0" :value="cat.fail + ' fail'" severity="danger" />
                    <PvTag v-if="cat.manual > 0" :value="cat.manual + ' manual'" severity="warn" />
                    <span class="text-body-sm-bold text-neutral-base w-12 text-right">{{ cat.score }}%</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel
              v-model:collapsed="linuxCollapsed"
              toggleable
              header="Linux — Category Breakdown"
            >
              <template #titleicon="iconProps">
                <component :is="UbuntuIconRaw" :class="iconProps.class" />
              </template>
              <template #toggleicon="iconProps">
                <ChevronRightIcon :class="iconProps.class" />
              </template>
              <template #actions>
                <PvTag :value="linuxStats.score + '% compliant'" :severity="linuxStats.score >= 80 ? 'success' : 'warn'" />
              </template>
              <div class="flex flex-col divide-y divide-neutral-default_solid">
                <div
                  v-for="cat in linuxCategories"
                  :key="cat.name"
                  class="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                >
                  <span class="text-body-md text-neutral-base">{{ cat.name }}</span>
                  <div class="flex items-center gap-3">
                    <PvTag :value="cat.pass + ' pass'" severity="success" />
                    <PvTag v-if="cat.fail > 0" :value="cat.fail + ' fail'" severity="danger" />
                    <PvTag v-if="cat.manual > 0" :value="cat.manual + ' manual'" severity="warn" />
                    <span class="text-body-sm-bold text-neutral-base w-12 text-right">{{ cat.score }}%</span>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

          </div>
        </div>

        <!-- ========== WINDOWS TAB ========== -->
        <div v-if="activeTab === 'windows'" class="flex-1 flex flex-col min-h-0 bg-neutral-surface">
          <div class="px-6 py-3 border-b border-neutral-default_solid bg-neutral-base flex items-center justify-between">
            <div class="flex items-center gap-3">
              <component :is="WindowsIconRaw" class="size-5 text-neutral-base" />
              <span class="text-body-md-bold text-neutral-base">CIS Microsoft Windows 11 Enterprise Benchmark v3.0.0</span>
              <PvTag :value="windowsStats.score + '% compliant'" :severity="windowsStats.score >= 80 ? 'success' : 'warn'" />
            </div>
            <PvSelectButton
              :modelValue="selectedLevel"
              @update:modelValue="selectedLevel = $event"
              :options="levelOptions"
              optionLabel="label"
              optionValue="value"
            />
          </div>
          <div class="shrink-0 px-6 pt-6">
            <DataTableToolbar
              searchPlaceholder="Search Windows rules..."
              :showAddButton="false"
              :showFilterButton="true"
              :showRefreshButton="true"
              :showColumnsButton="true"
            />
          </div>
          <div class="flex-1 flex flex-col min-h-0 px-6">
            <CircuitDataTable
              :columns="benchmarkColumns"
              :data="filteredWindowsRules"
              selectionMode="multiple"
              :selection="selectedWinRules"
              @update:selection="selectedWinRules = $event"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="10"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '25 Items per page', value: 25 },
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

        <!-- ========== MACOS TAB ========== -->
        <div v-if="activeTab === 'macos'" class="flex-1 flex flex-col min-h-0 bg-neutral-surface">
          <div class="px-6 py-3 border-b border-neutral-default_solid bg-neutral-base flex items-center justify-between">
            <div class="flex items-center gap-3">
              <component :is="AppleIconRaw" class="size-5 text-neutral-base" />
              <span class="text-body-md-bold text-neutral-base">CIS Apple macOS 15.0 Sequoia Benchmark v1.0.0</span>
              <PvTag :value="macStats.score + '% compliant'" :severity="macStats.score >= 80 ? 'success' : 'warn'" />
            </div>
            <PvSelectButton
              :modelValue="selectedLevel"
              @update:modelValue="selectedLevel = $event"
              :options="levelOptions"
              optionLabel="label"
              optionValue="value"
            />
          </div>
          <div class="shrink-0 px-6 pt-6">
            <DataTableToolbar
              searchPlaceholder="Search macOS rules..."
              :showAddButton="false"
              :showFilterButton="true"
              :showRefreshButton="true"
              :showColumnsButton="true"
            />
          </div>
          <div class="flex-1 flex flex-col min-h-0 px-6">
            <CircuitDataTable
              :columns="benchmarkColumns"
              :data="filteredMacRules"
              selectionMode="multiple"
              :selection="selectedMacRules"
              @update:selection="selectedMacRules = $event"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="10"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '25 Items per page', value: 25 },
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

        <!-- ========== LINUX TAB ========== -->
        <div v-if="activeTab === 'linux'" class="flex-1 flex flex-col min-h-0 bg-neutral-surface">
          <div class="px-6 py-3 border-b border-neutral-default_solid bg-neutral-base flex items-center justify-between">
            <div class="flex items-center gap-3">
              <component :is="UbuntuIconRaw" class="size-5 text-neutral-base" />
              <span class="text-body-md-bold text-neutral-base">CIS Ubuntu Linux 24.04 LTS Benchmark v1.0.0</span>
              <PvTag :value="linuxStats.score + '% compliant'" :severity="linuxStats.score >= 80 ? 'success' : 'warn'" />
            </div>
            <PvSelectButton
              :modelValue="selectedLevel"
              @update:modelValue="selectedLevel = $event"
              :options="levelOptions"
              optionLabel="label"
              optionValue="value"
            />
          </div>
          <div class="shrink-0 px-6 pt-6">
            <DataTableToolbar
              searchPlaceholder="Search Linux rules..."
              :showAddButton="false"
              :showFilterButton="true"
              :showRefreshButton="true"
              :showColumnsButton="true"
            />
          </div>
          <div class="flex-1 flex flex-col min-h-0 px-6">
            <CircuitDataTable
              :columns="benchmarkColumns"
              :data="filteredLinuxRules"
              selectionMode="multiple"
              :selection="selectedLinuxRules"
              @update:selection="selectedLinuxRules = $event"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="10"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '25 Items per page', value: 25 },
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

      </div>
    </div>
  `,
});

const meta: Meta<typeof CisBenchmarkPage> = {
  title: "Projects/Burak's Playground/Pages/CIS Benchmarks",
  component: CisBenchmarkPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof CisBenchmarkPage>;

export const Default: Story = {};
