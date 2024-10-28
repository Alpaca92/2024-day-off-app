import { useContext } from 'react';

import { ThemeContext } from '@providers/Theme/ThemeProvider';

const useTheme = () => useContext(ThemeContext);

export default useTheme;
