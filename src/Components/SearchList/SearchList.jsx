import { useMovies } from '../../Context/MovieContext';
import './SearchList.css';

const SearchList = () => {
  const {movies} =useMovies();
  return (
    <div className="search-list-section">
      <div className="image-row">
        {movies.map((movie, index) => (
          <div className="image-card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
