import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof IconField> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Icon Field",
  component: IconField,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof IconField>;

export const SearchField: Story = {
  name: 'Search field',
  render: () => ({
    components: {
      FormField,
      PvIconField: IconField,
      PvInputIcon: InputIcon,
      PvInputText: InputText,
      MagnifyingGlassIcon,
    },
    setup() {
      const searchQuery = ref('');
      return { searchQuery };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Search applications">
          <template #default="{ inputId }">
            <PvIconField>
              <PvInputIcon>
                <MagnifyingGlassIcon />
              </PvInputIcon>
              <PvInputText
                :id="inputId"
                v-model="searchQuery"
                placeholder="Search"
                class="w-full"
              />
            </PvIconField>
          </template>
        </FormField>
      </div>
    `,
  }),
};
