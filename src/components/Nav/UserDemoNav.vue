<script setup lang="ts">
import { computed } from 'vue';
import { AppNavigation } from '@jumpcloud/circuit/components';

import {
  createUserPortalProfileMenuItems,
  userPortalNavMenuItems,
} from '@/components/Nav/userPortalNavData';

export interface UserDemoNavProps {
  /** Active nav item label (lowercase), e.g. `my assets`. */
  activeItem?: string;
  /** Override menu items; defaults to user-portal flat nav (All Applications, Requests, …). */
  menuItems?: unknown[];
  /** Override profile menu; defaults from userName / userEmail / userInitials. */
  profileMenuItems?: unknown[];
  userName?: string;
  userEmail?: string;
  userInitials?: string;
  /** User portal nav is fixed-width by default (not collapsible). */
  collapsible?: boolean;
  /**
   * Drives AppNavigation `isNavOpen` (labels + logo). Default true so the rail is expanded;
   * set false for icon-only until the user opens the nav (e.g. mobile / top-bar toggle).
   */
  topNavToggle?: boolean;
}

const props = withDefaults(defineProps<UserDemoNavProps>(), {
  activeItem: 'my assets',
  userName: 'Barış Ermut',
  userEmail: 'baris.ermut@company.com',
  userInitials: 'BE',
  collapsible: false,
  topNavToggle: true,
});

const emit = defineEmits<{
  (e: 'navigate', label: string): void;
}>();

type ProcessedNavItem = {
  item?: { label?: string };
  items?: unknown[];
};

function onNavClick(processedItem: ProcessedNavItem) {
  if (Array.isArray(processedItem?.items) && processedItem.items.length > 0) return;
  const label = processedItem?.item?.label;
  if (label) emit('navigate', label);
}

const resolvedMenuItems = computed(() => props.menuItems ?? [...userPortalNavMenuItems]);

const resolvedProfileMenuItems = computed(() =>
  props.profileMenuItems ??
  createUserPortalProfileMenuItems({
    userName: props.userName,
    userEmail: props.userEmail,
    userInitials: props.userInitials,
  })
);
</script>

<template>
  <AppNavigation
    :menu-items="resolvedMenuItems"
    :profile-menu-items="resolvedProfileMenuItems"
    :active-item="activeItem"
    :collapsible="collapsible"
    :top-nav-toggle="topNavToggle"
    @click="onNavClick"
  />
</template>
