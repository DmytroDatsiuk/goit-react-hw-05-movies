import MoviesList from 'components/MoviesList/MoviesList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GetSearchMovies } from 'Service/GetMovies';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }

    setIsLoading(true);
    (async () => {
      try {
        const response = await GetSearchMovies(movieName);
        setMovies(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieName]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchMovie onSearch={handleSearch} />
      {isLoading ? <div>Loading...</div> : <MoviesList movies={movies} />}
    </>
  );
};

export default Movie;
