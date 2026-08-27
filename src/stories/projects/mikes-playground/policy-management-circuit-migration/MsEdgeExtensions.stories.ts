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
  LinkText,
  MessageNotification,
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

type BrowserExtensionsMode = 'allow-all' | 'allowlist' | 'blocklist';

interface SettingsState {
  blockExternalExtensions: boolean;
  extensionAllowedTypes: boolean;
  disableDeveloperModeSettings: boolean;
  browserExtensions: BrowserExtensionsMode;
  extensionForceInstall: boolean;
  extensionsInstallSources: boolean;
  blocklistForExtensionInstallType: boolean;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL_POLICY_NAME = 'MS Edge Extensions';
const INITIAL_POLICY_NOTES = '';

const INITIAL_SETTINGS: SettingsState = {
  blockExternalExtensions: false,
  extensionAllowedTypes: false,
  disableDeveloperModeSettings: false,
  browserExtensions: 'allow-all',
  extensionForceInstall: false,
  extensionsInstallSources: false,
  blocklistForExtensionInstallType: false,
};

const POLICY_DESCRIPTION_LEAD =
  'This policy allows IT admins to manage Microsoft Edge extension installation, usage, and other browser extension settings on Windows devices. ';

const POLICY_BEHAVIOR =
  'When this policy is applied, Microsoft Edge will enforce the configured settings.';

const POLICY_ACTIVATION =
  'Policy changes take effect upon successful application of the policy, and a restart of Microsoft Edge may be required for enforcement.';

const MINIMUM_SUPPORTED_VERSION = 'Windows 10, version 1809 and later; Windows 11 or later';

const SUPPORTED_EDITIONS = [
  'Pro',
  'Enterprise',
  'Education',
  'Windows SE',
  'IoT Enterprise',
  'IoT Enterprise LTSC',
];

// ─── Page Component ────────────────────────────────────────────────

const MsEdgeExtensionsPage = defineComponent({
  name: 'MsEdgeExtensionsPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    RadioButtonWithLabel,
    LinkText,
    MessageNotification,
    DetailPageLayout,
    PageSaveBar,
    TopBar,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
    ArrowTopRightOnSquareIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/ms-edge-extensions');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const blockExternalExtensions = ref(INITIAL_SETTINGS.blockExternalExtensions);
    const extensionAllowedTypes = ref(INITIAL_SETTINGS.extensionAllowedTypes);
    const disableDeveloperModeSettings = ref(INITIAL_SETTINGS.disableDeveloperModeSettings);
    const browserExtensions = ref<BrowserExtensionsMode>(INITIAL_SETTINGS.browserExtensions);
    const extensionForceInstall = ref(INITIAL_SETTINGS.extensionForceInstall);
    const extensionsInstallSources = ref(INITIAL_SETTINGS.extensionsInstallSources);
    const blocklistForExtensionInstallType = ref(INITIAL_SETTINGS.blocklistForExtensionInstallType);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      settings: { ...INITIAL_SETTINGS },
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      const current: SettingsState = {
        blockExternalExtensions: blockExternalExtensions.value,
        extensionAllowedTypes: extensionAllowedTypes.value,
        disableDeveloperModeSettings: disableDeveloperModeSettings.value,
        browserExtensions: browserExtensions.value,
        extensionForceInstall: extensionForceInstall.value,
        extensionsInstallSources: extensionsInstallSources.value,
        blocklistForExtensionInstallType: blocklistForExtensionInstallType.value,
      };
      return (Object.keys(current) as (keyof SettingsState)[]).some(
        (key) => current[key] !== baseline.value.settings[key],
      );
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
      blockExternalExtensions.value = baseline.value.settings.blockExternalExtensions;
      extensionAllowedTypes.value = baseline.value.settings.extensionAllowedTypes;
      disableDeveloperModeSettings.value = baseline.value.settings.disableDeveloperModeSettings;
      browserExtensions.value = baseline.value.settings.browserExtensions;
      extensionForceInstall.value = baseline.value.settings.extensionForceInstall;
      extensionsInstallSources.value = baseline.value.settings.extensionsInstallSources;
      blocklistForExtensionInstallType.value = baseline.value.settings.blocklistForExtensionInstallType;
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        settings: {
          blockExternalExtensions: blockExternalExtensions.value,
          extensionAllowedTypes: extensionAllowedTypes.value,
          disableDeveloperModeSettings: disableDeveloperModeSettings.value,
          browserExtensions: browserExtensions.value,
          extensionForceInstall: extensionForceInstall.value,
          extensionsInstallSources: extensionsInstallSources.value,
          blocklistForExtensionInstallType: blocklistForExtensionInstallType.value,
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
      blockExternalExtensions,
      extensionAllowedTypes,
      disableDeveloperModeSettings,
      browserExtensions,
      extensionForceInstall,
      extensionsInstallSources,
      blocklistForExtensionInstallType,
      POLICY_DESCRIPTION_LEAD,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      MINIMUM_SUPPORTED_VERSION,
      SUPPORTED_EDITIONS,
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
          title="MS Edge Extensions"
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
              <CollapsiblePanel header="Windows Device Policy">
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
                  <CheckboxWithLabel
                    v-model="blockExternalExtensions"
                    inputId="block-external-extensions"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Block External Extensions</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Block External Extensions"
                          v-tooltip.top="'Prevents users from installing extensions from outside the Microsoft Edge Add-ons store.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="extensionAllowedTypes"
                    inputId="extension-allowed-types"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Extension Allowed Types</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Extension Allowed Types"
                          v-tooltip.top="'Specifies which extension types are allowed in Microsoft Edge.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="disableDeveloperModeSettings"
                    inputId="disable-developer-mode-settings"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Disable Developer Mode Settings</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Disable Developer Mode Settings"
                          v-tooltip.top="'Prevents users from enabling developer mode in Microsoft Edge.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <FormField
                    label="Browser Extensions"
                    label-tooltip="Controls whether all extensions are allowed, or only those on an allowlist or blocklist."
                  >
                    <template #default>
                      <div class="flex flex-wrap items-center gap-lg">
                        <RadioButtonWithLabel
                          v-model="browserExtensions"
                          value="allow-all"
                          name="browser-extensions"
                          inputId="browser-extensions-allow-all"
                        >
                          <template #label>Allow All</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="browserExtensions"
                          value="allowlist"
                          name="browser-extensions"
                          inputId="browser-extensions-allowlist"
                        >
                          <template #label>Allowlist</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="browserExtensions"
                          value="blocklist"
                          name="browser-extensions"
                          inputId="browser-extensions-blocklist"
                        >
                          <template #label>Blocklist</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <CheckboxWithLabel
                    v-model="extensionForceInstall"
                    inputId="extension-force-install"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Extension Force-install</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Extension Force-install"
                          v-tooltip.top="'Silently installs specified extensions that users cannot remove or disable.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="extensionsInstallSources"
                    inputId="extensions-install-sources"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Extensions Install Sources</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Extensions Install Sources"
                          v-tooltip.top="'Specifies trusted sources from which extensions may be installed.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="blocklistForExtensionInstallType"
                    inputId="blocklist-extension-install-type"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Blocklist for Extension Install Type</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about Blocklist for Extension Install Type"
                          v-tooltip.top="'Blocks specific extension install types in Microsoft Edge.'"
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
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  detail="JumpCloud MDM enrollment"
                >
                  <template #button>
                    <LinkText label="Learn more" href="#" target="_blank" />
                  </template>
                </MessageNotification>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">Windows</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base">Supported Editions</span>
                    <ul class="flex flex-col gap-xs list-disc pl-5 m-0">
                      <li
                        v-for="edition in SUPPORTED_EDITIONS"
                        :key="edition"
                        class="text-body-md text-neutral-base"
                      >
                        {{ edition }}
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


export { MsEdgeExtensionsPage };

const meta: Meta<typeof MsEdgeExtensionsPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/MS Edge Extensions",
  component: MsEdgeExtensionsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof MsEdgeExtensionsPage>;

export const Default: Story = {};
