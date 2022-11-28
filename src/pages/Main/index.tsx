import React from 'react';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HeroBlock } from '../../components/HeroBlock';

export const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBlock />
      <Footer />
    </>
  );
};
