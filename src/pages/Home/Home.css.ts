import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const card = style({
  backgroundColor: 'white',
  borderRadius: vars.borderRadius,
  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  padding: vars.space.large,
  maxWidth: '1000px',
  margin: '0 auto',
});

export const title = style({
  fontSize: vars.fontSize.large,
  fontWeight: 'bold',
  color: vars.colors.text,
  marginBottom: vars.space.medium,
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
  padding: vars.space.medium,
  borderBottom: `1px solid ${vars.colors.border}`,
});

export const tableCell = style({
  padding: vars.space.medium,
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
