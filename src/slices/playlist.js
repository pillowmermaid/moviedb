import { createSlice } from '@reduxjs/toolkit';

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    items: {}
  },
  reducers: {
    addItem: (state, action) => {
      const { imdbID, ...rest } = action.payload;
      state.items[imdbID] = { ...rest };
    },
    removeItem: (state, action) => {
      delete state.items[action.payload];
    },
  }
});

export const { addItem, removeItem } = playlistSlice.actions;
export default playlistSlice.reducer;