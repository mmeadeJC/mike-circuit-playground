import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent } from 'vue';
import { ConfigPageLayout } from '@jumpcloud/circuit/components';

const meta: Meta<typeof ConfigPageLayout> = {
  title: 'Circuit DS/Layouts/ConfigPageLayout',
  component: ConfigPageLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['1024', '1280', '1440'],
      description: 'Max content width when no sidebar is present (default 1280)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfigPageLayout>;

const ScrollableFormContent = defineComponent({
  name: 'ScrollableFormContent',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">General Settings</p>
      <div class="flex flex-col gap-6">
        <div v-for="section in 4" :key="section">
          <p class="text-body-md-semi-bold text-neutral-base mb-3">Section {{ section }}</p>
          <div class="space-y-4">
            <div v-for="i in 5" :key="i">
              <div class="h-3 rounded bg-neutral-surface_deep w-24 mb-2"></div>
              <div class="h-10 rounded border border-neutral-default_solid bg-neutral-surface w-full max-w-[320px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
});

const ScrollableNavSidebar = defineComponent({
  name: 'ScrollableNavSidebar',
  template: `
    <div class="flex flex-col gap-6">
      <p class="text-body-md-semi-bold text-neutral-base">Settings Nav</p>
      <div class="flex flex-col gap-1">
        <div v-for="i in 20" :key="i"
          class="h-8 rounded px-3 flex items-center"
          :class="i === 1 ? 'bg-neutral-surface_deep' : ''"
        >
          <div class="h-3 rounded w-24" :class="i === 1 ? 'bg-neutral-surface' : 'bg-neutral-surface_deep'"></div>
        </div>
      </div>
    </div>
  `,
});

export const WithSidebar: Story = {
  render: () => ({
    components: { ConfigPageLayout, ScrollableFormContent, ScrollableNavSidebar },
    template: `
      <ConfigPageLayout>
        <ScrollableFormContent />
        <template #sidebar>
          <ScrollableNavSidebar />
        </template>
      </ConfigPageLayout>
    `,
  }),
};

export const WithoutSidebar: Story = {
  args: {
    maxWidth: '1024',
  },
  render: (args) => ({
    components: { ConfigPageLayout, ScrollableFormContent },
    setup: () => ({ args }),
    template: `
      <ConfigPageLayout v-bind="args">
        <ScrollableFormContent />
      </ConfigPageLayout>
    `,
  }),
};
