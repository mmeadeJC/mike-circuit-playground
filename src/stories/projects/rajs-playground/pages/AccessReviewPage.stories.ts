import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, computed, markRaw, defineComponent, h, reactive, provide, inject } from 'vue';
import {
  AppNavigation,
  PageHeader,
  CollapsiblePanel,
  DataTable as CircuitDataTable,
  DataTableToolbar,
  DataTableCellText,
  DataTableCellLink,
  MessageNotification,
  ProgressSpinner,
} from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import SelectButton from 'primevue/selectbutton';
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
  ArrowRightStartOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentCheckIcon,
  ShieldExclamationIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftEllipsisIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/vue/24/outline';

import TopBar from '../../../../components/TopBar.vue';
import DetailsKeyValue from '../../../../components/DetailsKeyValue.vue';

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
      { label: 'Software Deployment' },
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
    label: 'Raj',
    itemType: 'profile_compact',
    initials: 'RK',
    name: 'Raj',
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

// ─── Types ───

interface ReviewApp {
  id: number;
  name: string;
  ssoType: string;
  userCount: number;
  lastReviewed: string;
  nextReview: string;
  frequency: string;
  status: string;
  owner: string;
}

interface ReviewUser {
  id: number;
  name: string;
  email: string;
  department: string;
  title: string;
  manager: string;
  accessGranted: string;
  lastAccess: string;
  decision: string;
  nudgeStatus: 'none' | 'sent' | 'responded';
  userResponse: 'still_need' | 'no_longer_need' | null;
  justification: string;
}

// ─── Mock Data: Applications ───

const appsData: ReviewApp[] = [
  { id: 1, name: 'Salesforce', ssoType: 'SAML', userCount: 8, lastReviewed: 'Jan 15, 2026', nextReview: 'Apr 15, 2026', frequency: 'Quarterly', status: 'Pending', owner: 'Tom Wilson' },
  { id: 2, name: 'GitHub Enterprise', ssoType: 'OIDC', userCount: 12, lastReviewed: 'Dec 1, 2025', nextReview: 'Mar 1, 2026', frequency: 'Quarterly', status: 'Overdue', owner: 'Lisa Park' },
  { id: 3, name: 'AWS Console', ssoType: 'SAML', userCount: 6, lastReviewed: 'Feb 1, 2026', nextReview: 'May 1, 2026', frequency: 'Quarterly', status: 'Pending', owner: 'Kevin Zhang' },
  { id: 4, name: 'Slack', ssoType: 'OIDC', userCount: 195, lastReviewed: 'Feb 20, 2026', nextReview: 'May 20, 2026', frequency: 'Quarterly', status: 'Completed', owner: 'Diana Lopez' },
  { id: 5, name: 'Jira', ssoType: 'SAML', userCount: 10, lastReviewed: 'Nov 15, 2025', nextReview: 'Feb 15, 2026', frequency: 'Quarterly', status: 'Overdue', owner: 'Lisa Park' },
  { id: 6, name: 'Datadog', ssoType: 'SAML', userCount: 5, lastReviewed: 'Jan 30, 2026', nextReview: 'Apr 30, 2026', frequency: 'Quarterly', status: 'In Progress', owner: 'Kevin Zhang' },
  { id: 7, name: 'Confluence', ssoType: 'SAML', userCount: 78, lastReviewed: 'Feb 10, 2026', nextReview: 'May 10, 2026', frequency: 'Quarterly', status: 'Completed', owner: 'Lisa Park' },
  { id: 8, name: 'Okta Admin Console', ssoType: 'OIDC', userCount: 3, lastReviewed: 'Never', nextReview: 'Mar 28, 2026', frequency: 'Annual', status: 'Pending', owner: 'Robert Chen' },
];

// ─── Mock Data: Users for Salesforce Review ───

