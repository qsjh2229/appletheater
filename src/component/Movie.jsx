import React from 'react';

const Movie = (props) => {
  
    return (
        <div className='movie'>
            <div className="movie-title">{props.movies.title}
            <span className="movie-year">{props.movies.year}</span>
            
            </div>
            <button onClick={()=>{ props.removeMovie(props.movies.id)}}> 삭🤟🏿제</button>
        </div>
    );
};

export default Movie;