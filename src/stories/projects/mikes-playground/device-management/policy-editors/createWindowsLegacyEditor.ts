import { defineComponent, h } from 'vue';
import WindowsLegacyUpdatePolicyEditor from './WindowsLegacyUpdatePolicyEditor.vue';
import {
  WINDOWS_LEGACY_POLICY_PROFILE_BY_NAME,
  type WindowsLegacyPolicyProfile,
} from './windowsLegacyPolicySettings';

/** Factory for legacy Windows ring editors — same layout, profile-specific defaults. */
export function createWindowsLegacyEditor(initialPolicyName: string) {
  const settingsProfile: WindowsLegacyPolicyProfile =
    WINDOWS_LEGACY_POLICY_PROFILE_BY_NAME[initialPolicyName] ?? 'vanguard';

  return defineComponent({
    name: `WindowsLegacyEditor_${initialPolicyName.replace(/[^a-zA-Z0-9]/g, '')}`,
    setup() {
      return () =>
        h(WindowsLegacyUpdatePolicyEditor, { initialPolicyName, settingsProfile });
    },
  });
}
