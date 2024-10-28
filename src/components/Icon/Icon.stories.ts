import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@components/index';
import type { IconType } from '@components/Icon/Icon';
import type { IconRecipeProps } from './Icon.css';

type SizeKeys = NonNullable<IconRecipeProps['size']>;

const meta = {
  title: 'Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['home', 'management', 'profile', 'request', 'setting'] as IconType[],
      description: '아이콘의 종류를 결정',
      table: {
        type: { summary: 'IconType' },
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large', 'full'] as SizeKeys[],
      description: '아이콘의 크기를 결정',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'home',
    size: 'medium',
  },
};
