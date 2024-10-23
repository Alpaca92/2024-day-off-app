import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '500px',
  height: '100vh',
  display: 'grid',
  gridTemplateRows: '14fr 1fr',
  backgroundColor: vars.colors.background.paper,
});

export const main = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});
