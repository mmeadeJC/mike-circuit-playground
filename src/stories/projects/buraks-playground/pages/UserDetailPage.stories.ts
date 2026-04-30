import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  CheckboxWithLabel,
  FormField,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellLink,
  DataTableCellStatus,
  KeyValue,
  DetailPageLayout,
  ConfigPageLayout,
  ListPageLayout,
  PageSaveBar,
  LinkText,
  DatePicker,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Menu from 'primevue/menu';
import Divider from 'primevue/divider';

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
  ChevronDownIcon,
  ChevronRightIcon,
  PencilSquareIcon,
  ShieldExclamationIcon,
  BriefcaseIcon,
  IdentificationIcon,
  TagIcon,
  KeyIcon,
  FunnelIcon,
} from '@heroicons/vue/24/outline';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid';

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

// ─── Page Configuration ───

const tabs = [
  { label: 'Highlights', value: 'highlights' },
  { label: 'Details', value: 'details' },
  { label: 'User Groups', value: 'user-groups' },
  { label: 'Devices', value: 'devices' },
  { label: 'Directories', value: 'directories' },
];

const statusOptions = [
  { label: 'Active', value: 'active' },
  { label: 'Suspended', value: 'suspended' },
];

// ─── Tab 1: Highlights — Mock Data ───

const highlightsDevicesData = [
  { id: 1, deviceName: "Burak Başcı's VM - name update", userType: '—' },
];

const highlightsDevicesColumns = [
  { field: 'deviceName', header: 'Device Name', sortable: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.deviceName, href: '#' }) },
  { field: 'userType', header: 'User Type', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.userType }) },
];

const groupsList = ['All Users', 'Contractors', 'Employees'];
const applicationsList = ['RSA Test', 'SAML-Go', 'Hydra Auth Trampoline', 'Hydra 2', 'Log a Ticket'];

const assetsData = [
  { id: 1, name: "Burak Başcı's VM - name update", type: 'Desktop', status: 'IN USE', statusSeverity: 'info' },
  { id: 2, name: "Burak's Cables", type: 'Peripheral', status: 'LOST', statusSeverity: 'danger' },
  { id: 3, name: "Burak's Cool Headphones", type: 'Headset', status: '—', statusSeverity: null },
  { id: 4, name: "Burak's Magic Mouse", type: 'Peripheral', status: 'ORDERED', statusSeverity: 'warn' },
  { id: 5, name: "Burak's Monitor", type: 'Display', status: 'IN USE', statusSeverity: 'info' },
];

const assetsColumns = [
  { field: 'name', header: 'Name', sortable: true, width: '300px', component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, href: '#' }) },
  { field: 'type', header: 'Type', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.type }) },
  { field: 'status', header: 'Status', component: markRaw(DataTableCellStatus), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Status', statusLabel: sp.data.status }) },
];

const directoryActivityData = [
  { id: 1, event: 'Last Known Location', resourceStatus: '—', timestamp: '—' },
  { id: 2, event: 'Last Password Change', resourceStatus: '—', timestamp: '—' },
  { id: 3, event: 'Last Status Change', resourceStatus: '—', timestamp: '—' },
  { id: 4, event: 'Last User Portal Authentication', resourceStatus: '—', timestamp: '—' },
];

const directoryActivityColumns = [
  { field: 'event', header: 'Event', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.event }) },
  { field: 'resourceStatus', header: 'Resource/Status', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.resourceStatus }) },
  { field: 'timestamp', header: 'Timestamp', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.timestamp }) },
];

// ─── Tab 3: User Groups — Mock Data ───

const userGroupsData = [
  { id: 1, group: 'Admin Sudo Granted', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 2, group: 'AFC Richmond Management', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 3, group: 'All Users', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 4, group: 'Approval Group (Access Requests)', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 5, group: 'asdf', groupType: 'Group of Users', membershipControls: 'Dynamic' },
  { id: 6, group: 'Atlassian for Tech Writing', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 7, group: 'Blogin', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 8, group: 'Contract Developers', groupType: 'Group of Users', membershipControls: 'Dynamic (Review Required)' },
  { id: 9, group: 'Contractors', groupType: 'Group of Users', membershipControls: 'Dynamic (Review Required)' },
  { id: 10, group: 'Crowdstrike', groupType: 'Group of Users', membershipControls: 'Static' },
];

const userGroupsColumns = [
  { field: 'group', header: 'Group', sortable: true, width: '300px', frozen: true, component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.group, description: sp.data.groupType, icon: markRaw(UsersIcon), href: '#' }) },
  { field: 'membershipControls', header: 'User Membership Controls', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.membershipControls }) },
];

// ─── Tab 4: Devices — Mock Data ───

