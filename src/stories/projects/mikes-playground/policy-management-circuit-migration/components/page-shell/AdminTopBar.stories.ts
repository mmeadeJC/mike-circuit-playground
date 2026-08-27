import type { Meta, StoryObj } from '@storybook/vue3';
import TopBar from '@/components/AdminTopBar.vue';

const meta: Meta<typeof TopBar> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/Admin Top Bar",
  component: TopBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  name: 'Default',
  render: () => ({
    components: { TopBar },
    template: `
      <div class="bg-neutral-surface">
        <TopBar />
      </div>
    `,
  }),
};

export const WithBackButton: Story = {
  name: 'With back button',
  render: () => ({
    components: { TopBar },
    setup() {
      function handleBack() {
        // Storybook preview only
      }
      return { handleBack };
    },
    template: `
      <div class="bg-neutral-surface">
        <TopBar
          showBackButton
          backButtonLabel="Windows"
          @back="handleBack"
        />
      </div>
    `,
  }),
};
