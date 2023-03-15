import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 42px;
`;

export const Item = styled.li`
  text-align: center;
`;

export const Img = styled.img`
  width: 300px;
  border: 1px solid lightskyblue;
  border-radius: 8px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: lightskyblue;
  width: 300px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
