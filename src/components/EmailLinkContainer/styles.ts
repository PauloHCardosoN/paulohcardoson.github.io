import styled from 'styled-components';
import { secundaryColor, textColor } from '../../values/colors';
import { CodeFont } from '../../values/fonts';

export const Container = styled.div`
  transition: 0.25s;
  position: fixed;
  bottom: 0;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;

  ::after{
    content: "";
    margin-top: 20px;
    width: 1px;
    height: 90px;
    background: rgb(45, 55, 86);
  }

  @media (max-width: 700px) {
    display: none;
  }
`

export const Link = styled.a`
  transition: .25s;
  text-decoration: none;
  color: ${textColor};
  font-family: ${CodeFont};
  font-size: 15px;

  :hover {
    padding-bottom: 10px;
    color: ${secundaryColor};
  }
`