import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, markRaw, defineComponent, h, computed, watch, onMounted } from 'vue';
import {
  AppNavigation,
  PageHeader,
  DataTable,
  DataTableToolbar,
  DataTableCellLink,
  DataTableCellText,
  DataTableCellToken,
  DataTableCellButton,
  Dropdown,
  CollapsiblePanel,
  FormField,
  CheckboxWithLabel,
  LinkText,
  Stepper,
  ToastNotification,
} from '@jumpcloud/circuit/components';
import type { StepDefinition } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Popover from 'primevue/popover';
import SelectButton from 'primevue/selectbutton';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import MultiSelect from 'primevue/multiselect';
import { useToast } from 'primevue/usetoast';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

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
  ArrowLeftIcon,
  ComputerDesktopIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  LockClosedIcon,
  GlobeAltIcon,
  Squares2X2Icon,
  InformationCircleIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '@/components/TopBar.vue';
import ConfigPageLayout from '@/components/layout/page-layouts/ConfigPageLayout.vue';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';

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
  'whatsapp': 'whatsapp.com',
  'meta': 'meta.com',
  'phonepe': 'phonepe.com',
  'revolut': 'revolut.com',
  'linkedin': 'linkedin.com',
  'youtube': 'youtube.com',
  'square': 'squareup.com',
  'indeed': 'indeed.com',
  'uber': 'uber.com',
  'shopify': 'shopify.com',
  'doordash': 'doordash.com',
  'grab': 'grab.com',
  'amazon': 'amazon.com',
  'bolt': 'bolt.eu',
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
  { id: 1, name: '1Password - Auto Update Ena...', applicationType: 'JC App Catalog', currentVersion: '8.12.4.46', versionLastUpdated: '02-24-2026 at 08:00am' },
  { id: 2, name: '1Password - NOT Auto Update', applicationType: 'JC App Catalog', currentVersion: '8.12.4.46', versionLastUpdated: '02-24-2026 at 08:00am' },
  { id: 3, name: '1Password - Paarijat - Auto...', applicationType: 'JC App Catalog', currentVersion: '8.12.4.46', versionLastUpdated: '02-24-2026 at 08:00am' },
  { id: 4, name: 'Adobe Acrobat Reader DC', applicationType: 'JC App Catalog', currentVersion: '25.001.21223', versionLastUpdated: '02-18-2026 at 10:00pm' },
  { id: 5, name: 'Adobe Acrobat Reader DC', applicationType: 'Chocolately', currentVersion: '25.001.21223', versionLastUpdated: '02-18-2026 at 10:00pm' },
  { id: 6, name: 'Adobe Content Viewer', applicationType: 'Microsoft Store', currentVersion: '--', versionLastUpdated: '09-17-2024 at 03:15pm' },
  { id: 7, name: 'Adobe Experience Manager Forms', applicationType: 'Microsoft Store', currentVersion: '--', versionLastUpdated: '09-17-2024 at 03:15pm' },
  { id: 8, name: 'ALPTIS BOX', applicationType: 'Microsoft Store', currentVersion: '--', versionLastUpdated: '09-17-2024 at 03:15pm' },
  { id: 9, name: 'Android Studio', applicationType: 'Chocolately', currentVersion: '2025.3.1.8', versionLastUpdated: '02-25-2026 at 04:00am' },
  { id: 10, name: 'AnyDesk', applicationType: 'JC App Catalog', currentVersion: '9.6.11', versionLastUpdated: '02-13-2026 at 06:00am' },
  { id: 11, name: 'Chrome', applicationType: 'JC App Catalog', currentVersion: '131.0.6778.69', versionLastUpdated: '02-20-2026 at 09:00am' },
  { id: 12, name: 'Slack', applicationType: 'JC App Catalog', currentVersion: '4.36.0', versionLastUpdated: '02-19-2026 at 02:00pm' },
  { id: 13, name: 'Zoom', applicationType: 'JC App Catalog', currentVersion: '6.0.10', versionLastUpdated: '02-18-2026 at 11:00am' },
  { id: 14, name: 'Microsoft Teams', applicationType: 'Microsoft Store', currentVersion: '24172.400.4299.5484', versionLastUpdated: '02-17-2026 at 08:30am' },
  { id: 15, name: 'VS Code', applicationType: 'Chocolately', currentVersion: '1.89.0', versionLastUpdated: '02-16-2026 at 04:00pm' },
  { id: 16, name: 'Notion', applicationType: 'JC App Catalog', currentVersion: '2.2.18', versionLastUpdated: '02-15-2026 at 10:00am' },
  { id: 17, name: 'Figma', applicationType: 'JC App Catalog', currentVersion: '116.16.5', versionLastUpdated: '02-14-2026 at 01:00pm' },
  { id: 18, name: 'Spotify', applicationType: 'Microsoft Store', currentVersion: '1.2.28.758', versionLastUpdated: '02-13-2026 at 09:00am' },
  { id: 19, name: 'Dropbox', applicationType: 'Private Repo', currentVersion: '194.4.6272', versionLastUpdated: '02-12-2026 at 03:00pm' },
  { id: 20, name: 'Docker Desktop', applicationType: 'Chocolately', currentVersion: '4.32.0', versionLastUpdated: '02-11-2026 at 07:00am' },
  { id: 21, name: 'Postman', applicationType: 'JC App Catalog', currentVersion: '11.15.0', versionLastUpdated: '02-10-2026 at 12:00pm' },
  { id: 22, name: 'Git', applicationType: 'Chocolately', currentVersion: '2.43.0', versionLastUpdated: '02-09-2026 at 06:00am' },
  { id: 23, name: 'Node.js', applicationType: 'Chocolately', currentVersion: '20.11.0', versionLastUpdated: '02-08-2026 at 02:00pm' },
  { id: 24, name: 'Python', applicationType: 'Chocolately', currentVersion: '3.12.2', versionLastUpdated: '02-07-2026 at 10:00am' },
  { id: 25, name: '7-Zip', applicationType: 'Chocolately', currentVersion: '24.01', versionLastUpdated: '02-06-2026 at 08:00am' },
  { id: 26, name: 'VLC Media Player', applicationType: 'Chocolately', currentVersion: '3.0.21', versionLastUpdated: '02-05-2026 at 04:00pm' },
  { id: 27, name: 'Firefox', applicationType: 'JC App Catalog', currentVersion: '133.0', versionLastUpdated: '02-04-2026 at 11:00am' },
  { id: 28, name: 'Microsoft Edge', applicationType: 'Microsoft Store', currentVersion: '131.0.2903.51', versionLastUpdated: '02-03-2026 at 09:00am' },
  { id: 29, name: 'iTunes', applicationType: 'Microsoft Store', currentVersion: '12.13.2', versionLastUpdated: '02-02-2026 at 01:00pm' },
  { id: 30, name: 'Skype', applicationType: 'Microsoft Store', currentVersion: '8.112.0.214', versionLastUpdated: '02-01-2026 at 07:00am' },
  { id: 31, name: 'Adobe Creative Cloud', applicationType: 'Private Repo', currentVersion: '6.4.0.571', versionLastUpdated: '01-31-2026 at 03:00pm' },
  { id: 32, name: 'Microsoft Office', applicationType: 'Microsoft Store', currentVersion: '16.0.17029.20028', versionLastUpdated: '01-30-2026 at 10:00am' },
  { id: 33, name: 'Google Drive', applicationType: 'JC App Catalog', currentVersion: '92.0.3.0', versionLastUpdated: '01-29-2026 at 02:00pm' },
  { id: 34, name: 'OneDrive', applicationType: 'Microsoft Store', currentVersion: '24.002.0109.0002', versionLastUpdated: '01-28-2026 at 08:00am' },
  { id: 35, name: 'Trello', applicationType: 'JC App Catalog', currentVersion: '2.0.14', versionLastUpdated: '01-27-2026 at 12:00pm' },
  { id: 36, name: 'Asana', applicationType: 'Private Repo', currentVersion: '2.0.0', versionLastUpdated: '01-26-2026 at 06:00am' },
  { id: 37, name: 'Jira', applicationType: 'JC App Catalog', currentVersion: '1.0.0', versionLastUpdated: '01-25-2026 at 04:00pm' },
  { id: 38, name: 'Confluence', applicationType: 'Private Repo', currentVersion: '8.9.0', versionLastUpdated: '01-24-2026 at 10:00am' },
  { id: 39, name: 'Bitwarden', applicationType: 'JC App Catalog', currentVersion: '2024.9.0', versionLastUpdated: '01-23-2026 at 02:00pm' },
  { id: 40, name: 'LastPass', applicationType: 'JC App Catalog', currentVersion: '4.130.0', versionLastUpdated: '01-22-2026 at 08:00am' },
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

// ─── Catalog App Columns (for Add Wizard Step 1) ───

const catalogAppColumns = [
  {
    field: 'name',
    header: 'App Name',
    sortable: true,
    width: '280px',
    component: NameCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'version',
    header: 'Version',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.version }),
  },
];

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

// ─── App Catalog Data (for Add Wizard Step 1) ───

interface CatalogApp {
  id: number;
  name: string;
  version: string;
  type: string;
}

interface WizardAppConfig {
  softwareName: string;
  type: string;
  version: string;
  autoUpdate: boolean;
  commandLineOptions: string;
  appDeliveryMode: 'auto' | 'self-service';
}

const appCatalogData: CatalogApp[] = [
  { id: 1, name: '1Password', version: '8.12.5', type: 'App Catalog' },
  { id: 2, name: 'Aircall Workspace', version: '1.12.27', type: 'App Catalog' },
  { id: 3, name: 'Airtable', version: '1.6.6', type: 'App Catalog' },
  { id: 4, name: 'Airtame', version: '4.15.0', type: 'App Catalog' },
  { id: 5, name: 'Alfred', version: '5.7.2', type: 'App Catalog' },
  { id: 6, name: 'Amazon Chime', version: '5.23.22488', type: 'App Catalog' },
  { id: 7, name: 'Asana Desktop', version: '2.0.0', type: 'App Catalog' },
  { id: 8, name: 'Chrome', version: '131.0.6778.69', type: 'App Catalog' },
  { id: 9, name: 'Dropbox', version: '194.4.6272', type: 'App Catalog' },
  { id: 10, name: 'Figma', version: '116.16.5', type: 'App Catalog' },
  { id: 11, name: 'Microsoft Teams', version: '24172.400.4299.5484', type: 'App Catalog' },
  { id: 12, name: 'Notion', version: '2.2.18', type: 'App Catalog' },
  { id: 13, name: 'Slack', version: '4.36.0', type: 'App Catalog' },
  { id: 14, name: 'VS Code', version: '1.89.0', type: 'App Catalog' },
  { id: 15, name: 'Zoom', version: '6.0.10', type: 'App Catalog' },
  { id: 16, name: 'Docker Desktop', version: '4.32.0', type: 'App Catalog' },
  { id: 17, name: 'Postman', version: '11.15.0', type: 'App Catalog' },
  { id: 18, name: 'Spotify', version: '1.2.28.758', type: 'App Catalog' },
  { id: 19, name: 'Bitwarden', version: '2024.9.0', type: 'App Catalog' },
  { id: 20, name: 'Adobe Acrobat Reader DC', version: '25.001.21223', type: 'App Catalog' },
  ...Array.from({ length: 84 }, (_, i) => ({
    id: 21 + i,
    name: `App ${21 + i}`,
    version: '1.0.0',
    type: 'App Catalog',
  })),
];

// ─── Add New Menu Options ───

const addNewMenuOptions = [
  { label: 'JumpCloud App Catalog', value: 'jc-app-catalog' },
  { label: 'JumpCloud Private Repo', value: 'jc-private-repo' },
  { label: 'Microsoft Store', value: 'microsoft-store' },
  { label: 'Chocolatey', value: 'chocolatey' },
];

// ─── Device Groups Data (for Application Detail) ───

interface DeviceGroup {
  id: number;
  group: string;
  groupType: string;
  numDevices: number;
  membershipControls: string;
  defaultGroup: string;
  bound?: boolean;
}