const salesforceUsers: ReviewUser[] = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@acme.com', department: 'Sales', title: 'Account Executive', manager: 'Tom Wilson', accessGranted: 'Jun 1, 2024', lastAccess: 'Feb 27, 2026', decision: 'pending', nudgeStatus: 'responded', userResponse: 'still_need', justification: 'I use Salesforce daily for pipeline management and client outreach.' },
  { id: 2, name: 'Mike Johnson', email: 'mike.j@acme.com', department: 'Engineering', title: 'Senior Engineer', manager: 'Lisa Park', accessGranted: 'Jan 15, 2025', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'responded', userResponse: 'no_longer_need', justification: 'Moved to backend team, no longer doing integrations.' },
  { id: 3, name: 'Emily Davis', email: 'emily.d@acme.com', department: 'Marketing', title: 'Marketing Manager', manager: 'Jessica Brown', accessGranted: 'Mar 10, 2024', lastAccess: 'Jan 5, 2026', decision: 'pending', nudgeStatus: 'sent', userResponse: null, justification: '' },
  { id: 4, name: 'James Kim', email: 'james.k@acme.com', department: 'Sales', title: 'Sales Director', manager: 'VP Sales', accessGranted: 'Sep 1, 2023', lastAccess: 'Feb 26, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 5, name: 'Rachel Torres', email: 'rachel.t@acme.com', department: 'Finance', title: 'Financial Analyst', manager: 'Robert Chen', accessGranted: 'Nov 20, 2025', lastAccess: 'Never', decision: 'pending', nudgeStatus: 'responded', userResponse: 'no_longer_need', justification: '' },
  { id: 6, name: 'Alex Morgan', email: 'alex.m@acme.com', department: 'HR', title: 'HR Coordinator', manager: 'Diana Lopez', accessGranted: 'Aug 5, 2024', lastAccess: 'Oct 12, 2025', decision: 'pending', nudgeStatus: 'sent', userResponse: null, justification: '' },
  { id: 7, name: 'David Park', email: 'david.p@acme.com', department: 'Sales', title: 'SDR', manager: 'Sarah Chen', accessGranted: 'Dec 1, 2025', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 8, name: 'Nina Patel', email: 'nina.p@acme.com', department: 'Engineering', title: 'DevOps Lead', manager: 'Lisa Park', accessGranted: 'Feb 1, 2024', lastAccess: 'Feb 25, 2026', decision: 'pending', nudgeStatus: 'responded', userResponse: 'still_need', justification: 'Need Salesforce API access for our DevOps integration pipeline.' },
];

