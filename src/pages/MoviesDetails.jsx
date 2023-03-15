import { BackLink } from 'components/BackLink';
import MoviesData from 'components/MoviesDate/MoviesData';
import { useEffect, useRef, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import { GetDetailsMovie } from 'Service/GetMovies';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation;
  const ref = useRef(location.state?.from ?? '/movies');
  console.log(ref);
  console.log(ref.current);

  useEffect(() => {
    console.log('hello');
    (async () => {
      try {
        const response = await GetDetailsMovie(movieId);
        console.log('hi');
        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <BackLink to={ref.current}>Go Back</BackLink>
      {movieDetails && (
        <MoviesData
          tag={title}
          url={poster_path}
          title={title}
          score={vote_average}
          overview={overview}
          genres={genres}
        />
      )}
    </>
  );
};

export default MoviesDetails;
