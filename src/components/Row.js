import React, { useEffect, useState } from "react";
import axios from "../axios"; //alias for the default Export
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  //When the Row component loads on the screen, I want to basically make a request to tmdb - I want to pull that information, right when that row loads. And that is going to happen in all Row-components. Passing "movies" - makes it a dependency - depending on movies changes.
  useEffect(() => {
    async function fetchData() {
      //it's using our axios, that I set up earlier - it will use the url and replace the api-key with the one from requests.js
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results); 
      return request;
    }
    fetchData();
  }, [fetchUrl]); //any external information has to be included in the array! Its dependent on that variable. 

  console.log(movies)

  return (
    <div className="row">
      <h2>{title}</h2>

        <div className="row__posters">
            {/**several row__poster(s) */}

            {movies.map(movie => (
              <img
              //The key apart of getting rid of the console error makes the rendering of the row slightly faster. 
              key={movie.id} 
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
            ))}
        
        </div>

      {/* container -> posters*/}
    </div>
  );
}

export default Row;