const githubUsers: ReviewUser[] = [
  { id: 101, name: 'Mike Johnson', email: 'mike.j@acme.com', department: 'Engineering', title: 'Senior Engineer', manager: 'Lisa Park', accessGranted: 'Mar 1, 2024', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 102, name: 'Nina Patel', email: 'nina.p@acme.com', department: 'Engineering', title: 'DevOps Lead', manager: 'Lisa Park', accessGranted: 'Jan 15, 2024', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'responded', userResponse: 'still_need', justification: 'Core to my CI/CD workflow.' },
  { id: 103, name: 'Chris Lee', email: 'chris.l@acme.com', department: 'Engineering', title: 'Staff Engineer', manager: 'Lisa Park', accessGranted: 'May 10, 2023', lastAccess: 'Feb 27, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 104, name: 'Aisha Rahman', email: 'aisha.r@acme.com', department: 'Engineering', title: 'Frontend Developer', manager: 'Chris Lee', accessGranted: 'Aug 20, 2024', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 105, name: 'Tom Wilson', email: 'tom.w@acme.com', department: 'Sales', title: 'VP Sales', manager: 'CEO', accessGranted: 'Jun 1, 2024', lastAccess: 'Sep 5, 2025', decision: 'pending', nudgeStatus: 'responded', userResponse: 'no_longer_need', justification: 'Was only needed for a one-time project.' },
  { id: 106, name: 'Priya Sharma', email: 'priya.s@acme.com', department: 'Engineering', title: 'QA Engineer', manager: 'Chris Lee', accessGranted: 'Oct 1, 2024', lastAccess: 'Feb 26, 2026', decision: 'pending', nudgeStatus: 'sent', userResponse: null, justification: '' },
  { id: 107, name: 'Marcus Brown', email: 'marcus.b@acme.com', department: 'Engineering', title: 'Backend Developer', manager: 'Nina Patel', accessGranted: 'Dec 15, 2024', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 108, name: 'Jessica Brown', email: 'jessica.b@acme.com', department: 'Marketing', title: 'Marketing Director', manager: 'CMO', accessGranted: 'Apr 1, 2024', lastAccess: 'Jul 20, 2025', decision: 'pending', nudgeStatus: 'responded', userResponse: 'no_longer_need', justification: 'Team switched to GitLab.' },
  { id: 109, name: 'Ryan O\'Connor', email: 'ryan.o@acme.com', department: 'Engineering', title: 'Platform Engineer', manager: 'Nina Patel', accessGranted: 'Feb 1, 2025', lastAccess: 'Feb 27, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 110, name: 'Sophie Martin', email: 'sophie.m@acme.com', department: 'Product', title: 'Product Manager', manager: 'VP Product', accessGranted: 'Jul 15, 2024', lastAccess: 'Feb 24, 2026', decision: 'pending', nudgeStatus: 'sent', userResponse: null, justification: '' },
  { id: 111, name: 'Derek Huang', email: 'derek.h@acme.com', department: 'Engineering', title: 'Security Engineer', manager: 'Nina Patel', accessGranted: 'Nov 1, 2023', lastAccess: 'Feb 28, 2026', decision: 'pending', nudgeStatus: 'none', userResponse: null, justification: '' },
  { id: 112, name: 'Laura Kim', email: 'laura.k@acme.com', department: 'Design', title: 'UX Designer', manager: 'VP Design', accessGranted: 'Sep 1, 2024', lastAccess: 'Jan 10, 2026', decision: 'pending', nudgeStatus: 'responded', userResponse: 'still_need', justification: 'I review frontend PRs and need repo access.' },
];

const usersPerApp: Record<number, ReviewUser[]> = {
  1: salesforceUsers,
  2: githubUsers,
  3: salesforceUsers.slice(0, 6),
  5: salesforceUsers.slice(0, 10),
  6: salesforceUsers.slice(0, 5),
  8: salesforceUsers.slice(0, 3),
};

// ─── Custom Cell: App Status ───

const AppStatusCell = markRaw(defineComponent({
  name: 'AppStatusCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    const severityMap: Record<string, string> = {
      'Pending': 'info',
      'In Progress': 'warn',
      'Completed': 'success',
      'Overdue': 'danger',
    };
    const iconMap: Record<string, unknown> = {
      'Pending': ClockIcon,
      'In Progress': ClockIcon,
      'Completed': CheckCircleIcon,
      'Overdue': ExclamationTriangleIcon,
    };
    return () => {
      const status = (props.data?.status as string) ?? '';
      return h('div', { class: 'flex items-center p-2 min-h-12' }, [
        h(Tag, { severity: severityMap[status] ?? 'info' }, {
          icon: () => h(iconMap[status] as Record<string, unknown> ?? ClockIcon, { class: 'size-4' }),
          default: () => status,
        }),
      ]);
    };
  },
}));

// ─── Custom Cell: Last Access with stale indicator ───

const LastAccessCell = markRaw(defineComponent({
  name: 'LastAccessCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    return () => {
      const lastAccess = props.data?.lastAccess as string;
      if (!lastAccess || lastAccess === 'Never') {
        return h('div', { class: 'flex items-center gap-2 p-2 min-h-12' }, [
          h(Tag, { severity: 'danger' }, {
            icon: () => h(XCircleIcon, { class: 'size-4' }),
            default: () => 'Never accessed',
          }),
        ]);
      }
      const daysAgo = Math.floor((Date.now() - new Date(lastAccess).getTime()) / 86400000);
      if (daysAgo > 30) {
        return h('div', { class: 'flex items-center gap-2 p-2 min-h-12' }, [
          h('span', { class: 'text-body-md text-neutral-base' }, lastAccess),
          h(Tag, { severity: 'warn' }, {
            icon: () => h(ExclamationTriangleIcon, { class: 'size-4' }),
            default: () => `${daysAgo}d ago`,
          }),
        ]);
      }
      return h('div', { class: 'flex items-center p-2 min-h-12' }, [
        h('span', { class: 'text-body-md text-neutral-base' }, lastAccess),
      ]);
    };
  },
}));

// ─── Custom Cell: Review Decision (SelectButton) ───

const DECISION_KEY = Symbol('reviewDecisions');

