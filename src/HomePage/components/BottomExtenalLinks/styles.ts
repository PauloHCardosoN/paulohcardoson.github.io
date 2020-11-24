import styled from 'styled-components';
import { secundaryColor } from '../../../values/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;

  @media (min-width: 700px) {
    display: none;
  }
`

export const Link = styled.a`
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;

  svg {
    cursor: pointer;
    color: rgb(161, 181, 205);
    transition: 0.25s;

    :hover{
      color: ${secundaryColor};
    }
  }
`