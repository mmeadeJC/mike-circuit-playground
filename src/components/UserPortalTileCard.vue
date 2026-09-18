<script setup lang="ts">
import { LockClosedIcon, StarIcon } from '@heroicons/vue/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/vue/24/solid';

export interface UserPortalTileCardProps {
  /** Resource label shown at the bottom of the tile */
  label: string;
  /** Logo image URL; omit for placeholder-only tiles */
  logoSrc?: string;
  logoAlt?: string;
  /** Whether the resource is pinned (lock icon emphasized) */
  pinned?: boolean;
  /** Whether the resource is favorited (solid star) */
  favorite?: boolean;
  /** Show the top-left pin/lock control */
  showPin?: boolean;
}

withDefaults(defineProps<UserPortalTileCardProps>(), {
  logoAlt: '',
  pinned: false,
  favorite: false,
  showPin: true,
});

const emit = defineEmits<{
  click: [];
  'toggle-favorite': [];
  'toggle-pin': [];
}>();

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    emit('click');
  }
}
</script>

<template>
  <div
    data-user-portal-tile-card
    role="button"
    tabindex="0"
    class="group flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-md border border-neutral-default_solid bg-neutral-base text-left transition-shadow hover:shadow-e200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-base"
    style="height: 130px"
    @click="emit('click')"
    @keydown="onKeydown"
  >
    <div class="flex items-start justify-between px-sm pt-sm">
      <button
        v-if="showPin"
        type="button"
        class="flex size-4 shrink-0 items-center justify-center text-neutral-subtle hover:text-neutral-base"
        :class="{ 'text-neutral-base': pinned }"
        :aria-label="pinned ? 'Unpin resource' : 'Pin resource'"
        @click.stop="emit('toggle-pin')"
      >
        <LockClosedIcon class="size-4" />
      </button>
      <span v-else class="size-4 shrink-0" aria-hidden="true" />

      <button
        type="button"
        class="flex size-4 shrink-0 items-center justify-center text-neutral-subtle hover:text-neutral-base"
        :aria-label="favorite ? 'Remove from favorites' : 'Add to favorites'"
        @click.stop="emit('toggle-favorite')"
      >
        <StarIconSolid v-if="favorite" class="size-4 text-primary-base" />
        <StarIcon v-else class="size-4" />
      </button>
    </div>

    <div class="flex flex-1 min-h-0 min-w-0 items-center justify-center px-sm">
      <img
        v-if="logoSrc"
        :src="logoSrc"
        :alt="logoAlt || label"
        class="max-h-14 max-w-14 object-contain"
      />
    </div>

    <p class="line-clamp-2 px-sm pb-sm text-center text-body-xs font-medium text-neutral-base">
      {{ label }}
    </p>
  </div>
</template>
