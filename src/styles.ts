import styled from 'styled-components';

import { textColor } from './values/colors';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #0a192f;
  color: ${textColor};
`

export const MainContainer = styled.main`
  width: 100%;
  padding: 0 130px;

  @media(max-width: 700px) {
    padding: 0 30px;
  }
`