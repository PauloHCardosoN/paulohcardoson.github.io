import styled from 'styled-components';
import { secundaryColor } from '../../../values/colors';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.25s;

  ::after{
    content: "";
    width: 1px;
    height: 90px;
    background: rgb(45, 55, 86);
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const Link = styled.a`
  text-decoration: none;
  margin-bottom: 20px;
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