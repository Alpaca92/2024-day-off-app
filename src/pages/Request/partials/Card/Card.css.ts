import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const status = style({
  backgroundColor: vars.colors.success.main,
  padding: `${vars.spaces.small} ${vars.spaces.medium}`,
  borderRadius: vars.borderRadius.default,
  color: vars.colors.primary.contrastText,
});
