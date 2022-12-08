import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { MainPage } from './pages/Main';
import { getTheme } from './theme/themeHandler';
import { Themes } from './theme/themes';

import { store } from './store';

export const App: React.FC = () => {
  const theme = getTheme(Themes.LIGHT);
  return (
    <HashRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <MainPage />
        </ThemeProvider>
      </Provider>
    </HashRouter>
  );
};
