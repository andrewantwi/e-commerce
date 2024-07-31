import React from "react";
import { NavLink } from "react-router-dom";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import kids from "../assets/kids.webp";

interface Category {
  title: string;
  imageUrl: string;
  link: string;
}

const categories: Category[] = [
  {
    link: "categories/men",
    title: "Men",
    imageUrl: men,
  },
  {
    link: "categories/women",
    title: "Women",
    imageUrl: women,
  },
  {
    link: "categories/kids",
    title: "Kids",
    imageUrl: kids,
  },
];

const Categories: React.FC = () => {
  return (
    <div>
      <div className="text-start p-10">
        <h1 className="font-bold text-4xl mb-4">Categories</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3 p-10">
        {categories.map((category, index) => (
          <NavLink
            to={category.link}
            key={index}
            className="relative rounded overflow-hidden"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full"
            />
            <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
              {category.title}
            </p>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
