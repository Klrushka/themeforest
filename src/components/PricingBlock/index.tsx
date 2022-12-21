import React from 'react';

import { priceTitle, pricingCards } from '../../mock/data/pricingBlock/data';
import { PriceCard } from '../PriceCard';

import { PriceCards, PricingBlockContent, PricingBlockWrapper, Title } from './styled';

export const PricingBlock: React.FC = () => {
  return (
    <PricingBlockWrapper>
      <PricingBlockContent>
      <Title>{priceTitle}</Title>
      <PriceCards>
        {pricingCards.map(({ benefits, buttonText, per, price, title, themed }) => (
          <PriceCard
            benefits={benefits}
            buttonText={buttonText}
            per={per}
            price={price}
            title={title}
            themed={themed}
            key={title}
          />
        ))}
      </PriceCards>
      </PricingBlockContent>
    </PricingBlockWrapper>
  );
};
