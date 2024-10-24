import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({});

export const title = style({
  fontSize: vars.fontSizes.large,
  textAlign: 'center',
});

export const formBox = style({
  marginTop: vars.spaces.large,
});

export const buttonBox = style({
  marginTop: vars.spaces.medium,
});

export const button = style({
  padding: vars.spaces.small,
});
