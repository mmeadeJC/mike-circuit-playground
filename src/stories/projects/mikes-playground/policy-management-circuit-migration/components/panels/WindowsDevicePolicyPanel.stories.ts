import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { CollapsiblePanel, FormField, LinkText } from '@jumpcloud/circuit/components';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import { ShieldCheckIcon } from '@heroicons/vue/24/outline';
import {
  samplePolicyActivation,
  samplePolicyBehavior,
} from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof CollapsiblePanel> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Panels/Windows Device Policy Panel",
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
      LinkText,
      PvInputText: InputText,
      PvTextarea: Textarea,
      ShieldCheckIcon,
    },
    setup() {
      const policyName = ref('WiFi Configuration');
      const policyNotes = ref('');
      return { policyName, policyNotes, samplePolicyBehavior, samplePolicyActivation };
    },
    template: `
      <div class="max-w-3xl">
        <CollapsiblePanel header="Windows Device Policy">
          <template #titleicon="iconProps">
            <ShieldCheckIcon :class="iconProps.class" />
          </template>

          <div class="flex flex-col gap-md">
            <FormField label="Policy Name">
              <template #default="{ inputId }">
                <PvInputText :id="inputId" v-model="policyName" class="w-full" />
              </template>
            </FormField>

            <FormField label="Policy Notes">
              <template #default="{ inputId }">
                <PvTextarea
                  :id="inputId"
                  v-model="policyNotes"
                  rows="3"
                  autoResize
                  class="w-full"
                  placeholder="Add notes about this policy"
                />
              </template>
            </FormField>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Description</h4>
              <p class="text-body-md text-neutral-subtle m-0">
                This policy configures a wireless network for Windows 10/11 devices.
              </p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Behavior</h4>
              <p class="text-body-md text-neutral-subtle m-0">{{ samplePolicyBehavior }}</p>
            </div>

            <div class="flex flex-col gap-xs">
              <h4 class="text-body-md-bold text-neutral-base">Policy Activation</h4>
              <p class="text-body-md text-neutral-subtle m-0">{{ samplePolicyActivation }}</p>
            </div>
          </div>
        </CollapsiblePanel>
      </div>
    `,
  }),
};
