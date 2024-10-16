import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  backgroundColor: vars.colors.inputBackground,
  padding: vars.spaces.large,
  borderRadius: vars.borderRadius,
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
  color: vars.colors.text,
  textAlign: 'center',
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

export const goToRegister = style({
  color: vars.colors.text,
  textAlign: 'end',
  cursor: 'pointer',
  marginTop: vars.spaces.medium,
  transition: 'color 0.3s',
  ':hover': {
    color: vars.colors.primary,
  },
});
