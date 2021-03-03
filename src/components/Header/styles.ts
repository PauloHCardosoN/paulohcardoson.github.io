import styled from 'styled-components';

import { secundaryColor } from '../../values/colors';
import { CodeFont } from '../../values/fonts';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 30px;
  position: sticky;
  top: 0;
  left: 0;
  background: #0a192f;
  opacity: 0.75;
  backdrop-filter: blur(10px);
`

export const NavBar = styled.nav`
  display: flex;
  color: ${secundaryColor};
`

export const NavBarItemContainer = styled.div`
  cursor: pointer;
  font-family: ${CodeFont};
  font-size: 14px;
  margin-right: 20px;
  transition: 0.25s filter, 0.5s margin;

  :hover{
    filter: opacity(75%);
  }
`

export const NavBarItemIndex = styled.span`
  color: ${secundaryColor};
  margin-right: 2.5px;
`

export const NavBarItemText = styled.span`
  color: #FFF;
  font-family: ${CodeFont};
  font-weight: 500;
`
