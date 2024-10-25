import type { Meta, StoryObj } from '@storybook/react';
import NavigationBar from '@components/NavigationBar/NavigationBar';
import { NAVIGATION_BAR_ITEMS } from 'src/constants';

const meta = {
  title: 'NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    items: NAVIGATION_BAR_ITEMS,
  },
};
