import { ComponentPropsWithoutRef } from 'react';
import { button, ButtonVariantProps } from './Button.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ children }: ButtonProps & ButtonVariantProps) => {
  return <button className={button()}>{children}</button>;
};

export default Button;
