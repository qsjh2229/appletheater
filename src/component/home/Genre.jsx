import { AiFillHeart } from "react-icons/ai";
import React, { useState } from "react";
import styles from "./Genre.module.css";

const GenreTab = ({ activeTab, handleTabClick, label }) => (
  <button
    className={activeTab === label ? `${styles.tanBtn} ${styles.active}` : styles.tanBtn}
    onClick={() => handleTabClick(label)}
  >
    {label}
  </button>
);

const MovieList = ({ movies, heartClickHandler, newheart }) => (
  <div className={styles.conLists}>
    {movies.map((i, idx) => (
      <div className={styles.genContent} key={i.id}>
        <div className={styles.box}>
          <img className={styles.imgbox} src={`https://image.tmdb.org/t/p/w500/${i.backdrop_path}`} alt={i.title} />
          <div className={styles.gTxtWrap}>
            <span>제목: {i.title}</span>
            <span>평점: {i.vote_average}</span>
            <span>설명: {i.overview}</span>
          </div>
        </div>
        <div className={styles.resBtn}>
          <button
            className={styles.hBtn}
            onClick={() => heartClickHandler(idx)}
            style={{ color: newheart[idx] ? "red" : "black" }}
          >
            <AiFillHeart className={styles.heart} />
          </button>
          <button className={styles.rBtn}>예매하기</button>
        </div>
      </div>
    ))}
  </div>
);

const Genre = (props) => {
  const [activeTab, setActiveTab] = useState("액션");
  const [newheart, setNewHeart] = useState(Array(props.appMovie.length).fill(true));

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredGenres = {
   액션: props.appMovie.filter((i) => i.genre_ids.includes(28)).slice(0, 3),
    스릴러: props.appMovie.filter((i) => i.genre_ids.includes(53)).slice(0, 3),
    애니메이션: props.appMovie.filter((i) => i.genre_ids.includes(14)).slice(0, 3),
    추천영화: props.appMovie.slice(0, 3),
  };

  const heartClickHandler = (idx) => {
    const newHeartColors = [...newheart];
    newHeartColors[idx] = !newHeartColors[idx];
    setNewHeart(newHeartColors);
  };

  return (
    <div className={styles.genreWrap}>
      <h2>장르별 TOP3</h2>
      <div className={styles.btnWrap}>
        {Object.keys(filteredGenres).map((genre) => (
          <GenreTab
            key={genre}
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            label={genre}
          />
        ))}
      </div>

      {Object.keys(filteredGenres).map((genre) => (
        activeTab === genre && (
          <MovieList
            key={genre}
            movies={filteredGenres[genre]}
            heartClickHandler={heartClickHandler}
            newheart={newheart}
          />
        )
      ))}
    </div>
  );
};

export default Genre;
