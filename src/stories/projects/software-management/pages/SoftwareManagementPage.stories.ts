import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, h } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  Dropdown,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import SelectButton from 'primevue/selectbutton';

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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  CubeIcon,
  XMarkIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
} from '@jumpcloud/icons';

// ─── Navigation Data ───

const menuItems = [
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
      { separator: true },
      { label: 'Active Directory' },
      { label: 'Cloud Directories' },
      { label: 'HR Directories' },
      { label: 'Identity Provider' },
    ],
  },
  {
    label: 'Device Management',
    leftIcon: markRaw(DeviceManagementIcon),
    items: [
      { label: 'Devices', leftIcon: markRaw(DeviceListsIcon) },
      { label: 'Device Groups', leftIcon: markRaw(DeviceGroupsIcon) },
      { label: 'Commands', leftIcon: markRaw(CommandLineIcon) },
      { label: 'Asset Management', leftIcon: markRaw(ClipboardDocumentListIcon), isNew: true },
      { separator: true },
      { label: 'Policy Management' },
      { label: 'Policy Groups' },
      { label: 'Software Management' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    count: 1,
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'Access Reports', isNew: true },
      { label: 'SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'Password Management', leftIcon: markRaw(PasswordManagerIcon) },
      { label: 'LDAP' },
      { label: 'RADIUS' },
    ],
  },
  {
    label: 'Security',
    leftIcon: markRaw(ShieldCheckIcon),
    items: [
      { label: 'Conditional Access Policies' },
      { label: 'Conditional List' },
      { label: 'MFA Configurations' },
      { label: 'Device Trust' },
    ],
  },
  {
    label: 'Insights',
    leftIcon: markRaw(ChartBarSquareIcon),
    items: [
      { label: 'Reports' },
      { label: 'Directory Insights' },
    ],
  },
  {
    label: 'Settings',
    leftIcon: markRaw(Cog6ToothIcon),
    items: [{ label: 'Reports' }],
  },
  { label: 'Alert', leftIcon: markRaw(BellIcon), count: 23, isNew: true },
];

const profileMenuItems = [
  {
    label: 'Burak Başcı',
    itemType: 'profile_compact',
    initials: 'BB',
    name: 'Burak Başcı',
    items: [
      {
        label: 'Admin IT',
        itemType: 'profile_large',
        name: 'Admin IT',
        email: 'admin_it@company.com',
        initials: 'AT',
      },
      { separator: true },
      { label: 'Logout', rightIcon: markRaw(ArrowRightStartOnRectangleIcon) },
      { separator: true },
      { label: 'Change Password' },
      {
        label: 'Launch User Portal',
        rightIcon: markRaw(ArrowTopRightOnSquareIcon),
      },
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
      { separator: true },
      { label: 'Use Old Navigation', itemType: 'button' },
    ],
  },
];

// ─── App Icon URLs (24x24 via Google Favicon API) ───

const APP_ICON_DOMAINS: Record<string, string> = {
  '1password': '1password.com',
  'adobe acrobat reader dc': 'adobe.com',
  'adobe content viewer': 'adobe.com',
  'adobe experience manager forms': 'adobe.com',
  'alptis box': 'microsoft.com',
  'android studio': 'developer.android.com',
  'anydesk': 'anydesk.com',
  'chrome': 'google.com',
  'slack': 'slack.com',
  'zoom': 'zoom.us',
  'microsoft teams': 'teams.microsoft.com',
  'vs code': 'code.visualstudio.com',
  'notion': 'notion.so',
  'figma': 'figma.com',
  'spotify': 'spotify.com',
  'dropbox': 'dropbox.com',
  'docker desktop': 'docker.com',
  'postman': 'postman.com',
  'git': 'git-scm.com',
  'node.js': 'nodejs.org',
  'python': 'python.org',
  '7-zip': '7-zip.org',
  'vlc media player': 'videolan.org',
  'firefox': 'mozilla.org',
  'microsoft edge': 'microsoft.com',
  'itunes': 'apple.com',
  'skype': 'skype.com',
  'adobe creative cloud': 'adobe.com',
  'microsoft office': 'microsoft.com',
  'google drive': 'google.com',
  'onedrive': 'onedrive.com',
  'trello': 'trello.com',
  'asana': 'asana.com',
  'jira': 'atlassian.com',
  'confluence': 'atlassian.com',
  'bitwarden': 'bitwarden.com',
  'lastpass': 'lastpass.com',
  'adp mobile solutions': 'adp.com',
  'airtable': 'airtable.com',
  'alfred': 'alfredapp.com',
  'amazon chime': 'aws.amazon.com',
  'angry birds 2': 'rovio.com',
  'boxer': 'vmware.com',
  'cisco secure client': 'cisco.com',
  'dexcom g7': 'dexcom.com',
  'indrive': 'indrive.com',
  'jumpcloud protect': 'jumpcloud.com',
  'knox service plugin': 'samsung.com',
  'microsoft authenticator': 'microsoft.com',
  'microsoft outlook': 'microsoft.com',
  'opay business': 'opayweb.com',
  'paypal business': 'paypal.com',
  'gmail': 'gmail.com',
  'google meet': 'meet.google.com',
};

