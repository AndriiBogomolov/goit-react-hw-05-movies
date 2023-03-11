import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieByQuery } from '../services/apiService';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      setIsLoading(true);
      try {
        const { results } = await fetchMovieByQuery(searchQuery);
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setQuery(searchQuery);
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search"
        />
        <button type="button" className="imput_button">
          Search
        </button>
      </form>
      {movies.length !== 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
      {error && <p>Please wait, something is going wrong...</p>}
    </div>
  );
};

export default Movies;
