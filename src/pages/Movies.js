import React, { useState } from "react";
import Movie from "../component/Movie";
import Form from "../component/Form";

const Movies = () => {
  const [movies, setMovies] = useState([
    /*   { title: "밀수", year: "2023" },
          { title: "바비", year: "2023" },
          { title: "공조2", year: "2022" },
          { title: "인어공주", year: "2022" },
          { title: "백설공주", year: "2024" }, */
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
    <>
      <h1>movielist</h1>
      <Form addMovie={addMovie} />
      <div className="m-box"> {randerMovies} </div>
    </>
  );
};

export default Movies;
