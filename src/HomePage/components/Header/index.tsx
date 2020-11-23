import React, { useEffect, useState } from 'react';

import { Container, LogoImg, NavBar, NavBarItemContainer, NavBarItemIndex, NavBarItemText } from './styles';

const Header: React.FC<{ sections: string[] }> = (props) => {
  const { sections } = props;

  const [wasLogoAnimated, setLogoAnimatedState] = useState(false);
  const [animatedNavItems, setAnimatedNavItems] = useState(sections.map(() => false));
  const [currentAnimatingNavBarItem, setCurrentAnimatingNavBarItem] = useState(0);

  useEffect(() => {
    setTimeout(() => setLogoAnimatedState(true), 1000)
  }, []);

  useEffect(() => {
    if(currentAnimatingNavBarItem !== sections.length) {
      setTimeout(() => {
        setAnimatedNavItems(animatedNavItems.map((a, index) => index <= currentAnimatingNavBarItem));
        setCurrentAnimatingNavBarItem(currentAnimatingNavBarItem + 1);
      }, 250);
    }
  }, [animatedNavItems, currentAnimatingNavBarItem, sections]);

  return (
    <Container>
      <LogoImg style={ wasLogoAnimated
      ? { marginLeft: 0, opacity: 1 }
      : { marginLeft: -200, opacity: 0 }
    } />

      <NavBar>
        {sections.map((value, index) => (
          <NavBarItemContainer key={index} style={{ marginTop: animatedNavItems[index] ? 0 : -200 }}>
            <NavBarItemIndex>{`0${index + 1}.`}</NavBarItemIndex>
            <NavBarItemText>{value}</NavBarItemText>
          </NavBarItemContainer>
        ))}
      </NavBar>
    </Container>
  )
}

export default Header;