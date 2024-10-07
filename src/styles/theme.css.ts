import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#1877f2',
    secondary: '#42b72a',
    background: '#f0f2f5',
    text: '#1c1e21',
    inputBackground: '#ffffff',
    inputBorder: '#dddfe2',
    buttonText: '#ffffff',
    border: '#e4e6eb',
  },
  space: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  fontSize: {
    small: '14px',
    medium: '16px',
    large: '20px',
  },
  borderRadius: '6px',
});
