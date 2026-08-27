import type { Meta, StoryObj } from '@storybook/vue3';
import { ConfigPageLayout } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ConfigPageLayout> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Layouts/Config Page Layout",
  component: ConfigPageLayout,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof ConfigPageLayout>;

export const Default: Story = {
  render: () => ({
    components: { ConfigPageLayout },
    template: `
      <ConfigPageLayout class="w-full! min-h-96">
        <div class="flex flex-col gap-md p-md">
          <h3 class="text-heading-3 text-neutral-base m-0">Single-column config page</h3>
          <p class="text-body-md text-neutral-subtle m-0">
            Used on Policy Details Tab and Custom Registry Keys where no sidebar is required.
          </p>
        </div>
      </ConfigPageLayout>
    `,
  }),
};
