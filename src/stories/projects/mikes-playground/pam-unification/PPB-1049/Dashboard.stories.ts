import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { linkTo } from '@storybook/addon-links';
import { markRaw, defineComponent } from 'vue';
import { AppNavigation, PageHeader } from '@jumpcloud/circuit/components';
import {
  RocketLaunchIcon,
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
  HomeIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/vue/24/outline';
import Button from 'primevue/button';
import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  WorkflowIcon,
} from '@jumpcloud/icons';
import AdminTopBar from '@/components/AdminTopBar.vue';
import DashboardPage from './Dashboard.vue';

const storyBase = "Projects/Mike's Playground/PAM Unification/PPB-1049";

const menuItems = [
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

const profileMenuItems = [
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

const DashboardPageStory = defineComponent({
  name: 'DashboardPageStory',
  components: {
    AppNavigation,
    PageHeader,
    AdminTopBar,
    DashboardPage,
    Button,
    HomeIcon,
    EllipsisHorizontalIcon,
  },
  setup() {
    const pageIcon = markRaw(HomeIcon);
    const goToJumpServers = linkTo(`${storyBase}/Jump Servers`, 'Default');
    const goToSessionHistory = linkTo(`${storyBase}/Session History`, 'Default');
    return { menuItems, profileMenuItems, pageIcon, goToJumpServers, goToSessionHistory };
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
      <div class="flex-1 flex flex-col min-w-0 min-h-0 overflow-hidden">
        <AdminTopBar />
        <PageHeader title="Dashboard" :icon="pageIcon">
          <template #actions>
            <Button label="Export" severity="secondary" />
            <Button severity="secondary" aria-label="More actions">
              <template #icon="iconProps">
                <EllipsisHorizontalIcon :class="iconProps.class" />
              </template>
            </Button>
          </template>
        </PageHeader>
        <DashboardPage
          @view-all-jump-servers="goToJumpServers"
          @view-all-session-history="goToSessionHistory"
        />
      </div>
    </div>
  `,
});

const meta: Meta<typeof DashboardPageStory> = {
  title: "Projects/Mike's Playground/PAM Unification/PPB-1049/Dashboard",
  component: DashboardPageStory,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof DashboardPageStory>;

export const Default: Story = {};
