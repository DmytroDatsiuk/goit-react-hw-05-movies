import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyele';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MoviesDetails from '../pages/MoviesDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<div>NotFound</div>} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
