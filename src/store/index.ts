import { configureStore } from '@reduxjs/toolkit';

import { navbarExpandMenuReducer } from '../slices/navbarExpandMenu';
import { leftButtonReducer, rightButtonReducer } from '../slices/testimonialBlockButtons';

export const store = configureStore({
  reducer: {
    navbarExpandMenu: navbarExpandMenuReducer,
    testimonialLeftButton: leftButtonReducer,
    testimonialRightButton: rightButtonReducer
  }
});
