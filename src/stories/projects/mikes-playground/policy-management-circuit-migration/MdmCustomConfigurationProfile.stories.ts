import type { Meta, StoryObj } from '@storybook/vue3';
import { usePolicyMigrationBackNavigation } from './demo/storybookPolicyMigrationNav';
import { ref, markRaw, defineComponent, computed, watch, type PropType } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  FormField,
  CheckboxWithLabel,
  LinkText,
  DetailPageLayout,
  PageSaveBar,
  CopyButton,
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
import CircuitFileUpload from '@/components/CircuitFileUpload.vue';

import { menuItems, profileMenuItems } from './demo/policyMigrationMenuItems';

// ─── Types & Constants ─────────────────────────────────────────────

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

const INITIAL_POLICY_NAME = 'MDM Custom Configuration Profile';
const INITIAL_POLICY_NOTES = '';
const INITIAL_REAPPLY_ON_OS_UPDATE = true;

const ACCEPT_MOBILECONFIG = '.mobileconfig';

const POLICY_DESCRIPTION_LEAD =
  'Distribute custom MDM configuration profiles using this policy. Profiles can be exported from tools like Apple Configurator or ProfileCreator and then uploaded as .mobileconfig files. ';

const POLICY_BEHAVIOR =
  'Applies the provided .mobileconfig configuration to the device using the MDM protocol.';

const POLICY_ACTIVATION =
  'You must set up an Apple MDM Certificate before this policy takes effect.';

const SAMPLE_PROFILE_CONTENTS = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
  "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>PayloadContent</key>
    <array/>
    <key>PayloadDisplayName</key>
    <string>JumpCloud Custom Profile</string>
    <key>PayloadIdentifier</key>
    <string>com.jumpcloud.custom.profile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>00000000-0000-0000-0000-000000000001</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
  </dict>
</plist>`;

// ─── Page Component ────────────────────────────────────────────────

const MdmCustomConfigurationProfilePage = defineComponent({
  name: 'MdmCustomConfigurationProfilePage',
  props: {
    initialUploadedFileName: {
      type: null as unknown as PropType<string | null>,
      default: null,
    },
    initialProfileContents: {
      type: String,
      default: '',
    },
  },
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    LinkText,
    DetailPageLayout,
    PageSaveBar,
    CopyButton,
    TopBar,
    CircuitFileUpload,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvDivider: Divider,
    ShieldCheckIcon,
    ComputerDesktopIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
  },
  setup(props) {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/mdm-custom-configuration-profile');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const uploadedFileName = ref<string | null>(props.initialUploadedFileName);
    const profileContents = ref(props.initialProfileContents);
    const reapplyOnOsUpdate = ref(INITIAL_REAPPLY_ON_OS_UPDATE);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      uploadedFileName: props.initialUploadedFileName,
      profileContents: props.initialProfileContents,
      reapplyOnOsUpdate: INITIAL_REAPPLY_ON_OS_UPDATE,
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => {
      if (policyName.value !== baseline.value.policyName) return true;
      if (policyNotes.value !== baseline.value.policyNotes) return true;
      if (uploadedFileName.value !== baseline.value.uploadedFileName) return true;
      if (profileContents.value !== baseline.value.profileContents) return true;
      if (reapplyOnOsUpdate.value !== baseline.value.reapplyOnOsUpdate) return true;
      return false;
    });

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    const hasProfileContents = computed(() => profileContents.value.trim().length > 0);

    function handleFileContent(content: string) {
      profileContents.value = content;
    }

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      uploadedFileName.value = baseline.value.uploadedFileName;
      profileContents.value = baseline.value.profileContents;
      reapplyOnOsUpdate.value = baseline.value.reapplyOnOsUpdate;
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        uploadedFileName: uploadedFileName.value,
        profileContents: profileContents.value,
        reapplyOnOsUpdate: reapplyOnOsUpdate.value,
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
      uploadedFileName,
      profileContents,
      hasProfileContents,
      reapplyOnOsUpdate,
      ACCEPT_MOBILECONFIG,
      POLICY_DESCRIPTION_LEAD,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      handleFileContent,
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
          title="MDM Custom Configuration Profile"
          :icon="shieldIcon"
          :tabs="detailTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #subtitle>
            <div class="flex items-center">
              <PvTag value="All Devices" severity="accent-purple">
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
                      {{ POLICY_DESCRIPTION_LEAD }}<LinkText
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
                  <FormField
                    v-if="hasProfileContents"
                    label="Profile Contents"
                  >
                    <template #default>
                      <div class="flex flex-col gap-sm w-full rounded-sm border border-neutral-default_solid bg-neutral-surface p-md">
                        <div class="flex justify-end">
                          <CopyButton :text="profileContents" size="small" />
                        </div>
                        <pre class="text-body-sm text-neutral-base whitespace-pre-wrap m-0 max-h-60 overflow-auto">{{ profileContents }}</pre>
                      </div>
                    </template>
                  </FormField>

                  <FormField
                    label="Mobile Configuration File"
                    label-tooltip="Upload a .mobileconfig file exported from Apple Configurator or ProfileCreator."
                  >
                    <template #default>
                      <CircuitFileUpload
                        v-model="uploadedFileName"
                        :accept="ACCEPT_MOBILECONFIG"
                        button-label="Upload File"
                        replace-button-label="Replace File"
                        compact-when-selected
                        @file-content="handleFileContent"
                      />
                    </template>
                  </FormField>

                  <CheckboxWithLabel
                    v-model="reapplyOnOsUpdate"
                    inputId="reapply-on-os-update"
                    :binary="true"
                  >
                    <template #label>Re-apply policy on every OS update</template>
                  </CheckboxWithLabel>
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


export { MdmCustomConfigurationProfilePage };

const meta: Meta<typeof MdmCustomConfigurationProfilePage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/MDM Custom Configuration Profile",
  component: MdmCustomConfigurationProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof MdmCustomConfigurationProfilePage>;

export const Default: Story = {};

export const WithUploadedProfile: Story = {
  render: () => ({
    components: { MdmCustomConfigurationProfilePage },
    template: `
      <MdmCustomConfigurationProfilePage
        initial-uploaded-file-name="profile_jc.mobileconfig"
        :initial-profile-contents="sampleContents"
      />
    `,
    setup() {
      return { sampleContents: SAMPLE_PROFILE_CONTENTS };
    },
  }),
};
