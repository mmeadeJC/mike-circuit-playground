import type { Meta, StoryObj } from '@storybook/vue3';
import { linkTo } from '@storybook/addon-links';
import { usePolicyMigrationBackNavigation } from './demo/storybookPolicyMigrationNav';
import { ref, markRaw, defineComponent, computed, watch } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  FormField,
  LinkText,
  DatePicker,
  DetailPageLayout,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import MultiSelect from 'primevue/multiselect';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
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
  CheckCircleIcon,
  XCircleIcon,
  ChevronRightIcon,
  AdjustmentsHorizontalIcon,
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

interface GeneralSettingsState {
  targetOsVersion: string[];
  targetBuildVersion: string[];
  enforcementDeadline: Date | null;
  detailsUrl: string;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const targetOsVersionOptions = ['14.0', '14.5', '15.0', '15.1', '15.2', '15.3'];
const targetBuildVersionOptions = ['23A', '23G', '24A', '24B'];

const INITIAL_POLICY_NAME = 'Software Update Enforcement';
const INITIAL_POLICY_NOTES = '';
const INITIAL_ENFORCEMENT_DEADLINE = new Date(2024, 8, 19, 16, 45);

const INITIAL_GENERAL_SETTINGS: GeneralSettingsState = {
  targetOsVersion: ['15.0'],
  targetBuildVersion: ['24A'],
  enforcementDeadline: new Date(INITIAL_ENFORCEMENT_DEADLINE),
  detailsUrl: '',
};

const POLICY_DESCRIPTION_LEAD =
  'This policy uses Apple\'s Declarative Device Management (DDM) to enforce software updates on macOS devices. Administrators can specify a target OS version, build, and enforcement deadline to ensure devices update within a defined timeframe. ';

const POLICY_BEHAVIOR =
  'When this policy is applied, enrolled macOS devices are required to install the specified software update by the enforcement deadline.';

const POLICY_ACTIVATION =
  'The policy takes effect when successfully applied to enrolled devices that support DDM software update enforcement.';

const MINIMUM_SUPPORTED_VERSION = 'macOS 11.0 and later';

const ENROLLMENT_TYPES: EnrollmentType[] = [
  { label: 'User-Enrolled Devices', supported: false },
  { label: 'Device-Enrolled Devices', supported: true },
  { label: 'Auto-Enrolled Devices', supported: true },
];

const TIMEZONE_LABEL = 'America/New_York';
const DEADLINE_HELP_TEXT = 'Scheduled time uses your organization timezone.';

function datesEqual(a: Date | null, b: Date | null) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.getTime() === b.getTime();
}

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

function cloneGeneralSettings(settings: GeneralSettingsState): GeneralSettingsState {
  return {
    targetOsVersion: [...settings.targetOsVersion],
    targetBuildVersion: [...settings.targetBuildVersion],
    enforcementDeadline: settings.enforcementDeadline
      ? new Date(settings.enforcementDeadline)
      : null,
    detailsUrl: settings.detailsUrl,
  };
}

// ─── Page Component ────────────────────────────────────────────────

