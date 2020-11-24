import styled from 'styled-components';

import { primaryColor, secundaryColor } from '../../../../values/colors';
import { CodeFont } from '../../../../values/fonts';

const headerSize = 127.28;

export const Container = styled.section`
  width: 100%;
  min-height: ${`calc(100vh - ${headerSize}px)`};
  padding-bottom: ${headerSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const IntroText = styled.p<{ displaying: Boolean }>`
  font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
  color: ${secundaryColor};
  font-size: clamp(14px, 5vw, 16px);;

  ::after{
    content: '';
    position: relative;
    top: 2.5px;
    display: inline-flex;
    width: 12.5px;
    height: 2px;
    background: ${props => props.displaying ? secundaryColor : "transparent"}
  }
`

export const NameText = styled.p`
  color: ${primaryColor};
  margin: 2.5px 0 5px;
  font-size: clamp(70px, 5vw, 100px);
  font-weight: 700;
  font-family: "Calibre";
`

export const DescriptionText = styled.p`
  max-width: 400px;
  color: #FFF;
  font-size: 20px;
  font-weight: 400;
  font-family: ${CodeFont};
`