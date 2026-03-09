import type { Meta, StoryObj } from '@storybook/vue3';
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
  DataTableCellToken,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
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
  ChevronRightIcon,
  ChevronDownIcon,
  Cog8ToothIcon,
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '@/components/TopBar.vue';
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
  { label: 'Get Started', leftIcon: markRaw(RocketLaunchIcon) },
  { label: 'Home', leftIcon: markRaw(HomeIcon) },
  { label: 'Alerts', leftIcon: markRaw(BellIcon), count: 25 },
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
  { label: 'Workflows', leftIcon: markRaw(WorkflowIcon) },
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
  { label: 'Settings', leftIcon: markRaw(Cog6ToothIcon) },
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

// ─── SsoApp Type ───

interface SsoApp {
  id: number;
  displayLabel: string;
  logoUrl: string;
  status: string;
  showInPortal: boolean;
  supportedFunctionality: string[];
  certExpiry: string;
  ssoStatus: string;
  certStatus: string;
  keyStatus: string;
  identityMgmtStatus: string;
  visibleInPortal: boolean;
  appDescription: string;
  portalImageType: string;
  idpEntityId: string;
  spEntityId: string;
  acsUrl: string;
  loginUrl: string;
  idpUrl: string;
  mfaClaimFormat: boolean;
  sendSingleMfa: boolean;
  sendSpecificFactors: boolean;
  sendSingleAndSpecific: boolean;
  includeGroupAttribute: boolean;
  groupManagementEnabled: boolean;
}

// ─── Mock Data: SSO Applications ───

