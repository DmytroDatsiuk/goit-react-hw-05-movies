import { Outlet } from 'react-router-dom';
import { Link } from './MoviesData.styled';

export const MoviesData = ({ url, tag, title, score, overview, genres }) => {
  return (
    <div>
      <div>
        <img
          src={
            url
              ? `https://image.tmdb.org/t/p/original${url}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiVE6bpD6TDmfsrz4LwcCRl-TWNy5zq_qFxjkJ3NqeQ4bgotQt5IRpH1m7SBt9f-O1ag&usqp=CAU'
          }
          alt={tag}
          width={300}
        />

        <div>
          <h2>{title}</h2>
          <p>User Score: {Math.round(score * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MoviesData;
