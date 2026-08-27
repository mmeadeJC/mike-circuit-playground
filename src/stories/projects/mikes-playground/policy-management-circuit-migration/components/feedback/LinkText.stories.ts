import type { Meta, StoryObj } from '@storybook/vue3';
import { LinkText } from '@jumpcloud/circuit/components';
const meta: Meta<typeof LinkText> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Feedback/Link Text",
  component: LinkText,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof LinkText>;

export const ExternalKbLink: Story = {
  name: 'External KB link',
  render: () => ({
    components: { LinkText },
    template: `
      <LinkText
        label="JumpCloud KB Article"
        href="#"
        target="_blank"
      />
    `,
  }),
};

export const InlinePolicyLink: Story = {
  name: 'Inline policy link',
  render: () => ({
    components: { LinkText },
    template: `
      <p class="text-body-md text-neutral-subtle m-0">
        Applies to
        <LinkText
          label="all JumpCloud supported operating systems"
          href="#"
          target="_blank"
          :showIcon="false"
          customClass="inline"
        />.
      </p>
    `,
  }),
};
