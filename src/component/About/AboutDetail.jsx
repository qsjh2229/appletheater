/* import React, { useState } from 'react';
import DetailInfo from './DetailInfo';
import AboutRev from './AboutRev';
import styles from "./AboutDetail.module.scss"
const AboutDetail = ({movie}) => {
   let [tab,setTab]=useState(0)
   return (
      
      <section className={styles.aboutTab}>
         <ul>
         <li className={`${styles.abTabbtn} ${styles.active}`} onClick={()=>{ setTab(0) }} eventKey="link0">상세보기</li>
            <li className={styles.abTabbtn} onClick={()=>{setTab(1)}  }eventKey="link1">관람평</li>
        </ul>
        <div>
        <DetailInfo movie={movie} tab={0} />
         <AboutRev  tab={1}></AboutRev>
        </div>
         
      </section>
   );
};

export default AboutDetail; */
import React, { useState } from 'react';
import DetailInfo from './DetailInfo';
import AboutRev from './AboutRev';
import styles from "./AboutDetail.module.scss"

const AboutDetail = ({ movie }) => {
   const [tab, setTab] = useState(0);

   return (
      <section className={styles.aboutTab}>
         <ul>
            <li
               className={`${styles.abTabbtn} ${tab === 0 ? styles.active : ''}`}
               onClick={() => { setTab(0) }}
               eventKey="link0"
            >
               상세보기
            </li>
            <li
               className={`${styles.abTabbtn} ${tab === 1 ? styles.active : ''}`}
               onClick={() => { setTab(1) }}
               eventKey="link1"
            >
               관람평
            </li>
         </ul>
         <div>
            {tab === 0 ? (
               <DetailInfo movie={movie} />
            ) : (
               <AboutRev tab={tab} />
            )}
         </div>
      </section>
   );
};

export default AboutDetail;
