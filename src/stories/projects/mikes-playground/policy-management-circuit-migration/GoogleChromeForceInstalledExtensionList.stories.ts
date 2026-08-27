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
  ChevronRightIcon,
  PuzzlePieceIcon,
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

interface ExtensionIdRow {
  id: number;
  extensionId: string;
}

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL_POLICY_NAME = 'Google Chrome Browser Force-Installed Extension List';
const INITIAL_POLICY_NOTES = '';

const INITIAL_JUMPCLOUD_EXTENSIONS = {
  passwordManager: true,
  go: true,
};

const INITIAL_EXTENSION_IDS: ExtensionIdRow[] = [
  { id: 1, extensionId: '' },
];

const POLICY_DESCRIPTION =
  'This policy allows you to install JumpCloud and 3rd party Google Chrome Browser Extensions by providing their Extension IDs and Update URLs.';

const POLICY_BEHAVIOR =
  'Extensions configured in this policy will be silently installed and cannot be uninstalled or disabled by the end user. This policy applies to Chrome at the platform machine level.';

const POLICY_ACTIVATION =
  'Chrome browser relaunch is required to apply this policy.';

const CBCM_NOTICE =
  'This policy is designed for organizations not using Google Chrome Browser Cloud Management (CBCM). Organizations using CBCM should manage the Force-Installed Extension List within the Apps & Extensions page of the Google Admin Portal.';

const CBCM_NOTICE_LINK_LEAD = 'For more information, please reference our ';

// ─── Page Component ────────────────────────────────────────────────

