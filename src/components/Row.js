import React, { useEffect, useState } from "react";
import axios from "../axios"; //alias for the default Export

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
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

        <div className="">
            {/**several row__poster(s) */}
            {movies.map(movie => (
              <img className=""
              src={`${base_url}${movie.poster_path}`} alt={movie.name} />
            ))}
        
        </div>

      {/* container -> posters*/}
    </div>
  );
}

export default Row;
