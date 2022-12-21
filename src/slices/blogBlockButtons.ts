import { createSlice } from '@reduxjs/toolkit';

export const leftButton = createSlice({
  name: 'leftButton',
  initialState: {
    value: true
  },
  reducers: {
    isDisabledBlogLeftButton: (state, ref: { payload: { scrollLeft: number, offsetWidth: number } }) => {
      const { scrollLeft } = ref.payload;
      if (scrollLeft === 0) {
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
    isDisabledBlogRightButton: (state, ref: { payload: { scrollLeft: number, offsetWidth: number } }) => {
      const { scrollLeft, offsetWidth } = ref.payload;
      if (scrollLeft === offsetWidth) {
        console.log(1);
        state.value = true;
      } else {
        console.log(2);
        state.value = false;
      }
    }
  }
});

export const leftButtonBlogReducer = leftButton.reducer;
export const { isDisabledBlogLeftButton } = leftButton.actions;
export const rightButtonBlogReducer = rightButton.reducer;
export const { isDisabledBlogRightButton } = rightButton.actions;
