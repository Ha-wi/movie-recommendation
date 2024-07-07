import React from 'react';
import Movie from './Movie';
import './RecommendationList.css';

const RecommendationList = ({ recommendations }) => {
  return (
    <div className="recommendation-list">
      <h2>Recommended Movies</h2>
      <ul>
        {recommendations.map(movie => (
          <li key={movie.id}>
            <Movie movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
