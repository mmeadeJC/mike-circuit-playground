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
  RadioButtonWithLabel,
  DetailPageLayout,
  PageSaveBar,
  Paginator,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';
import Dialog from 'primevue/dialog';
import RadioButton from 'primevue/radiobutton';
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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ComputerDesktopIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronRightIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
  MagnifyingGlassIcon,
  InformationCircleIcon,
  ArrowRightIcon,
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

type AppType = 'company-added' | 'system';

interface CompanyApp {
  id: string;
  name: string;
}

interface EnrollmentType {
  label: string;
  supported: boolean;
}

interface OptionalSettingsState {
  voiceControl: boolean;
  zoom: boolean;
  voiceOver: boolean;
  speakSelection: boolean;
  monoAudio: boolean;
  invertColors: boolean;
  assistiveTouch: boolean;
  autoLock: boolean;
  deviceRotation: boolean;
  ringerSwitch: boolean;
  sleepWakeButton: boolean;
  touchScreen: boolean;
  volumeButtons: boolean;
}

interface SettingsState {
  appType: AppType;
  selectedAppId: string | null;
  optionalSettings: OptionalSettingsState;
}

const COMPANY_APPS: CompanyApp[] = [
  { id: 'adp-mobile', name: 'ADP Mobile Solutions' },
  { id: 'angry-birds-2', name: 'Angry Birds 2' },
  { id: 'clips', name: 'Clips' },
  { id: 'evernote', name: 'Evernote - Notes Organizer' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'gmail', name: 'Gmail - Email by Google' },
  { id: 'google-chrome', name: 'Google Chrome' },
  { id: 'google-docs', name: 'Google Docs' },
  { id: 'google-drive', name: 'Google Drive' },
  { id: 'google-meet', name: 'Google Meet (original)' },
  { id: 'google-sheets', name: 'Google Sheets' },
  { id: 'google-slides', name: 'Google Slides' },
  { id: 'instagram', name: 'Instagram' },
  { id: 'linkedin', name: 'LinkedIn' },
  { id: 'microsoft-outlook', name: 'Microsoft Outlook' },
  { id: 'slack', name: 'Slack' },
  { id: 'zoom', name: 'Zoom' },
];

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL_POLICY_NAME = 'Single App Mode';
const INITIAL_POLICY_NOTES = '';

const INITIAL_OPTIONAL_SETTINGS: OptionalSettingsState = {
  voiceControl: false,
  zoom: false,
  voiceOver: false,
  speakSelection: false,
  monoAudio: false,
  invertColors: false,
  assistiveTouch: false,
  autoLock: false,
  deviceRotation: false,
  ringerSwitch: false,
  sleepWakeButton: false,
  touchScreen: false,
  volumeButtons: false,
};

const INITIAL_SETTINGS: SettingsState = {
  appType: 'company-added',
  selectedAppId: null,
  optionalSettings: { ...INITIAL_OPTIONAL_SETTINGS },
};

const POLICY_DESCRIPTION =
  'This policy allows the IT Admin to provide a device that runs only a single app of choice, preventing the use of other apps.';

const POLICY_BEHAVIOR =
  'Single App Mode deactivates the home button and forces the device to boot directly into the designated app if the user attempts a manual restart.';

const POLICY_ACTIVATION = 'No activation is required for this policy.';

const IOS_MINIMUM_VERSION = 'iOS 6.0 or later';
const IPADOS_MINIMUM_VERSION = 'iPadOS 6.0 or later';

const ENROLLMENT_TYPES: EnrollmentType[] = [
  { label: 'User-Enrolled Devices', supported: false },
  { label: 'Device-Enrolled Devices', supported: true },
  { label: 'Auto-Enrolled Devices', supported: true },
];

function cloneOptionalSettings(settings: OptionalSettingsState): OptionalSettingsState {
  return { ...settings };
}

function cloneSettings(settings: SettingsState): SettingsState {
  return {
    appType: settings.appType,
    selectedAppId: settings.selectedAppId,
    optionalSettings: cloneOptionalSettings(settings.optionalSettings),
  };
}

function optionalSettingsEqual(a: OptionalSettingsState, b: OptionalSettingsState) {
  return (Object.keys(a) as (keyof OptionalSettingsState)[]).every((key) => a[key] === b[key]);
}

// ─── Page Component ────────────────────────────────────────────────

