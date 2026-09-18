import { computed, ref, type Ref } from 'vue';

/**
 * Generic baseline / dirty / save / discard wiring for patch policy editors.
 * Pass getters and a restore function so any editor shape can use the same flow.
 */
export function usePatchPolicyEditor<T>(
  getSnapshot: () => T,
  restoreFromSnapshot: (snapshot: T) => void,
) {
  const baseline = ref(getSnapshot()) as Ref<T>;
  const isSaving = ref(false);
  const showSavedConfirmation = ref(false);

  const isDirty = computed(
    () => JSON.stringify(getSnapshot()) !== JSON.stringify(baseline.value),
  );

  function handleDiscard() {
    restoreFromSnapshot(baseline.value);
    showSavedConfirmation.value = false;
  }

  async function handleSave() {
    isSaving.value = true;
    await new Promise((resolve) => setTimeout(resolve, 600));
    baseline.value = getSnapshot();
    isSaving.value = false;
    showSavedConfirmation.value = true;
    setTimeout(() => {
      showSavedConfirmation.value = false;
    }, 2000);
  }

  return {
    baseline,
    isDirty,
    isSaving,
    showSavedConfirmation,
    handleDiscard,
    handleSave,
  };
}
