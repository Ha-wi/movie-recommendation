import React, { useState } from 'react';
import axios from 'axios';
import './RecommendationForm.css';

const RecommendationForm = ({ setRecommendations }) => {
  const [preferences, setPreferences] = useState({ genre: '', min_rating: 0 });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPreferences({ ...preferences, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/recommend', preferences)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error('Error fetching recommendations:', error));
  };

  return (
    <div>
      <h2>Get Recommendations</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Genre:
          <input type="text" name="genre" value={preferences.genre} onChange={handleInputChange} />
        </label>
        <label>
          Minimum Rating:
          <input type="number" name="min_rating" value={preferences.min_rating} onChange={handleInputChange} />
        </label>
        <button type="submit">Get Recommendations</button>
      </form>
    </div>
  );
};

export default RecommendationForm;
