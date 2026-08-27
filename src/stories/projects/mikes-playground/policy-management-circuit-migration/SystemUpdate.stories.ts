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
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import SelectButton from 'primevue/selectbutton';
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
  InformationCircleIcon,
  TrashIcon,
  PlusIcon,
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

type SystemUpdateMode = 'default' | 'automatic' | 'windowed' | 'postpone';

interface FreezePeriodRow {
  id: number;
  dateRange: Date[] | null;
}

interface SystemUpdateSettingsState {
  systemUpdateMode: SystemUpdateMode;
  dailyStartTime: Date | null;
  dailyStopTime: Date | null;
  freezePeriods: FreezePeriodRow[];
}

interface EnrollmentType {
  label: string;
  supported: boolean;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const systemUpdateModeOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Automatic', value: 'automatic' },
  { label: 'Windowed', value: 'windowed' },
  { label: 'Postpone', value: 'postpone' },
];

const INITIAL_POLICY_NAME = 'System Update';
const INITIAL_POLICY_NOTES = '';

let nextFreezePeriodId = 1;

function createFreezePeriodRow(): FreezePeriodRow {
  const row: FreezePeriodRow = { id: nextFreezePeriodId, dateRange: null };
  nextFreezePeriodId += 1;
  return row;
}

const INITIAL_SETTINGS: SystemUpdateSettingsState = {
  systemUpdateMode: 'default',
  dailyStartTime: null,
  dailyStopTime: null,
  freezePeriods: [createFreezePeriodRow()],
};

const TIMEZONE_LABEL = 'America/New_York';
const TIME_HELP_TEXT = 'Scheduled time uses your organization timezone.';

const POLICY_DESCRIPTION_LEAD =
  'This policy lets you manage over-the-air (OTA) system updates on Android devices. Configure when and how updates are installed to align with your organization\'s maintenance and compliance requirements. ';

const POLICY_BEHAVIOR =
  'Devices must be enrolled in EMM to use this policy.';

const POLICY_ACTIVATION =
  'No action is needed to activate this policy.';

const MINIMUM_SUPPORTED_VERSION = 'Android 6.0 or later';

const ENROLLMENT_TYPES: EnrollmentType[] = [
  { label: 'Work Profile (Personal device)', supported: false },
  { label: 'Work Profile (Company owned device)', supported: false },
  { label: 'Fully managed device', supported: true },
  { label: 'Dedicated device', supported: true },
];

function datesEqual(a: Date | null | undefined, b: Date | null | undefined) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return a.getTime() === b.getTime();
}

function cloneFreezePeriods(rows: FreezePeriodRow[]): FreezePeriodRow[] {
  return rows.map((row) => ({
    id: row.id,
    dateRange: row.dateRange
      ? row.dateRange.map((date) => new Date(date))
      : null,
  }));
}

function freezePeriodsEqual(a: FreezePeriodRow[], b: FreezePeriodRow[]) {
  if (a.length !== b.length) return false;
  return a.every((row, index) => {
    const other = b[index];
    const currentRange = row.dateRange;
    const otherRange = other.dateRange;
    if (!currentRange && !otherRange) return true;
    if (!currentRange || !otherRange) return false;
    if (currentRange.length !== otherRange.length) return false;
    return currentRange.every((date, rangeIndex) => datesEqual(date, otherRange[rangeIndex]));
  });
}

function cloneSettings(settings: SystemUpdateSettingsState): SystemUpdateSettingsState {
  return {
    systemUpdateMode: settings.systemUpdateMode,
    dailyStartTime: settings.dailyStartTime ? new Date(settings.dailyStartTime) : null,
    dailyStopTime: settings.dailyStopTime ? new Date(settings.dailyStopTime) : null,
    freezePeriods: cloneFreezePeriods(settings.freezePeriods),
  };
}

// ─── Page Component ────────────────────────────────────────────────

