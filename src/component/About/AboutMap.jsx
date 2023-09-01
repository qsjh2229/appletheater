import { AiFillStar } from "react-icons/ai"; 
import React, { useState } from "react";
import styles from "./AboutRev.module.scss";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const AboutMap = (props) => {
   const [down, setDown] = useState(51);
   const [up, setUp] = useState([15]); // 배열로 초기화

   const upHandler = (idx) => {
      // 해당 인덱스에 대한 'up' 상태를 업데이트합니다.
      let copy = [...up];
      copy[idx] = (copy[idx] || 0) + 1; // 기본값 0을 사용하고, 해당 인덱스의 값에 1을 더합니다.
      setUp(copy);
   };

   return (
      <>
         {props.commenttxt.map((item, idx) => (
            <div className={styles.tBox} key={idx}>
               <div className={styles.star}><AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               <AiFillStar />
               </div>
               <div className={styles.desRebox}>
                  <span>{item} </span>
               </div>
               <div className={styles.infRebox}>
                  <div className={styles.idbox}>
                     <span className={styles.date}>20230646</span>{" "}
                     <span className={styles.id}>영화과 ㅇ채욱</span>
                  </div>
                  <div className={styles.reBtn}>
                     <BsFillHandThumbsUpFill
                        className='rePBtn'
                        onClick={upHandler}
                     />
                    <span> {up}</span>
                     <BsFillHandThumbsDownFill
                        className='rePmtn'
                        onClick={downHandler}
                     />
                    <span> {down}</span>
                  </div>
               </div>
            </div>
         ))}
      </>
   );
};

export default AboutMap;
