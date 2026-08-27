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
