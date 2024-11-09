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
      backgroundColor: '',
      color: '',
      ':hover': {
        backgroundColor: '',
      },
    },
    secondary: {
      backgroundColor: '',
      color: '',
      ':hover': {
        backgroundColor: '',
      },
    },
    danger: {
      backgroundColor: '',
      color: '',
      ':hover': {
        backgroundColor: '',
      },
    },
    white: {
      backgroundColor: '#ffffff',
      color: '',
      border: '1px solid #bababa',
      ':hover': {
        backgroundColor: '#eeeeee',
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
