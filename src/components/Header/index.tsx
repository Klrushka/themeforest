import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import demoButtonIcon from '../../assets/demoButtonIcon.png';
import expandArrow from '../../assets/expandArrow.png';
import logo from '../../assets/logoBlue.png';
import {
  getExpandOnMouseEnterHadler,
  getExpanOnMouseOutHandler
} from '../../helpers/expandMenuHandlers';
import { navPanelRoutes } from '../../mock/navRoutes';
import { ExpandMenu } from '../ExpandMenu';

import {
  DemoButton,
  ExpandArrow,
  HeaderInfo,
  HeaderWrapper,
  LinkWrapper,
  Logo,
  Navigation
} from './styled';

export const Header: React.FC = () => {
  const isShowExpandMenu: boolean = useSelector(
    (state: any) => state.navbarExpandMenu.value
  );
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <HeaderInfo>
        <Logo src={logo} alt={'logo'} />
        <Navigation>
          {navPanelRoutes.map(({ value, to, isExpand }) => (
            <LinkWrapper
              to={to}
              key={to}
              {...(isExpand && getExpandOnMouseEnterHadler(dispatch))}>
              {value}
              {isExpand && (
                <ExpandArrow src={expandArrow} alt={'expandArrow'} />
              )}
              {isShowExpandMenu && isExpand && (
                <ExpandMenu
                  onMouseOutHandler={getExpanOnMouseOutHandler(dispatch)}
                />
              )}
            </LinkWrapper>
          ))}
        </Navigation>{' '}
        <DemoButton
          variant={'contained'}
          startIcon={<img src={demoButtonIcon} alt={'demoIcon'} />}>
          Watch the demo
        </DemoButton>
      </HeaderInfo>
    </HeaderWrapper>
  );
};
