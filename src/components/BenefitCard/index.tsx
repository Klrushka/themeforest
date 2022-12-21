import React from 'react';

import { BenefitCardWrapper, CardIcon, CardText, CardTitle } from './styled';

export const BenefitCard: React.FC<{
  icon: string
  title: string
  description: string
}> = ({ icon, title, description }) => {
  return (
    <BenefitCardWrapper>
      <CardIcon src={icon}/>
      <CardTitle>{title}</CardTitle>
      <CardText>{description}</CardText>
    </BenefitCardWrapper>
  );
};
