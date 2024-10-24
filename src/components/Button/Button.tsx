import { ComponentPropsWithoutRef, MouseEvent } from 'react';
import { button, ButtonRecipeProps } from './Button.css';
import clsx from 'clsx';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ variant, fontSize, children, className, onClick, ...rest }: ButtonProps & ButtonRecipeProps) => {
  const _onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick?.(event);
  };

  return (
    <button className={clsx(button({ variant, fontSize }), className)} onClick={_onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
