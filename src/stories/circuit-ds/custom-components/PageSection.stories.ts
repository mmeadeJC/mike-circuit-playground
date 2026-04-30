import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { h } from 'vue';
import PageSection from '@/components/PageSection.vue';
import Button from 'primevue/button';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/outline';

const meta: Meta<typeof PageSection> = {
  title: 'Circuit DS/Custom Components/PageSection',
  component: PageSection,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof PageSection>;

export const Default: Story = {
  args: {
    title: 'Section Header',
  },
  render: (args) => ({
    components: { PageSection, Button, EllipsisHorizontalIcon },
    setup: () => ({ args }),
    template: `
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">This is a sub-title slot</span>
          </template>
          <template #actions>
            <Button label="Button Label" severity="secondary" variant="outlined" />
            <Button severity="secondary" variant="outlined" rounded>
              <template #icon>
                <EllipsisHorizontalIcon class="size-5" />
              </template>
            </Button>
          </template>
        </PageSection>
      </div>
    `,
  }),
};

export const TitleOnly: Story = {
  args: {
    title: 'Users & Groups',
  },
  render: (args) => ({
    components: { PageSection },
    setup: () => ({ args }),
    template: `
      <div style="width: 900px;">
        <PageSection v-bind="args" />
      </div>
    `,
  }),
};

export const WithSubtitle: Story = {
  args: {
    title: 'Security Settings',
  },
  render: (args) => ({
    components: { PageSection, Button },
    setup: () => ({ args }),
    template: `
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Configure security policies for your organization</span>
          </template>
        </PageSection>
      </div>
    `,
  }),
};

export const CustomActions: Story = {
  args: {
    title: 'Team Members',
  },
  render: (args) => ({
    components: { PageSection, Button },
    setup: () => ({ args }),
    template: `
      <div style="width: 900px;">
        <PageSection v-bind="args">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Manage team members and their permissions</span>
          </template>
          <template #actions>
            <Button label="Invite Member" severity="secondary" variant="outlined" />
            <Button label="Manage Roles" severity="secondary" variant="outlined" />
          </template>
        </PageSection>
      </div>
    `,
  }),
};

export const MultipleSections: Story = {
  render: () => ({
    components: { PageSection, Button, EllipsisHorizontalIcon },
    template: `
      <div style="width: 900px;">
        <PageSection title="General Settings">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Basic configuration options</span>
          </template>
          <template #actions>
            <Button label="Edit" severity="secondary" variant="outlined" />
          </template>
        </PageSection>

        <div class="border-b border-neutral-default_solid" />

        <PageSection title="Security">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Security and access control settings</span>
          </template>
          <template #actions>
            <Button label="Configure" severity="secondary" variant="outlined" />
            <Button severity="secondary" variant="outlined" rounded>
              <template #icon>
                <EllipsisHorizontalIcon class="size-5" />
              </template>
            </Button>
          </template>
        </PageSection>

        <div class="border-b border-neutral-default_solid" />

        <PageSection title="Notifications">
          <template #subtitle>
            <span class="text-body-xs text-neutral-muted">Manage email and push notification preferences</span>
          </template>
        </PageSection>
      </div>
    `,
  }),
};
