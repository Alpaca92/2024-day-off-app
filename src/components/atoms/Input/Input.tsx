import { ComponentPropsWithoutRef, useId } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  options: RegisterOptions;
}

const Input = ({ id, name, options, ...rest }: InputProps) => {
  const inputId = useId();
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={id ?? inputId}></label>
      <input {...rest} id={id ?? inputId} {...register(name, options)} />
    </>
  );
};

export default Input;
