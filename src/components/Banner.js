import React, { useEffect, useState } from "react";
import axios from "../axios"; 
import requests from '../request'; 
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        );
        return request;        
    }
    fetchData(); 
  }, []); //we want to run it once, when the Banner-component loads - so we leave the array empty.

  return <header className="banner"
            style={
                {
                backgroundSize: "cover",
                backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original${movie?.backdrop_path}"
                )`,
                backgroundPosition: "center center",
                
                }}  
                >
            <div className="banner__contents">
                <h1>
                    {/* in case of an inconsistent API if this doesn't exist get the other one - ?. (optional-chaning) takes care of errors */}
                    {movie?.title || movie?.name || movie?.original_name} 
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{movie?.overview}</h1>
            </div>
         </header>;
}

export default Banner;