import React from 'react';

import { CompanyOverviewBlock } from '../../components/CompanyOverviewBlock';
import { FeatureBlock } from '../../components/FeatureBlock';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroBlock } from '../../components/HeroBlock';

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBlock />
      <FeatureBlock />
      <CompanyOverviewBlock />
      <Footer />
    </>
  );
};
