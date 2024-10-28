import { ComponentPropsWithoutRef, MouseEvent } from 'react';

import clsx from 'clsx';

import { button, ButtonRecipeProps } from './Button.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

const Button = ({ variant, fontSize, children, className, onClick, ...rest }: ButtonProps & ButtonRecipeProps) => {
  const _onClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
  };

  return (
    <button className={clsx(button({ variant, fontSize }), className)} onClick={_onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
