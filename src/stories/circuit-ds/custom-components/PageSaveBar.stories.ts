import type { Meta, StoryObj } from '@storybook/vue3';
import { ref, defineComponent, watch } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FormField } from '@jumpcloud/circuit/components';
import PageSaveBar from '@/components/PageSaveBar.vue';

const meta: Meta<typeof PageSaveBar> = {
  title: 'Circuit DS/Custom Components/PageSaveBar',
  component: PageSaveBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    visible: {
      control: 'boolean',
      description: 'Controls whether the bar is shown',
    },
    saving: {
      control: 'boolean',
      description: 'Shows loading state on the save button',
    },
    saved: {
      control: 'boolean',
      description: 'Shows the saved confirmation state',
    },
    message: {
      control: 'text',
      description: 'Message text displayed in the bar',
    },
    saveLabel: {
      control: 'text',
      description: 'Label for the save button',
    },
    discardLabel: {
      control: 'text',
      description: 'Label for the discard button',
    },
    savedLabel: {
      control: 'text',
      description: 'Label for the saved confirmation',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageSaveBar>;

export const Default: Story = {
  args: {
    visible: true,
    saving: false,
    saved: false,
  },
};

export const Saving: Story = {
  args: {
    visible: true,
    saving: true,
    saved: false,
  },
};

export const Saved: Story = {
  args: {
    visible: true,
    saving: false,
    saved: true,
  },
};

export const InteractiveDemo: Story = {
  render: () =>
    defineComponent({
      components: { PageSaveBar, Button, InputText, FormField },
      setup() {
        const firstName = ref('John');
        const lastName = ref('Doe');
        const email = ref('john.doe@example.com');

        const originalValues = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        };

        const hasChanges = ref(false);
        const isSaving = ref(false);
        const isSaved = ref(false);

        function checkChanges() {
          hasChanges.value =
            firstName.value !== originalValues.firstName ||
            lastName.value !== originalValues.lastName ||
            email.value !== originalValues.email;
        }

        watch([firstName, lastName, email], checkChanges);

        function handleSave() {
          isSaving.value = true;
          setTimeout(() => {
            originalValues.firstName = firstName.value;
            originalValues.lastName = lastName.value;
            originalValues.email = email.value;

            isSaving.value = false;
            isSaved.value = true;
            hasChanges.value = false;

            setTimeout(() => {
              isSaved.value = false;
            }, 2000);
          }, 1500);
        }

        function handleDiscard() {
          firstName.value = originalValues.firstName;
          lastName.value = originalValues.lastName;
          email.value = originalValues.email;
          hasChanges.value = false;
        }

        return {
          firstName,
          lastName,
          email,
          hasChanges,
          isSaving,
          isSaved,
          handleSave,
          handleDiscard,
        };
      },
      template: `
        <div class="bg-neutral-base w-screen h-screen p-8 overflow-auto">
          <div class="max-w-2xl mx-auto">
            <h1 class="text-heading-2 text-neutral-base mb-2">User Profile</h1>
            <p class="text-body-md text-neutral-subtle mb-6">
              Edit any field below to trigger the save bar.
            </p>

            <div class="grid grid-cols-2 gap-x-6 gap-y-4">
              <FormField label="First Name">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="firstName" class="w-full" />
                </template>
              </FormField>
              <FormField label="Last Name">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="lastName" class="w-full" />
                </template>
              </FormField>
              <FormField label="Email" class="col-span-2">
                <template #default="{ inputId }">
                  <InputText :id="inputId" v-model="email" class="w-full" />
                </template>
              </FormField>
            </div>
          </div>

          <PageSaveBar
            :visible="hasChanges"
            :saving="isSaving"
            :saved="isSaved"
            @save="handleSave"
            @discard="handleDiscard"
          />
        </div>
      `,
    }),
};
