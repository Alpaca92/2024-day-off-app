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

export const title = style({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: vars.spaces.medium,
  color: vars.colors.text,
  textAlign: 'center',
});

export const inputGroup = style({
  marginBottom: vars.spaces.medium,
});

export const label = style({
  display: 'block',
  marginBottom: vars.spaces.small,
  color: vars.colors.text,
  cursor: 'pointer',
});

export const input = style({
  width: '100%',
  padding: vars.spaces.small,
  borderRadius: vars.borderRadius,
  border: `1px solid ${vars.colors.inputBorder}`,
  fontSize: '16px',
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

export const goToLogin = style({
  color: vars.colors.text,
  textAlign: 'start',
  cursor: 'pointer',
  marginTop: vars.spaces.medium,
  transition: 'color 0.3s',
  ':hover': {
    color: vars.colors.primary,
  },
});
