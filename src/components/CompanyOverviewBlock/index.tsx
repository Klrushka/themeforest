import React from 'react';

import {
  clientLogos,
  overviewDescription,
  overviewNumbers,
  overviewTitle
} from '../../mock/data/overviewBlock/data';

import {
  ClientLogo,
  ClientsLogosSection,
  CompanyOverviewSectonWrapper,
  OverviewDescription,
  OverviewItem,
  OverviewLabel,
  OverviewNumber,
  OverviewNumbers,
  OverviewSection,
  Title
} from './styled';

export const CompanyOverviewBlock: React.FC = () => {
  return (
    <CompanyOverviewSectonWrapper>
      <Title>{overviewTitle}</Title>
      <OverviewSection>
        <OverviewNumbers>
          {overviewNumbers.map(({ number, label }) => (
            <OverviewItem key={label}>
              <OverviewNumber>{number}</OverviewNumber>
              <OverviewLabel>{label}</OverviewLabel>
            </OverviewItem>
          ))}
        </OverviewNumbers>
        <OverviewDescription>{overviewDescription}</OverviewDescription>
      </OverviewSection>
      <ClientsLogosSection>
          {clientLogos.map(({ logo, key }) => (
            <ClientLogo key={key}>
              <img src={logo} alt={key} />
            </ClientLogo>
          ))}
        </ClientsLogosSection>
    </CompanyOverviewSectonWrapper>
  );
};
