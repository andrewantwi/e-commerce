import { useState, useEffect } from "react";
import { tabs } from "../data/data";
import { useMediaQuery } from "react-responsive";
import t1 from "../assets/trouser1.webp";
import t2 from "../assets/trouser2.jpg";
import t3 from "../assets/trouser3.jpg";
import t4 from "../assets/trouser4.webp";
import t5 from "../assets/trouser5.webp";
import t6 from "../assets/t6.webp";
import t7 from "../assets/t7.webp";
import t8 from "../assets/t7.jpg";
import t9 from "../assets/t9.webp";
import t10 from "../assets/t10.jpg";

import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.webp";
import w4 from "../assets/w4.webp";
import w5 from "../assets/w5.jpg";
import w6 from "../assets/w6.jpg";
import w7 from "../assets/w7.jpg";
import w8 from "../assets/w8.jpeg";
import w9 from "../assets/w9.jpeg";
import w10 from "../assets/w10.webp";

import s1 from "../assets/s1.webp";
import s2 from "../assets/s2.webp";
import s3 from "../assets/s3.webp";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.webp";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.webp";
import s9 from "../assets/s9.webp";
import s10 from "../assets/s10.webp";

import sh1 from "../assets/sh1.jpg";
import sh2 from "../assets/sh2.webp";
import sh3 from "../assets/sh3.jpg";
import sh4 from "../assets/sh4.jpg";
import sh5 from "../assets/sh5.jpg";
import sh6 from "../assets/sh6.jpeg";
import sh7 from "../assets/sh7.webp";
import sh8 from "../assets/sh8.jpeg";
import sh9 from "../assets/sh9.jpg";
import sh10 from "../assets/sh10.webp";

import shw1 from "../assets/shw1.jpeg";
import shw2 from "../assets/shw2.webp";
import shw3 from "../assets/shw3.jpg";
import shw4 from "../assets/shw4.jpg";
import shw5 from "../assets/shw5.jpeg";
import shw6 from "../assets/shw6.webp";
import shw7 from "../assets/shw8.jpg";
import shw8 from "../assets/shw7.jpg";
import shw9 from "../assets/shw9.jpg";
import shw10 from "../assets/shw10.jpg";

import ww1 from "../assets/ww1.jpg";
import ww2 from "../assets/ww2.jpg";
import ww3 from "../assets/ww3.jpg";
import ww4 from "../assets/ww4.jpg";
import ww5 from "../assets/ww5.webp";
import ww6 from "../assets/ww6.jpg";
import ww7 from "../assets/ww7.webp";
import ww8 from "../assets/ww8.webp";
import ww9 from "../assets/ww9.jpeg";
import ww10 from "../assets/ww10.webp";

import tw1 from "../assets/tw1.jpg";
import tw2 from "../assets/tw2.webp";
import tw3 from "../assets/tw3.webp";
import tw4 from "../assets/tw4.png";
import tw5 from "../assets/tw5.webp";
import tw6 from "../assets/tw6.webp";
import tw7 from "../assets/tw7.jpg";
import tw8 from "../assets/tw8.webp";
import tw9 from "../assets/tw9.webp";
import tw10 from "../assets/tw10.jpg";

import Tabs from "./Tabs";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";

interface CategoriesHeroProps {
  categoryType: string;
}
export interface Product {
  imageSrc: string;
  brand: string;
  productName: string;
  price: number;
  originalPrice: number;
  available: boolean;
}

const Categories2: React.FC<CategoriesHeroProps> = ({ categoryType }) => {
  const productsMen: Product[] = [
    {
      imageSrc: t1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: t10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];
  const productsMenShirt: Product[] = [
    {
      imageSrc: s1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: s10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];
  const productsWomenTrousers: Product[] = [
    {
      imageSrc: tw1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: tw10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];

  const productsWomenWatches: Product[] = [
    {
      imageSrc: ww1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: ww10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];
  const productsMenWatches: Product[] = [
    {
      imageSrc: w1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: w10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];
  const productsMenShoes: Product[] = [
    {
      imageSrc: sh1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: sh10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];
  const productsWomenShoes: Product[] = [
    {
      imageSrc: shw1,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw2,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw3,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw4,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw5,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw6,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw7,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw8,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw9,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
    {
      imageSrc: shw10,
      brand: "Brand",
      productName: "Product Name",
      price: 149,
      originalPrice: 199,
      available: true,
    },
  ];

  const isSmallScreen = useMediaQuery({ query: "(max-width: 639px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 640px) and (max-width: 767px)",
  });
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });

  const productsPerPage = isSmallScreen
    ? 4
    : isMediumScreen
    ? 6
    : isLargeScreen
    ? 8
    : 10;

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [currentProducts, setCurrentProducts] =
    useState<Product[]>(productsMen);

  useEffect(() => {
    console.log(`Current Tab: ${activeTab}`); // Log current tab for debugging
    setCurrentPage(1);
    if (activeTab === "Watches" && categoryType === "men") {
      setCurrentProducts(productsMenWatches);
    } else if (activeTab === "Trousers" && categoryType === "men") {
      setCurrentProducts(productsMen);
    } else if (activeTab === "Trousers" && categoryType === "women") {
      setCurrentProducts(productsWomenTrousers);
    } else if (activeTab === "Watches" && categoryType === "women") {
      console.log(categoryType);
      setCurrentProducts(productsWomenWatches);
    } else if (activeTab === "shirts" && categoryType === "men") {
      console.log(categoryType);
      setCurrentProducts(productsMenShirt);
    } else if (activeTab === "Shoes" && categoryType === "men") {
      console.log(categoryType);
      setCurrentProducts(productsMenShoes);
    } else if (activeTab === "Shoes" && categoryType === "women") {
      console.log(categoryType);
      setCurrentProducts(productsWomenShoes);
    }
  }, [activeTab, categoryType]);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(currentProducts.length / productsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    const maxPage = Math.ceil(currentProducts.length / productsPerPage);
    setCurrentPage(maxPage);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const displayedProducts = currentProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        product={selectedProduct}
      />

      <div className="flex items-center justify-around my-5">
        <Tabs tabs={tabs} onTabClick={setActiveTab} activeTab={activeTab} />
      </div>
      <section
        id="Projects"
        className="w-fit mx-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5"
      >
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            onClick={() => handleCardClick(product)}
          />
        ))}
      </section>
      <div className="flex w-full justify-center p-10">
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black"
              onClick={handleFirstPage}
            >
              &lt;&lt;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black"
              onClick={handlePrevPage}
            >
              &lt;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button className="px-4 hover:bg-white hover:text-black">
              {currentPage}
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black"
              onClick={handleNextPage}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black"
              onClick={handleLastPage}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories2;
