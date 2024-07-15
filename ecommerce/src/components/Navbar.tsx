const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="navbar-item">Men</a>
        <a className="navbar-item">Women</a>
        <a className="navbar-item">Kids</a>
      </div>
      <div className="navbar-center">
        <a className="navbar-item">Ecommerce Buddy</a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">About</a>
        <a className="navbar-item">Contact</a>
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
                <a className="dropdown-item text-sm">Profile</a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Account settings
                </a>
                <a tabIndex={-1} className="dropdown-item text-sm">
                  Subscriptions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
