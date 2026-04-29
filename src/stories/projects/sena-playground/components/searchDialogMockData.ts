import { markRaw } from 'vue';
import type { Component } from 'vue';
import { InboxStackIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import {
  AiSearchIcon,
  DeviceGroupsIcon,
  DeviceManagementIcon,
  DynamicUserGroupIcon,
  OAuthPermissionIcon,
  SaasManagementIcon,
  SsoIcon,
} from '@jumpcloud/icons';

/** Storybook mock “Recent” rows (AI + default search dialogs). */
export type MockSearchRecentRow = {
  title: string;
  subtitle: string;
  timestamp: string;
  leadingIcon: Component;
};

/** Storybook mock directory “Result” rows (Slack-style design reference). */
export type MockSearchResultRow = {
  title: string;
  subtitle: string;
  leadingIcon: Component;
};

export const mockRecentItems: MockSearchRecentRow[] = [
  {
    title: 'Show devices with failed login attempts',
    subtitle: 'AI Result',
    timestamp: '5 minutes ago',
    leadingIcon: markRaw(AiSearchIcon),
  },
  {
    title: 'Left nav – first round',
    subtitle: 'Search',
    timestamp: '7 minutes ago',
    leadingIcon: markRaw(MagnifyingGlassIcon),
  },
  {
    title: 'Find users without MFA',
    subtitle: 'AI Result',
    timestamp: '12 minutes ago',
    leadingIcon: markRaw(AiSearchIcon),
  },
  {
    title: 'MacBook Pro M2',
    subtitle: 'Assets',
    timestamp: '20 minutes ago',
    leadingIcon: markRaw(InboxStackIcon),
  },
  {
    title: 'Sarah Mitchell',
    subtitle: 'User',
    timestamp: '3 days ago',
    leadingIcon: markRaw(DynamicUserGroupIcon),
  },
  {
    title: 'MacBook Pro M2',
    subtitle: 'Device',
    timestamp: '3 days ago',
    leadingIcon: markRaw(DeviceManagementIcon),
  },
  {
    title: 'Salesforce',
    subtitle: 'SSO Application',
    timestamp: '1 week ago',
    leadingIcon: markRaw(SsoIcon),
  },
  {
    title: 'MFA Enforcement Policy',
    subtitle: 'Policy',
    timestamp: '2 weeks ago',
    leadingIcon: markRaw(OAuthPermissionIcon),
  },
];

export const mockSearchResultItems: MockSearchResultRow[] = [
  {
    title: 'Slack',
    subtitle: 'SSO Application',
    leadingIcon: SsoIcon,
  },
  {
    title: 'Slack',
    subtitle: 'SaaS Management',
    leadingIcon: SaasManagementIcon,
  },
  {
    title: 'Slack-IT-Test-Mac',
    subtitle: 'Device',
    leadingIcon: DeviceManagementIcon,
  },
  {
    title: 'Slack-IT-Test-Mac',
    subtitle: 'Assets',
    leadingIcon: InboxStackIcon,
  },
  {
    title: 'SlackAdmins',
    subtitle: 'User Group',
    leadingIcon: DynamicUserGroupIcon,
  },
  {
    title: 'Slack-DevTeam',
    subtitle: 'User Group',
    leadingIcon: DynamicUserGroupIcon,
  },
  {
    title: 'Slack-Lab-Devices',
    subtitle: 'Device Group',
    leadingIcon: DeviceGroupsIcon,
  },
  {
    title: 'Slack Access Policy',
    subtitle: 'Policy',
    leadingIcon: OAuthPermissionIcon,
  },
];
