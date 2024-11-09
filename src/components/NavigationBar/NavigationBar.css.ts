import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  alignItems: 'center',
});

export const item = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '5px',
  cursor: 'pointer',
});

export const active = style({});

export const title = style({});
