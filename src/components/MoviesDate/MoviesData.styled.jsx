import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerData = styled.div`
  margin-bottom: 16px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid lightskyblue;
`;

export const Img = styled.img`
  display: block;
  border: 1px solid lightskyblue;
  border-radius: 4px;
  margin-right: 15px;
`;

export const InformationBox = styled.div`
  width: 700px;
  padding: 5px;
  border: 1px solid lightskyblue;
  border-radius: 8px;
  background-color: #478d8a83;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 15px;
  border-bottom: 1px solid lightskyblue;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 3px 10px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.5);

  border-radius: 10px;
  color: #fff;
  background-color: #79bbe4;
  text-decoration: none;
  text-align: center;
  width: 80px;
  font-weight: 900;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #a8a8ee;
  }
`;
