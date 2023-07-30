import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './About.module.scss';

const About = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR`
      )
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
        console.log(res);
      });
  }, [id]);

  const movieDetail = loading ? (
    <div className={styles.loading}>로딩중...</div>
  ) : (
    <div className={styles.user}>
      <div className={styles.box}>  <img className={styles.img}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              /> </div>
      <div className={styles.name}>이름: {movie.title}</div>
      <div className={styles.overview}>개요: {movie.overview}</div>
      <div className={styles.releaseDate}>개봉일: {movie.release_date}</div>
      {/* Display other movie details based on the API response */}
    </div>
  );

  return (
    <div>
      <h2 className={styles.h2}>Movie Info</h2>
      {movieDetail}
    </div>
  );
};

export default About;