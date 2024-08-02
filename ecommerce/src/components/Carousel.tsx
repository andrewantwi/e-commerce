import React, { useRef, useState } from "react";
import ProductCard from "./Card";
import ww9 from "../assets/ww9.jpeg";
import ww10 from "../assets/ww10.webp";
import sh9 from "../assets/sh9.jpg";
import tw1 from "../assets/tw1.jpg";
import tw2 from "../assets/tw2.webp";
import w4 from "../assets/w4.webp";
import w5 from "../assets/w5.jpg";
import sh3 from "../assets/sh3.jpg";
import sh4 from "../assets/sh4.jpg";
import Modal from "./Modal2";
const Carousel: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<{
    imageSrc: string;
    productName: string;
    price: number;
    available: boolean;
  } | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

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
  const handleCardClick = (product: {
    imageSrc: string;
    productName: string;
    price: number;
    available: boolean;
  }) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const products = [
    {
      imageSrc: w5,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: w4,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: sh4,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: sh9,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: ww9,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: ww10,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: sh3,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: tw1,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
    {
      imageSrc: tw2,
      productName: "Nike Air MX Super 2500 - Red",
      price: 449,
      available: true,
    },
  ];

  return (
    <div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        product={currentProduct}
      />
      <div className="text-start p-10">
        <h1 className="font-bold text-4xl mb-4">New Arrivals</h1>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            onClick={scrollLeft}
            className="p-2 border shadow-md hover:bg-white hover:text-black"
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
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.imageSrc}
                onClick={() => handleCardClick(product)}
              />
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            onClick={scrollRight}
            className="p-2 border shadow-md hover:bg-white hover:text-black"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
