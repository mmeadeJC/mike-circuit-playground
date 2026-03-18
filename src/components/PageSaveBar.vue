<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Button from 'primevue/button';
import { PencilSquareIcon, CheckIcon } from '@heroicons/vue/24/outline';

defineOptions({ name: 'PageSaveBar' });

export interface PageSaveBarProps {
  visible?: boolean;
  saving?: boolean;
  saved?: boolean;
  message?: string;
  saveLabel?: string;
  discardLabel?: string;
  savedLabel?: string;
}

const props = withDefaults(defineProps<PageSaveBarProps>(), {
  visible: false,
  saving: false,
  saved: false,
  message: 'You have unsaved changes',
  saveLabel: 'Save changes',
  discardLabel: 'Discard changes',
  savedLabel: 'Changes saved',
});

const emit = defineEmits<{
  save: [];
  discard: [];
}>();

const currentTheme = ref('circuit-light');

const inverseTheme = computed(() =>
  currentTheme.value === 'circuit-dark' ? 'circuit-light' : 'circuit-dark',
);

let observer: MutationObserver | null = null;

function syncTheme() {
  currentTheme.value =
    document.documentElement.getAttribute('data-theme') || 'circuit-light';
}

onMounted(() => {
  syncTheme();
  observer = new MutationObserver(syncTheme);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
});

onUnmounted(() => {
  observer?.disconnect();
});

const shouldShow = computed(() => props.visible || props.saved);
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="save-bar-enter-active"
      enter-from-class="opacity-30 translate-y-[calc(100%+2rem)] scale-[0.98]"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-30 translate-y-[calc(100%+2rem)] scale-[0.98]"
    >
      <div
        v-if="shouldShow"
        class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-[620px]"
      >
        <div class="rounded-lg shadow-e100 overflow-hidden">
          <div
            :data-theme="inverseTheme"
            class="flex items-center gap-6 p-4 bg-neutral-base"
          >
            <div class="flex items-center gap-2 pl-1 flex-1 min-w-0">
              <PencilSquareIcon class="size-4 shrink-0 text-neutral-base" />
              <span class="text-body-md-bold text-neutral-base whitespace-nowrap">
                {{ message }}
              </span>
            </div>

            <Transition
              mode="out-in"
              enter-active-class="transition-all duration-150 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition-all duration-100 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="!saved" key="actions" class="flex items-center gap-3 shrink-0">
                <Button
                  :label="discardLabel"
                  severity="secondary"
                  :disabled="saving"
                  :class="['transition-opacity duration-150', saving ? 'opacity-0 pointer-events-none' : 'opacity-100']"
                  @click="emit('discard')"
                />
                <Button
                  :label="saveLabel"
                  :loading="saving"
                  @click="emit('save')"
                />
              </div>
              <div v-else key="saved" class="shrink-0">
                <Button :label="savedLabel" disabled iconPos="right">
                  <template #icon="iconProps">
                    <CheckIcon :class="iconProps.class" />
                  </template>
                </Button>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.save-bar-enter-active {
  transition: all 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>