const ssoAppsData: SsoApp[] = [
  {
    id: 1, displayLabel: '15Five', logoUrl: '/logos/15five.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 11-20-2030',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Performance management and employee engagement.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://my.15five.com/saml/sp',
    acsUrl: 'https://my.15five.com/saml/sp/acs', loginUrl: 'https://my.15five.com/login',
    idpUrl: 'https://sso.jumpcloud.com/saml2/15five',
    mfaClaimFormat: true, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 2, displayLabel: 'ADP', logoUrl: '/logos/adp.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 12-12-2030',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Payroll and HR management solutions.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://fed.adp.com/saml/sp',
    acsUrl: 'https://fed.adp.com/saml/acs', loginUrl: 'https://fed.adp.com/login',
    idpUrl: 'https://sso.jumpcloud.com/saml2/adp',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 3, displayLabel: 'ADP Workforce Now', logoUrl: '/logos/adp.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 03-25-2030',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'ADP Workforce Now HR management.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://fed.adp.com/saml/sp/wfn',
    acsUrl: 'https://fed.adp.com/saml/acs/wfn', loginUrl: 'https://fed.adp.com/login/wfn',
    idpUrl: 'https://sso.jumpcloud.com/saml2/adp-wfn',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 4, displayLabel: 'AFCR GWS', logoUrl: '/logos/google.png', status: 'Active', showInPortal: true,
    supportedFunctionality: [], certExpiry: 'Expires 10-07-2029',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Google Workspace for AFCR organization.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://accounts.google.com/saml/sp',
    acsUrl: 'https://accounts.google.com/saml/acs', loginUrl: 'https://accounts.google.com',
    idpUrl: 'https://sso.jumpcloud.com/saml2/afcr-gws',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 5, displayLabel: 'AWS IAM Identity Center', logoUrl: '/logos/aws.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 01-19-2031',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'AWS IAM Identity Center for centralized access management.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://YOUR_AWS_REGION.signin.aws.amazon.com/platform/saml/YOUR_SUBDOMAIN',
    acsUrl: 'https://YOUR_AWS_REGION.signin.aws.amazon.com/platform/saml/acs/YOUR_SSO_ID',
    loginUrl: 'https://YOUR_SUBDOMAIN.awsapps.com/start',
    idpUrl: 'https://sso.jumpcloud.com/saml2/aws-iam-identity-center',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: true,
  },
  {
    id: 6, displayLabel: 'AWS SSO', logoUrl: '/logos/aws.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 10-19-2026',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Active', visibleInPortal: true,
    appDescription: 'AWS Single Sign-On legacy configuration.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://signin.aws.amazon.com/saml/sp',
    acsUrl: 'https://signin.aws.amazon.com/saml', loginUrl: 'https://aws.amazon.com/console',
    idpUrl: 'https://sso.jumpcloud.com/saml2/aws-sso',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 7, displayLabel: 'Adobe Creative Cloud', logoUrl: '/logos/adobe.png', status: 'Active', showInPortal: true,
    supportedFunctionality: [], certExpiry: 'Expires 09-16-2029',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Adobe Creative Cloud for creative professionals.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://ims-na1.adobelogin.com/saml/sp',
    acsUrl: 'https://ims-na1.adobelogin.com/saml/acs', loginUrl: 'https://creative.adobe.com',
    idpUrl: 'https://sso.jumpcloud.com/saml2/adobe-cc',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 8, displayLabel: 'Apple Business Manager', logoUrl: '/logos/apple.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 04-22-2028',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Apple device and content management for enterprises.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://business.apple.com/saml/sp',
    acsUrl: 'https://business.apple.com/saml/acs', loginUrl: 'https://business.apple.com',
    idpUrl: 'https://sso.jumpcloud.com/saml2/apple-bm',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 9, displayLabel: 'AssetSonar', logoUrl: '/logos/assetsonar.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['JIT Provisioning', 'Identity Management'], certExpiry: 'Expires 02-26-2031',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Active', visibleInPortal: true,
    appDescription: 'IT asset tracking and management platform.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://app.assetsonar.com/saml/sp',
    acsUrl: 'https://app.assetsonar.com/saml/acs', loginUrl: 'https://app.assetsonar.com/login',
    idpUrl: 'https://sso.jumpcloud.com/saml2/assetsonar',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: true,
  },
  {
    id: 10, displayLabel: 'Atlassian Cloud', logoUrl: '/logos/atlassian.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['JIT Provisioning', 'Identity Management'], certExpiry: 'Expires 11-18-2030',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Active', visibleInPortal: true,
    appDescription: 'Atlassian Cloud suite including Jira and Confluence.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://acme.atlassian.net/saml/sp',
    acsUrl: 'https://acme.atlassian.net/plugins/servlet/saml/auth', loginUrl: 'https://acme.atlassian.net',
    idpUrl: 'https://sso.jumpcloud.com/saml2/atlassian-cloud',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: true, groupManagementEnabled: true,
  },
  {
    id: 11, displayLabel: 'Box', logoUrl: '/logos/box.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 06-15-2029',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Cloud content management and file sharing.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://sso.services.box.net/sp',
    acsUrl: 'https://sso.services.box.net/sp/ACS.saml2', loginUrl: 'https://app.box.com/login',
    idpUrl: 'https://sso.jumpcloud.com/saml2/box',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 12, displayLabel: 'Cisco Meraki', logoUrl: '/logos/cisco-meraki.png', status: 'Active', showInPortal: false,
    supportedFunctionality: [], certExpiry: 'Expires 08-01-2028',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: false,
    appDescription: 'Cloud-managed IT solutions and networking.', portalImageType: 'color',
    idpEntityId: 'JumpCloud', spEntityId: 'https://dashboard.meraki.com/saml/sp',
    acsUrl: 'https://dashboard.meraki.com/saml/acs', loginUrl: 'https://dashboard.meraki.com',
    idpUrl: 'https://sso.jumpcloud.com/saml2/cisco-meraki',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 13, displayLabel: 'Dropbox Business', logoUrl: '/logos/dropbox.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 03-22-2030',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Inactive', visibleInPortal: true,
    appDescription: 'Cloud storage and team collaboration.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://www.dropbox.com/saml/sp',
    acsUrl: 'https://www.dropbox.com/saml/acs', loginUrl: 'https://www.dropbox.com/login',
    idpUrl: 'https://sso.jumpcloud.com/saml2/dropbox',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: false,
  },
  {
    id: 14, displayLabel: 'GitHub Enterprise', logoUrl: '/logos/github.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['JIT Provisioning', 'Identity Management'], certExpiry: 'Expires 12-10-2027',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Active', visibleInPortal: true,
    appDescription: 'Code hosting and version control for enterprise.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'https://github.com/orgs/acme/saml/metadata',
    acsUrl: 'https://github.com/orgs/acme/saml/consume', loginUrl: 'https://github.com/login',
    idpUrl: 'https://sso.jumpcloud.com/saml2/github',
    mfaClaimFormat: true, sendSingleMfa: true, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: true, groupManagementEnabled: true,
  },
  {
    id: 15, displayLabel: 'Google Workspace', logoUrl: '/logos/google.png', status: 'Active', showInPortal: true,
    supportedFunctionality: ['Identity Management'], certExpiry: 'Expires 09-30-2029',
    ssoStatus: 'Single Sign-On Active', certStatus: 'IDP Certificate Valid', keyStatus: 'IDP Private Key Valid',
    identityMgmtStatus: 'Identity Management Active', visibleInPortal: true,
    appDescription: 'Google Workspace productivity and collaboration suite.', portalImageType: 'logo',
    idpEntityId: 'JumpCloud', spEntityId: 'google.com',
    acsUrl: 'https://accounts.google.com/saml/acs', loginUrl: 'https://accounts.google.com',
    idpUrl: 'https://sso.jumpcloud.com/saml2/google-workspace',
    mfaClaimFormat: false, sendSingleMfa: false, sendSpecificFactors: false, sendSingleAndSpecific: false,
    includeGroupAttribute: false, groupManagementEnabled: true,
  },
];

