import React from 'react';
import type { Preview } from '@storybook/react';
import { darkTheme, lightTheme } from '@styles/theme.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'theme',
      description: 'change theme',
      defaultValue: false,
      toolbar: {
        title: 'theme',
        icon: 'sync', // NOTE https://storybook.js.org/docs/faq#what-icons-are-available-for-my-toolbar-or-my-addon
        items: [
          { title: 'dark', value: true, right: 'dark mode' },
          { title: 'light', value: false, right: 'light mode' },
        ],
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story, context) => {
    const { theme } = context.globals;

    return (
      <div className={`${theme ? darkTheme : lightTheme}`}>
        <Story />
      </div>
    );
  },
];

export default preview;
