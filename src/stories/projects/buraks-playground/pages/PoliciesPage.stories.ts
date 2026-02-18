import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent } from 'vue';
import { AppNavigation } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';

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
  PlusIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ShieldExclamationIcon,
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
    leftIcon: markRaw(DeviceManagementIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(DeviceListsIcon) },
      { label: 'Device Groups', leftIcon: markRaw(DeviceGroupsIcon) },
      { label: 'Commands', leftIcon: markRaw(CommandLineIcon) },
      { label: 'Asset Management', leftIcon: markRaw(ClipboardDocumentListIcon), isNew: true },
      { separator: true },
      { label: 'Policy Management' },
      { label: 'Policy Groups' },
      { label: 'Software Deployment' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    count: 1,
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'Access Reports', isNew: true },
      { label: 'SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'Password Management', leftIcon: markRaw(PasswordManagerIcon) },
      { label: 'LDAP' },
      { label: 'RADIUS' },
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
    items: [
      { label: 'Reports' },
    ],
  },
  {
    label: 'Alert',
    leftIcon: markRaw(BellIcon),
    count: 23,
    isNew: true,
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

const PoliciesPage = defineComponent({
  name: 'PoliciesPage',
  components: {
    AppNavigation,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    TopBar,
    PlusIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    CheckCircleIcon,
    CheckCircleSolidIcon,
    ArrowLeftIcon,
    ArrowRightIcon,
    ShieldExclamationIcon,
    UserIcon,
    UsersIcon,
  },
  setup() {
    const wizardActive = ref(false);
    const activeStep = ref(1);

    const policyType = ref<string | null>(null);
    const selectedOS = ref<string | null>(null);
    const policyName = ref('');
    const policyDescription = ref('');
    const assignmentType = ref<string | null>(null);
    const selectedTarget = ref<string | null>(null);

    const existingPolicies = [
      { name: 'macOS Security Baseline', type: 'Device', os: 'Mac', status: 'Active', targets: 3, group: 'All Macs' },
      { name: 'Windows Encryption Policy', type: 'Device', os: 'Windows', status: 'Active', targets: 12, group: 'Corporate Devices' },
      { name: 'Linux Firewall Rules', type: 'Device', os: 'Linux', status: 'Draft', targets: 0, group: '—' },
      { name: 'iOS MDM Configuration', type: 'Device', os: 'iOS', status: 'Active', targets: 45, group: 'Mobile Devices' },
      { name: 'Password Complexity', type: 'User', os: '—', status: 'Active', targets: 1743, group: 'All Users' },
      { name: 'MFA Enforcement', type: 'User', os: '—', status: 'Active', targets: 1200, group: 'Engineering' },
      { name: 'Android Work Profile', type: 'Device', os: 'Android', status: 'Draft', targets: 0, group: '—' },
    ];

    const osOptions = [
      { label: 'Windows', value: 'windows', icon: markRaw(ComputerDesktopIcon) },
      { label: 'Mac', value: 'mac', icon: markRaw(ComputerDesktopIcon) },
      { label: 'Linux', value: 'linux', icon: markRaw(ComputerDesktopIcon) },
      { label: 'iOS', value: 'ios', icon: markRaw(DevicePhoneMobileIcon) },
      { label: 'Android', value: 'android', icon: markRaw(DevicePhoneMobileIcon) },
    ];

    const deviceAssignmentOptions = [
      { label: 'Policy Groups', value: 'policy_groups' },
      { label: 'Device Groups', value: 'device_groups' },
      { label: 'Devices', value: 'devices' },
    ];

    const userAssignmentOptions = [
      { label: 'Policy Groups', value: 'policy_groups' },
      { label: 'User Groups', value: 'user_groups' },
      { label: 'Users', value: 'users' },
    ];

    const assignmentOptions = computed(() =>
      policyType.value === 'device' ? deviceAssignmentOptions : userAssignmentOptions,
    );

    const targetOptions = computed(() => {
      if (assignmentType.value === 'policy_groups') {
        return [
          { label: 'Default Policy Group', value: 'pg-1' },
          { label: 'High Security', value: 'pg-2' },
          { label: 'Standard Compliance', value: 'pg-3' },
        ];
      }
      if (assignmentType.value === 'device_groups') {
        return [
          { label: 'All Macs', value: 'dg-1' },
          { label: 'Corporate Devices', value: 'dg-2' },
          { label: 'Mobile Devices', value: 'dg-3' },
          { label: 'Linux Servers', value: 'dg-4' },
        ];
      }
      if (assignmentType.value === 'devices') {
        return [
          { label: 'MacBook Pro — Sarah Chen', value: 'd-1' },
          { label: 'Dell XPS 15 — Marcus Rodriguez', value: 'd-2' },
          { label: 'ThinkPad X1 — Emily Johnson', value: 'd-3' },
          { label: 'iMac — Michael Smith', value: 'd-4' },
        ];
      }
      if (assignmentType.value === 'user_groups') {
        return [
          { label: 'Engineering', value: 'ug-1' },
          { label: 'Sales & Marketing', value: 'ug-2' },
          { label: 'IT & Operations', value: 'ug-3' },
          { label: 'HR & People Ops', value: 'ug-4' },
        ];
      }
      if (assignmentType.value === 'users') {
        return [
          { label: 'Sarah Chen', value: 'u-1' },
          { label: 'Marcus Rodriguez', value: 'u-2' },
          { label: 'Emily Johnson', value: 'u-3' },
          { label: 'Michael Smith', value: 'u-4' },
        ];
      }
      return [];
    });

    const steps = computed(() => {
      const base = [
        { number: 1, label: 'Policy Type' },
        { number: 2, label: 'Select OS' },
        { number: 3, label: 'Configure' },
        { number: 4, label: 'Details & Assign' },
        { number: 5, label: 'Review & Save' },
      ];
      return base;
    });

    const canProceed = computed(() => {
      switch (activeStep.value) {
        case 1: return policyType.value !== null;
        case 2: return selectedOS.value !== null;
        case 3: return policyName.value.trim() !== '';
        case 4: return assignmentType.value !== null && selectedTarget.value !== null;
        case 5: return true;
        default: return false;
      }
    });

    const summaryItems = computed(() => [
      { label: 'Policy Type', value: policyType.value === 'device' ? 'Device Policy' : 'User Policy' },
      { label: 'Operating System', value: osOptions.find(o => o.value === selectedOS.value)?.label ?? '—' },
      { label: 'Policy Name', value: policyName.value || '—' },
      { label: 'Description', value: policyDescription.value || '—' },
      { label: 'Assignment', value: assignmentOptions.value.find(o => o.value === assignmentType.value)?.label ?? '—' },
      { label: 'Target', value: targetOptions.value.find(o => o.value === selectedTarget.value)?.label ?? '—' },
    ]);

    function startWizard() {
      wizardActive.value = true;
      activeStep.value = 1;
      policyType.value = null;
      selectedOS.value = null;
      policyName.value = '';
      policyDescription.value = '';
      assignmentType.value = null;
      selectedTarget.value = null;
    }

    function cancelWizard() {
      wizardActive.value = false;
    }

    function nextStep() {
      if (activeStep.value < 5) {
        activeStep.value++;
      }
    }

    function prevStep() {
      if (activeStep.value > 1) {
        activeStep.value--;
      }
    }

    function selectPolicyType(type: string) {
      policyType.value = type;
      assignmentType.value = null;
      selectedTarget.value = null;
    }

    function selectOS(os: string) {
      selectedOS.value = os;
    }

    function selectAssignment(type: string) {
      assignmentType.value = type;
      selectedTarget.value = null;
    }

    function savePolicy() {
      wizardActive.value = false;
    }

    return {
      wizardActive,
      activeStep,
      policyType,
      selectedOS,
      policyName,
      policyDescription,
      assignmentType,
      selectedTarget,
      existingPolicies,
      osOptions,
      assignmentOptions,
      targetOptions,
      steps,
      canProceed,
      summaryItems,
      menuItems,
      profileMenuItems,
      startWizard,
      cancelWizard,
      nextStep,
      prevStep,
      selectPolicyType,
      selectOS,
      selectAssignment,
      savePolicy,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto">
        <TopBar />

        <!-- Page Header -->
        <div class="border-b border-neutral-default_solid bg-neutral-base shrink-0">
          <div class="flex flex-wrap items-start gap-4 px-6 py-4">
            <div class="flex-1 min-w-0 flex items-center gap-2 py-1">
              <ShieldExclamationIcon class="w-6 h-6 text-neutral-base shrink-0" />
              <h1 class="text-heading-2 text-neutral-base">Policy Management</h1>
            </div>
            <div class="flex items-center gap-2">
              <PvButton
                v-if="!wizardActive"
                label="Add New Policy"
                @click="startWizard"
              >
                <template #icon>
                  <PlusIcon class="w-5 h-5" />
                </template>
              </PvButton>
              <PvButton
                v-if="wizardActive"
                label="Cancel"
                severity="secondary"
                variant="outlined"
                @click="cancelWizard"
              />
            </div>
          </div>
        </div>

        <!-- Page Content -->
        <div class="flex-1 overflow-auto bg-neutral-surface">

          <!-- ========== POLICY LIST VIEW ========== -->
          <div v-if="!wizardActive" class="p-6">
            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid overflow-hidden">
              <!-- Table Header -->
              <div class="grid grid-cols-6 gap-4 px-4 py-3 border-b border-neutral-default_solid bg-neutral-surface">
                <span class="text-body-sm-bold text-neutral-subtle col-span-2">Policy Name</span>
                <span class="text-body-sm-bold text-neutral-subtle">Type</span>
                <span class="text-body-sm-bold text-neutral-subtle">OS</span>
                <span class="text-body-sm-bold text-neutral-subtle">Status</span>
                <span class="text-body-sm-bold text-neutral-subtle">Targets</span>
              </div>
              <!-- Table Rows -->
              <div
                v-for="(policy, index) in existingPolicies"
                :key="index"
                class="grid grid-cols-6 gap-4 px-4 py-3 border-b border-neutral-default_solid last:border-b-0 items-center hover:bg-neutral-surface cursor-pointer transition-colors"
              >
                <span class="text-body-md text-neutral-base col-span-2">{{ policy.name }}</span>
                <span>
                  <PvTag :value="policy.type" :severity="policy.type === 'Device' ? 'info' : 'warn'" />
                </span>
                <span class="text-body-md text-neutral-subtle">{{ policy.os }}</span>
                <span>
                  <PvTag
                    :value="policy.status"
                    :severity="policy.status === 'Active' ? 'success' : 'secondary'"
                  />
                </span>
                <span class="text-body-md text-neutral-subtle">{{ policy.targets }} {{ policy.type === 'Device' ? 'devices' : 'users' }}</span>
              </div>
            </div>
          </div>

          <!-- ========== WIZARD VIEW ========== -->
          <div v-if="wizardActive" class="p-6">

            <!-- Step Indicator -->
            <div class="flex items-center justify-center mb-8">
              <div v-for="(step, idx) in steps" :key="step.number" class="flex items-center">
                <div class="flex flex-col items-center gap-1.5">
                  <div
                    class="w-9 h-9 rounded-full flex items-center justify-center text-body-sm-bold border-2 transition-all"
                    :class="{
                      'border-button-primary-base bg-button-primary-base text-button-primary-base': activeStep === step.number,
                      'border-success-base bg-success-base text-button-primary-base': activeStep > step.number,
                      'border-neutral-default_solid bg-neutral-base text-neutral-subtle': activeStep < step.number,
                    }"
                  >
                    <CheckCircleSolidIcon v-if="activeStep > step.number" class="w-5 h-5" />
                    <span v-else>{{ step.number }}</span>
                  </div>
                  <span
                    class="text-body-xs whitespace-nowrap"
                    :class="{
                      'text-neutral-base font-semibold': activeStep === step.number,
                      'text-success-base': activeStep > step.number,
                      'text-neutral-subtle': activeStep < step.number,
                    }"
                  >{{ step.label }}</span>
                </div>
                <div
                  v-if="idx < steps.length - 1"
                  class="w-16 h-0.5 mx-2 mb-5 transition-colors"
                  :class="{
                    'bg-success-base': activeStep > step.number,
                    'bg-neutral-default_solid': activeStep <= step.number,
                  }"
                />
              </div>
            </div>

            <!-- Step Content Container -->
            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-6 max-w-3xl mx-auto">

              <!-- ===== STEP 1: Policy Type ===== -->
              <div v-if="activeStep === 1">
                <h2 class="text-heading-3 text-neutral-base mb-1">Choose Policy Type</h2>
                <p class="text-body-md text-neutral-subtle mb-6">Select the type of policy you want to create.</p>

                <div class="grid grid-cols-2 gap-4">
                  <!-- Device Policy Card -->
                  <button
                    class="flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition-all text-left"
                    :class="policyType === 'device'
                      ? 'border-button-primary-base bg-neutral-surface'
                      : 'border-neutral-default_solid bg-neutral-base hover:border-neutral-subtle hover:bg-neutral-surface'"
                    @click="selectPolicyType('device')"
                  >
                    <ComputerDesktopIcon class="w-10 h-10 text-neutral-base" />
                    <div class="flex flex-col items-center gap-1">
                      <span class="text-body-md-bold text-neutral-base">Device Policy</span>
                      <span class="text-body-sm text-neutral-subtle text-center">Configure policies for managed devices across platforms</span>
                    </div>
                    <CheckCircleSolidIcon
                      v-if="policyType === 'device'"
                      class="w-5 h-5 text-button-primary-base"
                    />
                  </button>

                  <!-- User Policy Card -->
                  <button
                    class="flex flex-col items-center gap-3 p-6 rounded-lg border-2 transition-all text-left"
                    :class="policyType === 'user'
                      ? 'border-button-primary-base bg-neutral-surface'
                      : 'border-neutral-default_solid bg-neutral-base hover:border-neutral-subtle hover:bg-neutral-surface'"
                    @click="selectPolicyType('user')"
                  >
                    <UsersIcon class="w-10 h-10 text-neutral-base" />
                    <div class="flex flex-col items-center gap-1">
                      <span class="text-body-md-bold text-neutral-base">User Policy</span>
                      <span class="text-body-sm text-neutral-subtle text-center">Configure policies for user accounts and access controls</span>
                    </div>
                    <CheckCircleSolidIcon
                      v-if="policyType === 'user'"
                      class="w-5 h-5 text-button-primary-base"
                    />
                  </button>
                </div>
              </div>

              <!-- ===== STEP 2: Select OS ===== -->
              <div v-if="activeStep === 2">
                <h2 class="text-heading-3 text-neutral-base mb-1">Select Operating System</h2>
                <p class="text-body-md text-neutral-subtle mb-6">Choose the target platform for this {{ policyType === 'device' ? 'device' : 'user' }} policy.</p>

                <div class="grid grid-cols-5 gap-3">
                  <button
                    v-for="os in osOptions"
                    :key="os.value"
                    class="flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all"
                    :class="selectedOS === os.value
                      ? 'border-button-primary-base bg-neutral-surface'
                      : 'border-neutral-default_solid bg-neutral-base hover:border-neutral-subtle hover:bg-neutral-surface'"
                    @click="selectOS(os.value)"
                  >
                    <component
                      :is="os.icon"
                      class="w-8 h-8 text-neutral-base"
                    />
                    <span class="text-body-sm-bold text-neutral-base">{{ os.label }}</span>
                    <CheckCircleSolidIcon
                      v-if="selectedOS === os.value"
                      class="w-4 h-4 text-button-primary-base"
                    />
                  </button>
                </div>
              </div>

              <!-- ===== STEP 3: Configure ===== -->
              <div v-if="activeStep === 3">
                <h2 class="text-heading-3 text-neutral-base mb-1">Configure Policy</h2>
                <p class="text-body-md text-neutral-subtle mb-6">Set the basic configuration for your policy.</p>

                <div class="flex flex-col gap-5">
                  <div class="flex flex-col gap-1.5">
                    <label class="text-body-sm-bold text-neutral-base">Policy Name <span class="text-error-base">*</span></label>
                    <PvInputText
                      v-model="policyName"
                      placeholder="Enter policy name..."
                    />
                  </div>

                  <div class="flex flex-col gap-1.5">
                    <label class="text-body-sm-bold text-neutral-base">Description</label>
                    <PvTextarea
                      v-model="policyDescription"
                      placeholder="Describe the purpose of this policy..."
                      rows="3"
                      autoResize
                    />
                  </div>

                  <div class="border-t border-neutral-default_solid pt-5">
                    <h3 class="text-body-md-bold text-neutral-base mb-3">Policy Settings</h3>
                    <div class="flex flex-col gap-3">
                      <div class="flex items-center justify-between p-3 rounded-lg bg-neutral-surface">
                        <div class="flex flex-col">
                          <span class="text-body-sm-bold text-neutral-base">Enforce on next check-in</span>
                          <span class="text-body-xs text-neutral-subtle">Apply this policy the next time a device checks in</span>
                        </div>
                        <PvTag value="Enabled" severity="success" />
                      </div>
                      <div class="flex items-center justify-between p-3 rounded-lg bg-neutral-surface">
                        <div class="flex flex-col">
                          <span class="text-body-sm-bold text-neutral-base">Allow user override</span>
                          <span class="text-body-xs text-neutral-subtle">Users can temporarily disable this policy</span>
                        </div>
                        <PvTag value="Disabled" severity="secondary" />
                      </div>
                      <div class="flex items-center justify-between p-3 rounded-lg bg-neutral-surface">
                        <div class="flex flex-col">
                          <span class="text-body-sm-bold text-neutral-base">Send notification</span>
                          <span class="text-body-xs text-neutral-subtle">Notify affected users when policy is applied</span>
                        </div>
                        <PvTag value="Enabled" severity="success" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ===== STEP 4: Details & Assign ===== -->
              <div v-if="activeStep === 4">
                <h2 class="text-heading-3 text-neutral-base mb-1">Details & Assignment</h2>
                <p class="text-body-md text-neutral-subtle mb-6">Choose how to assign this policy to {{ policyType === 'device' ? 'devices' : 'users' }}.</p>

                <div class="flex flex-col gap-6">
                  <!-- Assignment Type Selection -->
                  <div class="flex flex-col gap-1.5">
                    <label class="text-body-sm-bold text-neutral-base">Assign to</label>
                    <div class="grid grid-cols-3 gap-3">
                      <button
                        v-for="option in assignmentOptions"
                        :key="option.value"
                        class="flex items-center gap-2 p-3 rounded-lg border-2 transition-all"
                        :class="assignmentType === option.value
                          ? 'border-button-primary-base bg-neutral-surface'
                          : 'border-neutral-default_solid bg-neutral-base hover:border-neutral-subtle hover:bg-neutral-surface'"
                        @click="selectAssignment(option.value)"
                      >
                        <CheckCircleSolidIcon
                          v-if="assignmentType === option.value"
                          class="w-5 h-5 text-button-primary-base shrink-0"
                        />
                        <div
                          v-else
                          class="w-5 h-5 rounded-full border-2 border-neutral-default_solid shrink-0"
                        />
                        <span class="text-body-sm-bold text-neutral-base">{{ option.label }}</span>
                      </button>
                    </div>
                  </div>

                  <!-- Target Selector -->
                  <div v-if="assignmentType" class="flex flex-col gap-1.5">
                    <label class="text-body-sm-bold text-neutral-base">
                      Select a target {{ assignmentType === 'devices' ? 'Device' : assignmentType === 'user_groups' ? 'User Group' : assignmentType === 'device_groups' ? 'Device Group' : assignmentType === 'users' ? 'User' : 'Policy Group' }}
                    </label>
                    <PvSelect
                      v-model="selectedTarget"
                      :options="targetOptions"
                      optionLabel="label"
                      optionValue="value"
                      :placeholder="'Choose a ' + (assignmentType === 'devices' ? 'device' : assignmentType === 'user_groups' ? 'user group' : assignmentType === 'device_groups' ? 'device group' : assignmentType === 'users' ? 'user' : 'policy group') + '...'"
                      class="w-full"
                    />

                    <!-- Selected target preview -->
                    <div v-if="selectedTarget" class="mt-3 p-3 rounded-lg bg-neutral-surface border border-neutral-default_solid">
                      <div class="flex items-center gap-2">
                        <CheckCircleSolidIcon class="w-5 h-5 text-success-base shrink-0" />
                        <span class="text-body-sm text-neutral-base">
                          Selected: <span class="text-body-sm-bold">{{ targetOptions.find(o => o.value === selectedTarget)?.label }}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- ===== STEP 5: Review & Save ===== -->
              <div v-if="activeStep === 5">
                <h2 class="text-heading-3 text-neutral-base mb-1">Review & Save</h2>
                <p class="text-body-md text-neutral-subtle mb-6">Review your policy configuration before saving.</p>

                <div class="flex flex-col divide-y divide-neutral-default_solid border border-neutral-default_solid rounded-lg overflow-hidden">
                  <div
                    v-for="item in summaryItems"
                    :key="item.label"
                    class="flex items-start gap-4 px-4 py-3"
                  >
                    <span class="text-body-sm-bold text-neutral-subtle w-40 shrink-0">{{ item.label }}</span>
                    <span class="text-body-md text-neutral-base">{{ item.value }}</span>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex items-center justify-between mt-8 pt-5 border-t border-neutral-default_solid">
                <PvButton
                  v-if="activeStep > 1"
                  label="Back"
                  severity="secondary"
                  variant="outlined"
                  @click="prevStep"
                >
                  <template #icon>
                    <ArrowLeftIcon class="w-4 h-4" />
                  </template>
                </PvButton>
                <div v-else />

                <div class="flex items-center gap-2">
                  <PvButton
                    label="Cancel"
                    severity="secondary"
                    variant="text"
                    @click="cancelWizard"
                  />
                  <PvButton
                    v-if="activeStep < 5"
                    label="Next"
                    :disabled="!canProceed"
                    @click="nextStep"
                  >
                    <template #iconRight>
                      <ArrowRightIcon class="w-4 h-4" />
                    </template>
                  </PvButton>
                  <PvButton
                    v-if="activeStep === 5"
                    label="Save Policy"
                    severity="success"
                    @click="savePolicy"
                  >
                    <template #icon>
                      <CheckCircleIcon class="w-5 h-5" />
                    </template>
                  </PvButton>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof PoliciesPage> = {
  title: "Projects/Burak's Playground/Pages/Policies",
  component: PoliciesPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof PoliciesPage>;

export const Default: Story = {};
