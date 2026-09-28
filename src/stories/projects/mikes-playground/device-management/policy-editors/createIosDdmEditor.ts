import { defineComponent, h } from 'vue';
import IosDdmUpdatePolicyEditor from './IosDdmUpdatePolicyEditor.vue';
import {
  IOS_DDM_POLICY_PROFILE_BY_NAME,
  type IosDdmPolicyProfile,
} from './iosDdmPolicySettings';

/** Factory for iOS/iPadOS DDM ring editors — same layout, profile-specific defaults. */
export function createIosDdmEditor(initialPolicyName: string) {
  const settingsProfile: IosDdmPolicyProfile =
    IOS_DDM_POLICY_PROFILE_BY_NAME[initialPolicyName] ?? 'early-adoption';

  return defineComponent({
    name: `IosDdmEditor_${initialPolicyName.replace(/[^a-zA-Z0-9]/g, '')}`,
    setup() {
      return () =>
        h(IosDdmUpdatePolicyEditor, { initialPolicyName, settingsProfile });
    },
  });
}
