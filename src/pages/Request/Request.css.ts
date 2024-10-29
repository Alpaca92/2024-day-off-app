import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '80px auto 0',
  textAlign: 'center',
  width: '80%',
  height: '100%',
});

export const title = style({
  fontSize: vars.fontSizes.large,
});

export const myVacationInfoBox = style({
  width: '100%',
  borderRadius: vars.borderRadius.default,
  border: `1px solid ${vars.colors.border.default}`,
  padding: vars.spaces.medium,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
});
