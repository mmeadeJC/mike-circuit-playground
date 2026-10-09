import { computed, ref, type Ref } from 'vue';
import { usePatchPolicyEditorContext } from './patchPolicyEditorContext';

/**
 * Generic baseline / dirty / save / discard wiring for patch policy editors.
 * Pass getters and a restore function so any editor shape can use the same flow.
 */
export function usePatchPolicyEditor<T>(
  getSnapshot: () => T,
  restoreFromSnapshot: (snapshot: T) => void,
) {
  const context = usePatchPolicyEditorContext();
  const baseline = ref(getSnapshot()) as Ref<T>;
  const isUnsavedNew = ref(context?.isNew ?? false);
  const isSaving = ref(false);
  const showSavedConfirmation = ref(false);

  const isDirty = computed(
    () =>
      isUnsavedNew.value
      || JSON.stringify(getSnapshot()) !== JSON.stringify(baseline.value),
  );

  function handleDiscard() {
    if (isUnsavedNew.value) {
      context?.onCancel();
      return;
    }
    restoreFromSnapshot(baseline.value);
    showSavedConfirmation.value = false;
  }

  async function handleSave() {
    isSaving.value = true;
    await new Promise((resolve) => setTimeout(resolve, 600));
    baseline.value = getSnapshot();
    isSaving.value = false;
    if (isUnsavedNew.value) {
      isUnsavedNew.value = false;
      const { policyName } = baseline.value as { policyName?: string };
      context?.onCreated(policyName ?? '');
      return;
    }
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
