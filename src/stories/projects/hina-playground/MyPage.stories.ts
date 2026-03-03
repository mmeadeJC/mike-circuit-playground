// Official Hina Playground Story
import type { Meta, StoryObj } from '@storybook/vue3';
import { JcToggle } from '@jumpcloud/circuit'; 

const meta: Meta<typeof JcToggle> = {
  // Fix: Title Case 'Projects' to match the team sidebar
  title: 'Projects/Hina Playground/Master Toggle', 
  component: JcToggle,
};

export default meta;
type Story = StoryObj<typeof JcToggle>;

export const Default: Story = {
  args: {
    label: 'AI Master Toggle',
    modelValue: true,
  },
};