const ReviewDecisionCell = markRaw(defineComponent({
  name: 'ReviewDecisionCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    const decisionState = inject<{ update: (id: number, val: string) => void }>(DECISION_KEY);
    const options = [
      { label: 'Approve', value: 'approved' },
      { label: 'Revoke', value: 'revoked' },
    ];
    return () => {
      const current = props.data?.decision as string;
      const modelValue = current === 'pending' ? null : current;
      return h('div', { class: 'p-2 min-h-12 flex items-center' }, [
        h(SelectButton, {
          modelValue,
          'onUpdate:modelValue': (val: string | null) => {
            const id = props.data?.id as number;
            if (decisionState) {
              decisionState.update(id, val ?? 'pending');
            }
          },
          options,
          optionLabel: 'label',
          optionValue: 'value',
          allowEmpty: true,
        }),
      ]);
    };
  },
}));

// ─── Custom Cell: Nudge + User Response ───

const NUDGE_KEY = Symbol('nudgeAction');

const NudgeResponseCell = markRaw(defineComponent({
  name: 'NudgeResponseCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    const handler = inject<{ sendNudge: (id: number) => void }>(NUDGE_KEY);
    return () => {
      const status = props.data?.nudgeStatus as string;
      if (status === 'responded') {
        const response = props.data?.userResponse as string | null;
        const justification = props.data?.justification as string;
        const needsIt = response === 'still_need';
        const responseLabel = needsIt ? 'Still needs' : 'No longer needs';
        const responseIcon = needsIt ? HandThumbUpIcon : HandThumbDownIcon;
        const responseSeverity = needsIt ? 'info' : 'warn';

        const body = [
          h('div', { class: 'flex items-center gap-2' }, [
            h(Tag, { severity: 'success' }, {
              icon: () => h(ChatBubbleLeftEllipsisIcon, { class: 'size-4' }),
              default: () => 'Responded',
            }),
            response
              ? h(Tag, { severity: responseSeverity }, {
                  icon: () => h(responseIcon, { class: 'size-4' }),
                  default: () => responseLabel,
                })
              : null,
          ]),
        ];

        if (justification) {
          body.push(
            h('span', {
              class: 'text-body-sm text-neutral-subtle mt-1 line-clamp-2',
              title: justification,
            }, justification),
          );
        }

        return h('div', { class: 'p-2 min-h-12 flex flex-col justify-center' }, body);
      }
      if (status === 'sent') {
        return h('div', { class: 'p-2 min-h-12 flex items-center' }, [
          h(Tag, { severity: 'warn' }, {
            icon: () => h(ClockIcon, { class: 'size-4' }),
            default: () => 'Awaiting',
          }),
        ]);
      }
      return h('div', { class: 'p-2 min-h-12 flex items-center' }, [
        h(Button, {
          label: 'Nudge',
          severity: 'secondary',
          variant: 'outlined',
          size: 'small',
          onClick: () => handler?.sendNudge(props.data?.id as number),
        }, {
          icon: (iconProps: { class: string }) => h(PaperAirplaneIcon, { class: iconProps.class }),
        }),
      ]);
    };
  },
}));

// ─── Custom Cell: Action Button for app list ───

const APP_ACTION_KEY = Symbol('appAction');

const AppActionCell = markRaw(defineComponent({
  name: 'AppActionCell',
  props: { data: { type: Object, default: () => ({}) } },
  setup(props) {
    const handler = inject<{ startReview: (id: number) => void }>(APP_ACTION_KEY);
    return () => {
      const status = (props.data?.status as string) ?? '';
      if (status === 'Completed') {
        return h('div', { class: 'p-2 min-h-12 flex items-center' }, [
          h(Button, {
            label: 'View Results',
            severity: 'secondary',
            variant: 'text',
            size: 'small',
          }),
        ]);
      }
      const label = status === 'In Progress' ? 'Continue' : 'Start Review';
      return h('div', { class: 'p-2 min-h-12 flex items-center' }, [
        h(Button, {
          label,
          size: 'small',
          onClick: () => handler?.startReview(props.data?.id as number),
        }),
      ]);
    };
  },
}));

// ─── Column Definitions: App List ───

