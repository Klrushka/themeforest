import React from 'react';

import {
  Benefit,
  BenefitsList,
  BuyButton,
  PerBlock,
  Price,
  PriceBlock,
  PriceCardWrapper,
  RadioButton,
  RButton,
  Title
} from './styled';
import { PriceCardTypes } from './types';

export const PriceCard: React.FC<PriceCardTypes> = ({ benefits, buttonText, per, price, title, themed }) => {
  return (
    <PriceCardWrapper>
      <Title>{title}</Title>
      <PriceBlock>
        <Price>{price}</Price>
        <PerBlock>
          {per.map((per, index) => (
            <div key={index}>
              <RButton type={'radio'} name={title} defaultChecked={true}/>
              <RadioButton>
                {per}
              </RadioButton>
            </div>
          ))}
        </PerBlock>
      </PriceBlock>
      <BuyButton variant={'contained'}>{buttonText}</BuyButton>
      <BenefitsList>
        {benefits.map((benefit) => (
          <Benefit key={benefit}>
            {benefit}
          </Benefit>
        ))}
      </BenefitsList>
    </PriceCardWrapper>
  );
};
