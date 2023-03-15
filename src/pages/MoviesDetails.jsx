import { BackLink } from 'components/BackLink';
import MoviesData from 'components/MoviesDate/MoviesData';
import { useEffect, useRef, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';
import { GetDetailsMovie } from 'Service/GetMovies';

const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    (async () => {
      try {
        const response = await GetDetailsMovie(movieId);
        setMovieDetails(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <BackLink to={ref.current}>Go Back</BackLink>
      {movieDetails && (
        <MoviesData
          tag={movieDetails.title}
          url={movieDetails.poster_path}
          title={movieDetails.title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
        />
      )}
    </>
  );
};

export default MoviesDetails;
