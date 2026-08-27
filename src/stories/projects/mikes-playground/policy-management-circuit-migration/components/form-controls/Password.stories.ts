import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField, Password } from '@jumpcloud/circuit/components';

const meta: Meta<typeof Password> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Password",
  component: Password,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Password>;

export const Default: Story = {
  render: () => ({
    components: { FormField, Password },
    setup() {
      const wifiPassword = ref('');
      return { wifiPassword };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Password">
          <template #default="{ inputId }">
            <Password
              :inputId="inputId"
              v-model="wifiPassword"
              toggleMask
              class="w-full"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
