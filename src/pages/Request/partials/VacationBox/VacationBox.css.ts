import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const title = style({
  color: vars.colors.text.primary,
  fontWeight: 'bold',
  marginBottom: vars.spaces.small,
});

export const value = style({
  color: vars.colors.text.secondary,
});
