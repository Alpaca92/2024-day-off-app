import { createTheme } from '@vanilla-extract/css';

export const [lightThemeClass, lightVars] = createTheme({
  colors: {
    primary: '#1877f2',
    secondary: '#42b72a',
    background: '#f0f2f5',
    text: '#1c1e21',
    inputBackground: '#ffffff',
    inputBorder: '#dddfe2',
    buttonText: '#ffffff',
    border: '#e4e6eb',
  },
});
