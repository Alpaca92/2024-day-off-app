import { ComponentPropsWithoutRef } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: string;
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
