import styled from 'styled-components';

import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/system';

export const HeroBlockWrapper = styled.div`
  font-family: ${props => props.theme.font.mainFont};
`;

export const InformationSection = styled.div`
  padding: 73px 405px 92px 405px;
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 60%;
  margin-right: ${props => props.theme.size.mediumMargin};  
`;

export const DescriptionWrapper = styled.span`
  color:  ${props => props.theme.color.grey};
  font-size: ${props => props.theme.size.heroBlockDescriptionFontSize};
  width: 40%;
  display: flex;
`;

export const MainImageSection = styled.img`
  width: 100%;
`;
export const ImageWrapper = styled.div`
  display: flex;
`;

export const Title = styled.span`
  width: 50%;
  font-weight: ${props => props.theme.size.heroBlockTitleFontWeight};
  font-size:  ${props => props.theme.size.heroBlockTitleFontSize};
  font-style: normal;
  
  color: ${props => props.theme.color.black};;

  &:last-child {
    color: ${props => props.theme.color.primary};
  }
`;

export const LearnMoreButton = styledMUI(Button)({
  background: 'rgb(24, 95, 225)',
  borderRadius: '70%',
  height: '130px',
  width: '130px',
  fontSize: '14px',
  borderColor: 'rgb(255, 255, 255)',
  borderWidth: '10px',
  borderStyle: 'solid',
  position: 'absolute',
  margin: '-70px auto auto 60%',
  '&:hover': {
    background: 'rgba(70, 125, 255, 1)'
  }

});

export const LearnMoreButtonText = styled.span`
  border-style: solid;
  border-radius: 70%;
  height: 90px;
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.size.heroBlockLearnMoreButtonTextFontSize};
  border-width: 1px;
  border-color:  ${props => props.theme.size.helperBlue3};
  color:  ${props => props.theme.color.white};
`;
