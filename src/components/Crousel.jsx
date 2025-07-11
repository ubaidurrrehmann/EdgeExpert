import React, { useState, useEffect } from "react";
import { carousel_items } from "./CrouselContent";
import logo from "../assets/images/logo.png";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatingIndex, setAnimatingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = ((prev) => {
        const next = (prev + 1) % carousel_items.length;
        setAnimatingIndex(next);
        return next;
      })(currentIndex);
      setCurrentIndex(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full md:h-[700px] h-[250px] overflow-hidden font-inter">
      {carousel_items.map((item, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 transition-all duration-1000 ease-in-out
            ${
              index === animatingIndex
                ? "animate-slide-zoom-fade"
                : "opacity-0 z-0"
            }
          `}
        >
          <img src={logo} alt="Logo" className="absolute sm:top-20 sm:left-6 top-22 left-8 sm:h-52 h-16 object-contain" />
          {/* <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover rounded-xl"
          /> */}
          <img
             src={item.image}
             alt={item.alt}
             className={`w-full h-full =object-cover =rounded-xl transition-all duration-1000
             ${index === animatingIndex ? "animate-zoom-in-out" : ""}
            `}
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-5">
            {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAE510] via-[#9FCC8B] to-[#6EBADB] text-[36px] font-bold drop-shadow"> */}
            <h1 className="text-black sm:text-[36px] text-[24px] font-bold drop-shadow">
              {item.title}
            </h1>
            <p className="text-[16px] text-[#475569] max-w-md">
              {item.description}
            </p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="flex justify-center space-x-2 absolute bottom-7">
        {carousel_items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAnimatingIndex(index);
            }}
            className={`w-5 h-[3px] rounded-full transition-all duration-300 ${
              // index === currentIndex ? "bg-[#0F172A] scale-110" : "bg-gray-400"
              index === currentIndex ? "bg-gray-600 scale-110" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
