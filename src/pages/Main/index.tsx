import React from 'react';

import { BenefitsBlock } from '../../components/BenefitsBlock';
import { BlogBlock } from '../../components/BlogBlock';
import { CompanyOverviewBlock } from '../../components/CompanyOverviewBlock';
import { FeatureBlock } from '../../components/FeatureBlock';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroBlock } from '../../components/HeroBlock';
import { PricingBlock } from '../../components/PricingBlock';
import { TestimonialsBlock } from '../../components/TestimonialBlock';

// TODO childrens
export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBlock />
      <FeatureBlock />
      <CompanyOverviewBlock />
      <BenefitsBlock />
      <TestimonialsBlock />
      <PricingBlock />
      <BlogBlock />
      <Footer />
    </>
  );
};
