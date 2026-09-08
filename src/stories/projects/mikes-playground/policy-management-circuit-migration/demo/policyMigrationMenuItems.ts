import { markRaw } from 'vue';
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
  CpuChipIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline';
import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  WorkflowIcon,
} from '@jumpcloud/icons';
import { PamIcon } from '@/stories/projects/mikes-playground/pam-unification/icons/PamIcon';
import { VaultIcon } from '@/stories/projects/mikes-playground/pam-unification/icons/VaultIcon';
import {
  navigateToPatchManagement,
  navigateToPolicyGroups,
  navigateToPolicyManagementList,
} from './policyMigrationRouter';

/** Matches PAM Unification dashboard nav (labels, flyouts, icons). */
export const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alerts', leftIcon: markRaw(BellIcon), count: 25 },
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
      {
        label: 'Policy Management',
        // Command-only — AppNavigation `route` hrefs leave the /th-1769/ demo.
        command: () => {
          navigateToPolicyManagementList();
        },
      },
      {
        label: 'Patch Management',
        command: () => {
          navigateToPatchManagement();
        },
      },
      {
        label: 'Policy Groups',
        command: () => {
          navigateToPolicyGroups();
        },
      },
      { label: 'Software Management' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      {
        label: 'Access Request',
        leftIcon: markRaw(ClipboardDocumentCheckIcon),
        count: 2,
        isNew: true,
      },
      { label: 'AI & SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'AI Gateway', leftIcon: markRaw(CpuChipIcon) },
      { label: 'Password Vault', leftIcon: markRaw(VaultIcon) },
      { label: 'Privileged Access Mgmt', leftIcon: markRaw(PamIcon) },
      { separator: true },
      { label: 'LDAP' },
      { label: 'RADIUS' },
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
    items: [
      { label: 'Reports' },
      { label: 'Directory Insights' },
    ],
  },
  { label: 'Settings', leftIcon: markRaw(Cog6ToothIcon) },
];

export const profileMenuItems = [
  {
    label: 'Mike Meade',
    itemType: 'profile_compact',
    initials: 'MM',
    name: 'Mike Meade',
    items: [
      {
        label: 'Mike Meade',
        itemType: 'profile_large',
        name: 'Mike Meade',
        email: 'mike.meade@jumpcloud.com',
        initials: 'MM',
      },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
    ],
  },
];
