import { ComponentPropsWithoutRef } from 'react';
import { button, ButtonRecipeProps } from './Button.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ children, variant, fontSize }: ButtonProps & ButtonRecipeProps) => {
  return <button className={button({ variant, fontSize })}>{children}</button>;
};

export default Button;
