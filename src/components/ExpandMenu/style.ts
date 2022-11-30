import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const ExpandMenuWrapper = styled.div`
  z-index: 10;
  position: absolute;
  background-color: white;
  min-width: 190px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  margin: '10px 0px 0px 0px';
  width: 190px;

  filter: ${props => props.theme.color.expandMenuWrapperShadows};
  border-radius: 6px;

  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const ExpandMenuItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const ExpandMenuItem = styled.li`
  min-width: 190px;
  margin: 10px 23px 10px 20px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0px;
  font-size: 14px;
  min-width: 120px
  display: inline-block;

  ${ExpandMenuItem}:hover & {
    font-weight: 600;
  }
`;

export const ArrowIcon = styled.img`
  opacity: 0;
  transition-duration: 0.3s;
  margin-left: 90px;
  width: 14px;
  height: 7.5px;

  ${ExpandMenuItem}:hover & {
    opacity: 1;
  }
`;
