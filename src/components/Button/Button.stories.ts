import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/index';
import type { ButtonRecipeProps } from './Button.css';

type variantKeys = NonNullable<ButtonRecipeProps['variant']>;
type sizeKeys = NonNullable<ButtonRecipeProps['fontSize']>;

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'button 내에 들어갈 텍스트',
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    variant: {
      type: 'string',
      control: {
        type: 'radio',
      },
      options: ['primary', 'secondary', 'danger'] as variantKeys[],
      description: '버튼의 색상을 결정',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    fontSize: {
      type: 'string',
      control: {
        type: 'radio',
      },
      options: ['small', 'medium', 'large'] as sizeKeys[],
      description: '버튼의 크기를 결정',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    fontSize: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
    fontSize: 'medium',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger',
    fontSize: 'medium',
  },
};
