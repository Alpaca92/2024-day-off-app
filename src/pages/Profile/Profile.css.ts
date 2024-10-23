import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: vars.spaces.medium,
});

export const profileImage = style({
  width: '120px',
  aspectRatio: '1',
  borderRadius: vars.borderRadius.half,
  objectFit: 'cover',
  cursor: 'pointer',
});

export const info = style({
  textAlign: 'center',
});

export const name = style({
  fontSize: vars.fontSizes.large,
  fontWeight: 'bold',
  color: vars.colors.text.primary,
});

export const email = style({
  fontSize: vars.fontSizes.medium,
  color: vars.colors.text.secondary,
  marginTop: vars.spaces.small,
});
