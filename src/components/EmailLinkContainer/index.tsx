import React, { useEffect, useState } from 'react';

import { Container, Link } from './styles';

const EmailLinkContainer: React.FC = () => {
  const [wasAnimated, setAnimatedState] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimatedState(true), 2000);
  }, []);

  return (
    <Container style={{ right: wasAnimated ? undefined : -200 }}>
      <Link href="mailto:pauloh.cardoson@gmail.com">pauloh.cardoson@gmail.com</Link>
    </Container>
  )
}

export default EmailLinkContainer;