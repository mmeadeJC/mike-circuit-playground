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
  CheckCircleIcon,
  XCircleIcon,
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

type PasswordCreationMethod = 'auto-generate' | 'specify';

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

const INITIAL_POLICY_NAME = 'Recovery Lock';
const INITIAL_POLICY_NOTES = '';
const INITIAL_PASSWORD_CREATION_METHOD: PasswordCreationMethod = 'auto-generate';
const INITIAL_AUTOMATICALLY_ROTATE_PASSWORD = true;
const INITIAL_ROTATION_INTERVAL_DAYS = '90';

const POLICY_DESCRIPTION_LEAD =
  'Securely restrict recovery on Mac computers with Apple silicon by requiring a password. This enhances physical security by preventing unauthorized access to macOS Recovery, which includes items such as the startup options menu and security settings. ';

const POLICY_DESCRIPTION_NOTE =
  ' Note: Only 1 Recovery Lock policy is allowed per organization.';

const POLICY_BEHAVIOR =
  'When this policy is applied, a Recovery Lock password is set on supported Mac computers. Passwords can be automatically generated or specified, and are stored in JumpCloud for retrieval from the device details page.';

const POLICY_ACTIVATION =
  'The policy takes effect when successfully applied to enrolled, supervised devices.';

const MINIMUM_SUPPORTED_VERSION = 'macOS 11.5 or later';

const ENROLLMENT_TYPES: EnrollmentType[] = [
  { label: 'User-Enrolled Devices', supported: false },
  { label: 'Device-Enrolled Devices', supported: true },
  { label: 'Auto-Enrolled Devices', supported: true },
];

// ─── Page Component ────────────────────────────────────────────────

const RecoveryLockPage = defineComponent({
  name: 'RecoveryLockPage',
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
    ArrowTopRightOnSquareIcon,
    CheckCircleIcon,
    XCircleIcon,
  },
  setup() {
    const { goBack, backButtonLabel } = usePolicyMigrationBackNavigation('/recovery-lock');

    const activeTab = ref('details');
    const policyName = ref(INITIAL_POLICY_NAME);
    const policyNotes = ref(INITIAL_POLICY_NOTES);
    const passwordCreationMethod = ref<PasswordCreationMethod>(INITIAL_PASSWORD_CREATION_METHOD);
    const automaticallyRotatePassword = ref(INITIAL_AUTOMATICALLY_ROTATE_PASSWORD);
    const rotationIntervalDays = ref(INITIAL_ROTATION_INTERVAL_DAYS);

    const baseline = ref({
      policyName: INITIAL_POLICY_NAME,
      policyNotes: INITIAL_POLICY_NOTES,
      passwordCreationMethod: INITIAL_PASSWORD_CREATION_METHOD,
      automaticallyRotatePassword: INITIAL_AUTOMATICALLY_ROTATE_PASSWORD,
      rotationIntervalDays: INITIAL_ROTATION_INTERVAL_DAYS,
    });

    const isSaving = ref(false);
    const showSavedConfirmation = ref(false);

    const isDirty = computed(() => (
      policyName.value !== baseline.value.policyName
      || policyNotes.value !== baseline.value.policyNotes
      || passwordCreationMethod.value !== baseline.value.passwordCreationMethod
      || automaticallyRotatePassword.value !== baseline.value.automaticallyRotatePassword
      || rotationIntervalDays.value !== baseline.value.rotationIntervalDays
    ));

    watch(isDirty, (dirty) => {
      if (dirty) showSavedConfirmation.value = false;
    });

    const activeTabLabel = computed(
      () => detailTabs.find((tab) => tab.value === activeTab.value)?.label ?? 'Details',
    );

    function handleDiscard() {
      policyName.value = baseline.value.policyName;
      policyNotes.value = baseline.value.policyNotes;
      passwordCreationMethod.value = baseline.value.passwordCreationMethod;
      automaticallyRotatePassword.value = baseline.value.automaticallyRotatePassword;
      rotationIntervalDays.value = baseline.value.rotationIntervalDays;
      showSavedConfirmation.value = false;
    }

    async function handleSave() {
      isSaving.value = true;
      await new Promise((resolve) => setTimeout(resolve, 600));
      baseline.value = {
        policyName: policyName.value,
        policyNotes: policyNotes.value,
        passwordCreationMethod: passwordCreationMethod.value,
        automaticallyRotatePassword: automaticallyRotatePassword.value,
        rotationIntervalDays: rotationIntervalDays.value,
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
      passwordCreationMethod,
      automaticallyRotatePassword,
      rotationIntervalDays,
      POLICY_DESCRIPTION_LEAD,
      POLICY_DESCRIPTION_NOTE,
      POLICY_BEHAVIOR,
      POLICY_ACTIVATION,
      MINIMUM_SUPPORTED_VERSION,
      ENROLLMENT_TYPES,
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
          title="Recovery Lock"
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
                      {{ POLICY_DESCRIPTION_NOTE }}
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
                  <FormField label="Password Creation Method">
                    <template #default>
                      <div class="flex flex-col gap-md">
                        <RadioButtonWithLabel
                          v-model="passwordCreationMethod"
                          value="auto-generate"
                          name="password-creation-method"
                          inputId="password-creation-auto-generate"
                        >
                          <template #label>Automatically generate a unique password</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel
                          v-model="passwordCreationMethod"
                          value="specify"
                          name="password-creation-method"
                          inputId="password-creation-specify"
                        >
                          <template #label>Specify a password</template>
                        </RadioButtonWithLabel>
                      </div>
                    </template>
                  </FormField>

                  <CheckboxWithLabel
                    v-model="automaticallyRotatePassword"
                    inputId="automatically-rotate-password"
                    :binary="true"
                  >
                    <template #label>Automatically rotate password</template>
                  </CheckboxWithLabel>

                  <div
                    v-if="automaticallyRotatePassword"
                    class="flex flex-wrap items-center gap-sm pl-7"
                  >
                    <span class="text-body-md text-neutral-base">Rotate password every</span>
                    <PvInputText
                      id="rotation-interval-days"
                      v-model="rotationIntervalDays"
                      class="w-20"
                      aria-label="Rotation interval in days"
                    />
                    <span class="text-body-md text-neutral-base">days</span>
                  </div>
                </div>
              </CollapsiblePanel>

              <div class="h-36 shrink-0" aria-hidden="true" />
            </div>

            <template #sidebar>
              <div class="flex flex-col gap-md">
                <MessageNotification
                  severity="info"
                  title="Requires Supervision"
                  detail="This policy requires devices to be supervised. JumpCloud MDM enrollment is required."
                >
                  <template #button>
                    <LinkText label="Learn more" href="#" target="_blank" />
                  </template>
                </MessageNotification>

                <div class="flex flex-col gap-md">
                  <h3 class="text-heading-3 text-neutral-base">macOS</h3>
                  <div class="flex flex-col gap-xs w-full">
                    <span class="text-body-md-semi-bold text-neutral-base block w-full">Minimum Supported Version</span>
                    <p class="text-body-md text-neutral-base m-0 w-full">{{ MINIMUM_SUPPORTED_VERSION }}</p>
                  </div>
                  <div class="flex flex-col gap-sm w-full">
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
          saveLabel="Save Policy"
          discardLabel="Cancel"
          @save="handleSave"
          @discard="handleDiscard"
        />
      </div>
    </div>
  `,
});


export { RecoveryLockPage };

const meta: Meta<typeof RecoveryLockPage> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Canvas/Recovery Lock",
  component: RecoveryLockPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof RecoveryLockPage>;

export const Default: Story = {};