const deviceGroupsData: DeviceGroup[] = [
  { id: 1, group: 'ADE iOS Devices', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 2, group: 'Admin Sudo Device Group', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 3, group: 'All Android Devices', groupType: 'Group of Devices', numDevices: 7, membershipControls: 'Dynamic', defaultGroup: '', bound: true },
  { id: 4, group: 'All Devices', groupType: 'Group of Devices', numDevices: 18, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 5, group: 'Automated Device Enrollment', groupType: 'Group of Devices', numDevices: 1, membershipControls: 'Static', defaultGroup: '' },
  { id: 6, group: 'BYOD iOS Devices', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 7, group: 'Declan Test', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 8, group: 'Device notification check', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Static', defaultGroup: '' },
  { id: 9, group: 'DJ Test (Devices)', groupType: 'Group of Devices', numDevices: 6, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 10, group: 'fdsf', groupType: 'Group of Devices', numDevices: 2, membershipControls: 'Static', defaultGroup: '' },
  { id: 11, group: 'JumpCloud Devices', groupType: 'Group of Devices', numDevices: 12, membershipControls: 'Dynamic', defaultGroup: '', bound: true },
  { id: 12, group: 'Mac Test Group', groupType: 'Group of Devices', numDevices: 3, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 13, group: 'Mobile Devices', groupType: 'Group of Devices', numDevices: 5, membershipControls: 'Dynamic', defaultGroup: '', bound: true },
  { id: 14, group: 'Production Servers', groupType: 'Group of Devices', numDevices: 8, membershipControls: 'Static', defaultGroup: '' },
  { id: 15, group: 'QA Test Devices', groupType: 'Group of Devices', numDevices: 4, membershipControls: 'Static', defaultGroup: '', bound: true },
  { id: 16, group: 'Sales Team', groupType: 'Group of Devices', numDevices: 9, membershipControls: 'Dynamic', defaultGroup: '', bound: true },
  { id: 17, group: 'Engineering Laptops', groupType: 'Group of Devices', numDevices: 15, membershipControls: 'Static', defaultGroup: '' },
  { id: 18, group: 'Windows 10 Devices', groupType: 'Group of Devices', numDevices: 18, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 19, group: 'Windows 11 Devices', groupType: 'Group of Devices', numDevices: 14, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 20, group: 'Unmanaged Devices', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Static', defaultGroup: '' },
  { id: 21, group: 'Test Group A', groupType: 'Group of Devices', numDevices: 1, membershipControls: 'Static', defaultGroup: '' },
  { id: 22, group: 'Test Group B', groupType: 'Group of Devices', numDevices: 2, membershipControls: 'Static', defaultGroup: '' },
  { id: 23, group: 'Staging Environment', groupType: 'Group of Devices', numDevices: 6, membershipControls: 'Static', defaultGroup: '' },
  { id: 24, group: 'Development Machines', groupType: 'Group of Devices', numDevices: 10, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 25, group: 'Executive Devices', groupType: 'Group of Devices', numDevices: 4, membershipControls: 'Static', defaultGroup: '' },
  { id: 26, group: 'Remote Workers', groupType: 'Group of Devices', numDevices: 22, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 27, group: 'Kiosk Devices', groupType: 'Group of Devices', numDevices: 3, membershipControls: 'Static', defaultGroup: '' },
  { id: 28, group: 'Point of Sale', groupType: 'Group of Devices', numDevices: 5, membershipControls: 'Static', defaultGroup: '' },
  { id: 29, group: 'Conference Room', groupType: 'Group of Devices', numDevices: 2, membershipControls: 'Static', defaultGroup: '' },
  { id: 30, group: 'Lab Devices', groupType: 'Group of Devices', numDevices: 7, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 31, group: 'Retired Devices', groupType: 'Group of Devices', numDevices: 0, membershipControls: 'Static', defaultGroup: '' },
  { id: 32, group: 'New Devices', groupType: 'Group of Devices', numDevices: 11, membershipControls: 'Dynamic', defaultGroup: '' },
  { id: 33, group: 'Compliance Group', groupType: 'Group of Devices', numDevices: 16, membershipControls: 'Static', defaultGroup: '' },
  { id: 34, group: 'Security Group', groupType: 'Group of Devices', numDevices: 8, membershipControls: 'Static', defaultGroup: '' },
  { id: 35, group: 'IT Admin Devices', groupType: 'Group of Devices', numDevices: 3, membershipControls: 'Static', defaultGroup: '' },
];

// ─── Devices Data (for App Detail Devices tab) ───

interface DeviceRow {
  id: number;
  deviceName: string;
  status: string;
  os: string;
  osVersion: string;
  mdm: boolean;
  adBound?: boolean;
  bound?: boolean;
}

const devicesData: DeviceRow[] = [
  { id: 1, deviceName: 'AdmWin10Pro', status: 'ACTIVE', os: 'Windows 10 Pro', osVersion: '19045.5679', mdm: true, bound: true },
  { id: 2, deviceName: 'BARISERMUTBF361', status: 'INACTIVE', os: 'Windows 10 Pro', osVersion: '19045.5679', mdm: true, bound: true },
  { id: 3, deviceName: 'CD - 1 (Win 11 2)', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4349', mdm: true },
  { id: 4, deviceName: 'CD - 2 (Win 11)', status: 'INACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, adBound: true, bound: true },
  { id: 5, deviceName: 'CD - 3 (Win 11 (1))', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, bound: true },
  { id: 6, deviceName: 'CD - 4 (Win 11 2)', status: 'INACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, adBound: true },
  { id: 7, deviceName: 'CD - 5 (Win 11 3)', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, bound: true },
  { id: 8, deviceName: 'CD - 6 (Win 11 4)', status: 'INACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true },
  { id: 9, deviceName: 'CD - 7 (Win 11 5)', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, adBound: true, bound: true },
  { id: 10, deviceName: 'CD - 8 (Win 11 6)', status: 'INACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true },
  { id: 11, deviceName: 'CD - 9 (Win 11 7)', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, bound: true },
  { id: 12, deviceName: 'CD - 10 (Win 11 8)', status: 'INACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, adBound: true },
  { id: 13, deviceName: 'DevWin10-1', status: 'ACTIVE', os: 'Windows 10 Pro', osVersion: '19045.5679', mdm: true, bound: true },
  { id: 14, deviceName: 'DevWin10-2', status: 'INACTIVE', os: 'Windows 10 Pro', osVersion: '19045.5679', mdm: true },
  { id: 15, deviceName: 'DevWin11-1', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, bound: true },
  { id: 16, deviceName: 'DevWin11-2', status: 'INACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: false, adBound: true },
  { id: 17, deviceName: 'Laptop-001', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true, bound: true },
  { id: 18, deviceName: 'Laptop-002', status: 'INACTIVE', os: 'Windows 10 Pro', osVersion: '19045.5679', mdm: false, adBound: true },
  { id: 19, deviceName: 'Workstation-01', status: 'ACTIVE', os: 'Windows 11 Pro', osVersion: '26100.4946', mdm: true },
];

const DeviceNameCell = markRaw(
  defineComponent({
    name: 'DeviceNameCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const d = props.data as DeviceRow;
        return h('span', { class: 'text-body-md text-neutral-base truncate' }, d?.deviceName ?? '');
      };
    },
  })
);

const DeviceStatusCell = markRaw(
  defineComponent({
    name: 'DeviceStatusCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const d = props.data as DeviceRow;
        const status = d?.status ?? 'INACTIVE';
        const severity = status === 'ACTIVE' ? 'success' : 'danger';
        return h(Tag, { value: status, severity, class: '!normal-case' });
      };
    },
  })
);

const OSCell = markRaw(
  defineComponent({
    name: 'OSCell',
    props: { data: { type: Object, default: () => ({}) } },
    setup(props) {
      return () => {
        const d = props.data as DeviceRow;
        if (!d) return null;
        const osText = `${d.os} (${d.osVersion})`;
        const labels: ReturnType<typeof h>[] = [];
        if (d.mdm) labels.push(h(Tag, { value: 'MDM', severity: 'success', class: '!normal-case w-fit' }));
        if (d.adBound) labels.push(h(Tag, { value: 'AD Bound', severity: 'info', class: '!normal-case w-fit' }));
        return h(
          'div',
          { class: 'flex flex-col gap-1' },
          [
            h('div', { class: 'flex items-center gap-2' }, [
              h(ComputerDesktopIcon, { class: 'size-5 text-neutral-subtle shrink-0' }),
              h('span', { class: 'text-body-md text-neutral-base' }, osText),
            ]),
            labels.length > 0 ? h('div', { class: 'flex flex-wrap gap-1' }, labels) : null,
          ].filter(Boolean)
        );
      };
    },
  })
);

const devicesColumns = [
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: markRaw(DeviceStatusCell),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'deviceName',
    header: 'Device Name',
    sortable: true,
    width: '280px',
    component: markRaw(DeviceNameCell),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
  {
    field: 'os',
    header: 'OS',
    sortable: true,
    width: '280px',
    component: markRaw(OSCell),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ data: sp.data }),
  },
];

// ─── Device Command Status (for Status tab) ───

interface DeviceCommandStatus {
  id: number;
  deviceName: string;
  status: string;
  filterStatus: string;
  timestamp: string;
  commandStatus: string;
  statusDetails: string;
  statusCode: string;
  softwareVersion: string;
  timestampUtc: string;
}

const deviceCommandStatusData: DeviceCommandStatus[] = [
  { id: 1, deviceName: 'SHAHNAWAZKHC04D', status: 'Update Pending', filterStatus: 'update-pending', timestamp: 'January 8, 2026 09:22 AM', commandStatus: 'COMMAND SENT', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.6', timestampUtc: 'January 8, 2026 02:22 PM (UTC)' },
  { id: 2, deviceName: 'BARISERMUTBF361', status: 'Completed', filterStatus: 'install-success', timestamp: 'January 7, 2026 02:15 PM', commandStatus: 'Install Success', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.6', timestampUtc: 'January 7, 2026 07:15 PM (UTC)' },
  { id: 3, deviceName: 'CD - 1 (Win 11 2)', status: 'Update Pending', filterStatus: 'update-pending', timestamp: 'January 8, 2026 10:45 AM', commandStatus: 'COMMAND SENT', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.6', timestampUtc: 'January 8, 2026 03:45 PM (UTC)' },
  { id: 4, deviceName: 'Laptop-001', status: 'Completed', filterStatus: 'update-success', timestamp: 'January 6, 2026 11:30 AM', commandStatus: 'Install Success', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.6', timestampUtc: 'January 6, 2026 04:30 PM (UTC)' },
  { id: 5, deviceName: 'Workstation-01', status: 'In Progress', filterStatus: 'install-pending', timestamp: 'January 8, 2026 08:00 AM', commandStatus: 'COMMAND SENT', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.6', timestampUtc: 'February 27, 2026 05:14 PM (UTC)' },
  { id: 6, deviceName: 'DevWin11-1', status: 'Failed', filterStatus: 'install-failure', timestamp: 'January 5, 2026 04:20 PM', commandStatus: 'Install Failed', statusDetails: 'Error code 1', statusCode: '1', softwareVersion: '1.6.5', timestampUtc: 'January 5, 2026 09:20 PM (UTC)' },
  { id: 7, deviceName: 'AdmWin10Pro', status: 'Completed', filterStatus: 'uninstall-success', timestamp: 'January 4, 2026 03:00 PM', commandStatus: 'Uninstall Success', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.5', timestampUtc: 'January 4, 2026 08:00 PM (UTC)' },
  { id: 8, deviceName: 'DevWin10-1', status: 'Update Pending', filterStatus: 'update-pending', timestamp: 'January 3, 2026 01:45 PM', commandStatus: 'COMMAND SENT', statusDetails: 'N/A', statusCode: '0', softwareVersion: '1.6.6', timestampUtc: 'January 3, 2026 06:45 PM (UTC)' },
];

const APP_IDS_WITH_COMMANDS = new Set([4]); // Adobe Acrobat Reader DC

const STATUS_FILTER_OPTIONS = [
  { label: 'Install Pending', value: 'install-pending' },
  { label: 'Install Success', value: 'install-success' },
  { label: 'Install Failure', value: 'install-failure' },
  { label: 'License Failure', value: 'license-failure' },
  { label: 'MDM Unenrolled', value: 'mdm-unenrolled' },
  { label: 'Uninstall Success', value: 'uninstall-success' },
  { label: 'Uninstall Pending', value: 'uninstall-pending' },
  { label: 'Uninstall Failure', value: 'uninstall-failure' },
  { label: 'Update Success', value: 'update-success' },
  { label: 'Update Pending', value: 'update-pending' },
  { label: 'Update Failure', value: 'update-failure' },
];

const deviceCommandStatusBaseColumns = [
  {
    field: 'deviceName',
    header: 'Device Name / ID',
    sortable: true,
    width: '280px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: (sp.data.deviceName as string) || '',
      href: '#',
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellToken),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: (sp.data.status as string) || '',
    }),
  },
  {
    field: 'timestamp',
    header: 'Timestamp',
    sortable: true,
    width: '220px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: (sp.data.timestamp as string) || '',
    }),
  },
];

const deviceGroupsColumns = [
  {
    field: 'groupType',
    header: 'Type',
    sortable: false,
    width: '200px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: (sp.data.groupType as string) || 'Group of Devices',
      icon: markRaw(ComputerDesktopIcon),
      href: '#',
    }),
  },
  {
    field: 'group',
    header: 'Group',
    sortable: true,
    width: '280px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.group,
    }),
  },
  {
    field: 'numDevices',
    header: 'Number of Devices',
    sortable: true,
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.numDevices),
    }),
  },
  {
    field: 'membershipControls',
    header: 'Device Membership Controls',
    sortable: true,
    width: '220px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.membershipControls,
    }),
  },
  {
    field: 'defaultGroup',
    header: 'Default Group',
    sortable: false,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: (sp.data.defaultGroup as string) || '—',
    }),
  },
];

