import React, { useRef, useState } from "react";
import ProductCard from "./Card";

const Carousel: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className="text-start p-10">
        <h1 className="font-bold text-4xl mb-4">New Arrivals</h1>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={scrollLeft}
            className="bg-gray-400 p-2 rounded-full shadow-md hover:bg-gray-300"
          >
            &lt;
          </button>
        </div>

        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-scroll no-scrollbar"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <div className="flex">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={scrollRight}
            className="bg-gray-400 p-2 rounded-full shadow-md hover:bg-gray-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
