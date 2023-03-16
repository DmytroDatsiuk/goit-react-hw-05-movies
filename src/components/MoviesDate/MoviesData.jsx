import { ItemGenre, ListGenre } from 'components/MoviesList/MoviesList.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Box,
  ContainerData,
  Img,
  InformationBox,
  Link,
  LinkList,
} from './MoviesData.styled';

export const MoviesData = ({ url, tag, title, score, overview, genres }) => {
  return (
    <ContainerData>
      <Box>
        <Img
          src={
            url
              ? `https://image.tmdb.org/t/p/original${url}`
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsiVE6bpD6TDmfsrz4LwcCRl-TWNy5zq_qFxjkJ3NqeQ4bgotQt5IRpH1m7SBt9f-O1ag&usqp=CAU'
          }
          alt={tag}
          width={300}
        />

        <InformationBox>
          <h2>{title}</h2>
          <p>User Score: {Math.round(score * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>

          <ListGenre>
            {genres.map(genre => (
              <ItemGenre key={genre.id}>{genre.name}</ItemGenre>
            ))}
          </ListGenre>
        </InformationBox>
      </Box>
      <h2>Additional information</h2>
      <LinkList>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </LinkList>
      <Suspense>
        <Outlet />
      </Suspense>
    </ContainerData>
  );
};

export default MoviesData;
