import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from '../../Axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';

function Banner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`trending/all/week?api_key=${API_KEY}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        const randomMovie = response.data.results[randomIndex];
        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, []);

  return (
    <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }} className="Banner">
      {movie && (
        <div className="content">
          <h1 className="title">{movie.title}</h1>
          <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <h1 className="description">{movie.overview}</h1>
          <div className="fade"></div>
        </div>
      )}
    </div>
  );
}

export default Banner;
