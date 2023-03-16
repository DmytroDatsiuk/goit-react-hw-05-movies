import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 15px;
`;

export const Item = styled.li`
  padding: 5px;
  border: 1px solid lightskyblue;
  border-radius: 8px;
  background-color: #478d8a83;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
