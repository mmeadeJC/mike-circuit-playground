import type { Meta, StoryObj } from '@storybook/vue3';
/** * We are going to import the JcToggle that your project 
 * is ALREADY using successfully in other pages.
 */
import { JcToggle } from '@jumpcloud/circuit'; 

const meta: Meta = {
  title: 'PROJECTS/Hina Playground/Master Toggle',
};

export default meta;

export const Default: StoryObj = {
  render: (args) => ({
    components: { JcToggle },
    setup() { return { args }; },
    template: '<JcToggle v-bind="args" />',
  }),
  args: {
    label: 'AI Master Toggle',
    modelValue: true,
  },
};