import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 3px 10px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);

  border-radius: 10px;
  color: #000000;
  text-decoration: none;
  text-align: center;
  width: 80px;
  :hover,
  :focus {
    color: #ffffff;
    background-color: #a8a8ee;
  }
`;
