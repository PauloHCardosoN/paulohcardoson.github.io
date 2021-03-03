import styled from 'styled-components';
import { primaryColor, secundaryColor, titleColor, textColor } from '../../../values/colors';
import { CodeFont } from '../../../values/fonts';

export const Container = styled.section`
  width: 100%;
  counter-increment: section 1;
  display: flex;
  align-items: center;

  @media(max-width: 1100px) {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
  color: ${titleColor};
  font-size: 30px;
  font-family: "Roboto";
  font-weight: 600;

  ::before{
    content: '0' counter(section) '.';
    font-family: ${CodeFont};
    font-size: 25px;
    color: ${secundaryColor};
  }
`

export const AboutContainer = styled.div`
  color: #d2d2d2;
  padding: 20px 0;
`

export const AboutText = styled.p`
  color: ${textColor};
  font-weight: 600;

  :not(:first-of-type) {
    margin-top: 20px;
  }
`

export const AboutTextHighlightText = styled.b<{ color?: string }>`
  color: ${props => props.color || primaryColor};
`

export const AboutImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid ${secundaryColor};
`

export const AboutImage = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: url(${props => props.src}) center bottom no-repeat;
  background-size: 100%;
  border-radius: inherit;
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
  color: ${textColor};

  span {
    margin-top: 3px;
    padding-left: 7.5px;
    font-family: ${CodeFont};
    font-weight: 600;
    font-size: 12px;
  }
`