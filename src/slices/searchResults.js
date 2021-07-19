import { createSlice } from '@reduxjs/toolkit';

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState: {
    results: null,
    totalCount: null,
    page: 1,
    query: null
  },
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    updateResults: (state, action) => {
      state.results = state.results.concat(action.payload);
    },
    updateTotalCount: (state, action) => {
      state.totalCount = action.payload;
    },
    resetPage: state => {
      state.page = 1;
    },
    incrementPage: state => {
      state.page += 1;
    },
    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    noMoviesFound: (state, action) => {
      state.noMoviesFound = action.payload;
    }
  }
});

export const { setResults, updateResults, updateTotalCount, resetPage, incrementPage, updateQuery, noMoviesFound } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;