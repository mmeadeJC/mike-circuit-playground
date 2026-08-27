import type { Meta, StoryObj } from '@storybook/vue3';
import { AppNavigation } from '@jumpcloud/circuit/components';
import { menuItems, profileMenuItems } from '../../demo/policyMigrationMenuItems';
const meta: Meta<typeof AppNavigation> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Page Shell/App Navigation",
  component: AppNavigation,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof AppNavigation>;

export const Default: Story = {
  render: () => ({
    components: { AppNavigation },
    setup() {
      return { menuItems, profileMenuItems };
    },
    template: `
      <div class="h-screen">
        <AppNavigation
          :menuItems="menuItems"
          :profileMenuItems="profileMenuItems"
          activeItem="device management"
          :collapsible="true"
          :topNavToggle="true"
        />
      </div>
    `,
  }),
};
