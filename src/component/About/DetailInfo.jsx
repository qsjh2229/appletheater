import React from "react"
import styles from "./DetailInfo.module.scss"
const DetailInfo = ({ movie }) => {
   if (!movie) {
      return <div>Loading...</div>
   }

   return (
      <div className={styles.infoBox}>
         <div  className={styles.intBox}>
            <span>제목</span>
            <p className={styles.pt}>{movie.title} </p>
         </div>
         <div className={styles.iImgbox}>
            <span>스틸컷</span>
            <img
               src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
               alt=''
            />
         </div>
         <div  className={styles.intBox}> 
            <span>개봉일자</span>
            <p className={styles.pt}> {movie.release_date} </p>
         </div>
      </div>
   )
}

export default DetailInfo
