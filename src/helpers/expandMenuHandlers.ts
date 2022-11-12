import { Dispatch, MouseEventHandler } from 'react';

import { AnyAction } from 'redux';

import { navExpMenuVisibilityToOpposite } from '../slices/navbarExpandMenu';

export const getExpandOnMouseEnterHadler =
  (dispatch: Dispatch<AnyAction>): { onMouseEnter: MouseEventHandler } => {
    return {
      onMouseEnter: () => {
        dispatch(navExpMenuVisibilityToOpposite());
      }
    };
  };

export const getExpanOnMouseOutHandler =
  (dispatch: Dispatch<AnyAction>): { onMouseLeave: MouseEventHandler } => {
    return {
      onMouseLeave: () => {
        dispatch(navExpMenuVisibilityToOpposite());
      }
    };
  };
