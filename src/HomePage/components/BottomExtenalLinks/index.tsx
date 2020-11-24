import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';

import { Container, Link } from './styles';

const BottomExternalLinks: React.FC = () => {
  return (
    <Container>
      <Link target="_blank" href="https://github.com/PauloHCardosoN" >
        <AiFillGithub/>
      </Link>
      
      <Link>
        <GrLinkedinOption />
      </Link>
    </Container>
  )
}

export default BottomExternalLinks;