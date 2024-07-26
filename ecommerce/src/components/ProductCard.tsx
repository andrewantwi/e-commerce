const ProductCard = ({
  imageSrc,
  brand,
  productName,
  price,
  originalPrice,
  onClick,
}: {
  imageSrc: string;
  brand: string;
  productName: string;
  price: number;
  originalPrice: number;
  onClick: () => void;
}) => {
  return (
    <div
      className="w-72 border shadow-md duration-100 hover:scale-105 hover:shadow-xl p-2"
      onClick={onClick}
    >
      <div>
        <img src={imageSrc} alt="Product" className="h-52 w-72 object-cover" />
        <div className="px-4 py-3 w-72">
          <span className="text-white mr-3 uppercase text-xs">{brand}</span>
          <p className="text-lg font-bold text-white truncate block capitalize">
            {productName}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-white cursor-auto my-3">
              ${price}
            </p>
            <del>
              <p className="text-sm text-white cursor-auto ml-2">
                ${originalPrice}
              </p>
            </del>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
