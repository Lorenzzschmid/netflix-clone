import axios from "axios"; 

/**base url to make requests to the movie database */
//the create-method comes from axios - you pass it a base url - its appending to the base url and its simpler, when you do a lot of requests. 
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
}); 

export default instance; 