<script setup lang="ts">
import { computed } from 'vue';
import { AiSearchIcon } from '@jumpcloud/icons';

const props = withDefaults(
  defineProps<{
    title: string;
    href?: string;
    subtitle: string;
    /** Shown in the default right area when variant is `recent` and no `#right` slot is provided. */
    timestamp?: string;
    target?: string;
    rel?: string;
    variant?: 'recent' | 'result';
    /** Case-insensitive substring(s) in the title are wrapped for emphasis. */
    searchQuery?: string;
  }>(),
  {
    href: '#',
    target: undefined,
    rel: undefined,
    variant: 'recent',
    timestamp: undefined,
    searchQuery: undefined,
  }
);

const anchorRel = computed(() => {
  if (props.rel) return props.rel;
  if (props.target === '_blank') return 'noopener noreferrer';
  return undefined;
});

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Split title into plain and highlighted segments for accessible, safe rendering (no v-html).
 */
const titleSegments = computed(() => {
  const text = props.title;
  const q = props.searchQuery?.trim();
  if (!q) {
    return [{ text, highlight: false as const }];
  }
  const regex = new RegExp(`(${escapeRegExp(q)})`, 'gi');
  const segments: { text: string; highlight: boolean }[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(regex.source, regex.flags);
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
    class="flex w-full items-start gap-2 rounded-sm p-2 transition-colors hover:bg-state-hover"
  >
    <div class="flex min-w-0 flex-1 items-start gap-2">
      <div class="flex h-auto w-auto shrink-0 items-center justify-center">
        <slot name="icon">
          <AiSearchIcon
            class="size-4 shrink-0 text-icon-neutral-base"
            aria-hidden="true"
          />
        </slot>
      </div>
      <div class="flex min-w-0 w-full flex-1 flex-col gap-0.5">
        <div class="min-w-0 w-full">
          <a
            :href="href"
            :target="target"
            :rel="anchorRel"
            class="block w-full min-w-0 truncate text-body-sm-semi-bold text-neutral-base focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-base"
          >
            <template v-for="(seg, i) in titleSegments" :key="i">
              <span v-if="seg.highlight" class="text-branding-base">{{
                seg.text
              }}</span>
              <template v-else>{{ seg.text }}</template>
            </template>
          </a>
        </div>
        <span class="text-body-xs text-neutral-muted">{{ subtitle }}</span>
      </div>
    </div>
    <div
      class="flex h-auto w-auto shrink-0 items-start justify-end [&>svg]:size-4"
    >
      <slot name="right">
        <span
          v-if="variant === 'recent' && timestamp"
          class="shrink-0 whitespace-nowrap text-body-sm text-neutral-subtle"
          >{{ timestamp }}</span
        >
      </slot>
    </div>
  </div>
</template>