// ─── Platform Tabs ───

const platformTabs = [
  { label: 'Windows', value: 'windows' },
  { label: 'Apple', value: 'apple' },
  { label: 'Google', value: 'google' },
];

const WINDOWS_APP_TYPE_OPTIONS = [
  { label: 'Chocolately', value: 'Chocolately' },
  { label: 'JC App Catalog', value: 'JC App Catalog' },
  { label: 'Microsoft Store', value: 'Microsoft Store' },
  { label: 'Private Repo', value: 'Private Repo' },
];

const APPLE_APP_TYPE_OPTIONS = [
  { label: 'App Catalog', value: 'App Catalog' },
  { label: 'VPP', value: 'VPP' },
  { label: 'Self-Hosted', value: 'Self-Hosted' },
];

// ─── Component Definition ───

const SoftwareManagementPage = defineComponent({
  name: 'SoftwareManagementPage',
  props: {
    initialTab: {
      type: String,
      default: 'windows',
    },
    initialDetailTab: {
      type: String,
      default: 'details',
    },
    initialView: {
      type: String as () => 'list' | 'detail',
      default: 'list',
    },
  },
  components: {
    AppNavigation,
    PageHeader,
    CircuitDataTable: DataTable,
    DataTableToolbar,
    PvButton: Button,
    PvDialog: Dialog,
    PvPopover: Popover,
    PvSelectButton: SelectButton,
    PvInputText: InputText,
    PvTextarea: Textarea,
    IconField,
    InputIcon,
    Dropdown,
    TopBar,
    CubeIcon,
    Cog6ToothIcon,
    InformationCircleIcon,
    CheckCircleIcon,
    XMarkIcon,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    LinkText,
    MultiSelect,
    Stepper,
    ToastNotification,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    ConfigPageLayout,
    DetailsKeyValue,
    ArrowLeftIcon,
  },
  setup(props) {
    const activePlatformTab = ref(props.initialTab);
    const selectedApps = ref([]);
    const selectedAppleApps = ref([]);

    const currentView = ref<'list' | 'detail'>(props.initialView);
    const initialApp = props.initialView === 'detail' ? softwareData[3] : null; // Adobe Acrobat Reader DC for Device Groups demo
    const selectedApp = ref<SoftwareApp | AppleSoftwareApp | null>(initialApp);
    const activeDetailTab = ref(props.initialView === 'detail' ? props.initialDetailTab : 'details');
    const softwareName = ref(initialApp?.name ?? '');
    const autoUpdate = ref(true);
    const commandLineOptions = ref('');
    const selectedDeviceGroups = ref<DeviceGroup[]>([]);
    const selectedDevices = ref<DeviceRow[]>([]);
    const showBoundDevices = ref(false);
    const initialDetailState = ref<string>('');
    const showBoundDeviceGroups = ref(false);

    const boundDeviceGroupsCount = computed(() => deviceGroupsData.filter((g) => g.bound).length);
    const filteredDeviceGroupsData = computed(() =>
      showBoundDeviceGroups.value ? deviceGroupsData.filter((g) => g.bound) : deviceGroupsData
    );

    const boundDevicesCount = computed(() => devicesData.filter((d) => d.bound).length);
    const filteredDevicesData = computed(() =>
      showBoundDevices.value ? devicesData.filter((d) => d.bound) : devicesData
    );

    watch(showBoundDevices, (isShowingBound) => {
      if (isShowingBound) {
        selectedDevices.value = [...devicesData.filter((d) => d.bound)];
      }
    });

    watch(showBoundDeviceGroups, (isShowingBound) => {
      if (isShowingBound) {
        selectedDeviceGroups.value = [...deviceGroupsData.filter((g) => g.bound)];
      }
    });

    watch(
      () => [activePlatformTab.value, activeDetailTab.value] as const,
      ([platform, detailTab]) => {
        if (platform === 'google' && detailTab === 'status') {
          activeDetailTab.value = 'details';
        }
      },
      { immediate: true }
    );
    const googlePlayNavExpanded = ref(false);
    const googlePlayIframePage = ref<'PLAY_SEARCH' | 'PRIVATE_APPS' | 'WEB_APPS' | 'STORE_BUILDER'>('PLAY_SEARCH');

    const googlePlayNavItems = [
      { id: 'PLAY_SEARCH' as const, label: 'Search Play Store', icon: PlayIcon },
      { id: 'PRIVATE_APPS' as const, label: 'Private apps', icon: LockClosedIcon },
      { id: 'WEB_APPS' as const, label: 'Web apps', icon: GlobeAltIcon },
      { id: 'STORE_BUILDER' as const, label: 'Organize apps', icon: Squares2X2Icon },
    ];

    const settingsPopoverRef = ref<InstanceType<typeof Popover> | null>(null);
    const packageIdHelpPopoverRef = ref<InstanceType<typeof Popover> | null>(null);

    const toggleSettingsPopover = (event: Event) => {
      settingsPopoverRef.value?.toggle(event);
    };
    const togglePackageIdHelpPopover = (event: Event) => {
      packageIdHelpPopoverRef.value?.toggle(event);
    };

    const googlePlayIframeUrl = computed(() => {
      const token = 'web_token';
      const params = new URLSearchParams({ token, mode: 'SELECT', iframehomepage: googlePlayIframePage.value });
      return `https://play.google.com/work/embedded/search?${params.toString()}`;
    });

    const detailTabs = computed(() => {
      const tabs = [
        { label: 'Details', value: 'details' },
        { label: 'Device Groups', value: 'device-groups' },
        { label: 'Devices', value: 'devices' },
      ];
      if (activePlatformTab.value !== 'google') {
        tabs.push({ label: 'Status', value: 'status' });
      }
      return tabs;
    });

    const pageTitle = computed(() => {
      if (showPrivateRepoForm.value) return 'Add Application';
      if (showMicrosoftStoreForm.value) return 'New Managed Software';
      if (currentView.value === 'detail' && selectedApp.value) return selectedApp.value.name;
      return 'Software Management';
    });

    const backLabel = computed(() => {
      if (showMicrosoftStoreForm.value) return 'Windows';
      const labels: Record<string, string> = { windows: 'Windows', apple: 'Apple', google: 'Google' };
      return labels[activePlatformTab.value] ?? 'Software Management';
    });

    const appDetails = computed(() => {
      const app = selectedApp.value;
      if (!app) return null;
      const type = (app as Record<string, unknown>).applicationType as string;
      if ('currentVersion' in app) {
        const w = app as SoftwareApp;
        return { name: w.name, type, version: w.currentVersion, versionLastUpdated: w.versionLastUpdated, supportedDevices: 'Windows', locationName: undefined };
      }
      const a = app as AppleSoftwareApp;
      return { name: a.name, type, version: '--', versionLastUpdated: a.versionLastUpdated, supportedDevices: a.supportedDevices, locationName: a.locationName };
    });

    const appDeliveryMode = ref<'auto' | 'self-service'>('auto');
    const appDeliveryOptions = [
      { label: 'Auto-Install', value: 'auto' },
      { label: 'Self Service', value: 'self-service' },
    ];
    const showAppDeliveryMethod = computed(() => appDetails.value?.type === 'App Catalog');
    const showPatchSettings = computed(() => activePlatformTab.value === 'windows' || activePlatformTab.value === 'apple');

    const hasDeviceCommands = computed(() => {
      const app = selectedApp.value;
      if (!app || !('id' in app)) return false;
      return APP_IDS_WITH_COMMANDS.has((app as { id: number }).id);
    });

    const showDeviceResultsLogModal = ref(false);
    const selectedCommandForLog = ref<DeviceCommandStatus | null>(null);

    function openDeviceResultsLog(command: DeviceCommandStatus) {
      selectedCommandForLog.value = command;
      showDeviceResultsLogModal.value = true;
    }

    const showStatusFilterModal = ref(false);
    const statusFilterApplied = ref<{ id: string; value: string[] | null }[]>([]);

    const showListFilterModal = ref(false);
    const listFilterApplied = ref<string[]>([]);
    const listFilterDraft = ref<string[]>([]);
    const listRefreshKey = ref(0);

    const listFilterOptions = computed(() =>
      activePlatformTab.value === 'windows' ? WINDOWS_APP_TYPE_OPTIONS : APPLE_APP_TYPE_OPTIONS
    );

    const filteredSoftwareData = computed(() => {
      if (listFilterApplied.value.length === 0) return softwareData;
      return softwareData.filter((row) => listFilterApplied.value.includes(row.applicationType));
    });

    const filteredAppleSoftwareData = computed(() => {
      if (listFilterApplied.value.length === 0) return appleSoftwareData;
      return appleSoftwareData.filter((row) => listFilterApplied.value.includes(row.applicationType));
    });

    const statusFilterDraft = ref<string[]>([]);

    watch(showStatusFilterModal, (visible) => {
      if (visible) {
        const applied = statusFilterApplied.value.find((f) => f.id === 'status');
        statusFilterDraft.value = (applied?.value as string[] | null) ?? [];
      }
    });

    watch(showListFilterModal, (visible) => {
      if (visible) {
        listFilterDraft.value = [...listFilterApplied.value];
      }
    });

    watch(activePlatformTab, () => {
      listFilterApplied.value = [];
    });

    function handleListFilterApply() {
      listFilterApplied.value = [...listFilterDraft.value];
      showListFilterModal.value = false;
    }

    function handleListFilterClear() {
      listFilterApplied.value = [];
      listFilterDraft.value = [];
    }

    function handleListFilterRemove(filter: { key: string; value: string }) {
      listFilterApplied.value = listFilterApplied.value.filter((v) => v !== filter.value);
    }

    const listFilterActiveFilters = computed(() =>
      listFilterApplied.value.map((v) => ({
        key: 'applicationType',
        operator: 'equals' as const,
        value: v,
      }))
    );

    function handleListRefresh() {
      listRefreshKey.value += 1;
    }

    const filteredDeviceCommandStatusData = computed(() => {
      const applied = statusFilterApplied.value.find((f) => f.id === 'status');
      const selected = (applied?.value as string[] | null) ?? null;
      if (!selected || selected.length === 0) return deviceCommandStatusData;
      return deviceCommandStatusData.filter((row) => selected.includes(row.filterStatus));
    });

    function handleStatusFilterApply() {
      statusFilterApplied.value =
        statusFilterDraft.value.length > 0 ? [{ id: 'status', value: [...statusFilterDraft.value] }] : [];
      showStatusFilterModal.value = false;
    }

    function handleStatusFilterClear() {
      statusFilterApplied.value = [];
    }

    function handleStatusFilterRemove(filter: { key: string; value: string }) {
      if (filter.key !== 'status') return;
      const valueToRemove = STATUS_FILTER_OPTIONS.find((o) => o.label === filter.value)?.value ?? filter.value;
      const applied = statusFilterApplied.value.find((f) => f.id === 'status');
      if (!applied || !Array.isArray(applied.value)) return;
      const next = applied.value.filter((v) => v !== valueToRemove);
      statusFilterApplied.value = next.length > 0 ? [{ id: 'status', value: next }] : [];
    }

    const statusFilterActiveFilters = computed(() =>
      statusFilterApplied.value
        .filter((f) => f.value && (Array.isArray(f.value) ? f.value.length > 0 : true))
        .flatMap((f) => {
          if (f.id !== 'status' || !Array.isArray(f.value)) return [];
          return f.value.map((v) => ({
            key: 'status',
            operator: 'equals' as const,
            value: STATUS_FILTER_OPTIONS.find((o) => o.value === v)?.label ?? v,
          }));
        })
    );

    const deviceCommandStatusColumns = computed(() => [
      ...deviceCommandStatusBaseColumns,
      {
        field: 'view',
        header: '',
        sortable: false,
        width: '80px',
        component: markRaw(DataTableCellButton),
        componentProps: (sp: { data: Record<string, unknown> }) => ({
          type: 'Button' as const,
          actionButtons: [
            {
              label: 'View',
              onClick: () => openDeviceResultsLog(sp.data as DeviceCommandStatus),
            },
          ],
        }),
      },
    ]);

    const hasDetailChanges = computed(() => {
      const current = JSON.stringify({
        deviceGroups: selectedDeviceGroups.value.map((g) => g.id).sort(),
        devices: selectedDevices.value.map((d) => d.id).sort(),
        appDeliveryMode: appDeliveryMode.value,
        softwareName: softwareName.value,
        autoUpdate: autoUpdate.value,
        commandLineOptions: commandLineOptions.value,
        showBoundDeviceGroups: showBoundDeviceGroups.value,
        showBoundDevices: showBoundDevices.value,
      });
      return initialDetailState.value !== '' && current !== initialDetailState.value;
    });

    function captureInitialDetailState() {
      initialDetailState.value = JSON.stringify({
        deviceGroups: selectedDeviceGroups.value.map((g) => g.id).sort(),
        devices: selectedDevices.value.map((d) => d.id).sort(),
        appDeliveryMode: appDeliveryMode.value,
        softwareName: softwareName.value,
        autoUpdate: autoUpdate.value,
        commandLineOptions: commandLineOptions.value,
        showBoundDeviceGroups: showBoundDeviceGroups.value,
        showBoundDevices: showBoundDevices.value,
      });
    }

    onMounted(() => {
      if (props.initialView === 'detail') {
        captureInitialDetailState();
      }
    });
    const showLocationName = computed(() => activePlatformTab.value === 'apple' && selectedApp.value && 'locationName' in selectedApp.value);

    const addNewOptionsForPlatform = computed(() => {
      if (activePlatformTab.value === 'apple') {
        return addNewMenuOptions.filter((opt) => opt.value !== 'chocolatey' && opt.value !== 'microsoft-store');
      }
      return addNewMenuOptions;
    });

    function openAppDetail(app: SoftwareApp | AppleSoftwareApp) {
      selectedApp.value = app;
      softwareName.value = app.name;
      autoUpdate.value = true;
      commandLineOptions.value = '';
      appDeliveryMode.value = 'auto';
      selectedDeviceGroups.value = [];
      selectedDevices.value = [];
      showBoundDeviceGroups.value = false;
      showBoundDevices.value = false;
      currentView.value = 'detail';
      activeDetailTab.value = 'details';
      captureInitialDetailState();
    }

    function backToList() {
      currentView.value = 'list';
      selectedApp.value = null;
    }

    function handleWindowsRowClick(event: { data: SoftwareApp }) {
      openAppDetail(event.data);
    }
    function handleAppleRowClick(event: { data: AppleSoftwareApp }) {
      openAppDetail(event.data);
    }

    function handleTabChange(value: string) {
      if (showPrivateRepoForm.value) {
        const tab = privateRepoTabs.value.find((t) => t.value === value);
        if (tab?.disabled) return;
        activePrivateRepoTab.value = value;
      } else if (showMicrosoftStoreForm.value) {
        const tab = microsoftStoreTabs.value.find((t) => t.value === value);
        if (tab?.disabled) return;
        activeMicrosoftStoreTab.value = value;
      } else if (currentView.value === 'detail') {
        activeDetailTab.value = value;
      } else {
        activePlatformTab.value = value;
      }
    }

    function preventRowClickSelection(event: MouseEvent) {
      const row = (event.target as Element)?.closest?.('tr[data-p-selectable-row]');
      if (row && !(event.target as Element)?.closest?.('[data-p-selection-column]')) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    const toast = useToast();
    const showAddWizardDialog = ref(false);
    const addWizardStep = ref('1');
    const selectedCatalogApps = ref<CatalogApp[]>([]);
    const wizardCatalogSearch = ref('');
    const wizardAppConfigs = ref<Record<number, WizardAppConfig>>({});
    const wizardAssociationsTab = ref('devices');
    const wizardSelectedDevices = ref<DeviceRow[]>([]);
    const wizardSelectedDeviceGroups = ref<DeviceGroup[]>([]);

    const showPrivateRepoForm = ref(false);
    const privateRepoAppName = ref('');
    const privateRepoDescription = ref('');
    const privateRepoAppDeliveryMode = ref<'auto' | 'self-service'>('auto');
    const privateRepoCommandLineOptions = ref('');
    const privateRepoSelectedFile = ref<File | null>(null);
    const privateRepoFileInputRef = ref<HTMLInputElement | null>(null);
    const privateRepoStorageBannerDismissed = ref(false);
    const privateRepoDragActive = ref(false);
    const privateRepoDeploymentConfigCollapsed = ref(true);
    const activePrivateRepoTab = ref('details');
    const privateRepoSelectedDeviceGroups = ref<DeviceGroup[]>([]);
    const privateRepoSelectedDevices = ref<DeviceRow[]>([]);
    const privateRepoApplicationSaved = ref(false);

    const privateRepoTabs = computed(() => [
      { label: 'Details', value: 'details' },
      { label: 'Device Groups', value: 'device-groups', disabled: !privateRepoApplicationSaved.value },
      { label: 'Devices', value: 'devices', disabled: !privateRepoApplicationSaved.value },
      { label: 'Status', value: 'status', disabled: !privateRepoApplicationSaved.value },
    ]);

    const showMicrosoftStoreForm = ref(false);
    const microsoftStoreInstallMethod = ref<'search' | 'manual'>('search');
    const microsoftStoreSearch = ref('');
    const microsoftStoreSoftwareName = ref('');
    const microsoftStorePackageId = ref('');
    const microsoftStorePreventAutoUpdate = ref(false);
    const microsoftStorePreventUninstall = ref(false);
    const microsoftStoreApplicationSaved = ref(false);
    const activeMicrosoftStoreTab = ref('details');
    const microsoftStoreSelectedDeviceGroups = ref<DeviceGroup[]>([]);
    const microsoftStoreSelectedDevices = ref<DeviceRow[]>([]);
    const microsoftStoreSoftwareNameTouched = ref(false);
    const microsoftStorePackageIdTouched = ref(false);

    const microsoftStoreSoftwareNameError = computed(
      () => microsoftStoreSoftwareNameTouched.value && !microsoftStoreSoftwareName.value.trim()
    );
    const microsoftStorePackageIdError = computed(
      () => microsoftStorePackageIdTouched.value && !microsoftStorePackageId.value.trim()
    );

    const microsoftStoreTabs = computed(() => [
      { label: 'Details', value: 'details' },
      { label: 'Device Groups', value: 'device-groups', disabled: !microsoftStoreApplicationSaved.value },
      { label: 'Devices', value: 'devices', disabled: !microsoftStoreApplicationSaved.value },
    ]);

    const addWizardSteps: StepDefinition[] = [
      { value: '1', label: 'Select Application' },
      { value: '2', label: 'Configurations' },
      { value: '3', label: 'Associations' },
      { value: '4', label: 'Summary' },
    ];

    const filteredCatalogApps = computed(() => {
      const q = wizardCatalogSearch.value.toLowerCase().trim();
      if (!q) return appCatalogData;
      return appCatalogData.filter((a) => a.name.toLowerCase().includes(q) || a.version.toLowerCase().includes(q));
    });

    const handleAddNewSelect = (option: { label: string; value: string }) => {
      if (option.value === 'jc-app-catalog') {
        selectedCatalogApps.value = [];
        wizardCatalogSearch.value = '';
        wizardAppConfigs.value = {};
        wizardSelectedDevices.value = [];
        wizardSelectedDeviceGroups.value = [];
        addWizardStep.value = '1';
        showAddWizardDialog.value = true;
      } else if (option.value === 'jc-private-repo') {
        privateRepoAppName.value = '';
        privateRepoDescription.value = '';
        privateRepoCommandLineOptions.value = '';
        privateRepoStorageBannerDismissed.value = false;
        privateRepoAppDeliveryMode.value = 'auto';
        privateRepoDeploymentConfigCollapsed.value = true;
        activePrivateRepoTab.value = 'details';
        privateRepoApplicationSaved.value = false;
        privateRepoSelectedDeviceGroups.value = [];
        privateRepoSelectedDevices.value = [];
        showPrivateRepoForm.value = true;
      } else if (option.value === 'microsoft-store') {
        microsoftStoreInstallMethod.value = 'search';
        microsoftStoreSearch.value = '';
        microsoftStoreSoftwareName.value = '';
        microsoftStorePackageId.value = '';
        microsoftStorePreventAutoUpdate.value = false;
        microsoftStorePreventUninstall.value = false;
        microsoftStoreApplicationSaved.value = false;
        microsoftStoreSoftwareNameTouched.value = false;
        microsoftStorePackageIdTouched.value = false;
        activeMicrosoftStoreTab.value = 'details';
        microsoftStoreSelectedDeviceGroups.value = [];
        microsoftStoreSelectedDevices.value = [];
        showMicrosoftStoreForm.value = true;
      }
    };

    function triggerPrivateRepoFileInput() {
      privateRepoFileInputRef.value?.click();
    }

    function onPrivateRepoFileSelect(event: Event) {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      privateRepoSelectedFile.value = file ?? null;
      input.value = '';
    }

    function onPrivateRepoDrop(event: DragEvent) {
      event.preventDefault();
      privateRepoDragActive.value = false;
      const file = event.dataTransfer?.files?.[0];
      if (file && file.name.endsWith('.msi')) {
        privateRepoSelectedFile.value = file;
      }
    }

    function onPrivateRepoDragOver(event: DragEvent) {
      event.preventDefault();
      privateRepoDragActive.value = true;
    }

    function onPrivateRepoDragLeave() {
      privateRepoDragActive.value = false;
    }

    function handlePrivateRepoUpload() {
      privateRepoApplicationSaved.value = true;
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Application uploaded successfully',
        life: 3000,
      });
    }

    function backFromPrivateRepoForm() {
      showPrivateRepoForm.value = false;
      privateRepoApplicationSaved.value = false;
    }

    function backFromMicrosoftStoreForm() {
      showMicrosoftStoreForm.value = false;
      microsoftStoreApplicationSaved.value = false;
    }

    function handleMicrosoftStoreSave() {
      microsoftStoreSoftwareNameTouched.value = true;
      microsoftStorePackageIdTouched.value = true;
      if (!microsoftStoreSoftwareName.value.trim() || !microsoftStorePackageId.value.trim()) {
        return;
      }
      microsoftStoreApplicationSaved.value = true;
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Application saved successfully',
        life: 3000,
      });
    }

    function markMicrosoftStoreSoftwareNameTouched() {
      microsoftStoreSoftwareNameTouched.value = true;
    }
    function markMicrosoftStorePackageIdTouched() {
      microsoftStorePackageIdTouched.value = true;
    }

    const privateRepoFileDisplay = computed(() => {
      const f = privateRepoSelectedFile.value;
      if (!f) return { name: '--', size: '--', date: '--' };
      const sizeKB = (f.size / 1024).toFixed(2);
      return {
        name: f.name,
        size: `${sizeKB} KB`,
        date: new Date(f.lastModified).toLocaleDateString(),
      };
    });

    watch(selectedCatalogApps, (apps) => {
      const next: Record<number, WizardAppConfig> = {};
      for (const app of apps) {
        const existing = wizardAppConfigs.value[app.id];
        next[app.id] = existing ?? {
          softwareName: app.name,
          type: app.type,
          version: app.version,
          autoUpdate: true,
          commandLineOptions: '',
          appDeliveryMode: 'auto',
        };
      }
      wizardAppConfigs.value = next;
    }, { immediate: true });

    function handleAddWizardCancel() {
      showAddWizardDialog.value = false;
    }

    function handleAddWizardSave() {
      showAddWizardDialog.value = false;
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Application added successfully',
        life: 3000,
      });
    }

    const wizardNextDisabled = computed(() => {
      if (addWizardStep.value === '1') return selectedCatalogApps.value.length === 0;
      return false;
    });

    function getAppDeliveryLabel(mode: 'auto' | 'self-service') {
      return mode === 'auto' ? 'Auto-Install' : 'Self Service';
    }

    return {
      menuItems,
      profileMenuItems,
      softwareColumns,
      softwareData,
      filteredSoftwareData,
      filteredAppleSoftwareData,
      appleColumns,
      appleSoftwareData,
      platformTabs,
      activePlatformTab,
      selectedApps,
      selectedAppleApps,
      handleAddNewSelect,
      showPrivateRepoForm,
      activePrivateRepoTab,
      privateRepoTabs,
      privateRepoAppName,
      privateRepoDescription,
      privateRepoAppDeliveryMode,
      privateRepoCommandLineOptions,
      privateRepoSelectedFile,
      privateRepoFileInputRef,
      privateRepoStorageBannerDismissed,
      privateRepoDragActive,
      privateRepoDeploymentConfigCollapsed,
      triggerPrivateRepoFileInput,
      onPrivateRepoFileSelect,
      onPrivateRepoDrop,
      onPrivateRepoDragOver,
      onPrivateRepoDragLeave,
      handlePrivateRepoUpload,
      backFromPrivateRepoForm,
      privateRepoFileDisplay,
      CloudArrowUpIcon,
      showAddWizardDialog,
      addWizardStep,
      addWizardSteps,
      selectedCatalogApps,
      wizardCatalogSearch,
      filteredCatalogApps,
      catalogAppColumns,
      appCatalogData,
      wizardAppConfigs,
      appDeliveryOptions,
      getAppDeliveryLabel,
      wizardAssociationsTab,
      wizardSelectedDevices,
      wizardSelectedDeviceGroups,
      handleAddWizardCancel,
      handleAddWizardSave,
      wizardNextDisabled,
      settingsPopoverRef,
      toggleSettingsPopover,
      packageIdHelpPopoverRef,
      togglePackageIdHelpPopover,
      addNewOptionsForPlatform,
      getAppIconUrl,
      MagnifyingGlassIcon,
      PlayIcon,
      googlePlayNavExpanded,
      googlePlayIframePage,
      googlePlayNavItems,
      googlePlayIframeUrl,
      PlusIcon: markRaw(PlusIcon),
      CubeIcon: markRaw(CubeIcon),
      currentView,
      selectedApp,
      activeDetailTab,
      detailTabs,
      pageTitle,
      backLabel,
      appDetails,
      softwareName,
      autoUpdate,
      commandLineOptions,
      appDeliveryMode,
      showAppDeliveryMethod,
      showPatchSettings,
      showLocationName,
      openAppDetail,
      backToList,
      handleWindowsRowClick,
      handleAppleRowClick,
      handleTabChange,
      deviceGroupsData,
      filteredDeviceGroupsData,
      boundDeviceGroupsCount,
      deviceGroupsColumns,
      hasDeviceCommands,
      deviceCommandStatusData,
      filteredDeviceCommandStatusData,
      deviceCommandStatusColumns,
      showStatusFilterModal,
      statusFilterDraft,
      STATUS_FILTER_OPTIONS,
      statusFilterApplied,
      statusFilterActiveFilters,
      handleStatusFilterApply,
      handleStatusFilterClear,
      handleStatusFilterRemove,
      showListFilterModal,
      listFilterDraft,
      listFilterOptions,
      listFilterApplied,
      listFilterActiveFilters,
      handleListFilterApply,
      handleListFilterClear,
      handleListFilterRemove,
      handleListRefresh,
      listRefreshKey,
      showDeviceResultsLogModal,
      selectedCommandForLog,
      selectedDeviceGroups,
      showBoundDeviceGroups,
      devicesData,
      filteredDevicesData,
      boundDevicesCount,
      devicesColumns,
      selectedDevices,
      showBoundDevices,
      hasDetailChanges,
      preventRowClickSelection,
      privateRepoSelectedDeviceGroups,
      privateRepoSelectedDevices,
      showMicrosoftStoreForm,
      microsoftStoreInstallMethod,
      microsoftStoreSearch,
      microsoftStoreSoftwareName,
      microsoftStorePackageId,
      microsoftStorePreventAutoUpdate,
      microsoftStorePreventUninstall,
      microsoftStoreApplicationSaved,
      activeMicrosoftStoreTab,
      microsoftStoreTabs,
      microsoftStoreSelectedDeviceGroups,
      microsoftStoreSelectedDevices,
      backFromMicrosoftStoreForm,
      handleMicrosoftStoreSave,
      markMicrosoftStoreSoftwareNameTouched,
      markMicrosoftStorePackageIdTouched,
      microsoftStoreSoftwareNameError,
      microsoftStorePackageIdError,
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
        <div v-if="currentView === 'detail' || showPrivateRepoForm || showMicrosoftStoreForm" class="shrink-0 flex items-center h-12 px-4 border-b border-navigation-top_bar-default bg-navigation-top_bar-default">
          <PvButton
            :label="showPrivateRepoForm ? 'Software Management' : backLabel"
            severity="secondary"
            variant="text"
            size="small"
            @click="showPrivateRepoForm ? backFromPrivateRepoForm() : (showMicrosoftStoreForm ? backFromMicrosoftStoreForm() : backToList())"
          >
            <template #icon>
              <ArrowLeftIcon class="size-4" />
            </template>
          </PvButton>
        </div>
        <TopBar v-if="currentView === 'list' && !showPrivateRepoForm && !showMicrosoftStoreForm" />

        <PageHeader
          :title="pageTitle"
          :icon="CubeIcon"
          :tabs="showPrivateRepoForm ? privateRepoTabs : (showMicrosoftStoreForm ? microsoftStoreTabs : (currentView === 'detail' ? detailTabs : platformTabs))"
          :activeTab="showPrivateRepoForm ? activePrivateRepoTab : (showMicrosoftStoreForm ? activeMicrosoftStoreTab : (currentView === 'detail' ? activeDetailTab : activePlatformTab))"
          @update:activeTab="handleTabChange"
        >
          <template v-if="currentView === 'detail'" #actions>
            <PvButton label="Delete" severity="danger" variant="outlined" />
          </template>
        </PageHeader>

        <div v-if="currentView === 'list'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
          <div v-if="!showPrivateRepoForm && !showMicrosoftStoreForm" class="shrink-0 px-6 flex items-center gap-3">
            <Dropdown
              v-if="activePlatformTab !== 'google'"
              label="Add New"
              :icon="PlusIcon"
              iconPosition="left"
              severity="primary"
              :options="addNewOptionsForPlatform"
              @select="handleAddNewSelect"
              class="shrink-0 [&_button]:whitespace-nowrap"
            />
            <div v-if="activePlatformTab === 'windows' || activePlatformTab === 'apple'" class="flex-1 min-w-0">
              <DataTableToolbar
                searchPlaceholder="Search"
                :showAddButton="false"
                :showFilterButton="true"
                :showRefreshButton="true"
                :showColumnsButton="false"
                :showDownloadButton="false"
                :activeFilters="listFilterActiveFilters"
                @filter="showListFilterModal = true"
                @filter-remove="handleListFilterRemove"
                @clear-all="handleListFilterClear"
                @refresh="handleListRefresh"
              />
            </div>
            <div v-else class="flex-1 min-w-0" />
            <PvDialog
              v-model:visible="showListFilterModal"
              header="Filter"
              :draggable="false"
              modal
              :style="{ width: '480px' }"
            >
              <template #closeicon><XMarkIcon /></template>
              <FormField label="Application Type">
                <template #default="{ inputId }">
                  <MultiSelect
                    :id="inputId"
                    v-model="listFilterDraft"
                    :options="listFilterOptions"
                    option-label="label"
                    option-value="value"
                    placeholder="Select application types..."
                    class="w-full"
                    display="chip"
                  />
                </template>
              </FormField>
              <template #footer>
                <div class="flex items-center w-full"></div>
                <div class="flex gap-sm">
                  <PvButton
                    label="Clear All"
                    severity="secondary"
                    variant="text"
                    :disabled="listFilterDraft.length === 0"
                    @click="listFilterDraft = []; handleListFilterClear(); showListFilterModal = false"
                  />
                  <PvButton label="Cancel" severity="secondary" variant="text" @click="showListFilterModal = false" />
                  <PvButton label="Apply" @click="handleListFilterApply" />
                </div>
              </template>
            </PvDialog>
            <PvButton
              class="ml-auto shrink-0"
              severity="secondary"
              variant="text"
              rounded
              aria-label="Organization settings"
              @click="toggleSettingsPopover"
            >
              <template #icon="iconProps">
                <Cog6ToothIcon :class="[iconProps?.class, 'size-5'].filter(Boolean).join(' ')" />
              </template>
            </PvButton>
            <PvPopover ref="settingsPopoverRef">
              <div class="flex flex-col gap-3 p-4 min-w-64">
                <h3 class="text-heading-4 text-neutral-base">Organization details</h3>
                <div class="flex flex-col gap-2">
                  <div>
                    <span class="text-body-sm text-neutral-subtle">Name</span>
                    <p class="text-body-md text-neutral-base">AFC Richmond</p>
                  </div>
                  <div>
                    <span class="text-body-sm text-neutral-subtle">ID</span>
                    <p class="text-body-md text-neutral-base font-mono">LC04joa8dq</p>
                  </div>
                </div>
                <LinkText label="Learn more" href="#" class="text-body-md" />
              </div>
            </PvPopover>
          </div>

          <div v-if="showPrivateRepoForm" class="flex-1 flex flex-col min-h-0 overflow-hidden">
            <div v-if="activePrivateRepoTab === 'details'" class="flex-1 overflow-auto px-6 py-6">
            <ConfigPageLayout class="w-full!" maxWidth="1024">
              <div class="flex flex-col gap-6">
                <div v-if="!privateRepoStorageBannerDismissed" class="flex items-center justify-between gap-4 rounded-lg bg-feedback-info-surface px-4 py-3">
                  <div class="flex items-center gap-2">
                    <InformationCircleIcon class="size-5 text-feedback-info-base shrink-0" />
                    <span class="text-body-md text-neutral-base">You have used 1.52GB of your available 25.00GB storage.</span>
                  </div>
                  <button
                    type="button"
                    class="rounded-full text-neutral-subtle hover:text-neutral-base transition-colors"
                    aria-label="Dismiss"
                    @click="privateRepoStorageBannerDismissed = true"
                  >
                    <XMarkIcon class="size-5" />
                  </button>
                </div>

                <CollapsiblePanel header="Application Details" :toggleable="false">
                  <div class="flex flex-col gap-4">
                    <FormField label="Application Name" required>
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="privateRepoAppName" class="w-full" placeholder="e.g. Adobe Acrobat Reader DC" />
                      </template>
                    </FormField>
                    <FormField label="Description">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="privateRepoDescription" class="w-full" placeholder="e.g. Testing" />
                      </template>
                    </FormField>
                    <div class="grid grid-cols-3 gap-x-6 gap-y-2 text-body-md">
                      <span class="text-neutral-subtle">File Name:</span>
                      <span class="col-span-2 text-neutral-base">{{ privateRepoFileDisplay.name }}</span>
                      <span class="text-neutral-subtle">File Size:</span>
                      <span class="col-span-2 text-neutral-base">{{ privateRepoFileDisplay.size }}</span>
                      <span class="text-neutral-subtle">Upload Date:</span>
                      <span class="col-span-2 text-neutral-base">{{ privateRepoFileDisplay.date }}</span>
                    </div>
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel header="App Delivery Method" :toggleable="false">
                  <template #actions>
                    <button
                      type="button"
                      class="rounded-full text-neutral-subtle hover:text-neutral-base transition-colors"
                      aria-label="More information about App Delivery Method"
                      v-tooltip.top="'Apps can be delivered automatically to devices or made available for users to install via Self Service.'"
                    >
                      <InformationCircleIcon class="size-5" />
                    </button>
                  </template>
                  <div class="flex flex-wrap gap-2">
                    <PvSelectButton
                      v-model="privateRepoAppDeliveryMode"
                      :options="appDeliveryOptions"
                      optionLabel="label"
                      optionValue="value"
                      :allowEmpty="false"
                    >
                      <template #option="slotProps">
                        <div class="flex items-center gap-2">
                          <CheckCircleIcon
                            v-if="slotProps.option.value === privateRepoAppDeliveryMode"
                            class="size-5 text-feedback-success-base shrink-0"
                          />
                          <span>{{ slotProps.option.label }}</span>
                        </div>
                      </template>
                    </PvSelectButton>
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel header="Deployment Configurations" :toggleable="true" v-model:collapsed="privateRepoDeploymentConfigCollapsed">
                  <FormField label="Command Line Options">
                    <template #default="{ inputId }">
                      <PvTextarea :id="inputId" v-model="privateRepoCommandLineOptions" class="w-full" rows="3" />
                    </template>
                  </FormField>
                </CollapsiblePanel>

                <CollapsiblePanel header="Upload Files" :toggleable="false">
                  <div class="flex flex-col gap-4">
                    <p class="text-body-md text-neutral-base">Upload your files below by selecting Choose a file or by dragging a file into the box.</p>
                    <input
                      ref="privateRepoFileInputRef"
                      type="file"
                      accept=".msi"
                      class="hidden"
                      @change="onPrivateRepoFileSelect"
                    />
                    <div
                      class="flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 transition-colors"
                      :class="privateRepoDragActive ? 'border-feedback-info-base bg-feedback-info-surface' : 'border-neutral-default_solid bg-neutral-surface hover:border-neutral-subtle'"
                      @drop="onPrivateRepoDrop"
                      @dragover="onPrivateRepoDragOver"
                      @dragleave="onPrivateRepoDragLeave"
                    >
                      <CloudArrowUpIcon class="size-10 text-neutral-subtle" />
                      <p class="text-body-md text-neutral-subtle">Click &quot;Choose A File&quot; or drag and drop a .msi file.</p>
                      <PvButton label="Choose A File" severity="secondary" variant="outlined" @click="triggerPrivateRepoFileInput" />
                    </div>
                    <p class="text-body-sm text-neutral-subtle">{{ privateRepoSelectedFile ? privateRepoSelectedFile.name : 'No file selected.' }}</p>
                  </div>
                </CollapsiblePanel>
              </div>
            </ConfigPageLayout>
            <div class="shrink-0 flex items-center justify-end gap-3 pt-6 border-t border-neutral-default_solid mt-6">
              <PvButton label="Cancel" severity="secondary" variant="text" @click="backFromPrivateRepoForm" />
              <PvButton label="Upload" :disabled="!privateRepoAppName.trim() || !privateRepoSelectedFile" @click="handlePrivateRepoUpload" />
            </div>
            </div>
            <div v-if="activePrivateRepoTab === 'device-groups'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
              <div class="flex flex-col gap-4 p-6 flex-1 min-h-0">
                <p class="text-body-md text-neutral-base shrink-0">Select the device groups where this app will be installed.</p>
                <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                  <DataTableToolbar
                    searchPlaceholder="Search"
                    :showAddButton="false"
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle shrink-0">{{ deviceGroupsData.length }} Device Groups</span>
                    </template>
                  </DataTableToolbar>
                  <div @click.capture="preventRowClickSelection">
                    <CircuitDataTable
                      :columns="deviceGroupsColumns"
                      :data="deviceGroupsData"
                      dataKey="id"
                      compareSelectionBy="deepEquals"
                      selectionMode="multiple"
                      :selection="privateRepoSelectedDeviceGroups"
                      @update:selection="privateRepoSelectedDeviceGroups = $event"
                      :card="true"
                      size="default"
                      :scrollable="false"
                      :paginator="true"
                      :rows="10"
                      :rowsPerPageOptions="[
                        { label: '10 Items per page', value: 10 },
                        { label: '20 Items per page', value: 20 },
                        { label: '50 Items per page', value: 50 },
                      ]"
                      :showRowsPerPageOptions="true"
                      :showPageReport="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="activePrivateRepoTab === 'devices'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
              <div class="flex flex-col gap-4 p-6 flex-1 min-h-0">
                <p class="text-body-md text-neutral-base shrink-0">Select the devices where this app will be installed / unmanaged.</p>
                <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                  <DataTableToolbar
                    searchPlaceholder="Search"
                    :showAddButton="false"
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle shrink-0">{{ devicesData.length }} Devices</span>
                    </template>
                  </DataTableToolbar>
                  <div @click.capture="preventRowClickSelection">
                    <CircuitDataTable
                      :columns="devicesColumns"
                      :data="devicesData"
                      dataKey="id"
                      compareSelectionBy="deepEquals"
                      selectionMode="multiple"
                      :selection="privateRepoSelectedDevices"
                      @update:selection="privateRepoSelectedDevices = $event"
                      :card="true"
                      size="default"
                      :scrollable="false"
                      :paginator="true"
                      :rows="10"
                      :rowsPerPageOptions="[
                        { label: '10 Items per page', value: 10 },
                        { label: '20 Items per page', value: 20 },
                        { label: '50 Items per page', value: 50 },
                      ]"
                      :showRowsPerPageOptions="true"
                      :showPageReport="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="activePrivateRepoTab === 'status'" class="flex-1 overflow-auto bg-neutral-surface p-6">
              <div class="rounded-lg border border-neutral-default_solid bg-neutral-base p-8 text-center">
                <p class="text-body-lg text-neutral-subtle">No device commands for this application.</p>
              </div>
            </div>
          </div>

          <div v-else-if="showMicrosoftStoreForm" class="flex-1 flex flex-col min-h-0 overflow-hidden">
            <div v-if="activeMicrosoftStoreTab === 'details'" class="flex-1 overflow-auto px-6 py-6">
              <ConfigPageLayout class="w-full!" maxWidth="1024">
                <div class="flex flex-col gap-6">
                  <CollapsiblePanel header="Package Settings" :toggleable="false">
                    <div class="flex flex-col gap-4">
                      <p class="text-body-md text-neutral-base">Select your preferred installation method below</p>
                      <PvSelectButton
                        v-model="microsoftStoreInstallMethod"
                        :options="[
                          { label: 'Search Microsoft Store Directly', value: 'search' },
                          { label: 'Enter Package ID Manually', value: 'manual' },
                        ]"
                        optionLabel="label"
                        optionValue="value"
                        :allowEmpty="false"
                      />
                      <div v-if="microsoftStoreInstallMethod === 'search'" class="flex flex-col gap-2">
                        <FormField label="Search">
                          <template #default="{ inputId }">
                            <IconField>
                              <InputIcon><MagnifyingGlassIcon class="size-4" /></InputIcon>
                              <PvInputText :id="inputId" v-model="microsoftStoreSearch" class="w-full" placeholder="Search" />
                            </IconField>
                          </template>
                        </FormField>
                      </div>
                      <FormField
                        label="Software Name"
                        required
                        :helpText="microsoftStoreSoftwareNameError ? 'Name field empty.' : undefined"
                        :helpTextSeverity="microsoftStoreSoftwareNameError ? 'error' : 'default'"
                      >
                        <template #default="{ inputId }">
                          <PvInputText
                            :id="inputId"
                            v-model="microsoftStoreSoftwareName"
                            class="w-full"
                            placeholder="Example: Slack"
                            :invalid="microsoftStoreSoftwareNameError"
                            @blur="markMicrosoftStoreSoftwareNameTouched"
                          />
                        </template>
                      </FormField>
                      <div class="flex flex-col gap-1">
                        <div class="flex items-center gap-1">
                          <label for="microsoft-store-package-id" class="text-body-sm font-semibold leading-4 text-neutral-base">
                            Package ID<span class="text-feedback-error-base">*</span>
                          </label>
                          <button
                            type="button"
                            class="rounded-full text-neutral-subtle hover:text-neutral-base p-0.5"
                            aria-label="Learn more about Package ID"
                            @click="togglePackageIdHelpPopover"
                          >
                            <InformationCircleIcon class="size-5" />
                          </button>
                        </div>
                        <PvInputText
                          id="microsoft-store-package-id"
                          v-model="microsoftStorePackageId"
                          class="w-full"
                          placeholder="Example: 9wzdncrdk3wp"
                          :invalid="microsoftStorePackageIdError"
                          @blur="markMicrosoftStorePackageIdTouched"
                        />
                        <p v-if="microsoftStorePackageIdError" class="text-body-sm text-feedback-error-base">Package ID field empty.</p>
                      </div>
                      <PvPopover ref="packageIdHelpPopoverRef">
                        <div class="p-4 w-80 max-w-[90vw]">
                          <p class="text-body-md text-neutral-base text-left whitespace-normal">
                            Identify the Package ID from the Microsoft Store community package repository to install software on Windows devices. The Package ID appears in the URL after <code class="rounded bg-neutral-surface px-1">/detail/</code> when viewing an app page.
                          </p>
                        </div>
                      </PvPopover>
                      <div class="flex flex-col gap-3">
                        <CheckboxWithLabel v-model="microsoftStorePreventAutoUpdate" :binary="true">
                          <template #label>
                            <span class="inline-flex items-center gap-1">
                              <span>Prevent auto-update</span>
                              <button type="button" class="rounded-full text-neutral-subtle hover:text-neutral-base" aria-label="More information" v-tooltip.top="'Prevent automatic updates from the Microsoft Store'">
                                <InformationCircleIcon class="size-5" />
                              </button>
                            </span>
                          </template>
                        </CheckboxWithLabel>
                        <CheckboxWithLabel v-model="microsoftStorePreventUninstall" :binary="true">
                          <template #label>
                            <span class="inline-flex items-center gap-1">
                              <span>Prevent users from uninstalling</span>
                              <button type="button" class="rounded-full text-neutral-subtle hover:text-neutral-base" aria-label="More information" v-tooltip.top="'Prevent end users from uninstalling this application'">
                                <InformationCircleIcon class="size-5" />
                              </button>
                            </span>
                          </template>
                        </CheckboxWithLabel>
                      </div>
                    </div>
                  </CollapsiblePanel>
                  <p class="text-body-sm text-neutral-subtle">
                    The community public repository hosted at apps.microsoft.com and any installation scripts and packages from that repository are not components of the JumpCloud Service and are not supported by JumpCloud. You are responsible for any risks with respect to, and for obtaining necessary rights to, any third-party software you download or install using this functionality.
                  </p>
                </div>
              </ConfigPageLayout>
              <div class="shrink-0 flex items-center justify-end gap-3 pt-6 border-t border-neutral-default_solid mt-6">
                <PvButton label="Cancel" severity="secondary" variant="text" @click="backFromMicrosoftStoreForm" />
                <PvButton label="Save & Install" @click="handleMicrosoftStoreSave" />
              </div>
            </div>
            <div v-if="activeMicrosoftStoreTab === 'device-groups'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
              <div class="flex flex-col gap-4 p-6 flex-1 min-h-0">
                <p class="text-body-md text-neutral-base shrink-0">Select the device groups where this app will be installed.</p>
                <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                  <DataTableToolbar
                    searchPlaceholder="Search"
                    :showAddButton="false"
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle shrink-0">{{ deviceGroupsData.length }} Device Groups</span>
                    </template>
                  </DataTableToolbar>
                  <div @click.capture="preventRowClickSelection">
                    <CircuitDataTable
                      :columns="deviceGroupsColumns"
                      :data="deviceGroupsData"
                      dataKey="id"
                      compareSelectionBy="deepEquals"
                      selectionMode="multiple"
                      :selection="microsoftStoreSelectedDeviceGroups"
                      @update:selection="microsoftStoreSelectedDeviceGroups = $event"
                      :card="true"
                      size="default"
                      :scrollable="false"
                      :paginator="true"
                      :rows="10"
                      :rowsPerPageOptions="[
                        { label: '10 Items per page', value: 10 },
                        { label: '20 Items per page', value: 20 },
                        { label: '50 Items per page', value: 50 },
                      ]"
                      :showRowsPerPageOptions="true"
                      :showPageReport="true"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="activeMicrosoftStoreTab === 'devices'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
              <div class="flex flex-col gap-4 p-6 flex-1 min-h-0">
                <p class="text-body-md text-neutral-base shrink-0">Select the devices where this app will be installed / unmanaged.</p>
                <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                  <DataTableToolbar
                    searchPlaceholder="Search"
                    :showAddButton="false"
                    :showFilterButton="false"
                    :showRefreshButton="false"
                    :showColumnsButton="false"
                    :showDownloadButton="false"
                  >
                    <template #saved-views>
                      <span class="text-body-md text-neutral-subtle shrink-0">{{ devicesData.length }} Devices</span>
                    </template>
                  </DataTableToolbar>
                  <div @click.capture="preventRowClickSelection">
                    <CircuitDataTable
                      :columns="devicesColumns"
                      :data="devicesData"
                      dataKey="id"
                      compareSelectionBy="deepEquals"
                      selectionMode="multiple"
                      :selection="microsoftStoreSelectedDevices"
                      @update:selection="microsoftStoreSelectedDevices = $event"
                      :card="true"
                      size="default"
                      :scrollable="false"
                      :paginator="true"
                      :rows="10"
                      :rowsPerPageOptions="[
                        { label: '10 Items per page', value: 10 },
                        { label: '20 Items per page', value: 20 },
                        { label: '50 Items per page', value: 50 },
                      ]"
                      :showRowsPerPageOptions="true"
                      :showPageReport="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="flex-1 flex flex-col min-h-0 px-6">
            <!-- Windows Tab -->
            <CircuitDataTable
              v-if="activePlatformTab === 'windows'"
              :key="'windows-' + listRefreshKey"
              :columns="softwareColumns"
              :data="filteredSoftwareData"
              dataKey="id"
              compareSelectionBy="deepEquals"
              selectionMode="multiple"
              :selection="selectedApps"
              @update:selection="selectedApps = $event"
              @row-click="handleWindowsRowClick"
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
              :key="'apple-' + listRefreshKey"
              :columns="appleColumns"
              :data="filteredAppleSoftwareData"
              dataKey="id"
              compareSelectionBy="deepEquals"
              selectionMode="multiple"
              :selection="selectedAppleApps"
              @update:selection="selectedAppleApps = $event"
              @row-click="handleAppleRowClick"
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
            <!-- Google Tab: Google Play Store iframe with expandable nav -->
            <div v-if="activePlatformTab === 'google'" class="flex-1 flex min-h-0 overflow-hidden">
              <!-- Expandable left nav (expands on hover) -->
              <aside
                class="shrink-0 flex flex-col border-r border-neutral-default_solid bg-neutral-surface transition-[width] duration-200"
                :class="googlePlayNavExpanded ? 'w-56' : 'w-14'"
                @mouseenter="googlePlayNavExpanded = true"
                @mouseleave="googlePlayNavExpanded = false"
              >
                <div class="flex items-center justify-center p-3 border-b border-neutral-default_solid">
                  <div
                    class="shrink-0 overflow-hidden flex items-center"
                    :class="googlePlayNavExpanded ? 'max-w-full' : 'w-8'"
                  >
                    <img
                      src="/google-play-logo.png"
                      alt="Google Play"
                      class="h-8 object-left"
                      :class="googlePlayNavExpanded ? 'w-auto min-w-0' : 'w-12'"
                    />
                  </div>
                </div>
                <nav class="flex flex-col gap-1 px-2 py-4">
                  <button
                    v-for="item in googlePlayNavItems"
                    :key="item.id"
                    type="button"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                    :class="googlePlayIframePage === item.id ? 'bg-neutral-surface_raised text-neutral-base' : 'text-neutral-subtle hover:bg-neutral-surface_raised hover:text-neutral-base'"
                    @click="googlePlayIframePage = item.id"
                  >
                    <component :is="item.icon" class="size-5 shrink-0" />
                    <span v-show="googlePlayNavExpanded" class="text-body-md truncate">{{ item.label }}</span>
                  </button>
                </nav>
              </aside>
              <!-- Google Play iframe -->
              <div class="flex-1 min-w-0 min-h-0 flex flex-col bg-neutral-surface">
                <iframe
                  :src="googlePlayIframeUrl"
                  title="Google Play Store"
                  class="w-full flex-1 min-h-0 border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Detail View -->
        <template v-if="currentView === 'detail' && selectedApp && appDetails">
          <div v-if="activeDetailTab === 'details'" class="flex-1 overflow-auto bg-neutral-surface">
            <ConfigPageLayout class="w-full! h-full!" maxWidth="1024">
              <div class="flex flex-col gap-6">
                <CollapsiblePanel header="Application Details">
                  <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                    <FormField label="Software Name" required class="col-span-2">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="softwareName" class="w-full" />
                      </template>
                    </FormField>
                    <DetailsKeyValue label="Type" :value="appDetails.type" />
                    <DetailsKeyValue label="Version" :value="appDetails.version" />
                    <DetailsKeyValue label="Version Last Updated" :value="appDetails.versionLastUpdated" />
                    <DetailsKeyValue label="Supported Devices" :value="appDetails.supportedDevices" />
                    <DetailsKeyValue v-if="showLocationName" label="Location Name" :value="appDetails.locationName" class="col-span-2" />
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel v-if="showAppDeliveryMethod" header="App Delivery Method">
                  <template #actions>
                    <button
                      type="button"
                      class="rounded-full text-neutral-subtle hover:text-neutral-base transition-colors"
                      aria-label="More information about App Delivery Method"
                      v-tooltip.top="'Apps can be delivered automatically to devices or made available for users to install via Self Service.'"
                    >
                      <InformationCircleIcon class="size-5" />
                    </button>
                  </template>
                  <div class="flex flex-wrap gap-2">
                    <PvSelectButton
                      v-model="appDeliveryMode"
                      :options="appDeliveryOptions"
                      optionLabel="label"
                      optionValue="value"
                      :allowEmpty="false"
                    >
                      <template #option="slotProps">
                        <div class="flex items-center gap-2">
                          <CheckCircleIcon
                            v-if="slotProps.option.value === appDeliveryMode"
                            class="size-5 text-feedback-success-base shrink-0"
                          />
                          <span>{{ slotProps.option.label }}</span>
                        </div>
                      </template>
                    </PvSelectButton>
                  </div>
                </CollapsiblePanel>

                <CollapsiblePanel v-if="showPatchSettings" header="Patch Settings">
                  <div class="flex flex-col gap-4">
                    <CheckboxWithLabel v-model="autoUpdate" :binary="true">
                      <template #label>Auto-Update</template>
                    </CheckboxWithLabel>
                    <FormField label="Command Line Options">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="commandLineOptions" class="w-full" placeholder="" />
                      </template>
                    </FormField>
                    <p class="text-body-md text-neutral-subtle">
                      This app is being installed via Winget. Package ID is: AgileBits.1Password
                      <LinkText label="Learn More" href="#" class="ml-1" />
                    </p>
                  </div>
                </CollapsiblePanel>
              </div>
            </ConfigPageLayout>
          </div>
          <div v-if="activeDetailTab === 'device-groups'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="flex flex-col gap-4 p-6 flex-1 min-h-0">
              <p class="text-body-md text-neutral-base shrink-0">Select the device groups where this app will be installed.</p>
              <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                <DataTableToolbar
                  searchPlaceholder="Search"
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                >
                  <template #saved-views>
                    <span class="text-body-md text-neutral-subtle shrink-0">{{ filteredDeviceGroupsData.length }} Device Groups</span>
                    <CheckboxWithLabel v-model="showBoundDeviceGroups" :binary="true">
                      <template #label>
                        <span class="text-body-md text-neutral-base">Show bound device groups ({{ boundDeviceGroupsCount }})</span>
                      </template>
                    </CheckboxWithLabel>
                  </template>
                </DataTableToolbar>
                <div @click.capture="preventRowClickSelection">
                  <CircuitDataTable
                    :key="'device-groups-' + showBoundDeviceGroups"
                    :columns="deviceGroupsColumns"
                    :data="filteredDeviceGroupsData"
                    dataKey="id"
                    compareSelectionBy="deepEquals"
                    selectionMode="multiple"
                    :selection="selectedDeviceGroups"
                    @update:selection="selectedDeviceGroups = $event"
                    :card="true"
                    size="default"
                    :scrollable="false"
                    :paginator="true"
                    :rows="10"
                    :rowsPerPageOptions="[
                      { label: '10 Items per page', value: 10 },
                      { label: '20 Items per page', value: 20 },
                      { label: '50 Items per page', value: 50 },
                    ]"
                    :showRowsPerPageOptions="true"
                    :showPageReport="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeDetailTab === 'devices'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div class="flex flex-col gap-4 p-6 flex-1 min-h-0">
              <p class="text-body-md text-neutral-base shrink-0">Select the devices where this app will be installed / unmanaged. Device status indicates whether the device is reporting back to the JumpCloud agent.</p>
              <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                <DataTableToolbar
                  searchPlaceholder="Search"
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                >
                  <template #saved-views>
                    <span class="text-body-md text-neutral-subtle shrink-0">{{ filteredDevicesData.length }} Devices</span>
                    <CheckboxWithLabel v-model="showBoundDevices" :binary="true">
                      <template #label>
                        <span class="text-body-md text-neutral-base">Show bound devices ({{ boundDevicesCount }})</span>
                      </template>
                    </CheckboxWithLabel>
                  </template>
                </DataTableToolbar>
                <div @click.capture="preventRowClickSelection">
                  <CircuitDataTable
                    :key="'devices-' + showBoundDevices"
                    :columns="devicesColumns"
                    :data="filteredDevicesData"
                    dataKey="id"
                    compareSelectionBy="deepEquals"
                    selectionMode="multiple"
                    :selection="selectedDevices"
                    @update:selection="selectedDevices = $event"
                    :card="true"
                    size="default"
                    :scrollable="false"
                    :paginator="true"
                    :rows="10"
                    :rowsPerPageOptions="[
                      { label: '10 Items per page', value: 10 },
                      { label: '20 Items per page', value: 20 },
                      { label: '50 Items per page', value: 50 },
                    ]"
                    :showRowsPerPageOptions="true"
                    :showPageReport="true"
                  />
                </div>
              </div>
            </div>
          </div>
          <div v-if="activeDetailTab === 'status'" class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
            <div v-if="hasDeviceCommands" class="flex flex-col gap-4 p-6 flex-1 min-h-0">
              <p class="text-body-md text-neutral-base shrink-0">Device command status for this application.</p>
              <div class="flex flex-col gap-0 -mt-2 flex-1 min-h-0">
                <DataTableToolbar
                  searchPlaceholder="Search by device name..."
                  :showAddButton="false"
                  :showFilterButton="true"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                  :activeFilters="statusFilterActiveFilters"
                  @filter="showStatusFilterModal = true"
                  @filter-remove="handleStatusFilterRemove"
                  @clear-all="handleStatusFilterClear"
                />
                <PvDialog
                  v-model:visible="showStatusFilterModal"
                  header="Filter"
                  :draggable="false"
                  modal
                  :style="{ width: '480px' }"
                >
                  <template #closeicon><XMarkIcon /></template>
                  <FormField label="Status">
                    <template #default="{ inputId }">
                      <MultiSelect
                        :id="inputId"
                        v-model="statusFilterDraft"
                        :options="STATUS_FILTER_OPTIONS"
                        option-label="label"
                        option-value="value"
                        placeholder="Select statuses..."
                        class="w-full"
                        display="chip"
                      />
                    </template>
                  </FormField>
                  <template #footer>
                    <div class="flex items-center w-full"></div>
                    <div class="flex gap-sm">
                      <PvButton
                        label="Clear All"
                        severity="secondary"
                        variant="text"
                        :disabled="statusFilterDraft.length === 0"
                        @click="statusFilterDraft = []; handleStatusFilterClear(); showStatusFilterModal = false"
                      />
                      <PvButton label="Cancel" severity="secondary" variant="text" @click="showStatusFilterModal = false" />
                      <PvButton label="Apply" @click="handleStatusFilterApply" />
                    </div>
                  </template>
                </PvDialog>
                <CircuitDataTable
                  :columns="deviceCommandStatusColumns"
                  :data="filteredDeviceCommandStatusData"
                  dataKey="id"
                  :card="true"
                  size="default"
                  :scrollable="false"
                  :paginator="true"
                  :rows="10"
                  :rowsPerPageOptions="[
                    { label: '10 Items per page', value: 10 },
                    { label: '20 Items per page', value: 20 },
                    { label: '50 Items per page', value: 50 },
                  ]"
                  :showRowsPerPageOptions="true"
                  :showPageReport="true"
                />
              </div>
            </div>
            <div v-else class="flex-1 overflow-auto bg-neutral-surface p-6">
              <div class="rounded-lg border border-neutral-default_solid bg-neutral-base p-8 text-center">
                <p class="text-body-lg text-neutral-subtle">No device commands for this application.</p>
              </div>
            </div>
          </div>
        </template>

        <!-- Detail Footer -->
        <div
          v-if="currentView === 'detail'"
          class="shrink-0 flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base"
        >
          <PvButton label="Cancel" severity="secondary" variant="text" @click="backToList" />
          <PvButton label="Save" :disabled="!hasDetailChanges" />
        </div>

        <!-- Device Results Log Modal -->
        <PvDialog
          v-model:visible="showDeviceResultsLogModal"
          header="Device results log"
          :draggable="false"
          modal
          :style="{ width: '480px' }"
        >
          <template #closeicon><XMarkIcon /></template>
          <div v-if="selectedCommandForLog" class="flex flex-col gap-4">
            <div class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-body-md">
              <span class="text-neutral-subtle">Status:</span>
              <span class="text-neutral-base">{{ selectedCommandForLog.commandStatus }}</span>
              <span class="text-neutral-subtle">Status Details:</span>
              <span class="text-neutral-base">{{ selectedCommandForLog.statusDetails }}</span>
              <span class="text-neutral-subtle">Status Code:</span>
              <span class="text-neutral-base">{{ selectedCommandForLog.statusCode }}</span>
              <span class="text-neutral-subtle">Software Version:</span>
              <span class="text-neutral-base">{{ selectedCommandForLog.softwareVersion }}</span>
              <span class="text-neutral-subtle">Timestamp:</span>
              <span class="text-neutral-base">{{ selectedCommandForLog.timestampUtc }}</span>
            </div>
          </div>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <PvButton label="Ok" @click="showDeviceResultsLogModal = false" />
            </div>
          </template>
        </PvDialog>

        <!-- Add Application Wizard -->
        <PvDialog
          v-model:visible="showAddWizardDialog"
          :header="selectedCatalogApps.length + ' Application' + (selectedCatalogApps.length !== 1 ? 's' : '') + ' selected'"
          :draggable="false"
          modal
          :style="{ width: '900px', maxWidth: '95vw' }"
          :closable="true"
          @update:visible="(v) => !v && handleAddWizardCancel()"
        >
          <template #closeicon><XMarkIcon /></template>
          <Stepper
            :steps="addWizardSteps"
            v-model:value="addWizardStep"
            linear
            :nextDisabled="wizardNextDisabled"
            saveLabel="Save"
            @cancel="handleAddWizardCancel"
            @save="handleAddWizardSave"
          >
            <template #step-1>
              <div class="flex flex-col gap-4">
                <DataTableToolbar
                  searchPlaceholder="Search"
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                  :showColumnsButton="false"
                  :showDownloadButton="false"
                  @search="wizardCatalogSearch = $event"
                />
                <div @click.capture="preventRowClickSelection">
                  <CircuitDataTable
                    :columns="catalogAppColumns"
                    :data="filteredCatalogApps"
                    dataKey="id"
                    compareSelectionBy="deepEquals"
                    selectionMode="multiple"
                    :selection="selectedCatalogApps"
                    @update:selection="selectedCatalogApps = $event"
                    :card="true"
                    size="default"
                    :scrollable="false"
                    :paginator="true"
                    :rows="10"
                    :rowsPerPageOptions="[
                      { label: '10 Items per page', value: 10 },
                      { label: '20 Items per page', value: 20 },
                      { label: '50 Items per page', value: 50 },
                    ]"
                    :showRowsPerPageOptions="true"
                    :showPageReport="true"
                  />
                </div>
              </div>
            </template>
            <template #step-2>
              <div class="flex flex-col gap-6">
                <p class="text-body-md text-neutral-base">You selected {{ selectedCatalogApps.length }} item{{ selectedCatalogApps.length !== 1 ? 's' : '' }}! Next, configure your application{{ selectedCatalogApps.length !== 1 ? 's' : '' }}.</p>
                <div v-for="app in selectedCatalogApps" :key="app.id" class="flex flex-col gap-4">
                  <CollapsiblePanel v-if="wizardAppConfigs[app.id]" :header="app.name + ' App Details'">
                    <div class="flex flex-col gap-6">
                      <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                        <FormField label="Software Name" required class="col-span-2">
                          <template #default="{ inputId }">
                            <PvInputText :id="inputId" v-model="wizardAppConfigs[app.id].softwareName" class="w-full" />
                          </template>
                        </FormField>
                        <DetailsKeyValue label="Type" :value="wizardAppConfigs[app.id].type" />
                        <DetailsKeyValue label="Version" :value="wizardAppConfigs[app.id].version" />
                      </div>
                      <CollapsiblePanel header="App Delivery Method">
                        <template #actions>
                          <button
                            type="button"
                            class="rounded-full text-neutral-subtle hover:text-neutral-base transition-colors"
                            aria-label="More information about App Delivery Method"
                            v-tooltip.top="'Apps can be delivered automatically to devices or made available for users to install via Self Service.'"
                          >
                            <InformationCircleIcon class="size-5" />
                          </button>
                        </template>
                        <div class="flex flex-wrap gap-2">
                          <PvSelectButton
                            v-model="wizardAppConfigs[app.id].appDeliveryMode"
                            :options="appDeliveryOptions"
                            optionLabel="label"
                            optionValue="value"
                            :allowEmpty="false"
                          >
                            <template #option="slotProps">
                              <div class="flex items-center gap-2">
                                <CheckCircleIcon
                                  v-if="slotProps.option.value === wizardAppConfigs[app.id].appDeliveryMode"
                                  class="size-5 text-feedback-success-base shrink-0"
                                />
                                <span>{{ slotProps.option.label }}</span>
                              </div>
                            </template>
                          </PvSelectButton>
                        </div>
                      </CollapsiblePanel>
                      <CollapsiblePanel header="Patching and Configuration">
                        <div class="flex flex-col gap-4">
                          <CheckboxWithLabel v-model="wizardAppConfigs[app.id].autoUpdate" :binary="true">
                            <template #label>Auto-Update</template>
                          </CheckboxWithLabel>
                          <FormField label="Command Line Options">
                            <template #default="{ inputId }">
                              <PvTextarea :id="inputId" v-model="wizardAppConfigs[app.id].commandLineOptions" class="w-full" rows="3" />
                            </template>
                          </FormField>
                        </div>
                      </CollapsiblePanel>
                    </div>
                  </CollapsiblePanel>
                </div>
              </div>
            </template>
            <template #step-3>
              <div class="flex flex-col gap-4">
                <p class="text-body-md text-neutral-base">Deploy to a device or a device group.</p>
                <CollapsiblePanel header="Associations">
                  <Tabs v-model:value="wizardAssociationsTab">
                    <TabList>
                      <Tab value="devices">Devices</Tab>
                      <Tab value="device-groups">Device Groups</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel value="devices">
                        <div class="flex flex-col gap-4 pt-4">
                          <DataTableToolbar
                            searchPlaceholder="Search"
                            :showAddButton="false"
                            :showFilterButton="false"
                            :showRefreshButton="false"
                            :showColumnsButton="false"
                            :showDownloadButton="false"
                          >
                            <template #saved-views>
                              <span class="text-body-md text-neutral-subtle shrink-0">{{ devicesData.length }} Devices</span>
                            </template>
                          </DataTableToolbar>
                          <div @click.capture="preventRowClickSelection">
                            <CircuitDataTable
                              :columns="devicesColumns"
                              :data="devicesData"
                              dataKey="id"
                              compareSelectionBy="deepEquals"
                              selectionMode="multiple"
                              :selection="wizardSelectedDevices"
                              @update:selection="wizardSelectedDevices = $event"
                              :card="true"
                              size="default"
                              :scrollable="false"
                              :paginator="true"
                              :rows="10"
                              :rowsPerPageOptions="[
                                { label: '10 Items per page', value: 10 },
                                { label: '20 Items per page', value: 20 },
                                { label: '50 Items per page', value: 50 },
                              ]"
                              :showRowsPerPageOptions="true"
                              :showPageReport="true"
                            />
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel value="device-groups">
                        <div class="flex flex-col gap-4 pt-4">
                          <DataTableToolbar
                            searchPlaceholder="Search"
                            :showAddButton="false"
                            :showFilterButton="false"
                            :showRefreshButton="false"
                            :showColumnsButton="false"
                            :showDownloadButton="false"
                          >
                            <template #saved-views>
                              <span class="text-body-md text-neutral-subtle shrink-0">{{ deviceGroupsData.length }} Device Groups</span>
                            </template>
                          </DataTableToolbar>
                          <div @click.capture="preventRowClickSelection">
                            <CircuitDataTable
                              :columns="deviceGroupsColumns"
                              :data="deviceGroupsData"
                              dataKey="id"
                              compareSelectionBy="deepEquals"
                              selectionMode="multiple"
                              :selection="wizardSelectedDeviceGroups"
                              @update:selection="wizardSelectedDeviceGroups = $event"
                              :card="true"
                              size="default"
                              :scrollable="false"
                              :paginator="true"
                              :rows="10"
                              :rowsPerPageOptions="[
                                { label: '10 Items per page', value: 10 },
                                { label: '20 Items per page', value: 20 },
                                { label: '50 Items per page', value: 50 },
                              ]"
                              :showRowsPerPageOptions="true"
                              :showPageReport="true"
                            />
                          </div>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </CollapsiblePanel>
              </div>
            </template>
            <template #step-4>
              <div class="flex flex-col gap-6">
                <h3 class="text-heading-3 text-neutral-base">Summary of your selected applications</h3>
                <div v-for="app in selectedCatalogApps" :key="app.id" class="flex flex-col gap-4">
                  <CollapsiblePanel v-if="wizardAppConfigs[app.id]" :header="(wizardAppConfigs[app.id]?.softwareName ?? app.name) + ' Summary'">
                    <ol class="list-decimal list-inside space-y-3 text-body-md text-neutral-base">
                      <li>You're adding {{ wizardAppConfigs[app.id]?.softwareName ?? app.name }} from the {{ activePlatformTab === 'apple' ? 'Apple' : 'JumpCloud' }} App Catalog</li>
                      <li>You have named your software app: {{ wizardAppConfigs[app.id]?.softwareName }}. You selected {{ wizardAppConfigs[app.id]?.autoUpdate ? 'Auto-Update' : 'manual updates' }}</li>
                      <li>App delivery method: {{ getAppDeliveryLabel(wizardAppConfigs[app.id]?.appDeliveryMode ?? 'auto') }}</li>
                      <li>You're deploying {{ wizardAppConfigs[app.id]?.softwareName }} to {{ wizardSelectedDevices.length }} Device{{ wizardSelectedDevices.length !== 1 ? 's' : '' }} and {{ wizardSelectedDeviceGroups.length }} Device Group{{ wizardSelectedDeviceGroups.length !== 1 ? 's' : '' }}</li>
                    </ol>
                  </CollapsiblePanel>
                </div>
              </div>
            </template>
          </Stepper>
        </PvDialog>

        <ToastNotification />
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

export const DeviceGroupsTab: Story = {
  args: {
    initialTab: 'windows',
    initialView: 'detail',
    initialDetailTab: 'device-groups',
  },
};

export const DevicesTab: Story = {
  args: {
    initialTab: 'windows',
    initialView: 'detail',
    initialDetailTab: 'devices',
  },
};

export const StatusTab: Story = {
  args: {
    initialTab: 'windows',
    initialView: 'detail',
    initialDetailTab: 'status',
  },
};
