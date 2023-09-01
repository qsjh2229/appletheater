import React from "react";
import { Link } from "react-router-dom";
import styles from "./Mliset.module.scss";
import { FaStar } from "react-icons/fa";

const Mliset = (props) => {
  return (
   <div>
      <div className={styles.wrap}>
        <h2>전체영화</h2>
        <div className={styles.wrat}>
          {props.movieList.map((item,i) => (
            <div className={styles.chartcon}>
              <div className={styles.moveieBox} key={i.id}>
                <span className={styles.chartnum}>{i + 1}</span>
                <img
                  className={styles.mimgs}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={i.title}
                />
                <div className={styles.mtxt}>
                  <span className={styles.mtit}>{item.title}</span>
                  <span className={styles.mstar}>
                    <FaStar className={styles.star} /> {item.vote_average}
                  </span>
                  <span className={styles.mdate}> 개봉일: {item.release_date}</span>
                </div>
              </div>
              <div className={styles.btnWrap}>
              <Link to={`/about/${item.id}`}>  <button className={styles.hBtn}><span>자세히</span></button></Link>
                <button className={styles.ticketBtn}>
                  <span>예매하기</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className={styles.banner}>
      <img src={require('../../image/Hyundaicard.png')} alt="" />
    </div>
   </div>
  );
};

export default Mliset;
