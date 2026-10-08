import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { computed, defineComponent, markRaw, reactive, ref } from 'vue';
import {
  AppNavigation,
  PageHeader,
  FormField,
  ToggleSwitch,
  MessageNotification,
  PageSaveBar,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/vue/24/outline';
import { DeviceManagementIcon, AccessIcon } from '@jumpcloud/icons';
import AdminTopBar from '@/components/AdminTopBar.vue';
import crest from './afc-richmond-crest.png';

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alerts', leftIcon: markRaw(BellIcon), count: 25 },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
    ],
  },
  {
    label: 'Device Management',
    leftIcon: markRaw(DeviceManagementIcon),
    items: [{ label: 'Devices' }, { label: 'Commands', leftIcon: markRaw(CommandLineIcon) }],
  },
  { label: 'Access', leftIcon: markRaw(AccessIcon), items: [{ label: 'SSO Applications' }] },
  { label: 'Security', leftIcon: markRaw(ShieldCheckIcon), items: [{ label: 'MFA Configurations' }] },
  { label: 'Insights', leftIcon: markRaw(ChartBarSquareIcon), items: [{ label: 'Reports' }] },
  { label: 'Settings', leftIcon: markRaw(Cog6ToothIcon) },
];

const profileMenuItems = [
  {
    label: 'Mike Meade',
    itemType: 'profile_compact',
    initials: 'MM',
    name: 'Mike Meade',
    items: [
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
    ],
  },
];

const settingsTabs = [
  { label: 'Organization Profile', value: 'org' },
  { label: 'Notification Channels', value: 'notifications' },
  { label: 'Security', value: 'security' },
  { label: 'Connectors', value: 'connectors' },
  { label: 'Administrators', value: 'admins' },
  { label: 'Service Accounts', value: 'service-accounts' },
  { label: 'Customize Email', value: 'email' },
  { label: 'JumpCloud AI', value: 'ai' },
  { label: 'Features', value: 'features' },
  { label: 'Automation Variables', value: 'variables' },
];

interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  message: string;
  defaultCta: string;
  footer: string;
  /** When true the button is the point of the email, so it can't be removed. */
  ctaRequired: boolean;
  /** Message line that points at the button; removed from the email when the button is off. */
  ctaLine: string;
}

const templates: EmailTemplate[] = [
  {
    id: 'pw-expiration',
    name: 'Password Expiration Warning',
    description: 'This email encourages users to reset their password before an upcoming expiration date.',
    subject: 'JumpCloud Password Expiration Warning',
    message:
      'Your JumpCloud account password for email #{user_email} will expire soon. Expiration date: #{expiration_day}\nAfter this you could be denied access to critical resources.\nClick Reset Password to log in to the User Portal and update your password now.',
    defaultCta: 'Reset Password',
    footer: 'If you have questions about this email, contact your JumpCloud administrator #{admin_email_link}.',
    ctaRequired: false,
    ctaLine: 'Click Reset Password to log in to the User Portal and update your password now.',
  },
  {
    id: 'account-activation',
    name: 'Account Activation',
    description: 'This email lets new users activate their account and set an initial password.',
    subject: 'Activate your JumpCloud account',
    message: 'Welcome to JumpCloud! Your administrator created an account for #{user_email}.\nActivate it to get started.',
    defaultCta: 'Activate Account',
    footer: 'If you did not expect this email, contact #{admin_email_link}.',
    ctaRequired: true,
    ctaLine: 'Activate it to get started.',
  },
];

