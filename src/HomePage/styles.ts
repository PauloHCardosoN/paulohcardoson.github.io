import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #0a192f;
`

export const MainContainer = styled.main`
  width: 100%;
  padding: 0 130px;

  @media(max-width: 700px) {
    padding: 0 30px;
  }
`