import { ComponentPropsWithoutRef } from 'react';
import { icon, IconRecipeProps } from './Icon.css';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IconProps extends ComponentPropsWithoutRef<'img'> {}

const Icon = ({ src, alt, size }: IconProps & IconRecipeProps) => {
  return <img src={src} alt={alt} className={icon({ size })} />;
};

export default Icon;
