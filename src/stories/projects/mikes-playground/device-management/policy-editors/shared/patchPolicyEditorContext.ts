import { inject, type InjectionKey } from 'vue';

/**
 * Provided by PatchPolicyEditPage so editors can behave as "create" flows
 * (save bar always visible, Cancel leaves the page, Save adds the policy to the list)
 * without each editor needing its own props.
 */
export type PatchPolicyEditorContext = {
  isNew: boolean;
  onCreated: (policyName: string) => void;
  onCancel: () => void;
};

export const PATCH_POLICY_EDITOR_CONTEXT: InjectionKey<PatchPolicyEditorContext> =
  Symbol('patchPolicyEditorContext');

export function usePatchPolicyEditorContext() {
  return inject(PATCH_POLICY_EDITOR_CONTEXT, null);
}
