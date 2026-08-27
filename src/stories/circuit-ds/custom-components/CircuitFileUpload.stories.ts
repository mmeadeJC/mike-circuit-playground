import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { FormField } from '@jumpcloud/circuit/components';
import CircuitFileUpload, {
  type CircuitUploadFile,
} from '@/components/CircuitFileUpload.vue';

const DEFAULT_SUPPORTED_FORMATS =
  'avif, doc, docx, gif, ico, jpeg, jpg, json, key, lic, mov, mp3, mp4, ogg, pdf, png, rar, rtf, svg, txt, wav, webm, webp, xls, .xlsx, .xml, zip';

const meta: Meta<typeof CircuitFileUpload> = {
  title: "Circuit DS/Custom Components/CircuitFileUpload",
  component: CircuitFileUpload,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof CircuitFileUpload>;

export const Default: Story = {
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return { files, DEFAULT_SUPPORTED_FORMATS };
    },
    template: `
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const DragState: Story = {
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const files = ref<CircuitUploadFile[]>([]);
      return { files, DEFAULT_SUPPORTED_FORMATS };
    },
    template: `
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              preview-drag-state
              preview-drag-file-name="filename.jpeg"
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const FileSelected: Story = {
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const files = ref<CircuitUploadFile[]>([
        { name: 'filename.csv', size: 14 * 1024 },
        { name: 'filename.csv', size: 14 * 1024 },
      ]);
      return { files, DEFAULT_SUPPORTED_FORMATS };
    },
    template: `
      <div class="max-w-2xl">
        <FormField label="Upload files">
          <template #default>
            <CircuitFileUpload
              v-model="files"
              multiple
              :supported-formats="DEFAULT_SUPPORTED_FORMATS"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const CertificateUpload: Story = {
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const fileName = ref<string | null>(null);
      return { fileName };
    },
    template: `
      <div class="max-w-2xl">
        <FormField
          label="Base64-Encoded Certificate"
          label-tooltip="Upload a certificate file."
        >
          <template #default>
            <CircuitFileUpload
              v-model="fileName"
              accept=".cer,.pem,.p12,.der,.crt"
              supported-formats="cer, pem, p12, der, crt"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};

export const CertificateSelected: Story = {
  render: () => ({
    components: { CircuitFileUpload, FormField },
    setup() {
      const fileName = ref<string | null>('company-root-ca.cer');
      return { fileName };
    },
    template: `
      <div class="max-w-2xl">
        <FormField label="Base64-Encoded Certificate">
          <template #default>
            <CircuitFileUpload
              v-model="fileName"
              accept=".cer,.pem,.p12,.der,.crt"
              supported-formats="cer, pem, p12, der, crt"
            />
          </template>
        </FormField>
      </div>
    `,
  }),
};
