import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { RadioButtonWithLabel } from '@jumpcloud/circuit/components';
import { kioskAppTypeOptions } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof RadioButtonWithLabel> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button With Label",
  component: RadioButtonWithLabel,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof RadioButtonWithLabel>;

export const Default: Story = {
  name: 'App type selection',
  render: () => ({
    components: { RadioButtonWithLabel },
    setup() {
      const appType = ref('company-added');
      return { appType, kioskAppTypeOptions };
    },
    template: `
      <div class="max-w-3xl flex flex-col gap-sm">
        <RadioButtonWithLabel
          v-for="option in kioskAppTypeOptions"
          :key="option.value"
          v-model="appType"
          :value="option.value"
          name="app-type"
          :inputId="'app-type-' + option.value"
        >
          <template #label>{{ option.label }}</template>
        </RadioButtonWithLabel>
      </div>
    `,
  }),
};
