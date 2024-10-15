import type { Meta, StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';
import Input from '@components/atoms/Input/Input';
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

export const Plain: StoryFn = () => {
  return <Input name="test" />;
};

export const WithLabel: StoryFn = () => {
  return <Input label="테스트 라벨" name="test" />;
};
