import { defineComponent, h } from 'vue';
import MacOsLegacyUpdatePolicyEditor from './MacOsLegacyUpdatePolicyEditor.vue';
import {
  MACOS_LEGACY_POLICY_PROFILE_BY_NAME,
  type MacOsLegacyPolicyProfile,
} from './macOsLegacyPolicySettings';

/** Factory for legacy macOS ring editors — same layout, profile-specific defaults. */
export function createMacOsLegacyEditor(initialPolicyName: string) {
  const settingsProfile: MacOsLegacyPolicyProfile =
    MACOS_LEGACY_POLICY_PROFILE_BY_NAME[initialPolicyName] ?? 'vanguard';

  return defineComponent({
    name: `MacOsLegacyEditor_${initialPolicyName.replace(/[^a-zA-Z0-9]/g, '')}`,
    setup() {
      return () =>
        h(MacOsLegacyUpdatePolicyEditor, { initialPolicyName, settingsProfile });
    },
  });
}