// ─── List View: Column Definitions ───

const listColumns = [
  {
    field: 'displayLabel',
    header: 'Name',
    sortable: true,
    frozen: true,
    width: '260px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.displayLabel,
      image: sp.data.logoUrl,
      imageAlt: sp.data.displayLabel,
      href: '#',
    }),
  },
  {
    field: 'status',
    header: 'Status',
    frozen: true,
    width: '90px',
    component: markRaw(DataTableCellToken),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      type: 'Status',
      statusLabel: sp.data.status,
    }),
  },
  {
    field: 'showInPortal',
    header: 'Show In User Portal',
    sortable: true,
    width: '160px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.showInPortal ? 'Yes' : 'No',
    }),
  },
  {
    field: 'supportedFunctionality',
    header: 'Supported Functionality',
    width: '250px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: (sp.data.supportedFunctionality as string[]).join(', ') || '\u2014',
    }),
  },
  {
    field: 'certExpiry',
    header: 'IdP Certificate Status',
    width: '180px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.certExpiry,
    }),
  },
];

// ─── Detail View: User Groups ───

const userGroupsData = [
  { id: 1, type: 'JumpCloud', name: 'Admin Sudo Granted', membershipControls: 'Static' },
  { id: 2, type: 'JumpCloud', name: 'AFC Richmond Management', membershipControls: 'Static' },
  { id: 3, type: 'JumpCloud', name: 'All Users', membershipControls: 'Static' },
  { id: 4, type: 'JumpCloud', name: 'Approval Group (Access Requests)', membershipControls: 'Static' },
  { id: 5, type: 'JumpCloud', name: 'asdf', membershipControls: 'Dynamic' },
  { id: 6, type: 'JumpCloud', name: 'Atlassian for Tech Writing', membershipControls: 'Static' },
  { id: 7, type: 'JumpCloud', name: 'Blogin', membershipControls: 'Static' },
  { id: 8, type: 'JumpCloud', name: 'Contract Developers', membershipControls: 'Dynamic (Review Required)' },
  { id: 9, type: 'JumpCloud', name: 'Contractors', membershipControls: 'Dynamic (Review Required)' },
  { id: 10, type: 'JumpCloud', name: 'Crowdstrike', membershipControls: 'Static' },
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

// ─── Detail View: SSO Attribute Mapping ───

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
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.spAttribute }),
  },
  {
    field: 'jcAttribute',
    header: 'JumpCloud Attribute Name',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({ label: sp.data.jcAttribute }),
  },
];

// ─── Detail View: Identity Management SCIM Mappings ───

const requiredMappingData = [
  { id: 1, jcAttribute: 'email', scimAttribute: 'userName', applied: 'create and update' },
  { id: 2, jcAttribute: 'firstname', scimAttribute: 'name.givenName', applied: 'create and update' },
  { id: 3, jcAttribute: 'lastname', scimAttribute: 'name.familyName', applied: 'create and update' },
  { id: 4, jcAttribute: 'toScimEmails(jcUser.email)', scimAttribute: 'emails', applied: 'create and update' },
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
  { id: 6, jcAttribute: 'jobTitle', scimAttribute: 'title', applied: 'create and update' },
  { id: 7, jcAttribute: 'notNull(jcUser.lastname) ? jc...', scimAttribute: 'displayName', applied: 'create and update' },
  { id: 8, jcAttribute: 'notNull(providerUser:external...', scimAttribute: 'externalId', applied: 'create and update' },
  { id: 9, jcAttribute: 'notNull(providerUser:locale) ...', scimAttribute: 'locale', applied: 'create and update' },
  { id: 10, jcAttribute: 'notNull(providerUser:preferre...', scimAttribute: 'preferredLanguage', applied: 'create and update' },
  { id: 11, jcAttribute: 'toScimAddresses(find)(jcUser.address...', scimAttribute: 'addresses', applied: 'create and update' },
  { id: 12, jcAttribute: 'toScimPhoneNumbers(find)(jcUser:ph...', scimAttribute: 'phoneNumbers', applied: 'create and update' },
];

