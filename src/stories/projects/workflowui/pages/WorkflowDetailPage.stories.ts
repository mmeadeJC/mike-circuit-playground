import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  ToggleSwitch,
  FormField,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';

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
  BoltIcon,
  PlayIcon,
  XMarkIcon,
  InformationCircleIcon,
  PlusIcon,
  EnvelopeIcon,
  ArrowPathIcon,
} from '@heroicons/vue/24/outline';

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
} from '@jumpcloud/icons';

// ── Navigation items ──
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
    label: 'Alert',
    leftIcon: markRaw(BellIcon),
    count: 23,
    isNew: true,
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
    label: 'Workflows',
    leftIcon: markRaw(WorkflowIcon),
    items: [
      { label: 'All Workflows' },
      { label: 'Triggers' },
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

// ── Tab definitions ──
const tabs = [
  { label: 'Overview', value: 'overview' },
  { label: 'Execution history', value: 'execution-history' },
];

// ── Component ──
const WorkflowDetailPage = defineComponent({
  name: 'WorkflowDetailPage',
  components: {
    AppNavigation,
    PageHeader,
    ToggleSwitch,
    FormField,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    TopBar,
    BoltIcon,
    PlayIcon,
    XMarkIcon,
    InformationCircleIcon,
    PlusIcon,
    EnvelopeIcon,
    ArrowPathIcon,
  },
  setup() {
    const activeTab = ref('overview');
    const isEnabled = ref(true);
    const selectedStep = ref('loop');
    const loopInputValue = ref('List user systems');
    const showDropdown = ref(true);

    return {
      menuItems,
      profileMenuItems,
      tabs,
      activeTab,
      isEnabled,
      selectedStep,
      loopInputValue,
      showDropdown,
      WorkflowIcon: markRaw(WorkflowIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="workflows"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar showBackButton backButtonLabel="Back" />

        <!-- Page Header with actions -->
        <PageHeader
          title="Remove device of suspended users"
          :tabs="tabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #actions>
            <div class="flex items-center gap-sm">
              <ToggleSwitch v-model="isEnabled" label="Enabled" />
              <PvButton label="Cancel" severity="secondary" variant="outlined" />
              <PvButton severity="secondary" variant="outlined">
                <template #icon>
                  <PlayIcon class="size-5" />
                </template>
              </PvButton>
              <PvButton label="Save" />
            </div>
          </template>
        </PageHeader>

        <!-- Metadata bar -->
        <div class="flex items-center gap-md px-6 border-b border-neutral-default_solid bg-neutral-base shrink-0">
          <div class="flex items-center gap-sm py-2">
            <div class="flex items-center gap-xs">
              <BoltIcon class="size-4 text-neutral-subtle" />
              <span class="text-body-sm text-neutral-subtle">Event Trigger</span>
            </div>
            <span class="text-neutral-ghost">·</span>
            <span class="text-body-sm text-neutral-subtle">Last Ran: 2mins Ago</span>
            <span class="text-neutral-ghost">·</span>
            <span class="text-body-sm text-neutral-subtle">Created: 2d ago</span>
          </div>
        </div>

        <!-- Main content area -->
        <div v-if="activeTab === 'overview'" class="flex-1 flex min-h-0 overflow-hidden">
          <!-- Workflow canvas -->
          <div class="flex-1 overflow-auto bg-neutral-surface">
            <div class="flex flex-col items-center py-8 px-6 min-h-full">

              <!-- Trigger step card -->
              <div
                class="workflow-card w-[420px] rounded-lg border bg-neutral-base shadow-sm overflow-hidden cursor-pointer"
                :class="selectedStep === 'trigger' ? 'border-2 border-brand-primary-base' : 'border-neutral-default_solid'"
                @click="selectedStep = 'trigger'"
              >
                <div class="flex items-center gap-sm px-4 pt-4 pb-2">
                  <div class="flex items-center justify-center size-6 rounded bg-[#f0c93e]">
                    <BoltIcon class="size-4 text-neutral-inverted-base" />
                  </div>
                  <span class="text-body-md-semi-bold text-neutral-base">User suspended</span>
                </div>
                <div class="px-4 pb-4 flex flex-col gap-1">
                  <span class="text-body-sm text-neutral-subtle">user_id</span>
                  <span class="text-body-sm text-neutral-subtle">input.resource.id</span>
                </div>
              </div>

              <!-- Connector -->
              <div class="flex flex-col items-center">
                <div class="w-px h-6 border-l-2 border-dashed border-neutral-ghost"></div>
                <div class="size-1.5 rounded-full bg-neutral-ghost"></div>
                <div class="w-px h-2 border-l-2 border-dashed border-neutral-ghost"></div>
              </div>

              <!-- Loop step card (selected) -->
              <div
                class="workflow-card w-[420px] rounded-lg bg-neutral-base shadow-sm overflow-hidden cursor-pointer"
                :class="selectedStep === 'loop' ? 'border-2 border-brand-primary-base' : 'border border-neutral-default_solid'"
                @click="selectedStep = 'loop'"
              >
                <div class="flex items-center gap-sm px-4 pt-4 pb-2">
                  <div class="flex items-center justify-center size-6 rounded bg-[#e44d8a]">
                    <ArrowPathIcon class="size-4 text-neutral-inverted-base" />
                  </div>
                  <span class="text-body-md-semi-bold text-neutral-base">Loop</span>
                </div>
                <div class="px-4 pb-4 flex flex-col gap-1">
                  <span class="text-body-sm text-neutral-subtle">Count</span>
                  <span class="text-body-sm text-neutral-subtle">List user systems</span>
                </div>
              </div>

              <!-- Connector -->
              <div class="flex flex-col items-center">
                <div class="w-px h-6 border-l-2 border-dashed border-neutral-ghost"></div>
                <div class="size-1.5 rounded-full bg-neutral-ghost"></div>
                <div class="w-px h-2 border-l-2 border-dashed border-neutral-ghost"></div>
              </div>

              <!-- Remove device step card -->
              <div
                class="workflow-card w-[420px] rounded-lg bg-neutral-base shadow-sm overflow-hidden cursor-pointer"
                :class="selectedStep === 'remove-device' ? 'border-2 border-brand-primary-base' : 'border border-neutral-default_solid'"
                @click="selectedStep = 'remove-device'"
              >
                <div class="flex items-center gap-sm px-4 pt-4 pb-2">
                  <div class="flex items-center justify-center size-6 rounded bg-[#e44d8a]">
                    <BoltIcon class="size-4 text-neutral-inverted-base" />
                  </div>
                  <span class="text-body-md-semi-bold text-neutral-base">Remove device</span>
                </div>
                <div class="px-4 pb-4 flex flex-col gap-1">
                  <span class="text-body-sm text-neutral-subtle">user_id</span>
                  <span class="text-body-sm text-neutral-subtle">input.resource.id</span>
                </div>
              </div>

              <!-- Connector -->
              <div class="flex flex-col items-center">
                <div class="w-px h-6 border-l-2 border-dashed border-neutral-ghost"></div>
                <div class="size-1.5 rounded-full bg-neutral-ghost"></div>
                <div class="w-px h-2 border-l-2 border-dashed border-neutral-ghost"></div>
              </div>

              <!-- Send email step card -->
              <div
                class="workflow-card w-[420px] rounded-lg bg-neutral-base shadow-sm overflow-hidden cursor-pointer"
                :class="selectedStep === 'send-email' ? 'border-2 border-brand-primary-base' : 'border border-neutral-default_solid'"
                @click="selectedStep = 'send-email'"
              >
                <div class="flex items-center gap-sm px-4 pt-4 pb-2">
                  <div class="flex items-center justify-center size-6 rounded bg-[#38b2ac]">
                    <EnvelopeIcon class="size-4 text-neutral-inverted-base" />
                  </div>
                  <span class="text-body-md-semi-bold text-neutral-base">Send email</span>
                </div>
                <div class="px-4 pb-4 flex flex-col gap-md">
                  <!-- Recipients -->
                  <div class="flex flex-col gap-1">
                    <span class="text-body-sm text-neutral-subtle">Recipients</span>
                    <div class="flex items-center gap-xs flex-wrap">
                      <PvTag value="4 email channels" severity="neutral" />
                      <PvTag value="1 email id" severity="neutral" />
                    </div>
                  </div>
                  <!-- Subject -->
                  <div class="flex flex-col gap-1">
                    <span class="text-body-sm text-neutral-subtle">Subject</span>
                    <span class="text-body-md text-neutral-base">Device Removed</span>
                  </div>
                  <!-- Email body -->
                  <div class="flex flex-col gap-1">
                    <span class="text-body-sm text-neutral-subtle">Email body</span>
                    <div class="flex items-center gap-xs flex-wrap">
                      <PvTag value="input.device_id" severity="info" />
                      <span class="text-body-sm text-neutral-base">is removed from the</span>
                      <PvTag value="input.user_id" severity="info" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Connector to add button -->
              <div class="flex flex-col items-center">
                <div class="w-px h-6 border-l-2 border-dashed border-neutral-ghost"></div>
              </div>

              <!-- Add step button -->
              <PvButton
                severity="secondary"
                variant="outlined"
                rounded
                class="size-10"
              >
                <template #icon>
                  <PlusIcon class="size-5" />
                </template>
              </PvButton>

              <div class="h-8"></div>
            </div>
          </div>

          <!-- Right sidebar — Step configuration panel -->
          <div v-if="selectedStep" class="w-[380px] shrink-0 border-l border-neutral-default_solid bg-neutral-base overflow-y-auto">
            <!-- Sidebar header -->
            <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-default_solid">
              <div class="flex items-center gap-sm">
                <div class="flex items-center justify-center size-6 rounded bg-[#e44d8a]">
                  <ArrowPathIcon class="size-4 text-neutral-inverted-base" />
                </div>
                <span class="text-heading-4 text-neutral-base">Loop</span>
              </div>
              <PvButton severity="secondary" variant="text" size="small" @click="selectedStep = ''">
                <template #icon>
                  <XMarkIcon class="size-5" />
                </template>
              </PvButton>
            </div>

            <!-- Sidebar content -->
            <div class="p-4 flex flex-col gap-md">
              <FormField label="Enter input value" required>
                <template #labelicon>
                  <InformationCircleIcon class="size-4 text-neutral-subtle" />
                </template>
                <template #default="{ inputId }">
                  <PvInputText
                    :id="inputId"
                    v-model="loopInputValue"
                    class="w-full"
                    @focus="showDropdown = true"
                  />
                </template>
              </FormField>

              <!-- Variable suggestion dropdown -->
              <div v-if="showDropdown" class="border border-neutral-default_solid rounded-lg overflow-hidden bg-neutral-base shadow-sm -mt-2">
                <!-- User suspended event section -->
                <div class="px-3 py-2 border-b border-neutral-default_solid bg-neutral-surface">
                  <span class="text-body-sm-semi-bold text-neutral-subtle">User suspended event</span>
                </div>
                <div class="flex flex-col">
                  <div class="px-4 py-2 text-body-sm text-neutral-base hover:bg-neutral-surface cursor-pointer">
                    user.id
                  </div>
                  <div class="px-4 py-2 text-body-sm text-neutral-base hover:bg-neutral-surface cursor-pointer">
                    device id
                  </div>
                  <div class="px-4 py-2 text-body-sm text-neutral-base hover:bg-neutral-surface cursor-pointer">
                    initiatedby.email
                  </div>
                  <div class="px-4 py-2 text-body-sm text-neutral-base hover:bg-neutral-surface cursor-pointer">
                    Variable name
                  </div>
                </div>

                <!-- Get Systems section -->
                <div class="px-3 py-2 border-t border-b border-neutral-default_solid bg-neutral-surface">
                  <span class="text-body-sm-semi-bold text-neutral-subtle">Get Systems</span>
                </div>
                <div class="flex flex-col">
                  <div class="px-4 py-2 bg-brand-primary-ghost cursor-pointer">
                    <div class="text-body-sm-semi-bold text-neutral-base">List user systems</div>
                    <div class="text-body-sm text-neutral-subtle">This retrieves a list of systems linked to a user ID.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Execution history tab -->
        <div v-if="activeTab === 'execution-history'" class="flex-1 overflow-auto bg-neutral-surface">
          <div class="p-6">
            <div class="bg-neutral-base rounded-lg border border-neutral-default_solid p-8 text-center">
              <p class="text-body-lg text-neutral-subtle">Execution history content coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const meta: Meta<typeof WorkflowDetailPage> = {
  title: 'Projects/Workflow UI/Pages/Workflow Detail',
  component: WorkflowDetailPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof WorkflowDetailPage>;

export const Default: Story = {};
