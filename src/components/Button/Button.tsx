import { ComponentPropsWithoutRef } from 'react';
import { button, ButtonRecipeProps } from './Button.css';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ children, className, variant, fontSize, ...rest }: ButtonProps & ButtonRecipeProps) => {
  return (
    <button className={clsx(button({ variant, fontSize }), className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
