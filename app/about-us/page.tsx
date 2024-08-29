import { BreadCrumb, Footer, Navbar } from '@/components/modules';
import { AboutCoffee } from '@/components/templates';
import React from 'react';

const page = () => {
  return (
    <>
      <Navbar />
      <BreadCrumb route='درباره ما' />
      <AboutCoffee />
      <Footer />

    </>
  );
}

export default page;
