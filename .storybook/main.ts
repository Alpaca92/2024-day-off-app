import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';
import tsconfig from '../tsconfig.app.json';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-addon-remix-react-router',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: (config) => {
    const {
      compilerOptions: { paths },
    } = tsconfig;

    const alias = Object.entries(paths).reduce((acc, [key, value]) => {
      const keyWithoutStar = key.replace('/*', '');
      const valueWithoutStar = value[0].replace('/*', '');
      acc[keyWithoutStar] = path.resolve(__dirname, '..', valueWithoutStar);

      return acc;
    }, {});

    return mergeConfig(config, {
      resolve: {
        alias,
      },
    });
  },
};
export default config;
