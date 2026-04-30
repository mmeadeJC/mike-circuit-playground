import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref, computed, markRaw, defineComponent } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  FormField,
  CheckboxWithLabel,
  RadioButtonWithLabel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellLink,
  DataTableCellStatus,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Select from 'primevue/select';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';

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
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  KeyIcon,
  ShieldExclamationIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
  LinkIcon,
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';
import DetailsKeyValue from '@/components/DetailsKeyValue.vue';
import DetailPageLayout from '@/components/layout/page-layouts/DetailPageLayout.vue';
import ConfigPageLayout from '@/components/layout/page-layouts/ConfigPageLayout.vue';

import {
  DeviceManagementIcon,
  AccessIcon,
  DeviceListsIcon,
  DeviceGroupsIcon,
  SsoIcon,
  SaasManagementIcon,
  PasswordManagerIcon,
  WorkflowIcon,
} from '@jumpcloud/icons';

// ─── Navigation Data ───

const menuItems = [
  {
    label: 'Get Started',
    leftIcon: markRaw(RocketLaunchIcon),
  },
  {
    label: 'Home',
    leftIcon: markRaw(HomeIcon),
  },
  {
    label: 'Alerts',
    leftIcon: markRaw(BellIcon),
    count: 25,
  },
  {
    label: 'User Management',
    leftIcon: markRaw(UserGroupIcon),
    items: [
      { label: 'Users', leftIcon: markRaw(UserIcon) },
      { label: 'User Groups', leftIcon: markRaw(UsersIcon) },
      { separator: true },
      { label: 'Active Directories' },
      { label: 'Cloud Directories' },
      { label: 'HR Directories' },
      { label: 'Identity Providers' },
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
      { label: 'Patch Management' },
      { label: 'Policy Groups' },
      { label: 'Software Management' },
      { label: 'MDM' },
    ],
  },
  {
    label: 'Access',
    leftIcon: markRaw(AccessIcon),
    items: [
      { label: 'SSO Applications', leftIcon: markRaw(SsoIcon) },
      { label: 'Access Requests', leftIcon: markRaw(ClipboardDocumentCheckIcon) },
      { label: 'AI & SaaS Management', leftIcon: markRaw(SaasManagementIcon) },
      { label: 'Vault', leftIcon: markRaw(PasswordManagerIcon), isNew: true },
      { separator: true },
      { label: 'LDAP' },
      { label: 'RADIUS' },
    ],
  },
  {
    label: 'Workflows',
    leftIcon: markRaw(WorkflowIcon),
  },
  {
    label: 'Security',
    leftIcon: markRaw(ShieldCheckIcon),
    items: [
      { label: 'Conditional Access Policies' },
      { label: 'Conditional Lists' },
      { label: 'Certificate Authority', isNew: true },
      { label: 'MFA Configurations' },
      { label: 'Device Trust' },
      { label: 'Password Policies' },
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
  },
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
      { label: 'Launch User Portal', rightIcon: markRaw(ArrowTopRightOnSquareIcon) },
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
      { separator: true },
      { label: 'Use Old Navigation', itemType: 'button' },
    ],
  },
];

// ─── SSO App Type Definition ───

interface SsoApp {
  id: number;
  name: string;
  type: string;
  status: string;
  ssoStatus: string;
  certStatus: string;
  certExpiry: string;
  keyStatus: string;
  identityMgmtStatus: string;
  visibleInPortal: boolean;
  users: number;
  groups: number;
  lastModified: string;
  ssoUrl: string;
  entityId: string;
  created: string;
  displayLabel: string;
  appDescription: string;
  showInPortal: boolean;
  portalImageType: string;
  spEntityId: string;
  acsUrl: string;
  idpEntityId: string;
  idpSsoUrl: string;
  idpCertificate: string;
  signResponse: boolean;
  signAssertion: boolean;
  encryptAssertion: boolean;
  defaultRelayState: string;
  nameIdFormat: string;
  mfaClaimFormat: boolean;
  sendSingleMfa: boolean;
  sendSpecificFactors: boolean;
  sendSingleAndSpecific: boolean;
  includeGroupAttribute: boolean;
}

// ─── Mock Data: SSO Applications ───

