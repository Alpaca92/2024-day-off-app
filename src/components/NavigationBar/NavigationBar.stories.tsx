import type { Meta, StoryFn } from '@storybook/react';
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

export const Plain: StoryFn = () => {
  return (
    <div style={{ width: '500px' }}>
      <NavigationBar items={NAVIGATION_BAR_ITEMS} />
    </div>
  );
};
