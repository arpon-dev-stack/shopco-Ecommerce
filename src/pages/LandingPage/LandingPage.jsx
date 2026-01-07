import { banner } from "../../assets/assets";
import {useEffect} from 'react';

function LandingPage({scrollStart, setScrollStart}) {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setScrollStart(true) : setScrollStart(false);
      
      return () => {
        window.removeEventListener("scroll", () => {
          setScrollStart(false)
        })
      }
    })
  })

  console.log(scrollStart);
  return (
    <main className="pt-[104px] sm:pt-[88px] w-full m-0 p-0 h-auto relative -z-10">
      <div className={`transition-all duration-500 h-auto m-0 p-0 w-full flex justify-center overflow-hidden`}>
        {banner.map((project) => {
          console.log(project.id);
          return <img src={project.src} alt={project.alt} className="object-center w-full shrink-0 h-auto" />
        })}
      </div>
      <div className="h-screen w-full bg-blue-500">
        <div className="h-full w-full bg-blue-950"></div>
      </div>
    </main>
  )
}

export default LandingPage