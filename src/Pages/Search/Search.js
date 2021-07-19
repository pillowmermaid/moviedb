import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchBar from '../../Components/SearchBar';
import Results from '../../Components/Results';

import { incrementPage } from '../../slices/searchResults';
import { getMovieSearchResults } from './helpers';


const SearchPage = () => {
  const dispatch = useDispatch();
  const [moreResults, setMoreResults] = useState(false);
  const movieList = useSelector(state => state.searchResults.results);
  const resultCount = useSelector(state => state.searchResults.totalCount);
  const query = useSelector(state => state.searchResults.query);
  const page = useSelector(state => state.searchResults.page);

  useEffect(() => {
    if (query && page === 1) {
      getMovieSearchResults(dispatch, query, page);
    } else if (query && page > 1) {
      getMovieSearchResults(dispatch, query, page, false);
    }
  }, [query, page, dispatch]);

  useEffect(() => {
    if (movieList && movieList.length < resultCount) {
      setMoreResults(true);
    } else {
      setMoreResults(false);
    }
  }, [movieList, resultCount]);

  return (
    <div className="PageContainer">
      <SearchBar />
      { movieList && <Results results={movieList} /> }
      { moreResults && (
        <div className="centeredBlock">
          <button className="PrimaryButton searchMoreBtn" onClick={() => { dispatch(incrementPage())}}>More results</button>
        </div>
      )}
    </div>
  );
};

export default SearchPage;