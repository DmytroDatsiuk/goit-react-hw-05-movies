import { List, Item, Img, Description, Link } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ id, poster_path, title }) => {
        return (
          <Item key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/original${poster_path}`
                    : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiVE6bpD6TDmfsrz4LwcCRl-TWNy5zq_qFxjkJ3NqeQ4bgotQt5IRpH1m7SBt9f-O1ag&usqp=CAU'
                }
                alt="poster movie"
              />
              <Description>{title}</Description>
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;
