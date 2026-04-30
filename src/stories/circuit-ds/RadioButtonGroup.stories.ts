import type { Meta, StoryObj } from '@storybook/vue3-vite';
import RadioButtonGroup from 'primevue/radiobuttongroup';
import RadioButton from 'primevue/radiobutton';
import { ref } from 'vue';

const meta: Meta<typeof RadioButtonGroup> = {
  title: 'Circuit DS/Components/RadioButtonGroup',
  component: RadioButtonGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioButtonGroup>;

export const Default: Story = {
  render: (args) => ({
    components: { RadioButtonGroup, RadioButton },
    setup() {
      const selected = ref('option1');
      return { args, selected };
    },
    template: `
      <RadioButtonGroup v-bind="args" v-model="selected">
        <div class="flex flex-col gap-md">
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt1" value="option1" />
            <label for="opt1" class="text-body-md">Option 1</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt2" value="option2" />
            <label for="opt2" class="text-body-md">Option 2</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="opt3" value="option3" />
            <label for="opt3" class="text-body-md">Option 3</label>
          </div>
        </div>
      </RadioButtonGroup>
    `,
  }),
};

export const Horizontal: Story = {
  render: (args) => ({
    components: { RadioButtonGroup, RadioButton },
    setup() {
      const selected = ref('daily');
      return { args, selected };
    },
    template: `
      <RadioButtonGroup v-bind="args" v-model="selected">
        <div class="flex items-center gap-lg">
          <div class="flex items-center gap-sm">
            <RadioButton inputId="daily" value="daily" />
            <label for="daily" class="text-body-md">Daily</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="weekly" value="weekly" />
            <label for="weekly" class="text-body-md">Weekly</label>
          </div>
          <div class="flex items-center gap-sm">
            <RadioButton inputId="monthly" value="monthly" />
            <label for="monthly" class="text-body-md">Monthly</label>
          </div>
        </div>
      </RadioButtonGroup>
    `,
  }),
};
