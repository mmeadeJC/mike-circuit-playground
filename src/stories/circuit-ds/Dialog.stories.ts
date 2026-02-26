import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import { XMarkIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof Dialog> = {
  title: 'Circuit DS/Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => ({
    components: { Dialog, Button, XMarkIcon },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Sample Dialog"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">This is the dialog content. You can put any content here.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `,
  }),
  args: {},
};

export const WithFooter: Story = {
  render: (args) => ({
    components: { Dialog, Button, XMarkIcon },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Dialog with Footer"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">Dialog body with left-aligned footer text and right-aligned buttons.</p>
          <template #footer>
            <div class="flex items-center w-full">
              <span class="text-body-sm text-neutral-subtle">Optional left content</span>
            </div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Confirm" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `,
  }),
  args: {},
};

export const CustomWidth: Story = {
  render: (args) => ({
    components: { Dialog, Button, XMarkIcon },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Wide Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          header="Wide Dialog"
          :style="{ width: '720px' }"
          v-bind="args"
        >
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">This dialog has a custom width of 720px.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Close" severity="secondary" variant="text" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `,
  }),
  args: {},
};

export const HeaderSlot: Story = {
  render: (args) => ({
    components: { Dialog, Button, Tag, XMarkIcon },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Dialog" @click="visible = true" />
        <Dialog
          v-model:visible="visible"
          modal
          :draggable="false"
          v-bind="args"
        >
          <template #header>
            <div class="flex items-center gap-sm">
              <span class="text-heading-3">Custom Header</span>
              <Tag value="New" severity="success" />
            </div>
          </template>
          <template #closeicon><XMarkIcon /></template>
          <p class="text-body-md text-neutral-base">Dialog with custom header content using the #header slot.</p>
          <template #footer>
            <div class="flex items-center w-full"></div>
            <div class="flex gap-sm">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Dialog>
      </div>
    `,
  }),
  args: {},
};
