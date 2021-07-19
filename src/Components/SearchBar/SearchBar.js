import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  updateQuery,
  noMoviesFound,
  resetPage,
} from '../../slices/searchResults';

import './SearchBar.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  const savedQuery = useSelector(state => state.searchResults.query);
  const noResults = useSelector(state => state.searchResults.noMoviesFound);
  const [query, setQuery] = useState(savedQuery || '');
  const [emptySearchMessage, toggleEmptySearchMessage] = useState(false);
  
  const handleInput = ({ target: { value } }) => {
    setQuery(value);
  };
  
  const handleEnter = ({ keyCode }) => {
    if(keyCode === 13) {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    if (query) {
      dispatch(noMoviesFound(false))
      toggleEmptySearchMessage(false);
      dispatch(resetPage());
      dispatch(updateQuery(query));
    } else {
      dispatch(updateQuery(null));
      toggleEmptySearchMessage(true);
    }
  };
  return (
    <div className="SearchBar centeredBlock">
      <div className="SearchBar__inputWrapper">
        <input type="text" placeholder="Movie title" onChange={handleInput} onKeyUp={handleEnter} value={query} />
        <button className="PrimaryButton" onClick={handleSubmit}>Search</button>
      </div>
      {emptySearchMessage && <div className="SearchBar__emptySearchMessage">Search for something!</div>}
      {noResults && <div className="SearchBar__emptySearchMessage">No Movies found!</div>}
    </div>
  );
};

export default SearchBar;