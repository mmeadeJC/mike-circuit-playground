import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';

const meta: Meta<typeof FormField> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Form Field",
  component: FormField,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const WithHelpText: Story = {
  name: 'With help text',
  render: () => ({
    components: { FormField, PvInputText: InputText },
    setup() {
      const bypassCount = ref('0');
      return { bypassCount };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField
          label="Bypass attempts before prompt"
          helpText="Number of times a user can bypass FileVault before being required to enable it."
          class="w-full"
        >
          <template #default="{ inputId }">
            <PvInputText :id="inputId" v-model="bypassCount" class="w-full" />
          </template>
        </FormField>
      </div>
    `,
  }),
};
