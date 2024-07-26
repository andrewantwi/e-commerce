import { NavLink } from "react-router-dom";
import img from "../assets/fast-fashion2.jpeg";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Welcome to Our Awesome Website
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover amazing features and services that await you.
        </p>
        <NavLink
          to="#"
          className=" py-2 px-6 text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:border"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
