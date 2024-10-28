import { ComponentPropsWithoutRef } from 'react';
import { icon, IconRecipeProps } from './Icon.css';
import icons from '@asset/images/icons.svg';

export type IconType = 'home' | 'management' | 'profile' | 'request' | 'setting';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  type: IconType;
}

const Icon = ({ type, size }: IconProps & IconRecipeProps) => {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={icon({ size })}>
      <use href={`${icons}#${type}`} />
    </svg>
  );
};

export default Icon;
