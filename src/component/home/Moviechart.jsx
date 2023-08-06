import { AiFillHeart } from "react-icons/ai";
import React, { useState } from 'react';
import styles from './Moviechart.module.css';
import { FaStar } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Moviechart = (props) => {
  // 각 영화에 대한 하트 버튼의 색을 개별적으로 관리하기 위해 배열로 변경
  const [heartColors, setHeartColors] = useState(Array(props.appMovie.length).fill(false));

  // 하트 버튼의 색을 토글하는 함수
  const handleHeartClick = (index) => {
    const newHeartColors = [...heartColors];
    newHeartColors[index] = !newHeartColors[index];
    setHeartColors(newHeartColors);
  };

  return (
    <div className={styles.hSection2}>
      <div className={styles.titleWrap}>
        <h2>영화 차트</h2>
        <NavLink to="/movie">
          <span className={styles.movieLink}>더 많은 영화 보러 가기</span>
        </NavLink>
      </div>
      <div className={styles.chartWrap}>
        {props.appMovie.slice(0, 4).map((item, i) => {
          return (
            <div className={styles.chartcon} key={item.id}>
              <div className={styles.moveieBox}>
                <span className={styles.chartnum}>{i + 1}</span>
                <img
                  className={styles.mimgs}
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
                <div className={styles.mtxt}>
                  <span className={styles.mtit}>{item.title}</span>
                  <span className={styles.mstar}>
                    <FaStar /> {item.vote_average}
                  </span>
                  <span className={styles.mdate}>개봉일: {item.release_date}</span>
                </div>
              </div>
              <div className={styles.btnWrap}>
                <button
                  className={styles.hBtn}
                  onClick={() => handleHeartClick(i)}
                  style={{ color: heartColors[i] ? 'red' : 'black' }}
                >
                  <AiFillHeart className={styles.FaHeart} />
                </button>
                <button className={styles.ticketBtn}>
                  <span>예매하기</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Moviechart;