const devicesData = [
  { id: 1, status: 'Inactive', deviceName: 'ubuntu-linux-22-04-02-desktop', os: 'Ubuntu 22.04.2 LTS (Jammy Jellyfish)', hasMdm: false, passwordSync: '', permissions: '', userType: '' },
  { id: 2, status: 'Inactive', deviceName: 'samobisanya-MacBook', os: 'macOS 15.0', hasMdm: true, passwordSync: '', permissions: '', userType: '' },
  { id: 3, status: 'Inactive', deviceName: 'Armistice-7.local', os: 'macOS 15.0', hasMdm: false, passwordSync: '', permissions: '', userType: '' },
  { id: 4, status: 'Inactive', deviceName: 'SERHATCAN9C80', os: 'Windows 11 Pro (26100.3194)', hasMdm: true, passwordSync: '', permissions: '', userType: '' },
  { id: 5, status: 'Inactive', deviceName: "Burak Başcı's VM - name update", os: 'Windows 11 Pro (22631.4169)', hasMdm: true, passwordSync: 'Yes', permissions: 'Global Administrator/Sudo', userType: 'Standard' },
  { id: 6, status: 'Inactive', deviceName: 'samobisanya-MacBook-Air', os: 'macOS 14.7', hasMdm: false, passwordSync: '', permissions: '', userType: '' },
  { id: 7, status: 'Inactive', deviceName: 'BARISERMUTBF361', os: 'Windows 11 Pro (26100.4946)', hasMdm: true, passwordSync: '', permissions: '', userType: '' },
  { id: 8, status: 'Inactive', deviceName: 'Locals-Virtual-Machine.local', os: 'macOS 14.5', hasMdm: true, passwordSync: '', permissions: '', userType: '' },
  { id: 9, status: 'Active', deviceName: 'Sergey iPadOS DMPYG1HDKD6L', os: 'iPadOS 26.0', hasMdm: false, passwordSync: '', permissions: '', userType: '' },
];

const devicesColumns = [
  { field: 'status', header: 'Status', width: '120px', frozen: true, component: markRaw(DataTableCellStatus), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Status', statusLabel: sp.data.status }) },
  { field: 'deviceName', header: 'Device Name', sortable: true, width: '240px', component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.deviceName, href: '#' }) },
  { field: 'os', header: 'OS', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.os }) },
  { field: 'passwordSync', header: 'Password Sync', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.passwordSync || '—' }) },
  { field: 'permissions', header: 'Permissions', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.permissions || '—' }) },
  { field: 'userType', header: 'User Type', sortable: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.userType || '—' }) },
];

// ─── Tab 5: Directories — Mock Data ───

const directoriesData = [
  { id: 1, type: 'AD', syncStatus: '—', name: 'DC=afcdemo1;DC=com', nameDescription: 'Active Directory Domain', tokenStatus: '', accessConfigurations: '' },
  { id: 2, type: 'AD', syncStatus: '—', name: 'DC=test.com;dc=com', nameDescription: 'Active Directory Domain', tokenStatus: '', accessConfigurations: '' },
  { id: 3, type: 'Google', syncStatus: '', name: 'AFCR', nameDescription: 'Google Workspace', tokenStatus: '', accessConfigurations: '' },
  { id: 4, type: 'LDAP', syncStatus: '', name: 'JumpCloud LDAP', nameDescription: '', tokenStatus: '', accessConfigurations: '' },
  { id: 5, type: 'M365', syncStatus: '—', name: 'JumpCloud AFC Microsoft', nameDescription: 'M365/Entra ID', tokenStatus: 'Token expired', accessConfigurations: '' },
];

const directoriesColumns = [
  { field: 'type', header: 'Type', width: '100px', frozen: true, component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.type }) },
  { field: 'syncStatus', header: 'Sync Status', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.syncStatus || '—' }) },
  { field: 'name', header: 'Name', sortable: true, width: '280px', component: markRaw(DataTableCellLink), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.name, description: sp.data.nameDescription, href: '#' }) },
  { field: 'tokenStatus', header: 'Token Status', component: markRaw(DataTableCellStatus), componentProps: (sp: { data: Record<string, unknown> }) => ({ type: 'Status', statusLabel: sp.data.tokenStatus || '—' }) },
  { field: 'accessConfigurations', header: 'Access Configurations', component: markRaw(DataTableCellText), componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.accessConfigurations || '—' }) },
];

// ─── Component Definition ───

