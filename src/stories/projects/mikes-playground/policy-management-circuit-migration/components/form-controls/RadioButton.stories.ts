import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import RadioButton from 'primevue/radiobutton';
import { sampleAppList } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof RadioButton> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Form Controls/Radio Button",
  component: RadioButton,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const AppSelectionList: Story = {
  name: 'App selection list',
  render: () => ({
    components: { PvRadioButton: RadioButton },
    setup() {
      const selectedAppId = ref('1');
      return { selectedAppId, sampleAppList };
    },
    template: `
      <div class="max-w-md overflow-hidden rounded-sm border border-neutral-default_solid">
        <div
          v-for="app in sampleAppList.slice(0, 4)"
          :key="app.id"
          class="flex items-center gap-sm px-md min-h-10 border-b border-neutral-default_solid last:border-b-0 cursor-pointer hover:bg-neutral-surface"
          @click="selectedAppId = app.id"
        >
          <PvRadioButton
            v-model="selectedAppId"
            :inputId="'app-select-' + app.id"
            name="app-select"
            :value="app.id"
            class="shrink-0"
          />
          <label
            :for="'app-select-' + app.id"
            class="flex-1 cursor-pointer text-body-md text-neutral-base m-0"
          >
            {{ app.name }}
          </label>
        </div>
      </div>
    `,
  }),
};
