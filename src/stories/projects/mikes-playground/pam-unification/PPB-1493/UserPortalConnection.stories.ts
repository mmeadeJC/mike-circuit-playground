import type { Meta, StoryObj } from '@storybook/vue3-vite';
import UserConnectionPage from './UserConnectionPage.vue';

/** PPB-1493 — user connection experience when a resource is tied to a cluster. */
const meta: Meta = {
  title: "Projects/Mike's Playground/PAM - JumpServers/User Portal Connection",
  component: UserConnectionPage,
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj<typeof UserConnectionPage>;

export const Default: Story = { name: 'Resources', args: { scenario: 'list' } };
export const Connect: Story = { name: 'Connect', args: { scenario: 'connect' } };
export const DirectAccess: Story = { name: 'Direct Access', args: { scenario: 'direct' } };
export const NoEligibleJumpServer: Story = { name: 'No eligible Jump Server (error)', args: { scenario: 'error' } };
