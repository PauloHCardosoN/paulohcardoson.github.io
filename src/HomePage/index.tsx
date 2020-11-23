import React from 'react';

// Componentes
import { Container, MainContainer } from './styles';
import Header from './components/Header';
import ExternalLinks from './components/ExternalLinks';
import EmailLinkContainer from './components/EmailLinkContainer';

// Seções
import IntroSection from './components/Sections/Intro';
import AboutSection from './components/Sections/About';

const sections = [
  "Intro",
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
      <ExternalLinks />

      {/* Link do email */}
      <EmailLinkContainer />

      {/* Conteudo principal */}
      <MainContainer>
        <IntroSection/>

        <AboutSection />
      </MainContainer>
    </Container>
  );
}

export default App;
