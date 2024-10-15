import { ComponentPropsWithoutRef, useId } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  name: string;
  options?: RegisterOptions;
}

const Input = ({ label, id, name, options, ...rest }: InputProps) => {
  const inputId = useId();
  const { register } = useFormContext();

  return (
    <label htmlFor={id ?? inputId}>
      <p>{label}</p>
      <input {...rest} id={id ?? inputId} {...register(name, options)} />
    </label>
  );
};

export default Input;
