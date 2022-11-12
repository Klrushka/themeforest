import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const ExpandMenuWrapper = styled.div`
  z-index: 10;
  position: absolute;
  background-color: white;
  min-width: ${props => props.theme.size.expandMenuwidth};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: ${props => props.theme.size.expandMenuwrapperMargin};
  width: ${props => props.theme.size.expandMenuWidth};

  filter: ${props => props.theme.color.expandMenuWrapperShadows};
  border-radius: 6px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const ExpandMenuItems = styled.ul`
  list-style-type: none;
  margin: ${props => props.theme.size.expandMenuItemsMargin};
  padding: ${props => props.theme.size.expandMenuItemsPadding};
`;
export const ExpandMenuItem = styled.li`
  min-width: ${props => props.theme.size.expandMenuwidth};
  margin: ${props => props.theme.size.expandMenuItemMargin};
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0px;
  font-size: 14px;
  min-width: ${props => props.theme.size.expandLinkWrapperWidth};
  display: inline-block;

  ${ExpandMenuItem}:hover & {
    font-weight: bold;
  }
`;

export const ArrowIcon = styled.img`
  opacity: 0;
  transition-duration: 0.3s;
  margin: ${props => props.theme.size.expandArrowIconMargin};
  width: 14px;
  height: 7.5px;

  ${ExpandMenuItem}:hover & {
    opacity: 1;
  }
`;
