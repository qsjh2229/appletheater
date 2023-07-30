import React, { useState } from 'react';
import styles from "./EveentPart.module.css";
import Eventpa from '../Event';

const EveentPart = () => {
  let [eImg,setEImg]=useState(Eventpa)
  return (
   <div className={styles.eWRAPper}>
      <h2>이벤트</h2>
      <div className={styles.eWRAP}>
        
        <div className={styles.eLeftBox}>
          <div className={styles.topBox}>
            <div className={styles.tFbox}> <img src={eImg[0].img} alt='광고' /></div>
            <div className={styles.tSbox}> <img src={eImg[1].img} alt='광고' /></div>
            <div className={styles.tTbox}> <img src={eImg[2].img} alt='광고' /></div>
          </div>
          <div className={styles.btmBox}>
            <div className={styles.bLftBox}><img src={eImg[3].img} alt='광고' /></div>
            <div className={styles.bRBox}><img src={eImg[4].img} alt='광고' /></div>
          </div>
        </div>
        <div className={styles.eRightBox}>
          <div className={styles.eRbox}><img src={eImg[5].img} alt='광고' /></div>
        </div>
        
      </div>
   </div>
  );
};

export default EveentPart;