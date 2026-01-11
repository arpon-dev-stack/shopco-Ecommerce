import { winterClothings, computerProducts, kitchenProducts } from "../../assets/assets";
// import { useEffect, useState, useCallback } from 'react';
import Carousel from "../../components/features/carousel/Carousel";
import FeaturedProduct from "../../components/FeaturedProduct";
import HighlightedProduct from "../../components/HighlightedProduct";

function LandingPage() {

  return (
    // <main className="pt-[104px] sm:pt-[88px] w-full m-0 p-0 h-auto relative -z-10">
    <main className="pt-[104px] sm:pt-[88px] w-full m-0 p-0 h-auto relative z-0 bg-amber-100">
      {/* Carousel */}
      <Carousel/>
      <div className="h-auto w-full relative z-20 -mt-[14vw] pt-4 px-2 backdrop-blur-[2px]">
        <div className="h-auto w-full bg-amber-100 rounded-t-sm px-2">
          {/* featured products */}
          <FeaturedProduct/>
          <HighlightedProduct products={winterClothings} categoryName="Winter Deals"/>
          <HighlightedProduct products={computerProducts} categoryName="Computers"/>
          <HighlightedProduct products={kitchenProducts} categoryName="Kitchen Accessories"/>
        </div>
      </div>
    </main>
  )
}

export default LandingPage