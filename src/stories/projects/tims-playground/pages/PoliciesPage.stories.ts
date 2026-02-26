import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, computed } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellButton,
  DataTableCellLink,
  DataTableCellToken,
  RadioButtonWithLabel,
  CheckboxWithLabel,
  FormField,
  Paginator,
  LinkText,
  CardButton,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import IconField from 'primevue/iconfield';
import Dialog from 'primevue/dialog';

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
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  ChevronRightIcon,
  XMarkIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DocumentDuplicateIcon,
  FunnelIcon,
} from '@heroicons/vue/24/outline';

import { CheckCircleIcon as CheckCircleSolidIcon, ShieldCheckIcon as ShieldCheckSolidIcon } from '@heroicons/vue/24/solid';

import TopBar from '../../../../components/TopBar.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

// ─── Navigation Data ───────────────────────────────────────────────

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  {
    label: 'User Management', leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
      { separator: true },
      { label: 'Active Directory' }, { label: 'Cloud Directories' },
      { label: 'HR Directories' }, { label: 'Identity Provider' },
    ],
  },
  {
    label: 'Device Management', leftIcon: markRaw(DeviceManagementIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(DeviceListsIcon) },
      { label: 'Device Groups', leftIcon: markRaw(DeviceGroupsIcon) },
      { label: 'Commands', leftIcon: markRaw(CommandLineIcon) },
      { label: 'Asset Management', leftIcon: markRaw(ClipboardDocumentListIcon), isNew: true },
      { separator: true },
      { label: 'Policy Management' }, { label: 'Policy Groups' },
      { label: 'Software Deployment' }, { label: 'MDM' },
    ],
  },
  {
    label: 'Access', leftIcon: markRaw(AccessIcon), count: 1,
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'Access Reports', isNew: true },
      { label: 'SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'Password Management', leftIcon: markRaw(PasswordManagerIcon) },
      { label: 'LDAP' }, { label: 'RADIUS' },
    ],
  },
  {
    label: 'Security', leftIcon: markRaw(ShieldCheckIcon),
    items: [
      { label: 'Conditional Access Policies' }, { label: 'Conditional List' },
      { label: 'MFA Configurations' }, { label: 'Device Trust' },
    ],
  },
  {
    label: 'Insights', leftIcon: markRaw(ChartBarSquareIcon),
    items: [{ label: 'Reports' }, { label: 'Directory Insights' }],
  },
  {
    label: 'Settings', leftIcon: markRaw(Cog6ToothIcon),
    items: [{ label: 'Reports' }],
  },
  { label: 'Alert', leftIcon: markRaw(BellIcon), count: 23, isNew: true },
];

const profileMenuItems = [
  {
    label: 'Admin IT', itemType: 'profile_compact', initials: 'AT', name: 'Admin IT',
    items: [
      { label: 'Admin IT', itemType: 'profile_large', name: 'Admin IT', email: 'admin_it@company.com', initials: 'AT' },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
      { separator: true },
      { label: 'Billing' }, { label: 'My API Key' },
      { separator: true },
      { label: 'Use Old Navigation', itemType: 'button' },
    ],
  },
];

// ─── Policy List Data ──────────────────────────────────────────────

const policyData = [
  { id: 1, os: 'Windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 2, os: 'Windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 3, os: 'Mac', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 4, os: 'Mac', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 5, os: 'Mac', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 6, os: 'Windows', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 7, os: 'Windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
  { id: 8, os: 'Mac', name: 'Allow Activation Lock', description: 'Description text', policyLevel: 'Device', requirements: 'JumpCloud MDM Enrollment' },
  { id: 9, os: 'Windows', name: 'Mike Meade 01', description: 'Description text', policyLevel: 'User', requirements: 'JumpCloud MDM Enrollment' },
];

const policyColumns = [
  { field: 'os', header: 'Type', sortable: true, width: '80px', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ icon: sp.data.os === 'Windows' ? markRaw(ComputerDesktopIcon) : markRaw(DevicePhoneMobileIcon) }) },
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.description }) },
  { field: 'policyLevel', header: 'Policy level', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.policyLevel as string, icon: sp.data.policyLevel === 'User' ? markRaw(UserIcon) : markRaw(ComputerDesktopIcon) }) },
  { field: 'requirements', header: 'Requirements', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.requirements }) },
];

const exportOptions = [
  { id: 'csv', label: 'Export as CSV' },
  { id: 'json', label: 'Export as JSON' },
];

// ─── Wizard Data ───────────────────────────────────────────────────