const ssoAppsData: SsoApp[] = [
  {
    id: 1, name: 'Salesforce', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 03-15-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true, users: 142, groups: 5, lastModified: 'Feb 14, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/salesforce', entityId: 'https://salesforce.com/sp',
    created: 'Jan 10, 2024', displayLabel: 'Salesforce', appDescription: 'CRM and sales platform for enterprise teams.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://salesforce.com/sp/entity', acsUrl: 'https://login.salesforce.com/saml/acs',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/salesforce', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/salesforce/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoB...',
    signResponse: true, signAssertion: true, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: true, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 2, name: 'Slack', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 06-01-2027', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Active', visibleInPortal: true, users: 230, groups: 8, lastModified: 'Feb 12, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/slack', entityId: 'https://slack.com/sp',
    created: 'Mar 15, 2024', displayLabel: 'Slack', appDescription: 'Team messaging and collaboration.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://slack.com/sp/entity', acsUrl: 'https://slack.com/sso/saml',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/slack', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/slack/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoC...',
    signResponse: true, signAssertion: false, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 3, name: 'GitHub Enterprise', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 12-10-2027', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true, users: 87, groups: 3, lastModified: 'Feb 10, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/github', entityId: 'https://github.com/orgs/acme/saml',
    created: 'Jun 22, 2024', displayLabel: 'GitHub Enterprise', appDescription: 'Code hosting and version control for enterprise.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://github.com/orgs/acme/saml/metadata', acsUrl: 'https://github.com/orgs/acme/saml/consume',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/github', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/github/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoD...',
    signResponse: true, signAssertion: true, encryptAssertion: true, defaultRelayState: '', nameIdFormat: 'persistent',
    mfaClaimFormat: true, sendSingleMfa: true, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: true,
  },
  {
    id: 4, name: 'AWS Console', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 02-01-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: false, users: 45, groups: 4, lastModified: 'Jan 28, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/aws', entityId: 'urn:amazon:webservices',
    created: 'Feb 01, 2024', displayLabel: 'AWS Console', appDescription: 'Amazon Web Services management console.', showInPortal: false, portalImageType: 'color',
    spEntityId: 'urn:amazon:webservices', acsUrl: 'https://signin.aws.amazon.com/saml',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/aws', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/aws/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoE...',
    signResponse: true, signAssertion: true, encryptAssertion: false, defaultRelayState: 'https://console.aws.amazon.com/', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 5, name: 'Jira Cloud', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 04-12-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Active', visibleInPortal: true, users: 112, groups: 6, lastModified: 'Feb 05, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/jira', entityId: 'https://acme.atlassian.net',
    created: 'Apr 12, 2024', displayLabel: 'Jira Cloud', appDescription: 'Issue tracking and project management.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://acme.atlassian.net', acsUrl: 'https://acme.atlassian.net/plugins/servlet/saml/auth',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/jira', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/jira/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoF...',
    signResponse: true, signAssertion: false, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 6, name: 'Confluence', type: 'SAML 2.0', status: 'Inactive', ssoStatus: 'Single Sign-On Inactive', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 04-12-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: false, users: 98, groups: 4, lastModified: 'Jan 15, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/confluence', entityId: 'https://acme.atlassian.net/wiki',
    created: 'Apr 12, 2024', displayLabel: 'Confluence', appDescription: 'Team knowledge base and documentation.', showInPortal: false, portalImageType: 'logo',
    spEntityId: 'https://acme.atlassian.net/wiki', acsUrl: 'https://acme.atlassian.net/wiki/plugins/servlet/saml/auth',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/confluence', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/confluence/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoG...',
    signResponse: true, signAssertion: true, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 7, name: 'Zoom', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 05-30-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true, users: 215, groups: 2, lastModified: 'Feb 18, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/zoom', entityId: 'https://acme.zoom.us',
    created: 'May 30, 2024', displayLabel: 'Zoom', appDescription: 'Video conferencing and meetings.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://acme.zoom.us', acsUrl: 'https://acme.zoom.us/saml/SSO',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/zoom', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/zoom/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoH...',
    signResponse: true, signAssertion: false, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 8, name: 'Datadog', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 08-08-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true, users: 34, groups: 2, lastModified: 'Feb 02, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/datadog', entityId: 'https://app.datadoghq.com/account/saml/metadata.xml',
    created: 'Aug 08, 2024', displayLabel: 'Datadog', appDescription: 'Cloud monitoring and analytics platform.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://app.datadoghq.com/account/saml/metadata.xml', acsUrl: 'https://app.datadoghq.com/account/saml/assertion',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/datadog', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/datadog/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoI...',
    signResponse: true, signAssertion: true, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 9, name: 'Notion', type: 'SAML 2.0', status: 'Inactive', ssoStatus: 'Single Sign-On Inactive', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 09-14-2028', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: false, users: 180, groups: 3, lastModified: 'Dec 20, 2025',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/notion', entityId: 'https://www.notion.so/sso/saml',
    created: 'Sep 14, 2024', displayLabel: 'Notion', appDescription: 'All-in-one workspace for notes and collaboration.', showInPortal: false, portalImageType: 'logo',
    spEntityId: 'https://www.notion.so/sso/saml', acsUrl: 'https://www.notion.so/sso/saml/acs',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/notion', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/notion/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoJ...',
    signResponse: false, signAssertion: true, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
  {
    id: 10, name: '15Five', type: 'SAML 2.0', status: 'Active', ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', certExpiry: 'Expires 11-20-2030', keyStatus: 'IDP Private Key Valid', identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true, users: 67, groups: 2, lastModified: 'Feb 19, 2026',
    ssoUrl: 'https://sso.jumpcloud.com/saml2/15five', entityId: 'https://my.15five.com/saml/sp',
    created: 'Nov 01, 2024', displayLabel: '15Five', appDescription: 'Performance management and employee engagement.', showInPortal: true, portalImageType: 'logo',
    spEntityId: 'https://my.15five.com/saml/sp', acsUrl: 'https://my.15five.com/saml/sp/acs',
    idpEntityId: 'https://sso.jumpcloud.com/saml2/15five', idpSsoUrl: 'https://sso.jumpcloud.com/saml2/15five/sso',
    idpCertificate: 'MIIDpDCCAoygAwIBAgIGAXoK...',
    signResponse: true, signAssertion: true, encryptAssertion: false, defaultRelayState: '', nameIdFormat: 'emailAddress',
    mfaClaimFormat: true, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false, includeGroupAttribute: false,
  },
];

// ─── List View: Column Definitions ───

const ssoAppColumns = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
    width: '240px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.type,
      href: '#',
    }),
  },
  {
    field: 'type',
    header: 'Type',
    sortable: true,
    width: '130px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.type,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellStatus),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: sp.data.status,
    }),
  },
  {
    field: 'users',
    header: 'Users',
    sortable: true,
    width: '100px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.users),
    }),
  },
  {
    field: 'groups',
    header: 'Groups',
    sortable: true,
    width: '100px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.groups),
    }),
  },
  {
    field: 'lastModified',
    header: 'Last Modified',
    sortable: true,
    width: '150px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.lastModified,
    }),
  },
];

