import { Outlet } from 'react-router-dom';
// import { Header, Logo, Link, Box } from './SharedLayout.style';
import { SiThemoviedatabase } from 'react-icons/si';
import { Box, Header, Link, Logo } from './SharedLayout.style';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <Logo to="/">
          <SiThemoviedatabase color="lightskyblue" size={40} />
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Box>
  );
};

export default SharedLayout;
