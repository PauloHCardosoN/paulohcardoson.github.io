import React from 'react';

// Componentes
import { Container, MainContainer } from './styles';
import Header from './components/Header';
import LeftExternalLinks from './components/LeftExternalLinks';
import EmailLinkContainer from './components/EmailLinkContainer';

// Seções
import IntroSection from './components/Sections/Intro';
import AboutSection from './components/Sections/About';
import FooterSection from './components/Sections/Footer';

const sections = [
  "Sobre",
  "Skills",
  "Contato"
]

const App: React.FC = () => {
  return (
    <Container>
      {/* Header */}
      <Header sections={sections} />

      {/* Links externos */}
      <LeftExternalLinks />

      {/* Link do email */}
      <EmailLinkContainer />

      {/* Conteudo principal */}
      <MainContainer>
        <IntroSection/>

        <AboutSection />

        <FooterSection />
      </MainContainer>
    </Container>
  );
}

export default App;
