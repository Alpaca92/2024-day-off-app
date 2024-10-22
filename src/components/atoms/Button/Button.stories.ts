import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/index';

const meta = {
  title: 'Atoms/Button',
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
        labels: { primary: 'primary', secondary: 'secondary' },
      },
      description: '버튼의 색상을 결정',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        labels: { small: 'small', medium: 'medium', large: 'large' },
      },
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
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};
