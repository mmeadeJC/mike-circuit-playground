import type { Meta, StoryObj } from '@storybook/vue3';
import { linkTo } from '@storybook/addon-links';
import { usePolicyMigrationBackNavigation } from './demo/storybookPolicyMigrationNav';
import { ref, markRaw, defineComponent, computed, watch } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  FormField,
  CheckboxWithLabel,
  LinkText,
  DetailPageLayout,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
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
  ComputerDesktopIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronRightIcon,
} from '@heroicons/vue/24/outline';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

import TopBar from '@/components/AdminTopBar.vue';

import { menuItems, profileMenuItems } from './demo/policyMigrationMenuItems';

// ─── Types & Constants ─────────────────────────────────────────────

interface EnrollmentType {
  label: string;
  supported: boolean;
}

interface RestrictionOption {
  key: string;
  label: string;
  tooltip: string;
}

const ADMIN_RESTRICTION_OPTIONS: RestrictionOption[] = [
  { key: 'forceAutomaticTimeAndDate', label: 'Force Automatic Time & Date', tooltip: 'Require the device to use automatic time and date settings.' },
  { key: 'blockModifyingCellularDataAppSettings', label: 'Block Modifying Cellular Data App Settings', tooltip: 'Prevent users from changing cellular data settings for individual apps.' },
  { key: 'blockModifyingDeviceName', label: 'Block Modifying Device Name', tooltip: 'Prevent users from changing the device name.' },
  { key: 'blockScreenTime', label: 'Block Screen Time', tooltip: 'Prevent access to Screen Time settings.' },
  { key: 'blockModifyingWallpaper', label: 'Block Modifying Wallpaper', tooltip: 'Prevent users from changing the device wallpaper.' },
  { key: 'blockDictation', label: 'Block Dictation', tooltip: 'Prevent use of dictation on the device.' },
  { key: 'blockAirDrop', label: 'Block AirDrop', tooltip: 'Prevent use of AirDrop on supervised devices.' },
  { key: 'blockAirPrint', label: 'Block AirPrint', tooltip: 'Prevent use of AirPrint on supervised devices.' },
  { key: 'blockIMessage', label: 'Block iMessage', tooltip: 'Prevent use of iMessage on supervised devices.' },
  { key: 'blockIBooksStore', label: 'Block iBooks Store', tooltip: 'Prevent access to the iBooks Store.' },
  { key: 'blockAppleMusic', label: 'Block Apple Music', tooltip: 'Prevent access to Apple Music.' },
  { key: 'blockAppleMusicRadio', label: 'Block Apple Music Radio', tooltip: 'Prevent access to Apple Music Radio.' },
  { key: 'blockInstallationOfApps', label: 'Block Installation of Apps', tooltip: 'Prevent users from installing apps on the device.' },
];

const SECURITY_RESTRICTION_OPTIONS: RestrictionOption[] = [
  { key: 'blockUserInstallationOfConfigurationProfiles', label: 'Block User Installation of Configuration Profiles', tooltip: 'Prevent users from installing configuration profiles.' },
  { key: 'blockAddingVpnConfigs', label: 'Block Adding VPN Configs', tooltip: 'Prevent users from adding VPN configurations.' },
  { key: 'blockModifyingBluetoothSettings', label: 'Block Modifying Bluetooth Settings', tooltip: 'Prevent users from modifying Bluetooth settings.' },
  { key: 'blockFindMyDevices', label: 'Block Find My Devices', tooltip: 'Prevent use of Find My for devices.' },
  { key: 'blockFindMyFriends', label: 'Block Find My Friends', tooltip: 'Prevent use of Find My Friends.' },
  { key: 'blockPredictiveKeyboard', label: 'Block Predictive Keyboard', tooltip: 'Disable the predictive keyboard.' },
  { key: 'blockKeyboardShortcuts', label: 'Block Keyboard Shortcuts', tooltip: 'Prevent use of keyboard shortcuts.' },
  { key: 'blockICloudDriveSync', label: 'Block iCloud Drive Sync', tooltip: 'Prevent iCloud Drive from syncing on the device.' },
  { key: 'blockUsbDriveAccess', label: 'Block USB Drive Access', tooltip: 'Prevent access to USB drives connected to the device.' },
  { key: 'blockNetworkDriveAccess', label: 'Block Network Drive Access', tooltip: 'Prevent access to network drives.' },
  { key: 'blockPasswordAutoFill', label: 'Block Password AutoFill', tooltip: 'Prevent Password AutoFill on the device.' },
  { key: 'blockICloudPrivateRelay', label: 'Block iCloud Private Relay', tooltip: 'Prevent use of iCloud Private Relay.' },
  { key: 'blockScreenshots', label: 'Block Screenshots', tooltip: 'Prevent users from taking screenshots.' },
  { key: 'blockCamera', label: 'Block Camera', tooltip: 'Prevent use of the device camera.' },
];

