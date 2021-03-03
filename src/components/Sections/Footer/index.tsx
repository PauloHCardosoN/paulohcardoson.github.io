import React from 'react';

import { Container, DesignedAndBuilt } from './styles';


const FooterSection: React.FC = () => {
  return (
    <Container>
      <DesignedAndBuilt>Design inspirado por <a href="https://brittanychiang.com/#about" target="_blank" rel="noreferrer">Brittany Chiang</a></DesignedAndBuilt>
      <DesignedAndBuilt>Código feito por <a href="https://github.com/PauloHCardosoN" target="_blank" rel="noreferrer">Paulo Cardoso</a></DesignedAndBuilt>
    </Container>
  )
}

export default FooterSection;