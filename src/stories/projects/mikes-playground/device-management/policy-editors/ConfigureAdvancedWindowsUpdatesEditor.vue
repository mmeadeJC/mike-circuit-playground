<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  CollapsiblePanel,
  ConfigPageLayout,
  FormField,
  LinkText,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import {
  ArrowPathIcon,
  BellAlertIcon,
  ChevronRightIcon,
  ClockIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline';
import PolicySettingCheckbox from './PolicySettingCheckbox.vue';

/** Details tab for the "Configure Advanced Windows Updates" patch policy. */

type ToggleSetting = {
  key: string;
  label: string;
  tooltip: string;
};

const UPDATE_SETTINGS: ToggleSetting[] = [
  {
    key: 'autoInstallMinorUpdates',
    label: 'Automatically install minor updates',
    tooltip: 'Installs minor updates silently without notifying the user.',
  },
  {
    key: 'autoInstallUpdates',
    label: 'Automatically Install Updates',
    tooltip: 'Downloads and installs available updates without user interaction.',
  },
  {
    key: 'detectionFrequency',
    label: 'Automatic Updates detection frequency',
    tooltip: 'How often the device checks Windows Update for new updates.',
  },
  {
    key: 'installDuringMaintenance',
    label: 'Automatically install updates during automatic maintenance',
    tooltip: 'Defers installation to the scheduled Windows automatic maintenance window.',
  },
  {
    key: 'includeMicrosoftProducts',
    label: 'Include updates for other Microsoft products',
    tooltip: 'Also delivers updates for Microsoft products such as Office.',
  },
  {
    key: 'excludeDrivers',
    label: 'Do not include drivers with Windows Update',
    tooltip: 'Prevents driver updates from being delivered through Windows Update.',
  },
  {
    key: 'removePauseUpdates',
    label: 'Remove access to "Pause Updates" feature.',
    tooltip: 'Hides the Pause Updates control so users cannot postpone updates.',
  },
  {
    key: 'removeAllUpdateFeatures',
    label: 'Remove access to use all Windows Update features',
    tooltip: 'Blocks user access to every Windows Update control on the device.',
  },
  {
    key: 'powerManagement',
    label: 'Enable Windows Update Power Management to automatically wake up the system to install scheduled updates',
    tooltip: 'Wakes the device from sleep to install updates at the scheduled time.',
  },
  {
    key: 'disableFeatureUpgrades',
    label: 'Disable Feature Upgrades via Windows Update',
    tooltip: 'Prevents Windows feature upgrades from installing through Windows Update.',
  },
  {
    key: 'disableSafeguards',
    label: 'Disable Safeguards for Feature Updates',
    tooltip: 'Ignores compatibility holds that would normally block a feature update.',
  },
  {
    key: 'managePreviewBuilds',
    label: 'Manage preview builds',
    tooltip: 'Controls whether the device can receive Windows Insider preview builds.',
  },
  {
    key: 'selectTarget',
    label: 'Select the target',
    tooltip: 'Targets a specific Windows feature update version for this policy.',
  },
];

const NOTIFICATION_SETTINGS: ToggleSetting[] = [
  {
    key: 'autoRestartRequiredNotification',
    label: 'Configure auto-restart required notification for updates',
    tooltip: 'Shows a notification when a restart is required to finish installing updates.',
  },
  {
    key: 'autoRestartReminderNotification',
    label: 'Configure auto-restart reminder notification for updates',
    tooltip: 'Reminds the user ahead of an automatic restart.',
  },
  {
    key: 'autoRestartWarningNotification',
    label: 'Configure auto-restart warning notification schedule for updates',
    tooltip: 'Sets how far in advance restart warnings appear.',
  },
  {
    key: 'nonAdminNotifications',
    label: 'Allow non-administrators to receive update notifications',
    tooltip: 'Lets standard users see Windows Update notifications.',
  },
  {
    key: 'displayNotificationOptions',
    label: 'Display options for update notifications',
    tooltip: 'Controls which Windows Update notifications are shown to the user.',
  },
];

const DEFERRAL_SETTINGS: ToggleSetting[] = [
  {
    key: 'deferUpdates',
    label: 'Defer Updates (Windows 10 and Server 2016 or higher)',
    tooltip: 'Delays quality updates for a set number of days after release.',
  },
  {
    key: 'deferFeatureUpgrades',
    label: 'Defer feature upgrades',
    tooltip: 'Delays Windows feature upgrades for a set number of days after release.',
  },
];

const ENFORCEMENT_SETTINGS: ToggleSetting[] = [
  {
    key: 'deadlineForRestart',
    label: 'Specify deadline for restart',
    tooltip: 'Forces a restart once the deadline passes.',
  },
  {
    key: 'noAutoRestartLoggedOn',
    label: 'No auto-restart with logged on users for scheduled automatic updates',
    tooltip: 'Waits for the signed-in user to restart rather than restarting automatically.',
  },
  {
    key: 'noRestartActiveHours',
    label: 'Turn off auto-restart for updates during active hours',
    tooltip: 'Blocks automatic restarts while the device is in active use.',
  },
  {
    key: 'activeHoursRange',
    label: 'Specify active hours range for auto-restarts',
    tooltip: 'Defines the daily window treated as active hours.',
  },
  {
    key: 'alwaysRestartScheduled',
    label: 'Always automatically restart at the scheduled time',
    tooltip: 'Restarts at the scheduled time regardless of user activity.',
  },
  {
    key: 'automaticUpdateDeadlines',
    label: 'Specify deadlines for automatic updates and restarts',
    tooltip: 'Sets grace periods and deadlines for updates and the restarts they require.',
  },
];

const ALL_SETTINGS = [
  ...UPDATE_SETTINGS,
  ...NOTIFICATION_SETTINGS,
  ...DEFERRAL_SETTINGS,
  ...ENFORCEMENT_SETTINGS,
];

/** Windows allows a 1–22 hour detection interval. */
const DETECTION_FREQUENCY_OPTIONS = Array.from({ length: 22 }, (_, index) => ({
  label: String(index + 1),
  value: index + 1,
}));

const ENABLED_BY_DEFAULT = new Set([
  'detectionFrequency',
  'includeMicrosoftProducts',
  'removePauseUpdates',
]);

function createDefaultToggles(): Record<string, boolean> {
  return Object.fromEntries(
    ALL_SETTINGS.map((setting) => [setting.key, ENABLED_BY_DEFAULT.has(setting.key)]),
  );
}

const policyName = ref('Configure Advanced Windows Updates');
const policyNotes = ref('');
const detectionFrequencyHours = ref(2);
const toggles = ref<Record<string, boolean>>(createDefaultToggles());

const updateSettingsCollapsed = ref(true);
const notificationSettingsCollapsed = ref(true);
const deferralSettingsCollapsed = ref(true);
const enforcementSettingsCollapsed = ref(true);

const isSaving = ref(false);
const showSavedConfirmation = ref(false);

type PolicySnapshot = {
  policyName: string;
  policyNotes: string;
  detectionFrequencyHours: number;
  toggles: Record<string, boolean>;
};

function currentSnapshot(): PolicySnapshot {
  return {
    policyName: policyName.value,
    policyNotes: policyNotes.value,
    detectionFrequencyHours: detectionFrequencyHours.value,
    toggles: { ...toggles.value },
  };
}

const baseline = ref<PolicySnapshot>(currentSnapshot());

const isDirty = computed(
  () => JSON.stringify(currentSnapshot()) !== JSON.stringify(baseline.value),
);

function handleDiscard() {
  policyName.value = baseline.value.policyName;
  policyNotes.value = baseline.value.policyNotes;
  detectionFrequencyHours.value = baseline.value.detectionFrequencyHours;
  toggles.value = { ...baseline.value.toggles };
  showSavedConfirmation.value = false;
}

async function handleSave() {
  isSaving.value = true;
  await new Promise((resolve) => setTimeout(resolve, 600));
  baseline.value = currentSnapshot();
  isSaving.value = false;
  showSavedConfirmation.value = true;
  setTimeout(() => {
    showSavedConfirmation.value = false;
  }, 2000);
}
</script>

<template>
  <div class="flex h-full min-h-0 flex-col">
    <ConfigPageLayout class="patch-policy-config-layout w-full! h-full! min-h-0 flex-1" max-width="1024">
      <div class="flex flex-col gap-md pb-32">
    <CollapsiblePanel header="Windows Device Policy">
      <template #titleicon="iconProps">
        <ShieldCheckIcon :class="iconProps.class" />
      </template>

      <div class="flex flex-col gap-md">
        <FormField label="Policy Name" required>
          <template #default="{ inputId }">
            <InputText :id="inputId" v-model="policyName" class="w-full" />
          </template>
        </FormField>

        <FormField label="Policy Notes">
          <template #default="{ inputId }">
            <Textarea
              :id="inputId"
              v-model="policyNotes"
              class="w-full"
              :rows="3"
              placeholder="Add notes about this policy"
            />
          </template>
        </FormField>

        <div class="flex flex-col gap-xs">
          <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Description</h4>
          <p class="text-body-md m-0 text-neutral-subtle">
            This policy manages the system update behavior based on the options selected
            below. This policy works on
            <!-- LinkText defaults to display:flex, which would break the sentence onto its own line. -->
            <LinkText
              label="all JumpCloud supported operating systems"
              href="#"
              :showIcon="false"
              customClass="inline!"
            />.
          </p>
        </div>

        <div class="flex flex-col gap-xs">
          <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Behavior</h4>
          <p class="text-body-md m-0 text-neutral-subtle">
            These settings will control when and how updates and upgrades are downloaded
            and installed.
          </p>
        </div>

        <div class="flex flex-col gap-xs">
          <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Activation</h4>
          <p class="text-body-md m-0 text-neutral-subtle">
            The system must be rebooted for the policy to take effect.
          </p>
        </div>
      </div>
    </CollapsiblePanel>

    <CollapsiblePanel
      v-model:collapsed="updateSettingsCollapsed"
      toggleable
      header="Update Settings"
    >
      <template #titleicon="iconProps">
        <Cog6ToothIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>

      <div class="flex flex-col gap-md">
        <template v-for="setting in UPDATE_SETTINGS" :key="setting.key">
          <PolicySettingCheckbox
            v-model="toggles[setting.key]"
            :label="setting.label"
            :tooltip="setting.tooltip"
            :inputId="`caw-${setting.key}`"
          />

          <FormField
            v-if="setting.key === 'detectionFrequency' && toggles[setting.key]"
            label="hours"
          >
            <template #default="{ inputId }">
              <div class="patch-policy-settings-control-width-short">
                <Select
                  :id="inputId"
                  v-model="detectionFrequencyHours"
                  :options="DETECTION_FREQUENCY_OPTIONS"
                  optionLabel="label"
                  optionValue="value"
                  class="w-full!"
                />
              </div>
            </template>
          </FormField>
        </template>
      </div>
    </CollapsiblePanel>

    <CollapsiblePanel
      v-model:collapsed="notificationSettingsCollapsed"
      toggleable
      header="Notifications Settings"
    >
      <template #titleicon="iconProps">
        <BellAlertIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>

      <div class="flex flex-col gap-md">
        <PolicySettingCheckbox
          v-for="setting in NOTIFICATION_SETTINGS"
          :key="setting.key"
          v-model="toggles[setting.key]"
          :label="setting.label"
          :tooltip="setting.tooltip"
          :inputId="`caw-${setting.key}`"
        />
      </div>
    </CollapsiblePanel>

    <CollapsiblePanel
      v-model:collapsed="deferralSettingsCollapsed"
      toggleable
      header="Deferral and Deadline Settings"
    >
      <template #titleicon="iconProps">
        <ClockIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>

      <div class="flex flex-col gap-md">
        <PolicySettingCheckbox
          v-for="setting in DEFERRAL_SETTINGS"
          :key="setting.key"
          v-model="toggles[setting.key]"
          :label="setting.label"
          :tooltip="setting.tooltip"
          :inputId="`caw-${setting.key}`"
        />
      </div>
    </CollapsiblePanel>

    <CollapsiblePanel
      v-model:collapsed="enforcementSettingsCollapsed"
      toggleable
      header="Update Enforcement &amp; Restart Settings"
    >
      <template #titleicon="iconProps">
        <ArrowPathIcon :class="iconProps.class" />
      </template>
      <template #toggleicon="iconProps">
        <ChevronRightIcon :class="iconProps.class" />
      </template>

      <div class="flex flex-col gap-md">
        <PolicySettingCheckbox
          v-for="setting in ENFORCEMENT_SETTINGS"
          :key="setting.key"
          v-model="toggles[setting.key]"
          :label="setting.label"
          :tooltip="setting.tooltip"
          :inputId="`caw-${setting.key}`"
        />
      </div>
    </CollapsiblePanel>

        <div class="h-36 shrink-0" aria-hidden="true" />
      </div>
    </ConfigPageLayout>

    <PageSaveBar
      :visible="isDirty"
      :saving="isSaving"
      :saved="showSavedConfirmation"
      message="You have unsaved changes"
      saveLabel="Save"
      discardLabel="Cancel"
      savedLabel="Policy saved"
      @save="handleSave"
      @discard="handleDiscard"
    />
  </div>
</template>
