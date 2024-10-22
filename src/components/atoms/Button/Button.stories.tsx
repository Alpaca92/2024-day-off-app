import type { Meta, StoryFn } from '@storybook/react';
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
        defaultValue: { summary: '' },
      },
    },
    variant: {
      control: {
        type: 'radio',
        labels: { primary: 'Primary', secondary: 'Secondary' },
      },
      description: '버튼의 색상을 결정',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: {
        type: 'radio',
        labels: { small: 'small', medium: 'medium', large: 'large' },
      },
      description: '버튼의 크기를 결정',
      table: {
        defaultValue: { summary: 'medium' },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

export const Primary: StoryFn = () => {
  return <Button variant="primary">Primary</Button>;
};

export const Secondary: StoryFn = () => {
  return <Button variant="secondary">Secondary</Button>;
};
