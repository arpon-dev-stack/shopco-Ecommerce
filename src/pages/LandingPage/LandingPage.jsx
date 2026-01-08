import { banner, left, right, products, featured } from "../../assets/assets";
import { useEffect, useState, useCallback } from 'react';

function LandingPage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

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
    // <main className="pt-[104px] sm:pt-[88px] w-full m-0 p-0 h-auto relative -z-10">
    <main className="pt-[104px] sm:pt-[88px] w-full m-0 p-0 h-auto relative z-0 bg-amber-100">
      <div className={`transition-all z-10 select-none duration-500 h-auto m-0 p-0 w-full flex overflow-hidden relative`}>
        {banner.map((project) => {
          return <img key={project.id} src={project.src} alt={project.alt} className="object-center transition-all duration-1000 w-full shrink-0 h-auto" style={{ transform: `translateX(${currentProjectIndex}%)` }} />
        })}
        <div className="absolute w-full h-full flex justify-between items-center">
          <button className="active:-translate-x-1 hover:-translate-x-0.5 transition-all duration-75" onClick={handleLeft}><img src={left} className="w-11 h-11" alt="leftbutton" /></button>
          <button className="active:translate-x-1 hover:translate-x-0.5 transition-all duration-75" onClick={handleRight}><img src={right} className="w-11 h-11" alt="rightbutton" /></button>
        </div>
      </div>
      <div className="h-auto w-full relative z-20 -mt-[14vw] pt-4 px-2 backdrop-blur-[2px]">
        <div className="h-auto w-full bg-amber-100 rounded-t-sm px-2">
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-center mt-2 font-semibold text-3xl">Featured Products</h1>
            <div className="flex sm:flex-nowrap flex-wrap w-full mt-2 sm:justify-center gap-2 gap-y-0">
              {
                featured.map(item => {
                  return (
                    <div className="flex flex-col items-center sm:basis-[100px] basis-20">
                      <img src={item.src} alt={item.alt} className="w-14 sm:w-full h-auto rounded-full" key={item.id} />
                      <h1 className="sm:text-xl inline text-lg font-normal text-center">{item.name}</h1>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {
            products.map(catagory => {
              console.log(catagory.categoryName)
              return (
                <div key={catagory.id} className="flex flex-col mt-1 items-start w-full">
                  <h1 className="text-center mt-1 font-semibold text-3xl">{catagory.categoryName}</h1>
                  <div className="flex sm:flex-nowrap flex-wrap mt-3 gap-4 w-full">
                    {catagory.products.map(product => {
                      return (
                        <div className="overflow-hidden border w-1/2 max-w-40 max-h-40">
                          <img src={product.src} key={product.id} className="w-full h-auto" alt={product.alt} />
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default LandingPage