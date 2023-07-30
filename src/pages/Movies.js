import React, { useState } from "react";
import Movie from "../component/Movie";
import Form from "../component/Form";
import Styles from './Movies.module.css'

const Movies = () => {
  const [movies, setMovies] = useState([
   
  ]);
  const removeMovie = (id) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
    console.log(id);
  };
  const randerMovies =movies.length ? movies.map((movies) => {
    return (
      <Movie movies={movies} key={movies.id} removeMovie={removeMovie}></Movie>
    );
  }) : <div className="text">'영화가 없습니다 영화를 추가해 주세요'</div>
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className={Styles.container}>

      <h2>위시리스트</h2>
      <Form addMovie={addMovie} />
      <div className="m-box"> {randerMovies} </div>
    </div>
  );
};

export default Movies;
