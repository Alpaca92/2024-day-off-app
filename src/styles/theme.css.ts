import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

const base = createGlobalTheme(':root', {
  spaces: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
  borderRadius: '6px',
});

const colors = createThemeContract({
  primary: null,
  secondary: null,
  background: null,
  text: null,
  inputBackground: null,
  inputBorder: null,
  buttonText: null,
  border: null,
});

export const lightTheme = createTheme(colors, {
  primary: '#1877f2',
  secondary: '#42b72a',
  background: '#f0f2f5',
  text: '#1c1e21',
  inputBackground: '#ffffff',
  inputBorder: '#dddfe2',
  buttonText: '#ffffff',
  border: '#e4e6eb',
});

export const darkTheme = createTheme(colors, {
  primary: '#4267B2',
  secondary: '#30A020',
  background: '#18191A',
  text: '#E4E6EB',
  inputBackground: '#3A3B3C',
  inputBorder: '#4E4F50',
  buttonText: '#FFFFFF',
  border: '#2F3031',
});

export const vars = { ...base, colors };
