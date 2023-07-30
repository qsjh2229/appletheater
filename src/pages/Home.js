import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import Appmovie from "../component/home/Appmovie";
import Moviechart from "../component/home/Moviechart";
import Mainslide from "../component/Mainslide";
import MovieTrailer from "../component/home/MovieTrailer";
import Sooncontent from "../component/home/Sooncontent";
import EveentPart from "../component/home/EveentPart"
import Genre from "../component/home/Genre"

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [appMovie, setAppMovie] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=4ed08358326bfbef17487ba953a86239&language=ko-KR&region=KR"
      );
      setAppMovie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Mainslide />
      <Moviechart appMovie={appMovie} />   
      <Genre appMovie={appMovie} ></Genre>  
      <MovieTrailer />
      <Sooncontent/>
      <EveentPart/>
      {/*   <div>
        {isLoading ? (
          <div>
            <span className="load"> 'loading'</span>
          </div>
        ) : (
          <Appmovie appMovie={appMovie}/>
        )}
      </div> */}
    </div>
  );
};

export default Home;
