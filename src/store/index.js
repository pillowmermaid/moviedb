import { configureStore } from '@reduxjs/toolkit';
import searchResultsReducer from '../slices/searchResults';
import playlistReducer from '../slices/playlist';

export default configureStore({
  reducer: {
    searchResults: searchResultsReducer,
    playlist: playlistReducer
  }
})