const SoftwareUpdateEnforcementPage = defineComponent({
  name: 'SoftwareUpdateEnforcementPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    LinkText,
    DatePicker,
    DetailPageLayout,
    PageSaveBar,
    TopBar,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvMultiSelect: MultiSelect,
    PvInputGroup: InputGroup,
    PvInputGroupAddon: InputGroupAddon,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    AdjustmentsHorizontalIcon,
    ChevronRightIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    XCircleIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/software-update-enforcement');

    const activeTab = ref('details');
    const generalSettingsCollapsed = ref(false);
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const targetOsVersion = ref<string[]>([...INITIAL_GENERAL_SETTINGS.targetOsVersion]);
    const targetBuildVersion = ref<string[]>([...INITIAL_GENERAL_SETTINGS.targetBuildVersion]);
    const enforcementDeadline = ref<Date | null>(new Date(INITIAL_ENFORCEMENT_DEADLINE));
    const detailsUrl = ref(INITIAL_GENERAL_SETTINGS.detailsUrl);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      settings: cloneGeneralSettings(INITIAL_GENERAL_SETTINGS),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;

      const base = baseline.value.settings;
      if (!arraysEqual(targetOsVersion.value, base.targetOsVersion)) return true;
      if (!arraysEqual(targetBuildVersion.value, base.targetBuildVersion)) return true;
      if (!datesEqual(enforcementDeadline.value, base.enforcementDeadline)) return true;
      if (detailsUrl.value !== base.detailsUrl) return true;
      return false;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function restoreSettings(settings: GeneralSettingsState) {
      targetOsVersion.value = [...settings.targetOsVersion];
      targetBuildVersion.value = [...settings.targetBuildVersion];
      enforcementDeadline.value = settings.enforcementDeadline
        ? new Date(settings.enforcementDeadline)
        : null;
      detailsUrl.value = settings.detailsUrl;
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      restoreSettings(baseline.value.settings);
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        settings: cloneGeneralSettings({
          targetOsVersion: targetOsVersion.value,
          targetBuildVersion: targetBuildVersion.value,
          enforcementDeadline: enforcementDeadline.value,
          detailsUrl: detailsUrl.value,
        }),
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
      generalSettingsCollapsed,
      policyName,
      policyNotes,
      targetOsVersion,
      targetBuildVersion,
      targetOsVersionOptions,
      targetBuildVersionOptions,
      enforcementDeadline,
      detailsUrl,
      TIMEZONE_LABEL,
      DEADLINE_HELP_TEXT,
      POLICY_DESCRIPTION_LEAD,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      MINIMUM_SUPPORTED_VERSION,
      ENROLLMENT_TYPES,
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
          title="Software Update Enforcement"
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
                Configure the policy here, then select the target groups or devices to apply it.
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
              <CollapsiblePanel header="macOS Device Policy">
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
                    <p class="text-body-md text-neutral-subtle m-0">
                      {{ POLICY_DESCRIPTION_LEAD }}
                      <LinkText
                        href="#"
                        target="_blank"
                        :showIcon="false"
                        customClass="inline-flex items-center gap-xs align-baseline"
                      >
                        Learn more
                        <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                      </LinkText>
                    </p>
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
                v-model:collapsed="generalSettingsCollapsed"
                toggleable
                header="General Settings"
              >
                <template #titleicon="iconProps">
                  <AdjustmentsHorizontalIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <div class="flex flex-col gap-xs">
                    <FormField
                      label="Target OS Version"
                      required
                      label-tooltip="The macOS version devices must update to."
                    >
                      <template #default="{ inputId }">
                        <PvMultiSelect
                          :id="inputId"
                          v-model="targetOsVersion"
                          :options="targetOsVersionOptions"
                          display="chip"
                          filter
                          filterPlaceholder="Search"
                          placeholder="Search"
                          :maxSelectedLabels="1"
                          class="w-full"
                        />
                      </template>
                    </FormField>
                    <LinkText
                      label="Apple Software Lookup"
                      href="#"
                      target="_blank"
                    />
                  </div>

                  <FormField
                    label="Target Build Version"
                    label-tooltip="The build identifier for the target macOS version."
                  >
                    <template #default="{ inputId }">
                      <PvMultiSelect
                        :id="inputId"
                        v-model="targetBuildVersion"
                        :options="targetBuildVersionOptions"
                        display="chip"
                        filter
                        filterPlaceholder="Search"
                        placeholder="Search"
                        :maxSelectedLabels="1"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <FormField
                    label="Enforcement Deadline"
                    required
                    label-tooltip="The date and time by which devices must install the update."
                    :help-text="DEADLINE_HELP_TEXT"
                  >
                    <template #default="{ inputId }">
                      <div class="w-[400px] max-w-full shrink-0">
                        <PvInputGroup class="w-full">
                          <DatePicker
                            :id="inputId"
                            v-model="enforcementDeadline"
                            fluid
                            showTime
                            hourFormat="12"
                            dateFormat="mm/dd/yy"
                            showIcon
                            iconDisplay="input"
                          />
                          <PvInputGroupAddon>{{ TIMEZONE_LABEL }}</PvInputGroupAddon>
                        </PvInputGroup>
                      </div>
                    </template>
                  </FormField>

                  <FormField
                    label="Details URL"
                    label-tooltip="Optional URL shown to users with update details."
                  >
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="detailsUrl"
                        class="w-full"
                      />
                    </template>
                  </FormField>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <h3 class="text-heading-3 text-neutral-base">macOS</h3>

                <div class="flex flex-col gap-xs w-full">
                  <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                  <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                </div>

                <div class="flex flex-col gap-sm w-full">
                  <span class="text-body-md-semi-bold text-neutral-base">Supported Enrollment Types</span>
                  <ul class="flex flex-col gap-sm list-none p-0 m-0">
                    <li
                      v-for="enrollmentType in ENROLLMENT_TYPES"
                      :key="enrollmentType.label"
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


export { SoftwareUpdateEnforcementPage };

const meta: Meta<typeof SoftwareUpdateEnforcementPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Software Update Enforcement",
  component: SoftwareUpdateEnforcementPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SoftwareUpdateEnforcementPage>;

export const Default: Story = {};
