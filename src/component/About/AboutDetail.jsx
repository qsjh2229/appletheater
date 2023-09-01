import React from 'react';
import DetailInfo from './DetailInfo';
import AboutRev from './AboutRev';
import styles from "./AboutDetail.module.scss"
const AboutDetail = ({movie}) => {
   return (
      
      <section className={styles.aboutTab}>
         <ul>
         <li className={`${styles.abTabbtn} ${styles.active}`}>상세보기</li>
            <li className={styles.abTabbtn}>관람평</li>
        </ul>
        <div>
        <DetailInfo movie={movie} />
         <AboutRev></AboutRev>
        </div>
         
      </section>
   );
};

export default AboutDetail;