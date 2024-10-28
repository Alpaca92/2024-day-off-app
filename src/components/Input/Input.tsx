import { ComponentPropsWithoutRef, useId } from 'react';
import { FieldValues, Path, RegisterOptions, useFormContext } from 'react-hook-form';

import * as styles from './Input.css';

interface InputProps<T extends FieldValues> extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  name: Path<T>;
  options?: RegisterOptions;
}

const Input = <T extends FieldValues>({ label, id, name, options, ...rest }: InputProps<T>) => {
  const inputId = useId();
  const { register } = useFormContext();

  return (
    <label htmlFor={id ?? inputId} className={styles.container}>
      {label && <p className={styles.label}>{label}</p>}
      <input {...rest} className={styles.input} id={id ?? inputId} {...register(name, options)} />
    </label>
  );
};

export default Input;
