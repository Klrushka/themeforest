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
  width: 100%;
  justify-content: center;
`;

export const Logo = styled.img`
  margin-right: ${props => props.theme.size.smallMargin};
`;

export const Navigation = styled.nav`
  margin: ${props => props.theme.size.navItemsMargin};
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color.headerTextNavItems};
  font-size: ${props => props.theme.size.navItemsFontSize};
  margin-right: ${props => props.theme.size.verySmallMargin};
  align-items: center;
  justify-content: center;
  display: inline-block;
`;

export const ExpandArrow = styled.img`
  height: 5.5px;
  width: 10px;
  margin: 0px 0px 0.5px 6px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DemoButton = styledMUI(Button)({
  textTransform: 'none',
  fontFamily: 'Manrope',
  background: 'rgb(24, 95, 225)',
  fontStyle: 'normal',
  '&:hover': {
    background: 'rgba(70, 125, 255, 1)'
  }
}) as typeof Button;
