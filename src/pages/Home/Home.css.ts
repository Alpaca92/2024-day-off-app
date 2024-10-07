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
  color: vars.color.text,
  marginBottom: vars.space.medium,
});

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const tableHeader = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontWeight: 'bold',
  textAlign: 'left',
  padding: vars.space.medium,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const tableCell = style({
  padding: vars.space.medium,
  borderBottom: `1px solid ${vars.color.border}`,
});

export const statusCell = style({
  fontWeight: 'bold',
});

export const approvedStatus = style({
  color: vars.color.secondary,
});

export const pendingStatus = style({
  color: vars.color.primary,
});

export const rejectedStatus = style({
  color: 'red',
});
