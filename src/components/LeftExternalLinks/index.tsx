import React, { useEffect, useState } from 'react';
import { FiGithub,FiLinkedin } from 'react-icons/fi';

import { Container, Link } from './styles';

const ExternalLinks: React.FC = () => {
  const [wasAnimated, setAnimatedState] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimatedState(true), 2000);
  }, []);

  return (
    <Container style={{ left: wasAnimated ? undefined : -200 }}>
      <Link target="_blank" href="https://github.com/PauloHCardosoN" >
        <FiGithub />
      </Link>
      
      <Link target="_blank" href="https://linkedin.com/in/paulohcardoson">
        <FiLinkedin />
      </Link>
    </Container>
  )
}

export default ExternalLinks;