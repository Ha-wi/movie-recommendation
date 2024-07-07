import React from 'react';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>All Movies</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} - {movie.genre} - {movie.year} - {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
