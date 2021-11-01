import React from 'react';
import Banner from '../Banner/Banner';
import CoxBazar from '../CoxBazar/CoxBazar';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <CoxBazar></CoxBazar>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;