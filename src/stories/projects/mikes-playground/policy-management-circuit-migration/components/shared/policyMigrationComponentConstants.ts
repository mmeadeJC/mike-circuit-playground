import { markRaw } from 'vue';
import { ShieldCheckIcon, ComputerDesktopIcon } from '@heroicons/vue/24/outline';

export const policyDetailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Policy Groups', value: 'policy-groups' },
  { label: 'Device Groups', value: 'device-groups' },
  { label: 'Devices', value: 'devices' },
];

export const policyHeaderSubtitle =
  'Configure the policy below, then select the target groups or devices to apply it.';

export const policyShieldIcon = markRaw(ShieldCheckIcon);

export const samplePolicyBehavior =
  'Once the policy is successfully enabled for the system, a Recovery Key will be displayed for that respective System under System Details.';

export const samplePolicyActivation =
  'A user will need to logout and log back in for the policy to take effect.';

export const sampleSidebarMessageTitle = 'Before you begin';

export const sampleSidebarMessageDetail =
  'Review the policy behavior and activation requirements before assigning this policy to device groups.';

export { ComputerDesktopIcon };

export const certificateTypeOptions = [
  { label: 'ROOT', value: 'ROOT' },
  { label: 'CA', value: 'CA' },
  { label: 'MY', value: 'MY' },
  { label: 'SYSTEM', value: 'SYSTEM' },
];

export const targetOsVersionOptions = [
  { label: 'macOS 14 Sonoma', value: '14' },
  { label: 'macOS 15 Sequoia', value: '15' },
];

export const systemUpdateModeOptions = [
  { label: 'Always', value: 'always' },
  { label: 'Scheduled', value: 'scheduled' },
  { label: 'Never', value: 'never' },
];

export const kioskAppTypeOptions = [
  { label: 'Company Added', value: 'company-added' },
  { label: 'System', value: 'system' },
];

export const timezoneLabel = 'UTC';

export const sampleAppList = [
  { id: '1', name: 'Calculator' },
  { id: '2', name: 'Calendar' },
  { id: '3', name: 'Camera' },
  { id: '4', name: 'Clock' },
  { id: '5', name: 'Contacts' },
  { id: '6', name: 'Files' },
  { id: '7', name: 'Mail' },
  { id: '8', name: 'Maps' },
  { id: '9', name: 'Messages' },
  { id: '10', name: 'Music' },
  { id: '11', name: 'Notes' },
  { id: '12', name: 'Photos' },
];

export const certificateSupportedFormats = '.cer, .pem, .p12, .der, .crt';

export const samplePolicyPayload =
  '{"PayloadType":"Configuration","PayloadVersion":1,"PayloadIdentifier":"com.jumpcloud.custom"}';
