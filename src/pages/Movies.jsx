import { LoadMore } from 'components/LoadMore/LoadMore';
import MoviesList from 'components/MoviesList/MoviesList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GetSearchMovies } from 'Service/GetMovies';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
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
        const response = await GetSearchMovies(movieName, page);
        setMovies(prev => [...prev, ...response]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieName, page]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  const loader = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchMovie onSearch={handleSearch} />
      <MoviesList movies={movies} loader={loader} />
      {isLoading && <div>Loading...</div>}
      {movies.length !== 0 && !isLoading && <LoadMore loader={loader} />}
    </>
  );
};

export default Movie;
