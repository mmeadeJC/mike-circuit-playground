import type { Meta, StoryObj } from '@storybook/vue3';
import { CopyButton } from '@jumpcloud/circuit/components';
import { samplePolicyPayload } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof CopyButton> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Actions/Copy Button",
  component: CopyButton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  render: () => ({
    components: { CopyButton },
    setup() {
      return { samplePolicyPayload };
    },
    template: `
      <div class="flex items-center gap-sm max-w-3xl">
        <code class="flex-1 truncate rounded-sm bg-neutral-surface px-sm py-xs text-body-sm text-neutral-base">
          {{ samplePolicyPayload }}
        </code>
        <CopyButton :text="samplePolicyPayload" size="small" />
      </div>
    `,
  }),
};