const policyTemplates = [
  { id: 1, name: 'Advanced: Custom Registry K...', nameDesc: 'Enterprise Settings, Configuration', type: 'Agent', description: 'Utilize custom policies to enforce configurations onto your fleet of systems that JumpCloud may not offer in our standard policies' },
  { id: 2, name: 'Application Restriction', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
  { id: 3, name: 'Advanced: Custom Registry K...', nameDesc: 'Enterprise Settings, Configuration', type: 'Agent', description: 'Utilize custom policies to enforce configurations onto your fleet of systems that JumpCloud may not offer in our standard policies' },
  { id: 4, name: 'Application Restriction', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
  { id: 5, name: 'Advanced: Custom Registry K...', nameDesc: 'Enterprise Settings, Configuration', type: 'Agent', description: 'Utilize custom policies to enforce configurations onto your fleet of systems that JumpCloud may not offer in our standard policies' },
  { id: 6, name: 'Application Restriction', nameDesc: 'Enterprise Settings, Configuration', type: 'MDM', description: 'This policy defines a list of applications that are explicitly denied from running on the MDM managed devices.' },
];

const templateColumns = [
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.nameDesc }) },
  { field: 'type', header: 'Type', sortable: true, width: '100px', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.type }) },
  { field: 'description', header: 'Description', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.description }) },
  { field: 'actions', header: '', width: '120px', component: markRaw(DataTableCellButton), componentProps: () => ({ type: 'Button', actionButtons: [{ label: 'Configure', icon: markRaw(Cog6ToothIcon) }] }) },
];

const wizardSteps = [
  { number: 1, label: 'Policy Type' },
  { number: 2, label: 'OS Selection' },
  { number: 3, label: 'Policy Configuration' },
  { number: 4, label: 'Policy Binding' },
  { number: 5, label: 'Summary' },
];

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
  { field: 'userState', header: 'User State', sortable: true, component: markRaw(DataTableCellToken), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Status', statusLabel: sp.data.userState }) },
  { field: 'name', header: 'Name', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.username }) },
  { field: 'email', header: 'Email', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.email }) },
];

// ─── Policy Detail Data ────────────────────────────────────────────

const policyGroupsData = [
  { id: 1, group: 'Automated Devices', groupDesc: 'Group of Configurations', bound: true },
  { id: 2, group: 'CIS Benchmark Policy', groupDesc: 'Group of Configurations', bound: true },
  { id: 3, group: 'Early Adoption Ring', groupDesc: 'Group of Configurations', bound: false },
  { id: 4, group: 'Fonts', groupDesc: 'Group of Configurations', bound: false },
  { id: 5, group: 'General Adoption Ring', groupDesc: 'Group of Configurations', bound: false },
  { id: 6, group: 'IM - SOC2', groupDesc: 'Group of Configurations', bound: false },
  { id: 7, group: 'iOS Test', groupDesc: 'Group of Configurations', bound: false },
  { id: 8, group: 'JumpCloud Enhanced Security - Apple', groupDesc: 'Group of Configurations', bound: false },
];

const policyGroupColumns = [
  { field: 'group', header: 'Group', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.group, description: sp.data.groupDesc, href: '#' }) },
];

const deviceGroupsData = [
  { id: 1, group: 'ADE iOS Devices', groupDesc: 'Group of Devices', numDevices: 0, membershipControls: 'Static', bound: true },
  { id: 2, group: 'Admin Sudo Device Group', groupDesc: 'Group of Devices', numDevices: 0, membershipControls: 'Dynamic', bound: false },
  { id: 3, group: 'All Android Devices', groupDesc: 'Group of Devices', numDevices: 7, membershipControls: 'Dynamic', bound: false },
  { id: 4, group: 'All Devices', groupDesc: 'Group of Devices', numDevices: 18, membershipControls: 'Static', bound: false },
  { id: 5, group: 'Automated Device Enrollment', groupDesc: 'Group of Devices', numDevices: 1, membershipControls: 'Static', bound: true },
  { id: 6, group: 'BYOD iOS Devices', groupDesc: 'Group of Devices', numDevices: 0, membershipControls: 'Static', bound: false },
  { id: 7, group: 'Declan Test', groupDesc: 'Group of Devices', numDevices: 0, membershipControls: 'Static', bound: false },
  { id: 8, group: 'Device notification check', groupDesc: 'Group of Devices', numDevices: 0, membershipControls: 'Static', bound: false },
];

const deviceGroupColumns = [
  { field: 'group', header: 'Group', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.group, description: sp.data.groupDesc, href: '#' }) },
  { field: 'numDevices', header: 'Number of Devices', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: String(sp.data.numDevices) }) },
  { field: 'membershipControls', header: 'Device Membership Controls', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.membershipControls }) },
];

