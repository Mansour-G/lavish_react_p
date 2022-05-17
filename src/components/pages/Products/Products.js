import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjFour, homeObjOne} from './Data';


function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
