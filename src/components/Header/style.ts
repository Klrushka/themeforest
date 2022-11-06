import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';

export const HeaderWrapper = styled.header`
  background: ${props => props.theme.color.background};
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-weight: ${props => props.theme.font.headerFontWeight};
`;

export const Logo = styled.img`
  margin: ${props => props.theme.size.logoMargin};
`;

export const Navigation = styled.nav`
  margin: ${props => props.theme.size.navItemsMargin};
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.headerTextNavItems};
  font-size: ${props => props.theme.size.navItemsFontSize};
  margin: ${props => props.theme.size.navItemMargin};
  align-items: center;
  justify-content: center;
`;

export const ExpandArrow = styled.img`
  height: 5.5px;
  width: 10px;
  margin: 0px 0px 0.5px 6px;
`;

export const DemoButton = styledMUI(Button)({
  textTransform: 'none',
  fontFamily: '14px',
  fontStyle: 'normal'
}) as typeof Button;
