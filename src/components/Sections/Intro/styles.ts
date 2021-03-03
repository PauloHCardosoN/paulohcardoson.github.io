import styled from 'styled-components';

import { primaryColor, secundaryColor } from '../../../values/colors';
import { CodeFont } from '../../../values/fonts';

export const Container = styled.section`
  width: 100%;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const IntroText = styled.p<{ displaying_: Boolean }>`
  font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
  color: ${secundaryColor};
  font-size: clamp(14px, 5vw, 16px);;

  ::after{
    content: '';
    position: relative;
    top: 2.5px;
    display: inline-flex;
    width: 12.5px;
    height: 3px;
    background: ${props => props.displaying_ ? secundaryColor : "transparent"}
  }
`

export const NameText = styled.p`
  color: ${primaryColor};
  margin: 2.5px 0 5px;
  font-size: clamp(70px, 5vw, 100px);
  font-weight: 700;
`

export const DescriptionText = styled.p`
  max-width: 400px;
  font-size: 20px;
  font-weight: 400;
  font-family: ${CodeFont};
`