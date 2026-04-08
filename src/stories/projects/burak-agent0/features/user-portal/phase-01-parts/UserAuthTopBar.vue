<script setup lang="ts">
import { ref, useId } from 'vue';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/vue/24/outline';
import Button from 'primevue/button';
import Popover from 'primevue/popover';
import JumpCloudFullLogo from '../../../pages/user-portal/full-demo/JumpCloudFullLogo.vue';

withDefaults(
  defineProps<{
    /** Full name shown before the avatar badge */
    userDisplayName?: string;
    /** Two-letter (or short) initials inside the badge */
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

const accountPopoverRef = ref<InstanceType<typeof Popover> | null>(null);
const accountMenuOpen = ref(false);
const accountMenuContentId = useId();

function onProfileClick(event: Event) {
  accountPopoverRef.value?.toggle(event);
}

function onPopoverShow() {
  accountMenuOpen.value = true;
}

function onPopoverHide() {
  accountMenuOpen.value = false;
}

function onLogoutClick() {
  accountPopoverRef.value?.hide();
  emit('logout');
}
</script>

<template>
  <header
    class="flex shrink-0 items-center justify-between border-b border-neutral-default_solid bg-neutral-base px-lg py-md"
  >
    <div class="flex h-6 min-w-0 shrink-0 items-center [&_svg]:h-6 [&_svg]:w-auto">
      <JumpCloudFullLogo />
    </div>
    <div class="flex min-w-0 flex-1 items-center justify-end">
      <Button
        type="button"
        variant="text"
        severity="secondary"
        class="min-w-0 max-w-full shrink !rounded-md !pl-3 !cursor-pointer !inline-flex !flex-row !items-center justify-end gap-sm"
        :aria-expanded="accountMenuOpen"
        aria-haspopup="dialog"
        :aria-controls="accountMenuContentId"
        :aria-label="`Account menu, ${userDisplayName}`"
        @click="onProfileClick"
      >
        <span
          class="flex min-h-8 min-w-0 items-center truncate text-body-md font-semibold text-neutral-base"
        >
          {{ userDisplayName }}
        </span>
        <span
          class="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-branding-base text-body-md font-semibold text-branding-base"
          aria-hidden="true"
        >
          {{ userInitials }}
        </span>
      </Button>
    </div>

    <Popover
      ref="accountPopoverRef"
      @show="onPopoverShow"
      @hide="onPopoverHide"
    >
      <div
        :id="accountMenuContentId"
        class="box-border flex min-w-[200px] flex-col p-sm"
        role="menu"
      >
        <Button
          type="button"
          label="Log out"
          variant="text"
          severity="secondary"
          class="w-full! cursor-pointer justify-start"
          role="menuitem"
          @click="onLogoutClick"
        >
          <template #icon="iconProps">
            <ArrowRightStartOnRectangleIcon :class="iconProps.class" />
          </template>
        </Button>
      </div>
    </Popover>
  </header>
</template>
