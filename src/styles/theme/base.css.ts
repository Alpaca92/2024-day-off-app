import { createTheme } from '@vanilla-extract/css';

export const [baseThemeClass, baseVars] = createTheme({
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
