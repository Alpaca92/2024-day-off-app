import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@components/index';
import { Icons } from '@asset/index';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: Icons.Home,
    alt: 'Home icon',
  },
};
