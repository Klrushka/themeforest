import { createSlice } from '@reduxjs/toolkit';

import { testimonialsCardsInfo } from '../mock/data/testimonialsBlock/data';
// !!!!!!!!!!!!!!!!!!!
// TODO REFACTOR
export const testimonialsBlockState = createSlice({
  name: 'testimonialsBlockState',
  initialState: {
    value: testimonialsCardsInfo.slice(0, 3),
    isActiveLeft: false,
    isActiveRight: true,
    iterator: 3,
    next: 3
  },
  reducers: {
    testimonialsRightButton: (state) => {
      const cardsLength = testimonialsCardsInfo.length;
      state.iterator = Math.abs(state.iterator);
      state.next = 3;
      state.value = testimonialsCardsInfo.slice(state.iterator, state.iterator + state.next);
      state.iterator += state.next;
      if (state.iterator >= cardsLength) {
        state.next = state.iterator - cardsLength;
        state.iterator = 0;
        state.value = [...state.value, ...(testimonialsCardsInfo.slice(state.iterator, state.iterator + state.next))];
      }
    },
    testimonialsLeftButton: (state) => {
      const cardsLength = testimonialsCardsInfo.length;
      state.next = 3;
      state.value = testimonialsCardsInfo.slice(state.iterator, state.iterator + state.next);
      if (state.iterator === -state.next) state.value = testimonialsCardsInfo.slice(-state.next);
      state.iterator -= state.next;
      if (state.iterator <= -cardsLength) {
        state.iterator = 3;
        state.value = [...state.value, ...(testimonialsCardsInfo.slice(state.iterator, state.iterator + state.next))];
      }
    }
  }
});

export const testimonialsReducer = testimonialsBlockState.reducer;
export const { testimonialsRightButton, testimonialsLeftButton } = testimonialsBlockState.actions;
