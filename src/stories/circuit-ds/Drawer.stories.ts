import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';

const meta: Meta<typeof Drawer> = {
  title: 'Circuit DS/Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer content goes here.</p>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Drawer', position: 'right', size: 'md' },
};

export const Small: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Small Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Small drawer (288px).</p>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Small Drawer', position: 'right', size: 'sm' },
};

export const Large: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Large Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Large drawer (480px).</p>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Large Drawer', position: 'right', size: 'lg' },
};

export const ExtraLarge: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Extra Large Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Extra large drawer (640px).</p>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Extra Large Drawer', position: 'right', size: 'xl' },
};

export const LeftPosition: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Left Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer opens from the left.</p>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Left Drawer', position: 'left', size: 'md' },
};

export const WithFooter: Story = {
  render: (args) => ({
    components: { Drawer, Button },
    setup() {
      const visible = ref(false);
      return { args, visible };
    },
    template: `
      <div>
        <Button label="Open Drawer" @click="visible = true" />
        <Drawer v-bind="args" v-model:visible="visible">
          <p class="text-body-md text-neutral-base">Drawer content with footer.</p>
          <template #footer>
            <div class="flex gap-sm justify-end">
              <Button label="Cancel" severity="secondary" variant="text" @click="visible = false" />
              <Button label="Save" @click="visible = false" />
            </div>
          </template>
        </Drawer>
      </div>
    `,
  }),
  args: { header: 'Drawer with Footer', position: 'right', size: 'md' },
};
