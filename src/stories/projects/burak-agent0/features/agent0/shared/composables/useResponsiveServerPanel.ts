import { computed, onMounted, onUnmounted, ref, watch } from 'vue';

export function useResponsiveServerPanel(threshold = 1024) {
  const serversContainerRef = ref<HTMLElement | null>(null);
  const contentWidth = ref(1200);
  const useInlinePanel = computed(() => contentWidth.value >= threshold);
  let resizeObserver: ResizeObserver | null = null;

  onMounted(() => {
    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        contentWidth.value = entry.contentRect.width;
      }
    });
  });

  watch(serversContainerRef, (el, previous) => {
    if (!resizeObserver) {
      return;
    }
    if (previous) {
      resizeObserver.unobserve(previous);
    }
    if (el) {
      resizeObserver.observe(el);
    }
  });

  onUnmounted(() => {
    resizeObserver?.disconnect();
  });

  return {
    serversContainerRef,
    contentWidth,
    useInlinePanel,
  };
}
