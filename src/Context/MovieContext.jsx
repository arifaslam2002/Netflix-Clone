import { createContext, useContext, useState } from "react";

const MovieContext = createContext();
export const MovieProvider = ({children}) =>{
const [movies,setMovies] = useState([]);
const fetchMovies = async(query)=>{
 if(!query)return;
 const res = await fetch(
   `https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false&query=${query}`
 );
 console.log(res);
 const data = await res.json();
 setMovies(data.results||[]);
}
return(
    <MovieContext.Provider value={{movies,fetchMovies}} >
        {children}
    </MovieContext.Provider>
)
}
export const useMovies = ()=> useContext(MovieContext);