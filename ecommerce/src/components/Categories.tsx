import React from "react";

const Categories: React.FC = () => {
  return (
    <div>
      <div className="text-start p-10">
        <h1 className="font-bold text-4xl mb-4">Categories</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3 p-10">
        <div className="relative rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Hanging Planters"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Hanging Planters
          </p>
        </div>

        <div className="relative rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Planter Stand with Pots"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Planter Stand with Pots
          </p>
        </div>

        <div className="relative rounded overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Watering Cans"
            className="w-full"
          />
          <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            Watering Cans
          </p>
        </div>

        {/* Repeat the above structure for the remaining items */}
      </div>
    </div>
  );
};

export default Categories;
