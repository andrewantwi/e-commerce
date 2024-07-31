import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <NavLink to="categories/men" className="navbar-item">
          Men
        </NavLink>
        <NavLink to="categories/women" className="navbar-item">
          Women
        </NavLink>
        <NavLink to="categories/kids" className="navbar-item">
          Kids
        </NavLink>
      </div>
      <div className="navbar-center ">
        <NavLink to="/" className="navbar-item">
          Ecommerce Buddy
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
