import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderTop: `1px solid ${vars.colors.border.default}`,
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '5px',
  cursor: 'pointer',
});

export const active = style({
  color: vars.colors.warning.main,
});

export const title = style({
  fontSize: vars.fontSizes.small,
});
