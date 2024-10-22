import { ComponentPropsWithoutRef } from 'react';
import { button } from './Button.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: string;
}

const Button = ({ children }: ButtonProps) => {
  return <button className={button()}>{children}</button>;
};

export default Button;
