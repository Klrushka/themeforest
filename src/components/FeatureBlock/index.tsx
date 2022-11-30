import React from 'react';

import featureImg from '../../assets/featureImg.png';
import {
  discoverInfo,
  discoverMoreButton,
  learnMoreButton,
  learnText,
  learnTitle,
  titleAccentWord,
  titleFirstPart,
  titlSecondPart
} from '../../mock/data/feature-block/data';

import {
  AccentWord,
  DiscoverBlock,
  DiscoverInfo,
  DiscoverInfoBlock,
  DiscoverTitleBlock,
  FeaturBlockWrapper,
  ImageBlock,
  LearnBlock,
  LearnInfoBlock,
  LearnText,
  LearnTitleBlock,
  MoreButton
} from './style';

export const FeatureBlock: React.FC = () => {
  return (
    <FeaturBlockWrapper>
      <DiscoverBlock>
        <DiscoverTitleBlock>
          {titleFirstPart} <AccentWord> {titleAccentWord} </AccentWord>{' '}
          {titlSecondPart}
        </DiscoverTitleBlock>
        <DiscoverInfoBlock>
          <DiscoverInfo>
            {discoverInfo}
          </DiscoverInfo>
          <MoreButton variant={'contained'}>{discoverMoreButton}</MoreButton>
        </DiscoverInfoBlock>
      </DiscoverBlock>
      <LearnBlock>
        <ImageBlock src={featureImg} alt={'featureImg'} />
        <LearnInfoBlock>
          <LearnTitleBlock>{learnTitle}</LearnTitleBlock>
          <LearnText>
            {learnText}
          </LearnText>
          <MoreButton variant={'contained'}>{learnMoreButton}</MoreButton>
        </LearnInfoBlock>
      </LearnBlock>
    </FeaturBlockWrapper>
  );
};
