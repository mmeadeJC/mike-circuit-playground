<script setup lang="ts">
import { ref } from 'vue';
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
import { usePatchPolicyEditor } from './shared/usePatchPolicyEditor';
import {
  AUTOMATIC_UPDATES_BEHAVIOR_OPTIONS,
  cloneWindowsLegacyPolicySettings,
  createWindowsLegacyPolicySettingsForProfile,
  DETECTION_FREQUENCY_OPTIONS,
  INSTALL_DAYS_OF_WEEK_OPTIONS,
  INSTALL_TIME_OF_DAY_OPTIONS,
  INSTALL_UPDATES_FREQUENCY_OPTIONS,
  UPDATE_INSTALLATION_GRACE_PERIOD_OPTIONS,
  UPDATE_NOTIFICATION_OPTIONS,
  UPDATE_RESTART_GRACE_PERIOD_OPTIONS,
  UPGRADE_CHANNEL_OPTIONS,
  type WindowsLegacyPolicyProfile,
  type WindowsLegacyPolicySettings,
} from './windowsLegacyPolicySettings';

const props = defineProps<{
  initialPolicyName: string;
  settingsProfile?: WindowsLegacyPolicyProfile;
}>();

const policyName = ref(props.initialPolicyName);
const policyNotes = ref('');
const settings = ref<WindowsLegacyPolicySettings>(
  createWindowsLegacyPolicySettingsForProfile(props.settingsProfile ?? 'vanguard'),
);

const updateSettingsCollapsed = ref(true);
const notificationSettingsCollapsed = ref(true);
const deferralSettingsCollapsed = ref(true);
const enforcementSettingsCollapsed = ref(true);

type PolicySnapshot = {
  policyName: string;
  policyNotes: string;
  settings: WindowsLegacyPolicySettings;
};

function currentSnapshot(): PolicySnapshot {
  return {
    policyName: policyName.value,
    policyNotes: policyNotes.value,
    settings: cloneWindowsLegacyPolicySettings(settings.value),
  };
}

function restoreFromSnapshot(snapshot: PolicySnapshot) {
  policyName.value = snapshot.policyName;
  policyNotes.value = snapshot.policyNotes;
  settings.value = cloneWindowsLegacyPolicySettings(snapshot.settings);
}

