import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '500px',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '14fr 1fr',
});
