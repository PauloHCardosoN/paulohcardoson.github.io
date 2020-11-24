import styled from 'styled-components';

// Imagens
import logo from '../../images/logo.png';

import { secundaryColor } from '../../../values/colors';
import { CodeFont } from '../../../values/fonts';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 30px 30px;
  position: sticky;
  top: 0;
  left: 0;
  background: #0a192f;
  opacity: 0.75;
  backdrop-filter: blur(10px);

  @media(max-width: 700px) {
    justify-content: center;
  }
`

export const LogoImg = styled.div`
  transition: 1s;
  width: 175px;
  height: 67.5px;
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
`

export const NavBar = styled.nav`
  display: flex;
  color: ${secundaryColor};

  @media(max-width: 700px) {
    display: none;
  }
`

export const NavBarItemContainer = styled.div`
  cursor: pointer;
  font-size: 12px;
  margin-top: 0;
  display: flex;
  align-items: center;
  margin-right: 20px;
  transition: 0.25s filter, 0.5s margin;

  :hover{
    filter: opacity(75%);
  }
`

export const NavBarItemIndex = styled.div`
  font-family: ${CodeFont};
  color: ${secundaryColor};
`

export const NavBarItemText = styled.span`
  color: #FFF;
  font-family: ${CodeFont};
  margin-left: 2.5px;
  font-weight: 500;
`
