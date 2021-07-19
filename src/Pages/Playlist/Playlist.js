import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer';
import Result from '../../Components/Results/Result';

const Playlist = () => {
  const playlist = useSelector(state => state.playlist.items);
  return (
    <div className="PageContainer">
      <div className="centeredBlock">
        <h1>Your playlist</h1>
      </div>
      <div className="Container">
        {Object.keys(playlist).map((item, i) => <Result key={`${playlist[item].Title}--${i}`} movie={{imdbID: item, ...playlist[item]}} />)}
      </div>
      <Footer />
    </div>
  );
};

export default Playlist;