const {
  isDirty,
  isSaving,
  showSavedConfirmation,
  handleDiscard,
  handleSave,
} = usePatchPolicyEditor(currentSnapshot, restoreFromSnapshot);
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
            <PolicySettingCheckbox
              v-model="settings.autoInstallMinorUpdates"
              label="Automatically install minor updates"
              tooltip="Installs minor updates silently without notifying the user."
              inputId="win-legacy-auto-install-minor-updates"
            />

            <PolicySettingCheckbox
              v-model="settings.autoInstallUpdates"
              label="Automatically Install Updates"
              tooltip="Downloads and installs available updates without user interaction."
              inputId="win-legacy-auto-install-updates"
            />

            <template v-if="settings.autoInstallUpdates">
              <FormField
                label="Automatic Updates Behavior"
                labelTooltip="Controls how Windows Update downloads and installs updates."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width">
                    <Select
                      :id="inputId"
                    v-model="settings.automaticUpdatesBehavior"
                    :options="AUTOMATIC_UPDATES_BEHAVIOR_OPTIONS"
                    optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>

              <FormField
                label="Specify the day(s) of the week to install updates"
                labelTooltip="The day or days of the week when updates may be installed."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width">
                    <Select
                      :id="inputId"
                    v-model="settings.installDaysOfWeek"
                    :options="INSTALL_DAYS_OF_WEEK_OPTIONS"
                    optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>

              <FormField
                label="Specify the time of day to install updates"
                labelTooltip="The time of day when updates may be installed."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width">
                    <Select
                      :id="inputId"
                    v-model="settings.installTimeOfDay"
                    :options="INSTALL_TIME_OF_DAY_OPTIONS"
                    optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>

              <FormField
                label="Install updates frequency"
                labelTooltip="How often updates are installed during the configured schedule."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width">
                    <Select
                      :id="inputId"
                    v-model="settings.installUpdatesFrequency"
                    :options="INSTALL_UPDATES_FREQUENCY_OPTIONS"
                    optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>
            </template>

            <PolicySettingCheckbox
              v-model="settings.detectionFrequencyEnabled"
              label="Automatic Updates detection frequency"
              tooltip="How often the device checks Windows Update for new updates."
              inputId="win-legacy-detection-frequency"
            />

            <FormField v-if="settings.detectionFrequencyEnabled" label="hours">
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width-short">
                  <Select
                    :id="inputId"
                    v-model="settings.detectionFrequencyHours"
                    :options="DETECTION_FREQUENCY_OPTIONS"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full!"
                  />
                </div>
              </template>
            </FormField>

            <PolicySettingCheckbox
              v-model="settings.installDuringMaintenance"
              label="Automatically install updates during automatic maintenance"
              tooltip="Defers installation to the scheduled Windows automatic maintenance window."
              inputId="win-legacy-install-during-maintenance"
            />

            <PolicySettingCheckbox
              v-model="settings.includeMicrosoftProducts"
              label="Include updates for other Microsoft products"
              tooltip="Also delivers updates for Microsoft products such as Office."
              inputId="win-legacy-include-microsoft-products"
            />

            <PolicySettingCheckbox
              v-model="settings.excludeDrivers"
              label="Do not include drivers with Windows Update"
              tooltip="Prevents driver updates from being delivered through Windows Update."
              inputId="win-legacy-exclude-drivers"
            />

            <PolicySettingCheckbox
              v-model="settings.removePauseUpdates"
              label='Remove access to "Pause Updates" feature.'
              tooltip="Hides the Pause Updates control so users cannot postpone updates."
              inputId="win-legacy-remove-pause-updates"
            />

            <PolicySettingCheckbox
              v-model="settings.removeAllUpdateFeatures"
              label="Remove access to use all Windows Update features"
              tooltip="Blocks user access to every Windows Update control on the device."
              inputId="win-legacy-remove-all-update-features"
            />

            <PolicySettingCheckbox
              v-model="settings.powerManagement"
              label="Enable Windows Update Power Management to automatically wake up the system to install scheduled updates"
              tooltip="Wakes the device from sleep to install updates at the scheduled time."
              inputId="win-legacy-power-management"
            />

            <PolicySettingCheckbox
              v-model="settings.disableFeatureUpgrades"
              label="Disable Feature Upgrades via Windows Update"
              tooltip="Prevents Windows feature upgrades from installing through Windows Update."
              inputId="win-legacy-disable-feature-upgrades"
            />

            <PolicySettingCheckbox
              v-model="settings.disableSafeguards"
              label="Disable Safeguards for Feature Updates"
              tooltip="Ignores compatibility holds that would normally block a feature update."
              inputId="win-legacy-disable-safeguards"
            />

            <PolicySettingCheckbox
              v-model="settings.managePreviewBuilds"
              label="Manage preview builds"
              tooltip="Controls whether the device can receive Windows Insider preview builds."
              inputId="win-legacy-manage-preview-builds"
            />

            <PolicySettingCheckbox
              v-model="settings.selectTarget"
              label="Select the target"
              tooltip="Targets a specific Windows feature update version for this policy."
              inputId="win-legacy-select-target"
            />
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
              v-model="settings.autoRestartRequiredNotification"
              label="Configure auto-restart required notification for updates"
              tooltip="Shows a notification when a restart is required to finish installing updates."
              inputId="win-legacy-auto-restart-required-notification"
            />

            <PolicySettingCheckbox
              v-model="settings.autoRestartReminderNotification"
              label="Configure auto-restart reminder notification for updates"
              tooltip="Reminds the user ahead of an automatic restart."
              inputId="win-legacy-auto-restart-reminder-notification"
            />

            <PolicySettingCheckbox
              v-model="settings.autoRestartWarningNotification"
              label="Configure auto-restart warning notification schedule for updates"
              tooltip="Sets how far in advance restart warnings appear."
              inputId="win-legacy-auto-restart-warning-notification"
            />

            <PolicySettingCheckbox
              v-model="settings.nonAdminNotifications"
              label="Allow non-administrators to receive update notifications"
              tooltip="Lets standard users see Windows Update notifications."
              inputId="win-legacy-non-admin-notifications"
            />

            <PolicySettingCheckbox
              v-model="settings.displayNotificationOptions"
              label="Display options for update notifications"
              tooltip="Controls which Windows Update notifications are shown to the user."
              inputId="win-legacy-display-notification-options"
            />

            <FormField
              v-if="settings.displayNotificationOptions"
              label="Select update notification option"
              labelTooltip="The notification style shown to users for Windows Update."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width">
                  <Select
                    :id="inputId"
                    v-model="settings.updateNotificationOption"
                    :options="UPDATE_NOTIFICATION_OPTIONS"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full!"
                  />
                </div>
              </template>
            </FormField>
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
              v-model="settings.deferUpdates"
              label="Defer Updates (Windows 10 and Server 2016 or higher)"
              tooltip="Delays quality updates for a set number of days after release."
              inputId="win-legacy-defer-updates"
            />

            <FormField
              v-if="settings.deferUpdates"
              label="Number of days to defer"
              labelTooltip="Number of days to defer quality updates after they are released."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width-short">
                  <InputText :id="inputId" v-model="settings.deferUpdatesDays" class="w-full" />
                </div>
              </template>
            </FormField>

            <FormField
              v-if="settings.deferUpdates"
              label="Pause update installation starting on this date (yyyy-mm-dd):"
              labelTooltip="Optional date after which update installation is paused."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width">
                  <InputText :id="inputId" v-model="settings.pauseUpdatesStartDate" class="w-full" />
                </div>
              </template>
            </FormField>

            <PolicySettingCheckbox
              v-model="settings.deferFeatureUpgrades"
              label="Defer feature upgrades"
              tooltip="Delays Windows feature upgrades for a set number of days after release."
              inputId="win-legacy-defer-feature-upgrades"
            />

            <FormField
              v-if="settings.deferFeatureUpgrades"
              label="Number of days to defer feature upgrades"
              labelTooltip="Number of days to defer feature upgrades after they are released."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width-short">
                  <InputText
                    :id="inputId"
                    v-model="settings.deferFeatureUpgradesDays"
                    class="w-full"
                  />
                </div>
              </template>
            </FormField>

            <FormField
              v-if="settings.deferFeatureUpgrades"
              label="Upgrade channel"
              labelTooltip="The Windows servicing channel used for feature upgrades."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width">
                  <Select
                    :id="inputId"
                    v-model="settings.upgradeChannel"
                    :options="UPGRADE_CHANNEL_OPTIONS"
                    optionLabel="label"
                    optionValue="value"
                    class="w-full!"
                  />
                </div>
              </template>
            </FormField>

            <FormField
              v-if="settings.deferFeatureUpgrades"
              label="Pause feature upgrade installation starting on this date (yyyy-mm-dd):"
              labelTooltip="Optional date after which feature upgrade installation is paused."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width">
                  <InputText
                    :id="inputId"
                    v-model="settings.pauseFeatureUpgradesStartDate"
                    class="w-full"
                  />
                </div>
              </template>
            </FormField>
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
              v-model="settings.deadlineForRestart"
              label="Specify deadline for restart"
              tooltip="Forces a restart once the deadline passes."
              inputId="win-legacy-deadline-for-restart"
            />

            <PolicySettingCheckbox
              v-model="settings.noAutoRestartLoggedOn"
              label="No auto-restart with logged on users for scheduled automatic updates"
              tooltip="Waits for the signed-in user to restart rather than restarting automatically."
              inputId="win-legacy-no-auto-restart-logged-on"
            />

            <PolicySettingCheckbox
              v-model="settings.noRestartActiveHours"
              label="Turn off auto-restart for updates during active hours"
              tooltip="Blocks automatic restarts while the device is in active use."
              inputId="win-legacy-no-restart-active-hours"
            />

            <PolicySettingCheckbox
              v-model="settings.activeHoursRange"
              label="Specify active hours range for auto-restarts"
              tooltip="Defines the daily window treated as active hours."
              inputId="win-legacy-active-hours-range"
            />

            <PolicySettingCheckbox
              v-model="settings.alwaysRestartScheduled"
              label="Always automatically restart at the scheduled time"
              tooltip="Restarts at the scheduled time regardless of user activity."
              inputId="win-legacy-always-restart-scheduled"
            />

            <PolicySettingCheckbox
              v-model="settings.automaticUpdateDeadlines"
              label="Specify deadlines for automatic updates and restarts"
              tooltip="Sets grace periods and deadlines for updates and the restarts they require."
              inputId="win-legacy-automatic-update-deadlines"
            />

            <template v-if="settings.automaticUpdateDeadlines">
              <FormField
                label="Quality update installation grace period"
                labelTooltip="Grace period in days before a quality update must be installed."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width-short">
                    <Select
                      :id="inputId"
                      v-model="settings.qualityUpdateInstallationGracePeriod"
                      :options="UPDATE_INSTALLATION_GRACE_PERIOD_OPTIONS"
                      optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>

              <FormField
                label="Quality update commit and restart grace period"
                labelTooltip="Grace period in days before a restart is required after a quality update."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width-short">
                    <Select
                      :id="inputId"
                      v-model="settings.qualityUpdateCommitRestartGracePeriod"
                      :options="UPDATE_RESTART_GRACE_PERIOD_OPTIONS"
                      optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>

              <FormField
                label="Feature update installation grace period"
                labelTooltip="Grace period in days before a feature update must be installed."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width-short">
                    <Select
                      :id="inputId"
                      v-model="settings.featureUpdateInstallationGracePeriod"
                      :options="UPDATE_INSTALLATION_GRACE_PERIOD_OPTIONS"
                      optionLabel="label"
                      optionValue="value"
                      class="w-full!"
                    />
                  </div>
                </template>
              </FormField>

              <FormField
                label="Feature update commit and restart grace period"
                labelTooltip="Grace period in days before a restart is required after a feature update."
              >
                <template #default="{ inputId }">
                  <div class="patch-policy-settings-control-width-short">
                    <Select
                      :id="inputId"
                      v-model="settings.featureUpdateCommitRestartGracePeriod"
                      :options="UPDATE_RESTART_GRACE_PERIOD_OPTIONS"
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
