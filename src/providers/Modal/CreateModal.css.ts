import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  cursor: 'pointer',
  backgroundColor: vars.colors.background.modal,
});

export const modal = style({
  width: 'min(300px, 80%)',
  backgroundColor: vars.colors.background.default,
  color: vars.colors.text.primary,
  borderRadius: vars.borderRadius.default,
  padding: `${vars.spaces.medium} ${vars.spaces.large}`,
});
