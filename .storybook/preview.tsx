import React from 'react';
import type { Preview } from '@storybook/react';
import ThemeProvider from '@providers/ThemeProvider';
import { darkTheme, lightTheme } from '@styles/theme.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'theme',
      description: 'change theme',
      defaultValue: false,
      toolbar: {
        title: 'theme',
        icon: 'wrench',
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
      <ThemeProvider>
        <div className={`${theme ? darkTheme : lightTheme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );
  },
];

export default preview;