// ─── Detail View: User Groups Table (matches screenshot) ───

const userGroupsData = [
  { id: 1, type: 'JumpCloud', name: 'Admin Sudo Granted', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 2, type: 'JumpCloud', name: 'AFC Richmond Management', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 3, type: 'JumpCloud', name: 'All Users', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 4, type: 'JumpCloud', name: 'Approval Group (Access Requests)', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 5, type: 'JumpCloud', name: 'asdf', groupType: 'Group of Users', membershipControls: 'Dynamic' },
  { id: 6, type: 'JumpCloud', name: 'Atlassian for Tech Writing', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 7, type: 'JumpCloud', name: 'Blogin', groupType: 'Group of Users', membershipControls: 'Static' },
  { id: 8, type: 'JumpCloud', name: 'Contract Developers', groupType: 'Group of Users', membershipControls: 'Dynamic (Review Required)' },
  { id: 9, type: 'JumpCloud', name: 'Contractors', groupType: 'Group of Users', membershipControls: 'Dynamic (Review Required)' },
  { id: 10, type: 'JumpCloud', name: 'Crowdstrike', groupType: 'Group of Users', membershipControls: 'Static' },
];

const userGroupsColumns = [
  {
    field: 'type',
    header: 'Type',
    width: '130px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.type,
      icon: markRaw(SsoIcon),
    }),
  },
  {
    field: 'name',
    header: 'User Group',
    sortable: true,
    width: '300px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.groupType,
      href: '#',
    }),
  },
  {
    field: 'membershipControls',
    header: 'Membership Controls',
    sortable: true,
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.membershipControls,
    }),
  },
];

