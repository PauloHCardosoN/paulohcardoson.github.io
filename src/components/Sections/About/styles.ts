import styled from 'styled-components';
import { primaryColor, secundaryColor } from '../../../values/colors';
import { CodeFont } from '../../../values/fonts';

export const Container = styled.section`
  counter-increment: section 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 1100px) {
    flex-direction: column;
  }
`

export const DivisionContainer = styled.div`
  width: 45%;

  @media(max-width: 1100px) {
    width: 100%;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::before{
    content: '0' counter(section) '.';
    font-size: 20px;
    font-family: ${CodeFont};
    color: ${secundaryColor};
  }

  ::after{
    content: '';
    width: 100%;
    height: .25px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 1.5px;
    margin-left: 10px;
  }
`

export const TitleText = styled.span`
  margin-top: 7.5px;
  font-size: 30px;
  font-family: "Calibre";
  color: #ffffffc0;
  font-weight: 700;
`

export const AboutContainer = styled.div`
  color: #d2d2d2;
  padding: 20px 0;
`

export const AboutText = styled.p`
  font-family: ${CodeFont};
  font-weight: 300;

  :not(:first-of-type) {
    margin-top: 20px;
  }
`

export const AboutTextHighlightText = styled.b<{ color?: string }>`
  color: ${props => props.color || primaryColor};
`

export const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 370px;
  max-height: 370px;
  border-radius: 50%;
  border: 2px solid ${secundaryColor};
  padding: 10px;
`

export const TechsGrid = styled.div`
  margin: 30px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
`

export const TechItemContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #FFF;
    transition: .25s padding-left;
    margin-top: 2px;
    padding-left: 5px;
    font-family: ${CodeFont};
    font-weight: lighter;
    font-size: 12px;

    :hover {
      padding-left: 10px;
    }
  }
`