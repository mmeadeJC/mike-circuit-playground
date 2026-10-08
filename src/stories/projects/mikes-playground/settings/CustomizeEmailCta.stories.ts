import type { Meta, StoryObj } from '@storybook/vue3-vite';
import CustomizeEmailCta from './CustomizeEmailCtaPage.vue';

const meta: Meta<typeof CustomizeEmailCta> = {
  title: "Projects/Mike's Playground/Settings/Customize Email - CTA Toggle",
  component: CustomizeEmailCta,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof CustomizeEmailCta>;

export const ButtonShown: Story = { args: { initialShowCta: true } };
export const ButtonRemoved: Story = { args: { initialShowCta: false } };
