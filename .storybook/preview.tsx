import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, ModalProvider } from '@providers/index';
import '@styles/global.css';
import { withRouter } from 'storybook-addon-remix-react-router';

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
  withRouter,
  (Story, context) => {
    const { theme } = context.globals;

    useEffect(() => {
      document.body.setAttribute('data-theme', theme ? 'dark' : 'light');
    }, [theme]);

    return (
      <ThemeProvider>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </ThemeProvider>
    );
  },
];

export default preview;
