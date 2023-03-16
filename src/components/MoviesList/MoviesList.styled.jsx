import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  text-align: center;

  width: 300px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const Img = styled.img`
  border: 1px solid lightskyblue;
  border-radius: 8px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  color: lightskyblue;
`;

export const ListGenre = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const ItemGenre = styled.li`
  list-style-type: none;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
`;
