<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  CollapsiblePanel,
  DatePicker,
  FormField,
  LinkText,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Tag from 'primevue/tag';
import Textarea from 'primevue/textarea';
import {
  ArrowPathIcon,
  BeakerIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  PlusIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  TrashIcon,
} from '@heroicons/vue/24/outline';
import PatchPolicyDetailLayout from './shared/PatchPolicyDetailLayout.vue';
import PatchPolicyIosDdmSidebar from './shared/PatchPolicyIosDdmSidebar.vue';
import PolicySettingCheckbox from './PolicySettingCheckbox.vue';
import PolicySettingRadioField from './PolicySettingRadioField.vue';
import { usePatchPolicyEditor } from './shared/usePatchPolicyEditor';
import {
  AUTOMATIC_ACTION_FIELDS,
  cloneIosDdmPolicySettings,
  createBetaProgramRow,
  createIosDdmPolicySettingsForProfile,
  ENFORCEMENT_TIMEZONE_LABEL,
  NOTIFICATIONS_OPTIONS,
  PROGRAM_ENROLLMENT_OPTIONS,
  RAPID_SECURITY_RESPONSE_FIELDS,
  RECOMMENDED_CADENCE_OPTIONS,
  TRI_STATE_OPTIONS,
  YES_NO_OPTIONS,
  type IosDdmPolicyProfile,
  type IosDdmPolicySettings,
} from './iosDdmPolicySettings';

const props = defineProps<{
  initialPolicyName: string;
  settingsProfile?: IosDdmPolicyProfile;
}>();

const resolvedProfile = computed(
  () => props.settingsProfile ?? 'early-adoption',
);
const showBetaUpdatesPanel = computed(
  () => resolvedProfile.value !== 'early-adoption',
);

const POLICY_BEHAVIOR_BY_PROFILE: Record<IosDdmPolicyProfile, string> = {
  'early-adoption':
    'This policy manages the update by prompting users to install updates. When deferral and/or enforcement is enabled, users receive prompts or daily notifications until the set enforcement deadline is reached on the device.',
  'general-adoption':
    'This policy manages the update by prompting users to install updates. When deferral and/or enforcement is enabled, users receive prompts or daily notifications until the set enforcement deadline is reached on the device.',
  vanguard:
    'This policy manages the update by prompting users to install updates. Updates can be applied without delay unless a defer period is set. When deferral and/or enforcement is enabled, users receive prompts or daily notifications, with each day increasing notification frequency up until the final day when updates become mandatory.',
};

const policyBehaviorText = computed(
  () => POLICY_BEHAVIOR_BY_PROFILE[resolvedProfile.value],
);

const policyName = ref(props.initialPolicyName);
const policyNotes = ref('');
const settings = ref<IosDdmPolicySettings>(
  createIosDdmPolicySettingsForProfile(resolvedProfile.value),
);

const DEFERRAL_DAYS_HELP = 'Specify a value between 1-90';
const GRACE_PERIOD_HELP = 'Specify a value between 0-365';

const DDM_DESCRIPTION_BULLETS = [
  'Defer and/or enforce major or minor OS updates',
  'Configure user notifications',
  "Optionally offer Rapid Security Responses and participate in Apple's Beta program",
];

const generalSettingsCollapsed = ref(true);
const automaticActionsCollapsed = ref(true);
const rapidSecurityCollapsed = ref(true);
const betaUpdatesCollapsed = ref(true);

type PolicySnapshot = {
  policyName: string;
  policyNotes: string;
  settings: IosDdmPolicySettings;
};

function currentSnapshot(): PolicySnapshot {
  return {
    policyName: policyName.value,
    policyNotes: policyNotes.value,
    settings: cloneIosDdmPolicySettings(settings.value),
  };
}

function restoreFromSnapshot(snapshot: PolicySnapshot) {
  policyName.value = snapshot.policyName;
  policyNotes.value = snapshot.policyNotes;
  settings.value = cloneIosDdmPolicySettings(snapshot.settings);
}

