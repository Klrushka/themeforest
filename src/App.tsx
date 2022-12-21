import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { MainPage } from './pages/Main';
import { getTheme } from './theme/themeHandler';
import { Themes } from './theme/themes';

import { store } from './store';
import { GlobalLayout } from './styled';

export const App: React.FC = () => {
  const theme = getTheme(Themes.LIGHT);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalLayout>
          <Routes>
            <Route path={'/'} element={<MainPage />} />
          </Routes>
        </GlobalLayout>
      </ThemeProvider>
    </Provider>
  );
};
