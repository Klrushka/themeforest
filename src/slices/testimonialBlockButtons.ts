import { RefObject } from 'react';

import { createSlice } from '@reduxjs/toolkit';

export const leftButton = createSlice({
  name: 'leftButton',
  initialState: {
    value: true
  },
  reducers: {
    isDisabledLeftButton: (state, ref: { payload: RefObject<HTMLDivElement> }) => {
      const { current } = ref.payload;
      if (current !== null && current.scrollLeft === 0) {
        state.value = true;
      } else {
        state.value = false;
      }
    }
  }
});

// TODO delete logs
export const rightButton = createSlice({
  name: 'rightButton',
  initialState: {
    value: false
  },
  reducers: {
    isDisabledRightButton: (state, ref: { payload: RefObject<HTMLDivElement> }) => {
      const { current } = ref.payload;
      if (current !== null && current.scrollLeft >= current.clientWidth) {
        console.log(1);
        state.value = true;
      } else {
        state.value = false;
      }
    }
  }
});

export const leftButtonReducer = leftButton.reducer;
export const { isDisabledLeftButton } = leftButton.actions;
export const rightButtonReducer = rightButton.reducer;
export const { isDisabledRightButton } = rightButton.actions;
