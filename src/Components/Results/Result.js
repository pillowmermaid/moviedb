import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  addItem,
  removeItem,
} from '../../slices/playlist';

import noPoster from '../../images/noPoster.png';
import './Result.css';

const Result = ({ movie: { Poster, Title, Year, imdbID }, showButton = true }) => {
  const dispatch = useDispatch();
  const isInPlaylist = useSelector(state => !!state.playlist.items[imdbID]);
  const handleClick = () => {
    if (isInPlaylist) {
      dispatch(removeItem(imdbID));
    } else {
      dispatch(addItem({
        imdbID,
        Title,
        Poster,
        Year
      }));
    }
  };
  return (
    <li className="Result">
      {Poster !== "N/A" ? (
        <img src={Poster} alt="" />
      ): (
        <img src={noPoster} alt="" />
      )}
      <div className="Result__resultDetails">
        <h2>{Title}</h2>
        <h3>{Year}</h3>
        { showButton && <button onClick={handleClick} className="SecondaryButton"> { isInPlaylist ? 'Remove from Playlist' : 'Add to playlist' }</button> }
      </div>
    </li>
  );
};

export default Result;