// ─── Detail View: Tabs ───

const detailTabs = [
  { label: 'General Info', value: 'general-info' },
  { label: 'SSO', value: 'sso' },
  { label: 'Identity Management', value: 'identity-mgmt' },
  { label: 'User Groups', value: 'user-groups' },
];

// ─── SSO Tab: Attribute Mapping ───

const ssoAttributeData = [
  { id: 1, spAttribute: 'email', jcAttribute: 'email' },
  { id: 2, spAttribute: 'firstname', jcAttribute: 'firstname' },
  { id: 3, spAttribute: 'lastname', jcAttribute: 'lastname' },
];

const ssoAttributeColumns = [
  {
    field: 'spAttribute',
    header: 'Service Provider Attribute Name',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.spAttribute,
    }),
  },
  {
    field: 'jcAttribute',
    header: 'JumpCloud Attribute Name',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.jcAttribute,
    }),
  },
];

// ─── Identity Management Tab: SCIM Mapping ───

const requiredMappingData = [
  { id: 1, jcAttribute: 'email', scimAttribute: 'userName', applied: 'create and update' },
];

const requiredMappingColumns = [
  {
    field: 'jcAttribute',
    header: 'JumpCloud Attribute',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.jcAttribute }),
  },
  {
    field: 'scimAttribute',
    header: 'SCIM Attribute',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.scimAttribute }),
  },
  {
    field: 'applied',
    header: 'Applied',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.applied }),
  },
];

const optionalMappingData = [
  { id: 1, jcAttribute: 'company', scimAttribute: '$enterpriseUser.organization', applied: 'create and update' },
  { id: 2, jcAttribute: 'costCenter', scimAttribute: '$enterpriseUser.costCenter', applied: 'create and update' },
  { id: 3, jcAttribute: 'department', scimAttribute: '$enterpriseUser.department', applied: 'create and update' },
  { id: 4, jcAttribute: 'employeeIdentifier', scimAttribute: '$enterpriseUser.employeeNumber', applied: 'create and update' },
  { id: 5, jcAttribute: 'employeeType', scimAttribute: 'userType', applied: 'create and update' },
  { id: 6, jcAttribute: 'firstname', scimAttribute: 'name.givenName', applied: 'create and update' },
  { id: 7, jcAttribute: 'jobTitle', scimAttribute: 'title', applied: 'create and update' },
  { id: 8, jcAttribute: 'lastname', scimAttribute: 'name.familyName', applied: 'create and update' },
];

const optionalMappingColumns = requiredMappingColumns;

// ─── Name ID Format Options ───

const nameIdFormatOptions = [
  { label: 'emailAddress', value: 'emailAddress' },
  { label: 'persistent', value: 'persistent' },
  { label: 'transient', value: 'transient' },
  { label: 'unspecified', value: 'unspecified' },
];

// ─── Actions dropdown items ───

const actionsMenuItems = [
  { label: 'Export Metadata' },
  { label: 'Copy Metadata URL' },
  { separator: true },
  { label: 'Deactivate SSO' },
];

// ─── Component Definition ───

