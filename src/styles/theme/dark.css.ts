import { createTheme } from '@vanilla-extract/css';
import { lightVars } from '@styles/theme/light.css';

export const [darkTheme, darkVars] = createTheme(lightVars, {
  colors: {
    primary: '#4267B2',
    secondary: '#30A020',
    background: '#18191A',
    text: '#E4E6EB',
    inputBackground: '#3A3B3C',
    inputBorder: '#4E4F50',
    buttonText: '#FFFFFF',
    border: '#2F3031',
  },
});
