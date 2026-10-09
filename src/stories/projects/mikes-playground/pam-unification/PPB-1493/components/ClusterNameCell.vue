<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { LinkText } from '@jumpcloud/circuit/components';

/**
 * Name cell for the Clusters table: link + secondary description.
 * Both lines truncate with an ellipsis; the full text shows in a tooltip, but only when it is actually truncated.
 */
const props = defineProps<{ label: string; description?: string }>();
const emit = defineEmits<{ (e: 'click', event: Event): void }>();

// Only show the tooltip when the text actually overflows; tracked reactively so it stays right on resize / data change.
const nameRef = ref<HTMLElement | null>(null);
const descRef = ref<HTMLElement | null>(null);
const nameTruncated = ref(false);
const descTruncated = ref(false);
let observer: ResizeObserver | undefined;

function measure() {
  nameTruncated.value = isOverflowing(nameRef.value?.querySelector<HTMLElement>('a') ?? null);
  descTruncated.value = isOverflowing(descRef.value);
}
const isOverflowing = (el: HTMLElement | null) => !!el && el.scrollWidth > el.clientWidth;

onMounted(() => {
  nextTick(measure);
  observer = new ResizeObserver(measure);
  [nameRef.value, descRef.value].forEach((el) => el && observer!.observe(el));
});
onBeforeUnmount(() => observer?.disconnect());
watch(() => [props.label, props.description], () => nextTick(measure));
</script>

<template>
  <div class="flex flex-col items-start gap-0 px-2 py-1.5 min-w-0 w-full overflow-hidden">
    <div ref="nameRef" v-tooltip.top="{ value: nameTruncated ? label : '', showDelay: 300 }" class="min-w-0 max-w-full">
      <LinkText href="#" :label="label" variant="table" :show-icon="false" custom-class="block truncate max-w-full" @click="(e: Event) => emit('click', e)" />
    </div>
    <span
      v-if="description"
      ref="descRef"
      v-tooltip.bottom="{ value: descTruncated ? description : '', showDelay: 300 }"
      class="block w-full truncate text-body-xs text-neutral-muted"
    >{{ description }}</span>
  </div>
</template>
