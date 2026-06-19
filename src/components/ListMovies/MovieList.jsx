import './movieList.css';
import MovieCard from '../movieCard/MovieCard';

const MovieList = ({ movies }) => {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        No movies match your filters.
      </div>
    );
  }

  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;