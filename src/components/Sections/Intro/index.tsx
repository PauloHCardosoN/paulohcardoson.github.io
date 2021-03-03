import React, { useEffect, useState } from 'react';

import { Container, IntroText, NameText, DescriptionText } from './styles';

const IntroTextString = "Olá, meu nome é";

const IntroSection: React.FC = () => {
  const [displaying_, setDisplaying_State] = useState(true);
  const [substringedIntroTextIndex, setSubstringedIntroTextIndex] = useState(0);
  
  useEffect(() => {
    if(substringedIntroTextIndex !== IntroTextString.length){
      setTimeout(() => setSubstringedIntroTextIndex(substringedIntroTextIndex + 1), 125);
    }
  }, [substringedIntroTextIndex])

  useEffect(() => {
    setTimeout(() => setDisplaying_State(!displaying_), 1000)
  }, [displaying_])

  return (
    <Container>
      <IntroText {...{ displaying_ }}>{IntroTextString.substr(0,substringedIntroTextIndex)}</IntroText>
      <NameText>Paulo Cardoso</NameText>
      <DescriptionText>Sou um pequeno desenvolvedor FullStack & Mobile apaixonado por tecnologia.</DescriptionText>
    </Container>
  )
}

export default IntroSection;