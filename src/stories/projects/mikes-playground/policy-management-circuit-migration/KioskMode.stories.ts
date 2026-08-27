import type { Meta, StoryObj } from '@storybook/vue3';
import { linkTo } from '@storybook/addon-links';
import { usePolicyMigrationBackNavigation } from './demo/storybookPolicyMigrationNav';
import { ref, markRaw, defineComponent, computed, watch } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  FormField,
  RadioButtonWithLabel,
  LinkText,
  DetailPageLayout,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import MultiSelect from 'primevue/multiselect';
import SelectButton from 'primevue/selectbutton';
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
  PlusIcon,
  RectangleStackIcon,
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

type KioskModeType = 'single-app' | 'launcher';
type PowerButtonSetting = 'enabled' | 'disabled';
type HomeButtonSetting = 'enabled' | 'disabled';
type StatusBarSetting = 'enabled' | 'disabled' | 'system-info-only';
type SystemErrorsSetting = 'visible' | 'hidden';
type SystemNavigationSetting = 'enabled' | 'disabled' | 'home-button-only';

interface KioskSettingsState {
  kioskMode: KioskModeType;
  primaryApplication: string;
  allowOtherApplications: string[];
  powerButton: PowerButtonSetting;
  homeButton: HomeButtonSetting;
  statusBar: StatusBarSetting;
  systemErrors: SystemErrorsSetting;
  systemNavigation: SystemNavigationSetting;
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

const appOptions = [
  { label: 'Gmail', value: 'gmail' },
  { label: 'Maps', value: 'maps' },
  { label: 'Chrome', value: 'chrome' },
  { label: 'Drive', value: 'drive' },
];

const kioskModeOptions = [
  { label: 'Single App Mode', value: 'single-app' },
  { label: 'Launcher Mode', value: 'launcher' },
];

const INITIAL_POLICY_NAME = 'Kiosk Mode';
const INITIAL_POLICY_NOTES = '';

const INITIAL_SETTINGS: KioskSettingsState = {
  kioskMode: 'single-app',
  primaryApplication: 'gmail',
  allowOtherApplications: ['maps'],
  powerButton: 'enabled',
  homeButton: 'enabled',
  statusBar: 'disabled',
  systemErrors: 'visible',
  systemNavigation: 'disabled',
};

const POLICY_DESCRIPTION_LEAD =
  'Configure settings that determine how the Android device is handled when locked. Choose from a variety of settings to control the device behavior and experience, including which apps are allowed to run, how they run, and what settings users have access to. This policy can be used to configure a device to run a single app or a limited set of apps, such as in a retail kiosk, a point of sale (POS) terminal, or a shared corporate device. ';

const POLICY_STATUS =
  'Edit status can be applied later to use this policy.';

const POLICY_VERSION =
  'Version 1 will be created when you create this policy.';

const ANDROID_VERSION = 'Supported on Version 9 and above';

const ENROLLMENT_TYPES: EnrollmentType[] = [
  { label: 'User Enrollment (Personal Device)', supported: true },
  { label: 'Work Profile (Company owned)', supported: false },
  { label: 'Device Owner (Fully Managed)', supported: false },
  { label: 'Dedicated Device', supported: false },
];

function arraysEqual(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  return a.every((value, index) => value === b[index]);
}

// ─── Page Component ────────────────────────────────────────────────

const KioskModePage = defineComponent({
  name: 'KioskModePage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    RadioButtonWithLabel,
    LinkText,
    DetailPageLayout,
    PageSaveBar,
    TopBar,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvMultiSelect: MultiSelect,
    PvSelectButton: SelectButton,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    RectangleStackIcon,
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    XCircleIcon,
    PlusIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/kiosk-mode');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const kioskMode = ref<KioskModeType>(INITIAL_SETTINGS.kioskMode);
    const primaryApplication = ref(INITIAL_SETTINGS.primaryApplication);
    const allowOtherApplications = ref<string[]>([...INITIAL_SETTINGS.allowOtherApplications]);
    const powerButton = ref<PowerButtonSetting>(INITIAL_SETTINGS.powerButton);
    const homeButton = ref<HomeButtonSetting>(INITIAL_SETTINGS.homeButton);
    const statusBar = ref<StatusBarSetting>(INITIAL_SETTINGS.statusBar);
    const systemErrors = ref<SystemErrorsSetting>(INITIAL_SETTINGS.systemErrors);
    const systemNavigation = ref<SystemNavigationSetting>(INITIAL_SETTINGS.systemNavigation);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      settings: {
        ...INITIAL_SETTINGS,
        allowOtherApplications: [...INITIAL_SETTINGS.allowOtherApplications],
      },
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      const current: KioskSettingsState = {
        kioskMode: kioskMode.value,
        primaryApplication: primaryApplication.value,
        allowOtherApplications: allowOtherApplications.value,
        powerButton: powerButton.value,
        homeButton: homeButton.value,
        statusBar: statusBar.value,
        systemErrors: systemErrors.value,
        systemNavigation: systemNavigation.value,
      };
      const base = baseline.value.settings;
      if (current.kioskMode !== base.kioskMode) return true;
      if (current.primaryApplication !== base.primaryApplication) return true;
      if (!arraysEqual(current.allowOtherApplications, base.allowOtherApplications)) return true;
      if (current.powerButton !== base.powerButton) return true;
      if (current.homeButton !== base.homeButton) return true;
      if (current.statusBar !== base.statusBar) return true;
      if (current.systemErrors !== base.systemErrors) return true;
      if (current.systemNavigation !== base.systemNavigation) return true;
      return false;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function addAnotherApp() {
      const nextApp = appOptions.find(
        (option) => option.value !== primaryApplication.value
          && !allowOtherApplications.value.includes(option.value),
      );
      if (nextApp) {
        allowOtherApplications.value = [...allowOtherApplications.value, nextApp.value];
      }
    }

    function restoreSettings(settings: KioskSettingsState) {
      kioskMode.value = settings.kioskMode;
      primaryApplication.value = settings.primaryApplication;
      allowOtherApplications.value = [...settings.allowOtherApplications];
      powerButton.value = settings.powerButton;
      homeButton.value = settings.homeButton;
      statusBar.value = settings.statusBar;
      systemErrors.value = settings.systemErrors;
      systemNavigation.value = settings.systemNavigation;
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
        settings: {
          kioskMode: kioskMode.value,
          primaryApplication: primaryApplication.value,
          allowOtherApplications: [...allowOtherApplications.value],
          powerButton: powerButton.value,
          homeButton: homeButton.value,
          statusBar: statusBar.value,
          systemErrors: systemErrors.value,
          systemNavigation: systemNavigation.value,
        },
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
      kioskMode,
      kioskModeOptions,
      primaryApplication,
      allowOtherApplications,
      appOptions,
      powerButton,
      homeButton,
      statusBar,
      systemErrors,
      systemNavigation,
      POLICY_DESCRIPTION_LEAD,
      POLICY_STATUS,
      POLICY_VERSION,
      ANDROID_VERSION,
      ENROLLMENT_TYPES,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addAnotherApp,
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
          title="Kiosk Mode"
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
                    <h4 class="text-body-md-bold text-neutral-base">Policy Status</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_STATUS }}</p>
                  </div>

                  <div class="flex flex-col gap-xs">
                    <h4 class="text-body-md-bold text-neutral-base">Policy Version</h4>
                    <p class="text-body-md text-neutral-subtle m-0">{{ POLICY_VERSION }}</p>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Kiosk Applications">
                <template #titleicon="iconProps">
                  <RectangleStackIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <PvSelectButton
                    v-model="kioskMode"
                    :options="kioskModeOptions"
                    optionLabel="label"
                    optionValue="value"
                    :allowEmpty="false"
                  />

                  <FormField label="Primary Application">
                    <template #default="{ inputId }">
                      <PvSelect
                        :id="inputId"
                        v-model="primaryApplication"
                        :options="appOptions"
                        optionLabel="label"
                        optionValue="value"
                        class="w-full!"
                      />
                    </template>
                  </FormField>

                  <FormField label="Allow other applications">
                    <template #default="{ inputId }">
                      <PvMultiSelect
                        :id="inputId"
                        v-model="allowOtherApplications"
                        :options="appOptions"
                        optionLabel="label"
                        optionValue="value"
                        display="chip"
                        class="w-full"
                        placeholder="Select applications..."
                      />
                    </template>
                  </FormField>

                  <div>
                    <PvButton
                      label="Add Another App"
                      severity="secondary"
                      variant="outlined"
                      size="small"
                      @click="addAnotherApp"
                    >
                      <template #icon>
                        <PlusIcon class="size-4" />
                      </template>
                    </PvButton>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Device Restrictions">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField label="Power Button">
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="powerButton"
                          value="enabled"
                          name="power-button"
                          inputId="power-button-enabled"
                        >
                          <template #label>Enabled</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="powerButton"
                          value="disabled"
                          name="power-button"
                          inputId="power-button-disabled"
                        >
                          <template #label>Disabled</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <FormField label="Home Button">
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="homeButton"
                          value="enabled"
                          name="home-button"
                          inputId="home-button-enabled"
                        >
                          <template #label>Enabled</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="homeButton"
                          value="disabled"
                          name="home-button"
                          inputId="home-button-disabled"
                        >
                          <template #label>Disabled</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <FormField label="Status Bar">
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="statusBar"
                          value="enabled"
                          name="status-bar"
                          inputId="status-bar-enabled"
                        >
                          <template #label>Enabled</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="statusBar"
                          value="disabled"
                          name="status-bar"
                          inputId="status-bar-disabled"
                        >
                          <template #label>Disabled</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="statusBar"
                          value="system-info-only"
                          name="status-bar"
                          inputId="status-bar-system-info-only"
                        >
                          <template #label>System Info Only</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <FormField label="System Errors">
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="systemErrors"
                          value="visible"
                          name="system-errors"
                          inputId="system-errors-visible"
                        >
                          <template #label>Visible</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="systemErrors"
                          value="hidden"
                          name="system-errors"
                          inputId="system-errors-hidden"
                        >
                          <template #label>Hidden</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <FormField label="System Navigation">
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="systemNavigation"
                          value="enabled"
                          name="system-navigation"
                          inputId="system-navigation-enabled"
                        >
                          <template #label>Enabled</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="systemNavigation"
                          value="disabled"
                          name="system-navigation"
                          inputId="system-navigation-disabled"
                        >
                          <template #label>Disabled</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="systemNavigation"
                          value="home-button-only"
                          name="system-navigation"
                          inputId="system-navigation-home-button-only"
                        >
                          <template #label>Home button only</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <div class="flex flex-col gap-xs">
                  <h3 class="text-heading-3 text-neutral-base">Android</h3>
                  <p class="text-body-md text-neutral-base m-0">{{ ANDROID_VERSION }}</p>
                </div>

                <div class="flex flex-col gap-sm">
                  <h4 class="text-body-md-semi-bold text-neutral-base">Android Enterprise</h4>
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


export { KioskModePage };

const meta: Meta<typeof KioskModePage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Kiosk Mode",
  component: KioskModePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof KioskModePage>;

export const Default: Story = {};
