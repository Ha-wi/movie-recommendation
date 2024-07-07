import React from 'react';
import './Movie.css';

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <h3>{movie.title}</h3>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  );
};

export default Movie;