const devicesData = [
  { id: 1, status: 'Active', deviceName: 'Sergey iPadOS DMPYG1HDKD6L', os: 'iPadOS 26.0', bound: true },
  { id: 2, status: 'Inactive', deviceName: 'Unassigned iPadOS X3NG2F6FY2', os: 'iPadOS 18.4.1 MDM', bound: false },
  { id: 3, status: 'Inactive', deviceName: 'Shahnawaz iOS F0W6H47906', os: 'iOS 18.5 MDM', bound: false },
  { id: 4, status: 'Inactive', deviceName: 'iPad', os: 'iPadOS 26.1 MDM', bound: false },
];

const devicesColumns = [
  { field: 'status', header: 'Status', width: '80px', component: markRaw(DataTableCellToken), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Status', statusLabel: sp.data.status }) },
  { field: 'deviceName', header: 'Device Name', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.deviceName, href: '#' }) },
  { field: 'os', header: 'OS', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.os }) },
];

// ─── Component ─────────────────────────────────────────────────────

const PoliciesPage = defineComponent({
  name: 'PoliciesPage',
  components: {
    AppNavigation, PageHeader, CollapsiblePanel, CircuitDataTable, DataTableToolbar,
    RadioButtonWithLabel, CheckboxWithLabel, FormField, LinkText, Paginator,
    PvButton: Button, PvTag: Tag, PvInputText: InputText, PvTextarea: Textarea,
    PvTabs: Tabs, PvTabList: TabList, PvTab: Tab, PvIconField: IconField, PvDialog: Dialog,
    TopBar, SparklesIcon, ComputerDesktopIcon, DevicePhoneMobileIcon,
    ChevronRightIcon, XMarkIcon, ShieldCheckIcon, CheckCircleSolidIcon,
    ShieldCheckSolidIcon, MagnifyingGlassIcon, Cog6ToothIcon, ArrowLeftIcon, ArrowRightIcon,
    DocumentDuplicateIcon, CardButton,
  },
  setup() {
    // ── List view state ──
    const showRecommendations = ref(true);
    const recommendationsCollapsed = ref(false);
    const selectedPolicies = ref([]);
    const paginatorFirst = ref(0);
    const paginatorRows = ref(100);

    // ── Wizard state ──
    const wizardActive = ref(false);
    const activeStep = ref(1);
    const policyType = ref('user');
    const selectedOS = ref('windows');
    const wizardPolicyName = ref('Allow the use of biometrics');
    const wizardPolicyNotes = ref('');
    const wizardConfigTab = ref('details');
    const wizardBindingTab = ref('policyGroups');
    const wizardAllowBiometrics = ref(false);
    const selectedBindingUsers = ref(bindingUsersData.filter(u => u.bound));
    const showBoundUsers = ref(false);

    // ── Detail view state ──
    const detailActive = ref(false);
    const detailTab = ref('details');
    const detailPolicyName = ref('2022 RADIUS Profile');
    const detailPolicyNotes = ref('');
    const selectedDetailPolicy = ref<Record<string, unknown> | null>(null);
    const showBoundPolicyGroups = ref(false);
    const showBoundDeviceGroups = ref(false);
    const showBoundDevices = ref(false);
    const selectedPolicyGroups = ref(policyGroupsData.filter(g => g.bound));
    const selectedDeviceGroups = ref(deviceGroupsData.filter(g => g.bound));
    const selectedDevices = ref(devicesData.filter(d => d.bound));

    // ── View routing ──
    type ViewState = 'list' | 'wizard' | 'detail';
    const currentView = computed<ViewState>(() => {
      if (wizardActive.value) return 'wizard';
      if (detailActive.value) return 'detail';
      return 'list';
    });

    function startWizard() {
      wizardActive.value = true;
      activeStep.value = 1;
      policyType.value = 'user';
      selectedOS.value = 'windows';
    }

    function cancelWizard() {
      wizardActive.value = false;
    }

    function nextStep() {
      if (activeStep.value < 5) activeStep.value++;
    }

    function prevStep() {
      if (activeStep.value > 1) activeStep.value--;
    }

    function openDetail(policy: Record<string, unknown>) {
      selectedDetailPolicy.value = policy;
      detailPolicyName.value = policy.name as string;
      detailPolicyNotes.value = '';
      detailTab.value = 'details';
      detailActive.value = true;
      selectedPolicyGroups.value = policyGroupsData.filter(g => g.bound);
      selectedDeviceGroups.value = deviceGroupsData.filter(g => g.bound);
      selectedDevices.value = devicesData.filter(d => d.bound);
    }

    function closeDetail() {
      detailActive.value = false;
      selectedDetailPolicy.value = null;
    }

    const canGoNext = computed(() => {
      switch (activeStep.value) {
        case 1: return policyType.value !== '';
        case 2: return selectedOS.value !== '';
        default: return true;
      }
    });

    const boundPolicyGroupCount = computed(() => selectedPolicyGroups.value.length);
    const boundDeviceGroupCount = computed(() => selectedDeviceGroups.value.length);

    return {
      menuItems, profileMenuItems, policyData, policyColumns, exportOptions,
      policyTemplates, templateColumns, wizardSteps, bindingUsersData, bindingUsersColumns,
      policyGroupsData, policyGroupColumns, deviceGroupsData, deviceGroupColumns,
      devicesData, devicesColumns,
      showRecommendations, recommendationsCollapsed, selectedPolicies,
      paginatorFirst, paginatorRows,
      wizardActive, activeStep, policyType, selectedOS, wizardPolicyName, wizardPolicyNotes, wizardConfigTab, wizardBindingTab, wizardAllowBiometrics, selectedBindingUsers, showBoundUsers, canGoNext,
      detailActive, detailTab, detailPolicyName, detailPolicyNotes,
      selectedDetailPolicy, showBoundPolicyGroups, showBoundDeviceGroups,
      showBoundDevices, selectedPolicyGroups, selectedDeviceGroups, selectedDevices,
      boundPolicyGroupCount, boundDeviceGroupCount,
      currentView,
      startWizard, cancelWizard, nextStep, prevStep,
      openDetail, closeDetail,
    };
  },
  template: `
    <!-- ==================== WIZARD DIALOG ==================== -->
    <PvDialog
      v-model:visible="wizardActive"
      :modal="true"
      :closable="true"
      :maximizable="true"
      :maximized="true"
      :draggable="false"
      :pt="{ content: { style: 'padding: 0 !important; padding-inline: max(50% - 512px, 16px) !important; overflow: hidden !important; gap: 0 !important' } }"
    >
      <template #header>
        <div class="flex items-center gap-2 flex-1" style="min-height: 32px">
          <ShieldCheckIcon class="w-5 h-5 text-neutral-base shrink-0" />
          <span class="flex-1 truncate">Add New Policy</span>
        </div>
      </template>

      <div class="flex items-center justify-center py-6 px-4 bg-neutral-base shrink-0">
        <div class="flex items-center gap-3 w-full max-w-[768px]">
        <template v-for="(step, idx) in wizardSteps" :key="step.number">
          <div class="flex items-center gap-3" :class="idx < wizardSteps.length - 1 ? 'flex-1 min-w-0' : 'shrink-0'">
            <div class="flex items-center gap-2 shrink-0"
              :class="activeStep > step.number ? 'cursor-pointer' : ''"
              @click="activeStep > step.number ? (activeStep = step.number) : null">
              <div class="w-6 h-6 rounded-full flex items-center justify-center shadow-e100 transition-all"
                :class="{
                  'bg-branding-base': activeStep >= step.number,
                  'bg-neutral-surface': activeStep < step.number,
                }">
                <span class="text-body-sm-semi-bold"
                  :class="{
                    'text-branding-strong': activeStep >= step.number,
                    'text-neutral-subtle': activeStep < step.number,
                  }">{{ step.number }}</span>
              </div>
              <span class="text-body-sm whitespace-nowrap"
                :class="{
                  'text-neutral-base font-medium': activeStep >= step.number,
                  'text-neutral-subtle font-medium': activeStep < step.number,
                }">{{ step.label }}</span>
            </div>
            <div v-if="idx < wizardSteps.length - 1" class="flex-1 h-0.5 rounded-sm transition-colors"
              :class="activeStep >= step.number ? 'bg-branding-base' : 'bg-neutral-strong_solid'" />
          </div>
        </template>
        </div>
      </div>

      <div class="flex-1 overflow-auto">
        <div v-if="activeStep === 1" class="flex flex-col items-center pb-10 px-4" style="padding-top: 56px">
          <div class="w-full max-w-[768px]">
            <h2 class="text-heading-3 text-neutral-base mb-5">Which type of policy do you want to configure?</h2>
            <div class="grid grid-cols-2 gap-4">
              <CardButton
                title="User Policy"
                content="Execute tailored or standard scripts seamlessly across macOS, Windows, and Linux platforms."
                :trailingIcon="$options.arrowRightIcon"
                @click="policyType = 'user'; nextStep()"
              >
                <template #leading>
                  <UserIcon class="w-5 h-5 text-neutral-base shrink-0" />
                </template>
              </CardButton>
              <CardButton
                title="Device Policy"
                content="Manage and enforce device-level configurations, security settings, and compliance policies across your fleet."
                :trailingIcon="$options.arrowRightIcon"
                @click="policyType = 'device'; nextStep()"
              >
                <template #leading>
                  <ComputerDesktopIcon class="w-5 h-5 text-neutral-base shrink-0" />
                </template>
              </CardButton>
            </div>
          </div>
        </div>

        <div v-if="activeStep === 2" class="flex flex-col items-center py-6 px-4">
          <div class="w-full max-w-[940px]">
            <p class="text-body-md text-neutral-subtle mb-4">Select an OS and configure a policy below</p>
            <PvTabs v-model:value="selectedOS" class="mb-4">
              <PvTabList>
                <PvTab value="windows">Windows</PvTab>
                <PvTab value="mac">Mac</PvTab>
              </PvTabList>
            </PvTabs>
            <DataTableToolbar searchPlaceholder="Search" :showAddButton="false" showFilterButton showRefreshButton class="mb-4" />

            <div class="flex items-center px-2 mb-2">
              <span class="text-body-sm-semi-bold text-neutral-base w-[200px] shrink-0 px-2">Name</span>
              <span class="text-body-sm-semi-bold text-neutral-base w-[80px] shrink-0 px-2">Type</span>
              <span class="text-body-sm-semi-bold text-neutral-base flex-1 px-2">Description</span>
              <span class="w-[100px] shrink-0"></span>
            </div>

            <div class="flex flex-col gap-3">
              <div v-for="tpl in policyTemplates" :key="tpl.id" class="bg-neutral-base rounded-lg shadow-e100 cursor-pointer hover:bg-neutral-bold transition-colors" @click="nextStep">
                <div class="flex items-center p-2">
                  <div class="flex items-center px-2 py-1.5 w-[200px] shrink-0">
                    <div class="flex flex-col gap-0.5 min-w-0 w-full">
                      <p class="text-body-sm font-medium text-neutral-base truncate">{{ tpl.name }}</p>
                      <p class="text-body-xs text-neutral-muted truncate">{{ tpl.nameDesc }}</p>
                    </div>
                  </div>
                  <div class="flex items-center px-2 py-1.5 w-[80px] shrink-0">
                    <p class="text-body-sm text-neutral-base truncate">{{ tpl.type }}</p>
                  </div>
                  <div class="flex items-center px-2 py-1.5 flex-1 min-w-0">
                    <p class="text-body-sm text-neutral-base truncate">{{ tpl.description }}</p>
                  </div>
                  <div class="flex items-center gap-1 p-2 shrink-0">
                    <PvButton label="Configure" severity="primary" variant="outlined" size="small" @click.stop="nextStep">
                      <template #icon><Cog6ToothIcon class="w-4 h-4" /></template>
                    </PvButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeStep === 3" class="flex flex-col items-center py-6 px-4">
          <div class="w-full max-w-[940px]">
            <p class="text-body-md text-neutral-subtle mb-4">Configure the policy details below and click save to create the policy configuration</p>

            <div class="max-w-3xl">
              <div class="bg-neutral-base rounded-lg shadow-e100 p-6 mb-6">
                <h3 class="text-heading-4 text-neutral-base mb-4">Windows User Policy</h3>
                <FormField label="Policy Name" class="mb-4">
                  <PvInputText v-model="wizardPolicyName" class="w-full" />
                </FormField>
                <FormField label="Policy Notes" class="mb-6">
                  <PvTextarea v-model="wizardPolicyNotes" rows="3" class="w-full" />
                </FormField>
                <div class="mb-4">
                  <h4 class="text-heading-5 text-neutral-base mb-1">Policy Description</h4>
                  <p class="text-body-md text-neutral-subtle">Help strengthen authentication and guard against potential spoofing by using fingerprint matching provided by the Windows Hello service.</p>
                </div>
                <div class="mb-4">
                  <h4 class="text-heading-5 text-neutral-base mb-1">Policy Behavior</h4>
                  <p class="text-body-md text-neutral-subtle">lets you remotely allow or restrict the user from logging in to a managed system using biometrics. NOTE: JumpCloud does not allow the use of Multi-Factor Authentication (MFA) and biometrics simultaneously. For example, if you enable MFA in JumpCloud, users can't log in to their managed system with their fingerprint.</p>
                </div>
                <div class="mb-0">
                  <h4 class="text-heading-5 text-neutral-base mb-1">Policy Activation</h4>
                  <p class="text-body-md text-neutral-subtle">After you save the policy it takes effect immediately.</p>
                </div>
              </div>

              <div class="bg-neutral-base rounded-lg shadow-e100 p-6">
                <h3 class="text-heading-4 text-neutral-base mb-4">Settings</h3>
                <CheckboxWithLabel v-model="wizardAllowBiometrics" inputId="allowBiometrics" :binary="true">
                  <template #label>Allow the use of biometrics</template>
                </CheckboxWithLabel>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeStep === 4" class="flex flex-col items-center py-6 px-4">
          <div class="w-full">
            <p class="text-body-md text-neutral-subtle mb-4">Select policy groups, user groups, or users below, and then select your targets from the list and select "next" to bind the policy.</p>
            <PvTabs v-model:value="wizardBindingTab" class="mb-4">
              <PvTabList>
                <PvTab value="policyGroups">Policy Groups</PvTab>
                <PvTab value="userGroups">User Groups</PvTab>
                <PvTab value="users">Users</PvTab>
              </PvTabList>
            </PvTabs>

            <div v-if="wizardBindingTab === 'users'">
              <div class="flex items-center gap-4 mb-4">
                <div class="flex-1">
                  <DataTableToolbar searchPlaceholder="Search" class="mb-0" />
                </div>
                <span class="text-body-sm text-neutral-subtle whitespace-nowrap">{{ selectedBindingUsers.length }} of {{ bindingUsersData.length }} User Policies</span>
                <CheckboxWithLabel v-model="showBoundUsers" inputId="showBound" :binary="true">
                  <template #label>Show bound users ({{ selectedBindingUsers.length }})</template>
                </CheckboxWithLabel>
              </div>
              <CircuitDataTable
                :columns="bindingUsersColumns"
                :data="showBoundUsers ? selectedBindingUsers : bindingUsersData"
                v-model:selection="selectedBindingUsers"
                selectionMode="multiple"
                dataKey="id"
              />
            </div>

            <div v-if="wizardBindingTab === 'userGroups'">
              <p class="text-body-md text-neutral-subtle">User group binding will be configured here.</p>
            </div>

            <div v-if="wizardBindingTab === 'policyGroups'">
              <p class="text-body-md text-neutral-subtle">Policy group binding will be configured here.</p>
            </div>
          </div>
        </div>

        <div v-if="activeStep === 5" class="flex justify-center py-10 px-4">
          <div class="w-full max-w-2xl bg-neutral-base rounded-lg shadow-e100 p-6">
            <h2 class="text-heading-3 text-neutral-base mb-2">Summary</h2>
            <p class="text-body-md text-neutral-subtle">Review your policy configuration before saving.</p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex items-center justify-end gap-2 w-full">
          <PvButton label="Cancel" severity="secondary" variant="text" @click="cancelWizard" />
          <PvButton v-if="activeStep > 1 && activeStep < 5" label="Next" :disabled="!canGoNext" @click="nextStep" />
          <PvButton v-if="activeStep === 5" label="Save Policy" severity="success" @click="cancelWizard" />
        </div>
      </template>
    </PvDialog>

    <!-- ==================== DETAIL VIEW ==================== -->
    <div v-if="currentView === 'detail'" class="flex h-screen overflow-hidden">
      <AppNavigation :menuItems="menuItems" :profileMenuItems="profileMenuItems" activeItem="device management" :collapsible="true" />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar>
          <template #search-icon>
            <PvButton label="Policies" severity="secondary" variant="outlined" size="small" class="mr-3" @click="closeDetail">
              <template #icon><ArrowLeftIcon class="w-4 h-4" /></template>
            </PvButton>
          </template>
        </TopBar>

        <PageHeader
          :title="detailPolicyName"
          :icon="$options.shieldIcon"
          subtitleText="JumpCloud MDM enrollment"
          :tabs="$options.detailTabs"
          :activeTab="detailTab"
          @update:activeTab="detailTab = $event"
        >
          <template #actions>
            <div class="flex items-center gap-2">
              <PvButton label="Cancel" severity="secondary" variant="outlined" size="small" @click="closeDetail" />
              <PvButton label="Save" size="small" />
            </div>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface">

          <!-- ───── Details Tab ───── -->
          <div v-if="detailTab === 'details'" class="p-6 flex flex-col gap-6 max-w-3xl">
            <h3 class="text-heading-3 text-neutral-base">iOS - MDM Custom Configuration Profile Policy</h3>

            <FormField label="Policy Name">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="detailPolicyName" class="w-full" />
              </template>
            </FormField>

            <FormField label="Policy Notes">
              <template #default="{ inputId }">
                <PvTextarea :id="inputId" v-model="detailPolicyNotes" rows="3" autoResize class="w-full" />
              </template>
            </FormField>

            <div class="flex flex-col gap-1">
              <h4 class="text-body-md-bold text-neutral-base">Policy Description</h4>
              <p class="text-body-md text-neutral-subtle">
                Distribute custom MDM configuration profiles using this policy. Profiles can be exported from tools like Apple
                Configurator or ProfileCreator and then uploaded as .mobileconfig files.
                <LinkText label="Learn more" href="#" />
              </p>
            </div>

            <div class="flex flex-col gap-1">
              <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
              <p class="text-body-md text-neutral-subtle">Applies the provided mobileconfig configuration to the device using the MDM protocol.</p>
            </div>

            <div class="flex flex-col gap-1">
              <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
              <p class="text-body-md text-neutral-subtle">You must set up an Apple MDM Certificate before this policy takes effect.</p>
            </div>

            <div class="flex flex-col gap-3 border-t border-neutral-default_solid pt-6">
              <h3 class="text-heading-3 text-neutral-base">Settings</h3>
              <div class="flex flex-col gap-1">
                <h4 class="text-body-md-bold text-neutral-base">Profile Contents:</h4>
                <div class="relative rounded-lg border border-neutral-default_solid bg-neutral-surface p-4 font-mono text-body-sm text-neutral-base overflow-auto max-h-40">
                  <PvButton label="Copy" severity="secondary" variant="outlined" size="small" class="absolute top-2 right-2">
                    <template #icon><DocumentDuplicateIcon class="w-4 h-4" /></template>
                  </PvButton>
                  <pre class="whitespace-pre-wrap">&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;
&lt;plist version="1.0"&gt;
  &lt;dict&gt;
    &lt;key&gt;PayloadContent&lt;/key&gt;
    &lt;array/&gt;
  &lt;/dict&gt;
&lt;/plist&gt;</pre>
                </div>
              </div>
            </div>
          </div>

          <!-- ───── Policy Groups Tab ───── -->
          <div v-if="detailTab === 'policy-groups'" class="p-6 flex flex-col gap-4">
            <p class="text-body-md text-neutral-subtle">{{ detailPolicyName }} is a member of the selected policy group:</p>
            <div class="flex items-center gap-4">
              <DataTableToolbar searchPlaceholder="Search" class="flex-1" />
              <span class="text-body-sm text-neutral-subtle whitespace-nowrap">{{ boundPolicyGroupCount }} of {{ policyGroupsData.length }} policy groups bound</span>
              <CheckboxWithLabel v-model="showBoundPolicyGroups" :binary="true" inputId="show-bound-pg">
                <template #label>show bound policy groups ({{ boundPolicyGroupCount }})</template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="policyGroupColumns"
              :data="policyGroupsData"
              selectionMode="multiple"
              :selection="selectedPolicyGroups"
              @update:selection="selectedPolicyGroups = $event"
            />
          </div>

          <!-- ───── Device Groups Tab ───── -->
          <div v-if="detailTab === 'device-groups'" class="p-6 flex flex-col gap-4">
            <p class="text-body-md text-neutral-subtle">{{ detailPolicyName }} configuration is applied to all iOS Devices within the following groups:</p>
            <div class="flex items-center gap-4">
              <DataTableToolbar searchPlaceholder="Search" class="flex-1" />
              <span class="text-body-sm text-neutral-subtle whitespace-nowrap">{{ boundDeviceGroupCount }} of {{ deviceGroupsData.length }} device groups bound</span>
              <CheckboxWithLabel v-model="showBoundDeviceGroups" :binary="true" inputId="show-bound-dg">
                <template #label>show bound device groups ({{ boundDeviceGroupCount }})</template>
              </CheckboxWithLabel>
            </div>
            <CircuitDataTable
              :columns="deviceGroupColumns"
              :data="deviceGroupsData"
              selectionMode="multiple"
              :selection="selectedDeviceGroups"
              @update:selection="selectedDeviceGroups = $event"
            />
          </div>

          <!-- ───── Devices Tab ───── -->
          <div v-if="detailTab === 'devices'" class="p-6 flex flex-col gap-4">
            <p class="text-body-md text-neutral-subtle">{{ detailPolicyName }} configuration is applied to the selected devices:</p>
            <div class="flex items-center gap-4">
              <DataTableToolbar searchPlaceholder="Search" class="flex-1" />
              <CheckboxWithLabel v-model="showBoundDevices" :binary="true" inputId="show-bound-devices">
                <template #label>show bound devices</template>
              </CheckboxWithLabel>
            </div>
            <div class="flex justify-end">
              <LinkText label="Run Users To Devices Report" href="#" />
            </div>
            <CircuitDataTable
              :columns="devicesColumns"
              :data="devicesData"
              selectionMode="multiple"
              :selection="selectedDevices"
              @update:selection="selectedDevices = $event"
            />
          </div>

        </div>
      </div>
    </div>

    <!-- ==================== LIST VIEW ==================== -->
    <div v-else-if="currentView === 'list'" class="flex h-screen overflow-hidden">
      <AppNavigation :menuItems="menuItems" :profileMenuItems="profileMenuItems" activeItem="device management" :collapsible="true" />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />
        <PageHeader title="Policy Management" :icon="$options.shieldIcon" />

        <div class="flex-1 overflow-auto bg-neutral-surface">
          <div v-if="showRecommendations" class="px-6 pt-6">
            <CollapsiblePanel v-model:collapsed="recommendationsCollapsed" toggleable header="Recommended Policies (3)">
              <template #titleicon="iconProps"><SparklesIcon :class="iconProps.class" /></template>
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
                    <SparklesIcon class="w-5 h-5 text-neutral-base shrink-0" />
                    <span class="text-body-md-bold text-neutral-base">User-Scoped Policies Now Available</span>
                    <PvTag value="New" severity="success" />
                  </div>
                  <p class="text-body-sm text-neutral-subtle">You can now assign policies directly to users and user groups, in addition to devices and device groups.</p>
                  <div class="flex items-center gap-2 mt-auto">
                    <PvButton label="Create for Windows" variant="outlined" severity="secondary" size="small">
                      <template #icon><ComputerDesktopIcon class="w-4 h-4" /></template>
                    </PvButton>
                    <PvButton label="Create for Mac" variant="outlined" severity="secondary" size="small">
                      <template #icon><DevicePhoneMobileIcon class="w-4 h-4" /></template>
                    </PvButton>
                  </div>
                </div>

                <div class="border border-neutral-default_solid rounded-lg p-4 flex flex-col gap-3 bg-neutral-base">
                  <span class="text-body-md-bold text-neutral-base">Disable USB mass storage devices</span>
                  <p class="text-body-sm text-neutral-subtle">Prevents mounting of removable storage devices this includes USB mass-storage devices and SD flash cards.</p>
                  <div class="mt-auto">
                    <PvButton label="Create for Mac" variant="outlined" severity="secondary" size="small">
                      <template #icon><DevicePhoneMobileIcon class="w-4 h-4" /></template>
                    </PvButton>
                  </div>
                </div>

                <div class="border border-neutral-default_solid rounded-lg p-4 flex flex-col gap-3 bg-neutral-base">
                  <span class="text-body-md-bold text-neutral-base">Disable USB mass storage devices</span>
                  <p class="text-body-sm text-neutral-subtle">Prevents mounting of removable storage devices this includes USB mass-storage devices and SD flash cards.</p>
                  <div class="mt-auto">
                    <PvButton label="Create for Mac" variant="outlined" severity="secondary" size="small">
                      <template #icon><DevicePhoneMobileIcon class="w-4 h-4" /></template>
                    </PvButton>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>
          </div>

          <div class="p-6 flex flex-col gap-0 -mt-2">
            <DataTableToolbar
              searchPlaceholder="Search" showAddButton addButtonLabel="Add"
              showFilterButton showRefreshButton showColumnsButton showDownloadButton
              :exportOptions="exportOptions"
              @add="startWizard"
            />

            <CircuitDataTable
              :columns="policyColumns"
              :data="policyData"
              selectionMode="multiple"
              :selection="selectedPolicies"
              @update:selection="selectedPolicies = $event"
              @row-click="openDetail($event.data)"
            />

            <Paginator v-model:first="paginatorFirst" :rows="paginatorRows" :totalRecords="435" :rowsPerPageOptions="[10, 25, 50, 100]" />
          </div>
        </div>
      </div>
    </div>
  `,
  shieldIcon: markRaw(ShieldCheckIcon),
  arrowRightIcon: markRaw(ArrowRightIcon),
  detailTabs: [
    { label: 'Details', value: 'details' },
    { label: 'Policy Groups', value: 'policy-groups' },
    { label: 'Device Groups', value: 'device-groups' },
    { label: 'Devices', value: 'devices' },
  ],
});

const meta: Meta<typeof PoliciesPage> = {
  title: "Projects/Tim's Playground/Pages/Policies",
  component: PoliciesPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PoliciesPage>;

export const Default: Story = {};
