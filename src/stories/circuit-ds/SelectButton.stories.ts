import type { Meta, StoryObj } from '@storybook/vue3';
import SelectButton from 'primevue/selectbutton';
import { ref } from 'vue';

const meta: Meta<typeof SelectButton> = {
  title: 'Circuit DS/Components/SelectButton',
  component: SelectButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SelectButton>;

export const Default: Story = {
  render: (args) => ({
    components: { SelectButton },
    setup() {
      const value = ref('One');
      return { args, value };
    },
    template: '<SelectButton v-bind="args" v-model="value" />',
  }),
  args: {
    options: ['One', 'Two', 'Three'],
  },
};
