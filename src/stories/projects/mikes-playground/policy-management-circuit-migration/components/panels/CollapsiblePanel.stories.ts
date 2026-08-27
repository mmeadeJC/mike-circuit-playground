import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CollapsiblePanel, FormField } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import { ChevronRightIcon, Cog6ToothIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof CollapsiblePanel> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Collapsible Panel",
  component: CollapsiblePanel,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CollapsiblePanel>;

export const ToggleableSettings: Story = {
  name: 'Toggleable settings panel',
  render: () => ({
    components: {
      CollapsiblePanel,
      FormField,
      PvInputText: InputText,
      ChevronRightIcon,
      Cog6ToothIcon,
    },
    setup() {
      const collapsed = ref(false);
      const bypassCount = ref('0');
      return { collapsed, bypassCount };
    },
    template: `
      <div class="max-w-3xl">
        <CollapsiblePanel
          v-model:collapsed="collapsed"
          toggleable
          header="Settings"
        >
          <template #titleicon="iconProps">
            <Cog6ToothIcon :class="iconProps.class" />
          </template>
          <template #toggleicon="iconProps">
            <ChevronRightIcon :class="iconProps.class" />
          </template>

          <FormField label="Bypass attempts before prompt">
            <template #default="{ inputId }">
              <PvInputText :id="inputId" v-model="bypassCount" class="w-full" />
            </template>
          </FormField>
        </CollapsiblePanel>
      </div>
    `,
  }),
};
