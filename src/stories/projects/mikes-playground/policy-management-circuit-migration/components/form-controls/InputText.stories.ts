import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import InputText from 'primevue/inputtext';

const meta: Meta<typeof InputText> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Text",
  component: InputText,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  render: () => ({
    components: { PvInputText: InputText },
    setup() {
      const value = ref('FileVault 2');
      return { value };
    },
    template: `
      <PvInputText v-model="value" class="w-full max-w-3xl" />
    `,
  }),
};
