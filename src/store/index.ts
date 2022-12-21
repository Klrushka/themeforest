import { configureStore } from '@reduxjs/toolkit';

import { leftButtonBlogReducer, rightButtonBlogReducer } from '../slices/blogBlockButtons';
import { navbarExpandMenuReducer } from '../slices/navbarExpandMenu';
import { testimonialsReducer } from '../slices/testimonialBlockButtons';

export const store = configureStore({
  reducer: {
    navbarExpandMenu: navbarExpandMenuReducer,
    testimonials: testimonialsReducer,
    blogLeftButton: leftButtonBlogReducer,
    blogRightButton: rightButtonBlogReducer
  }
});