function addOfferedProgram() {
  settings.value.offeredPrograms.push(createBetaProgramRow());
}

function removeOfferedProgram(id: string) {
  if (settings.value.offeredPrograms.length <= 1) {
    settings.value.offeredPrograms = [
      { ...settings.value.offeredPrograms[0], description: '', token: '' },
    ];
    return;
  }

  settings.value.offeredPrograms = settings.value.offeredPrograms.filter(
    (row) => row.id !== id,
  );
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
    <PatchPolicyDetailLayout class="min-h-0 flex-1">
      <div class="flex flex-col gap-md pb-32">
        <CollapsiblePanel header="iOS &amp; iPadOS Device Policy">
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
                This policy manages iOS software update settings proactively using
                Apple's Declarative Device Management (DDM). With this policy you can:
              </p>
              <ul class="text-body-md text-neutral-subtle m-0 pl-5 list-disc">
                <li v-for="bullet in DDM_DESCRIPTION_BULLETS" :key="bullet">
                  {{ bullet }}
                </li>
              </ul>
              <p v-if="showBetaUpdatesPanel" class="text-body-md m-0 text-neutral-subtle">
                Updates are enforced using SoftwareUpdateEnforcementSpecific and
                SoftwareUpdateSettings DDM configurations.
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
                {{ policyBehaviorText }}
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold m-0 text-neutral-base">Policy Activation</h4>
              <p class="text-body-md m-0 text-neutral-subtle">
                No action is needed to activate the policy.
              </p>
            </div>
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          v-model:collapsed="generalSettingsCollapsed"
          toggleable
          header="General Settings"
        >
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField
              label="Defer Major OS Upgrades or Minor Updates for"
              labelTooltip="Number of days to defer major and minor iOS updates after release."
              :help-text="DEFERRAL_DAYS_HELP"
            >
              <template #default="{ inputId }">
                <div class="flex items-center gap-sm">
                  <div class="patch-policy-settings-control-width-short">
                    <InputText
                      :id="inputId"
                      v-model="settings.deferMajorOrMinorUpdatesDays"
                      class="w-full"
                    />
                  </div>
                  <span class="text-body-md text-neutral-base">Days</span>
                </div>
              </template>
            </FormField>

            <PolicySettingCheckbox
              v-model="settings.enforceAutomaticUpdates"
              label="Enforce Automatic Updates"
              tooltip="Requires updates to be installed automatically after the grace period expires."
              inputId="ios-ddm-enforce-automatic-updates"
            />

            <div
              v-if="settings.enforceAutomaticUpdates"
              class="flex flex-col gap-xs pl-6"
            >
              <div class="flex flex-wrap items-center gap-xs text-body-md text-neutral-base">
                <span>Allow Grace Period of</span>
                <div class="patch-policy-settings-control-width-short">
                  <InputText
                    v-model="settings.gracePeriodDays"
                    class="w-full"
                    size="small"
                    inputId="ios-ddm-grace-period-days"
                  />
                </div>
                <span>Days Before Automatic Installation</span>
              </div>
              <span class="text-body-sm text-neutral-subtle">{{ GRACE_PERIOD_HELP }}</span>
            </div>

            <FormField
              label="Local Device Time for Enforcement"
              required
              labelTooltip="The local time of day when automatic update enforcement begins on the device."
            >
              <template #default="{ inputId }">
                <div class="patch-policy-settings-control-width">
                  <InputGroup class="w-full">
                    <DatePicker
                      :id="inputId"
                      v-model="settings.enforcementTime"
                      timeOnly
                      fluid
                      showIcon
                      iconDisplay="input"
                      hourFormat="12"
                      placeholder="Select time"
                    />
                    <InputGroupAddon>{{ ENFORCEMENT_TIMEZONE_LABEL }}</InputGroupAddon>
                  </InputGroup>
                </div>
              </template>
            </FormField>

            <FormField
              label="Details URL"
              labelTooltip="Optional URL shown to users with additional update details."
            >
              <template #default="{ inputId }">
                <InputText :id="inputId" v-model="settings.detailsUrl" class="w-full" />
              </template>
            </FormField>

            <PolicySettingRadioField
              v-model="settings.notifications"
              label="Notifications"
              tooltip="Controls how users are notified about pending updates."
              :options="NOTIFICATIONS_OPTIONS"
              inputIdPrefix="ios-ddm-notifications"
            />

            <PolicySettingRadioField
              v-model="settings.recommendedCadence"
              label="Recommended Cadence"
              tooltip="Controls which update versions are shown to users."
              :options="RECOMMENDED_CADENCE_OPTIONS"
              inputIdPrefix="ios-ddm-recommended-cadence"
            />
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          v-model:collapsed="automaticActionsCollapsed"
          toggleable
          header="Automatic Actions"
        >
          <template #titleicon="iconProps">
            <ArrowPathIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <PolicySettingRadioField
              v-for="field in AUTOMATIC_ACTION_FIELDS"
              :key="field.key"
              v-model="settings[field.key]"
              :label="field.label"
              :tooltip="field.tooltip"
              :options="TRI_STATE_OPTIONS"
              :inputIdPrefix="`ios-ddm-auto-${field.key}`"
            />
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          v-model:collapsed="rapidSecurityCollapsed"
          toggleable
          header="Rapid Security Response"
        >
          <template #titleicon="iconProps">
            <ShieldExclamationIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <PolicySettingRadioField
              v-for="field in RAPID_SECURITY_RESPONSE_FIELDS"
              :key="field.key"
              v-model="settings[field.key]"
              :label="field.label"
              :tooltip="field.tooltip"
              :options="YES_NO_OPTIONS"
              :inputIdPrefix="`ios-ddm-rsr-${field.key}`"
            />
          </div>
        </CollapsiblePanel>

        <CollapsiblePanel
          v-if="showBetaUpdatesPanel"
          v-model:collapsed="betaUpdatesCollapsed"
          toggleable
          header="Beta Updates"
        >
          <template #titleicon="iconProps">
            <BeakerIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <PolicySettingRadioField
              v-model="settings.programEnrollment"
              label="Program Enrollment"
              tooltip="Controls whether devices can enroll in Apple beta software programs."
              :options="PROGRAM_ENROLLMENT_OPTIONS"
              inputIdPrefix="ios-ddm-program-enrollment"
            />

            <div class="flex flex-col gap-sm">
              <div class="flex flex-wrap items-center gap-sm">
                <span class="text-body-md-semi-bold text-neutral-base">Offered Program(s)</span>
                <Tag value="Always Off" severity="secondary" />
              </div>

              <div
                v-for="row in settings.offeredPrograms"
                :key="row.id"
                class="flex flex-col gap-sm sm:flex-row sm:items-end"
              >
                <div class="grid flex-1 min-w-0 grid-cols-1 gap-sm sm:grid-cols-2">
                  <FormField label="Description">
                    <template #default="{ inputId }">
                      <InputText
                        :id="inputId"
                        v-model="row.description"
                        class="w-full"
                      />
                    </template>
                  </FormField>

                  <FormField label="Token">
                    <template #default="{ inputId }">
                      <InputText
                        :id="inputId"
                        v-model="row.token"
                        class="w-full"
                      />
                    </template>
                  </FormField>
                </div>

                <div class="flex shrink-0 items-center gap-xs pb-1">
                  <Button
                    severity="secondary"
                    variant="text"
                    size="small"
                    aria-label="Delete offered program"
                    @click="removeOfferedProgram(row.id)"
                  >
                    <template #icon>
                      <TrashIcon class="size-4" />
                    </template>
                  </Button>
                  <Button
                    severity="secondary"
                    variant="text"
                    size="small"
                    aria-label="Add offered program"
                    @click="addOfferedProgram"
                  >
                    <template #icon>
                      <PlusIcon class="size-4" />
                    </template>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CollapsiblePanel>

        <div class="h-36 shrink-0" aria-hidden="true" />
      </div>

      <template #sidebar>
        <PatchPolicyIosDdmSidebar />
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
