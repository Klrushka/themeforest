import { createSlice } from '@reduxjs/toolkit';

export const navbarExpandMenuSlice = createSlice({
  name: 'navbarExpamdMenu',
  initialState: {
    value: false
  },
  reducers: {
    navExpMenuVisibilityToOpposite: (state: { value: boolean }) => {
      state.value = !state.value;
    }
  }
});

export const navbarExpandMenuReducer = navbarExpandMenuSlice.reducer;
export const { navExpMenuVisibilityToOpposite } = navbarExpandMenuSlice.actions;
