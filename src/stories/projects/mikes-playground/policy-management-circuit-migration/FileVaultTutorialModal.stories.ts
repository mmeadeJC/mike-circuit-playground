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
  MessageNotification,
  DetailPageLayout,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
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
  PlayCircleIcon,
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
  ArrowsPointingOutIcon,
  XMarkIcon,
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

// ─── Constants ─────────────────────────────────────────────────────

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL = {
  policyName: 'FileVault 2',
  policyNotes: '',
  showRecoveryKey: false,
  doNotPromptAtLogout: false,
  forceEnableInSetup: false,
  bypassCount: '0',
};

const POLICY_BEHAVIOR =
  'Once the policy is successfully enabled for the system, a Recovery Key will be displayed for that respective System under System Details. Removing this policy will not disable FileVault 2 once enabled.';

const POLICY_ACTIVATION =
  'A user will need to logout and log back in for the policy to take effect.';

// ─── Page Component ────────────────────────────────────────────────

const VIDEO_TUTORIAL_URL = 'https://jumpcloud.com';

const FileVaultTutorialModalPage = defineComponent({
  name: 'FileVaultTutorialModalPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    LinkText,
    MessageNotification,
    DetailPageLayout,
    PageSaveBar,
    TopBar,
    PvButton: Button,
    PvDialog: Dialog,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
    PlayCircleIcon,
    PlayIcon,
    PauseIcon,
    SpeakerWaveIcon,
    ArrowsPointingOutIcon,
    XMarkIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/filevault-tutorial-modal');

    const activeTab = ref('details');
    const showTutorialModal = ref(true);
    const isVideoPlaying = ref(false);
    const policyName = ref(INITIAL.policyName);
    const policyNotes = ref(INITIAL.policyNotes);
    const showRecoveryKey = ref(INITIAL.showRecoveryKey);
    const doNotPromptAtLogout = ref(INITIAL.doNotPromptAtLogout);
    const forceEnableInSetup = ref(INITIAL.forceEnableInSetup);
    const bypassCount = ref(INITIAL.bypassCount);

    const baseline = ref({ ...INITIAL });
    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => (
      policyName.value !== baseline.value.policyName
      || policyNotes.value !== baseline.value.policyNotes
      || showRecoveryKey.value !== baseline.value.showRecoveryKey
      || doNotPromptAtLogout.value !== baseline.value.doNotPromptAtLogout
      || forceEnableInSetup.value !== baseline.value.forceEnableInSetup
      || bypassCount.value !== baseline.value.bypassCount
    ));

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function openTutorialModal() {
      showTutorialModal.value = true;
      isVideoPlaying.value = false;
    }

    function closeTutorialModal() {
      showTutorialModal.value = false;
      isVideoPlaying.value = false;
    }

    function toggleVideoPlayback() {
      isVideoPlaying.value = !isVideoPlaying.value;
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      showRecoveryKey.value = baseline.value.showRecoveryKey;
      doNotPromptAtLogout.value = baseline.value.doNotPromptAtLogout;
      forceEnableInSetup.value = baseline.value.forceEnableInSetup;
      bypassCount.value = baseline.value.bypassCount;
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        showRecoveryKey: showRecoveryKey.value,
        doNotPromptAtLogout: doNotPromptAtLogout.value,
        forceEnableInSetup: forceEnableInSetup.value,
        bypassCount: bypassCount.value,
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
      showTutorialModal,
      isVideoPlaying,
      VIDEO_TUTORIAL_URL,
      policyName,
      policyNotes,
      showRecoveryKey,
      doNotPromptAtLogout,
      forceEnableInSetup,
      bypassCount,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      isDirty,
      isSaving,
      showSavedConfirmation,
      openTutorialModal,
      closeTutorialModal,
      toggleVideoPlayback,
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
          title="FileVault 2"
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
            class="w-full! h-full!"
            max-width="1440"
            :show-sidebar="true"
          >
            <div class="flex flex-col gap-md">
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
                      This policy allows you to enable and enforce FileVault. This policy works on
                      <LinkText
                        label="all JumpCloud supported operating systems"
                        href="#"
                        target="_blank"
                        :showIcon="false"
                        customClass="inline"
                      />.
                    </p>
                    <button
                      type="button"
                      class="inline-flex items-center gap-xs text-body-md-link text-link-base hover:text-link-hover hover:underline active:text-link-active transition-colors"
                      @click="openTutorialModal"
                    >
                      <PlayCircleIcon class="size-4 shrink-0" />
                      Watch Video Tutorial
                    </button>
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
                    v-model="showRecoveryKey"
                    inputId="show-recovery-key"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Show the FileVault Recovery Key to the user when enabled</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'When enabled, the recovery key is shown to the user after FileVault is turned on.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="doNotPromptAtLogout"
                    inputId="do-not-prompt-logout"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Do not prompt the user to enable FileVault at logout</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'Prevents the logout prompt that asks the user to enable FileVault.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="forceEnableInSetup"
                    inputId="force-enable-setup"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>Force enable in setup assistant</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information"
                          v-tooltip.top="'Requires FileVault to be enabled during the macOS Setup Assistant.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <FormField
                    label="Number of times the user can bypass enabling FileVault"
                    label-tooltip="The number of times a user can defer enabling FileVault before it becomes required."
                  >
                    <template #default="{ inputId }">
                      <PvInputText
                        :id="inputId"
                        v-model="bypassCount"
                        class="w-20"
                      />
                    </template>
                  </FormField>
                </div>
              </CollapsiblePanel>
            </div>

            <template #sidebar>
              <MessageNotification
                severity="info"
                detail="JumpCloud MDM enrollment for macOS 11.0+"
              >
                <template #button>
                  <LinkText label="Learn more" href="#" target="_blank" />
                </template>
              </MessageNotification>
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
          saveLabel="Save Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />

        <PvDialog
          v-model:visible="showTutorialModal"
          modal
          :draggable="false"
          header="FileVault"
          :style="{ width: '800px' }"
          @hide="closeTutorialModal"
        >
          <template #closeicon><XMarkIcon /></template>

          <div class="flex flex-col gap-md">
            <div class="flex flex-col overflow-hidden rounded-sm border border-neutral-default_solid shrink-0">
              <div class="relative w-full shrink-0 h-96 bg-neutral-surface flex items-center justify-center px-md pt-lg pb-md">
                <img
                  src="/placeholders/filevault-tutorial-poster.png"
                  alt="FileVault tutorial video preview"
                  class="block max-h-full max-w-full object-contain"
                />
                <button
                  type="button"
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-14 rounded-sm bg-button-primary-base text-button-primary-base"
                  aria-label="Play video"
                  @click="toggleVideoPlayback"
                >
                  <PauseIcon v-if="isVideoPlaying" class="size-7" />
                  <PlayIcon v-else class="size-7 ml-0.5" />
                </button>
              </div>

              <div class="flex items-center gap-sm px-sm py-xs bg-button-primary-base text-button-primary-base shrink-0">
                <button
                  type="button"
                  class="shrink-0"
                  aria-label="Play or pause"
                  @click="toggleVideoPlayback"
                >
                  <PauseIcon v-if="isVideoPlaying" class="size-4" />
                  <PlayIcon v-else class="size-4" />
                </button>
                <span class="text-body-sm shrink-0 tabular-nums">6:04</span>
                <div class="flex-1 h-1 rounded-full bg-neutral_solid-n0/30 relative mx-xs">
                  <div class="absolute left-0 top-0 h-full w-1/3 rounded-full bg-neutral_solid-n0"></div>
                  <div class="absolute left-1/3 top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral_solid-n0"></div>
                </div>
                <span class="text-body-xs shrink-0 font-semibold tracking-wide">CC</span>
                <SpeakerWaveIcon class="size-4 shrink-0" />
                <Cog6ToothIcon class="size-4 shrink-0" />
                <ArrowsPointingOutIcon class="size-4 shrink-0" />
              </div>
            </div>

            <LinkText
              label="Open video in new tab"
              :href="VIDEO_TUTORIAL_URL"
              target="_blank"
            />
          </div>

          <template #footer>
            <div class="flex items-center flex-1 min-w-0"></div>
            <div class="flex gap-sm shrink-0">
              <PvButton label="Close" @click="closeTutorialModal" />
            </div>
          </template>
        </PvDialog>
      </div>
    </div>
  `,
});


export { FileVaultTutorialModalPage };

const meta: Meta<typeof FileVaultTutorialModalPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/FileVault Tutorial Modal",
  component: FileVaultTutorialModalPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof FileVaultTutorialModalPage>;

export const Default: Story = {};
