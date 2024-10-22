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
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: vars.spaces.medium,
  color: vars.colors.text.primary,
  textAlign: 'center',
});

export const goToRegister = style({
  color: vars.colors.text.primary,
  textAlign: 'end',
  cursor: 'pointer',
  marginTop: vars.spaces.medium,
  transition: 'color 0.3s',
  ':hover': {
    color: vars.colors.text.secondary,
  },
});

export const button = style({
  width: '100%',
  padding: vars.spaces.small,
  backgroundColor: vars.colors.primary,
  color: vars.colors.buttonText,
  border: 'none',
  borderRadius: vars.borderRadius,
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.3s',
  ':hover': {
    backgroundColor: '#166fe5',
  },
});
