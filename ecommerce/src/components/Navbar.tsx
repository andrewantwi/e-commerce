import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <NavLink to="categories" className="navbar-item">
          Men
        </NavLink>
        <NavLink to="categories" className="navbar-item">
          Women
        </NavLink>
        <NavLink to="categories" className="navbar-item">
          Kids
        </NavLink>
      </div>
      <div className="navbar-center">
        <NavLink to="categories" className="navbar-item">
          Ecommerce Buddy
        </NavLink>
      </div>
      <div className="navbar-end">
        <NavLink to="/" className="navbar-item">
          Home
        </NavLink>
        <NavLink to="categories" className="navbar-item">
          About
        </NavLink>
        <NavLink to="categories" className="navbar-item">
          Contact
        </NavLink>
        <div className="avatar avatar-ring avatar-md">
          <div className="dropdown-container">
            <div className="dropdown">
              <label
                className="btn btn-ghost flex cursor-pointer px-0"
                tabIndex={0}
              >
                <img
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt="avatar"
                />
              </label>
              <div className="dropdown-menu dropdown-menu-bottom-left">
                <NavLink to="categories" className="dropdown-item text-sm">
                  Profile
                </NavLink>
                <NavLink
                  to="categories"
                  tabIndex={-1}
                  className="dropdown-item text-sm"
                >
                  Account settings
                </NavLink>
                <NavLink
                  to="categories"
                  tabIndex={-1}
                  className="dropdown-item text-sm"
                >
                  Subscriptions
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
