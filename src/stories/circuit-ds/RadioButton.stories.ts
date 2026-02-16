import type { Meta, StoryObj } from '@storybook/vue3';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';

const meta: Meta<typeof RadioButton> = {
  title: 'Circuit DS/Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioButton },
    setup() {
      const selected = ref('option1');
      return { args, selected };
    },
    template: `
      <div class="flex gap-4">
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt1" value="option1" v-model="selected" />
          <label for="opt1">Option 1</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt2" value="option2" v-model="selected" />
          <label for="opt2">Option 2</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-bind="args" inputId="opt3" value="option3" v-model="selected" />
          <label for="opt3">Option 3</label>
        </div>
      </div>
    `,
  }),
  args: {},
};
