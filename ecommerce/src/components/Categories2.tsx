import { useState } from "react";
import { products, tabs } from "../data/data";
import { useMediaQuery } from "react-responsive";

import Tabs from "./Tabs";
import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";

const Categories2 = () => {
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
  const [selectedProduct, setSelectedProduct] = useState<{
    imageSrc: string;
    brand: string;
    productName: string;
    price: number;
    originalPrice: number;
  } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleCardClick = (product: {
    imageSrc: string;
    brand: string;
    productName: string;
    price: number;
    originalPrice: number;
  }) => {
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
    const maxPage = Math.ceil(products.length / productsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPage));
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    const maxPage = Math.ceil(products.length / productsPerPage);
    setCurrentPage(maxPage);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = products.slice(
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
        <Tabs tabs={tabs} />
      </div>
      <section
        id="Projects"
        className={`w-fit mx-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-10 mt-10 mb-5`}
      >
        {currentProducts.map((product, index) => (
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
              className="px-4 hover:bg-white hover:text-black "
              onClick={handleFirstPage}
            >
              &lt;&lt;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black "
              onClick={handlePrevPage}
            >
              &lt;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button className="px-4 hover:bg-white hover:text-black ">
              {currentPage}
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black "
              onClick={handleNextPage}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div className="border p-[2px]">
            <button
              className="px-4 hover:bg-white hover:text-black "
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
