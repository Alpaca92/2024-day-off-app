import { ComponentPropsWithoutRef } from 'react';
import { backgroundImageVar, icon, IconRecipeProps } from './Icon.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IconProps extends ComponentPropsWithoutRef<'img'> {}

const Icon = ({ src, alt, size }: IconProps & IconRecipeProps) => {
  console.log(src);

  return (
    <img
      alt={alt}
      style={assignInlineVars({
        [backgroundImageVar]: `url(${src})`,
      })}
      className={icon({ size })}
    />
  );
};

export default Icon;
