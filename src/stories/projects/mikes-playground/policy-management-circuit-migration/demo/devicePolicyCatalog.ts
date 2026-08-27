export type DevicePolicyOs = 'windows' | 'mac' | 'linux' | 'ios' | 'android';

export type DevicePolicyTemplate = {
  id: string;
  name: string;
  nameDesc: string;
  type: 'Agent' | 'MDM';
  description: string;
  os: DevicePolicyOs[];
  path: string;
};

/** Device policy templates from Policy Management — Circuit Migration stories. */
export const devicePolicyCatalog: DevicePolicyTemplate[] = [
  {
    id: 'custom-registry-keys',
    name: 'Advanced: Custom Registry Keys',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'Agent',
    description:
      'These policies allow you to configure any system settings that we may not offer in our standard policies.',
    os: ['windows'],
    path: '/custom-registry-keys',
  },
  {
    id: 'policy-details-tab',
    name: 'Policy Details Tab',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'Agent',
    description:
      'Custom policies allow you to configure registry keys on Windows systems.',
    os: ['windows'],
    path: '/policy-details-tab',
  },
  {
    id: 'schedule-restart',
    name: 'Schedule Restart',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'Agent',
    description:
      'This policy automates device restarts to ensure timely application of critical updates.',
    os: ['windows'],
    path: '/schedule-restart',
  },
  {
    id: 'application-restriction',
    name: 'Application Restriction',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'This policy restricts application execution from common locations on Windows devices.',
    os: ['windows'],
    path: '/application-restriction',
  },
  {
    id: 'bluetooth-configuration',
    name: 'Bluetooth Configuration',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description: 'This policy configures Bluetooth restrictions for Windows 10 and 11 devices.',
    os: ['windows'],
    path: '/bluetooth-configuration',
  },
  {
    id: 'custom-mdm-oma-uri',
    name: 'Custom MDM (OMA-URI)',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'This policy allows administrators to create custom settings not covered in built-in MDM policies.',
    os: ['windows'],
    path: '/custom-mdm-oma-uri',
  },
  {
    id: 'google-chrome-extensions',
    name: 'Google Chrome Browser Force-Installed Extension List',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Install JumpCloud and third-party Google Chrome extensions by providing Extension IDs and Update URLs.',
    os: ['windows'],
    path: '/google-chrome-extensions',
  },
  {
    id: 'install-certificate',
    name: 'Install Certificate',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Deploy and update certificates for secure access to internal organization resources.',
    os: ['windows'],
    path: '/install-certificate',
  },
  {
    id: 'ms-edge-extensions',
    name: 'MS Edge Extensions',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Manage Microsoft Edge extension installation and browser extension settings on Windows devices.',
    os: ['windows'],
    path: '/ms-edge-extensions',
  },
  {
    id: 'wifi-configuration',
    name: 'WiFi Configuration',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description: 'This policy configures a wireless network for Windows 10/11 devices.',
    os: ['windows'],
    path: '/wifi-configuration',
  },
  {
    id: 'allow-activation-lock',
    name: 'Allow Activation Lock',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Allows Activation Lock on enrolled Apple devices to help prevent unauthorized activation or erase.',
    os: ['mac'],
    path: '/allow-activation-lock',
  },
  {
    id: 'filevault-2',
    name: 'FileVault 2',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description: 'Configure FileVault disk encryption settings for macOS devices.',
    os: ['mac'],
    path: '/filevault-2',
  },
  {
    id: 'filevault-tutorial-modal',
    name: 'FileVault 2 (Tutorial Modal)',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description: 'FileVault policy with the video tutorial modal flow.',
    os: ['mac'],
    path: '/filevault-tutorial-modal',
  },
  {
    id: 'mdm-custom-configuration-profile',
    name: 'MDM Custom Configuration Profile',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Distribute custom MDM configuration profiles uploaded as .mobileconfig files.',
    os: ['mac'],
    path: '/mdm-custom-configuration-profile',
  },
  {
    id: 'recovery-lock',
    name: 'Recovery Lock',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Restrict recovery on Mac computers with Apple silicon by requiring a password.',
    os: ['mac'],
    path: '/recovery-lock',
  },
  {
    id: 'software-update-enforcement',
    name: 'Software Update Enforcement',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Enforce software updates on macOS devices using Apple Declarative Device Management (DDM).',
    os: ['mac'],
    path: '/software-update-enforcement',
  },
  {
    id: 'custom-payload',
    name: 'Custom Payload',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Configure settings not available in the portal via JSON on Android devices.',
    os: ['android'],
    path: '/custom-payload',
  },
  {
    id: 'kiosk-mode',
    name: 'Kiosk Mode',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Configure how Android devices behave when locked, including single-app kiosk scenarios.',
    os: ['android'],
    path: '/kiosk-mode',
  },
  {
    id: 'system-update',
    name: 'System Update',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description: 'Manage over-the-air system updates on Android devices.',
    os: ['android'],
    path: '/system-update',
  },
  {
    id: 'single-app-mode',
    name: 'Single App Mode',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Provide a device that runs only a single app, preventing the use of other apps.',
    os: ['ios'],
    path: '/single-app-mode',
  },
  {
    id: 'supervised-ios-restrictions',
    name: 'Supervised iOS Restrictions',
    nameDesc: 'Enterprise Settings, Configuration',
    type: 'MDM',
    description:
      'Configure restrictions that apply only to supervised iOS and iPadOS devices.',
    os: ['ios'],
    path: '/supervised-ios-restrictions',
  },
];

const osTabMap: Record<string, DevicePolicyOs | 'recommended'> = {
  windows: 'windows',
  mac: 'mac',
  linux: 'linux',
  ios: 'ios',
  android: 'android',
  recommended: 'recommended',
};

export function filterDevicePolicyTemplates(options: {
  osTab: string;
  search: string;
}): DevicePolicyTemplate[] {
  const mappedOs = osTabMap[options.osTab] ?? 'windows';
  const query = options.search.trim().toLowerCase();

  return devicePolicyCatalog.filter((template) => {
    if (mappedOs !== 'recommended' && !template.os.includes(mappedOs)) return false;
    if (!query) return true;

    const haystack = [
      template.name,
      template.nameDesc,
      template.type,
      template.description,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(query);
  });
}
