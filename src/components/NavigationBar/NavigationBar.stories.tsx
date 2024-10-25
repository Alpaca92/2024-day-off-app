import type { Meta, StoryFn } from '@storybook/react';
import NavigationBar from '@components/NavigationBar/NavigationBar';
import { NAVIGATION_BAR_ITEMS } from 'src/constants';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import { useLocation } from 'react-router';

const meta = {
  title: 'NavigationBar',
  component: NavigationBar,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: '500px', textAlign: 'center' }}>
        <Story />
        <NavigationBar items={NAVIGATION_BAR_ITEMS} />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      routing: {
        path: '/*',
      },
    }),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavigationBar>;

export default meta;

export const Plain: StoryFn = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1];

  return <div style={{ marginBottom: '20px' }}>{pathname || 'home'}</div>;
};
