import React from 'react';

import mainImage from '../../assets/heroBlockMainImage.png';
import {
  heroBlockCompanyName,
  heroBlockDescription,
  heroBlockTitle
} from '../../mock/data/heroBlock/data';

import {
  DescriptionWrapper,
  HeroBlockWrapper,
  ImageWrapper,
  InformationSection,
  LearnMoreButton,
  LearnMoreButtonText,
  MainImageSection,
  Title,
  TitleWrapper
} from './styled';

export const HeroBlock: React.FC = () => {
  return (
    <HeroBlockWrapper>
      <InformationSection>
        <TitleWrapper>
          <Title>{heroBlockTitle}</Title>
          <Title>{heroBlockCompanyName}</Title>
        </TitleWrapper>
        <DescriptionWrapper>{heroBlockDescription}</DescriptionWrapper>
      </InformationSection>
      <LearnMoreButton>
        <LearnMoreButtonText>Learn more</LearnMoreButtonText>
      </LearnMoreButton>
      <ImageWrapper>
        <MainImageSection src={mainImage} alt={'mainIage'} />
      </ImageWrapper>
    </HeroBlockWrapper>
  );
};
