<script setup lang="ts">
import { markRaw } from 'vue';
import { AppNavigation, CollapsiblePanel } from '@jumpcloud/circuit/components';
import Button from 'primevue/button';
import Tag from 'primevue/tag';

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
} from '@heroicons/vue/24/outline';

import AdminTopBar from '@/components/AdminTopBar.vue';

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
    label: 'Jake Taylor',
    itemType: 'profile_compact',
    initials: 'JT',
    name: 'Jake Taylor',
    items: [
      {
        label: 'Admin IT',
        itemType: 'profile_large',
        name: 'Admin IT',
        email: 'admin_it@company.com',
        initials: 'AT',
      },
      { separator: true },
      {
        label: 'Logout',
        rightIcon: markRaw(ArrowRightStartOnRectangleIcon),
      },
      { separator: true },
      { label: 'Change Password' },
      {
        label: 'Launch User Portal',
        rightIcon: markRaw(ArrowTopRightOnSquareIcon),
      },
      { separator: true },
      { label: 'Billing' },
      { label: 'My API Key' },
    ],
  },
];
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <AppNavigation
      :menuItems="menuItems"
      :profileMenuItems="profileMenuItems"
      activeItem="get-started"
      :collapsible="true"
      :topNavToggle="true"
    />
    <div class="flex-1 flex flex-col min-w-0 overflow-auto">
      <AdminTopBar />

      <!-- Page Header -->
      <div class="border-b border-neutral-default_solid bg-neutral-base shrink-0">
        <div class="flex flex-wrap items-start gap-4 px-6 py-4">
          <div class="flex-1 min-w-0 flex items-center gap-2 py-1">
            <RocketLaunchIcon class="w-6 h-6 text-neutral-base shrink-0" />
            <h1 class="text-heading-2 text-neutral-base">Get Started</h1>
          </div>
        </div>
      </div>

      <!-- Page Content -->
      <div class="flex-1 overflow-auto bg-neutral-surface p-6">
        <div class="max-w-3xl mx-auto flex flex-col gap-6">

          <!-- Welcome -->
          <div class="flex flex-col gap-2">
            <h2 class="text-heading-3 text-neutral-base">Welcome to JumpCloud</h2>
            <p class="text-body-md text-neutral-subtle">Complete the steps below to set up your organization and start managing users, devices, and access.</p>
          </div>

          <!-- Progress -->
          <CollapsiblePanel header="Setup Progress">
            <div class="flex items-center gap-4">
              <div class="flex-1 h-2 bg-neutral-subtle_solid rounded-full overflow-hidden">
                <div class="h-full bg-primary-base rounded-full" style="width: 20%"></div>
              </div>
              <span class="text-body-sm-bold text-neutral-base">1 of 5 complete</span>
            </div>
          </CollapsiblePanel>

          <!-- Step 1: Complete -->
          <CollapsiblePanel header="1. Create your account">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <p class="text-body-md text-neutral-subtle">Your admin account has been created and verified.</p>
              </div>
              <Tag value="Complete" severity="success" />
            </div>
          </CollapsiblePanel>

          <!-- Step 2 -->
          <CollapsiblePanel header="2. Add your first users">
            <div class="flex flex-col gap-3">
              <p class="text-body-md text-neutral-subtle">Import users from a directory or add them manually to start managing identities.</p>
              <div class="flex items-center gap-2">
                <Button label="Add Users" severity="primary" />
                <Button label="Import from Directory" severity="secondary" variant="outlined" />
              </div>
            </div>
          </CollapsiblePanel>

          <!-- Step 3 -->
          <CollapsiblePanel header="3. Enroll devices">
            <div class="flex flex-col gap-3">
              <p class="text-body-md text-neutral-subtle">Install the JumpCloud agent on your organization's devices to manage them remotely.</p>
              <div class="flex items-center gap-2">
                <Button label="Enroll Devices" severity="primary" />
                <Button label="Learn More" severity="secondary" variant="outlined" />
              </div>
            </div>
          </CollapsiblePanel>

          <!-- Step 4 -->
          <CollapsiblePanel header="4. Configure SSO applications">
            <div class="flex flex-col gap-3">
              <p class="text-body-md text-neutral-subtle">Connect your cloud applications to JumpCloud for single sign-on access.</p>
              <div class="flex items-center gap-2">
                <Button label="Add SSO App" severity="primary" />
                <Button label="Browse Catalog" severity="secondary" variant="outlined" />
              </div>
            </div>
          </CollapsiblePanel>

          <!-- Step 5 -->
          <CollapsiblePanel header="5. Set up security policies">
            <div class="flex flex-col gap-3">
              <p class="text-body-md text-neutral-subtle">Define password policies, MFA requirements, and conditional access rules for your organization.</p>
              <div class="flex items-center gap-2">
                <Button label="Configure Policies" severity="primary" />
              </div>
            </div>
          </CollapsiblePanel>

        </div>
      </div>
    </div>
  </div>
</template>
