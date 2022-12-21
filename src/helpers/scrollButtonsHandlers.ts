import { MouseEventHandler, RefObject } from 'react';

import { isDisabledBlogLeftButton, isDisabledBlogRightButton } from '../slices/blogBlockButtons';
import { testimonialsLeftButton, testimonialsRightButton } from '../slices/testimonialBlockButtons';

// TODO remove any and logs ref.....
export const changeTestimonialsRight = (dispatch: any): MouseEventHandler<HTMLButtonElement> => {
  return () => {
    dispatch(testimonialsRightButton());
  };
};

// TODO remove any and logs
export const changeTestimonialsLeft = (dispatch: any): MouseEventHandler<HTMLButtonElement> => {
  return () => {
    dispatch(testimonialsLeftButton());
  };
};

export const scrollRightBlog = (ref: RefObject<HTMLDivElement>, dispatch: any): MouseEventHandler<HTMLButtonElement> => {
  return () => {
    if (ref.current !== null) {
      // ref.current.scrollBy(353, 0);
      ref.current.scrollLeft += 353;
      const { scrollLeft, offsetWidth } = ref.current;
      console.log('clientWidth', ref.current?.clientWidth);
      console.log('scrollLeft', ref.current?.scrollLeft);
      console.log('offsetWidth', offsetWidth);
      dispatch(isDisabledBlogLeftButton({ scrollLeft, offsetWidth }));
      dispatch(isDisabledBlogRightButton({ scrollLeft, offsetWidth }));
    }
  };
};
export const scrollLeftBlog = (ref: RefObject<HTMLDivElement>, dispatch: any): MouseEventHandler<HTMLButtonElement> => {
  return () => {
    if (ref.current !== null) {
      // ref.current.scrollBy(353, 0);
      ref.current.scrollLeft += 353;
      const { scrollLeft, offsetWidth } = ref.current;
      console.log('clientWidth', ref.current?.clientWidth);
      console.log('scrollLeft', ref.current?.scrollLeft);
      console.log('offsetWidth', offsetWidth);
      dispatch(isDisabledBlogLeftButton({ scrollLeft, offsetWidth }));
      dispatch(isDisabledBlogRightButton({ scrollLeft, offsetWidth }));
    }
  };
};
