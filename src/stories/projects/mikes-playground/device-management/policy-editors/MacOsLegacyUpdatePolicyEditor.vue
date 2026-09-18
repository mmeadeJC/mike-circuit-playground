<script setup lang="ts">
import { ref } from 'vue';
import {
  CollapsiblePanel,
  FormField,
  LinkText,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import {
  ArrowUpCircleIcon,
  BellAlertIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/24/outline';
import MacOsLegacyNotificationSettingsPanel from './MacOsLegacyNotificationSettingsPanel.vue';
import PatchPolicyDetailLayout from './shared/PatchPolicyDetailLayout.vue';
import PatchPolicyLegacyDeprecationBanner from './shared/PatchPolicyLegacyDeprecationBanner.vue';
import PatchPolicyLegacyMdmSidebar from './shared/PatchPolicyLegacyMdmSidebar.vue';
import PolicySettingCheckbox from './PolicySettingCheckbox.vue';
import { usePatchPolicyEditor } from './shared/usePatchPolicyEditor';
import {
  AUTOMATIC_ACTION_OPTIONS,
  cloneMacOsLegacyPolicySettings,
  createMacOsLegacyPolicySettingsForProfile,
  MACOS_MAJOR_VERSION_FIELDS,
  type MacOsLegacyPolicyProfile,
  type MacOsLegacyPolicySettings,
} from './macOsLegacyPolicySettings';

const props = defineProps<{
  initialPolicyName: string;
  settingsProfile?: MacOsLegacyPolicyProfile;
}>();

const policyName = ref(props.initialPolicyName);
const policyNotes = ref('');
const settings = ref<MacOsLegacyPolicySettings>(
  createMacOsLegacyPolicySettingsForProfile(props.settingsProfile ?? 'vanguard'),
);

const majorUpgradeCollapsed = ref(true);
const minorUpdateCollapsed = ref(true);
const notificationCollapsed = ref(true);

type PolicySnapshot = {
  policyName: string;
  policyNotes: string;
  settings: MacOsLegacyPolicySettings;
};

function currentSnapshot(): PolicySnapshot {
  return {
    policyName: policyName.value,
    policyNotes: policyNotes.value,
    settings: cloneMacOsLegacyPolicySettings(settings.value),
  };
}

function restoreFromSnapshot(snapshot: PolicySnapshot) {
  policyName.value = snapshot.policyName;
  policyNotes.value = snapshot.policyNotes;
  settings.value = cloneMacOsLegacyPolicySettings(snapshot.settings);
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
    <div class="shrink-0 border-b border-neutral-default_solid px-lg pt-md pb-md">
      <PatchPolicyLegacyDeprecationBanner />
    </div>

    <PatchPolicyDetailLayout class="min-h-0 flex-1">
      <div class="flex flex-col gap-md pb-32">
        <CollapsiblePanel header="macOS Device Policy">
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
                This policy lets you defer and enforce available minor updates and major
                upgrades on macOS. Users are prompted to install minor update patches using
                a custom notification. For major OS upgrades, users are prompted to install
                the upgrade through the native system notifications. OS updates and upgrades
                are enforced using the ScheduleOSUpdate MDM command. This policy works on
                macOS 11 and later.
                <LinkText
                  label="Learn more"
                  href="#"
                  target="_blank"
                  :showIcon="false"
                  customClass="inline!"
                />
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Behavior</h4>
              <p class="text-body-md m-0 text-neutral-subtle">
                This policy prompts users to install minor updates and major upgrades as soon
                as they are available. If automatic updates or upgrades are enabled, the
                policy will trigger a ScheduleOSUpdate MDM command to devices at the
                expiration of the installation deadline for minor updates, or at the next
                device check-in for major upgrades. ScheduleOSUpdate commands will be issued
                daily until devices comply with configured policy settings.
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Activation</h4>
              <p class="text-body-md m-0 text-neutral-subtle">
                No action is needed for the policy to be activated.
              </p>
            </div>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          v-model:collapsed="majorUpgradeCollapsed"
          toggleable
          header="Major Upgrade Settings"
        >
          <template #titleicon="iconProps">
            <ArrowUpCircleIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <PolicySettingCheckbox
              v-model="settings.deferUpgradeReleases"
              label="Defer Upgrade Releases"
              tooltip="Defers major macOS upgrade releases for a configured number of days."
              inputId="mac-legacy-defer-upgrade-releases"
            />

            <FormField
              v-for="field in MACOS_MAJOR_VERSION_FIELDS"
              :key="field.key"
              :label="field.label"
              :labelTooltip="field.tooltip"
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width">
                  <Select
                    :id="inputId"
                    v-model="settings.majorUpgradeActions[field.key]"
                    :options="AUTOMATIC_ACTION_OPTIONS"
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
          v-model:collapsed="minorUpdateCollapsed"
          toggleable
          header="Minor Update Settings"
        >
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <PolicySettingCheckbox
              v-model="settings.deferUpdateReleases"
              label="Defer Update Releases"
              tooltip="Defers minor macOS update releases for a configured number of days."
              inputId="mac-legacy-defer-update-releases"
            />

            <FormField
              v-if="settings.deferUpdateReleases"
              label="Deferral Length in Days"
              labelTooltip="Number of days to defer minor update releases after they become available."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width-short">
                  <InputText
                    :id="inputId"
                    v-model="settings.deferralLengthDays"
                    class="w-full"
                  />
                </div>
              </template>
            </FormField>

            <PolicySettingCheckbox
              v-model="settings.enforceAutomaticUpdates"
              label="Enforce Automatic Updates"
              tooltip="Enforces minor updates using ScheduleOSUpdate when the installation deadline is reached."
              inputId="mac-legacy-enforce-automatic-updates"
            />

            <FormField
              v-if="settings.enforceAutomaticUpdates"
              label="Installation Deadline in Days"
              labelTooltip="Number of days after a minor update is available before it must be installed."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width-short">
                  <InputText
                    :id="inputId"
                    v-model="settings.installationDeadlineDays"
                    class="w-full"
                  />
                </div>
              </template>
            </FormField>

            <PolicySettingCheckbox
              v-model="settings.deferNonOsUpdates"
              label="Defer Non-OS Updates"
              tooltip="Defers non-operating-system software updates separately from OS updates."
              inputId="mac-legacy-defer-non-os-updates"
            />
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          v-model:collapsed="notificationCollapsed"
          toggleable
          header="Notification Settings"
        >
          <template #titleicon="iconProps">
            <BellAlertIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <MacOsLegacyNotificationSettingsPanel
            v-model:enableCustomNotifications="settings.enableCustomMinorUpdateNotifications"
            v-model:notificationMessage="settings.notificationMessage"
            v-model:notificationPreviewTab="settings.notificationPreviewTab"
          />
        </CollapsiblePanel>

        <div class="h-36 shrink-0" aria-hidden="true" />
      </div>

      <template #sidebar>
        <PatchPolicyLegacyMdmSidebar />
      </template>
    </PatchPolicyDetailLayout>

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
