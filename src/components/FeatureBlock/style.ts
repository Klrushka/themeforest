import styled from 'styled-components';

import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';

export const FeaturBlockWrapper = styled.div`

`;

export const DiscoverBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: 120px 405px 120px 405px;
`;

export const LearnBlock = styled.div`

`;

export const DiscoverTitleBlock = styled.div`
  font-family: 'Manrope';
  font-weight: 800;
  font-size: 57px;
  width: 540px;
  height: 197px;
  margin: 0px 30px 0px 0px;
`;

export const DiscoverInfoBlock = styled.div`

`;

export const DiscoverInfo = styled.div`
  width: 540px;
  height: 132px;
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.color.grey};
`;

export const DiscoverMoreButton = styledMUI(Button)({
  textTransform: 'none',
  fontFamily: 'Manrope',
  fontStyle: 'normal',
  background: 'rgb(24, 95, 225)',
  boxShadow: '0px 12px 30px rgba(24, 92, 255, 0.18)',
  borderRadius: '6px',
  color: 'rgba(255, 255, 255)',
  width: '185px',
  height: '54px',
  fontSize: '16px',

  '&:hover': {
    background: 'rgba(70, 125, 255, 1)'
  }
}) as typeof Button;
