import { banner, left, right } from "../../../assets/assets"
import { useState, useCallback, useRef, useEffect } from "react";

function Carousel() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const carouselRef = useRef()

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
        <div className={`transition-all z-10 select-none duration-500 h-auto m-0 p-0 w-full flex overflow-hidden relative`} ref={carouselRef}>
            {banner.map((project) => {
                return <img key={project.id} src={project.src} alt={project.alt} className="carouselitem object-center transition-all duration-1000 w-full shrink-0 h-auto" style={{ transform: `translateX(${currentProjectIndex}%)` }} />
            })}
            <div className="absolute w-full h-full flex justify-between items-center">
                <button className="active:-translate-x-1 hover:-translate-x-0.5 transition-all duration-75" onClick={handleLeft}><img src={left} className="w-11 h-11" alt="leftbutton" /></button>
                <button className="active:translate-x-1 hover:translate-x-0.5 transition-all duration-75" onClick={handleRight}><img src={right} className="w-11 h-11" alt="rightbutton" /></button>
            </div>
        </div>
    )
}

export default Carousel;