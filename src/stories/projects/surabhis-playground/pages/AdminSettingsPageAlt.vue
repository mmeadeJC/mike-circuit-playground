<script setup lang="ts">
import { ref } from 'vue';
import {
  CollapsiblePanel,
  FormField,
  CheckboxWithLabel,
  ToggleSwitch,
  MessageNotification,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Textarea from 'primevue/textarea';
import Tag from 'primevue/tag';
import Divider from 'primevue/divider';
import {
  Cog6ToothIcon,
  PaintBrushIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  KeyIcon,
  ClockIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  UsersIcon,
  CodeBracketIcon,
  ArrowsRightLeftIcon,
  BellAlertIcon,
  EnvelopeIcon,
  InformationCircleIcon,
  ChevronRightIcon,
  UserGroupIcon,
  BellIcon,
} from '@heroicons/vue/24/outline';
import ConfigPageLayout from '@/components/layout/page-layouts/ConfigPageLayout.vue';

defineOptions({ name: 'AdminSettingsPageAlt' });

type SectionId = 'organization' | 'security' | 'users' | 'access' | 'notifications';

const activeSection = ref<SectionId>('organization');

const navSections: { value: SectionId; label: string; icon: object; description: string }[] = [
  { value: 'organization', label: 'Organization', icon: Cog6ToothIcon, description: 'Profile, branding & compliance' },
  { value: 'security', label: 'Security', icon: ShieldCheckIcon, description: 'MFA, passwords & sessions' },
  { value: 'users', label: 'Users & Provisioning', icon: UserGroupIcon, description: 'Lifecycle, self-service & SCIM' },
  { value: 'access', label: 'Access & Integrations', icon: KeyIcon, description: 'Roles, API & webhooks' },
  { value: 'notifications', label: 'Notifications', icon: BellIcon, description: 'Alerts & email preferences' },
];

// ─── Organization ─────────────────────────────────────────────────────────────
const orgName = ref('Acme Corporation');
const orgDisplayName = ref('Acme Corp');
const orgTimezone = ref('America/New_York');
const orgLanguage = ref('English (US)');
const supportUrl = ref('https://support.acme.com');
const brandLogoInEmails = ref(true);
const loginWelcomeMessage = ref('Welcome to Acme IT. Please sign in to continue.');
const auditLogRetention = ref('90 days');
const dataResidency = ref('United States');

// ─── Security ─────────────────────────────────────────────────────────────────
const mfaRequired = ref(true);
const mfaTotp = ref(true);
const mfaPush = ref(true);
const mfaSms = ref(false);
const mfaHardwareKey = ref(true);
const trustedDeviceDays = ref('30');
const pwMinLength = ref('12');
const pwExpireDays = ref('90');
const pwHistory = ref('10');
const pwLockoutAttempts = ref('10');
const pwLockoutDuration = ref('30 minutes');
const pwUppercase = ref(true);
const pwLowercase = ref(true);
const pwNumber = ref(true);
const pwSpecial = ref(true);
const sessionTimeout = ref('60');
const maxSessionDuration = ref('8 hours');
const concurrentSessions = ref(true);

// ─── Users & Provisioning ─────────────────────────────────────────────────────
const autoActivate = ref(true);
const selfServicePwReset = ref(true);
const selfServiceAttrEdit = ref(false);
const selfServiceResourceDiscovery = ref(true);
const userPortalWelcome = ref('Welcome to your JumpCloud User Portal. Access all your work apps and resources from one place.');
const autoSuspend = ref(true);
const gracePeriodDays = ref('7');
const autoDelete = ref(false);
const scimEnabled = ref(false);

// ─── Access & Integrations ────────────────────────────────────────────────────
const apiKeyExpiry = ref('Never');
const apiIpRestrict = ref(false);
const webhookUrl = ref('https://hooks.acme.com/jumpcloud');
const webhookUserCreated = ref(true);
const webhookUserSuspended = ref(true);
const webhookDeviceEnrolled = ref(false);
const webhookLoginFailed = ref(true);
const webhookPolicyViolation = ref(false);

// ─── Notifications ────────────────────────────────────────────────────────────
const alertFailedLogin = ref(true);
const alertFailedLoginThreshold = ref('5');
const alertNewDevice = ref(true);
const alertPolicyViolation = ref(true);
const alertSuspiciousActivity = ref(true);
const notifyWelcomeEmail = ref(true);
const notifyPasswordExpiry = ref(true);
const notifyPwExpiryDays = ref('7');
const notifyAccountSuspended = ref(true);
const billingAlerts = ref(true);
const maintenanceAlerts = ref(false);
const reportDelivery = ref(true);

// ─── Collapsed panel states ───────────────────────────────────────────────────
const collapsed = ref({
  orgProfile: false,
  branding: false,
  dataCompliance: true,
  mfa: false,
  passwordPolicy: false,
  sessions: true,
  userDefaults: false,
  selfService: false,
  lifecycle: true,
  scim: true,
  adminRoles: false,
  apiKeys: false,
  webhooks: true,
  securityAlerts: false,
  userNotifications: false,
  systemNotifications: true,
});

// ─── Select options ───────────────────────────────────────────────────────────
const timezoneOptions = ['America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles', 'UTC', 'Europe/London', 'Europe/Paris', 'Asia/Tokyo'];
const languageOptions = ['English (US)', 'English (UK)', 'Español', 'Français', 'Deutsch', '日本語'];
const retentionOptions = ['30 days', '60 days', '90 days', '180 days', '365 days', 'Unlimited'];
const dataResidencyOptions = ['United States', 'European Union', 'Australia'];
const trustedDeviceOptions = ['7', '14', '30', '60', '90'];
const pwLengthOptions = ['8', '10', '12', '14', '16', '20'];
const pwExpiryOptions = ['30', '60', '90', '120', '180', '365', 'Never'];
const pwHistoryOptions = ['3', '5', '10', '15', '20', '24'];
const lockoutAttemptsOptions = ['3', '5', '10', '15', 'Never'];
const lockoutDurationOptions = ['5 minutes', '15 minutes', '30 minutes', '1 hour', 'Until unlocked by admin'];
const sessionTimeoutOptions = ['15', '30', '60', '120', '240'];
const maxSessionOptions = ['4 hours', '8 hours', '12 hours', '24 hours', '7 days'];
const gracePeriodOptions = ['0', '3', '7', '14', '30'];
const apiExpiryOptions = ['30 days', '60 days', '90 days', '180 days', '365 days', 'Never'];
const loginThresholdOptions = ['3', '5', '10', '15', '20'];
const notifyDaysOptions = ['3', '5', '7', '10', '14', '30'];

const adminRoles = [
  { name: 'Help Desk', description: 'Reset passwords, unlock accounts, view users', admins: 4 },
  { name: 'Device Manager', description: 'Enroll and manage devices, run commands', admins: 2 },
  { name: 'Read Only', description: 'View all resources, no modification access', admins: 7 },
];
</script>

<template>
  <div class="flex-1 overflow-hidden bg-neutral-surface">
    <ConfigPageLayout class="w-full! h-full!" max-width="1280">
      <div class="flex gap-8 min-h-full">

        <!-- ── Left Navigation ──────────────────────────────────── -->
        <nav class="w-56 shrink-0 border-r border-neutral-default_solid pr-4 pt-2 pb-8">
          <div class="sticky top-0 flex flex-col gap-0.5">
            <p class="text-body-sm text-neutral-subtle px-3 pb-2 pt-1 font-semibold uppercase tracking-widest">
              Settings
            </p>
            <button
              v-for="section in navSections"
              :key="section.value"
              class="group flex items-start gap-2.5 w-full px-3 py-2.5 rounded-md text-left transition-colors cursor-pointer"
              :class="activeSection === section.value
                ? 'bg-neutral-surface_deep'
                : 'hover:bg-neutral-surface_deep'"
              @click="activeSection = section.value"
            >
              <component
                :is="section.icon"
                class="w-4 h-4 mt-0.5 shrink-0 transition-colors"
                :class="activeSection === section.value ? 'text-neutral-base' : 'text-neutral-subtle group-hover:text-neutral-base'"
              />
              <div class="flex flex-col gap-0">
                <span
                  class="transition-colors leading-5"
                  :class="activeSection === section.value
                    ? 'text-body-md-bold text-neutral-base'
                    : 'text-body-md text-neutral-subtle group-hover:text-neutral-base'"
                >
                  {{ section.label }}
                </span>
                <span
                  class="text-body-sm leading-4 transition-colors"
                  :class="activeSection === section.value ? 'text-neutral-subtle' : 'text-neutral-subtle/70'"
                >
                  {{ section.description }}
                </span>
              </div>
            </button>
          </div>
        </nav>

        <!-- ── Right Content ────────────────────────────────────── -->
        <div class="flex-1 min-w-0 flex flex-col gap-6 py-2 pb-10">

          <!-- ══ ORGANIZATION ══════════════════════════════════════ -->
          <template v-if="activeSection === 'organization'">
            <div class="flex flex-col gap-1 pb-2 border-b border-neutral-default_solid">
              <h2 class="text-heading-3 text-neutral-base">Organization</h2>
              <p class="text-body-md text-neutral-subtle">Core identity, branding, and data compliance settings.</p>
            </div>

            <CollapsiblePanel v-model:collapsed="collapsed.orgProfile" toggleable header="Organization Profile">
              <template #titleicon="p"><Cog6ToothIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Core identity information displayed across the admin console and user-facing surfaces.</p>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <FormField label="Organization Name">
                    <template #default="{ inputId }">
                      <InputText :id="inputId" v-model="orgName" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Display Name" help-text="Shown to users in the portal and system emails.">
                    <template #default="{ inputId }">
                      <InputText :id="inputId" v-model="orgDisplayName" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Default Timezone">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="orgTimezone" :options="timezoneOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Default Language">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="orgLanguage" :options="languageOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Custom Support URL" class="col-span-2" help-text="Linked in system emails and the User Portal help menu.">
                    <template #default="{ inputId }">
                      <InputText :id="inputId" v-model="supportUrl" placeholder="https://support.yourcompany.com" class="w-full" />
                    </template>
                  </FormField>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.branding" toggleable header="Branding &amp; Appearance">
              <template #titleicon="p"><PaintBrushIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Customize how JumpCloud appears to your end users in the portal and automated emails.</p>
                <ToggleSwitch v-model="brandLogoInEmails" label="Show organization logo in system emails" description="Your logo appears in welcome emails, password reset emails, and other automated notifications sent by JumpCloud." />
                <Divider />
                <FormField label="Login Page Welcome Message" help-text="Displayed on both the admin console and User Portal login pages.">
                  <template #default="{ inputId }">
                    <Textarea :id="inputId" v-model="loginWelcomeMessage" rows="3" class="w-full" />
                  </template>
                </FormField>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.dataCompliance" toggleable header="Data &amp; Compliance">
              <template #titleicon="p"><ShieldCheckIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Control where your data is stored and how long directory event logs are retained for audit purposes.</p>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <FormField label="Audit Log Retention" help-text="How long Directory Insights events are kept before being purged.">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="auditLogRetention" :options="retentionOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Data Residency Region">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="dataResidency" :options="dataResidencyOptions" class="w-full" disabled />
                    </template>
                  </FormField>
                </div>
                <MessageNotification severity="info" title="Data residency is set at account creation" detail="To change your data residency region, contact JumpCloud support." />
              </div>
            </CollapsiblePanel>
          </template>

          <!-- ══ SECURITY ══════════════════════════════════════════ -->
          <template v-if="activeSection === 'security'">
            <div class="flex flex-col gap-1 pb-2 border-b border-neutral-default_solid">
              <h2 class="text-heading-3 text-neutral-base">Security</h2>
              <p class="text-body-md text-neutral-subtle">Authentication methods, password rules, and session controls.</p>
            </div>

            <CollapsiblePanel v-model:collapsed="collapsed.mfa" toggleable header="Multi-Factor Authentication">
              <template #titleicon="p"><LockClosedIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Require MFA across your organization and control which authentication methods users can enroll in.</p>
                <ToggleSwitch v-model="mfaRequired" label="Require MFA for all users" description="Users will be prompted to enroll in MFA at their next login. Existing per-user exemptions remain in effect until removed." />
                <Divider />
                <div class="flex flex-col gap-2">
                  <span class="text-body-md-bold text-neutral-base">Allowed MFA Methods</span>
                  <p class="text-body-sm text-neutral-subtle mb-1">Users can only enroll in the methods enabled here. Disabling a method does not un-enroll existing users.</p>
                  <div class="flex flex-col gap-3">
                    <CheckboxWithLabel v-model="mfaTotp" binary>
                      <template #label>Authenticator App (TOTP)</template>
                      <template #description>Google Authenticator, Authy, Microsoft Authenticator, and similar apps</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel v-model="mfaPush" binary>
                      <template #label>Push Notification</template>
                      <template #description>JumpCloud Protect app for iOS and Android</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel v-model="mfaSms" binary>
                      <template #label>SMS Passcode</template>
                      <template #description>One-time codes via text message — not recommended due to SIM swap vulnerability</template>
                    </CheckboxWithLabel>
                    <CheckboxWithLabel v-model="mfaHardwareKey" binary>
                      <template #label>Hardware Security Key (FIDO2 / WebAuthn)</template>
                      <template #description>YubiKey, Google Titan Key, and any FIDO2-compatible hardware key</template>
                    </CheckboxWithLabel>
                  </div>
                </div>
                <Divider />
                <FormField label="Trusted Device Period (days)" help-text="How long a device stays trusted before users must re-authenticate with MFA.">
                  <template #default="{ inputId }">
                    <Select :id="inputId" v-model="trustedDeviceDays" :options="trustedDeviceOptions" class="w-full max-w-xs" />
                  </template>
                </FormField>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.passwordPolicy" toggleable header="Password Policy">
              <template #titleicon="p"><KeyIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Define complexity requirements, expiration rules, and lockout behavior for all managed user passwords.</p>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <FormField label="Minimum Password Length">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="pwMinLength" :options="pwLengthOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Password Expiration (days)" help-text="'Never' disables expiration.">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="pwExpireDays" :options="pwExpiryOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Password History" help-text="Number of previous passwords users cannot reuse.">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="pwHistory" :options="pwHistoryOptions" class="w-full" />
                    </template>
                  </FormField>
                </div>
                <Divider />
                <div class="flex flex-col gap-2">
                  <span class="text-body-md-bold text-neutral-base">Complexity Requirements</span>
                  <div class="grid grid-cols-2 gap-3 mt-1">
                    <CheckboxWithLabel v-model="pwUppercase" binary><template #label>Uppercase letter (A–Z)</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="pwLowercase" binary><template #label>Lowercase letter (a–z)</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="pwNumber" binary><template #label>Number (0–9)</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="pwSpecial" binary><template #label>Special character (!@#$...)</template></CheckboxWithLabel>
                  </div>
                </div>
                <Divider />
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <FormField label="Account Lockout After (attempts)" help-text="Failed logins before the account is temporarily locked.">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="pwLockoutAttempts" :options="lockoutAttemptsOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Lockout Duration">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="pwLockoutDuration" :options="lockoutDurationOptions" class="w-full" />
                    </template>
                  </FormField>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.sessions" toggleable header="Session Management">
              <template #titleicon="p"><ClockIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Control how long admin console and User Portal sessions stay active before requiring re-authentication.</p>
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <FormField label="Idle Session Timeout (minutes)" help-text="Logs users out after this period of inactivity.">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="sessionTimeout" :options="sessionTimeoutOptions" class="w-full" />
                    </template>
                  </FormField>
                  <FormField label="Maximum Session Duration" help-text="Absolute maximum regardless of activity.">
                    <template #default="{ inputId }">
                      <Select :id="inputId" v-model="maxSessionDuration" :options="maxSessionOptions" class="w-full" />
                    </template>
                  </FormField>
                </div>
                <ToggleSwitch v-model="concurrentSessions" label="Allow concurrent sessions" description="When disabled, signing in on a new device will automatically invalidate the previous active session." />
              </div>
            </CollapsiblePanel>
          </template>

          <!-- ══ USERS & PROVISIONING ══════════════════════════════ -->
          <template v-if="activeSection === 'users'">
            <div class="flex flex-col gap-1 pb-2 border-b border-neutral-default_solid">
              <h2 class="text-heading-3 text-neutral-base">Users &amp; Provisioning</h2>
              <p class="text-body-md text-neutral-subtle">User lifecycle automation, self-service capabilities, and SCIM provisioning.</p>
            </div>

            <CollapsiblePanel v-model:collapsed="collapsed.userDefaults" toggleable header="User Defaults">
              <template #titleicon="p"><UserIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-4">
                <p class="text-body-md text-neutral-subtle">Configure default behaviors applied when new users are created or synced into JumpCloud.</p>
                <ToggleSwitch v-model="autoActivate" label="Auto-activate users synced from directories" description="Users imported via Active Directory, LDAP, or cloud directory integrations are activated immediately without requiring manual admin approval." />
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.selfService" toggleable header="Self-Service Options">
              <template #titleicon="p"><WrenchScrewdriverIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Control what end users can manage for themselves in the User Portal without admin involvement.</p>
                <div class="flex flex-col gap-4">
                  <ToggleSwitch v-model="selfServicePwReset" label="Allow users to reset their own password" description="A 'Forgot password' link appears on the login page. Users can reset via email verification or enrolled MFA." />
                  <ToggleSwitch v-model="selfServiceAttrEdit" label="Allow users to edit their profile attributes" description="Users can update display name, phone number, and other non-provisioned attributes from the portal." />
                  <ToggleSwitch v-model="selfServiceResourceDiscovery" label="Show resource discovery in User Portal" description="Users see a catalog of applications and systems they can request access to directly from the portal." />
                </div>
                <Divider />
                <FormField label="User Portal Welcome Message" help-text="Shown on the User Portal home screen after users sign in.">
                  <template #default="{ inputId }">
                    <Textarea :id="inputId" v-model="userPortalWelcome" rows="3" class="w-full" />
                  </template>
                </FormField>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.lifecycle" toggleable header="User Lifecycle">
              <template #titleicon="p"><ArrowPathIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Automate user state transitions based on directory sync events to reduce off-boarding lag and admin overhead.</p>
                <div class="flex flex-col gap-4">
                  <ToggleSwitch v-model="autoSuspend" label="Auto-suspend users removed from a bound directory" description="When a user is removed from a synced directory, their JumpCloud account is automatically suspended." />
                  <div v-if="autoSuspend" class="ml-8">
                    <FormField label="Grace Period Before Suspension" help-text="Days to wait after directory removal before suspending. Use '0' for immediate suspension.">
                      <template #default="{ inputId }">
                        <Select :id="inputId" v-model="gracePeriodDays" :options="gracePeriodOptions" class="w-full max-w-xs" />
                      </template>
                    </FormField>
                  </div>
                  <ToggleSwitch v-model="autoDelete" label="Auto-delete users after extended suspension" description="Permanently removes accounts suspended for more than 90 days. This action cannot be undone." />
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.scim" toggleable header="SCIM Provisioning">
              <template #titleicon="p"><CloudArrowUpIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Enable SCIM 2.0 to allow an external identity provider to automatically provision and deprovision users.</p>
                <ToggleSwitch v-model="scimEnabled" label="Enable SCIM provisioning" description="Generates a SCIM endpoint URL and bearer token for configuration in your IdP." />
                <template v-if="scimEnabled">
                  <Divider />
                  <div class="flex flex-col gap-4">
                    <FormField label="SCIM Base URL">
                      <template #default="{ inputId }">
                        <InputText :id="inputId" value="https://console.jumpcloud.com/api/v2/scim" readonly class="w-full font-mono" />
                      </template>
                    </FormField>
                    <FormField label="Bearer Token" help-text="Store this token securely — it will not be shown again after you leave this page.">
                      <template #default="{ inputId }">
                        <div class="flex gap-2">
                          <InputText :id="inputId" value="jc_scim_••••••••••••••••••••••••" readonly class="flex-1 font-mono" />
                          <Button label="Regenerate" severity="secondary" variant="outlined" size="small" />
                        </div>
                      </template>
                    </FormField>
                  </div>
                </template>
                <MessageNotification v-else severity="info" title="SCIM is disabled" detail="Enable SCIM above to receive an endpoint URL and bearer token to configure in your identity provider." />
              </div>
            </CollapsiblePanel>
          </template>

          <!-- ══ ACCESS & INTEGRATIONS ════════════════════════════ -->
          <template v-if="activeSection === 'access'">
            <div class="flex flex-col gap-1 pb-2 border-b border-neutral-default_solid">
              <h2 class="text-heading-3 text-neutral-base">Access &amp; Integrations</h2>
              <p class="text-body-md text-neutral-subtle">Admin roles, API key policies, and third-party webhook integrations.</p>
            </div>

            <CollapsiblePanel v-model:collapsed="collapsed.adminRoles" toggleable header="Admin Roles">
              <template #titleicon="p"><UsersIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Manage Roles" severity="secondary" variant="outlined" size="small" /></template>
              <div class="flex flex-col gap-4">
                <p class="text-body-md text-neutral-subtle">Custom admin roles let you delegate specific capabilities without granting full admin access.</p>
                <div class="flex flex-col divide-y divide-neutral-default_solid">
                  <div v-for="role in adminRoles" :key="role.name" class="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                    <div class="flex flex-col gap-0.5">
                      <span class="text-body-md-bold text-neutral-base">{{ role.name }}</span>
                      <span class="text-body-sm text-neutral-subtle">{{ role.description }}</span>
                    </div>
                    <Tag :value="`${role.admins} admins`" severity="secondary" />
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.apiKeys" toggleable header="API Access">
              <template #titleicon="p"><CodeBracketIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Control how API keys are issued and used across your organization.</p>
                <FormField label="Maximum API Key Lifetime" help-text="Organization-level cap. Individual keys may be set to expire sooner but never later.">
                  <template #default="{ inputId }">
                    <Select :id="inputId" v-model="apiKeyExpiry" :options="apiExpiryOptions" class="w-full max-w-xs" />
                  </template>
                </FormField>
                <ToggleSwitch v-model="apiIpRestrict" label="Restrict API key usage to allowlisted IP ranges" description="API calls from IPs outside the allowlist will be rejected regardless of key validity." />
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.webhooks" toggleable header="Webhooks">
              <template #titleicon="p"><ArrowsRightLeftIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Send real-time JSON payloads to an external HTTPS endpoint when directory events occur.</p>
                <FormField label="Webhook Endpoint URL" help-text="JumpCloud will POST a signed JSON payload for each subscribed event.">
                  <template #default="{ inputId }">
                    <InputText :id="inputId" v-model="webhookUrl" placeholder="https://hooks.yourcompany.com/jumpcloud" class="w-full" />
                  </template>
                </FormField>
                <div class="flex flex-col gap-2">
                  <span class="text-body-md-bold text-neutral-base">Subscribed Events</span>
                  <div class="flex flex-col gap-3 mt-1">
                    <CheckboxWithLabel v-model="webhookUserCreated" binary><template #label>User created</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="webhookUserSuspended" binary><template #label>User suspended or deleted</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="webhookDeviceEnrolled" binary><template #label>Device enrolled</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="webhookLoginFailed" binary><template #label>Failed login threshold exceeded</template></CheckboxWithLabel>
                    <CheckboxWithLabel v-model="webhookPolicyViolation" binary><template #label>Conditional access policy violation</template></CheckboxWithLabel>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>
          </template>

          <!-- ══ NOTIFICATIONS ════════════════════════════════════ -->
          <template v-if="activeSection === 'notifications'">
            <div class="flex flex-col gap-1 pb-2 border-b border-neutral-default_solid">
              <h2 class="text-heading-3 text-neutral-base">Notifications</h2>
              <p class="text-body-md text-neutral-subtle">Security alerts, user lifecycle emails, and system notification preferences.</p>
            </div>

            <CollapsiblePanel v-model:collapsed="collapsed.securityAlerts" toggleable header="Security Alerts">
              <template #titleicon="p"><BellAlertIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Receive email notifications when security-related events are detected. Alerts go to all organization admins by default.</p>
                <div class="flex flex-col gap-5">
                  <div class="flex items-start gap-4">
                    <div class="flex-1">
                      <ToggleSwitch v-model="alertFailedLogin" label="Repeated failed login attempts" description="Alert when a user exceeds the configured failure threshold within a short window." />
                    </div>
                    <div v-if="alertFailedLogin" class="shrink-0 w-40 mt-0.5">
                      <FormField label="Threshold">
                        <template #default="{ inputId }">
                          <Select :id="inputId" v-model="alertFailedLoginThreshold" :options="loginThresholdOptions" class="w-full" />
                        </template>
                      </FormField>
                    </div>
                  </div>
                  <ToggleSwitch v-model="alertNewDevice" label="New device enrolled" description="Alert when a device is enrolled for the first time in your organization." />
                  <ToggleSwitch v-model="alertPolicyViolation" label="Conditional access policy violation" description="Alert when a user or device fails a conditional access policy evaluation." />
                  <ToggleSwitch v-model="alertSuspiciousActivity" label="Suspicious activity detected" description="Alert on anomalous login patterns, unusual geolocations, or impossible travel events." />
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.userNotifications" toggleable header="User Notifications">
              <template #titleicon="p"><EnvelopeIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-subtle">Configure automated emails sent to end users during account lifecycle events.</p>
                <div class="flex flex-col gap-5">
                  <ToggleSwitch v-model="notifyWelcomeEmail" label="Send welcome email on account creation" description="Includes sign-in instructions and a link for users to set their initial password." />
                  <ToggleSwitch v-model="notifyAccountSuspended" label="Notify users when their account is suspended" description="Sends a notification email so users are aware their access has been revoked." />
                  <div class="flex items-start gap-4">
                    <div class="flex-1">
                      <ToggleSwitch v-model="notifyPasswordExpiry" label="Warn users before password expires" description="Sends a reminder email ahead of the password expiration date." />
                    </div>
                    <div v-if="notifyPasswordExpiry" class="shrink-0 w-52 mt-0.5">
                      <FormField label="Days before expiry">
                        <template #default="{ inputId }">
                          <Select :id="inputId" v-model="notifyPwExpiryDays" :options="notifyDaysOptions" class="w-full" />
                        </template>
                      </FormField>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsiblePanel>

            <CollapsiblePanel v-model:collapsed="collapsed.systemNotifications" toggleable header="System &amp; Billing">
              <template #titleicon="p"><InformationCircleIcon :class="p.class" /></template>
              <template #toggleicon="p"><ChevronRightIcon :class="p.class" /></template>
              <template #actions><Button label="Save changes" size="small" /></template>
              <div class="flex flex-col gap-4">
                <p class="text-body-md text-neutral-subtle">Manage admin-level notifications about your subscription, scheduled reports, and platform maintenance.</p>
                <ToggleSwitch v-model="billingAlerts" label="Billing and subscription alerts" description="Receive emails about upcoming renewals, failed payments, and usage limit warnings." />
                <ToggleSwitch v-model="reportDelivery" label="Scheduled report delivery" description="Automatically receive configured Directory Insights reports on their scheduled cadence." />
                <ToggleSwitch v-model="maintenanceAlerts" label="Maintenance window notifications" description="Receive advance notice of planned JumpCloud maintenance windows that may affect availability." />
              </div>
            </CollapsiblePanel>
          </template>

        </div>
      </div>
    </ConfigPageLayout>
  </div>
</template>
