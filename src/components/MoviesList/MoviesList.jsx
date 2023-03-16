import { List, Item, Img, Description, Link } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies.map(({ id, poster_path, title }, idx) => {
          return (
            <Item key={idx}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <Img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/original${poster_path}`
                      : 'https://www.reelviews.net/resources/img/default_poster.jpg'
                  }
                  alt="poster movie"
                />
                <Description>{title}</Description>
              </Link>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default MoviesList;
