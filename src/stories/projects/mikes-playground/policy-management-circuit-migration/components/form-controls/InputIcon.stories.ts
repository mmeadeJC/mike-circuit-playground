import type { Meta, StoryObj } from '@storybook/vue3';
import InputIcon from 'primevue/inputicon';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof InputIcon> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Input Icon",
  component: InputIcon,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof InputIcon>;

export const LeadingSearchIcon: Story = {
  name: 'Leading search icon',
  render: () => ({
    components: {
      PvInputIcon: InputIcon,
      PvIconField: IconField,
      PvInputText: InputText,
      MagnifyingGlassIcon,
    },
    template: `
      <PvIconField class="max-w-3xl">
        <PvInputIcon>
          <MagnifyingGlassIcon />
        </PvInputIcon>
        <PvInputText placeholder="Search" class="w-full" />
      </PvIconField>
    `,
  }),
};
