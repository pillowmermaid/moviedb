import {
  setResults,
  updateResults,
  updateTotalCount,
  noMoviesFound
} from '../../slices/searchResults';

export const getMovieSearchResults = async (dispatch, query, page, isNewSearch = true) => {
  const url = `https://www.omdbapi.com/?apikey=ccbfc44a&type=movie&s=${query}&page=${page}`;
  await fetch(url)
  .then(res => res.json())
  .then(
    (response) => {
      const { Response, Search, totalResults } = response;
      if (Response === 'True') {
        if (isNewSearch) {
          dispatch(updateTotalCount(totalResults));
          dispatch(setResults(Search));
        } else {
          dispatch(updateResults(Search));
        } 
      } else {
        dispatch(noMoviesFound(true));
      }
    },
    (error) => {
      console.error(error);
    }
  );
};

const helpers = {
  getMovieSearchResults
};

export default helpers;