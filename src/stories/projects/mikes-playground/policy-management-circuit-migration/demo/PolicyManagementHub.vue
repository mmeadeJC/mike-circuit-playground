<script setup lang="ts">
import { ShieldCheckIcon } from '@heroicons/vue/24/outline';
import { policyMigrationRoutes } from './policyMigrationRoutes';

defineOptions({ name: 'PolicyManagementHub' });

const screens = policyMigrationRoutes.filter((route) => route.path !== '/policy-management');
</script>

<template>
  <div class="min-h-screen bg-neutral-surface px-lg py-xl">
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-lg">
      <div class="flex flex-col gap-xs">
        <div class="flex items-center gap-sm">
          <ShieldCheckIcon class="size-6 text-neutral-base" />
          <h1 class="text-heading-2 text-neutral-base">Policy Management — Circuit Migration</h1>
        </div>
        <p class="text-body-md text-neutral-subtle">
          TH-1769 prototype. Select a screen to preview the Circuit DS migration.
        </p>
      </div>

      <div class="flex flex-col gap-sm rounded-sm border border-neutral-default_solid bg-neutral-base p-md">
        <router-link
          to="/policy-management"
          class="rounded-sm px-sm py-sm text-body-md text-link-base hover:bg-neutral-subtle hover:text-link-hover"
        >
          Policy Management (list)
        </router-link>
        <router-link
          v-for="screen in screens"
          :key="screen.path"
          :to="screen.path"
          class="rounded-sm px-sm py-sm text-body-md text-link-base hover:bg-neutral-subtle hover:text-link-hover"
        >
          {{ screen.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>
