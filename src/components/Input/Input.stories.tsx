import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from '@components/Input/Input';
import { FormProvider, useForm } from 'react-hook-form';

const meta = {
  title: 'Form/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
  decorators: [
    (Story) => {
      const formInstance = useForm();

      return (
        <FormProvider {...formInstance}>
          <Story />
        </FormProvider>
      );
    },
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: {
    name: 'test',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'test label',
    name: 'test with label',
  },
};
