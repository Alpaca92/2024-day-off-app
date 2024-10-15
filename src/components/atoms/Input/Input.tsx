import { ComponentPropsWithoutRef, useId } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import * as styles from './Input.css';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  name: string;
  options?: RegisterOptions;
}

const Input = ({ label, id, name, options, ...rest }: InputProps) => {
  const inputId = useId();
  const { register } = useFormContext();

  return (
    <label htmlFor={id ?? inputId} className={styles.container}>
      {label ?? <p className={styles.label}>{label}</p>}
      <input {...rest} className={styles.input} id={id ?? inputId} {...register(name, options)} />
    </label>
  );
};

export default Input;
