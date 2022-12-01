import React from 'react';

import {
  benefitsDescription,
  benefitsTitle,
  cardsInfo1,
  cardsInfo2
} from '../../mock/data/benefitsBlock/data';
import { BenefitCard } from '../BenefitCard';

import {
  BenefitsBlockWrapper,
  CardsBlock,
  DescriptionBlock,
  DescriptionInfo,
  Title
} from './style';

export const BenefitsBlock: React.FC = () => {
  return (
    <BenefitsBlockWrapper>
      <DescriptionBlock>
        <Title>{benefitsTitle}</Title>
        <DescriptionInfo>{benefitsDescription}</DescriptionInfo>
      </DescriptionBlock>
      <CardsBlock>
        {cardsInfo1.map(({ icon, title, description }) => (
          <BenefitCard
            icon={icon}
            title={title}
            description={description}
            key={title}
          />
        ))}
      </CardsBlock>
      <CardsBlock>
        {cardsInfo2.map(({ icon, title, description }) => (
          <BenefitCard
            icon={icon}
            title={title}
            description={description}
            key={title}
          />
        ))}
      </CardsBlock>
    </BenefitsBlockWrapper>
  );
};
