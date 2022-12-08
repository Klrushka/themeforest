import { MouseEventHandler, RefObject } from 'react';

import { isDisabledLeftButton, isDisabledRightButton } from '../slices/testimonialBlockButtons';

// TODO remove any and logs
export const scrollLeft = (ref: RefObject<HTMLDivElement>, dispatch: any): MouseEventHandler<HTMLButtonElement> => {
  return () => {
    ref.current?.scrollBy(-353, 0);
    console.log('clientWidth', ref.current?.clientWidth);
    console.log('left', ref.current?.scrollLeft);
    dispatch(isDisabledLeftButton(ref));
    dispatch(isDisabledRightButton(ref));
  };
}
;
export const scrollRight = (ref: RefObject<HTMLDivElement>, dispatch: any): MouseEventHandler<HTMLButtonElement> => {
  return () => {
    ref.current?.scrollBy(353, 0);
    console.log('right', ref.current?.offsetWidth);
    console.log('left', ref.current?.scrollLeft);
    dispatch(isDisabledLeftButton(ref));
    dispatch(isDisabledRightButton(ref));
  };
};
