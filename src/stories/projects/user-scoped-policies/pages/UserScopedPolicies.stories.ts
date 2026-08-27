import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, computed, watch, onMounted } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellToken,
  DataTableCellLink,
  CheckboxWithLabel,
  FormField,
  MessageNotification,
  LinkText,
  DetailPageLayout,
  KeyValue,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
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
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ChevronRightIcon,
  XMarkIcon,
  SparklesIcon,
  FunnelIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/outline';
import { CheckCircleIcon as CheckCircleIconSolid } from '@heroicons/vue/24/solid';
import { DeviceManagementIcon } from '@jumpcloud/icons';

import TopBar from '../../../../components/AdminTopBar.vue';
import {
  filterDevicePolicyTemplates,
  type DevicePolicyTemplate,
} from '@/stories/projects/mikes-playground/policy-management-circuit-migration/demo/devicePolicyCatalog';
import { usePolicyMigrationNav, readPolicyMigrationView, readStoredPolicyMigrationContext, writePolicyMigrationView, writeStoredPolicyMigrationContext } from '@/stories/projects/mikes-playground/policy-management-circuit-migration/demo/policyMigrationNav';
import {
  menuItems,
  profileMenuItems,
} from '@/stories/projects/mikes-playground/policy-management-circuit-migration/demo/policyMigrationMenuItems';
import { getPolicyMigrationRouter } from '@/stories/projects/mikes-playground/policy-management-circuit-migration/demo/policyMigrationRouter';

const StatusTag = defineComponent({
  props: { statusLabel: { type: String, default: 'Active' } },
  components: { PvTag: Tag, CheckCircleIcon, ExclamationCircleIcon },
  computed: {
    isDanger(): boolean { return this.statusLabel === 'Suspended' || this.statusLabel === 'Inactive'; },
  },
  template: `
    <PvTag :severity="isDanger ? 'danger' : 'success'" class="shrink-0">
      <template #icon>
        <ExclamationCircleIcon v-if="isDanger" class="size-4" />
        <CheckCircleIcon v-else class="size-4" />
      </template>
      {{ statusLabel }}
    </PvTag>
  `,
});

// ─── Icon Components ───────────────────────────────────────────────

const WindowsIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M3 5.548l7.065-0.966v6.822H3V5.548zm0 12.904l7.065 0.966v-6.822H3v5.856zm7.937 1.085L21 21v-7.596H10.937v-0.001 8.133zm0-15.074v8.133H21V3L10.937 4.463z"/></svg>`,
});
const AppleIcon = defineComponent({
  template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`,
});
const IosIcon = defineComponent({
  template: `<div class="flex items-center justify-center" style="width: 16px; height: 16px;"><div class="rounded-full flex items-center justify-center" style="width: 13.33px; height: 13.33px; background-color: #1a2233;"><span class="font-semibold leading-none" style="font-size: 5px; color: #ffffff;">iOS</span></div></div>`,
});

const OsTypeIcon = defineComponent({
  props: { os: { type: String, default: 'windows' } },
  components: { WindowsIcon, AppleIcon, IosIcon },
  template: `
    <div class="flex items-center justify-center">
      <WindowsIcon v-if="os === 'windows'" />
      <IosIcon v-else-if="os === 'ios'" />
      <AppleIcon v-else />
    </div>
  `,
});

// ─── Policy List Data ──────────────────────────────────────────────

const policyData = [
  { id: 1, os: 'windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 2, os: 'windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 3, os: 'ios', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 4, os: 'mac', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 5, os: 'mac', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 6, os: 'windows', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 7, os: 'windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 8, os: 'ios', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 9, os: 'windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'Jumpcloud MDM Enrollment' },
];

const policyColumns = [
  {
    field: 'os', header: 'Type', sortable: true, width: '80px',
    component: markRaw(OsTypeIcon),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      os: sp.data.os,
    }),
  },
  {
    field: 'name', header: 'Name', sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.description }),
  },
  {
    field: 'policyLevel', header: 'Policy level', sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.policyLevel as string,
      icon: sp.data.policyLevel === 'User' ? markRaw(UserIcon) : markRaw(DeviceManagementIcon),
    }),
  },
  {
    field: 'requirements', header: 'Requirements', sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.requirements }),
  },
];

const exportOptions = [
  { id: 'csv', label: 'Export as CSV' },
  { id: 'json', label: 'Export as JSON' },
];

// ─── User policy template data (legacy placeholders) ───────────────

const legacyUserPolicyTemplates = [
  { id: 1, name: 'Advanced: Custom Registry K...', nameDesc: 'Enterprise Settings, Configuration', type: 'Agent', description: 'Utilize custom policies to enforce configurations onto your fleet of systems that JumpCloud may not offer in our standard policies' },
  { id: 2, name: 'Allow the use of Biometrics', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
  { id: 3, name: 'Advanced: Custom Registry K...', nameDesc: 'Enterprise Settings, Configuration', type: 'Agent', description: 'Utilize custom policies to enforce configurations onto your fleet of systems that JumpCloud may not offer in our standard policies' },
  { id: 4, name: 'Application Restriction', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
  { id: 5, name: 'Advanced: Custom Registry K...', nameDesc: 'Enterprise Settings, Configuration', type: 'Agent', description: 'Utilize custom policies to enforce configurations onto your fleet of systems that JumpCloud may not offer in our standard policies' },
  { id: 6, name: 'Application Restriction', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
  { id: 7, name: 'Application Restriction', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
];

// ─── Binding Data ──────────────────────────────────────────────────

const bindingUsersData = [
  { id: 1, userState: 'Active', name: 'Mustafa', username: '—', email: 'mustafa+musti@jumpcloud.com', bound: true },
  { id: 2, userState: 'Suspended', name: 'Zava', username: 'Zava', email: 'tony.feick+afc@jumpcloud.com', bound: false },
  { id: 3, userState: 'Active', name: 'Guari', username: '—', email: 'guari.test@jumpcloud.com', bound: true },
  { id: 4, userState: 'Active', name: 'Shubham', username: 'Shubham', email: 'shubham@afcr.co.uk', bound: false },
  { id: 5, userState: 'Active', name: 'DevOps Engineer 1', username: 'devops-test-1', email: 'devops-test-1@company.com', bound: false },
  { id: 6, userState: 'Active', name: 'DevOps Engineer 2', username: 'devops-test-2', email: 'devops-test-2@company.com', bound: false },
  { id: 7, userState: 'Active', name: 'DevOps Engineer 3', username: 'devops-test-3', email: 'devops-test-3@company.com', bound: false },
  { id: 8, userState: 'Active', name: 'DevOps Engineer 4', username: 'devops-test-4', email: 'devops-test-4@company.com', bound: false },
  { id: 9, userState: 'Active', name: 'Oddname @ Test', username: 'test.oddname', email: 'test@oddname.com', bound: false },
  { id: 10, userState: 'Active', name: 'AFCR, Farhana', username: 'farhana.khader.afcr', email: 'farhana.khader+afcr@jumpcloud.com', bound: false },
];

const bindingUsersColumns = [
  { field: 'userState', header: 'User State', sortable: true, component: markRaw(StatusTag), componentProps: (sp: { data: Record<string, unknown> }) => ({ statusLabel: sp.data.userState }) },
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.username }) },
  { field: 'email', header: 'Email', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.email }) },
];

const bindingDevicesData = [
  { id: 1, status: 'Active', deviceName: 'Machine 1', os: 'Windows 11 Pro', osDesc: 'MDM', bound: true },
  { id: 2, status: 'Inactive', deviceName: 'Machine 2', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 3, status: 'Active', deviceName: 'Machine 3', os: 'Windows 11 Pro', osDesc: 'MDM', bound: true },
  { id: 4, status: 'Active', deviceName: 'Machine 4', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 5, status: 'Active', deviceName: 'Machine 5', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 6, status: 'Active', deviceName: 'Machine 6', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 7, status: 'Active', deviceName: 'Machine 7', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 8, status: 'Active', deviceName: 'Machine 8', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 9, status: 'Active', deviceName: 'Machine 9', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
  { id: 10, status: 'Active', deviceName: 'Machine 10', os: 'Windows 11 Pro', osDesc: 'MDM', bound: false },
];

const bindingDevicesColumns = [
  { field: 'status', header: 'Status', sortable: true, width: '100px', component: markRaw(StatusTag), componentProps: (sp: { data: Record<string, unknown> }) => ({ statusLabel: sp.data.status }) },
  { field: 'deviceName', header: 'Device Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.deviceName }) },
  { field: 'os', header: 'OS', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.os, description: sp.data.osDesc, icon: markRaw(ComputerDesktopIcon) }) },
];

const policyGroupsData = [
  { id: 1, group: 'Automated Devices', groupDesc: 'Group of Configurations', bound: true },
  { id: 2, group: 'CIS Benchmark Policy', groupDesc: 'Group of Configurations', bound: true },
  { id: 3, group: 'Early Adoption Ring', groupDesc: 'Group of Configurations', bound: false },
  { id: 4, group: 'Fonts', groupDesc: 'Group of Configurations', bound: false },
  { id: 5, group: 'General Adoption Ring', groupDesc: 'Group of Configurations', bound: false },
  { id: 6, group: 'IM - SOC2', groupDesc: 'Group of Configurations', bound: false },
];

const policyGroupColumns = [
  { field: 'group', header: 'Group', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.group, description: sp.data.groupDesc, href: '#' }) },
];

const deviceGroupsData = [
  { id: 1, group: 'ADE iOS Devices', groupDesc: 'Group of Devices', numDevices: 0, bound: true },
  { id: 2, group: 'Admin Sudo Device Group', groupDesc: 'Group of Devices', numDevices: 0, bound: false },
  { id: 3, group: 'All Android Devices', groupDesc: 'Group of Devices', numDevices: 7, bound: false },
  { id: 4, group: 'All Devices', groupDesc: 'Group of Devices', numDevices: 18, bound: false },
  { id: 5, group: 'Automated Device Enrollment', groupDesc: 'Group of Devices', numDevices: 1, bound: true },
  { id: 6, group: 'BYOD iOS Devices', groupDesc: 'Group of Devices', numDevices: 0, bound: false },
];

const deviceGroupColumns = [
  { field: 'group', header: 'Group', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.group, description: sp.data.groupDesc, href: '#' }) },
  { field: 'numDevices', header: 'Number of Devices', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.numDevices) }) },
];

const userGroupsData = [
  { id: 1, group: 'Engineering Team', groupDesc: 'Group of Users', numUsers: 12, bound: true },
  { id: 2, group: 'Marketing Team', groupDesc: 'Group of Users', numUsers: 8, bound: false },
  { id: 3, group: 'All Users', groupDesc: 'Group of Users', numUsers: 45, bound: false },
  { id: 4, group: 'Remote Workers', groupDesc: 'Group of Users', numUsers: 22, bound: true },
  { id: 5, group: 'Contractors', groupDesc: 'Group of Users', numUsers: 5, bound: false },
  { id: 6, group: 'IT Admins', groupDesc: 'Group of Users', numUsers: 3, bound: false },
];

const userGroupColumns = [
  { field: 'group', header: 'Group', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.group, description: sp.data.groupDesc, href: '#' }) },
  { field: 'numUsers', header: 'Number of Users', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.numUsers) }) },
];

type PolicyType = 'device' | 'user';
type ViewState = 'list' | 'detail' | 'new-policy';

type PlatformDetailSection = {
  platform: string;
  minVersion: string;
  enrollmentTypes: string[];
};

const defaultEnrollmentTypes = [
  'User-Enrolled Devices',
  'Device-Enrolled Devices',
  'Auto-Enrolled Devices',
];

const UserScopedPoliciesPage = defineComponent({
  name: 'UserScopedPoliciesPage',
  components: {
    AppNavigation, PageHeader, CollapsiblePanel, CircuitDataTable, DataTableToolbar,
    CheckboxWithLabel, FormField, MessageNotification, LinkText,
    PvButton: Button, PvTag: Tag, PvInputText: InputText, PvTextarea: Textarea,
    PvTabs: Tabs, PvTabList: TabList, PvTab: Tab, PvDivider: Divider, PvMenu: Menu,
    PvIconField: IconField, PvInputIcon: InputIcon,
    TopBar, DetailPageLayout, KeyValue, UsersIcon, ComputerDesktopIcon, DevicePhoneMobileIcon,
    ChevronRightIcon, XMarkIcon, ShieldCheckIcon,
    Cog6ToothIcon, UserIcon, UserGroupIcon, FunnelIcon, ArrowPathIcon, MagnifyingGlassIcon, PlusIcon, WindowsIcon, AppleIcon,
    CheckCircleIconSolid,
  },
  setup() {
    const policyMigrationNav = usePolicyMigrationNav();
    const currentView = ref<ViewState>('list');
    const policyType = ref<PolicyType>('user');

    // ── List view state ──
    const showRecommendations = ref(true);
    const recommendationsCollapsed = ref(false);
    const selectedPolicies = ref([]);
    const listFirst = ref(0);
    const listRows = ref(10);
    const showSuccessToast = ref(false);
    const successToastMessage = ref('');
    const addNewMenuRef = ref();

    const addNewMenuItems = ref([
      { label: 'Device Policy', command: () => openNewPolicy('device') },
      { label: 'User Policy', command: () => openNewPolicy('user') },
    ]);

    // ── New Policy view state ──
    const newPolicyOsTab = ref('windows');
    const newPolicySearch = ref('');

    const newPolicyTitle = computed(() => {
      const osLabel = newPolicyOsTab.value.charAt(0).toUpperCase() + newPolicyOsTab.value.slice(1);
      return policyType.value === 'user'
        ? `New ${osLabel} User Policy`
        : `New ${osLabel} Device Policy`;
    });

    // ── Detail view state ──
    const detailTab = ref('details');
    const detailPolicyTitle = ref('Allow The Use of Biometrics');
    const detailCardHeader = ref('Windows User Policy');
    const detailOs = ref('windows');
    const detailIsEditFlow = ref(false);
    const policyName = ref('Allow the use of biometrics');
    const initialPolicyName = ref('Allow the use of biometrics');
    const policyNotes = ref('');
    const allowBiometrics = ref(false);

    // User binding
    const selectedBindingUsers = ref<typeof bindingUsersData>([]);
    const showBoundUsers = ref(false);
    const boundUserCount = computed(() => selectedBindingUsers.value.length);
    const totalUserCount = computed(() => bindingUsersData.length);

    // Device binding
    const selectedBindingDevices = ref<typeof bindingDevicesData>([]);
    const showBoundDevices = ref(false);
    const boundDeviceCount = computed(() => selectedBindingDevices.value.length);
    const totalDeviceCount = computed(() => bindingDevicesData.length);

    // Policy group binding
    const selectedPolicyGroups = ref(policyGroupsData.filter(g => g.bound));
    const showBoundPolicyGroups = ref(false);
    const boundPolicyGroupCount = computed(() => selectedPolicyGroups.value.length);

    // Device group binding
    const selectedDeviceGroups = ref(deviceGroupsData.filter(g => g.bound));
    const showBoundDeviceGroups = ref(false);
    const boundDeviceGroupCount = computed(() => selectedDeviceGroups.value.length);

    // User group binding
    const selectedUserGroups = ref(userGroupsData.filter(g => g.bound));
    const showBoundUserGroups = ref(false);
    const boundUserGroupCount = computed(() => selectedUserGroups.value.length);

    function normalizeSelection<T extends { id: number }>(selected: T[], source: T[]): T[] {
      const ids = new Set(selected.map(s => s.id));
      return source.filter(item => ids.has(item.id));
    }

    watch(selectedPolicyGroups, (val) => {
      const normalized = normalizeSelection(val, policyGroupsData);
      if (normalized.length !== val.length) selectedPolicyGroups.value = normalized;
    });
    watch(selectedDeviceGroups, (val) => {
      const normalized = normalizeSelection(val, deviceGroupsData);
      if (normalized.length !== val.length) selectedDeviceGroups.value = normalized;
    });
    watch(selectedUserGroups, (val) => {
      const normalized = normalizeSelection(val, userGroupsData);
      if (normalized.length !== val.length) selectedUserGroups.value = normalized;
    });
    watch(selectedBindingUsers, (val) => {
      const normalized = normalizeSelection(val, bindingUsersData);
      if (normalized.length !== val.length) selectedBindingUsers.value = normalized;
    });
    watch(selectedBindingDevices, (val) => {
      const normalized = normalizeSelection(val, bindingDevicesData);
      if (normalized.length !== val.length) selectedBindingDevices.value = normalized;
    });

    const isUserPolicy = computed(() => policyType.value === 'user');
    const isDevicePolicy = computed(() => policyType.value === 'device');

    const detailSubtitle = computed(() => {
      if (detailTab.value === 'users' && isUserPolicy.value)
        return 'Select target(s) from the list and click save to bind the policy to the user(s).';
      if (detailTab.value === 'devices' && isDevicePolicy.value)
        return 'Select your target device(s) below and click save to apply this policy.';
      return isUserPolicy.value
        ? 'Configure the policy details below, then select Policy Groups, User Groups, or Users to bind the policy.'
        : 'Configure the policy details below, then select Policy Groups, Device Groups, or Devices to bind the policy.';
    });

    const detailTagLabel = computed(() => isUserPolicy.value ? 'User' : 'Device');

    const showSettingsCard = computed(() => !detailIsEditFlow.value);

    const isActivationLockPolicy = computed(() => detailPolicyTitle.value === 'Allow Activation Lock');

    const policyDescriptionText = computed(() => {
      if (isActivationLockPolicy.value) {
        return 'Allows Activation Lock on enrolled Apple devices, helping prevent unauthorized users from activating or erasing a device without the owner\'s credentials.';
      }
      return 'Help strengthen authentication and guard against potential spoofing by using fingerprint matching provided by the Windows Hello service.';
    });

    const policyBehaviorText = computed(() => {
      if (isActivationLockPolicy.value) {
        return 'Lets you allow or restrict Activation Lock on managed iOS, iPadOS, and macOS devices. When enabled, a device remains linked to the organization until Activation Lock is cleared.';
      }
      return 'lets you remotely allow or restrict the user from logging in to a managed system using biometrics. NOTE: JumpCloud does not allow the use of Multi-Factor Authentication (MFA) and biometrics simultaneously. For example, if you enable MFA in JumpCloud, users can\'t log in to their managed system with their fingerprint.';
    });

    const policyActivationText = computed(() => 'After you save the policy it takes effect immediately.');

    const detailPlatformSections = computed<PlatformDetailSection[]>(() => {
      if (detailTab.value !== 'details' || !isDevicePolicy.value) return [];

      if (isActivationLockPolicy.value) {
        if (detailOs.value === 'mac') {
          return [{
            platform: 'macOS',
            minVersion: 'macOS 11.0 or later',
            enrollmentTypes: ['Device-Enrolled Devices', 'Auto-Enrolled Devices'],
          }];
        }
        if (detailOs.value === 'windows') {
          return [{
            platform: 'Windows',
            minVersion: 'Windows 10 or later',
            enrollmentTypes: ['Device-Enrolled Devices'],
          }];
        }
        return [
          { platform: 'iOS', minVersion: 'iOS 14.0 or later', enrollmentTypes: defaultEnrollmentTypes },
          { platform: 'iPadOS', minVersion: 'iPadOS 14.0 or later', enrollmentTypes: defaultEnrollmentTypes },
        ];
      }

      return [
        { platform: 'iOS', minVersion: 'iOS 14.0 or later', enrollmentTypes: defaultEnrollmentTypes },
        { platform: 'iPadOS', minVersion: 'iPadOS 14.0 or later', enrollmentTypes: defaultEnrollmentTypes },
      ];
    });

    const showDetailSidebar = computed(() => detailPlatformSections.value.length > 0);

    const policyNameChanged = computed(() => policyName.value !== initialPolicyName.value);

    const isSaveDisabled = computed(() => {
      if (!detailIsEditFlow.value && detailTab.value === 'details') return true;
      if (detailTab.value === 'policy-groups') return selectedPolicyGroups.value.length === 0;
      if (detailTab.value === 'user-groups') return selectedUserGroups.value.length === 0;
      if (detailTab.value === 'device-groups') return selectedDeviceGroups.value.length === 0;
      if (detailTab.value === 'users') return selectedBindingUsers.value.length === 0;
      if (detailTab.value === 'devices') return selectedBindingDevices.value.length === 0;
      if (detailTab.value !== 'details') return false;
      if (policyNameChanged.value || policyNotes.value.trim() !== '') return false;
      return true;
    });

    const newPolicyTabs = computed(() => {
      const tabs = [
        { label: 'Windows', value: 'windows' },
        { label: 'Mac', value: 'mac' },
      ];
      if (isDevicePolicy.value) {
        tabs.push(
          { label: 'Linux', value: 'linux' },
          { label: 'iOS', value: 'ios' },
          { label: 'Android', value: 'android' },
          { label: 'Recommended', value: 'recommended' },
        );
      }
      return tabs;
    });

    const detailTabs = computed(() => {
      const tabs = [
        { label: 'Details', value: 'details' },
        { label: 'Policy Groups', value: 'policy-groups' },
      ];
      if (isDevicePolicy.value) tabs.push({ label: 'Device Groups', value: 'device-groups' });
      if (isUserPolicy.value) tabs.push({ label: 'User groups', value: 'user-groups' });
      if (isDevicePolicy.value) tabs.push({ label: 'Devices', value: 'devices' });
      if (isUserPolicy.value) tabs.push({ label: 'Users', value: 'users' });
      return tabs;
    });

    const filteredPolicyTemplates = computed(() => {
      if (isDevicePolicy.value) {
        return filterDevicePolicyTemplates({
          osTab: newPolicyOsTab.value,
          search: newPolicySearch.value,
        });
      }
      return legacyUserPolicyTemplates;
    });

    // ── Actions ──

    function toggleAddMenu(event: Event) {
      addNewMenuRef.value?.toggle(event);
    }

    function openNewPolicy(type: PolicyType) {
      policyType.value = type;
      newPolicyOsTab.value = 'windows';
      newPolicySearch.value = '';
      currentView.value = 'new-policy';

      if (policyMigrationNav) {
        policyMigrationNav.goToNewPolicy({ policyType: type, osTab: 'windows' });
      } else {
        writeStoredPolicyMigrationContext({ policyType: type, osTab: 'windows' });
        writePolicyMigrationView('new-policy');
      }
    }

    function onNewPolicyOsTabChange(tab: string) {
      newPolicyOsTab.value = tab;
      writeStoredPolicyMigrationContext({
        policyType: policyType.value,
        osTab: tab,
      });
      writePolicyMigrationView('new-policy');

      const router = getPolicyMigrationRouter();
      if (router && router.currentRoute.value.path === '/policy-management') {
        void router.replace({
          path: '/policy-management',
          query: {
            view: 'new-policy',
            type: policyType.value,
            os: tab,
          },
        });
      }
    }

    function resetDetailState(isEdit: boolean) {
      detailTab.value = 'details';
      policyNotes.value = '';
      allowBiometrics.value = false;
      selectedBindingUsers.value = [];
      showBoundUsers.value = false;
      selectedBindingDevices.value = [];
      showBoundDevices.value = false;
      selectedPolicyGroups.value = isEdit ? policyGroupsData.filter(g => g.bound) : [];
      showBoundPolicyGroups.value = false;
      selectedDeviceGroups.value = isEdit ? deviceGroupsData.filter(g => g.bound) : [];
      showBoundDeviceGroups.value = false;
      selectedUserGroups.value = isEdit ? userGroupsData.filter(g => g.bound) : [];
      showBoundUserGroups.value = false;
    }

    function openDetail(type?: PolicyType) {
      if (type) policyType.value = type;
      detailIsEditFlow.value = false;
      detailOs.value = 'windows';
      detailPolicyTitle.value = 'Allow The Use of Biometrics';
      detailCardHeader.value = isUserPolicy.value ? 'Windows User Policy' : 'Windows Device Policy';
      policyName.value = 'Allow the use of biometrics';
      initialPolicyName.value = 'Allow the use of biometrics';
      resetDetailState(false);
      currentView.value = 'detail';
    }

    function openDetailFromRow(event: { data: Record<string, unknown> }) {
      const row = event.data;
      policyType.value = row.policyLevel === 'User' ? 'user' : 'device';
      detailIsEditFlow.value = true;
      detailOs.value = (row.os as string) || 'windows';
      const osMap: Record<string, string> = { windows: 'Windows', mac: 'Mac', ios: 'iOS', android: 'Android', linux: 'Linux' };
      const osLabel = osMap[row.os as string] || 'Windows';
      const levelLabel = row.policyLevel === 'User' ? 'User' : 'Device';
      detailPolicyTitle.value = row.name as string;
      detailCardHeader.value = `${osLabel} ${levelLabel} Policy`;
      policyName.value = row.name as string;
      initialPolicyName.value = policyName.value;
      resetDetailState(true);
      currentView.value = 'detail';
    }

    function syncFromRouteQuery() {
      const router = getPolicyMigrationRouter();
      const route = router?.currentRoute.value;
      if (!route || route.path !== '/policy-management') return;

      const storedContext = readStoredPolicyMigrationContext();
      const storedView = readPolicyMigrationView();
      const queryNewPolicy = route.query.view === 'new-policy';

      if (storedView === 'new-policy' || queryNewPolicy) {
        currentView.value = 'new-policy';
        if (storedContext) {
          policyType.value = storedContext.policyType;
          newPolicyOsTab.value = storedContext.osTab;
        } else if (route.query.type === 'user') {
          policyType.value = 'user';
        } else if (route.query.type === 'device') {
          policyType.value = 'device';
        }
        if (typeof route.query.os === 'string' && route.query.os.length > 0) {
          newPolicyOsTab.value = route.query.os;
        }
        return;
      }

      currentView.value = 'list';
    }

    onMounted(() => {
      syncFromRouteQuery();
    });

    const demoRouter = getPolicyMigrationRouter();
    if (demoRouter) {
      watch(
        () => demoRouter.currentRoute.value.fullPath,
        () => syncFromRouteQuery(),
        { immediate: true },
      );
    }

    function goToList() {
      currentView.value = 'list';
      writePolicyMigrationView('list');
      const router = getPolicyMigrationRouter();
      if (router) {
        void router.replace({ path: '/policy-management', query: {} });
      }
    }

    function handleSave() {
      if (detailTab.value === 'users' || detailTab.value === 'devices' || (detailTab.value === 'details' && detailIsEditFlow.value)) {
        successToastMessage.value = `The policy "${detailPolicyTitle.value}" has been saved.`;
        currentView.value = 'list';
        setTimeout(() => {
          showSuccessToast.value = true;
          setTimeout(() => { showSuccessToast.value = false; }, 4000);
        }, 1000);
      }
    }

    function configureTemplate(tpl: DevicePolicyTemplate | (typeof legacyUserPolicyTemplates)[number]) {
      if ('path' in tpl && tpl.path && policyMigrationNav) {
        policyMigrationNav.goToPolicy(tpl.path, {
          policyType: policyType.value,
          osTab: newPolicyOsTab.value,
        });
        return;
      }
      if (tpl.id === 2) openDetail();
    }


    return {
      menuItems, profileMenuItems,
      policyData, policyColumns, exportOptions,
      legacyUserPolicyTemplates,
      filteredPolicyTemplates,
      bindingUsersData, bindingUsersColumns,
      bindingDevicesData, bindingDevicesColumns,
      policyGroupsData, policyGroupColumns,
      deviceGroupsData, deviceGroupColumns,
      userGroupsData, userGroupColumns,
      currentView, policyType,
      showRecommendations, recommendationsCollapsed, selectedPolicies,
      listFirst, listRows, showSuccessToast, successToastMessage,
      addNewMenuRef, addNewMenuItems, toggleAddMenu,
      newPolicyOsTab, newPolicyTitle, newPolicySearch,
      detailTab, detailPolicyTitle, detailCardHeader, detailIsEditFlow, showSettingsCard,
      policyDescriptionText, policyBehaviorText, policyActivationText,
      detailPlatformSections, showDetailSidebar, isActivationLockPolicy,
      policyName, policyNotes, allowBiometrics,
      selectedBindingUsers, showBoundUsers, boundUserCount, totalUserCount,
      selectedBindingDevices, showBoundDevices, boundDeviceCount, totalDeviceCount,
      selectedPolicyGroups, showBoundPolicyGroups, boundPolicyGroupCount,
      selectedDeviceGroups, showBoundDeviceGroups, boundDeviceGroupCount,
      selectedUserGroups, showBoundUserGroups, boundUserGroupCount,
      isUserPolicy, isDevicePolicy, detailSubtitle, detailTagLabel, isSaveDisabled,
      newPolicyTabs, detailTabs,
      openNewPolicy, openDetail, openDetailFromRow, goToList, handleSave, configureTemplate,
      onNewPolicyOsTabChange,
    };
  },
  template: `
    <!-- ==================== LIST VIEW ==================== -->
    <div v-if="currentView === 'list'" class="flex h-screen overflow-hidden">
      <AppNavigation :menuItems="menuItems" :profileMenuItems="profileMenuItems" activeItem="device management" :collapsible="true" :topNavToggle="true" />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar />
        <PageHeader title="Policy Management" :icon="$options.shieldIcon" />

        <!-- Success toast -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-x-[20px]"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 translate-x-[20px]"
        >
          <div v-if="showSuccessToast" class="absolute top-[52px] right-6 z-50 w-[360px]">
            <MessageNotification severity="success" title="Success" :detail="successToastMessage" :closable="true" class="[&_span]:whitespace-normal [&_span]:overflow-visible" @close="showSuccessToast = false" />
          </div>
        </Transition>

        <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
          <!-- Recommended Policies Panel -->
          <div v-if="showRecommendations" class="px-md pt-md shrink-0">
            <CollapsiblePanel v-model:collapsed="recommendationsCollapsed" toggleable header="Recommended Policies">
              <template #toggleicon="iconProps"><ChevronRightIcon :class="iconProps.class" /></template>
              <template #actions>
                <PvButton severity="secondary" variant="text" size="small" @click.stop="showRecommendations = false">
                  <template #icon><XMarkIcon class="w-4 h-4" /></template>
                </PvButton>
              </template>

              <p class="text-body-md text-neutral-subtle mb-4">
                Protect Users and Devices by configuring and applying policies.
                <LinkText label="Learn More" href="#" target="_blank" />
              </p>

              <div class="grid grid-cols-3 gap-4">
                <div class="border border-neutral-default_solid rounded-lg p-4 flex flex-col gap-3 bg-neutral-base">
                  <div class="flex items-center gap-2">
                    <UsersIcon class="w-5 h-5 text-neutral-base shrink-0" />
                    <span class="text-body-md-bold text-neutral-base">User-Scoped Policies Now Available</span>
                    <PvTag value="New" severity="success" />
                  </div>
                  <p class="text-body-sm text-neutral-subtle">You can now assign policies directly to users and user groups, in addition to devices and device groups.</p>
                  <div class="flex items-center gap-2 mt-auto">
                    <PvButton label="Create for Windows" variant="outlined" severity="secondary" size="small" @click="openNewPolicy('user')">
                      <template #icon><WindowsIcon /></template>
                    </PvButton>
                    <PvButton label="Create for Mac" variant="outlined" severity="secondary" size="small" @click="openNewPolicy('user')">
                      <template #icon><AppleIcon /></template>
                    </PvButton>
                  </div>
                </div>

                <div class="border border-neutral-default_solid rounded-lg p-4 flex flex-col gap-3 bg-neutral-base">
                  <span class="text-body-md-bold text-neutral-base">Disable USB mass storage devices</span>
                  <p class="text-body-sm text-neutral-subtle">Prevents mounting of removable storage devices this includes USB mass-storage devices and SD flash cards.</p>
                  <div class="mt-auto">
                    <PvButton label="Create for Mac" variant="outlined" severity="secondary" size="small" @click="openNewPolicy('device')">
                      <template #icon><AppleIcon /></template>
                    </PvButton>
                  </div>
                </div>

                <div class="border border-neutral-default_solid rounded-lg p-4 flex flex-col gap-3 bg-neutral-base">
                  <span class="text-body-md-bold text-neutral-base">Disable USB mass storage devices</span>
                  <p class="text-body-sm text-neutral-subtle">Prevents mounting of removable storage devices this includes USB mass-storage devices and SD flash cards.</p>
                  <div class="mt-auto">
                    <PvButton label="Create for Mac" variant="outlined" severity="secondary" size="small" @click="openNewPolicy('device')">
                      <template #icon><AppleIcon /></template>
                    </PvButton>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>
          </div>

          <!-- Policy Table -->
          <div class="flex-1 flex flex-col min-h-0 p-md gap-md">
            <div class="flex items-center gap-2 shrink-0">
              <PvButton label="Add New" @click="toggleAddMenu">
                <template #icon="iconProps"><PlusIcon :class="iconProps.class" /></template>
              </PvButton>
              <PvMenu ref="addNewMenuRef" :model="addNewMenuItems" :popup="true" class="mt-1" />
              <PvIconField class="w-[460px]">
                <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                <PvInputText placeholder="Search" class="w-full" />
              </PvIconField>
              <div class="flex-1 flex items-center min-w-0 [&_[data-pc-name=iconfield]]:hidden [&>div]:pb-0">
                <DataTableToolbar
                  :showAddButton="false"
                  :showFilterButton="true"
                  :showRefreshButton="true"
                  :showColumnsButton="true"
                  :showDownloadButton="true"
                  :exportOptions="exportOptions"
                />
              </div>
            </div>

            <CircuitDataTable
              class="flex-1 min-h-0 h-full w-full"
              :data="policyData"
              :columns="policyColumns"
              selectionMode="multiple"
              v-model:selection="selectedPolicies"
              :card="true"
              :paginator="true"
              :rows="listRows"
              :first="listFirst"
              :totalRecords="435"
              :lazy="true"
              scrollable
              scrollHeight="flex"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '20 Items per page', value: 20 },
                { label: '50 Items per page', value: 50 },
              ]"
              :showRowsPerPageOptions="true"
              :showPageReport="true"
              dataKey="id"
              @row-click="openDetailFromRow"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== NEW POLICY VIEW ==================== -->
    <div v-else-if="currentView === 'new-policy'" class="flex h-screen overflow-hidden">
      <AppNavigation :menuItems="menuItems" :profileMenuItems="profileMenuItems" activeItem="device management" :collapsible="true" :topNavToggle="true" />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar showBackButton backButtonLabel="Policy Management" @back="goToList" />

        <PageHeader
          :title="newPolicyTitle"
          :icon="$options.shieldIcon"
          :tabs="newPolicyTabs"
          :activeTab="newPolicyOsTab"
          @update:activeTab="onNewPolicyOsTabChange"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag :value="detailTagLabel" :severity="isUserPolicy ? 'branding' : 'accent-purple'">
                <template #icon><UserIcon v-if="isUserPolicy" class="w-3.5 h-3.5" /><ComputerDesktopIcon v-else class="w-3.5 h-3.5" /></template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">Select an OS and configure a policy below</span>
            </div>
          </template>
        </PageHeader>

        <DetailPageLayout maxWidth="1024" class="!w-full !h-full flex-1 min-h-0 bg-neutral-surface">
          <!-- Info banner (User Policy only) -->
          <div v-if="isUserPolicy" class="mb-4">
            <MessageNotification severity="info" detail="When Creating a user policy, only Windows and MacOS can be configured." :closable="false" />
          </div>

          <!-- Search toolbar -->
          <div class="flex items-center gap-3 mb-4">
            <PvIconField class="w-[460px]">
              <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
              <PvInputText v-model="newPolicySearch" placeholder="Search" class="w-full" />
            </PvIconField>
            <PvButton severity="secondary" variant="text" rounded aria-label="Filter">
              <template #icon><FunnelIcon class="w-5 h-5" /></template>
            </PvButton>
            <PvButton severity="secondary" variant="text" rounded aria-label="Refresh">
              <template #icon><ArrowPathIcon class="w-5 h-5" /></template>
            </PvButton>
          </div>

          <!-- Column headers -->
          <div class="flex items-center px-6 h-10 bg-neutral-base">
            <span class="text-body-md-bold text-neutral-base w-[240px] shrink-0 px-2">Name</span>
            <span class="text-body-md-bold text-neutral-base w-[80px] shrink-0 px-2">Type</span>
            <span class="text-body-md-bold text-neutral-base flex-1 px-2">Description</span>
            <span class="w-[120px] shrink-0"></span>
          </div>

          <!-- Configuration cards -->
          <div v-if="filteredPolicyTemplates.length === 0" class="flex flex-col items-center justify-center py-16 text-neutral-subtle">
            <span class="text-body-md">No policies match your search</span>
            <span class="text-body-sm mt-1">Try adjusting your search criteria</span>
          </div>

          <div v-else class="flex flex-col gap-2">
            <div
              v-for="tpl in filteredPolicyTemplates"
              :key="tpl.id"
              class="flex items-center px-6 h-[92px] bg-neutral-base rounded-lg shadow-e100"
            >
              <div class="w-[240px] shrink-0 pr-4">
                <p class="text-body-md text-neutral-base truncate">{{ tpl.name }}</p>
                <p class="text-body-sm text-neutral-muted truncate">{{ tpl.nameDesc }}</p>
              </div>
              <div class="w-[80px] shrink-0">
                <p class="text-body-md text-neutral-base">{{ tpl.type }}</p>
              </div>
              <div class="flex-1 min-w-0 pr-4">
                <p class="text-body-md text-neutral-base line-clamp-2">{{ tpl.description }}</p>
              </div>
              <div class="w-[120px] shrink-0 flex justify-end">
                <PvButton label="Configure" severity="primary" variant="outlined" size="small" @click="configureTemplate(tpl)">
                  <template #icon><Cog6ToothIcon class="w-4 h-4" /></template>
                </PvButton>
              </div>
            </div>
          </div>
        </DetailPageLayout>
      </div>
    </div>

    <!-- ==================== DETAIL VIEW ==================== -->
    <div v-else-if="currentView === 'detail'" class="flex h-screen overflow-hidden">
      <AppNavigation :menuItems="menuItems" :profileMenuItems="profileMenuItems" activeItem="device management" :collapsible="true" :topNavToggle="true" />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar showBackButton backButtonLabel="Policy Management" @back="goToList" />

        <PageHeader
          :title="detailPolicyTitle"
          :icon="$options.shieldIcon"
          :tabs="detailTabs"
          :activeTab="detailTab"
          @update:activeTab="detailTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag :value="detailTagLabel" :severity="isUserPolicy ? 'branding' : 'accent-purple'">
                <template #icon><UserIcon v-if="isUserPolicy" class="w-3.5 h-3.5" /><ComputerDesktopIcon v-else class="w-3.5 h-3.5" /></template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">{{ detailSubtitle }}</span>
            </div>
          </template>
          <template #actions>
            <PvButton label="Active" severity="secondary" variant="outlined" size="small">
              <template #icon><ChevronRightIcon class="w-4 h-4 rotate-90" /></template>
            </PvButton>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface">
          <!-- ───── Details Tab ───── -->
          <DetailPageLayout
            v-if="detailTab === 'details'"
            class="w-full! h-full!"
            :max-width="showDetailSidebar ? '1440' : '1024'"
            :show-sidebar="showDetailSidebar"
          >
            <div class="flex flex-col gap-md">
              <CollapsiblePanel :header="detailCardHeader">
                <template #titleicon="iconProps">
                  <ShieldCheckIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-md">
                  <FormField label="Policy Name">
                    <template #default="{ inputId }">
                      <PvInputText :id="inputId" v-model="policyName" class="w-full" />
                    </template>
                  </FormField>

                  <FormField label="Policy Notes">
                    <template #default="{ inputId }">
                      <PvTextarea :id="inputId" v-model="policyNotes" rows="3" autoResize class="w-full" />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Description</h4>
                    <p class="text-body-md text-neutral-subtle">{{ policyDescriptionText }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
                    <p class="text-body-md text-neutral-subtle">{{ policyBehaviorText }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
                    <p class="text-body-md text-neutral-subtle">{{ policyActivationText }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel v-if="showSettingsCard" header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>
                <CheckboxWithLabel v-model="allowBiometrics" inputId="allowBiometrics" :binary="true">
                  <template #label>{{ isActivationLockPolicy ? 'Allow Activation Lock' : 'Allow the use of biometrics' }}</template>
                </CheckboxWithLabel>
              </CollapsiblePanel>
            </div>

            <template v-if="showDetailSidebar" #sidebar>
              <div class="flex flex-col gap-lg">
                <div
                  v-for="(section, index) in detailPlatformSections"
                  :key="section.platform"
                  class="flex flex-col gap-md"
                >
                  <h3 class="text-heading-3 text-neutral-base">{{ section.platform }}</h3>
                  <KeyValue label="Minimum Supported Version" :value="section.minVersion" />
                  <div class="flex flex-col gap-sm">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Enrollment Types</span>
                    <ul class="flex flex-col gap-xs">
                      <li
                        v-for="enrollmentType in section.enrollmentTypes"
                        :key="enrollmentType"
                        class="flex items-center gap-sm"
                      >
                        <CheckCircleIconSolid class="size-4 shrink-0 text-success-base" />
                        <span class="text-body-md text-neutral-base">{{ enrollmentType }}</span>
                      </li>
                    </ul>
                  </div>
                  <PvDivider v-if="index < detailPlatformSections.length - 1" />
                </div>
              </div>
            </template>
          </DetailPageLayout>

          <!-- ───── Policy Groups Tab ───── -->
          <div v-if="detailTab === 'policy-groups'" class="p-6 pr-4 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <PvIconField class="w-[500px]">
                <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                <PvInputText placeholder="Search" class="w-full" />
              </PvIconField>
              <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundPolicyGroupCount }} of {{ policyGroupsData.length }} policy groups bound</span>
              <div class="flex-1"></div>
              <CheckboxWithLabel v-model="showBoundPolicyGroups" :binary="true" inputId="show-bound-pg">
                <template #label><span class="text-body-md">Show bound policy groups ({{ boundPolicyGroupCount }})</span></template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="policyGroupColumns"
              :data="showBoundPolicyGroups ? selectedPolicyGroups : policyGroupsData"
              selectionMode="multiple"
              v-model:selection="selectedPolicyGroups"
              dataKey="id"
              compareSelectionBy="dataKey"
            />
          </div>

          <!-- ───── Device Groups Tab (Device Policy only) ───── -->
          <div v-if="detailTab === 'device-groups' && isDevicePolicy" class="p-6 pr-4 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <PvIconField class="w-[500px]">
                <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                <PvInputText placeholder="Search" class="w-full" />
              </PvIconField>
              <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundDeviceGroupCount }} of {{ deviceGroupsData.length }} device groups bound</span>
              <div class="flex-1"></div>
              <CheckboxWithLabel v-model="showBoundDeviceGroups" :binary="true" inputId="show-bound-dg">
                <template #label><span class="text-body-md">Show bound device groups ({{ boundDeviceGroupCount }})</span></template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="deviceGroupColumns"
              :data="showBoundDeviceGroups ? selectedDeviceGroups : deviceGroupsData"
              selectionMode="multiple"
              v-model:selection="selectedDeviceGroups"
              dataKey="id"
              compareSelectionBy="dataKey"
            />
          </div>

          <!-- ───── User Groups Tab (User Policy only) ───── -->
          <div v-if="detailTab === 'user-groups' && isUserPolicy" class="p-6 pr-4 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <PvIconField class="w-[500px]">
                <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                <PvInputText placeholder="Search" class="w-full" />
              </PvIconField>
              <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundUserGroupCount }} of {{ userGroupsData.length }} user groups bound</span>
              <div class="flex-1"></div>
              <CheckboxWithLabel v-model="showBoundUserGroups" :binary="true" inputId="show-bound-ug">
                <template #label><span class="text-body-md">Show bound user groups ({{ boundUserGroupCount }})</span></template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="userGroupColumns"
              :data="showBoundUserGroups ? selectedUserGroups : userGroupsData"
              selectionMode="multiple"
              v-model:selection="selectedUserGroups"
              dataKey="id"
              compareSelectionBy="dataKey"
            />
          </div>

          <!-- ───── Devices Tab (Device Policy only) ───── -->
          <div v-if="detailTab === 'devices' && isDevicePolicy" class="p-6 pr-4 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <PvIconField class="w-[500px]">
                <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                <PvInputText placeholder="Search" class="w-full" />
              </PvIconField>
              <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundDeviceCount }} of {{ totalDeviceCount }} Devices</span>
              <div class="flex-1"></div>
              <CheckboxWithLabel v-model="showBoundDevices" :binary="true" inputId="show-bound-devices">
                <template #label><span class="text-body-md">Show bound devices ({{ boundDeviceCount }})</span></template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="bindingDevicesColumns"
              :data="showBoundDevices ? selectedBindingDevices : bindingDevicesData"
              v-model:selection="selectedBindingDevices"
              selectionMode="multiple"
              dataKey="id"
              compareSelectionBy="dataKey"
              :paginator="true"
              :rows="50"
              :totalRecords="totalDeviceCount"
              scrollable
              scrollHeight="flex"
            />
          </div>

          <!-- ───── Users Tab (User Policy only) ───── -->
          <div v-if="detailTab === 'users' && isUserPolicy" class="p-6 pr-4 flex flex-col gap-4">
            <div class="flex items-center gap-4">
              <PvIconField class="w-[500px]">
                <PvInputIcon class="flex items-center justify-center"><MagnifyingGlassIcon class="w-4 h-4" /></PvInputIcon>
                <PvInputText placeholder="Search" class="w-full" />
              </PvIconField>
              <span class="text-body-md text-neutral-subtle whitespace-nowrap">{{ boundUserCount }} of {{ totalUserCount }} User Policies</span>
              <div class="flex-1"></div>
              <CheckboxWithLabel v-model="showBoundUsers" :binary="true" inputId="show-bound-users">
                <template #label><span class="text-body-md">Show bound users ({{ boundUserCount }})</span></template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="bindingUsersColumns"
              :data="showBoundUsers ? selectedBindingUsers : bindingUsersData"
              v-model:selection="selectedBindingUsers"
              selectionMode="multiple"
              dataKey="id"
              compareSelectionBy="dataKey"
              :paginator="true"
              :rows="50"
              :totalRecords="totalUserCount"
              scrollable
              scrollHeight="flex"
            />
          </div>
        </div>

        <!-- Footer with Cancel/Save -->
        <div class="flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base shrink-0">
          <PvButton label="Cancel" severity="secondary" variant="text" @click="goToList" />
          <PvButton :label="detailIsEditFlow ? 'Save' : 'Create Policy'" :disabled="isSaveDisabled" @click="handleSave" />
        </div>
      </div>

    </div>
  `,
  shieldIcon: markRaw(ShieldCheckIcon),
});


export { UserScopedPoliciesPage };
const meta: Meta<typeof UserScopedPoliciesPage> = {
  title: "Projects/Mike's Playground/User Scoped Policies/Pages/Policy Management",
  component: UserScopedPoliciesPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof UserScopedPoliciesPage>;

export const Default: Story = {};
