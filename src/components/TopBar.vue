<script setup lang="ts">
import { computed, type Component } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import { AiSearchIcon, CustomerSupportIcon, CheckListIcon } from '@jumpcloud/icons';
import { AiAgentButton } from '@jumpcloud/circuit/components';
import { LifebuoyIcon, FlagIcon } from '@heroicons/vue/24/outline';

export interface TopBarIconButton {
  icon: Component;
  label: string;
  onClick?: () => void;
}

export interface TopBarProps {
  searchPlaceholder?: string;
  shortcutLabel?: string;
  iconButtons?: TopBarIconButton[];
  showSearchIcon?: boolean;
}

const props = withDefaults(defineProps<TopBarProps>(), {
  searchPlaceholder: 'Search User, Devices, Apps, etc...',
  shortcutLabel: '⌘/Ctrl + K',
  showSearchIcon: true,
});

const emit = defineEmits<{
  (e: 'search-click'): void;
  (e: 'icon-button-click', label: string): void;
  (e: 'ai-assistant-click', event: Event): void;
}>();

const defaultIconButtons: TopBarIconButton[] = [
  { icon: CustomerSupportIcon, label: 'Customer Support' },
  { icon: LifebuoyIcon, label: 'Lifebuoy' },
  { icon: FlagIcon, label: 'Flag' },
  { icon: CheckListIcon, label: 'Checklist' },
];

const activeIconButtons = computed(() => props.iconButtons ?? defaultIconButtons);

function handleIconButtonClick(button: TopBarIconButton) {
  if (button.onClick) {
    button.onClick();
  }
  emit('icon-button-click', button.label);
}
</script>

<template>
  <div
    class="h-12 border-b border-navigation-top_bar-default flex items-center pl-6 pr-0 shrink-0 bg-navigation-top_bar-default"
  >
    <!-- Left: Search area -->
    <div
      class="flex-1 flex items-center gap-2 h-full min-w-0 overflow-hidden rounded-sm cursor-pointer"
      @click="emit('search-click')"
    >
      <slot name="search-icon">
        <AiSearchIcon v-if="showSearchIcon" class="w-5 h-5 text-field-placeholder shrink-0" />
      </slot>
      <span class="text-body-md text-field-placeholder truncate">
        {{ searchPlaceholder }}
      </span>
      <Tag
        v-if="shortcutLabel"
        :value="shortcutLabel"
        severity="neutral"
        class="shrink-0"
      />
    </div>

    <!-- Right: Action buttons + AI Assistant -->
    <div class="flex items-center gap-4 h-full shrink-0">
      <div class="flex items-center gap-2">
        <slot name="icon-buttons">
          <Button
            v-for="button in activeIconButtons"
            :key="button.label"
            severity="secondary"
            variant="text"
            rounded
            :aria-label="button.label"
            @click="handleIconButtonClick(button)"
          >
            <template #icon>
              <component :is="button.icon" class="w-5 h-5" />
            </template>
          </Button>
        </slot>
      </div>

      <!-- AI Assistant gradient button -->
      <AiAgentButton @click="emit('ai-assistant-click', $event)" />
    </div>
  </div>
</template>