const UserDetailPage = defineComponent({
  name: 'UserDetailPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CheckboxWithLabel,
    FormField,
    PvButton: Button,
    PvTag: Tag,
    PvSelect: Select,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvMenu: Menu,
    PvDivider: Divider,
    CircuitDataTable,
    DataTableToolbar,
    AdminTopBar,
    KeyValue,
    DetailPageLayout,
    ConfigPageLayout,
    ListPageLayout,
    PageSaveBar,
    LinkText,
    PvDatePicker: DatePicker,
    ChevronDownIcon,
    ChevronRightIcon,
    PencilSquareIcon,
    ShieldExclamationIcon,
    BriefcaseIcon,
    IdentificationIcon,
    TagIcon,
    KeyIcon,
    FunnelIcon,
    CheckCircleIcon,
    XCircleIcon,
  },
  setup() {
    const activeTab = ref('highlights');
    const userStatus = ref('active');
    const showSidebar = ref(true);

    // Sidebar menu refs
    const passwordMenu = ref();
    const protectMenu = ref();
    const passwordMenuItems = [{ label: 'Force Change Password' }];
    const protectMenuItems = [{ label: 'Reset Protect MFA' }];

    // Details tab — collapsed state for toggleable panels
    const securityCollapsed = ref(true);
    const employmentCollapsed = ref(false);
    const personalCollapsed = ref(true);
    const customAttrsCollapsed = ref(true);
    const publicKeysCollapsed = ref(true);

    // Details tab form state
    const username = ref('burak.basci');
    const accountEmail = ref('burak.basci+afc@jumpcloud.com');
    const firstName = ref('Burak');
    const lastName = ref('Başcı');
    const displayName = ref('Burak Başcı');
    const employeeId = ref('EMP-001');
    const description = ref('');
    const personalEmail = ref('');
    const alternateEmail = ref('');
    const recoveryEmail = ref('');
    const enableUserPortal = ref(true);

    // Security settings
    const passwordAddress = ref('burak.basci+afc@jumpcloud.com');
    const encryptedEmailRole = ref('admin');
    const setPasswordOnLogin = ref(false);
    const allowPasswordReset = ref(true);
    const requireMfaAccount = ref(true);
    const requireMfaDevice = ref(false);
    const deviceAdminAll = ref(false);

    // Employment info
    const empId = ref('EMP-001');
    const jobTitle = ref('Staff Product Designer');
    const company = ref('JumpCloud');
    const manager = ref('');
    const department = ref('Design Team');
    const costCenter = ref('');
    const location = ref('');
    const startDate = ref<Date | null>(null);
    const endDate = ref<Date | null>(null);

    // Personal info
    const personalFirstName = ref('Burak');
    const personalEmailField = ref('');
    const mobilePhone = ref('');
    const homePhone = ref('');
    const city = ref('');
    const state = ref('');
    const country = ref('');
    const addressZip = ref('');
    const homeCountry = ref('');

    // Table selections
    const selectedUserGroups = ref([userGroupsData[2], userGroupsData[8]]);
    const selectedDevices = ref([devicesData[4]]);
    const selectedDirectories = ref([directoriesData[2], directoriesData[3]]);
    const showBoundGroups = ref(true);
    const showBoundDevices = ref(true);
    const showBoundDirectories = ref(true);

    // PageSaveBar state
    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    // Helper for bound-item array comparison (by id)
    function arraysMatchById<T extends { id: number }>(a: T[], b: T[]): boolean {
      if (a.length !== b.length) return false;
      const bIds = new Set(b.map((x) => x.id));
      return a.every((x) => bIds.has(x.id));
    }

    // Reactive baseline snapshot — captured on load, updated after save
    const baseline = reactive({
      username: username.value,
      accountEmail: accountEmail.value,
      firstName: firstName.value,
      lastName: lastName.value,
      displayName: displayName.value,
      employeeId: employeeId.value,
      description: description.value,
      personalEmail: personalEmail.value,
      alternateEmail: alternateEmail.value,
      recoveryEmail: recoveryEmail.value,
      enableUserPortal: enableUserPortal.value,
      passwordAddress: passwordAddress.value,
      encryptedEmailRole: encryptedEmailRole.value,
      setPasswordOnLogin: setPasswordOnLogin.value,
      allowPasswordReset: allowPasswordReset.value,
      requireMfaAccount: requireMfaAccount.value,
      requireMfaDevice: requireMfaDevice.value,
      deviceAdminAll: deviceAdminAll.value,
      empId: empId.value,
      jobTitle: jobTitle.value,
      company: company.value,
      manager: manager.value,
      department: department.value,
      costCenter: costCenter.value,
      location: location.value,
      startDate: startDate.value as Date | null,
      endDate: endDate.value as Date | null,
      personalFirstName: personalFirstName.value,
      personalEmailField: personalEmailField.value,
      mobilePhone: mobilePhone.value,
      homePhone: homePhone.value,
      city: city.value,
      state: state.value,
      country: country.value,
      addressZip: addressZip.value,
      homeCountry: homeCountry.value,
      selectedUserGroups: [...selectedUserGroups.value],
      selectedDevices: [...selectedDevices.value],
      selectedDirectories: [...selectedDirectories.value],
    });

    // Derived dirty state — computed against baseline so reverting any field to its
    // original value automatically and instantly hides the save bar.
    const isDirty = computed(() => {
      if (username.value !== baseline.username) return true;
      if (accountEmail.value !== baseline.accountEmail) return true;
      if (firstName.value !== baseline.firstName) return true;
      if (lastName.value !== baseline.lastName) return true;
      if (displayName.value !== baseline.displayName) return true;
      if (employeeId.value !== baseline.employeeId) return true;
      if (description.value !== baseline.description) return true;
      if (personalEmail.value !== baseline.personalEmail) return true;
      if (alternateEmail.value !== baseline.alternateEmail) return true;
      if (recoveryEmail.value !== baseline.recoveryEmail) return true;
      if (enableUserPortal.value !== baseline.enableUserPortal) return true;
      if (passwordAddress.value !== baseline.passwordAddress) return true;
      if (encryptedEmailRole.value !== baseline.encryptedEmailRole) return true;
      if (setPasswordOnLogin.value !== baseline.setPasswordOnLogin) return true;
      if (allowPasswordReset.value !== baseline.allowPasswordReset) return true;
      if (requireMfaAccount.value !== baseline.requireMfaAccount) return true;
      if (requireMfaDevice.value !== baseline.requireMfaDevice) return true;
      if (deviceAdminAll.value !== baseline.deviceAdminAll) return true;
      if (empId.value !== baseline.empId) return true;
      if (jobTitle.value !== baseline.jobTitle) return true;
      if (company.value !== baseline.company) return true;
      if (manager.value !== baseline.manager) return true;
      if (department.value !== baseline.department) return true;
      if (costCenter.value !== baseline.costCenter) return true;
      if (location.value !== baseline.location) return true;
      if ((startDate.value?.getTime() ?? null) !== (baseline.startDate?.getTime() ?? null)) return true;
      if ((endDate.value?.getTime() ?? null) !== (baseline.endDate?.getTime() ?? null)) return true;
      if (personalFirstName.value !== baseline.personalFirstName) return true;
      if (personalEmailField.value !== baseline.personalEmailField) return true;
      if (mobilePhone.value !== baseline.mobilePhone) return true;
      if (homePhone.value !== baseline.homePhone) return true;
      if (city.value !== baseline.city) return true;
      if (state.value !== baseline.state) return true;
      if (country.value !== baseline.country) return true;
      if (addressZip.value !== baseline.addressZip) return true;
      if (homeCountry.value !== baseline.homeCountry) return true;
      if (!arraysMatchById(selectedUserGroups.value, baseline.selectedUserGroups)) return true;
      if (!arraysMatchById(selectedDevices.value, baseline.selectedDevices)) return true;
      if (!arraysMatchById(selectedDirectories.value, baseline.selectedDirectories)) return true;
      return false;
    });

    function handleSave() {
      isSaving.value = true;
      setTimeout(() => {
        isSaving.value = false;
        showSavedConfirmation.value = true;
        // Advance baseline to current values — isDirty auto-clears via computed
        Object.assign(baseline, {
          username: username.value, accountEmail: accountEmail.value,
          firstName: firstName.value, lastName: lastName.value,
          displayName: displayName.value, employeeId: employeeId.value,
          description: description.value, personalEmail: personalEmail.value,
          alternateEmail: alternateEmail.value, recoveryEmail: recoveryEmail.value,
          enableUserPortal: enableUserPortal.value,
          passwordAddress: passwordAddress.value, encryptedEmailRole: encryptedEmailRole.value,
          setPasswordOnLogin: setPasswordOnLogin.value, allowPasswordReset: allowPasswordReset.value,
          requireMfaAccount: requireMfaAccount.value, requireMfaDevice: requireMfaDevice.value,
          deviceAdminAll: deviceAdminAll.value,
          empId: empId.value, jobTitle: jobTitle.value, company: company.value,
          manager: manager.value, department: department.value, costCenter: costCenter.value,
          location: location.value, startDate: startDate.value, endDate: endDate.value,
          personalFirstName: personalFirstName.value, personalEmailField: personalEmailField.value,
          mobilePhone: mobilePhone.value, homePhone: homePhone.value,
          city: city.value, state: state.value, country: country.value,
          addressZip: addressZip.value, homeCountry: homeCountry.value,
          selectedUserGroups: [...selectedUserGroups.value],
          selectedDevices: [...selectedDevices.value],
          selectedDirectories: [...selectedDirectories.value],
        });
        setTimeout(() => { showSavedConfirmation.value = false; }, 2000);
      }, 1000);
    }

    function handleDiscard() {
      // Restore all form fields to baseline — isDirty auto-clears via computed
      username.value = baseline.username;
      accountEmail.value = baseline.accountEmail;
      firstName.value = baseline.firstName;
      lastName.value = baseline.lastName;
      displayName.value = baseline.displayName;
      employeeId.value = baseline.employeeId;
      description.value = baseline.description;
      personalEmail.value = baseline.personalEmail;
      alternateEmail.value = baseline.alternateEmail;
      recoveryEmail.value = baseline.recoveryEmail;
      enableUserPortal.value = baseline.enableUserPortal;
      passwordAddress.value = baseline.passwordAddress;
      encryptedEmailRole.value = baseline.encryptedEmailRole;
      setPasswordOnLogin.value = baseline.setPasswordOnLogin;
      allowPasswordReset.value = baseline.allowPasswordReset;
      requireMfaAccount.value = baseline.requireMfaAccount;
      requireMfaDevice.value = baseline.requireMfaDevice;
      deviceAdminAll.value = baseline.deviceAdminAll;
      empId.value = baseline.empId;
      jobTitle.value = baseline.jobTitle;
      company.value = baseline.company;
      manager.value = baseline.manager;
      department.value = baseline.department;
      costCenter.value = baseline.costCenter;
      location.value = baseline.location;
      startDate.value = baseline.startDate;
      endDate.value = baseline.endDate;
      personalFirstName.value = baseline.personalFirstName;
      personalEmailField.value = baseline.personalEmailField;
      mobilePhone.value = baseline.mobilePhone;
      homePhone.value = baseline.homePhone;
      city.value = baseline.city;
      state.value = baseline.state;
      country.value = baseline.country;
      addressZip.value = baseline.addressZip;
      homeCountry.value = baseline.homeCountry;
      // Restore bound items
      selectedUserGroups.value = [...baseline.selectedUserGroups];
      selectedDevices.value = [...baseline.selectedDevices];
      selectedDirectories.value = [...baseline.selectedDirectories];
    }

    // Filtered table data
    const filteredUserGroupsData = computed(() =>
      showBoundGroups.value
        ? userGroupsData.filter((g) => selectedUserGroups.value.some((s) => s.id === g.id))
        : userGroupsData,
    );
    const filteredDevicesData = computed(() =>
      showBoundDevices.value
        ? devicesData.filter((d) => selectedDevices.value.some((s) => s.id === d.id))
        : devicesData,
    );
    const filteredDirectoriesData = computed(() =>
      showBoundDirectories.value
        ? directoriesData.filter((d) => selectedDirectories.value.some((s) => s.id === d.id))
        : directoriesData,
    );

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'User', value: 'user' },
      { label: 'Manager', value: 'manager' },
    ];

    const countryOptions = [
      { label: 'United States', value: 'us' },
      { label: 'Turkey', value: 'tr' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Germany', value: 'de' },
    ];

    const managerOptions = [
      { label: 'None', value: '' },
      { label: 'John Smith', value: 'john.smith' },
      { label: 'Jane Doe', value: 'jane.doe' },
    ];

    return {
      menuItems,
      profileMenuItems,
      tabs,
      statusOptions,
      activeTab,
      userStatus,
      showSidebar,
      // Highlights
      highlightsDevicesData,
      highlightsDevicesColumns,
      groupsList,
      applicationsList,
      assetsData,
      assetsColumns,
      directoryActivityData,
      directoryActivityColumns,
      // Details form
      username,
      accountEmail,
      firstName,
      lastName,
      displayName,
      employeeId,
      description,
      personalEmail,
      alternateEmail,
      recoveryEmail,
      enableUserPortal,
      passwordAddress,
      encryptedEmailRole,
      setPasswordOnLogin,
      allowPasswordReset,
      requireMfaAccount,
      requireMfaDevice,
      deviceAdminAll,
      empId,
      jobTitle,
      company,
      manager,
      department,
      costCenter,
      location,
      startDate,
      endDate,
      personalFirstName,
      personalEmailField,
      mobilePhone,
      homePhone,
      city,
      state,
      country,
      addressZip,
      homeCountry,
      roleOptions,
      countryOptions,
      managerOptions,
      // User Groups
      filteredUserGroupsData,
      userGroupsColumns,
      selectedUserGroups,
      showBoundGroups,
      // Devices
      filteredDevicesData,
      devicesColumns,
      selectedDevices,
      showBoundDevices,
      // Directories
      filteredDirectoriesData,
      directoriesColumns,
      selectedDirectories,
      showBoundDirectories,
      // Sidebar menus
      passwordMenu,
      protectMenu,
      passwordMenuItems,
      protectMenuItems,
      // Details tab collapsed states
      securityCollapsed,
      employmentCollapsed,
      personalCollapsed,
      customAttrsCollapsed,
      publicKeysCollapsed,
      // PageSaveBar
      isDirty,
      isSaving,
      showSavedConfirmation,
      handleSave,
      handleDiscard,
      // Icons
      UserIcon: markRaw(UserIcon),
    };
  },
  template: `
    <div id="app" class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="user management"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopBar />

        <PageHeader
          title="Burak Başcı"
          :icon="UserIcon"
          subtitleText="burak.basci+afc@jumpcloud.com · Staff Product Designer · Design Team"
          :tabs="tabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #actions>
            <PvSelect
              v-model="userStatus"
              :options="statusOptions"
              optionLabel="label"
              optionValue="value"
              class="w-auto"
            >
              <template #value="slotProps">
                <div class="flex items-center gap-2">
                  <CheckCircleIcon v-if="slotProps.value === 'active'" class="size-5 text-feedback-success-base" />
                  <XCircleIcon v-else class="size-5 text-feedback-danger-base" />
                  <span>{{ slotProps.value === 'active' ? 'Active' : 'Suspended' }}</span>
                </div>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <CheckCircleIcon v-if="slotProps.option.value === 'active'" class="size-5 text-feedback-success-base" />
                  <XCircleIcon v-else class="size-5 text-feedback-danger-base" />
                  <span>{{ slotProps.option.label }}</span>
                </div>
              </template>
            </PvSelect>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-hidden flex flex-col">
          <div class="flex-1 flex flex-col min-h-0">

            <!-- ============ TAB: HIGHLIGHTS ============ -->
            <div v-if="activeTab === 'highlights'" class="flex-1 overflow-auto bg-neutral-surface">
            <DetailPageLayout class="w-full! h-full!" :max-width="showSidebar ? '1440' : '1280'" :show-sidebar="showSidebar">
              <div class="flex flex-col gap-6">

                <CollapsiblePanel header="Devices (1)">
                  <template #actions>
                    <PvButton label="All Devices" variant="outlined" severity="secondary" size="small" />
                  </template>
                  <CircuitDataTable :columns="highlightsDevicesColumns" :data="highlightsDevicesData" size="small" :card="false" />
                </CollapsiblePanel>

                <div class="grid grid-cols-2 gap-6">
                  <CollapsiblePanel header="Groups (3)">
                    <template #actions>
                      <PvButton label="All Groups" variant="outlined" severity="secondary" size="small" />
                    </template>
                    <div class="flex flex-col gap-1">
                      <LinkText v-for="group in groupsList" :key="group" href="#" :showIcon="false">{{ group }}</LinkText>
                    </div>
                  </CollapsiblePanel>

                  <CollapsiblePanel header="Applications (8)">
                    <template #actions>
                      <PvButton label="All Applications" variant="outlined" severity="secondary" size="small" />
                    </template>
                    <div class="flex flex-col gap-1">
                      <LinkText v-for="app in applicationsList" :key="app" href="#" :showIcon="false">{{ app }}</LinkText>
                    </div>
                  </CollapsiblePanel>
                </div>

                <CollapsiblePanel header="SaaS Management">
                  <template #actions>
                    <PvButton label="All Accounts" variant="outlined" severity="secondary" size="small" />
                  </template>
                  <div class="grid grid-cols-3 gap-y-3 gap-x-8">
                    <KeyValue label="Discovered Accounts" value="318 Accounts" />
                    <KeyValue label="Apps in Use" value="82 Apps" />
                    <KeyValue label="Shared Accounts" value="0 Accounts" />
                    <KeyValue label="Licensed Apps" value="9 Apps" />
                    <KeyValue label="License Costs (Estimate)" value="38 USD · +1 See All" />
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel header="Assets Owned (16)">
                  <template #actions>
                    <PvButton label="View All" variant="outlined" severity="secondary" size="small" />
                  </template>
                  <CircuitDataTable :columns="assetsColumns" :data="assetsData" size="small" :card="false" />
                </CollapsiblePanel>

                <CollapsiblePanel header="Directory Activity">
                  <template #actions>
                    <PvButton label="Activity Log" variant="outlined" severity="secondary" size="small" />
                  </template>
                  <CircuitDataTable :columns="directoryActivityColumns" :data="directoryActivityData" size="small" :card="false" />
                </CollapsiblePanel>

              </div>

              <template v-if="showSidebar" #sidebar>
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-4">
                    <h3 class="text-heading-3 text-neutral-base">Security Status</h3>
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center gap-2">
                        <span class="w-48 shrink-0 text-body-md-semi-bold text-neutral-base">Password</span>
                        <PvTag value="Active" severity="success" />
                        <PvButton variant="text" severity="secondary" size="small" @click="passwordMenu.toggle($event)">
                          <template #icon>
                            <ChevronDownIcon class="size-4" />
                          </template>
                        </PvButton>
                        <PvMenu ref="passwordMenu" :model="passwordMenuItems" :popup="true" />
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="w-48 shrink-0 text-body-md-semi-bold text-neutral-base">JumpCloud Protect</span>
                        <PvTag value="Inactive" severity="danger" />
                        <PvButton variant="text" severity="secondary" size="small" @click="protectMenu.toggle($event)">
                          <template #icon>
                            <ChevronDownIcon class="size-4" />
                          </template>
                        </PvButton>
                        <PvMenu ref="protectMenu" :model="protectMenuItems" :popup="true" />
                      </div>
                      <div class="flex items-center gap-2">
                        <span class="w-48 shrink-0 text-body-md-semi-bold text-neutral-base">WebAuthn</span>
                        <PvTag value="Inactive" severity="danger" />
                      </div>
                    </div>
                  </div>

                  <div class="flex flex-col gap-4">
                    <h3 class="text-heading-3 text-neutral-base">Password Policy</h3>
                    <div class="flex items-center gap-2">
                      <PvButton label="See Password Policy" severity="secondary" size="small" />
                      <PvButton label="Test policy →" variant="outlined" severity="secondary" size="small" />
                    </div>
                  </div>

                  <PvDivider />

                  <div class="flex flex-col gap-4">
                    <h3 class="text-heading-3 text-neutral-base">Identity Management</h3>
                    <div class="flex flex-col gap-3">
                      <KeyValue label="Password Address" value="burak.basci+afc@jumpcloud.com" />
                      <KeyValue label="Encrypted Email Role" value="Admin" />
                      <KeyValue label="Password Reset" value="Allowed" />
                      <KeyValue label="MFA (Account)" value="Required" />
                      <KeyValue label="MFA (Device)" value="Not required" />
                      <KeyValue label="Security Key" value="Not configured" />
                      <KeyValue label="Device Administrator" value="No" />
                    </div>
                  </div>

                  <PvDivider />

                  <div class="flex flex-col gap-4">
                    <h3 class="text-heading-3 text-neutral-base">Details</h3>
                    <div class="flex flex-col gap-3">
                      <KeyValue label="Email" value="burak.basci+afc@jumpcloud.com" />
                      <KeyValue label="Job Title" value="Staff Product Designer" />
                      <KeyValue label="Department" value="Design Team" />
                      <KeyValue label="Company" value="JumpCloud" />
                      <KeyValue label="Employee ID" value="EMP-001" />
                      <KeyValue label="Location" value="Istanbul, Turkey" />
                      <KeyValue label="Manager" :value="null" />
                    </div>
                  </div>
                </div>
              </template>
            </DetailPageLayout>
            </div>

            <!-- ============ TAB: DETAILS ============ -->
            <div v-if="activeTab === 'details'" class="flex-1 overflow-auto bg-neutral-surface">
            <ConfigPageLayout class="w-full! h-full!">
              <div class="flex flex-col gap-6">

                <CollapsiblePanel header="User Information">
                  <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                    <FormField label="Username">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="username" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Account/Email">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="accountEmail" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="First Name">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="firstName" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Last Name">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="lastName" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Display Name">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="displayName" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Employee ID">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="employeeId" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Description" class="col-span-2">
                      <template #default="{ inputId }">
                        <PvTextarea :id="inputId" v-model="description" class="w-full" rows="3" />
                      </template>
                    </FormField>
                    <FormField label="Personal Email">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="personalEmail" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Alternate Email">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="alternateEmail" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Password Recovery Email" class="col-span-2" helpText="This is the email address used for password recovery. If not set, the account email will be used.">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="recoveryEmail" class="w-full" />
                      </template>
                    </FormField>
                  </div>
                  <div class="mt-4">
                    <CheckboxWithLabel v-model="enableUserPortal" :binary="true">
                      <template #label>Enable user portal for this user</template>
                    </CheckboxWithLabel>
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel v-model:collapsed="securityCollapsed" toggleable header="User Security Settings and Permissions">
                  <template #titleicon="iconProps">
                    <ShieldExclamationIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <div class="flex flex-col gap-6">
                    <p class="text-body-sm text-neutral-subtle">
                      Identity management account settings control how the user authenticates and what permissions they have across JumpCloud-managed resources.
                    </p>

                    <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                      <FormField label="Password Address" class="col-span-2">
                        <template #default="{ inputId }">
                          <PvInputText :id="inputId" v-model="passwordAddress" class="w-full" />
                        </template>
                      </FormField>
                      <FormField label="Encrypted Email Role">
                        <template #default="{ inputId }">
                          <PvSelect :id="inputId" v-model="encryptedEmailRole" :options="roleOptions" optionLabel="label" optionValue="value" class="w-full" />
                        </template>
                      </FormField>
                    </div>

                    <div class="flex flex-col gap-3">
                      <h4 class="text-body-md-semi-bold text-neutral-base">Security Settings</h4>
                      <PvButton label="Reset Password" variant="outlined" severity="secondary" size="small" class="self-start" />
                      <CheckboxWithLabel v-model="setPasswordOnLogin" :binary="true">
                        <template #label>Set password and require change on next login</template>
                      </CheckboxWithLabel>
                      <CheckboxWithLabel v-model="allowPasswordReset" :binary="true">
                        <template #label>Allow user to reset their password</template>
                      </CheckboxWithLabel>
                    </div>

                    <div class="flex flex-col gap-3">
                      <h4 class="text-body-md-semi-bold text-neutral-base">Multi-factor Authentication</h4>
                      <CheckboxWithLabel v-model="requireMfaAccount" :binary="true">
                        <template #label>Require MFA on user's JumpCloud account</template>
                      </CheckboxWithLabel>
                      <CheckboxWithLabel v-model="requireMfaDevice" :binary="true">
                        <template #label>Require MFA on user's device login</template>
                        <template #description>When MFA is enabled, users who have set up TOTP or Push MFA will be prompted to authenticate on device login.</template>
                      </CheckboxWithLabel>
                    </div>

                    <div class="flex flex-col gap-3">
                      <h4 class="text-body-md-semi-bold text-neutral-base">Security Key (Optional)</h4>
                      <PvButton label="Add Key" severity="secondary" size="small" class="self-start" />
                    </div>

                    <div class="flex flex-col gap-3">
                      <h4 class="text-body-md-semi-bold text-neutral-base">Device Administrator</h4>
                      <CheckboxWithLabel v-model="deviceAdminAll" :binary="true">
                        <template #label>Device Administrator (All Devices)</template>
                        <template #description>Grants the user local administrator or sudo permissions on all bound devices.</template>
                      </CheckboxWithLabel>
                    </div>
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel v-model:collapsed="employmentCollapsed" toggleable header="Employment Information">
                  <template #titleicon="iconProps">
                    <BriefcaseIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                    <FormField label="Employee ID">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="empId" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Job Title">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="jobTitle" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Company">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="company" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Manager">
                      <template #default="{ inputId }">
                        <PvSelect :id="inputId" v-model="manager" :options="managerOptions" optionLabel="label" optionValue="value" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Department">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="department" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Cost Center">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="costCenter" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Location">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="location" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Start Date">
                      <template #default="{ inputId }">
                        <PvDatePicker :id="inputId" v-model="startDate" dateFormat="yy-mm-dd" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="End Date">
                      <template #default="{ inputId }">
                        <PvDatePicker :id="inputId" v-model="endDate" dateFormat="yy-mm-dd" class="w-full" />
                      </template>
                    </FormField>
                  </div>
                  <p class="text-body-sm text-neutral-subtle mt-4">
                    Employment information is synced from your HR directory. Changes made here may be overwritten on the next sync.
                  </p>
                </CollapsiblePanel>

                <CollapsiblePanel v-model:collapsed="personalCollapsed" toggleable header="Personal Employee Information">
                  <template #titleicon="iconProps">
                    <IdentificationIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                    <FormField label="First Name">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="personalFirstName" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Personal Email">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="personalEmailField" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Mobile Phone">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="mobilePhone" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Home Phone">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="homePhone" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="City">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="city" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="State">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="state" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Country">
                      <template #default="{ inputId }">
                        <PvSelect :id="inputId" v-model="country" :options="countryOptions" optionLabel="label" optionValue="value" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Address/Zip">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="addressZip" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Home Country" class="col-span-2">
                      <template #default="{ inputId }">
                        <PvSelect :id="inputId" v-model="homeCountry" :options="countryOptions" optionLabel="label" optionValue="value" class="w-full" />
                      </template>
                    </FormField>
                  </div>
                  <p class="text-body-sm text-neutral-subtle mt-4">
                    This data is used to store personal information for your records. Do not store sensitive personal data here.
                  </p>
                </CollapsiblePanel>

                <CollapsiblePanel v-model:collapsed="customAttrsCollapsed" toggleable header="Custom Attributes">
                  <template #titleicon="iconProps">
                    <TagIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <p class="text-body-sm text-neutral-subtle mb-4">
                    Use custom attributes to store additional information as key-value pairs on this user.
                  </p>
                  <PvButton label="Add Custom Attribute" severity="secondary" size="small" />
                </CollapsiblePanel>

                <CollapsiblePanel v-model:collapsed="publicKeysCollapsed" toggleable header="Public Keys">
                  <template #titleicon="iconProps">
                    <KeyIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <div class="bg-neutral-base rounded shadow-e100 p-3 mb-4">
                    <code class="text-body-sm text-neutral-base break-all">ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC6+NFTO+kSk...</code>
                  </div>
                  <PvButton label="Add Public Key" severity="secondary" size="small" />
                </CollapsiblePanel>

              </div>
            </ConfigPageLayout>
            </div>

            <!-- ============ TAB: USER GROUPS ============ -->
            <div v-if="activeTab === 'user-groups'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
              <ListPageLayout class="w-full! h-full!">
                <CircuitDataTable
                  :columns="userGroupsColumns"
                  :data="filteredUserGroupsData"
                  dataKey="id"
                  selectionMode="multiple"
                  v-model:selection="selectedUserGroups"
                  :card="true"
                  :scrollable="true"
                  scrollHeight="flex"
                  :paginator="true"
                  :rows="15"
                >
                  <template #toolbar>
                    <DataTableToolbar
                      searchPlaceholder="Search user groups..."
                      :showAddButton="false"
                      :showFilterButton="false"
                      :showRefreshButton="true"
                      :showColumnsButton="false"
                      :showDownloadButton="false"
                      :showSaveViewButton="false"
                    >
                      <template #saved-views>
                        <PvButton variant="outlined" severity="secondary">
                          <FunnelIcon class="size-5" />
                          <span class="px-1">Filter</span>
                        </PvButton>
                        <CheckboxWithLabel v-model="showBoundGroups" :binary="true" class="ml-2">
                          <template #label>Show bound user groups ({{ selectedUserGroups.length }})</template>
                        </CheckboxWithLabel>
                      </template>
                    </DataTableToolbar>
                  </template>
                </CircuitDataTable>
              </ListPageLayout>
            </div>

            <!-- ============ TAB: DEVICES ============ -->
            <div v-if="activeTab === 'devices'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
              <ListPageLayout class="w-full! h-full!">
                <CircuitDataTable
                  :columns="devicesColumns"
                  :data="filteredDevicesData"
                  dataKey="id"
                  selectionMode="multiple"
                  v-model:selection="selectedDevices"
                  :card="true"
                  :scrollable="true"
                  scrollHeight="flex"
                  :paginator="true"
                  :rows="15"
                >
                  <template #toolbar>
                    <DataTableToolbar
                      searchPlaceholder="Search devices..."
                      :showAddButton="false"
                      :showFilterButton="false"
                      :showRefreshButton="true"
                      :showColumnsButton="false"
                      :showDownloadButton="false"
                      :showSaveViewButton="false"
                    >
                      <template #saved-views>
                        <PvButton variant="outlined" severity="secondary">
                          <FunnelIcon class="size-5" />
                          <span class="px-1">Filter</span>
                        </PvButton>
                        <CheckboxWithLabel v-model="showBoundDevices" :binary="true" class="ml-2">
                          <template #label>Show bound devices ({{ selectedDevices.length }})</template>
                        </CheckboxWithLabel>
                        <div class="border-l border-neutral-default_solid h-5 shrink-0 mx-2" />
                        <PvButton label="Run Users To Devices Report" variant="outlined" severity="secondary" />
                      </template>
                    </DataTableToolbar>
                  </template>
                </CircuitDataTable>
              </ListPageLayout>
            </div>

            <!-- ============ TAB: DIRECTORIES ============ -->
            <div v-if="activeTab === 'directories'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface relative">
              <ListPageLayout class="w-full! h-full!">
                <CircuitDataTable
                  :columns="directoriesColumns"
                  :data="filteredDirectoriesData"
                  dataKey="id"
                  selectionMode="multiple"
                  v-model:selection="selectedDirectories"
                  :card="true"
                  :scrollable="true"
                  scrollHeight="flex"
                  :paginator="true"
                  :rows="15"
                >
                  <template #toolbar>
                    <DataTableToolbar
                      searchPlaceholder="Search directories..."
                      :showAddButton="false"
                      :showFilterButton="false"
                      :showRefreshButton="true"
                      :showColumnsButton="false"
                      :showDownloadButton="false"
                      :showSaveViewButton="false"
                    >
                      <template #saved-views>
                        <PvButton variant="outlined" severity="secondary">
                          <FunnelIcon class="size-5" />
                          <span class="px-1">Filter</span>
                        </PvButton>
                        <CheckboxWithLabel v-model="showBoundDirectories" :binary="true" class="ml-2">
                          <template #label>Show bound directories ({{ selectedDirectories.length }})</template>
                        </CheckboxWithLabel>
                      </template>
                    </DataTableToolbar>
                  </template>
                </CircuitDataTable>
              </ListPageLayout>
            </div>

          </div>

          <PageSaveBar
            :visible="isDirty"
            :saving="isSaving"
            :saved="showSavedConfirmation"
            message="You have unsaved changes"
            @save="handleSave"
            @discard="handleDiscard"
          />
        </div>
      </div>
    </div>
  `,
});

// ─── Story Export ───

const meta: Meta<typeof UserDetailPage> = {
  title: "Projects/Burak's Playground/Pages/User Detail",
  component: UserDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof UserDetailPage>;

export const Default: Story = {};