const appColumns = [
  {
    field: 'name',
    header: 'Application',
    sortable: true,
    width: '220px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.ssoType,
      href: '#',
    }),
  },
  {
    field: 'userCount',
    header: 'Users',
    sortable: true,
    width: '100px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: String(sp.data.userCount),
    }),
  },
  {
    field: 'frequency',
    header: 'Frequency',
    sortable: true,
    width: '130px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.frequency,
    }),
  },
  {
    field: 'lastReviewed',
    header: 'Last Reviewed',
    sortable: true,
    width: '150px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.lastReviewed,
    }),
  },
  {
    field: 'nextReview',
    header: 'Next Review',
    sortable: true,
    width: '150px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.nextReview,
    }),
  },
  {
    field: 'owner',
    header: 'Owner',
    sortable: true,
    width: '150px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.owner,
    }),
  },
  {
    field: 'status',
    header: 'Status',
    sortable: true,
    width: '140px',
    component: AppStatusCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'actions',
    header: '',
    width: '150px',
    component: AppActionCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
];

// ─── Column Definitions: User Review ───

const userReviewColumns = [
  {
    field: 'name',
    header: 'User',
    sortable: true,
    width: '200px',
    component: markRaw(DataTableCellLink),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.name,
      description: sp.data.email,
      href: '#',
    }),
  },
  {
    field: 'department',
    header: 'Department',
    sortable: true,
    width: '120px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.department,
    }),
  },
  {
    field: 'title',
    header: 'Title',
    sortable: true,
    width: '150px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.title,
    }),
  },
  {
    field: 'manager',
    header: 'Manager',
    sortable: true,
    width: '130px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.manager,
    }),
  },
  {
    field: 'accessGranted',
    header: 'Access Granted',
    sortable: true,
    width: '140px',
    component: markRaw(DataTableCellText),
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      label: sp.data.accessGranted,
    }),
  },
  {
    field: 'lastAccess',
    header: 'Last Access',
    sortable: true,
    width: '180px',
    component: LastAccessCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'nudgeAndResponse',
    header: 'Nudge & Response',
    width: '300px',
    component: NudgeResponseCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
  {
    field: 'decision',
    header: 'Decision',
    width: '220px',
    component: ReviewDecisionCell,
    componentProps: (sp: { data: Record<string, unknown> }) => ({
      data: sp.data,
    }),
  },
];

// ─── Component Definition ───

