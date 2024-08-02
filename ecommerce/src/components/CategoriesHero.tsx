import React from "react";
import img from "../assets/Daco_2432799.png";
import img2 from "../assets/Model-PNG.png";

interface CategoriesHeroProps {
  categoryType: string;
}

const CategoriesHero: React.FC<CategoriesHeroProps> = ({ categoryType }) => {
  const imageSrc = categoryType === "women" ? img2 : img;

  return (
    <main className="relative overflow-hidden h-screen">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
            {categoryType}
          </div>
        </div>
      </header>
      <div className="flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
            {categoryType == "men" ? (
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Take Pride In
                <span className="text-5xl sm:text-7xl">What you wear</span>
              </h1>
            ) : (
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Let your Beauty reflect
                <span className="text-5xl sm:text-7xl">in What you wear</span>
              </h1>
            )}
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src={imageSrc}
              className="max-w-xs md:max-w-sm m-auto"
              alt="Object"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoriesHero;