type SettingsState = Record<string, boolean>;

function createInitialSettings(options: RestrictionOption[]): SettingsState {
  return Object.fromEntries(options.map((option) => [option.key, false]));
}

function cloneSettings(settings: SettingsState): SettingsState {
  return { ...settings };
}

function settingsEqual(a: SettingsState, b: SettingsState, options: RestrictionOption[]): boolean {
  return options.every((option) => a[option.key] === b[option.key]);
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL_POLICY_NAME = 'Supervised iOS Restrictions';
const INITIAL_POLICY_NOTES = '';

const INITIAL_ADMIN_SETTINGS = createInitialSettings(ADMIN_RESTRICTION_OPTIONS);
const INITIAL_SECURITY_SETTINGS = createInitialSettings(SECURITY_RESTRICTION_OPTIONS);

const POLICY_DESCRIPTION =
  'This policy allows you to configure restrictions that apply only to supervised iOS and iPadOS devices.';

const POLICY_BEHAVIOR =
  'When applied, these restrictions are enforced on supervised iPhones and iPads enrolled in JumpCloud MDM.';

const POLICY_ACTIVATION =
  'No action is needed for the policy to be activated.';

const IOS_MINIMUM_VERSION = 'iOS 13 or later';
const IPADOS_MINIMUM_VERSION = 'iPadOS 13 or later';

const ENROLLMENT_TYPES: EnrollmentType[] = [
  { label: 'User-Enrolled Devices', supported: false },
  { label: 'Device-Enrolled Devices', supported: true },
  { label: 'Auto-Enrolled Devices', supported: true },
];

// ─── Page Component ────────────────────────────────────────────────

const SupervisedIosRestrictionsPage = defineComponent({
  name: 'SupervisedIosRestrictionsPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    LinkText,
    DetailPageLayout,
    PageSaveBar,
    TopBar,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    InformationCircleIcon,
    ArrowRightIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    XCircleIcon,
    ChevronRightIcon,
    Cog6ToothIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/supervised-ios-restrictions');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const adminSettings = ref<SettingsState>(cloneSettings(INITIAL_ADMIN_SETTINGS));
    const securitySettings = ref<SettingsState>(cloneSettings(INITIAL_SECURITY_SETTINGS));
    const adminSettingsCollapsed = ref(true);
    const securitySettingsCollapsed = ref(true);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      adminSettings: cloneSettings(INITIAL_ADMIN_SETTINGS),
      securitySettings: cloneSettings(INITIAL_SECURITY_SETTINGS),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      if (!settingsEqual(adminSettings.value, baseline.value.adminSettings, ADMIN_RESTRICTION_OPTIONS)) return true;
      if (!settingsEqual(securitySettings.value, baseline.value.securitySettings, SECURITY_RESTRICTION_OPTIONS)) return true;
      return false;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      adminSettings.value = cloneSettings(baseline.value.adminSettings);
      securitySettings.value = cloneSettings(baseline.value.securitySettings);
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        adminSettings: cloneSettings(adminSettings.value),
        securitySettings: cloneSettings(securitySettings.value),
      };
      isSaving.value = false;
      showSavedConfirmation.value = true;
      setTimeout(() => {
        showSavedConfirmation.value = false;
      }, 2000);
    }

    return {
      menuItems,
      profileMenuItems,
      detailTabs,
      activeTab,
      activeTabLabel,
      policyName,
      policyNotes,
      adminSettings,
      securitySettings,
      adminSettingsCollapsed,
      securitySettingsCollapsed,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      IOS_MINIMUM_VERSION,
      IPADOS_MINIMUM_VERSION,
      ENROLLMENT_TYPES,
      ADMIN_RESTRICTION_OPTIONS,
      SECURITY_RESTRICTION_OPTIONS,
      isDirty,
      isSaving,
      showSavedConfirmation,
      handleDiscard,
      handleSave,
      goBack,

      backButtonLabel,
      shieldIcon: markRaw(ShieldCheckIcon),
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
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <TopBar
          showBackButton
          :backButtonLabel="backButtonLabel"
          @back="goBack"
        />

        <PageHeader
          title="Supervised iOS Restrictions"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="Device" severity="accent-purple">
                <template #icon>
                  <ComputerDesktopIcon class="w-3.5 h-3.5" />
                </template>
              </PvTag>
              <PvDivider layout="vertical" />
              <span class="text-body-md text-neutral-subtle">
                Configure the policy below, then select the target groups or devices to apply it.
              </span>
            </div>
          </template>
        </PageHeader>

        <div class="flex-1 overflow-auto bg-neutral-surface min-h-0">
          <DetailPageLayout
            v-if="activeTab === 'details'"
            class="w-full! min-h-full"
            max-width="1440"
            :show-sidebar="true"
          >
            <div class="flex flex-col gap-md pb-32">
              <CollapsiblePanel header="iOS &amp; iPadOS Device Policy">
                <template #titleicon="iconProps">
                  <ShieldCheckIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField label="Policy Name">
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="policyName"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <FormField label="Policy Notes">
                    <template #default="{ inputId }">
                      <PvTextarea
                        :id="inputId"
                        v-model="policyNotes"
                        rows="3"
                        autoResize
                        class="w-full"
                        placeholder="Add notes about this policy"
                      />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Description</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_DESCRIPTION }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_BEHAVIOR }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_ACTIVATION }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="adminSettingsCollapsed"
                toggleable
                header="Admin Settings for Supervised Devices"
              >
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <CheckboxWithLabel
                    v-for="option in ADMIN_RESTRICTION_OPTIONS"
                    :key="option.key"
                    v-model="adminSettings[option.key]"
                    :inputId="'admin-' + option.key"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>{{ option.label }}</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          :aria-label="'More information about ' + option.label"
                          v-tooltip.top="option.tooltip"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="securitySettingsCollapsed"
                toggleable
                header="Security Settings for Supervised Devices"
              >
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <CheckboxWithLabel
                    v-for="option in SECURITY_RESTRICTION_OPTIONS"
                    :key="option.key"
                    v-model="securitySettings[option.key]"
                    :inputId="'security-' + option.key"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>{{ option.label }}</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          :aria-label="'More information about ' + option.label"
                          v-tooltip.top="option.tooltip"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex w-full min-w-0 max-w-full flex-col gap-md">
                <div class="p-px">
                  <div class="flex w-full min-w-0 items-center gap-sm rounded-sm bg-notification-info p-sm shadow-message-info text-notification-info-content">
                    <InformationCircleIcon class="size-5 shrink-0 text-notification-info-content" />
                    <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-sm gap-y-xs">
                      <span class="text-body-md-bold text-neutral-base shrink-0">Requires Supervision</span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex min-w-0 max-w-full shrink items-center gap-0.5 py-xs pl-xs text-body-md-link text-link-base no-underline transition-colors hover:text-link-hover hover:underline hover:underline-offset-2 active:text-link-active active:underline"
                      >
                        <span class="min-w-0 break-words">Understanding Supervised Devices</span>
                        <ArrowRightIcon class="size-5 shrink-0 text-current" />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-xs w-full">
                  <span class="text-body-md-semi-bold text-neutral-base">Other Requirements</span>
                  <p class="text-body-md text-neutral-base m-0">
                    JumpCloud MDM enrollment
                    <LinkText
                      href="#"
                      target="_blank"
                      :showIcon="false"
                      customClass="inline-flex items-center gap-xs align-baseline ml-xs"
                    >
                      Learn more
                      <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                    </LinkText>
                  </p>
                </div>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">iOS</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ IOS_MINIMUM_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-sm w-full">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Enrollment Types</span>
                    <ul class="flex flex-col gap-sm list-none p-0 m-0">
                      <li
                        v-for="enrollmentType in ENROLLMENT_TYPES"
                        :key="'ios-' + enrollmentType.label"
                        class="flex items-start gap-xs"
                      >
                        <CheckCircleIcon
                          v-if="enrollmentType.supported"
                          class="size-5 shrink-0 text-success-base mt-0.5"
                        />
                        <XCircleIcon
                          v-else
                          class="size-5 shrink-0 text-error-base mt-0.5"
                        />
                        <span class="text-body-md text-neutral-base">{{ enrollmentType.label }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">iPadOS</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ IPADOS_MINIMUM_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-sm w-full">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Enrollment Types</span>
                    <ul class="flex flex-col gap-sm list-none p-0 m-0">
                      <li
                        v-for="enrollmentType in ENROLLMENT_TYPES"
                        :key="'ipados-' + enrollmentType.label"
                        class="flex items-start gap-xs"
                      >
                        <CheckCircleIcon
                          v-if="enrollmentType.supported"
                          class="size-5 shrink-0 text-success-base mt-0.5"
                        />
                        <XCircleIcon
                          v-else
                          class="size-5 shrink-0 text-error-base mt-0.5"
                        />
                        <span class="text-body-md text-neutral-base">{{ enrollmentType.label }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </template>
          </DetailPageLayout>

          <div
            v-else
            class="flex flex-col items-center justify-center h-full gap-sm text-neutral-subtle p-md"
          >
            <span class="text-body-md">{{ activeTabLabel }}</span>
            <span class="text-body-sm">Binding content is not included in this Details tab exploration.</span>
          </div>
        </div>

        <PageSaveBar
          :visible="isDirty"
          :saving="isSaving"
          :saved="showSavedConfirmation"
          message="You have unsaved changes"
          saveLabel="Create Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    </div>
  `,
});


export { SupervisedIosRestrictionsPage };

const meta: Meta<typeof SupervisedIosRestrictionsPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Supervised iOS Restrictions",
  component: SupervisedIosRestrictionsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SupervisedIosRestrictionsPage>;

export const Default: Story = {};
