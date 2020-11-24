import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

import { Container, Link } from './styles';

const ExternalLinks: React.FC = () => {
  const [wasAnimated, setAnimatedState] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimatedState(true), 2000);
  }, []);

  return (
    <Container style={{ left: wasAnimated ? undefined : -200 }}>
      <Link target="_blank" href="https://github.com/PauloHCardosoN" >
        <AiFillGithub/>
      </Link>
      
      <Link>
        <GrLinkedinOption />
      </Link>
    </Container>
  )
}

export default ExternalLinks;