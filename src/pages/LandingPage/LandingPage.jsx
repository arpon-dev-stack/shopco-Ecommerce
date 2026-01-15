import { winterClothings, computerProducts, kitchenProducts, fashionProducts, electronicsProducts, clothings, travellerChoices, comboDeals } from "../../assets/assets";
import Carousel from "../../components/features/carousel/Carousel";
import FeaturedProduct from "../../components/FeaturedProduct";
import HighlightedProduct from "../../components/HighlightedProduct";
import SpecialProduct from "../../components/SpecialProduct";
import ProductFallback from "../../components/ProductFallback";
import { useState, useCallback, Suspense, lazy } from "react";
import { left, right } from "../../../src/assets/assets"


const SpecialProductLoad = lazy(() => delayForDemo(import('../../components/SpecialProduct')));

function delayForDemo(promise) {
  return new Promise(resolve => {
    setTimeout(resolve, 10000);
  }).then(() => promise);
}

function LandingPage() {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  // const carouselRef = useRef()

  const handleLeft = useCallback(() => {
    if (currentProjectIndex === 0) {
      setCurrentProjectIndex(-200);
    } else {
      setCurrentProjectIndex(prev => prev + 100);
    }
  }, [currentProjectIndex])

  const handleRight = useCallback(() => {
    if (currentProjectIndex === -200) {
      setCurrentProjectIndex(0);
    } else {
      setCurrentProjectIndex(prev => prev - 100);
    }
  }, [currentProjectIndex])


  return (
    <>
      <main className="ptw-full m-0 p-0 h-auto relative z-0 bg-amber-50">
        {/* Carousel */}
        <Carousel />
        <div className="h-auto w-full relative z-20 -mt-32 pt-4 items  backdrop-blur-[2px]">
          <div className="h-auto w-full px-4 overflow-hidden">
            {/* featured products */}
            <FeaturedProduct />
            <div className="grid sm:grid-cols-4 grid-cols-2 gap-4 mt-4">
              <HighlightedProduct products={winterClothings} categoryName="Winter" />
              <HighlightedProduct products={computerProducts} categoryName="Computers" />
              <HighlightedProduct products={kitchenProducts} categoryName="Kitchen" />
              <HighlightedProduct products={comboDeals} categoryName="Combo" />
              <HighlightedProduct products={fashionProducts} categoryName="Treands" />
              <HighlightedProduct products={travellerChoices} categoryName="Travells" />
              <HighlightedProduct products={electronicsProducts} categoryName="Electronics" />
              <HighlightedProduct products={clothings} categoryName="Clothings" />
            </div>
            <div className="relative my-2 ">
              <div className="mb-2 text-3xl font-bold">Offer you can't refuge</div>
              {/* <div className="absolute w-full h-full flex justify-between items-center">
                <button className="active:-translate-x-1 hover:-translate-x-0.5 outline-none transition-all duration-75" onClick={handleLeft}><img src={left} className="w-11 bg-black h-11" alt="leftbutton" /></button>
                <button className="active:translate-x-1 hover:translate-x-0.5 transition-all outline-none duration-75" onClick={handleRight}><img src={right} className="bg-black w-11 h-11" alt="rightbutton" /></button>
              </div> */}
              <div className="overflow-y-hidden overflow-x-auto flex gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
                <Suspense fallback={<ProductFallback />}>
                  <SpecialProductLoad currentIndex={currentProjectIndex} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LandingPage