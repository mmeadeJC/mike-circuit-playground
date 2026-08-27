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
  Password,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
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
  PlusIcon,
  TrashIcon,
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

interface CaThumbprintRow {
  id: number;
  value: string;
}

interface WiFiSettings {
  policyName: string;
  policyNotes: string;
  ssid: string;
  autoJoin: boolean;
  hiddenNetwork: boolean;
  securityType: string;
  wifiPassword: string;
  authenticationMode: string;
  caThumbprints: CaThumbprintRow[];
  trustedServers: string;
  certificateIssuer: boolean;
  disableUserPromptForServerValidation: boolean;
  pmkCaching: boolean;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const securityTypeOptions = [
  { label: 'Open', value: 'Open' },
  { label: 'WPA2-Personal AES', value: 'WPA2-Personal AES' },
  { label: 'WPA2-Enterprise', value: 'WPA2-Enterprise' },
  { label: 'WPA3-Enterprise', value: 'WPA3-Enterprise' },
  { label: 'WPA3-Enterprise 192-Bit', value: 'WPA3-Enterprise 192-Bit' },
];

const authenticationModeOptions = [
  { label: 'EAP-TLS', value: 'EAP-TLS' },
  { label: 'EAP-TTLS', value: 'EAP-TTLS' },
  { label: 'PEAP', value: 'PEAP' },
  { label: 'EAP-SIM', value: 'EAP-SIM' },
];

const PERSONAL_SECURITY_TYPES = ['WPA2-Personal AES'];
const ENTERPRISE_SECURITY_TYPES = [
  'WPA2-Enterprise',
  'WPA3-Enterprise',
  'WPA3-Enterprise 192-Bit',
];

function cloneSettings(settings: WiFiSettings): WiFiSettings {
  return {
    ...settings,
    caThumbprints: settings.caThumbprints.map((row) => ({ ...row })),
  };
}

function settingsAreEqual(a: WiFiSettings, b: WiFiSettings): boolean {
  if (a.policyName !== b.policyName) return false;
  if (a.policyNotes !== b.policyNotes) return false;
  if (a.ssid !== b.ssid) return false;
  if (a.autoJoin !== b.autoJoin) return false;
  if (a.hiddenNetwork !== b.hiddenNetwork) return false;
  if (a.securityType !== b.securityType) return false;
  if (a.wifiPassword !== b.wifiPassword) return false;
  if (a.authenticationMode !== b.authenticationMode) return false;
  if (a.trustedServers !== b.trustedServers) return false;
  if (a.certificateIssuer !== b.certificateIssuer) return false;
  if (a.disableUserPromptForServerValidation !== b.disableUserPromptForServerValidation) return false;
  if (a.pmkCaching !== b.pmkCaching) return false;
  if (a.caThumbprints.length !== b.caThumbprints.length) return false;
  return a.caThumbprints.every((row, index) => {
    const base = b.caThumbprints[index];
    return base && row.value === base.value;
  });
}

const INITIAL_SETTINGS: WiFiSettings = {
  policyName: 'WiFi Configuration',
  policyNotes: '',
  ssid: '',
  autoJoin: false,
  hiddenNetwork: false,
  securityType: 'Open',
  wifiPassword: '',
  authenticationMode: '',
  caThumbprints: [{ id: 1, value: '' }],
  trustedServers: '',
  certificateIssuer: false,
  disableUserPromptForServerValidation: true,
  pmkCaching: false,
};

const POLICY_DESCRIPTION =
  'This policy configures a wireless network for Windows 10/11 devices.';

const POLICY_BEHAVIOR =
  'Devices must be enrolled in Windows MDM to use this policy.';

const POLICY_ACTIVATION =
  'No action is needed to activate this policy.';

const MINIMUM_SUPPORTED_VERSION =
  'Windows 10, Version 1607 [10.0.10586] and above or later';

const SUPPORTED_EDITIONS = [
  'Pro',
  'Enterprise',
  'Education',
  'Windows SE',
  'IoT Enterprise',
  'IoT Enterprise LTSC',
];

// ─── Page Component ────────────────────────────────────────────────

const WiFiConfigurationPage = defineComponent({
  name: 'WiFiConfigurationPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    LinkText,
    DetailPageLayout,
    PageSaveBar,
    Password,
    TopBar,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
    PlusIcon,
    TrashIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/wifi-configuration');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_SETTINGS.policyName);
    const policyNotes = ref(INITIAL_SETTINGS.policyNotes);
    const ssid = ref(INITIAL_SETTINGS.ssid);
    const autoJoin = ref(INITIAL_SETTINGS.autoJoin);
    const hiddenNetwork = ref(INITIAL_SETTINGS.hiddenNetwork);
    const securityType = ref(INITIAL_SETTINGS.securityType);
    const wifiPassword = ref(INITIAL_SETTINGS.wifiPassword);
    const authenticationMode = ref(INITIAL_SETTINGS.authenticationMode);
    const caThumbprints = ref<CaThumbprintRow[]>(
      INITIAL_SETTINGS.caThumbprints.map((row) => ({ ...row })),
    );
    const trustedServers = ref(INITIAL_SETTINGS.trustedServers);
    const certificateIssuer = ref(INITIAL_SETTINGS.certificateIssuer);
    const disableUserPromptForServerValidation = ref(
      INITIAL_SETTINGS.disableUserPromptForServerValidation,
    );
    const pmkCaching = ref(INITIAL_SETTINGS.pmkCaching);

    const baseline = ref(cloneSettings(INITIAL_SETTINGS));
    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);
    let nextThumbprintId = 2;

    const currentSettings = computed<WiFiSettings>(() => ({
      policyName: policyName.value,
      policyNotes: policyNotes.value,
      ssid: ssid.value,
      autoJoin: autoJoin.value,
      hiddenNetwork: hiddenNetwork.value,
      securityType: securityType.value,
      wifiPassword: wifiPassword.value,
      authenticationMode: authenticationMode.value,
      caThumbprints: caThumbprints.value.map((row) => ({ ...row })),
      trustedServers: trustedServers.value,
      certificateIssuer: certificateIssuer.value,
      disableUserPromptForServerValidation: disableUserPromptForServerValidation.value,
      pmkCaching: pmkCaching.value,
    }));

    const isDirty = computed(
      () => !settingsAreEqual(currentSettings.value, baseline.value),
    );

    const isPersonalSecurity = computed(
      () => PERSONAL_SECURITY_TYPES.includes(securityType.value),
    );

    const isEnterpriseSecurity = computed(
      () => ENTERPRISE_SECURITY_TYPES.includes(securityType.value),
    );

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function applySettings(settings: WiFiSettings) {
      policyName.value = settings.policyName;
      policyNotes.value = settings.policyNotes;
      ssid.value = settings.ssid;
      autoJoin.value = settings.autoJoin;
      hiddenNetwork.value = settings.hiddenNetwork;
      securityType.value = settings.securityType;
      wifiPassword.value = settings.wifiPassword;
      authenticationMode.value = settings.authenticationMode;
      caThumbprints.value = settings.caThumbprints.map((row) => ({ ...row }));
      trustedServers.value = settings.trustedServers;
      certificateIssuer.value = settings.certificateIssuer;
      disableUserPromptForServerValidation.value = settings.disableUserPromptForServerValidation;
      pmkCaching.value = settings.pmkCaching;
    }

    function addCaThumbprint() {
      caThumbprints.value.push({ id: nextThumbprintId++, value: '' });
    }

    function removeCaThumbprint(id: number) {
      if (caThumbprints.value.length <= 1) {
        caThumbprints.value = [{ id: nextThumbprintId++, value: '' }];
        return;
      }
      caThumbprints.value = caThumbprints.value.filter((row) => row.id !== id);
    }

    function handleDiscard() {
      applySettings(baseline.value);
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = cloneSettings(currentSettings.value);
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
      ssid,
      autoJoin,
      hiddenNetwork,
      securityType,
      wifiPassword,
      authenticationMode,
      caThumbprints,
      trustedServers,
      certificateIssuer,
      disableUserPromptForServerValidation,
      pmkCaching,
      securityTypeOptions,
      authenticationModeOptions,
      isPersonalSecurity,
      isEnterpriseSecurity,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      MINIMUM_SUPPORTED_VERSION,
      SUPPORTED_EDITIONS,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addCaThumbprint,
      removeCaThumbprint,
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
          title="WiFi Configuration"
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

              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <FormField
                    label="SSID"
                    label-tooltip="The name of the wireless network (SSID) that devices will connect to."
                  >
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="ssid"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <CheckboxWithLabel
                    v-model="autoJoin"
                    inputId="wifi-auto-join"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Auto-Join</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'When enabled, devices automatically connect to this network when in range.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="hiddenNetwork"
                    inputId="wifi-hidden-network"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Hidden Network</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'When enabled, the network SSID is not broadcast and must be configured manually.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <FormField
                    label="Security Type"
                    label-tooltip="The security protocol used by the wireless network."
                  >
                    <template #default="{ inputId }">
                      <PvSelect
                        :id="inputId"
                        v-model="securityType"
                        :options="securityTypeOptions"
                        optionLabel="label"
                        optionValue="value"
                        class="w-full!"
                      />
                    </template>
                  </FormField>

                  <FormField
                    v-if="isPersonalSecurity"
                    label="Password"
                  >
                    <template #default="{ inputId }">
                      <Password
                        :inputId="inputId"
                        v-model="wifiPassword"
                        toggleMask
                        class="w-full"
                      />
                    </template>
                    <template #description>
                      <span class="text-body-sm text-neutral-subtle">
                        Provide the WiFi password. WPA2 must be 8-63 ASCII characters.
                      </span>
                    </template>
                  </FormField>

                  <template v-if="isEnterpriseSecurity">
                    <FormField
                      label="Authentication Mode"
                      label-tooltip="The EAP authentication method used for enterprise Wi-Fi."
                    >
                      <template #default="{ inputId }">
                        <PvSelect
                          :id="inputId"
                          v-model="authenticationMode"
                          :options="authenticationModeOptions"
                          optionLabel="label"
                          optionValue="value"
                          placeholder="Select authentication mode"
                          class="w-full!"
                        />
                      </template>
                    </FormField>

                    <div
                      v-for="row in caThumbprints"
                      :key="row.id"
                      class="flex items-start gap-md"
                    >
                      <FormField
                        label="CA Thumbprints"
                        label-tooltip="SHA-1 thumbprint of the trusted root CA certificate."
                        class="flex-1 min-w-0"
                      >
                        <template #default="{ inputId }">
                          <PvInputText
                            :id="inputId"
                            v-model="row.value"
                            class="w-full"
                          />
                        </template>
                      </FormField>

                      <div class="pt-7 shrink-0">
                        <PvButton
                          severity="secondary"
                          variant="text"
                          size="small"
                          aria-label="Delete CA thumbprint"
                          @click="removeCaThumbprint(row.id)"
                        >
                          <template #icon>
                            <TrashIcon class="size-4" />
                          </template>
                        </PvButton>
                      </div>
                    </div>

                    <div>
                      <PvButton
                        label="Add CA Thumbprint"
                        severity="secondary"
                        variant="outlined"
                        size="small"
                        @click="addCaThumbprint"
                      >
                        <template #icon>
                          <PlusIcon class="size-4" />
                        </template>
                      </PvButton>
                    </div>

                    <FormField
                      label="Trusted Servers"
                      label-tooltip="Comma-separated list of trusted RADIUS server names."
                    >
                      <template #default="{ inputId }">
                        <PvInputText
                          :id="inputId"
                          v-model="trustedServers"
                          class="w-full"
                        />
                      </template>
                    </FormField>

                    <CheckboxWithLabel
                      v-model="certificateIssuer"
                      inputId="wifi-certificate-issuer"
                      :binary="true"
                    >
                      <template #label>
                        <span class="inline-flex items-center gap-1">
                          <span>Certificate Issuer</span>
                          <button
                            type="button"
                            class="rounded-full text-neutral-subtle hover:text-neutral-base"
                            aria-label="More information"
                            v-tooltip.top="'Use the certificate issuer for server validation.'"
                          >
                            <InformationCircleIcon class="size-4" />
                          </button>
                        </span>
                      </template>
                    </CheckboxWithLabel>

                    <CheckboxWithLabel
                      v-model="disableUserPromptForServerValidation"
                      inputId="wifi-disable-user-prompt"
                      :binary="true"
                    >
                      <template #label>
                        <span class="inline-flex items-center gap-1">
                          <span>Disable User Prompt For Server Validation</span>
                          <button
                            type="button"
                            class="rounded-full text-neutral-subtle hover:text-neutral-base"
                            aria-label="More information"
                            v-tooltip.top="'Prevents the user from being prompted to validate the server certificate.'"
                          >
                            <InformationCircleIcon class="size-4" />
                          </button>
                        </span>
                      </template>
                    </CheckboxWithLabel>

                    <CheckboxWithLabel
                      v-model="pmkCaching"
                      inputId="wifi-pmk-caching"
                      :binary="true"
                    >
                      <template #label>
                        <span class="inline-flex items-center gap-1">
                          <span>PMK Caching</span>
                          <button
                            type="button"
                            class="rounded-full text-neutral-subtle hover:text-neutral-base"
                            aria-label="More information"
                            v-tooltip.top="'Enables Pairwise Master Key caching for faster reconnections.'"
                          >
                            <InformationCircleIcon class="size-4" />
                          </button>
                        </span>
                      </template>
                    </CheckboxWithLabel>
                  </template>
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
                      <span class="text-body-sm">JumpCloud MDM enrollment</span>
                      <LinkText
                        label="Learn more"
                        href="#"
                        target="_blank"
                        customClass="inline-flex items-center shrink-0 py-xs pl-xs"
                      />
                    </div>
                  </div>
                </div>

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


export { WiFiConfigurationPage };

const meta: Meta<typeof WiFiConfigurationPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/WiFi Configuration",
  component: WiFiConfigurationPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof WiFiConfigurationPage>;

export const Default: Story = {};
