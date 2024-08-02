import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [burgerDropdownOpen, setBurgerDropdownOpen] = useState(false);
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <div className="flex flex-wrap place-items-center">
      <section className="relative mx-auto">
        <nav className="flex justify-between text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <NavLink className="text-3xl font-bold font-heading" to="/">
              {/* <span>
                <img
                  src="https://www.svgrepo.com/show/452102/slack.svg"
                  alt="AI Logo"
                  width="54"
                  height="54"
                  className="w-16"
                />
              </span> */}
            </NavLink>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <NavLink className="hover:text-gray-200" to="/">
                  Home
                </NavLink>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="hover:text-gray-200 focus:outline-none">
                  Category
                </button>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-black">
                    <li>
                      <NavLink
                        className="block px-4 py-2 hover:bg-gray-200"
                        to="/categories/men"
                      >
                        Men
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="block px-4 py-2 hover:bg-gray-200"
                        to="/categories/women"
                      >
                        Women
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="block px-4 py-2 hover:bg-gray-200"
                        to="/categories/kids"
                      >
                        Kids
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <NavLink className="hover:text-gray-200" to="#">
                  Collections
                </NavLink>
              </li>
              <li>
                <NavLink className="hover:text-gray-200" to="#">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <NavLink className="hover:text-gray-200" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </NavLink>
              <NavLink className="flex items-center hover:text-gray-200" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span>
              </NavLink>
              <NavLink className="flex items-center hover:text-gray-200" to="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
          <div className="relative mt-8">
            <div
              className="navbar-burger self-center mr-12 xl:hidden"
              onClick={() => setBurgerDropdownOpen(!burgerDropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            {burgerDropdownOpen && (
              <ul className="absolute right-0 mt-2 py-2 w-48 rounded-lg shadow-xl text-white z-10">
                <li
                  className="relative"
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                >
                  <button className="block px-4 py-2 w-full text-left hover:bg-gray-900 focus:outline-none">
                    Category
                  </button>
                  {categoryDropdownOpen && (
                    <ul className="pl-4">
                      <li>
                        <NavLink
                          className="block px-4 py-2 hover:bg-gray-900"
                          to="/categories/men"
                        >
                          Men
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="block px-4 py-2 hover:bg-gray-200"
                          to="/categories/women"
                        >
                          Women
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="block px-4 py-2 hover:bg-gray-200"
                          to="/categories/kids"
                        >
                          Kids
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink className="block px-4 py-2 hover:bg-gray-200" to="#">
                    Collections
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block px-4 py-2 hover:bg-gray-200" to="#">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </section>
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10"></div>
    </div>
  );
};

export default Navbar;
