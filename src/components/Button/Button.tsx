import { ComponentPropsWithoutRef } from 'react';
import { button, ButtonRecipeProps } from './Button.css';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ children, className, variant, fontSize }: ButtonProps & ButtonRecipeProps) => {
  return <button className={clsx(button({ variant, fontSize }), className)}>{children}</button>;
};

export default Button;
