import React from 'react';
import { BsCaretRight } from 'react-icons/bs';

import { secundaryColor } from '../../../values/colors';

// Componentes
import { Container, DivisionContainer, TitleContainer, TitleText, AboutContainer, AboutText, AboutTextHighlightText, AboutImage, TechsGrid, TechItemContainer } from './styles';

const AboutSection: React.FC = () => {
  const TechnologiesContainer: React.FC<{ techs: string[] }> = (props) => (
    <TechsGrid>
      {props.techs.map(tech => (
        <TechItemContainer>
          <BsCaretRight color={secundaryColor} />
          <span>{tech}</span>
        </TechItemContainer>
      ))}
    </TechsGrid>
  )

  return (
    <Container>
      <DivisionContainer>
        <TitleContainer>
          <TitleText>Sobre</TitleText>
        </TitleContainer>

        <AboutContainer>
          <AboutText>
            Meu nome é <AboutTextHighlightText>Paulo</AboutTextHighlightText>, atualmente, tenho 16 anos, e sou apaixonado por programação, 
            principalmente por <AboutTextHighlightText color="#F7E04B">Javascript</AboutTextHighlightText>, começei a estudar desenvolvimento <AboutTextHighlightText>FrontEnd</AboutTextHighlightText>, com 13 anos, 
            e estudei <AboutTextHighlightText>BackEnd</AboutTextHighlightText> com <AboutTextHighlightText color="#777BB3">PHP</AboutTextHighlightText> e 
            Banco de Dados com <AboutTextHighlightText>MySQL</AboutTextHighlightText>, mas depois de um tempo, migrei para <AboutTextHighlightText color="#639A58">NodeJS</AboutTextHighlightText>.
          </AboutText>
          
          <AboutText>
            Hoje consigo criar páginas Web dinâmicas com <AboutTextHighlightText color="#5CDBF9">ReactJS</AboutTextHighlightText>,
            aplicativos mobile com <AboutTextHighlightText color="#5CDBF9">React Native</AboutTextHighlightText>,
            e aplicativos Desktop com <AboutTextHighlightText color="#7ad9fa">Electron</AboutTextHighlightText>.
          </AboutText>

          <AboutText>
            Alguns tecnologias que eu estive utilizando recentemente:  
          </AboutText>

          <TechnologiesContainer techs={[
            'JavaScript (ES6+)',
            'HTML & CSS / LESS',
            'ReactJS',
            'React Native',
            'Node.js',
            'Next.js'
          ]}/>
        </AboutContainer>
      </DivisionContainer>

      <AboutImage src="/selfphoto.jpeg"/>
    </Container>
  )
}

export default AboutSection;