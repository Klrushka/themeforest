import React from 'react';

import { ThemeProvider } from 'styled-components';

import { MainPage } from './pages/Main';
import { getTheme } from './theme/themeHandler';
import { Themes } from './theme/themes';

export const App: React.FC = () => {
  const theme = getTheme(Themes.LIGHT);
  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
};
