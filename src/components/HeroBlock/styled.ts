import styled from 'styled-components';

import { Button } from '@mui/material';

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
  margin-right: ${props => props.theme.size.indent11};
  color: ${props => props.theme.color.blackFont};
`;

export const DescriptionWrapper = styled.span`
  color:  ${props => props.theme.color.grey};
  font-size: ${props => props.theme.size.fontSize4};
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
  font-family: ${props => props.theme.font.mainFont};
  width: 50%;
  font-weight: ${props => props.theme.size.fontWeight4};
  font-size:  ${props => props.theme.size.fontSize11};
  font-style: normal;
  color: ${props => props.theme.color.blackFont};

  &:last-child {
    color: ${props => props.theme.color.primary};
  }
`;

export const LearnMoreButton = styled(Button)`
  background: ${props => props.theme.color.primary} !important;
  border-radius: 70% !important;
  height: 130px !important;
  width: 130px !important;
  font-size: ${props => props.theme.size.fontSize3} !important;
  border-color:  ${props => props.theme.color.white} !important;
  border-width: 10px !important;
  border-style: solid !important;
  position: absolute !important;
  margin: -70px 0 0 1155px !important;

  &:hover: {
    background: ${props => props.theme.color.primary} !important;
  }
`;

export const LearnMoreButtonText = styled.span`
  border-style: solid;
  border-radius: 70%;
  height: 90px;
  width: 104px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.size.fontSize2};
  border-width: 1px;
  border-color:  ${props => props.theme.size.helperBlue3};
  color:  ${props => props.theme.color.white};
`;
