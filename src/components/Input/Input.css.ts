import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'block',
  cursor: 'pointer',
});

export const label = style({
  marginBottom: vars.spaces.small,
  fontSize: vars.fontSizes.medium,
  color: vars.colors.text.primary,
  display: 'block',
});

export const input = style({
  width: '100%',
  padding: vars.spaces.small,
  borderRadius: vars.borderRadius.default,
  border: `1px solid ${vars.colors.border.default}`,
  fontSize: vars.fontSizes.medium,
});

export const errorMessage = style({
  fontSize: vars.fontSizes.small,
  color: vars.colors.error.main,
});
