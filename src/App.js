import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import RecommendationForm from './components/RecommendationForm';
import RecommendationList from './components/RecommendationList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="App">
      <h1>Movie Recommendation App</h1>
      <MovieList movies={movies} />
      <RecommendationForm setRecommendations={setRecommendations} />
      <RecommendationList recommendations={recommendations} />
    </div>
  );
}

export default App;
