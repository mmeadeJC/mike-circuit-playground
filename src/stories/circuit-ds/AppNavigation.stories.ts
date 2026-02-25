import type { Meta, StoryObj } from '@storybook/vue3';
import { markRaw } from 'vue';
import { AppNavigation } from '@jumpcloud/circuit/components';
import {
  HomeIcon,
  BellIcon,
  UsersIcon,
  ShieldCheckIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  UserIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ServerIcon,
  ComputerDesktopIcon,
} from '@heroicons/vue/24/outline';

const menuItems = [
  {
    label: 'Getting Started',
    leftIcon: markRaw(RocketLaunchIcon),
  },
  {
    label: 'Home',
    leftIcon: markRaw(HomeIcon),
  },
  {
    label: 'Alert',
    leftIcon: markRaw(BellIcon),
    count: 23,
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
    leftIcon: markRaw(ServerIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(ComputerDesktopIcon) },
      { label: 'Device Groups', leftIcon: markRaw(ServerIcon) },
      { label: 'Commands' },
      { label: 'Asset Management', isNew: true },
      { separator: true },
      { label: 'Policy Management' },
      { label: 'Policy Groups' },
      { label: 'Software Deployment' },
      { label: 'MDM' },
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
];

const profileMenuItems = [
  {
    label: 'John Doe',
    itemType: 'profile_compact',
    initials: 'JD',
    name: 'John Doe',
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

const meta: Meta<typeof AppNavigation> = {
  title: 'Circuit DS/Components/AppNavigation',
  component: AppNavigation,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AppNavigation>;

export const Default: Story = {
  render: (args) => ({
    components: { AppNavigation },
    setup() {
      return { args, menuItems, profileMenuItems };
    },
    template: `
      <div class="h-[600px] flex">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="home"
          :collapsible="true"
          v-bind="args"
        />
      </div>
    `,
  }),
  args: {},
};

export const NonCollapsible: Story = {
  render: (args) => ({
    components: { AppNavigation },
    setup() {
      return { args, menuItems, profileMenuItems };
    },
    template: `
      <div class="h-[600px] flex">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="home"
          :collapsible="false"
          v-bind="args"
        />
      </div>
    `,
  }),
  args: {},
};
