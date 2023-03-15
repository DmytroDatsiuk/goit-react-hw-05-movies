import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid lightskyblue;

  > nav {
    display: flex;
  }
`;

export const Logo = styled(NavLink)`
  text-decoration: none;

  color: white;
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: lightskyblue;
  font-weight: 500;

  &.active {
    color: #fff;
    background-color: lightskyblue;
  }
`;
