import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { GetTrendingMovies } from 'Service/GetMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await GetTrendingMovies();
        setMovies(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <MoviesList movies={movies} />
      {isLoading && <div>Loading...</div>}
    </>
  );
};

export default Home;
