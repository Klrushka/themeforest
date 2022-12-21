import styled from 'styled-components';

import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/material/styles';

export const BlogBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: ${props => props.theme.size.blockCenterIndent}; */
  justify-content: center;
  align-items: center;
  padding-top: ${props => props.theme.size.indent7};
  padding-bottom: ${props => props.theme.size.indent7};
`;

export const BlogBlockContent = styled.div`
  max-width: 60%;
`;

export const BlogCards = styled.div`
  display: flex;
  gap: ${props => props.theme.size.indent5};
  padding-top: ${props => props.theme.size.indent6};
  padding-bottom: ${props => props.theme.size.indent6};
  width: 66%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-family:  ${props => props.theme.font.mainFont};
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size: ${props => props.theme.size.fontSize10};
  color: ${props => props.theme.color.blackFont};
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${props => props.theme.size.indent0};
`;

export const ArrowIcon = styled.img`

`;

export const ArrowButton = styledMUI(Button)({
  padding: '15px 40px',
  width: '110px',
  height: '60px',
  borderRadius: '20px',
  background: 'rgba(240, 249, 255, 1)',
  boxShadow: 'none',
  '&:hover': {
    background: 'rgba(240, 249, 255, 1)'
  },
  '&:disabled': {
    opacity: '0.5'
  }
}) as typeof Button;
