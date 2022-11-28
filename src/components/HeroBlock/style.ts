import styled from 'styled-components';

import { Button } from '@mui/material';
import { styled as styledMUI } from '@mui/system';

export const HeroBlockWrapper = styled.div`
  font-family: ${props => props.theme.font.mainFont};
`;

export const InformationSection = styled.div`
  padding: ${props => props.theme.size.heroBlockInformationalSectionPadding};
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  max-width: ${props => props.theme.size.heroBlockTitleWidth}; 
  margin: ${props => props.theme.size.heroBlockTitleMargin};  
`;

export const DescriptionWrapper = styled.span`
  color:  ${props => props.theme.color.grey};
  font-size: ${props => props.theme.size.heroBlockDescriptionFontSize};
  max-width: ${props => props.theme.size.heroBlockDescriptionWidth};
  display: flex;
`;

export const MainImageSection = styled.img`
  max-width: 100%;
`;
export const ImageWrapper = styled.div`
  display: flex;
`;

export const Title = styled.span`
  max-width: ${props => props.theme.size.heroBlockTitleWidth};
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
  margin: '-70px 635px 529px 1165px',
  '&:hover': {
    background: 'rgba(70, 125, 255, 1)'
  }

});

export const LearnMoreButtonText = styled.span`
  border-style: solid;
  border-radius: ${props => (
    props.theme.size.heroBlockLearnMoreButtonTextBorderRadius)};
  height: ${props => props.theme.size.heroBlockLearnMoreButtonTextHeight};
  width: ${props => props.theme.size.heroBlockLearnMoreButtonTextWidth};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.size.heroBlockLearnMoreButtonTextFontSize};
  border-width: 1px;
  border-color:  ${props => props.theme.size.helperBlue3};
  color:  ${props => props.theme.color.white};
`;