const GoogleChromeForceInstalledExtensionListPage = defineComponent({
  name: 'GoogleChromeForceInstalledExtensionListPage',
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
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
    ChevronRightIcon,
    PuzzlePieceIcon,
    ArrowTopRightOnSquareIcon,
    PlusIcon,
    TrashIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/google-chrome-extensions');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const passwordManager = ref(INITIAL_JUMPCLOUD_EXTENSIONS.passwordManager);
    const goExtension = ref(INITIAL_JUMPCLOUD_EXTENSIONS.go);
    const additionalExtensions = ref<ExtensionIdRow[]>(
      INITIAL_EXTENSION_IDS.map((row) => ({ ...row })),
    );

    const jumpCloudExtensionsCollapsed = ref(true);
    const additionalExtensionsCollapsed = ref(true);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      passwordManager: INITIAL_JUMPCLOUD_EXTENSIONS.passwordManager,
      goExtension: INITIAL_JUMPCLOUD_EXTENSIONS.go,
      additionalExtensions: INITIAL_EXTENSION_IDS.map((row) => ({ ...row })),
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);
    let nextExtensionId = 2;

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      if (passwordManager.value !== baseline.value.passwordManager) return true;
      if (goExtension.value !== baseline.value.goExtension) return true;
      if (additionalExtensions.value.length !== baseline.value.additionalExtensions.length) return true;
      return additionalExtensions.value.some((row, index) => {
        const base = baseline.value.additionalExtensions[index];
        if (!base) return true;
        return row.extensionId !== base.extensionId;
      });
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function addExtension() {
      additionalExtensions.value.push({
        id: nextExtensionId++,
        extensionId: '',
      });
    }

    function removeExtension(id: number) {
      if (additionalExtensions.value.length <= 1) {
        additionalExtensions.value = [{ id: nextExtensionId++, extensionId: '' }];
        return;
      }
      additionalExtensions.value = additionalExtensions.value.filter((row) => row.id !== id);
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      passwordManager.value = baseline.value.passwordManager;
      goExtension.value = baseline.value.goExtension;
      additionalExtensions.value = baseline.value.additionalExtensions.map((row) => ({ ...row }));
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        passwordManager: passwordManager.value,
        goExtension: goExtension.value,
        additionalExtensions: additionalExtensions.value.map((row) => ({ ...row })),
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
      passwordManager,
      goExtension,
      additionalExtensions,
      jumpCloudExtensionsCollapsed,
      additionalExtensionsCollapsed,
      POLICY_DESCRIPTION,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      CBCM_NOTICE,
      CBCM_NOTICE_LINK_LEAD,
      isDirty,
      isSaving,
      showSavedConfirmation,
      addExtension,
      removeExtension,
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
          title="Google Chrome Browser Force-Installed Extension List"
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
            <div class="flex flex-col gap-md">
              <!-- Windows Device Policy -->
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

              <!-- Settings -->
              <CollapsiblePanel header="Settings">
                <template #titleicon="iconProps">
                  <Cog6ToothIcon :class="iconProps.class" />
                </template>

                <div
                  class="flex grow items-start content-start rounded gap-2 p-2 w-full bg-notification-info shadow-message-info text-notification-info-content"
                >
                  <span class="flex h-6 items-center justify-center shrink-0">
                    <InformationCircleIcon class="w-5 h-5 text-notification-info-content" />
                  </span>
                  <div class="flex grow flex-col py-0.5 min-w-0 gap-2 min-h-6 justify-center">
                    <p class="text-body-sm m-0">{{ CBCM_NOTICE }}</p>
                    <p class="text-body-sm m-0">
                      {{ CBCM_NOTICE_LINK_LEAD }}<LinkText
                        href="#"
                        target="_blank"
                        :showIcon="false"
                        customClass="inline-flex items-center gap-xs align-baseline"
                      >
                        KB Article
                        <ArrowTopRightOnSquareIcon class="size-4 shrink-0" />
                      </LinkText>.
                    </p>
                  </div>
                </div>
              </CollapsiblePanel>

              <!-- JumpCloud Chrome Browser Extensions -->
              <CollapsiblePanel
                v-model:collapsed="jumpCloudExtensionsCollapsed"
                toggleable
                header="JumpCloud Chrome Browser Extensions"
              >
                <template #titleicon="iconProps">
                  <PuzzlePieceIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <div class="flex flex-col gap-md">
                  <CheckboxWithLabel
                    v-model="goExtension"
                    inputId="jc-go"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>JumpCloud Go</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about JumpCloud Go"
                          v-tooltip.top="'Force-install the JumpCloud Go Chrome extension.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>

                  <CheckboxWithLabel
                    v-model="passwordManager"
                    inputId="jc-password-manager"
                    :binary="true"
                  >
                    <template #label>
                      <span class="inline-flex items-center gap-1">
                        <span>JumpCloud Password Manager</span>
                        <button
                          type="button"
                          class="rounded-full text-neutral-subtle hover:text-neutral-base"
                          aria-label="More information about JumpCloud Password Manager"
                          v-tooltip.top="'Force-install the JumpCloud Password Manager Chrome extension.'"
                        >
                          <InformationCircleIcon class="size-4" />
                        </button>
                      </span>
                    </template>
                  </CheckboxWithLabel>
                </div>
              </CollapsiblePanel>

              <!-- Additional Chrome Browser Extensions -->
              <CollapsiblePanel
                v-model:collapsed="additionalExtensionsCollapsed"
                toggleable
                header="Additional Chrome Browser Extensions"
              >
                <template #titleicon="iconProps">
                  <PuzzlePieceIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>

                <FormField
                  label="Extension IDs"
                  label-tooltip="Enter the 32-character Chrome extension ID from the Chrome Web Store or a custom host."
                >
                  <template #default="{ inputId }">
                    <div class="flex flex-col gap-md">
                      <div
                        v-for="(row, index) in additionalExtensions"
                        :key="row.id"
                        class="flex items-start gap-sm"
                      >
                        <PvInputText
                          :id="index === 0 ? inputId : undefined"
                          v-model="row.extensionId"
                          class="w-full flex-1 min-w-0"
                          placeholder="Extension Placeholder"
                        />

                        <div class="flex items-center gap-xs shrink-0">
                          <PvButton
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Delete extension ID"
                            @click="removeExtension(row.id)"
                          >
                            <template #icon>
                              <TrashIcon class="size-4" />
                            </template>
                          </PvButton>
                          <PvButton
                            severity="secondary"
                            variant="text"
                            size="small"
                            aria-label="Add extension ID"
                            @click="addExtension"
                          >
                            <template #icon>
                              <PlusIcon class="size-4" />
                            </template>
                          </PvButton>
                        </div>
                      </div>
                    </div>
                  </template>
                </FormField>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <MessageNotification
                severity="info"
                detail="JumpCloud MDM enrollment"
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
      </div>
    </div>
  `,
});


export { GoogleChromeForceInstalledExtensionListPage };

const meta: Meta<typeof GoogleChromeForceInstalledExtensionListPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Google Chrome Browser Force-Installed Extension List",
  component: GoogleChromeForceInstalledExtensionListPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof GoogleChromeForceInstalledExtensionListPage>;

export const Default: Story = {};
