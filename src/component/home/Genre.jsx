import React, { useState } from "react";
import styles from "./Genre.module.css";

const Genre = (props) => {
  
  return (
    <div className={styles.genreWrap}>
      <h2>장르별 TOP3</h2>
      <div className={styles.btnWrap}>
        <button className={styles.tanBtn}>로맨스</button>
        <button className={styles.tanBtn}>스릴러</button>
        <button className={styles.tanBtn}>애니메이션</button>
        <button className={styles.tanBtn}>추천영화</button>
      </div>

      <div className={styles.conLists}>
     { props.appMovie.map((i)=>{
      return(
        <div className={styles.genContent}>
        <div className={styles.box}>
           
            <img className={styles.imgbox} src={`https://image.tmdb.org/t/p/w500/${i.backdrop_path}`} alt="" />
         
           <div className={styles.gTxtWrap}>
             <span>제목{i.title}</span>
             <span>평점</span>
             <span>설명{i.title}</span>
           </div>
        </div>
        <div className={styles.resBtn}>
           <button className={styles.hBtn}>하트</button>
           <button className={styles.rBtn}>예매하기 </button>
        </div>
       </div>
      )
     }).slice(0,3)}
     
      
        </div>
     
   
       
 
    </div>
  );
};

export default Genre;
