import React from 'react';
import Result from './Result';

const Results = ({ results }) => {
  if (!results.length) {
    return(<div>No movies found :(</div>)
  }
  return (
    <ul className="Container">
      { results.map((result, i) => <Result key={`${result.Title}--${i}`} movie={result} />) }
    </ul>
  );
};

export default Results;