const CustomizeEmailCta = defineComponent({
  name: 'CustomizeEmailCta',
  components: {
    AppNavigation,
    PageHeader,
    AdminTopBar,
    FormField,
    ToggleSwitch,
    MessageNotification,
    PageSaveBar,
    PvButton: Button,
    InputText,
    Textarea,
    Select,
  },
  props: {
    initialShowCta: { type: Boolean, default: true },
  },
  setup(props) {
    const activeTab = ref('email');
    const templateId = ref(templates[0].id);
    const template = computed(() => templates.find((t) => t.id === templateId.value)!);

    const stripLine = (message: string, line: string) =>
      message.split('\n').filter((l) => l.trim() !== line).join('\n');
    const makeState = (t: EmailTemplate) => {
      const showCta = t.ctaRequired ? true : props.initialShowCta;
      return {
        subject: t.subject,
        message: showCta ? t.message : stripLine(t.message, t.ctaLine),
        ctaLabel: t.defaultCta,
        footer: t.footer,
        showCta,
      };
    };
    const drafts = reactive<Record<string, ReturnType<typeof makeState>>>(
      Object.fromEntries(templates.map((t) => [t.id, makeState(t)])),
    );
    const baselines = reactive<Record<string, string>>(
      Object.fromEntries(templates.map((t) => [t.id, JSON.stringify(makeState(t))])),
    );

    const form = computed(() => drafts[templateId.value]);
    const isDirty = computed(() => JSON.stringify(form.value) !== baselines[templateId.value]);
    const saved = ref(false);
    const showPreview = ref(true);

    const messageMentionsButton = computed(() =>
      form.value.message.toLowerCase().includes(form.value.ctaLabel.trim().toLowerCase()) &&
      form.value.ctaLabel.trim().length > 0,
    );

    // Remembers where the CTA line sat so turning the button back on restores it in place.
    const removedLines: Record<string, { line: string; index: number }> = {};
    function setShowCta(on: boolean) {
      const f = form.value;
      const t = template.value;
      f.showCta = on;
      const lines = f.message.split('\n');
      if (!on) {
        const index = lines.findIndex((l) => l.trim() === t.ctaLine);
        if (index === -1) return;
        removedLines[t.id] = { line: lines[index], index };
        lines.splice(index, 1);
      } else {
        if (lines.some((l) => l.trim() === t.ctaLine)) return;
        const { line, index } = removedLines[t.id] ?? { line: t.ctaLine, index: lines.length };
        lines.splice(Math.min(index, lines.length), 0, line);
      }
      f.message = lines.join('\n');
    }

    function save() {
      baselines[templateId.value] = JSON.stringify(form.value);
      saved.value = true;
      setTimeout(() => (saved.value = false), 2000);
    }
    function discard() {
      Object.assign(drafts[templateId.value], JSON.parse(baselines[templateId.value]));
    }
    function resetToDefault() {
      Object.assign(drafts[templateId.value], makeState(template.value));
    }

    const messageLines = computed(() => form.value.message.split('\n'));
    const splitTokens = (text: string) =>
      text
        .split(/(#\{[^}]+\})/)
        .filter(Boolean)
        .map((t) => ({ text: t, token: /^#\{[^}]+\}$/.test(t) }));

    return {
      menuItems,
      profileMenuItems,
      settingsTabs,
      templates,
      activeTab,
      templateId,
      template,
      form,
      isDirty,
      saved,
      showPreview,
      messageMentionsButton,
      messageLines,
      splitTokens,
      crest,
      save,
      setShowCta,
      discard,
      resetToDefault,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="settings"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-auto bg-neutral-surface_deep relative">
        <AdminTopBar />
        <PageHeader title="Settings" :tabs="settingsTabs" v-model:activeTab="activeTab" class="shrink-0" />

        <div class="p-6 flex flex-col gap-4">
          <MessageNotification
            severity="info"
            detail="Email Customization is a paid and opt-in feature."
          />

          <div class="grid grid-cols-2 gap-6 items-start">
            <!-- Editor -->
            <div class="bg-neutral-base border border-neutral-default_solid rounded-md p-6 flex flex-col gap-6">
              <section class="flex flex-col gap-3">
                <h2 style="font-size:16px; font-weight:600; color:#1e2733; margin:0;">Choose a template</h2>
                <FormField label="Email Template">
                  <template #default="{ inputId }">
                    <Select
                      :id="inputId"
                      v-model="templateId"
                      :options="templates"
                      option-label="name"
                      option-value="id"
                      class="w-full!"
                    />
                  </template>
                </FormField>
                <p class="text-body-sm text-neutral-subtle">{{ template.description }}</p>
              </section>

              <section class="flex flex-col gap-4">
                <h2 style="font-size:16px; font-weight:600; color:#1e2733; margin:0;">Email Content</h2>

                <FormField label="Subject" required>
                  <template #default="{ inputId }">
                    <InputText :id="inputId" v-model="form.subject" class="w-full" />
                  </template>
                </FormField>

                <FormField label="Message" required>
                  <template #default="{ inputId }">
                    <Textarea :id="inputId" v-model="form.message" rows="5" class="w-full" />
                  </template>
                </FormField>

                <!-- Call to action: toggle + progressive disclosure -->
                <div class="flex flex-col gap-3 rounded-md border border-neutral-default_solid p-4">
                  <div class="flex items-start justify-between gap-4">
                    <div class="flex flex-col gap-1 min-w-0">
                      <span class="text-body-md text-neutral-base">Show call-to-action button</span>
                      <span class="text-body-sm text-neutral-subtle">
                        <template v-if="template.ctaRequired">
                          This button is required for the {{ template.name }} email and can't be removed.
                        </template>
                        <template v-else>
                          Include a button that links recipients to the next step.
                        </template>
                      </span>
                    </div>
                    <ToggleSwitch
                      
                      :model-value="form.showCta"
                      @update:model-value="setShowCta"
                      :disabled="template.ctaRequired"
                      aria-label="Show call-to-action button"
                    />
                  </div>

                  <FormField v-if="form.showCta" label="Button Call to Action" required>
                    <template #default="{ inputId }">
                      <InputText :id="inputId" v-model="form.ctaLabel" class="w-full" />
                    </template>
                  </FormField>

                  <MessageNotification
                    v-else-if="messageMentionsButton"
                    severity="warning"
                    detail="Your message still refers to the button. Review it before saving."
                  />
                </div>

                <FormField label="Footer" required>
                  <template #default="{ inputId }">
                    <Textarea :id="inputId" v-model="form.footer" rows="2" class="w-full" />
                  </template>
                </FormField>

                <div>
                  <PvButton label="Reset To Default Content" severity="secondary" variant="outlined" size="small" @click="resetToDefault" />
                </div>
              </section>
            </div>

            <!-- Preview: sizes and colors measured from the live Customize Email preview (email markup, so inline) -->
            <div class="flex flex-col" style="background:#f7f7fb; padding:0 0 24px;">
              <div class="flex items-center justify-between" style="height:50px;">
                <h2 style="font-size:16px; font-weight:600; color:#1e2733; margin:0;">Template Preview</h2>
                <ToggleSwitch v-model="showPreview" label="show preview" />
              </div>
              <div v-if="showPreview" class="flex flex-col" style="color:#1e2733; font-size:13px; line-height:19.5px;">
                <div style="background:#fff; height:48px; padding:0 15px; display:flex; align-items:center;">
                  <span><strong>Subject:</strong>&nbsp; {{ form.subject }}</span>
                </div>
                <div style="margin-top:15px;">
                  <div style="background:#e5e9ea; height:30px; padding:0 15px; display:flex; align-items:center;">
                    <span><strong>Title:</strong>&nbsp; {{ form.subject }}</span>
                  </div>
                  <div style="background:#f2f3f4; height:26px; padding:0 15px; display:flex; align-items:center;">
                    <span>This {{ form.subject }} was generated by your Admin.</span>
                  </div>
                </div>
                <div style="background:#fff; padding:30px 15px 30px;">
                  <img :src="crest" alt="" style="display:block; width:116px; height:auto;" />
                  <h3 style="font-size:18px; line-height:24px; font-weight:600; margin:36px 0 0;">{{ form.subject }}</h3>
                  <div style="margin-top:18px;">
                    <p v-for="(line, i) in messageLines" :key="i" style="margin:0 0 17px;">
                      <template v-for="(seg, j) in splitTokens(line)" :key="j"><span v-if="seg.token" style="border-bottom:2px dotted #4fbdb8;">{{ seg.text }}</span><template v-else>{{ seg.text }}</template></template>
                    </p>
                  </div>
                  <div v-if="form.showCta && form.ctaLabel.trim()" data-testid="preview-cta" style="margin-top:18px;">
                    <span style="display:inline-block; background:#5bbfba; color:#1e2733; font-weight:600; padding:0 18px; height:37px; line-height:37px; border-radius:3px;">{{ form.ctaLabel }}</span>
                  </div>
                  <p style="margin:36px 0 0; line-height:18px;">
                    <template v-for="(seg, j) in splitTokens(form.footer)" :key="j"><span v-if="seg.token" style="border-bottom:2px dotted #4fbdb8;">{{ seg.text }}</span><template v-else>{{ seg.text }}</template></template>
                  </p>
                  <div style="margin-top:37px; height:31px; background:#3b4350; color:#7d8590; font-size:11px; font-weight:600; display:flex; align-items:center; justify-content:center;">Your email disclaimer can go here.</div>
                </div>
                <div style="background:#151b2b; color:#fff; height:70px; display:flex; align-items:center; justify-content:center; font-size:11px;">Powered by JumpCloud</div>
              </div>
            </div>
          </div>
        </div>

        <PageSaveBar
          :visible="isDirty"
          :saved="saved"
          message="You have unsaved changes"
          @save="save"
          @discard="discard"
        />
      </div>
    </div>
  `,
});

const meta: Meta<typeof CustomizeEmailCta> = {
  title: "Projects/Mike's Playground/Settings/Customize Email - CTA Toggle",
  component: CustomizeEmailCta,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof CustomizeEmailCta>;

export const ButtonShown: Story = { args: { initialShowCta: true } };
export const ButtonRemoved: Story = { args: { initialShowCta: false } };
