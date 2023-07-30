import React from 'react';
import styles from './Appmovie.module.scss'
import { Link } from 'react-router-dom';

const Appmovie = (props) => {
    return (
        <div className={styles.wrat}>
      {props.appMovie.map((amovie) => (
        <div key={amovie.id} className={styles.movie}>
        <Link to={`/about/${amovie.id}`}>
        <img className={styles.img}
                src={`https://image.tmdb.org/t/p/w500/${amovie.poster_path}`}
                alt={amovie.title}
              />
              <h2 className={styles.title}>{amovie.title}</h2>
              <div className={styles.date}> {amovie.release_date}</div>
            
        
        </Link>
        </div>
      ))}
    </div>
    );
};

export default Appmovie;