const SystemUpdatePage = defineComponent({
  name: 'SystemUpdatePage',
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
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelectButton: SelectButton,
    PvInputGroup: InputGroup,
    PvInputGroupAddon: InputGroupAddon,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    XCircleIcon,
    InformationCircleIcon,
    TrashIcon,
    PlusIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/system-update');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const systemUpdateMode = ref<SystemUpdateMode>(INITIAL_SETTINGS.systemUpdateMode);
    const dailyStartTime = ref<Date | null>(INITIAL_SETTINGS.dailyStartTime);
    const dailyStopTime = ref<Date | null>(INITIAL_SETTINGS.dailyStopTime);
    const freezePeriods = ref<FreezePeriodRow[]>(cloneFreezePeriods(INITIAL_SETTINGS.freezePeriods));

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      settings: cloneSettings(INITIAL_SETTINGS),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const showsFreezePeriod = computed(() => (
      systemUpdateMode.value === 'automatic'
      || systemUpdateMode.value === 'windowed'
      || systemUpdateMode.value === 'postpone'
    ));

    const showsWindowedTimes = computed(() => systemUpdateMode.value === 'windowed');

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;

      const currentSettings: SystemUpdateSettingsState = {
        systemUpdateMode: systemUpdateMode.value,
        dailyStartTime: dailyStartTime.value,
        dailyStopTime: dailyStopTime.value,
        freezePeriods: freezePeriods.value,
      };

      const base = baseline.value.settings;
      if (currentSettings.systemUpdateMode !== base.systemUpdateMode) return true;
      if (!datesEqual(currentSettings.dailyStartTime, base.dailyStartTime)) return true;
      if (!datesEqual(currentSettings.dailyStopTime, base.dailyStopTime)) return true;
      if (!freezePeriodsEqual(currentSettings.freezePeriods, base.freezePeriods)) return true;
      return false;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function restoreSettings(settings: SystemUpdateSettingsState) {
      systemUpdateMode.value = settings.systemUpdateMode;
      dailyStartTime.value = settings.dailyStartTime ? new Date(settings.dailyStartTime) : null;
      dailyStopTime.value = settings.dailyStopTime ? new Date(settings.dailyStopTime) : null;
      freezePeriods.value = cloneFreezePeriods(settings.freezePeriods);
    }

    function addFreezePeriod() {
      freezePeriods.value = [...freezePeriods.value, createFreezePeriodRow()];
    }

    function removeFreezePeriod(id: number) {
      if (freezePeriods.value.length <= 1) {
        freezePeriods.value = [{ ...freezePeriods.value[0], dateRange: null }];
        return;
      }
      freezePeriods.value = freezePeriods.value.filter((row) => row.id !== id);
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
        settings: cloneSettings({
          systemUpdateMode: systemUpdateMode.value,
          dailyStartTime: dailyStartTime.value,
          dailyStopTime: dailyStopTime.value,
          freezePeriods: freezePeriods.value,
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
      policyName,
      policyNotes,
      systemUpdateMode,
      systemUpdateModeOptions,
      dailyStartTime,
      dailyStopTime,
      freezePeriods,
      showsFreezePeriod,
      showsWindowedTimes,
      TIMEZONE_LABEL,
      TIME_HELP_TEXT,
      POLICY_DESCRIPTION_LEAD,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      MINIMUM_SUPPORTED_VERSION,
      ENROLLMENT_TYPES,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addFreezePeriod,
      removeFreezePeriod,
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
          title="System Update"
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
              <CollapsiblePanel header="Android Device Policy">
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

              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField
                    label="System Update Settings"
                    label-tooltip="Choose how over-the-air system updates are delivered to enrolled Android devices."
                  >
                    <template #default="{ inputId }">
                      <PvSelectButton
                        :id="inputId"
                        v-model="systemUpdateMode"
                        :options="systemUpdateModeOptions"
                        optionLabel="label"
                        optionValue="value"
                        :allowEmpty="false"
                      />
                    </template>
                  </FormField>

                  <template v-if="showsWindowedTimes">
                    <FormField
                      label="Daily Start Time"
                      label-tooltip="The start of the daily maintenance window when updates may be installed."
                      :help-text="TIME_HELP_TEXT"
                    >
                      <template #default="{ inputId }">
                        <div class="w-[400px] max-w-full shrink-0">
                          <PvInputGroup class="w-full">
                            <DatePicker
                              :id="inputId"
                              v-model="dailyStartTime"
                              timeOnly
                              showIcon
                              iconDisplay="input"
                              hourFormat="12"
                              placeholder="--:-- --"
                              fluid
                            />
                            <PvInputGroupAddon>{{ TIMEZONE_LABEL }}</PvInputGroupAddon>
                          </PvInputGroup>
                        </div>
                      </template>
                    </FormField>

                    <FormField
                      label="Daily Stop Time"
                      label-tooltip="The end of the daily maintenance window when updates may be installed."
                      :help-text="TIME_HELP_TEXT"
                    >
                      <template #default="{ inputId }">
                        <div class="w-[400px] max-w-full shrink-0">
                          <PvInputGroup class="w-full">
                            <DatePicker
                              :id="inputId"
                              v-model="dailyStopTime"
                              timeOnly
                              showIcon
                              iconDisplay="input"
                              hourFormat="12"
                              placeholder="--:-- --"
                              fluid
                            />
                            <PvInputGroupAddon>{{ TIMEZONE_LABEL }}</PvInputGroupAddon>
                          </PvInputGroup>
                        </div>
                      </template>
                    </FormField>
                  </template>

                  <div
                    v-if="showsFreezePeriod"
                    class="flex flex-col gap-md"
                  >
                    <span class="inline-flex items-center gap-xs text-body-md-semi-bold text-neutral-base">
                      Freeze Period
                      <button
                        type="button"
                        class="rounded-full text-neutral-subtle hover:text-neutral-base"
                        aria-label="More information about freeze periods"
                        v-tooltip.top="'Date ranges when system updates will not be installed.'"
                      >
                        <InformationCircleIcon class="size-4" />
                      </button>
                    </span>

                    <div
                      v-for="row in freezePeriods"
                      :key="row.id"
                      class="flex items-start gap-md"
                    >
                      <FormField
                        label="Date"
                        label-tooltip="Select the start and end dates for this freeze period."
                        class="flex-1 min-w-0"
                      >
                        <template #default="{ inputId }">
                          <DatePicker
                            :id="inputId"
                            v-model="row.dateRange"
                            selectionMode="range"
                            dateFormat="mm/dd/yy"
                            showIcon
                            iconDisplay="input"
                            fluid
                          />
                        </template>
                      </FormField>

                      <div class="pt-7 shrink-0">
                        <PvButton
                          severity="secondary"
                          variant="text"
                          size="small"
                          aria-label="Delete freeze period"
                          @click="removeFreezePeriod(row.id)"
                        >
                          <template #icon>
                            <TrashIcon class="size-4" />
                          </template>
                        </PvButton>
                      </div>
                    </div>

                    <div>
                      <PvButton
                        label="Add Freeze Period"
                        severity="secondary"
                        variant="outlined"
                        size="small"
                        @click="addFreezePeriod"
                      >
                        <template #icon>
                          <PlusIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <h3 class="text-heading-3 text-neutral-base">Android</h3>

                <div class="flex flex-col gap-xs w-full">
                  <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                  <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                </div>

                <div class="flex flex-col gap-sm w-full">
                  <span class="inline-flex items-center gap-xs text-body-md-semi-bold text-neutral-base">
                    Supported Enrollment Types
                    <button
                      type="button"
                      class="rounded-full text-neutral-subtle hover:text-neutral-base"
                      aria-label="More information about supported enrollment types"
                      v-tooltip.top="'Enrollment types that support the System Update policy.'"
                    >
                      <InformationCircleIcon class="size-4" />
                    </button>
                  </span>
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


export { SystemUpdatePage };

const meta: Meta<typeof SystemUpdatePage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/System Update",
  component: SystemUpdatePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SystemUpdatePage>;

export const Default: Story = {};
