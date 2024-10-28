import { vars } from '@styles/theme.css';
import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const backgroundImageVar = createVar();

const base = style({
  cursor: 'pointer',
  aspectRatio: '1',
});

const variants = {
  size: {
    small: {
      width: vars.spaces.small,
    },
    medium: {
      width: vars.spaces.medium,
    },
    large: {
      width: vars.spaces.large,
    },
    full: {
      width: '100%',
    },
  },
};

export const icon = recipe({
  base,
  variants,
  defaultVariants: {
    size: 'medium',
  },
});

export interface IconRecipeProps {
  size?: keyof typeof variants.size;
}
