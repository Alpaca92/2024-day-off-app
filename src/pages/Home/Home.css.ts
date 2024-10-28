import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const card = style({
  backgroundColor: 'white',
  borderRadius: vars.borderRadius,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  padding: vars.spaces.large,
  maxWidth: '1000px',
  margin: '0 auto',
});

export const title = style({
  fontSize: vars.fontSizes.large,
  fontWeight: 'bold',
  color: vars.colors.text,
  marginBottom: vars.spaces.medium,
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const tableHeader = style({
  backgroundColor: vars.colors.background,
  color: vars.colors.text,
  fontWeight: 'bold',
  textAlign: 'left',
  padding: vars.spaces.medium,
  borderBottom: `1px solid ${vars.colors.border}`,
});

export const tableCell = style({
  padding: vars.spaces.medium,
  borderBottom: `1px solid ${vars.colors.border}`,
});

export const statusCell = style({
  fontWeight: 'bold',
});

export const approvedStatus = style({
  color: vars.colors.secondary,
});

export const pendingStatus = style({
  color: vars.colors.primary,
});

export const rejectedStatus = style({
  color: 'red',
});
