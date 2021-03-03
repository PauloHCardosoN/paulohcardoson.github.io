import React, { useEffect, useRef, useState } from 'react';
import { SiNextDotJs, SiTypescript, SiElectron, SiKotlin, SiReact } from 'react-icons/si';
import { GoBrowser } from 'react-icons/go';
import { IconType } from 'react-icons/lib';

import { secundaryColor } from '../../../values/colors';

// Componentes
import { Container, TitleContainer, TitleText, AboutContainer, AboutText, AboutTextHighlightText, AboutImageContainer, AboutImage, TechsGrid, TechItemContainer } from './styles';

const AboutSection: React.FC = () => {
  const [imageContainerWidth, setImageContainerWidth] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (imageContainerRef.current) {
      setImageContainerWidth(imageContainerRef.current.offsetWidth)
      window.addEventListener('resize', () => setImageContainerWidth(imageContainerRef.current.offsetWidth))
    }
  }, [imageContainerRef])

  const TechnologiesContainer: React.FC<{ techs: { title: string, Icon: IconType }[] }> = (props) => (
    <TechsGrid>
      {props.techs.map(({ title, Icon }, index) => (
        <TechItemContainer key={index}>
          <Icon color={secundaryColor} size={20} />
          <span>{title}</span>
        </TechItemContainer>
      ))}
    </TechsGrid>
  )

  return (
    <Container>
      <div>
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

          <TechnologiesContainer
            techs={[
              {
                title: 'HTML & CSS / LESS',
                Icon: GoBrowser
              },
              {
                title: 'ECMAScript (ES6+) & Typescript',
                Icon: SiTypescript
              },
              {
                title: 'React JS & React Native',
                Icon: SiReact
              },
              {
                title: 'ElectronJS',
                Icon: SiElectron
              },
              {
                title: 'Next.js',
                Icon: SiNextDotJs
              },
              {
                title: 'Kotlin',
                Icon: SiKotlin
              }
            ]}
          />
        </AboutContainer>
      </div>

      <div
        style={{
          width: "150%",
          height: imageContainerWidth,
          marginLeft: 50,
          marginBottom: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <AboutImageContainer ref={imageContainerRef}>
          <AboutImage src="https://avatars.githubusercontent.com/u/59656828" />
        </AboutImageContainer>
      </div>
    </Container>
  )
}

export default AboutSection;