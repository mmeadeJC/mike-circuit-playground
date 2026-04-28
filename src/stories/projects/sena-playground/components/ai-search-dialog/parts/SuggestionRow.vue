<script setup lang="ts">
import { computed } from 'vue';
import { AiSearchIcon } from '@jumpcloud/icons';

const props = withDefaults(
  defineProps<{
    label: string;
    /** When set, substrings that match the query are emphasized (typing state). */
    searchQuery?: string;
  }>(),
  {
    searchQuery: undefined,
  }
);

const emit = defineEmits<{
  click: [label: string];
}>();

function handleClick() {
  emit('click', props.label);
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const labelSegments = computed(() => {
  const text = props.label;
  const q = props.searchQuery?.trim();
  if (!q) {
    return [{ text, highlight: false as const }];
  }
  const segments: { text: string; highlight: boolean }[] = [];
  let lastIndex = 0;
  const re = new RegExp(`(${escapeRegExp(q)})`, 'gi');
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        text: text.slice(lastIndex, match.index),
        highlight: false,
      });
    }
    segments.push({ text: match[0], highlight: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    segments.push({ text: text.slice(lastIndex), highlight: false });
  }
  return segments.length > 0 ? segments : [{ text, highlight: false as const }];
});
</script>

<template>
  <div
    class="flex min-w-0 w-full items-center gap-2 rounded-sm p-2 transition-colors hover:bg-state-hover focus:bg-state-hover focus:outline focus:outline-2 focus:outline-focus-default cursor-pointer"
    role="button"
    tabindex="0"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <AiSearchIcon
      class="size-4 shrink-0 text-icon-neutral-base"
      aria-hidden="true"
    />
    <span class="min-w-0 flex-1 text-body-sm text-neutral-base">
      <template v-for="(seg, i) in labelSegments" :key="i">
        <span v-if="seg.highlight" class="text-branding-base">{{ seg.text }}</span>
        <template v-else>{{ seg.text }}</template>
      </template>
    </span>
  </div>
</template>
