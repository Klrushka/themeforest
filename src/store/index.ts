import { configureStore } from '@reduxjs/toolkit';

import { navbarExpandMenuReducer } from '../slices/navbarExpandMenu';

export const store = configureStore({
  reducer: {
    navbarExpandMenu: navbarExpandMenuReducer
  }
});
