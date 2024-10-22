import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const base = style({
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  border: 'none',
});

export const button = recipe({
  base,
  variants: {
    variant: {
      primary: {
        backgroundColor: vars.colors.primary,
        color: vars.colors.buttonText,
      },
      secondary: {
        backgroundColor: 'gray',
        color: 'black',
      },
      danger: {
        backgroundColor: 'red',
        color: vars.colors.buttonText,
      },
    },
    size: {
      small: { fontSize: vars.fontSizes.small },
      medium: { fontSize: vars.fontSizes.medium },
      large: { fontSize: vars.fontSizes.large },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});