const optionalMappingColumns = requiredMappingColumns;

// ─── Detail View: Tabs & Actions ───

const detailTabs = [
  { label: 'Details', value: 'details' },
  { label: 'Identity Management', value: 'identity-mgmt' },
  { label: 'User Groups', value: 'user-groups' },
];

const actionsMenuItems = [
  { label: 'Export Metadata' },
  { label: 'Copy Metadata URL' },
  { separator: true },
  { label: 'Deactivate SSO' },
];

// ─── Component Definition ───

const SsoAppsPage = defineComponent({
  name: 'SsoAppsPage',
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
    PvDivider: Divider,
    PvMenu: Menu,
    TopBar,
    DetailsKeyValue,
    DetailPageLayout,
    ConfigPageLayout,
    ChevronRightIcon,
    ChevronDownIcon,
    Cog8ToothIcon,
    DocumentTextIcon,
    EyeIcon,
    PencilIcon,
  },
  setup() {
    const currentView = ref<'list' | 'detail'>('list');
    const selectedApp = ref<SsoApp | null>(null);
    const activeTab = ref('details');
    const selectedApps = ref([]);

    function openAppDetail(app: SsoApp) {
      selectedApp.value = app;
      activeTab.value = 'details';
      currentView.value = 'detail';
    }

    function backToList() {
      currentView.value = 'list';
      selectedApp.value = null;
    }

    const pageTitle = computed(() =>
      currentView.value === 'list' ? 'SSO Applications' : selectedApp.value?.displayLabel ?? '',
    );

    const pageTabs = computed(() =>
      currentView.value === 'detail' ? detailTabs : [],
    );

    const displayLabel = ref('');
    const appDescription = ref('');
    const portalImageType = ref('logo');
    const showInPortal = ref(true);

    const spEntityId = ref('');
    const acsUrl = ref('');
    const idpEntityId = ref('');
    const loginUrl = ref('');
    const idpUrl = ref('');
    const mfaClaimFormat = ref(false);
    const sendSingleMfa = ref(false);
    const sendSpecificFactors = ref(false);
    const sendSingleAndSpecific = ref(false);
    const includeGroupAttribute = ref(false);

    const groupManagementEnabled = ref(false);

    const configSettingsCollapsed = ref(false);
    const exportMappingCollapsed = ref(false);

    const selectedDetailGroups = ref([]);
    const actionsMenu = ref();

    function initFormFromApp(app: SsoApp) {
      displayLabel.value = app.displayLabel;
      appDescription.value = app.appDescription;
      portalImageType.value = app.portalImageType;
      showInPortal.value = app.showInPortal;
      spEntityId.value = app.spEntityId;
      acsUrl.value = app.acsUrl;
      idpEntityId.value = app.idpEntityId;
      loginUrl.value = app.loginUrl;
      idpUrl.value = app.idpUrl;
      mfaClaimFormat.value = app.mfaClaimFormat;
      sendSingleMfa.value = app.sendSingleMfa;
      sendSpecificFactors.value = app.sendSpecificFactors;
      sendSingleAndSpecific.value = app.sendSingleAndSpecific;
      includeGroupAttribute.value = app.includeGroupAttribute;
      groupManagementEnabled.value = app.groupManagementEnabled;
      configSettingsCollapsed.value = false;
      exportMappingCollapsed.value = false;
    }

    function handleAppClick(app: SsoApp) {
      initFormFromApp(app);
      openAppDetail(app);
    }

    const listColumnsComputed = computed(() => listColumns.map((col) => {
      if (col.field === 'displayLabel') {
        return {
          ...col,
          componentProps: (sp: { data: Record<string, unknown> }) => ({
            label: sp.data.displayLabel,
            image: sp.data.logoUrl,
            imageAlt: sp.data.displayLabel,
            href: '#',
            onClick: (e: Event) => {
              e.preventDefault();
              handleAppClick(sp.data as unknown as SsoApp);
            },
          }),
        };
      }
      return col;
    }));

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
      listColumns: listColumnsComputed,
      userGroupsData,
      userGroupsColumns,
      ssoAttributeData,
      ssoAttributeColumns,
      requiredMappingData,
      requiredMappingColumns,
      optionalMappingData,
      optionalMappingColumns,
      actionsMenuItems,
      backToList,
      handleAppClick,
      displayLabel,
      appDescription,
      portalImageType,
      showInPortal,
      spEntityId,
      acsUrl,
      idpEntityId,
      loginUrl,
      idpUrl,
      mfaClaimFormat,
      sendSingleMfa,
      sendSpecificFactors,
      sendSingleAndSpecific,
      includeGroupAttribute,
      groupManagementEnabled,
      configSettingsCollapsed,
      exportMappingCollapsed,
      selectedDetailGroups,
      actionsMenu,
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

        <TopBar
          :showBackButton="currentView === 'detail'"
          backButtonLabel="SSO Applications"
          @back="backToList"
        />

        <PageHeader
          :title="pageTitle"
          :icon="currentView === 'detail' ? SsoIcon : undefined"
          :tabs="pageTabs"
          :activeTab="activeTab"
          @update:activeTab="activeTab = $event"
        >
          <template v-if="currentView === 'detail' && selectedApp" #subtitle>
            <div class="flex flex-wrap items-center gap-2">
              <PvTag :value="selectedApp.ssoStatus" :severity="selectedApp.status === 'Active' ? 'success' : 'danger'" />
              <PvTag :value="selectedApp.certStatus + ' | ' + selectedApp.certExpiry" severity="info" />
              <PvTag :value="selectedApp.identityMgmtStatus" :severity="selectedApp.identityMgmtStatus.includes('Active') ? 'success' : 'warn'" />
            </div>
          </template>
          <template #actions>
            <template v-if="currentView === 'detail'">
              <PvButton severity="secondary" variant="outlined" @click="actionsMenu.toggle($event)">
                <span>Actions</span>
                <ChevronDownIcon class="size-4" />
              </PvButton>
              <PvMenu ref="actionsMenu" :model="actionsMenuItems" :popup="true" />
            </template>
          </template>
        </PageHeader>

        <!-- ============ LIST VIEW ============ -->
        <div v-if="currentView === 'list'" class="flex-1 flex flex-col min-h-0 overflow-hidden px-6 pt-6 relative">
          <CircuitDataTable
            :columns="listColumns"
            :data="ssoAppsData"
            selectionMode="multiple"
            :selection="selectedApps"
            @update:selection="selectedApps = $event"
            @row-click="handleAppClick($event.data)"
            :card="true"
            size="default"
            scrollable
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
          >
            <template #toolbar>
              <DataTableToolbar
                addButtonLabel="Add SSO App"
                searchPlaceholder="Search"
                :showAddButton="true"
                :showRefreshButton="true"
                :showColumnsButton="false"
                :showDownloadButton="true"
              >
                <template #saved-views>
                  <span class="text-body-md text-neutral-subtle">75 Applications</span>
                </template>
              </DataTableToolbar>
            </template>
          </CircuitDataTable>
        </div>

        <!-- ============ DETAIL VIEW ============ -->
        <template v-if="currentView === 'detail' && selectedApp">

          <!-- ── Tab: Details ── -->
          <DetailPageLayout v-if="activeTab === 'details'" class="w-full! h-full!">
            <div class="flex flex-col gap-6">

              <CollapsiblePanel header="SSO Configuration">
                <div class="flex flex-col gap-6">
                  <p class="text-body-md text-neutral-subtle">To learn more about this configuration, including restricting access to specific users, please visit <a href="#" class="text-body-md-link text-link-base">Learn More</a></p>

                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">JumpCloud Metadata</span>
                    <div class="flex items-center gap-2">
                      <PvButton label="Export Metadata" severity="secondary" variant="outlined" size="small" />
                      <PvButton label="Copy Metadata URL" severity="secondary" variant="outlined" size="small" />
                    </div>
                  </div>

                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">Service Provider Metadata</span>
                    <div class="flex items-center justify-center w-64 h-24 rounded-md border border-dashed border-neutral-default_solid bg-neutral-surface">
                      <div class="flex flex-col items-center gap-2 text-body-sm text-neutral-subtle">
                        <span>Upload or drag a file</span>
                        <PvButton label="Choose A File" severity="secondary" variant="outlined" size="small" />
                      </div>
                    </div>
                    <span class="text-body-sm text-neutral-subtle">No file uploaded.</span>
                  </div>

                  <PvDivider />

                  <FormField label="IDP Entity ID">
                    <template #default="{ inputId }">
                      <PvInputText :id="inputId" v-model="idpEntityId" class="w-full" readonly />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">IdP Private Key</span>
                    <div><PvButton label="Replace IDP Private Key" severity="secondary" variant="outlined" size="small" /></div>
                  </div>

                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">IdP Certificate</span>
                    <div><PvButton label="Replace IDP Certificate" severity="secondary" variant="outlined" size="small" /></div>
                  </div>

                  <FormField label="SP Entity ID">
                    <template #default="{ inputId }">
                      <PvInputText :id="inputId" v-model="spEntityId" class="w-full" />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-3">
                    <span class="text-body-md-semi-bold text-neutral-base">ACS URLs</span>
                    <p class="text-body-sm text-neutral-subtle">Enter at least one ACS URL. IDP initiated logins will use the first, or lowest index, ACS URL listed. The ACS URL used for SP Initiated logins will depend on the authentication request received.</p>
                    <div class="flex items-end gap-3">
                      <FormField label="Index" class="w-16">
                        <template #default="{ inputId }">
                          <PvInputText :id="inputId" modelValue="0" class="w-full" readonly />
                        </template>
                      </FormField>
                      <div class="flex items-center gap-2 pb-2">
                        <CheckboxWithLabel :modelValue="true">
                          <template #label>Default URL</template>
                        </CheckboxWithLabel>
                      </div>
                      <FormField class="flex-1">
                        <template #default="{ inputId }">
                          <PvInputText :id="inputId" v-model="acsUrl" class="w-full" />
                        </template>
                      </FormField>
                    </div>
                    <div><PvButton label="Add URL" severity="secondary" variant="outlined" size="small" /></div>
                  </div>

                  <FormField label="Login URL">
                    <template #default="{ inputId }">
                      <PvInputText :id="inputId" v-model="loginUrl" class="w-full" />
                    </template>
                  </FormField>

                  <div class="flex flex-col gap-2">
                    <span class="text-body-md-semi-bold text-neutral-base">IDP URL</span>
                    <div class="flex items-center gap-2">
                      <PvInputText :modelValue="idpUrl" class="flex-1" readonly />
                      <PvButton label="Copy" severity="secondary" variant="outlined" size="small" />
                    </div>
                  </div>
                </div>
              </CollapsiblePanel>

              <CollapsiblePanel header="Authentication and Attributes">
                <div class="flex flex-col gap-6">
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

                  <PvDivider />

                  <div class="flex flex-col gap-4">
                    <p class="text-body-md text-neutral-subtle">Required attributes are not editable. Additional attributes may be added but support will vary by service provider. <a href="#" class="text-body-md-link text-link-base">Learn More</a></p>
                    <div class="flex flex-col gap-2">
                      <span class="text-body-md-semi-bold text-neutral-base">User Attributes</span>
                      <div><PvButton label="add attribute" severity="secondary" size="small" /></div>
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
                      <div><PvButton label="add attribute" severity="secondary" size="small" /></div>
                    </div>
                    <CheckboxWithLabel v-model="includeGroupAttribute">
                      <template #label>Include Group Attribute</template>
                    </CheckboxWithLabel>
                  </div>
                </div>
              </CollapsiblePanel>

              <PvDivider />

              <div class="flex">
                <PvButton label="Deactivate SSO" severity="danger" variant="outlined" />
              </div>

            </div>

            <template #sidebar>
              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">SSO Status</h3>
                  <div class="flex flex-col gap-3">
                    <DetailsKeyValue label="SSO">
                      <PvTag :value="selectedApp.ssoStatus" :severity="selectedApp.ssoStatus.includes('Active') ? 'success' : 'danger'" />
                    </DetailsKeyValue>
                    <DetailsKeyValue label="Certificate">
                      <PvTag :value="selectedApp.certExpiry" severity="info" />
                    </DetailsKeyValue>
                    <DetailsKeyValue label="Private Key">
                      <PvTag :value="selectedApp.keyStatus" :severity="selectedApp.keyStatus.includes('Valid') ? 'success' : 'warn'" />
                    </DetailsKeyValue>
                  </div>
                </div>
                <PvDivider />
                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">Identity Management</h3>
                  <div class="flex flex-col gap-3">
                    <DetailsKeyValue label="Status">
                      <PvTag :value="selectedApp.identityMgmtStatus" :severity="selectedApp.identityMgmtStatus.includes('Active') ? 'success' : 'warn'" />
                    </DetailsKeyValue>
                    <DetailsKeyValue label="Group Management">
                      <PvTag :value="selectedApp.groupManagementEnabled ? 'Enabled' : 'Disabled'" :severity="selectedApp.groupManagementEnabled ? 'success' : 'secondary'" />
                    </DetailsKeyValue>
                  </div>
                </div>
                <PvDivider />
                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">Endpoints</h3>
                  <div class="flex flex-col gap-3">
                    <DetailsKeyValue label="SP Entity ID" :value="selectedApp.spEntityId" />
                    <DetailsKeyValue label="IDP URL" :value="selectedApp.idpUrl" />
                    <DetailsKeyValue label="Login URL" :value="selectedApp.loginUrl" />
                  </div>
                </div>
                <PvDivider />
                <div class="flex flex-col gap-4">
                  <h3 class="text-heading-3 text-neutral-base">About</h3>
                  <div class="flex flex-col gap-3">
                    <DetailsKeyValue label="Description" :value="selectedApp.appDescription" />
                    <DetailsKeyValue label="User Portal">
                      <PvTag :value="selectedApp.showInPortal ? 'Visible' : 'Hidden'" :severity="selectedApp.showInPortal ? 'success' : 'secondary'" />
                    </DetailsKeyValue>
                  </div>
                </div>
              </div>
            </template>
          </DetailPageLayout>

          <!-- ── Tab: Identity Management ── -->
          <ConfigPageLayout v-if="activeTab === 'identity-mgmt'" class="w-full! h-full!">
            <div class="flex flex-col gap-6">

              <CollapsiblePanel header="Identity Management">
                <div class="flex flex-col gap-4">
                  <p class="text-body-md text-neutral-subtle">Set up an Identity Management integration using the SCIM standard to provision, update, deactivate, and import user accounts in this application as changes are made in JumpCloud. <a href="#" class="text-body-md-link text-link-base">Learn more</a></p>
                  <div>
                    <PvButton label="Configure" severity="secondary" variant="outlined" size="small">
                      <template #icon><PencilIcon class="size-4" /></template>
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

                  <div class="flex flex-col gap-3">
                    <h4 class="text-heading-4 text-neutral-base">Group Management</h4>
                    <CheckboxWithLabel v-model="groupManagementEnabled">
                      <template #label>Enable management of User Groups and Group Membership in this application.</template>
                    </CheckboxWithLabel>
                  </div>

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
                        <template #icon><PencilIcon class="size-4" /></template>
                      </PvButton>
                    </template>
                    <template #toggleicon="iconProps">
                      <ChevronRightIcon :class="iconProps.class" />
                    </template>
                    <div class="flex flex-col gap-6">
                      <p class="text-body-md text-neutral-subtle">Map user attributes between JumpCloud and {{ selectedApp.displayLabel }}.</p>

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
          <div v-if="activeTab === 'user-groups'" class="flex-1 flex flex-col min-h-0 overflow-hidden px-6 pt-6 relative">
            <CircuitDataTable
              :columns="userGroupsColumns"
              :data="userGroupsData"
              selectionMode="multiple"
              :selection="selectedDetailGroups"
              @update:selection="selectedDetailGroups = $event"
              :card="true"
              size="default"
              scrollable
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
            >
              <template #toolbar>
                <DataTableToolbar
                  searchPlaceholder="Search..."
                  :showAddButton="false"
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
              </template>
            </CircuitDataTable>
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

const meta: Meta<typeof SsoAppsPage> = {
  title: 'Projects/Burak - Agent0/Pages/SSO Apps',
  component: SsoAppsPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof SsoAppsPage>;

export const Default: Story = {};
