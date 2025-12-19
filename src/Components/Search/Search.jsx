import { useEffect, useState } from 'react';
import SearchList from '../SearchList/SearchList';
import './Search.css';
import useDebounce from '../../hooks/useDebounce';
import { useMovies } from '../../Context/MovieContext';
const Search = () => {
  const [query,setQuery] =useState("");
  const debouncedQuery = useDebounce(query);
  const {fetchMovies} = useMovies();
  useEffect(()=>{
    fetchMovies(debouncedQuery)
  },[debouncedQuery]);
  return (
    <div>
    <input type='text' className='Search-box' placeholder='SearchMovie....' onChange={(e)=>setQuery(e.target.value)}></input>
    <SearchList />
    </div>
  )
}

export default Search
