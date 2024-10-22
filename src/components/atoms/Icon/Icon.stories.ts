import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@components/index';
import { Icons } from '@asset/index';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
  argTypes: {
    size: {
      control: {
        type: 'radio',
        labels: { small: 'small', medium: 'medium', large: 'large', full: 'full' },
      },
      description: '아이콘의 크기를 결정',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'string' },
      },
    },
    src: {
      control: {
        type: 'file',
      },
      description: '아이콘 이미지의 경로',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: {
        type: 'text',
      },
      description: '아이콘의 대체 텍스트',
      table: {
        type: { summary: 'string' },
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: Icons.Home,
    alt: 'Home icon',
  },
};
