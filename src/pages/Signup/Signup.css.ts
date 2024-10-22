import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.colors.background.paper,
  padding: vars.spaces.large,
  borderRadius: vars.borderRadius.default,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
});

export const formBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spaces.medium,
});

export const title = style({
  fontSize: vars.fontSizes.large,
  fontWeight: 'bold',
  marginBottom: vars.spaces.medium,
  color: vars.colors.text.primary,
  textAlign: 'center',
});

export const goToLogin = style({
  color: vars.colors.text.primary,
  textAlign: 'start',
  cursor: 'pointer',
  marginTop: vars.spaces.medium,
  transition: 'color 0.3s',
  ':hover': {
    color: vars.colors.text.secondary,
  },
});
