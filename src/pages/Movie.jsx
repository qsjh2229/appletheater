import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from './Movie.module.scss';
import Mliset from '../component/movie/Mliset';

const Movie = () => {
  const [appMovie, setAppMovie] = useState([]);

  useEffect(() => {
    getMovie();
  }, []);

  const getMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR"
      );
      setAppMovie(response.data.results);
    } catch (error) {
      alert("영화 데이터를 가져오는데 오류가 발생했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      
      <Mliset movieList={appMovie} />
    </div>
  );
};

export default Movie;