import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CheckboxWithLabel } from '@jumpcloud/circuit/components';
import { InformationCircleIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof CheckboxWithLabel> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Checkbox With Label",
  component: CheckboxWithLabel,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CheckboxWithLabel>;

export const Default: Story = {
  name: 'Simple label',
  render: () => ({
    components: { CheckboxWithLabel },
    setup() {
      const autoJoin = ref(true);
      return { autoJoin };
    },
    template: `
      <div class="max-w-3xl">
        <CheckboxWithLabel
          v-model="autoJoin"
          inputId="checkbox-auto-join"
          :binary="true"
        >
          <template #label>Auto join this network</template>
        </CheckboxWithLabel>
      </div>
    `,
  }),
};

export const WithInfoTooltip: Story = {
  name: 'With info tooltip',
  render: () => ({
    components: { CheckboxWithLabel, InformationCircleIcon },
    setup() {
      const showRecoveryKey = ref(false);
      return { showRecoveryKey };
    },
    template: `
      <div class="max-w-3xl">
        <CheckboxWithLabel
          v-model="showRecoveryKey"
          inputId="checkbox-recovery-key"
          :binary="true"
        >
          <template #label>
            <span class="inline-flex items-center gap-1">
              <span>Show the FileVault Recovery Key to the user when enabled</span>
              <button
                type="button"
                class="rounded-full text-neutral-subtle hover:text-neutral-base"
                aria-label="More information"
                v-tooltip.top="'When enabled, the recovery key is shown to the user after FileVault is turned on.'"
              >
                <InformationCircleIcon class="size-4" />
              </button>
            </span>
          </template>
        </CheckboxWithLabel>
      </div>
    `,
  }),
};
