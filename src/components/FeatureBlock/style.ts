import styled from 'styled-components';

import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';

export const FeaturBlockWrapper = styled.div`

`;

export const DiscoverBlock = styled.div`
  display: flex;
  justify-content: center;
  margin: ${props => props.theme.size.blockCenterIndent};
`;

export const LearnBlock = styled.div`
  display: flex;
  background: ${props => props.theme.color.background};
`;

export const DiscoverTitleBlock = styled.div`
  font-family: ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size: 57px;
  width: 70%;
  margin-right: ${props => props.theme.size.indent5};
  color: ${props => props.theme.color.black};
`;

export const DiscoverInfoBlock = styled.div`
  width: 65%;
`;

export const DiscoverInfo = styled.div`
  margin-top: ${props => props.theme.size.indent0};
  font-weight: 400;
  font-size: 20px;
  color: ${props => props.theme.color.grey};
`;

export const AccentWord = styled.span`
  color: ${props => props.theme.color.primary};
`;

export const MoreButton = styledMUI(Button)({
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
  marginTop: '10%',
  '&:hover': {
    background: 'rgba(70, 125, 255, 1)'
  }
}) as typeof Button;

export const ImageBlock = styled.img`
  width: 50%;
`;

export const LearnInfoBlock = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  justify-content: center;
`;

export const LearnTitleBlock = styled.div`
  font-family: ${props => props.theme.font.mainFont};
  font-style: normal;
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size: 38px;
  color: ${props => props.theme.color.black};
  width: 50%;
  margin-bottom: ${props => props.theme.size.indent5};
  color: ${props => props.theme.color.black};
`;

export const LearnText = styled.span`
  font-style: normal;
  font-weight: ${props => props.theme.size.fontWeight0};
  font-size: 20px;
  line-height: 33px;
  color: ${props => props.theme.color.grey};
  width: 55%;
`;
