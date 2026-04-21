<script setup lang="ts">
import UserAuthTopBar from '../../../features/user-portal/phase-01-parts/UserAuthTopBar.vue';
import notAccessIllustration from './assets/not-access.png';

withDefaults(
  defineProps<{
    /** Passed to `UserAuthTopBar` */
    userDisplayName?: string;
    userInitials?: string;
  }>(),
  {
    userDisplayName: 'Burak Başcı',
    userInitials: 'BB',
  }
);

const emit = defineEmits<{
  logout: [];
}>();

function onLogout() {
  emit('logout');
}
</script>

<template>
  <div
    class="access-restricted-page flex h-screen min-h-0 flex-col bg-neutral-surface"
    aria-label="Access restricted"
  >
    <UserAuthTopBar
      :user-display-name="userDisplayName"
      :user-initials="userInitials"
      @logout="onLogout"
    />
    <div class="min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
      <div
        class="mx-auto flex w-full max-w-3xl flex-col items-center gap-md px-lg pb-lg pt-[60px] text-center"
      >
        <div class="content-wrapper flex w-full flex-col items-center gap-6 text-center">
          <img
            :src="notAccessIllustration"
            alt="Restricted access: tool not allowed for this redirect URL"
            width="100"
            class="h-auto w-[100px] max-w-full shrink-0 object-contain"
          />
          <div class="flex w-full flex-col gap-2 text-center">
            <h1 class="text-heading-1 text-neutral-base m-0">
              This tool isn’t allowed
            </h1>
            <p class="text-body-md text-neutral-base m-0">
              Your organization only allows AI Gateway connections from approved Redirect URLs. The tool you’re trying to use isn’t associated with
              a Redirect URL your admin has allowed, so you can’t connect from here. Contact your admin if you need access.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