const SsoApplicationsPage = defineComponent({
  name: 'SsoApplicationsPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    FormField,
    CheckboxWithLabel,
    RadioButtonWithLabel,
    CircuitDataTable,
    DataTableToolbar,
    PvButton: Button,
    PvTag: Tag,
    PvInputText: InputText,
    PvTextarea: Textarea,
    PvSelect: Select,
    PvDivider: Divider,
    PvMenu: Menu,
    AdminTopBar,
    DetailsKeyValue,
    DetailPageLayout,
    ConfigPageLayout,
    ArrowLeftIcon,
    ChevronRightIcon,
    GlobeAltIcon,
    KeyIcon,
    ShieldExclamationIcon,
    Cog8ToothIcon,
    DocumentTextIcon,
    EyeIcon,
    PencilIcon,
    LinkIcon,
    ChevronDownIcon,
  },
  setup() {
    const currentView = ref<'list' | 'detail'>('list');
    const selectedApp = ref<SsoApp | null>(null);
    const activeTab = ref('general-info');
    const selectedApps = ref([]);

    function openAppDetail(app: SsoApp) {
      selectedApp.value = app;
      activeTab.value = 'general-info';
      currentView.value = 'detail';
    }

    function backToList() {
      currentView.value = 'list';
      selectedApp.value = null;
    }

    const pageTitle = computed(() =>
      currentView.value === 'list' ? 'SSO Applications' : selectedApp.value?.name ?? ''
    );

    const pageTabs = computed(() =>
      currentView.value === 'detail' ? detailTabs : []
    );

    // General Info form state
    const displayLabel = ref('');
    const appDescription = ref('');
    const portalImageType = ref('logo');
    const showInPortal = ref(true);

    // SSO Config form state
    const spEntityId = ref('');
    const acsUrl = ref('');
    const idpEntityId = ref('');
    const idpSsoUrl = ref('');
    const idpCertificate = ref('');
    const signResponse = ref(false);
    const signAssertion = ref(false);
    const encryptAssertion = ref(false);
    const defaultRelayState = ref('');
    const nameIdFormat = ref('emailAddress');
    const mfaClaimFormat = ref(false);
    const sendSingleMfa = ref(false);
    const sendSpecificFactors = ref(false);
    const sendSingleAndSpecific = ref(false);
    const includeGroupAttribute = ref(false);

    // Collapsed states
    const configSettingsCollapsed = ref(false);
    const exportMappingCollapsed = ref(false);

    // Table selections
    const selectedDetailGroups = ref([]);

    // Actions menu ref
    const actionsMenu = ref();

    function initFormFromApp(app: SsoApp) {
      displayLabel.value = app.displayLabel;
      appDescription.value = app.appDescription;
      portalImageType.value = app.portalImageType;
      showInPortal.value = app.showInPortal;
      spEntityId.value = app.spEntityId;
      acsUrl.value = app.acsUrl;
      idpEntityId.value = app.idpEntityId;
      idpSsoUrl.value = app.idpSsoUrl;
      idpCertificate.value = app.idpCertificate;
      signResponse.value = app.signResponse;
      signAssertion.value = app.signAssertion;
      encryptAssertion.value = app.encryptAssertion;
      defaultRelayState.value = app.defaultRelayState;
      nameIdFormat.value = app.nameIdFormat;
      mfaClaimFormat.value = app.mfaClaimFormat;
      sendSingleMfa.value = app.sendSingleMfa;
      sendSpecificFactors.value = app.sendSpecificFactors;
      sendSingleAndSpecific.value = app.sendSingleAndSpecific;
      includeGroupAttribute.value = app.includeGroupAttribute;
      configSettingsCollapsed.value = false;
      exportMappingCollapsed.value = false;
    }

    function handleAppClick(app: SsoApp) {
      initFormFromApp(app);
      openAppDetail(app);
    }

    return {
      menuItems,
      profileMenuItems,
      currentView,
      selectedApp,
      activeTab,
      selectedApps,
      pageTitle,
      pageTabs,
      ssoAppsData,
      ssoAppColumns,
      userGroupsData,
      userGroupsColumns,
      ssoAttributeData,
      ssoAttributeColumns,
      requiredMappingData,
      requiredMappingColumns,
      optionalMappingData,
      optionalMappingColumns,
      nameIdFormatOptions,
      actionsMenuItems,
      backToList,
      handleAppClick,
      // General Info form
      displayLabel,
      appDescription,
      portalImageType,
      showInPortal,
      // SSO Config form
      spEntityId,
      acsUrl,
      idpEntityId,
      idpSsoUrl,
      idpCertificate,
      signResponse,
      signAssertion,
      encryptAssertion,
      defaultRelayState,
      nameIdFormat,
      mfaClaimFormat,
      sendSingleMfa,
      sendSpecificFactors,
      sendSingleAndSpecific,
      includeGroupAttribute,
      // Collapsed states
      configSettingsCollapsed,
      exportMappingCollapsed,
      // Detail table selections
      selectedDetailGroups,
      // Actions menu
      actionsMenu,
      // Icons
      SsoIcon: markRaw(SsoIcon),
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="sso applications"
        :collapsible="true"
        :topNavToggle="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <!-- Back button bar (detail view only) -->
        <div v-if="currentView === 'detail'" class="shrink-0 flex items-center h-12 px-4 border-b border-navigation-top_bar-default bg-navigation-top_bar-default">
          <PvButton
            label="SSO Applications"
            severity="secondary"
            variant="text"
            size="small"
            @click="backToList"
          >
            <template #icon>
              <ArrowLeftIcon class="size-4" />
            </template>
          </PvButton>
        </div>

        <!-- AdminTopBar (list view only) -->
        <AdminTopBar v-if="currentView === 'list'" />

        <PageHeader
          :title="pageTitle"
          :icon="SsoIcon"
          :tabs="pageTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template #actions>
            <template v-if="currentView === 'list'">
              <PvButton label="Add New Application" />
            </template>
            <template v-else>
              <PvButton label="Actions" severity="secondary" variant="outlined" @click="actionsMenu.toggle($event)">
                <template #icon>
                  <ChevronDownIcon class="size-4" />
                </template>
              </PvButton>
              <PvMenu ref="actionsMenu" :model="actionsMenuItems" :popup="true" />
            </template>
          </template>
        </PageHeader>

        <!-- Status tags row (detail view only) -->
        <div v-if="currentView === 'detail' && selectedApp" class="shrink-0 flex items-center gap-2 px-6 py-2 border-b border-neutral-default_solid bg-neutral-base">
          <PvTag :value="selectedApp.ssoStatus" :severity="selectedApp.status === 'Active' ? 'success' : 'danger'" />
          <PvTag :value="selectedApp.certStatus + ' | ' + selectedApp.certExpiry" severity="info" />
          <PvTag :value="selectedApp.keyStatus" severity="success" />
          <PvTag :value="selectedApp.identityMgmtStatus" :severity="selectedApp.identityMgmtStatus.includes('Active') ? 'success' : 'warn'" />
          <div v-if="selectedApp.visibleInPortal" class="flex items-center gap-1 ml-2 text-body-sm text-neutral-subtle">
            <EyeIcon class="size-4" />
            <span>Visible in user portal</span>
          </div>
        </div>

        <!-- ============ LIST VIEW ============ -->
        <div v-if="currentView === 'list'" class="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div class="shrink-0 px-6 pt-6">
            <DataTableToolbar
              searchPlaceholder="Search applications..."
              :showFilterButton="true"
              :showRefreshButton="true"
              :showColumnsButton="true"
            />
          </div>
          <div class="flex-1 flex flex-col min-h-0 px-6">
            <CircuitDataTable
              :columns="ssoAppColumns"
              :data="ssoAppsData"
              selectionMode="multiple"
              :selection="selectedApps"
              @update:selection="selectedApps = $event"
              @row-click="handleAppClick($event.data)"
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

        <!-- ============ DETAIL VIEW ============ -->
        <template v-if="currentView === 'detail' && selectedApp">

          <!-- ── Tab: General Info ── -->
          <ConfigPageLayout v-if="activeTab === 'general-info'" class="w-full! h-full!">
            <div class="flex flex-col gap-6">

              <CollapsiblePanel header="Application Information">
                <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                  <div class="flex flex-col gap-4">
                    <FormField label="Display Label" required>
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="displayLabel" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="Description">
                      <template #default="{ inputId }">
                        <PvTextarea :id="inputId" v-model="appDescription" class="w-full" rows="4" placeholder="Add a description that users will see for this app in their User Portal." />
                      </template>
                    </FormField>
                  </div>
                  <div class="flex flex-col gap-4">
                    <div class="flex flex-col gap-2">
                      <span class="text-body-md-semi-bold text-neutral-base">User Portal Image</span>
                      <div class="flex flex-col gap-2">
                        <RadioButtonWithLabel v-model="portalImageType" value="logo" name="portalImage">
                          <template #label>Logo</template>
                        </RadioButtonWithLabel>
                        <RadioButtonWithLabel v-model="portalImageType" value="color" name="portalImage">
                          <template #label>Color Indicator</template>
                        </RadioButtonWithLabel>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2">
                      <span class="text-body-md-semi-bold text-neutral-base">Preview Image</span>
                      <div class="flex items-center justify-center w-24 h-24 rounded-md bg-neutral-surface border border-neutral-default_solid">
                        <span class="text-body-sm text-neutral-subtle">Logo</span>
                      </div>
                      <span class="text-body-sm text-neutral-subtle">Default file displayed.</span>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Show in User Portal">
                <div class="flex flex-col gap-3">
                  <p class="text-body-md text-neutral-subtle">Unselecting will remove this app from the User Portal for all users, but any users bound to the application will still be enabled for SSO access.</p>
                  <CheckboxWithLabel v-model="showInPortal">
                    <template #label>Show this application in User Portal</template>
                  </CheckboxWithLabel>
                </div>
              </CollapsiblePanel>

            </div>
          </ConfigPageLayout>

          <!-- ── Tab: SSO ── -->
          <ConfigPageLayout v-if="activeTab === 'sso'" class="w-full! h-full!">
            <div class="flex flex-col gap-6">

              <CollapsiblePanel header="SAML Single Sign-On">
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">To learn more about this configuration, including restricting access to specific users, please visit <PvButton label="Learn More" variant="link" size="small" class="p-0!" /></p>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Configuration Settings">
                <div class="flex flex-col gap-6">
                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">JumpCloud Metadata</span>
                    <div class="flex items-center gap-2">
                      <PvButton label="Export Metadata" severity="secondary" variant="outlined" size="small" />
                      <PvButton label="Copy Metadata URL" severity="secondary" variant="outlined" size="small" />
                    </div>
                  </div>

                  <PvDivider />

                  <div class="grid grid-cols-2 gap-x-6 gap-y-4">
                    <FormField label="IDP Entity ID" class="col-span-2">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="idpEntityId" class="w-full" readonly />
                      </template>
                    </FormField>
                    <FormField label="SP Entity ID" class="col-span-2">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="spEntityId" class="w-full" />
                      </template>
                    </FormField>
                    <FormField label="ACS URL" class="col-span-2">
                      <template #default="{ inputId }">
                        <PvInputText :id="inputId" v-model="acsUrl" class="w-full" />
                      </template>
                    </FormField>
                  </div>

                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">IDP URL</span>
                    <div class="flex items-center gap-2">
                      <PvInputText :modelValue="idpSsoUrl" class="flex-1" readonly />
                      <PvButton label="Copy" severity="secondary" variant="outlined" size="small" />
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="MFA Claim Configuration">
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Configure how MFA information is communicated to the SAML assertion.</p>
                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">Claim Format</span>
                    <CheckboxWithLabel v-model="mfaClaimFormat">
                      <template #label>Authentication Method Reference (AMR)</template>
                    </CheckboxWithLabel>
                  </div>
                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">Auth Context</span>
                    <div class="flex flex-col gap-2">
                      <CheckboxWithLabel v-model="sendSingleMfa">
                        <template #label>Send a single value for all successful MFA factors</template>
                      </CheckboxWithLabel>
                      <CheckboxWithLabel v-model="sendSpecificFactors">
                        <template #label>Send specific factors</template>
                      </CheckboxWithLabel>
                      <CheckboxWithLabel v-model="sendSingleAndSpecific">
                        <template #label>Send single value and specific factors</template>
                      </CheckboxWithLabel>
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Attributes">
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Required attributes are not editable. Additional attributes may be added but support will vary by service provider.</p>
                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">User Attributes</span>
                    <PvButton label="Add Attribute" severity="secondary" size="small" />
                  </div>
                  <CircuitDataTable
                    :columns="ssoAttributeColumns"
                    :data="ssoAttributeData"
                    size="small"
                    :card="false"
                  />
                  <PvDivider />
                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">Constant Attributes</span>
                    <PvButton label="Add Attribute" severity="secondary" size="small" />
                  </div>
                  <CheckboxWithLabel v-model="includeGroupAttribute">
                    <template #label>Include Group Attribute</template>
                  </CheckboxWithLabel>
                </div>
              </CollapsiblePanel>

              <PvDivider />

              <div class="flex">
                <PvButton label="Deactivate SSO" severity="danger" variant="outlined" />
              </div>

            </div>
          </ConfigPageLayout>

          <!-- ── Tab: Identity Management ── -->
          <ConfigPageLayout v-if="activeTab === 'identity-mgmt'" class="w-full! h-full!">
            <div class="flex flex-col gap-6">

              <CollapsiblePanel header="Identity Management">
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Set up an Identity Management integration using the SCIM standard to provision, update, deactivate, and import user accounts in this application as changes are made in JumpCloud. <PvButton label="Learn more" variant="link" size="small" class="p-0!" /></p>
                  <div>
                    <PvButton label="Configure" severity="secondary" variant="outlined" size="small">
                      <template #icon>
                        <PencilIcon class="size-4" />
                      </template>
                    </PvButton>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel
                v-model:collapsed="configSettingsCollapsed"
                toggleable
                header="Configuration Settings"
              >
                <template #titleicon="iconProps">
                  <Cog8ToothIcon :class="iconProps.class" />
                </template>
                <template #toggleicon="iconProps">
                  <ChevronRightIcon :class="iconProps.class" />
                </template>
                <div class="flex flex-col gap-6">

                  <CollapsiblePanel
                    v-model:collapsed="exportMappingCollapsed"
                    toggleable
                    header="Export Attribute Mapping"
                  >
                    <template #titleicon="iconProps">
                      <DocumentTextIcon :class="iconProps.class" />
                    </template>
                    <template #actions>
                      <PvTag value="PREVIEW" severity="info" />
                      <PvButton label="Edit" variant="outlined" severity="secondary" size="small">
                        <template #icon>
                          <PencilIcon class="size-4" />
                        </template>
                      </PvButton>
                    </template>
                    <template #toggleicon="iconProps">
                      <ChevronRightIcon :class="iconProps.class" />
                    </template>
                    <div class="flex flex-col gap-6">
                      <p class="text-body-md text-neutral-subtle">Map user attributes between JumpCloud and {{ selectedApp.name }}.</p>

                      <div class="flex flex-col gap-3">
                        <h4 class="text-heading-4 text-neutral-base">Required Mappings</h4>
                        <CircuitDataTable
                          :columns="requiredMappingColumns"
                          :data="requiredMappingData"
                          size="small"
                          :card="false"
                        />
                      </div>

                      <div class="flex flex-col gap-3">
                        <h4 class="text-heading-4 text-neutral-base">Optional Mappings</h4>
                        <CircuitDataTable
                          :columns="optionalMappingColumns"
                          :data="optionalMappingData"
                          size="small"
                          :card="false"
                        />
                      </div>
                    </div>
                  </CollapsiblePanel>

                </div>
              </CollapsiblePanel>

            </div>
          </ConfigPageLayout>

          <!-- ── Tab: User Groups ── -->
          <div v-if="activeTab === 'user-groups'" class="flex-1 flex flex-col min-h-0 overflow-hidden">
            <div class="shrink-0 px-6 pt-6">
              <DataTableToolbar
                searchPlaceholder="Search..."
                :showFilterButton="true"
                :showRefreshButton="true"
                :showColumnsButton="true"
              >
                <template #saved-views>
                  <CheckboxWithLabel :modelValue="false">
                    <template #label>Show bound User Groups (0)</template>
                  </CheckboxWithLabel>
                </template>
              </DataTableToolbar>
            </div>
            <div class="flex-1 flex flex-col min-h-0 px-6">
              <CircuitDataTable
                :columns="userGroupsColumns"
                :data="userGroupsData"
                selectionMode="multiple"
                :selection="selectedDetailGroups"
                @update:selection="selectedDetailGroups = $event"
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

        </template>

        <!-- Footer (detail view) -->
        <div
          v-if="currentView === 'detail'"
          class="shrink-0 flex items-center justify-end gap-3 px-6 py-3 border-t border-neutral-default_solid bg-neutral-base"
        >
          <PvButton label="Cancel" severity="secondary" variant="text" @click="backToList" />
          <PvButton label="Undo Changes" severity="secondary" variant="outlined" />
          <PvButton label="Save" />
        </div>

      </div>
    </div>
  `,
});

// ─── Storybook Meta ───

const meta: Meta<typeof SsoApplicationsPage> = {
  title: "Projects/Burak's Playground/Pages/SSO Applications",
  component: SsoApplicationsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SsoApplicationsPage>;

export const Default: Story = {};
