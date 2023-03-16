import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetCastData } from 'Service/GetMovies';
import { Item, List } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await GetCastData(movieId);
        setActors(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {' '}
      {actors.length !== 0 ? (
        <List>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <Item key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : 'https://img.freepik.com/free-icon/user_318-864557.jpg'
                  }
                  alt="actor poster"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <div>There is no information about the cast of the movie</div>
      )}
    </>
  );
};

export default Cast;
