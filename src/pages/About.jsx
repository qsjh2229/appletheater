<<<<<<< HEAD
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import styles from "./About.module.scss"
import { FaStar } from "react-icons/fa"
import AboutDetail from "../component/About/AboutDetail"
=======
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./About.module.scss";
>>>>>>> 7d622e5dfd5b5dfb4a712af4b88eaf0fd12fc3f3

const About = () => {
   const { id } = useParams()
   const [movie, setMovie] = useState(null)

   const [loading, setLoading] = useState(true)

<<<<<<< HEAD
   useEffect(() => {
      axios
         .get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR`
         )
         .then((res) => {
            setMovie(res.data)
            setLoading(false)
            console.log(res)
         })
   }, [id])

   const movieDetail = loading ? (
      <div className={styles.loading}>로딩중...</div>
   ) : (
      <div className={styles.user}>
         <div className={styles.boxWrap}>
            <div className={styles.topBox}>
              <div className={styles.name}> {movie.title}</div>
              <div className={styles.overview}> {movie.overview}</div>
              {/*    <div className={styles.releaseDate}>개봉일: {movie.release_date}</div> */}
              <div className={styles.votebox}>
                 <div className={styles.vote}>
                    <FaStar className={styles.star} />{" "}
                    {Math.floor(movie.vote_average * 10) / 10}
                 </div>
                 <div className={styles.votenum}>
                 {movie.vote_count}
               
                 </div>
              </div>
            </div>
         
         </div>
         <div className={styles.ibox}>
            <img
               className={styles.img}
               src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
               alt={movie.title}
            />
               <div className={styles.bBox}>
              <button>예매하기</button>
              <button>imax</button>
            </div>
         </div>

         {/* Display other movie details based on the API response */}
      </div>
   )

   return (
      <div>
         {/*  <h2 className={styles.h2}>Movie Info</h2> */}
         {movieDetail}
         <AboutDetail movie={movie} />


      </div>
   )
}

export default About
=======
  const movieDetail = loading ? (
    <div className={styles.loading}>로딩중...</div>
  ) : (
    <div className={styles.movieInfo}>
      <div className={styles.box}>
        {" "}
        <img
          className={styles.img}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />{" "}
      </div>
     <div className={styles.textbox}>
        <div className={styles.name}> {movie.title}</div>
        <div className={styles.releaseDate}>개봉일: {movie.release_date}</div>
        <div className={styles.overview}>개요: {movie.overview}</div>
       
        <button>예매하기</button>
     </div>
      {/* Display other movie details based on the API response */}
    </div>
  );

  return (
    <div>
      <h2 className={styles.h2}>상세정보</h2>
      {movieDetail}
    </div>
  );
};

export default About;
>>>>>>> 7d622e5dfd5b5dfb4a712af4b88eaf0fd12fc3f3
