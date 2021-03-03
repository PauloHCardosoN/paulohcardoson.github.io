import React, { useEffect, useState } from 'react';

import { Container, NavBar, NavBarItemContainer, NavBarItemIndex, NavBarItemText } from './styles';

const Header: React.FC<{ sections: string[] }> = (props) => {
  const { sections } = props;

  const [animatedNavItems, setAnimatedNavItems] = useState(sections.map(() => false));
  const [currentAnimatingNavBarItem, setCurrentAnimatingNavBarItem] = useState(0);

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