function getAppIconUrl(name: string): string {
  const key = Object.keys(APP_ICON_DOMAINS).find(
    (k) => name.toLowerCase().startsWith(k) || name.toLowerCase().includes(k)
  );
  const domain = key ? APP_ICON_DOMAINS[key] : 'example.com';
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=24`;
}

// ─── Software Application Data ───

interface SoftwareApp {
  id: number;
  name: string;
  applicationType: string;
  currentVersion: string;
  versionLastUpdated: string;
}

const softwareData: SoftwareApp[] = [
  { id: 1, name: '1Password - Auto Update Ena...', applicationType: 'App Catalog', currentVersion: '8.12.4.46', versionLastUpdated: '02-24-2026 at 08:00am' },
  { id: 2, name: '1Password - NOT Auto Update', applicationType: 'App Catalog', currentVersion: '8.12.4.46', versionLastUpdated: '02-24-2026 at 08:00am' },
  { id: 3, name: '1Password - Paarijat - Auto...', applicationType: 'App Catalog', currentVersion: '8.12.4.46', versionLastUpdated: '02-24-2026 at 08:00am' },
  { id: 4, name: 'Adobe Acrobat Reader DC', applicationType: 'App Catalog', currentVersion: '25.001.21223', versionLastUpdated: '02-18-2026 at 10:00pm' },
  { id: 5, name: 'Adobe Acrobat Reader DC', applicationType: 'App Catalog', currentVersion: '25.001.21223', versionLastUpdated: '02-18-2026 at 10:00pm' },
  { id: 6, name: 'Adobe Content Viewer', applicationType: 'Microsoft Store', currentVersion: '--', versionLastUpdated: '09-17-2024 at 03:15pm' },
  { id: 7, name: 'Adobe Experience Manager Forms', applicationType: 'Microsoft Store', currentVersion: '--', versionLastUpdated: '09-17-2024 at 03:15pm' },
  { id: 8, name: 'ALPTIS BOX', applicationType: 'Microsoft Store', currentVersion: '--', versionLastUpdated: '09-17-2024 at 03:15pm' },
  { id: 9, name: 'Android Studio', applicationType: 'App Catalog', currentVersion: '2025.3.1.8', versionLastUpdated: '02-25-2026 at 04:00am' },
  { id: 10, name: 'AnyDesk', applicationType: 'App Catalog', currentVersion: '9.6.11', versionLastUpdated: '02-13-2026 at 06:00am' },
  { id: 11, name: 'Chrome', applicationType: 'App Catalog', currentVersion: '131.0.6778.69', versionLastUpdated: '02-20-2026 at 09:00am' },
  { id: 12, name: 'Slack', applicationType: 'App Catalog', currentVersion: '4.36.0', versionLastUpdated: '02-19-2026 at 02:00pm' },
  { id: 13, name: 'Zoom', applicationType: 'App Catalog', currentVersion: '6.0.10', versionLastUpdated: '02-18-2026 at 11:00am' },
  { id: 14, name: 'Microsoft Teams', applicationType: 'Microsoft Store', currentVersion: '24172.400.4299.5484', versionLastUpdated: '02-17-2026 at 08:30am' },
  { id: 15, name: 'VS Code', applicationType: 'App Catalog', currentVersion: '1.89.0', versionLastUpdated: '02-16-2026 at 04:00pm' },
  { id: 16, name: 'Notion', applicationType: 'App Catalog', currentVersion: '2.2.18', versionLastUpdated: '02-15-2026 at 10:00am' },
  { id: 17, name: 'Figma', applicationType: 'App Catalog', currentVersion: '116.16.5', versionLastUpdated: '02-14-2026 at 01:00pm' },
  { id: 18, name: 'Spotify', applicationType: 'Microsoft Store', currentVersion: '1.2.28.758', versionLastUpdated: '02-13-2026 at 09:00am' },
  { id: 19, name: 'Dropbox', applicationType: 'App Catalog', currentVersion: '194.4.6272', versionLastUpdated: '02-12-2026 at 03:00pm' },
  { id: 20, name: 'Docker Desktop', applicationType: 'App Catalog', currentVersion: '4.32.0', versionLastUpdated: '02-11-2026 at 07:00am' },
  { id: 21, name: 'Postman', applicationType: 'App Catalog', currentVersion: '11.15.0', versionLastUpdated: '02-10-2026 at 12:00pm' },
  { id: 22, name: 'Git', applicationType: 'App Catalog', currentVersion: '2.43.0', versionLastUpdated: '02-09-2026 at 06:00am' },
  { id: 23, name: 'Node.js', applicationType: 'App Catalog', currentVersion: '20.11.0', versionLastUpdated: '02-08-2026 at 02:00pm' },
  { id: 24, name: 'Python', applicationType: 'App Catalog', currentVersion: '3.12.2', versionLastUpdated: '02-07-2026 at 10:00am' },
  { id: 25, name: '7-Zip', applicationType: 'App Catalog', currentVersion: '24.01', versionLastUpdated: '02-06-2026 at 08:00am' },
  { id: 26, name: 'VLC Media Player', applicationType: 'App Catalog', currentVersion: '3.0.21', versionLastUpdated: '02-05-2026 at 04:00pm' },
  { id: 27, name: 'Firefox', applicationType: 'App Catalog', currentVersion: '133.0', versionLastUpdated: '02-04-2026 at 11:00am' },
  { id: 28, name: 'Microsoft Edge', applicationType: 'Microsoft Store', currentVersion: '131.0.2903.51', versionLastUpdated: '02-03-2026 at 09:00am' },
  { id: 29, name: 'iTunes', applicationType: 'App Catalog', currentVersion: '12.13.2', versionLastUpdated: '02-02-2026 at 01:00pm' },
  { id: 30, name: 'Skype', applicationType: 'Microsoft Store', currentVersion: '8.112.0.214', versionLastUpdated: '02-01-2026 at 07:00am' },
  { id: 31, name: 'Adobe Creative Cloud', applicationType: 'App Catalog', currentVersion: '6.4.0.571', versionLastUpdated: '01-31-2026 at 03:00pm' },
  { id: 32, name: 'Microsoft Office', applicationType: 'Microsoft Store', currentVersion: '16.0.17029.20028', versionLastUpdated: '01-30-2026 at 10:00am' },
  { id: 33, name: 'Google Drive', applicationType: 'App Catalog', currentVersion: '92.0.3.0', versionLastUpdated: '01-29-2026 at 02:00pm' },
  { id: 34, name: 'OneDrive', applicationType: 'Microsoft Store', currentVersion: '24.002.0109.0002', versionLastUpdated: '01-28-2026 at 08:00am' },
  { id: 35, name: 'Trello', applicationType: 'App Catalog', currentVersion: '2.0.14', versionLastUpdated: '01-27-2026 at 12:00pm' },
  { id: 36, name: 'Asana', applicationType: 'App Catalog', currentVersion: '2.0.0', versionLastUpdated: '01-26-2026 at 06:00am' },
  { id: 37, name: 'Jira', applicationType: 'App Catalog', currentVersion: '1.0.0', versionLastUpdated: '01-25-2026 at 04:00pm' },
  { id: 38, name: 'Confluence', applicationType: 'App Catalog', currentVersion: '8.9.0', versionLastUpdated: '01-24-2026 at 10:00am' },
  { id: 39, name: 'Bitwarden', applicationType: 'App Catalog', currentVersion: '2024.9.0', versionLastUpdated: '01-23-2026 at 02:00pm' },
  { id: 40, name: 'LastPass', applicationType: 'App Catalog', currentVersion: '4.130.0', versionLastUpdated: '01-22-2026 at 08:00am' },
];

// ─── Apple Software Application Data ───

interface AppleSoftwareApp {
  id: number;
  name: string;
  supportedDevices: string;
  applicationType: string;
  locationName: string;
  versionLastUpdated: string;
  status: string;
}

const appleSoftwareData: AppleSoftwareApp[] = [
  { id: 1, name: 'ADP Mobile Solutions', supportedDevices: 'iPhone, iPad', applicationType: 'VPP', locationName: 'Tom Bridge Test', versionLastUpdated: '02-28-2025 at 11:29am', status: '2 of 2 acknowledged' },
  { id: 2, name: 'Airtable', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '07-21-2025 at 02:32pm', status: 'View Status' },
  { id: 3, name: 'Alfred', supportedDevices: 'Mac/iPhone/iPad', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '02-15-2026 at 09:00am', status: '1 of 1 acknowledged' },
  { id: 4, name: 'Amazon Chime', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-20-2026 at 03:45pm', status: 'View Status' },
  { id: 5, name: 'Angry Birds 2', supportedDevices: 'iPhone, iPad, iPod', applicationType: 'VPP', locationName: 'Tom Bridge Test', versionLastUpdated: '02-10-2026 at 11:00am', status: '3 of 3 acknowledged' },
  { id: 6, name: 'AnyDesk', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '02-13-2026 at 06:00am', status: 'View Status' },
  { id: 7, name: 'AnyDesk', supportedDevices: 'Mac', applicationType: 'Self-Hosted', locationName: 'Https://storage.googleapis.com/zerotouch-q3-2022/Any', versionLastUpdated: '02-12-2026 at 04:00pm', status: '1 of 1 acknowledged' },
  { id: 8, name: 'AnyDesk', supportedDevices: 'Mac', applicationType: 'Self-Hosted', locationName: 'Https://storage.googleapis.com/zerotouch-q3-2022/Any', versionLastUpdated: '02-11-2026 at 10:00am', status: '2 of 2 acknowledged' },
  { id: 9, name: 'Asana Desktop', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '02-08-2026 at 02:00pm', status: 'View Status' },
  { id: 10, name: 'Slack', supportedDevices: 'Mac/iPhone/iPad', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '02-05-2026 at 09:00am', status: '3 of 3 acknowledged' },
  { id: 11, name: 'Zoom', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '02-03-2026 at 11:30am', status: 'View Status' },
  { id: 12, name: '1Password', supportedDevices: 'Mac/iPhone/iPad', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '02-01-2026 at 08:00am', status: '1 of 1 acknowledged' },
  { id: 13, name: 'Notion', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-28-2026 at 04:00pm', status: 'View Status' },
  { id: 14, name: 'Figma', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-25-2026 at 10:00am', status: '2 of 2 acknowledged' },
  { id: 15, name: 'Dropbox', supportedDevices: 'Mac/iPhone/iPad', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-22-2026 at 02:00pm', status: 'View Status' },
  { id: 16, name: 'Spotify', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-20-2026 at 09:00am', status: '1 of 1 acknowledged' },
  { id: 17, name: 'Microsoft Teams', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-18-2026 at 03:00pm', status: 'View Status' },
  { id: 18, name: 'Chrome', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-15-2026 at 11:00am', status: '3 of 3 acknowledged' },
  { id: 19, name: 'VS Code', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-12-2026 at 08:00am', status: 'View Status' },
  { id: 20, name: 'Postman', supportedDevices: 'Mac', applicationType: 'App Catalog', locationName: 'Publisher', versionLastUpdated: '01-10-2026 at 04:00pm', status: '2 of 2 acknowledged' },
  ...Array.from({ length: 47 }, (_, i) => {
    const apps = ['Docker Desktop', 'iTunes', 'Firefox', 'Chrome', 'Slack', 'Zoom', 'Notion', 'Figma', '1Password', 'Dropbox'];
    const devices = ['Mac', 'Mac/iPhone/iPad', 'iPhone, iPad', 'iPhone, iPad, iPod'];
    const types = ['App Catalog', 'VPP', 'Self-Hosted'];
    const locations = ['Publisher', 'Tom Bridge Test'];
    const statuses = ['View Status', '1 of 1 acknowledged', '2 of 2 acknowledged', '3 of 3 acknowledged'];
    const day = 1 + (i % 28);
    const hour = 8 + (i % 12);
    return {
      id: 21 + i,
      name: apps[i % apps.length],
      supportedDevices: devices[i % devices.length],
      applicationType: types[i % types.length],
      locationName: locations[i % locations.length],
      versionLastUpdated: `01-${String(day).padStart(2, '0')}-2026 at ${hour}:${(i % 60).toString().padStart(2, '0')}am`,
      status: statuses[i % statuses.length],
    };
  }),
];

// ─── Name Cell with App Icon (24x24) ───

const NameCell = markRaw(
  defineComponent({
    name: 'NameCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      const iconError = ref(false);
      return () => {
        const name = props.data?.name ?? '';
        const initial = name.charAt(0).toUpperCase();
        const iconUrl = getAppIconUrl(name);
        const showFallback = iconError.value;

        return h(
          'div',
          { class: 'flex items-center gap-3 p-2 min-h-12' },
          [
            showFallback
              ? h(
                  'div',
                  {
                    class: 'flex items-center justify-center w-6 h-6 rounded shrink-0 bg-neutral-default_solid',
                  },
                  [h('span', { class: 'text-body-sm text-neutral-base' }, initial)]
                )
              : h('img', {
                  src: iconUrl,
                  alt: '',
                  width: 24,
                  height: 24,
                  class: 'shrink-0 rounded',
                  onError: () => {
                    iconError.value = true;
                  },
                }),
            h('span', { class: 'text-body-md text-neutral-base truncate' }, name),
          ]
        );
      };
    },
  })
);

// ─── Column Definitions ───

const softwareColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '280px',
    component: NameCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'applicationType',
    header: 'Application Type',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.applicationType,
    }),
  },
  {
    field: 'currentVersion',
    header: 'Current Version',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.currentVersion,
    }),
  },
  {
    field: 'versionLastUpdated',
    header: 'Version Last Updated',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.versionLastUpdated,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: false,
    width: '140px',
    component: markRaw(DataTableCellLink),
    componentProps: () => ({
      label: 'View Status',
      href: '#',
    }),
  },
];

// ─── Apple Status Cell (link) ───

const AppleStatusCell = markRaw(
  defineComponent({
    name: 'AppleStatusCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const status = props.data?.status ?? 'View Status';
        return h(DataTableCellLink, {
          label: status,
          href: '#',
        });
      };
    },
  })
);

// ─── Apple Column Definitions ───

const appleColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '280px',
    component: NameCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'supportedDevices',
    header: 'Supported Devices',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.supportedDevices,
    }),
  },
  {
    field: 'applicationType',
    header: 'Application Type',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.applicationType,
    }),
  },
  {
    field: 'locationName',
    header: 'Location Name',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.locationName,
    }),
  },
  {
    field: 'versionLastUpdated',
    header: 'Version Last Updated',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.versionLastUpdated,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: false,
    width: '180px',
    component: AppleStatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
];

// ─── Google Software Application Data ───

interface GoogleSoftwareApp {
  id: number;
  name: string;
  applicationType: string;
}

const googleSoftwareData: GoogleSoftwareApp[] = [
  { id: 1, name: 'Boxer - Workspace ONE', applicationType: 'Public' },
  { id: 2, name: 'Cisco Secure Client-AnyConnect', applicationType: 'Public' },
  { id: 3, name: 'Dexcom G7', applicationType: 'Public' },
  { id: 4, name: 'inDrive. Rides with fair fares', applicationType: 'Public' },
  { id: 5, name: 'JumpCloud Protect', applicationType: 'Public' },
  { id: 6, name: 'Knox Service Plugin', applicationType: 'Public' },
  { id: 7, name: 'Microsoft Authenticator', applicationType: 'Public' },
  { id: 8, name: 'Microsoft Outlook', applicationType: 'Public' },
  { id: 9, name: 'OPay Business', applicationType: 'Public' },
  { id: 10, name: 'PayPal Business', applicationType: 'Public' },
  { id: 11, name: 'Google Chrome', applicationType: 'Public' },
  { id: 12, name: 'Gmail', applicationType: 'Public' },
  { id: 13, name: 'Google Drive', applicationType: 'Public' },
  { id: 14, name: 'Google Meet', applicationType: 'Public' },
  { id: 15, name: 'Slack', applicationType: 'Public' },
  { id: 16, name: 'Zoom', applicationType: 'Public' },
  { id: 17, name: 'Dropbox', applicationType: 'Public' },
  { id: 18, name: '1Password', applicationType: 'Public' },
];

// ─── Google Column Definitions ───

const googleColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '320px',
    component: NameCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'applicationType',
    header: 'Application Type',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.applicationType,
    }),
  },
];

// ─── Add New Menu Options ───

const addNewMenuOptions = [
  { label: 'Jumpcloud App Catalog', value: 'jc-app-catalog' },
  { label: 'Jumpcloud Private Repo', value: 'jc-private-repo' },
  { label: 'Microsoft Store', value: 'microsoft-store' },
  { label: 'Chocolatey', value: 'chocolatey' },
];

// ─── Package Manager Filter Options ───

const packageManagerOptions = [
  { label: 'Chocolatey', value: 'chocolatey' },
  { label: 'JC App Catalog', value: 'jc-app-catalog' },
  { label: 'Microsoft Store', value: 'microsoft-store' },
  { label: 'Private Repo', value: 'private-repo' },
];

// ─── Platform Tabs ───

const platformTabs = [
  { label: 'Windows', value: 'windows' },
  { label: 'Apple', value: 'apple' },
  { label: 'Google', value: 'google' },
];

// ─── Component Definition ───

const SoftwareManagementPage = defineComponent({
  name: 'SoftwareManagementPage',
  props: {
    initialTab: {
      type: String,
      default: 'windows',
    },
  },
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable: DataTable,
    DataTableToolbar,
    PvButton: Button,
    PvDialog: Dialog,
    PvSelectButton: SelectButton,
    Dropdown,
    TopBar,
    CubeIcon,
    XMarkIcon,
  },
  setup(props) {
    const activePlatformTab = ref(props.initialTab);
    const selectedApps = ref([]);
    const selectedAppleApps = ref([]);
    const selectedGoogleApps = ref([]);
    const showFiltersModal = ref(false);
    const selectedPackageManagers = ref<string[]>([]);

    const openFilters = () => {
      showFiltersModal.value = true;
    };

    const applyFilters = () => {
      showFiltersModal.value = false;
    };

    const cancelFilters = () => {
      showFiltersModal.value = false;
    };

    const handleAddNewSelect = (option: { label: string; value: string }) => {
      // Handle add new selection - e.g. open dialog for selected source
    };

    return {
      menuItems,
      profileMenuItems,
      softwareColumns,
      softwareData,
      appleColumns,
      appleSoftwareData,
      googleColumns,
      googleSoftwareData,
      selectedGoogleApps,
      platformTabs,
      activePlatformTab,
      selectedApps,
      selectedAppleApps,
      showFiltersModal,
      selectedPackageManagers,
      packageManagerOptions,
      openFilters,
      applyFilters,
      cancelFilters,
      handleAddNewSelect,
      addNewMenuOptions,
      PlusIcon: markRaw(PlusIcon),
      CubeIcon: markRaw(CubeIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="device management"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />

        <PageHeader
          title="Software Management"
          :icon="CubeIcon"
          :tabs="platformTabs"
          :activeTab="activePlatformTab"
          @update:activeTab="activePlatformTab = $event"
        />

        <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
          <div class="shrink-0 px-6 flex items-center gap-3">
            <Dropdown
              label="Add New"
              :icon="PlusIcon"
              iconPosition="left"
              severity="primary"
              :options="addNewMenuOptions"
              @select="handleAddNewSelect"
              class="shrink-0 [&_button]:whitespace-nowrap"
            />
            <DataTableToolbar
              searchPlaceholder="Search"
              :showAddButton="false"
              :showFilterButton="true"
              @filter="openFilters"
              :showRefreshButton="true"
              :showColumnsButton="true"
            />
            <template v-if="activePlatformTab === 'windows'">
              <span class="text-body-md text-neutral-subtle shrink-0">{{ softwareData.length }} managed apps</span>
              <PvButton label="Delete" severity="danger" variant="outlined" :disabled="!selectedApps.length" class="shrink-0" />
            </template>
            <template v-else-if="activePlatformTab === 'apple'">
              <span class="text-body-md text-neutral-subtle shrink-0">{{ appleSoftwareData.length }} managed apps</span>
              <PvButton label="Delete" severity="danger" variant="outlined" :disabled="!selectedAppleApps.length" class="shrink-0" />
            </template>
            <template v-else-if="activePlatformTab === 'google'">
              <span class="text-body-md text-neutral-subtle shrink-0">{{ googleSoftwareData.length }} managed apps</span>
              <PvButton label="Delete" severity="danger" variant="outlined" :disabled="!selectedGoogleApps.length" class="shrink-0" />
            </template>
          </div>

          <div class="flex-1 flex flex-col min-h-0 px-6">
            <!-- Windows Tab -->
            <CircuitDataTable
              v-if="activePlatformTab === 'windows'"
              :columns="softwareColumns"
              :data="softwareData"
              selectionMode="multiple"
              :selection="selectedApps"
              @update:selection="selectedApps = $event"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="10"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '20 Items per page', value: 20 },
                { label: '50 Items per page', value: 50 },
              ]"
              :showRowsPerPageOptions="true"
              :showPageReport="true"
              :pt="{
                root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
              }"
              :ptOptions="{ mergeSections: true, mergeProps: true }"
            />
            <!-- Apple Tab -->
            <CircuitDataTable
              v-if="activePlatformTab === 'apple'"
              :columns="appleColumns"
              :data="appleSoftwareData"
              selectionMode="multiple"
              :selection="selectedAppleApps"
              @update:selection="selectedAppleApps = $event"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="10"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '20 Items per page', value: 20 },
                { label: '50 Items per page', value: 50 },
              ]"
              :showRowsPerPageOptions="true"
              :showPageReport="true"
              :pt="{
                root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
              }"
              :ptOptions="{ mergeSections: true, mergeProps: true }"
            />
            <!-- Google Tab -->
            <CircuitDataTable
              v-if="activePlatformTab === 'google'"
              :columns="googleColumns"
              :data="googleSoftwareData"
              selectionMode="multiple"
              :selection="selectedGoogleApps"
              @update:selection="selectedGoogleApps = $event"
              :card="true"
              size="default"
              :scrollable="true"
              scrollHeight="flex"
              :paginator="true"
              :rows="10"
              :rowsPerPageOptions="[
                { label: '10 Items per page', value: 10 },
                { label: '20 Items per page', value: 20 },
                { label: '50 Items per page', value: 50 },
              ]"
              :showRowsPerPageOptions="true"
              :showPageReport="true"
              :pt="{
                root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
              }"
              :ptOptions="{ mergeSections: true, mergeProps: true }"
            />
          </div>
        </div>

        <!-- Filters Modal -->
        <PvDialog
          v-model:visible="showFiltersModal"
          :draggable="false"
          modal
          header="Filters"
          :style="{ width: '480px' }"
          @hide="cancelFilters"
        >
          <template #closeicon><XMarkIcon /></template>
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-3">
              <span class="text-body-md text-neutral-base">Package Manager</span>
              <PvSelectButton
                v-model="selectedPackageManagers"
                :options="packageManagerOptions"
                optionLabel="label"
                optionValue="value"
                multiple
                class="flex flex-wrap gap-2"
              />
            </div>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="cancelFilters" />
              <PvButton label="Apply" @click="applyFilters" />
            </div>
          </template>
        </PvDialog>
      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof SoftwareManagementPage> = {
  title: 'Projects/Software Management/Software Management',
  component: SoftwareManagementPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SoftwareManagementPage>;

export const Windows: Story = {
  args: {
    initialTab: 'windows',
  },
};

export const Apple: Story = {
  args: {
    initialTab: 'apple',
  },
};

export const Google: Story = {
  args: {
    initialTab: 'google',
  },
};
