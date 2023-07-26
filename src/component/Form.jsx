import React, { useState } from "react";

const Form = (props) => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState("");
  const reset = () => {
    setMovieTitle("");
    setMovieYear("");
  };
  const validateForm = () => {
    resetErrors()
    let valedate = true;
    if (!movieTitle) {
      valedate = false;
      setTitleError("노타이틀");
    }
    if (!movieYear) {
      valedate = false;
      setYearError("노 이어");
    }
    return valedate;
  };
const resetErrors=()=>{
  setTitleError('')
  setYearError('')
}

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      props.addMovie({
        title: movieTitle,
        year: movieYear,
        id: Math.floor(Math.random() * 100 + 1),
      });
      resetErrors()
      reset();
    }
    
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="영화제목"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />{" "}
      <br />
      <div className="error">{titleError}</div>
      <input
        type="text"
        placeholder="상영 연도"
        value={movieYear}
        onChange={(e) => setMovieYear(e.target.value)}
      />{" "}
      <br />
      <div className="error">{yearError}</div>
      <button type="sumit"> 보고싶은 영화 추가 </button>
    </form>
  );
};

export default Form;
