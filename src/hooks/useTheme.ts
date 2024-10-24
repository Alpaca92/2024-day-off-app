import { ThemeContext } from '@providers/Theme/ThemeProvider';
import { useContext } from 'react';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
