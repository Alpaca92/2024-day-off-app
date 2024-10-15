import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'block',
  cursor: 'pointer',
});

export const label = style({});

export const input = style({
  width: '100%',
  padding: vars.spaces.small,
  borderRadius: vars.borderRadius,
  border: `1px solid ${vars.colors.inputBorder}`,
  fontSize: '16px',
});
