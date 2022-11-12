import React from 'react';

import arrowIcon from '../../../assets/arrowIcon.png';
import { pages } from '../../../mock/pages';

import {
  ArrowIcon,
  ExpandMenuItem,
  ExpandMenuItems,
  ExpandMenuWrapper,
  LinkWrapper
} from './style';

export const ExpandMenu: React.FC<{ onMouseOutHandler: any }> = (
  onMouseOutHandler: any
) => {
  return (
    <ExpandMenuWrapper {...onMouseOutHandler.onMouseOutHandler}>
      <ExpandMenuItems>
        {pages.map(({ to, value }) => (
          <ExpandMenuItem key={`${to}${value}`}>
            <LinkWrapper to={to} >{value}</LinkWrapper>
            <ArrowIcon src={arrowIcon} />
          </ExpandMenuItem>
        ))}
      </ExpandMenuItems>
    </ExpandMenuWrapper>
  );
};
