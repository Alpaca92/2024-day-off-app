import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const base = style({
  padding: `${vars.spaces.medium} ${vars.spaces.large}`,
  cursor: 'pointer',
  border: 'none',
  textAlign: 'center',
  borderRadius: vars.borderRadius.default,
  width: '100%',
});

const variants = {
  variant: {
    primary: {
      backgroundColor: vars.colors.button.primary.background,
      color: vars.colors.button.primary.text,
      ':hover': {
        backgroundColor: vars.colors.button.primary.hover,
      },
    },
    secondary: {
      backgroundColor: vars.colors.button.secondary.background,
      color: vars.colors.button.secondary.text,
      ':hover': {
        backgroundColor: vars.colors.button.secondary.hover,
      },
    },
    danger: {
      backgroundColor: vars.colors.error.light,
      color: vars.colors.primary.contrastText,
      ':hover': {
        backgroundColor: vars.colors.error.main,
      },
    },
  },
  fontSize: {
    small: { fontSize: vars.fontSizes.small },
    medium: { fontSize: vars.fontSizes.medium },
    large: { fontSize: vars.fontSizes.large },
  },
};

export const button = recipe({
  base,
  variants,
  defaultVariants: {
    variant: 'primary',
    fontSize: 'medium',
  },
});

export interface ButtonRecipeProps {
  variant?: keyof typeof variants.variant;
  fontSize?: keyof typeof variants.fontSize;
}
