import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    background: '#f0f2f5',
    primary: '#1877f2',
    text: '#1c1e21',
    inputBackground: '#ffffff',
    inputBorder: '#dddfe2',
    buttonText: '#ffffff',
  },
  space: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  borderRadius: '6px',
});
