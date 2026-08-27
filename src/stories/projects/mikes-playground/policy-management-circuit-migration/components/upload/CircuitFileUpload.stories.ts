import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import CircuitFileUpload, {
  type CircuitUploadFile,
} from '@/components/CircuitFileUpload.vue';
import { certificateSupportedFormats } from '../shared/policyMigrationComponentConstants';

const meta: Meta<typeof CircuitFileUpload> = {
  title: "Projects/Mike's Playground/Policy Management - Circuit Migration/Components/Upload/Circuit File Upload",
  component: CircuitFileUpload,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CircuitFileUpload>;

export const CertificateUpload: Story = {
  name: 'Certificate upload',
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return { files, certificateSupportedFormats };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Upload certificate">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              :supported-formats="certificateSupportedFormats"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const ProfileUpload: Story = {
  name: 'Configuration profile upload',
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return { files };
    },
    template: `
      <div class="w-full max-w-3xl">
        <FormField label="Upload configuration profile">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              accept=".mobileconfig"
              supported-formats=".mobileconfig"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
