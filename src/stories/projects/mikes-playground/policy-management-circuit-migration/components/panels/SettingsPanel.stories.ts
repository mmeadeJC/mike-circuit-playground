import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CollapsiblePanel, FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import { Cog6ToothIcon } from '@heroicons/vue/24/outline';
const meta: Meta<typeof CollapsiblePanel> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Settings Panel",
  component: CollapsiblePanel,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CollapsiblePanel>;

export const Default: Story = {
  render: () => ({
    components: {
      CollapsiblePanel,
      FormField,
      PvInputText: InputText,
      Cog6ToothIcon,
    },
    setup() {
      const settingValue = ref('Example setting value');
      return { settingValue };
    },
    template: `
      <div class="max-w-3xl">
        <CollapsiblePanel header="Settings">
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Example setting">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="settingValue" class="w-full" />
              </template>
            </FormField>
            <p class="text-body-sm text-neutral-subtle m-0">
              Policy-specific settings render inside this panel on each Canvas page.
            </p>
          </div>
        </CollapsiblePanel>
      </div>
    `,
  }),
};