const AccessReviewPage = defineComponent({
  name: 'AccessReviewPage',
  components: {
    AppNavigation,
    PageHeader,
    CollapsiblePanel,
    CircuitDataTable,
    DataTableToolbar,
    MessageNotification,
    ProgressSpinner,
    PvButton: Button,
    PvTag: Tag,
    PvDivider: Divider,
    TopBar,
    DetailsKeyValue,
    ArrowLeftIcon,
    ChevronRightIcon,
    CheckCircleIcon,
    XCircleIcon,
    ClockIcon,
    ExclamationTriangleIcon,
    ClipboardDocumentCheckIcon,
    ShieldExclamationIcon,
    CalendarDaysIcon,
    DocumentTextIcon,
    ShieldCheckIcon,
    UserIcon,
    PaperAirplaneIcon,
    ChatBubbleLeftEllipsisIcon,
    HandThumbUpIcon,
    HandThumbDownIcon,
  },
  setup() {
    const currentView = ref<'list' | 'review'>('list');
    const selectedApp = ref<ReviewApp | null>(null);
    const reviewUsers = ref<ReviewUser[]>([]);
    const reviewCompleted = ref(false);

    // ─── Collapsed panel states ───
    const summaryCollapsed = ref(false);
    const appDetailsCollapsed = ref(false);

    // ─── Review progress ───
    const approvedCount = computed(() => reviewUsers.value.filter(u => u.decision === 'approved').length);
    const revokedCount = computed(() => reviewUsers.value.filter(u => u.decision === 'revoked').length);
    const pendingCount = computed(() => reviewUsers.value.filter(u => u.decision === 'pending').length);
    const reviewedCount = computed(() => approvedCount.value + revokedCount.value);
    const totalUsers = computed(() => reviewUsers.value.length);
    const allReviewed = computed(() => pendingCount.value === 0 && totalUsers.value > 0);

    // ─── Summary stats for list view ───
    const pendingApps = computed(() => appsData.filter(a => a.status === 'Pending').length);
    const overdueApps = computed(() => appsData.filter(a => a.status === 'Overdue').length);
    const inProgressApps = computed(() => appsData.filter(a => a.status === 'In Progress').length);
    const completedApps = computed(() => appsData.filter(a => a.status === 'Completed').length);

    // ─── Nudge stats ───
    const nudgeSentCount = computed(() => reviewUsers.value.filter(u => u.nudgeStatus === 'sent').length);
    const nudgeRespondedCount = computed(() => reviewUsers.value.filter(u => u.nudgeStatus === 'responded').length);
    const userSaysNeedCount = computed(() => reviewUsers.value.filter(u => u.userResponse === 'still_need').length);
    const userSaysNoNeedCount = computed(() => reviewUsers.value.filter(u => u.userResponse === 'no_longer_need').length);

    // ─── Actions ───
    function startReview(appId: number) {
      const app = appsData.find(a => a.id === appId);
      if (!app) return;
      selectedApp.value = app;
      reviewCompleted.value = false;
      const sourceUsers = usersPerApp[appId] ?? salesforceUsers.slice(0, app.userCount);
      reviewUsers.value = sourceUsers.map(u => reactive({ ...u }));
      currentView.value = 'review';
    }

    function backToList() {
      currentView.value = 'list';
      selectedApp.value = null;
      reviewUsers.value = [];
      reviewCompleted.value = false;
    }

    function completeReview() {
      reviewCompleted.value = true;
    }

    function updateDecision(userId: number, decision: string) {
      const user = reviewUsers.value.find(u => u.id === userId);
      if (user) user.decision = decision;
    }

    function sendNudge(userId: number) {
      const user = reviewUsers.value.find(u => u.id === userId);
      if (user && user.nudgeStatus === 'none') {
        user.nudgeStatus = 'sent';
      }
    }

    function nudgeAll() {
      for (const user of reviewUsers.value) {
        if (user.nudgeStatus === 'none') {
          user.nudgeStatus = 'sent';
        }
      }
    }

    provide(APP_ACTION_KEY, { startReview });
    provide(DECISION_KEY, { update: updateDecision });
    provide(NUDGE_KEY, { sendNudge });

    return {
      currentView,
      selectedApp,
      reviewUsers,
      reviewCompleted,
      summaryCollapsed,
      appDetailsCollapsed,
      approvedCount,
      revokedCount,
      pendingCount,
      reviewedCount,
      totalUsers,
      allReviewed,
      nudgeSentCount,
      nudgeRespondedCount,
      userSaysNeedCount,
      userSaysNoNeedCount,
      pendingApps,
      overdueApps,
      inProgressApps,
      completedApps,
      startReview,
      backToList,
      completeReview,
      nudgeAll,
      menuItems,
      profileMenuItems,
      appsData,
      appColumns,
      userReviewColumns,
    };
  },
  template: `
    <div class="flex h-screen overflow-hidden">
      <AppNavigation
        :menuItems="menuItems"
        :profileMenuItems="profileMenuItems"
        activeItem="access"
        :collapsible="true"
      />
      <div class="flex-1 flex flex-col min-w-0 overflow-hidden">

        <!-- Back bar (review view) -->
        <div v-if="currentView === 'review'" class="shrink-0 flex items-center h-12 px-4 border-b border-navigation-top_bar-default bg-navigation-top_bar-default">
          <PvButton
            label="Access Review"
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

        <!-- TopBar (list view only) -->
        <TopBar v-if="currentView === 'list'" />

        <!-- ═══════════════ LIST VIEW ═══════════════ -->
        <template v-if="currentView === 'list'">
          <PageHeader
            title="Access Review"
            subtitleText="Review and certify user access to applications for compliance"
          >
            <template #icon>
              <ClipboardDocumentCheckIcon class="size-7" />
            </template>
          </PageHeader>

          <div class="flex-1 flex flex-col min-h-0 overflow-auto">
            <!-- Summary Cards -->
            <div class="px-6 py-4">
              <div class="grid grid-cols-4 gap-4">
                <CollapsiblePanel header="Pending">
                  <template #titleicon="iconProps">
                    <ClockIcon :class="iconProps.class" />
                  </template>
                  <div class="flex items-baseline gap-2 py-1">
                    <span class="text-heading-2 text-neutral-base">{{ pendingApps }}</span>
                    <span class="text-body-md text-neutral-subtle">applications</span>
                  </div>
                </CollapsiblePanel>
                <CollapsiblePanel header="Overdue">
                  <template #titleicon="iconProps">
                    <ExclamationTriangleIcon :class="iconProps.class" />
                  </template>
                  <div class="flex items-baseline gap-2 py-1">
                    <span class="text-heading-2 text-error-base">{{ overdueApps }}</span>
                    <span class="text-body-md text-neutral-subtle">applications</span>
                  </div>
                </CollapsiblePanel>
                <CollapsiblePanel header="In Progress">
                  <template #titleicon="iconProps">
                    <ShieldExclamationIcon :class="iconProps.class" />
                  </template>
                  <div class="flex items-baseline gap-2 py-1">
                    <span class="text-heading-2 text-neutral-base">{{ inProgressApps }}</span>
                    <span class="text-body-md text-neutral-subtle">applications</span>
                  </div>
                </CollapsiblePanel>
                <CollapsiblePanel header="Completed">
                  <template #titleicon="iconProps">
                    <CheckCircleIcon :class="iconProps.class" />
                  </template>
                  <div class="flex items-baseline gap-2 py-1">
                    <span class="text-heading-2 text-success-base">{{ completedApps }}</span>
                    <span class="text-body-md text-neutral-subtle">applications</span>
                  </div>
                </CollapsiblePanel>
              </div>
            </div>

            <!-- Applications Table -->
            <div class="flex-1 flex flex-col min-h-0 overflow-hidden bg-neutral-surface">
              <div class="shrink-0 px-6">
                <DataTableToolbar
                  searchPlaceholder="Search applications..."
                  :showAddButton="false"
                  :showFilterButton="true"
                  :showRefreshButton="true"
                />
              </div>
              <div class="flex-1 flex flex-col min-h-0 px-6">
                <CircuitDataTable
                  :columns="appColumns"
                  :data="appsData"
                  :card="true"
                  size="default"
                  :scrollable="true"
                  scrollHeight="flex"
                  dataKey="id"
                  :pt="{
                    root: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                    tableContainer: { style: 'flex: 1 1 0; min-height: 0; height: 100%;' },
                  }"
                  :ptOptions="{ mergeSections: true, mergeProps: true }"
                />
              </div>
            </div>
          </div>
        </template>

        <!-- ═══════════════ REVIEW DETAIL VIEW ═══════════════ -->
        <template v-if="currentView === 'review' && selectedApp">
          <PageHeader
            :title="selectedApp.name"
            :subtitleText="'Access Review · ' + selectedApp.frequency"
          >
            <template #icon>
              <ShieldCheckIcon class="size-7" />
            </template>
            <template #actions>
              <PvButton
                label="Nudge All"
                severity="secondary"
                variant="outlined"
                @click="nudgeAll"
              >
                <template #icon>
                  <PaperAirplaneIcon class="size-5" />
                </template>
              </PvButton>
              <PvButton
                :label="reviewCompleted ? 'Review Completed' : 'Complete Review'"
                :disabled="!allReviewed || reviewCompleted"
                :severity="reviewCompleted ? 'success' : undefined"
                @click="completeReview"
              >
                <template #icon>
                  <CheckCircleIcon class="size-5" />
                </template>
              </PvButton>
            </template>
          </PageHeader>

          <div class="flex-1 flex flex-col min-h-0 overflow-auto">

            <!-- Success banner after completion -->
            <div v-if="reviewCompleted" class="px-6 pt-4">
              <MessageNotification
                severity="success"
                title="Access Review Completed"
                :detail="'Review for ' + selectedApp.name + ' has been completed. ' + approvedCount + ' approved, ' + revokedCount + ' revoked.'"
              />
            </div>

            <!-- Top summary panels -->
            <div class="px-6 py-4">
              <div class="grid grid-cols-3 gap-4">
                <!-- Review Progress -->
                <CollapsiblePanel
                  v-model:collapsed="summaryCollapsed"
                  toggleable
                  header="Review Progress"
                >
                  <template #titleicon="iconProps">
                    <ClipboardDocumentCheckIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <div class="flex flex-col gap-2">
                    <DetailsKeyValue label="Total Users" :value="String(totalUsers)" />
                    <DetailsKeyValue label="Reviewed" :value="String(reviewedCount) + ' of ' + String(totalUsers)" />
                    <PvDivider />
                    <div class="flex items-center gap-3">
                      <PvTag severity="success">
                        <template #icon><CheckCircleIcon class="size-4" /></template>
                        {{ approvedCount }} Approved
                      </PvTag>
                      <PvTag severity="danger">
                        <template #icon><XCircleIcon class="size-4" /></template>
                        {{ revokedCount }} Revoked
                      </PvTag>
                      <PvTag severity="info">
                        <template #icon><ClockIcon class="size-4" /></template>
                        {{ pendingCount }} Pending
                      </PvTag>
                    </div>
                  </div>
                </CollapsiblePanel>

                <!-- User Responses -->
                <CollapsiblePanel header="User Responses">
                  <template #titleicon="iconProps">
                    <ChatBubbleLeftEllipsisIcon :class="iconProps.class" />
                  </template>
                  <div class="flex flex-col gap-2">
                    <DetailsKeyValue label="Nudges Sent" :value="String(nudgeSentCount + nudgeRespondedCount)" />
                    <DetailsKeyValue label="Responded" :value="String(nudgeRespondedCount)" />
                    <PvDivider />
                    <div class="flex items-center gap-3">
                      <PvTag severity="info">
                        <template #icon><HandThumbUpIcon class="size-4" /></template>
                        {{ userSaysNeedCount }} Still need
                      </PvTag>
                      <PvTag severity="warn">
                        <template #icon><HandThumbDownIcon class="size-4" /></template>
                        {{ userSaysNoNeedCount }} No longer need
                      </PvTag>
                    </div>
                  </div>
                </CollapsiblePanel>

                <!-- Application Info -->
                <CollapsiblePanel
                  v-model:collapsed="appDetailsCollapsed"
                  toggleable
                  header="Application Info"
                >
                  <template #titleicon="iconProps">
                    <DocumentTextIcon :class="iconProps.class" />
                  </template>
                  <template #toggleicon="iconProps">
                    <ChevronRightIcon :class="iconProps.class" />
                  </template>
                  <div class="flex flex-col gap-2">
                    <DetailsKeyValue label="SSO Type" :value="selectedApp.ssoType" />
                    <DetailsKeyValue label="Owner" :value="selectedApp.owner" />
                    <DetailsKeyValue label="Last Reviewed" :value="selectedApp.lastReviewed" />
                    <DetailsKeyValue label="Next Review" :value="selectedApp.nextReview" />
                  </div>
                </CollapsiblePanel>
              </div>
            </div>

            <!-- Progress banner -->
            <div v-if="!reviewCompleted" class="px-6 pb-2">
              <MessageNotification
                :severity="allReviewed ? 'success' : 'info'"
                :title="allReviewed ? 'All users reviewed — ready to complete' : 'Review each user and make an approve or revoke decision'"
                :detail="'Tip: Use Nudge to ask users through the portal if they still need access. Their response is shown as a recommendation, but the final decision is yours.'"
              />
            </div>

            <!-- User review table -->
            <div class="px-6 pb-6 bg-neutral-surface">
              <div class="shrink-0 px-6">
                <DataTableToolbar
                  searchPlaceholder="Search users..."
                  :showAddButton="false"
                  :showFilterButton="false"
                  :showRefreshButton="false"
                />
              </div>
              <div class="px-6">
                <CircuitDataTable
                  :columns="userReviewColumns"
                  :data="reviewUsers"
                  :card="true"
                  size="default"
                  :scrollable="false"
                  dataKey="id"
                  :paginator="true"
                  :rows="10"
                  :rowsPerPageOptions="[
                    { label: '10 Items per page', value: 10 },
                    { label: '20 Items per page', value: 20 },
                  ]"
                  :showRowsPerPageOptions="true"
                />
              </div>
            </div>

          </div>
        </template>

      </div>
    </div>
  `,
});

// ─── Story ───

const meta: Meta<typeof AccessReviewPage> = {
  title: "Projects/Raj's Playground/Pages/Access Review",
  component: AccessReviewPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AccessReviewPage>;

export const Default: Story = {};
