import React from "react";
import styles from "./MovieTrailer.module.css";
const MovieTrailer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tWrap}>
        <div className={styles.tVbox}>
          <video src={require("../../video/thhmarvels.mp4") } autoPlay muted loop></video>
          <div className={styles.tTxt}>
            <span className={styles.title}> 더 마블스</span>
            <span className={styles.des}>현재 상영중</span>
            {/* <span className={styles.star}>캡틴마블 베이미</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTrailer;