const SingleAppModePage = defineComponent({
  name: 'SingleAppModePage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    RadioButtonWithLabel,
    DetailPageLayout,
    PageSaveBar,
    Paginator,
    TopBar,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvDivider: Divider,
    PvDialog: Dialog,
    PvRadioButton: RadioButton,
    PvIconField: IconField,
    PvInputIcon: InputIcon,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    AdjustmentsHorizontalIcon,
    ChevronRightIcon,
    CheckCircleIcon,
    XCircleIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
    InformationCircleIcon,
    ArrowRightIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/single-app-mode');

    const activeTab = ref('details');
    const settingsCollapsed = ref(false);
    const optionalSettingsCollapsed = ref(false);
    const showAppSelectModal = ref(false);

    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const appType = ref<AppType>(INITIAL_SETTINGS.appType);
    const selectedAppId = ref<string | null>(INITIAL_SETTINGS.selectedAppId);
    const optionalSettings = ref<OptionalSettingsState>(cloneOptionalSettings(INITIAL_OPTIONAL_SETTINGS));

    const appSearchQuery = ref('');
    const modalSelectedAppId = ref<string | null>(null);
    const appPaginatorFirst = ref(0);
    const appPaginatorRows = ref(10);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      settings: cloneSettings(INITIAL_SETTINGS),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;

      const base = baseline.value.settings;
      if (appType.value !== base.appType) return true;
      if (selectedAppId.value !== base.selectedAppId) return true;
      if (!optionalSettingsEqual(optionalSettings.value, base.optionalSettings)) return true;
      return false;
    });

    const filteredApps = computed(() => {
      const query = appSearchQuery.value.trim().toLowerCase();
      if (!query) return COMPANY_APPS;
      return COMPANY_APPS.filter((app) => app.name.toLowerCase().includes(query));
    });

    const paginatedApps = computed(() => {
      const start = appPaginatorFirst.value;
      return filteredApps.value.slice(start, start + appPaginatorRows.value);
    });

    const selectedAppName = computed(() => {
      if (!selectedAppId.value) return null;
      return COMPANY_APPS.find((app) => app.id === selectedAppId.value)?.name ?? null;
    });

    const canConfirmAppSelection = computed(() => modalSelectedAppId.value !== null);

    watch(filteredApps, (apps) => {
      if (appPaginatorFirst.value >= apps.length && apps.length > 0) {
        appPaginatorFirst.value = 0;
      }
    });

    watch(appSearchQuery, () => {
      appPaginatorFirst.value = 0;
    });

    watch(appPaginatorRows, () => {
      appPaginatorFirst.value = 0;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function restoreSettings(settings: SettingsState) {
      appType.value = settings.appType;
      selectedAppId.value = settings.selectedAppId;
      optionalSettings.value = cloneOptionalSettings(settings.optionalSettings);
    }

    function openAppSelectModal() {
      modalSelectedAppId.value = selectedAppId.value;
      appSearchQuery.value = '';
      appPaginatorFirst.value = 0;
      showAppSelectModal.value = true;
    }

    function closeAppSelectModal() {
      showAppSelectModal.value = false;
    }

    function confirmAppSelection() {
      if (!modalSelectedAppId.value) return;
      selectedAppId.value = modalSelectedAppId.value;
      closeAppSelectModal();
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
          appType: appType.value,
          selectedAppId: selectedAppId.value,
          optionalSettings: optionalSettings.value,
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
      settingsCollapsed,
      optionalSettingsCollapsed,
      policyName,
      policyNotes,
      appType,
      selectedAppId,
      selectedAppName,
      optionalSettings,
      showAppSelectModal,
      appSearchQuery,
      modalSelectedAppId,
      appPaginatorFirst,
      appPaginatorRows,
      filteredApps,
      paginatedApps,
      canConfirmAppSelection,
      openAppSelectModal,
      closeAppSelectModal,
      confirmAppSelection,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      IOS_MINIMUM_VERSION,
      IPADOS_MINIMUM_VERSION,
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
          title="Single App Mode"
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
                v-model:collapsed="settingsCollapsed"
                toggleable
                header="Settings"
              >
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField
                    label="Select the app type"
                    label-tooltip="Choose whether to lock the device to a company-added app or a built-in system app."
                  >
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="appType"
                          value="company-added"
                          name="app-type"
                          inputId="app-type-company-added"
                        >
                          <template #label>Company-added App</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="appType"
                          value="system"
                          name="app-type"
                          inputId="app-type-system"
                        >
                          <template #label>System App</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <div class="flex flex-col items-start gap-sm">
                    <PvButton
                      label="Select App"
                      severity="secondary"
                      variant="outlined"
                      size="small"
                      @click="openAppSelectModal"
                    />
                    <span
                      v-if="selectedAppName"
                      class="text-body-md text-neutral-base"
                    >
                      {{ selectedAppName }}
                    </span>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="optionalSettingsCollapsed"
                toggleable
                header="Optional Settings"
              >
                <template #titleicon="iconProps">
                  <AdjustmentsHorizontalIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <CheckboxWithLabel
                    v-model="optionalSettings.voiceControl"
                    inputId="optional-voice-control"
                    :binary="true"
                  >
                    <template #label>Enable Voice Control</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.zoom"
                    inputId="optional-zoom"
                    :binary="true"
                  >
                    <template #label>Enable Zoom</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.voiceOver"
                    inputId="optional-voice-over"
                    :binary="true"
                  >
                    <template #label>Enable Voice Over</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.speakSelection"
                    inputId="optional-speak-selection"
                    :binary="true"
                  >
                    <template #label>Enable Speak Selection</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.monoAudio"
                    inputId="optional-mono-audio"
                    :binary="true"
                  >
                    <template #label>Enable Mono Audio</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.invertColors"
                    inputId="optional-invert-colors"
                    :binary="true"
                  >
                    <template #label>Enable Invert Colors</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.assistiveTouch"
                    inputId="optional-assistive-touch"
                    :binary="true"
                  >
                    <template #label>Enable Assistive Touch</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.autoLock"
                    inputId="optional-auto-lock"
                    :binary="true"
                  >
                    <template #label>Enable Auto-lock</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.deviceRotation"
                    inputId="optional-device-rotation"
                    :binary="true"
                  >
                    <template #label>Enable Device Rotation</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.ringerSwitch"
                    inputId="optional-ringer-switch"
                    :binary="true"
                  >
                    <template #label>Enable Ringer Switch</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.sleepWakeButton"
                    inputId="optional-sleep-wake"
                    :binary="true"
                  >
                    <template #label>Enable Sleep/Wake Button</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.touchScreen"
                    inputId="optional-touch-screen"
                    :binary="true"
                  >
                    <template #label>Enable Touch Screen</template>
                  </CheckboxWithLabel>
                  <CheckboxWithLabel
                    v-model="optionalSettings.volumeButtons"
                    inputId="optional-volume-buttons"
                    :binary="true"
                  >
                    <template #label>Enable Volume Buttons</template>
                  </CheckboxWithLabel>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex w-full min-w-0 max-w-full flex-col gap-md overflow-hidden">
                <div class="box-border flex w-full max-w-full min-w-0 items-start gap-2 overflow-hidden rounded-sm bg-notification-info p-2 shadow-message-info">
                  <InformationCircleIcon class="mt-0.5 size-5 shrink-0 text-notification-info-content" />
                  <div class="flex min-w-0 flex-1 flex-wrap items-center justify-between gap-x-sm gap-y-1">
                    <span class="text-body-md-bold text-neutral-base shrink-0">Requires Supervision</span>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex min-w-0 max-w-full shrink items-center gap-0.5 text-body-md-link text-link-base no-underline transition-colors hover:text-link-hover hover:underline hover:underline-offset-2 active:text-link-active active:underline"
                    >
                      <span class="min-w-0 break-words">Understanding Supervised Devices</span>
                      <ArrowRightIcon class="size-5 shrink-0 text-current" />
                    </a>
                  </div>
                </div>

                <div class="flex flex-col gap-xs w-full">
                  <span class="text-body-md-semi-bold text-neutral-base">Other Requirements</span>
                  <p class="text-body-md text-neutral-base m-0">JumpCloud MDM and Enroll User Host</p>
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

        <PvDialog
          v-model:visible="showAppSelectModal"
          modal
          :draggable="false"
          header="Search and Select Application"
          :style="{ width: '720px' }"
        >
          <template #closeicon><XMarkIcon /></template>

          <div class="flex flex-col gap-md">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText
                v-model="appSearchQuery"
                placeholder="Search"
                class="w-full"
              />
            </PvIconField>

            <div class="overflow-hidden rounded-sm border border-neutral-default_solid">
              <div class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid bg-neutral-surface">
                <div class="size-4 shrink-0" aria-hidden="true"></div>
                <span class="text-body-md-semi-bold text-neutral-base">App Name</span>
              </div>

              <div
                v-if="paginatedApps.length === 0"
                class="px-md py-lg text-body-md text-neutral-subtle"
              >
                No applications match your search.
              </div>

              <div
                v-for="app in paginatedApps"
                :key="app.id"
                class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid last:border-b-0 cursor-pointer hover:bg-neutral-surface"
                @click="modalSelectedAppId = app.id"
              >
                <PvRadioButton
                  v-model="modalSelectedAppId"
                  :inputId="'app-select-' + app.id"
                  name="app-select"
                  :value="app.id"
                  class="shrink-0"
                />
                <label
                  :for="'app-select-' + app.id"
                  class="flex-1 cursor-pointer text-body-md leading-5 text-neutral-base m-0"
                >
                  {{ app.name }}
                </label>
              </div>
            </div>

            <Paginator
              v-model:first="appPaginatorFirst"
              v-model:rows="appPaginatorRows"
              :totalRecords="filteredApps.length"
              pageReportTemplate="{first} - {last} of {totalRecords}"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '25 Items per page', value: 25 },
                { label: '50 Items per page', value: 50 },
              ]"
            />
          </div>

          <template #footer>
            <div class="flex items-center flex-1 min-w-0"></div>
            <div class="flex gap-sm shrink-0">
              <PvButton
                label="Cancel"
                severity="secondary"
                variant="text"
                @click="closeAppSelectModal"
              />
              <PvButton
                label="Select App"
                :disabled="!canConfirmAppSelection"
                @click="confirmAppSelection"
              />
            </div>
          </template>
        </PvDialog>
      </div>
    </div>
  `,
});


export { SingleAppModePage };

const meta: Meta<typeof SingleAppModePage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Single App Mode",
  component: SingleAppModePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SingleAppModePage>;

export const Default: Story = {};
