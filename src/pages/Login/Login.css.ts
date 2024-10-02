import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: vars.color.background,
});

export const form = style({
  backgroundColor: vars.color.inputBackground,
  padding: vars.space.large,
  borderRadius: vars.borderRadius,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '400px',
});

export const title = style({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: vars.space.medium,
  color: vars.color.text,
  textAlign: 'center',
});

export const inputGroup = style({
  marginBottom: vars.space.medium,
});

export const label = style({
  display: 'block',
  marginBottom: vars.space.small,
  color: vars.color.text,
});

export const input = style({
  width: '100%',
  padding: vars.space.small,
  borderRadius: vars.borderRadius,
  border: `1px solid ${vars.color.inputBorder}`,
  fontSize: '16px',
});

export const button = style({
  width: '100%',
  padding: vars.space.small,
  backgroundColor: vars.color.primary,
  color: vars.color.buttonText,
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
