import React from 'react';

import demoButtonIcon from '../../assets/demoButtonIcon.png';
import expandArrow from '../../assets/expandArrow.png';
import logo from '../../assets/logoBlue.png';
import { navPanelRoutes } from '../../mock/navRoutes';

import {
  DemoButton,
  ExpandArrow,
  HeaderWrapper,
  LinkWrapper,
  Logo,
  Navigation
} from './style';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt={'logo'} />
      <Navigation>
        {navPanelRoutes.map(({ value, to, isExpand }) => (
          <LinkWrapper to={to} key={to}>
            {value}
            {isExpand && <ExpandArrow src={expandArrow} alt={'expandArrow'} />}
          </LinkWrapper>
        ))}
      </Navigation>{' '}
      <DemoButton
        variant={'contained'}
        startIcon={<img src={demoButtonIcon} alt={'demoIcon'} />}>
        Watch the demo
      </DemoButton>
    </HeaderWrapper>
  );
};
