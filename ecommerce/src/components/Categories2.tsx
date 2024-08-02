import { useState, useEffect } from "react";
import { tabs } from "../data/data";
import { useMediaQuery } from "react-responsive";
import {
  productsMen,
  productsMenShirt,
  productsMenShoes,
  productsMenWatches,
  productsWomenShirts,
  productsWomenShoes,
  productsWomenTrousers,
  productsWomenWatches,
} from "../data/data";
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
    } else if (activeTab === "Shirts" && categoryType === "men") {
      console.log(categoryType);
      setCurrentProducts(productsMenShirt);
    } else if (activeTab === "Shoes" && categoryType === "men") {
      console.log(categoryType);
      setCurrentProducts(productsMenShoes);
    } else if (activeTab === "Shoes" && categoryType === "women") {
      console.log(categoryType);
      setCurrentProducts(productsWomenShoes);
    } else if (activeTab === "Shirts" && categoryType === "women") {
      console.log(categoryType);
      setCurrentProducts(productsWomenShirts);
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
