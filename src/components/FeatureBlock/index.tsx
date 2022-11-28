import React from 'react';

import {
  DiscoverBlock,
  DiscoverInfo,
  DiscoverInfoBlock,
  DiscoverMoreButton,
  DiscoverTitleBlock,
  FeaturBlockWrapper,
  LearnBlock
} from './style';

export const FeatureBlock: React.FC = () => {
  return (
    <FeaturBlockWrapper>
      <DiscoverBlock>
        <DiscoverTitleBlock>
          The newest business analytics platform
        </DiscoverTitleBlock>
        <DiscoverInfoBlock>
          <DiscoverInfo>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </DiscoverInfo>
          <DiscoverMoreButton variant={'contained'}>
              Discover more
            </DiscoverMoreButton>
        </DiscoverInfoBlock>
      </DiscoverBlock>
      <LearnBlock></LearnBlock>
    </FeaturBlockWrapper>
  );
};
