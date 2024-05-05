import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  const getNavItemClass = (pathname) => {
    return location.pathname === pathname ? "navbar-item current-page" : "navbar-item";
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./Images/logo.png" alt="Logo" />
      </div>
      <div className="navbar-content">
        <Link to="/Dashboard" className={getNavItemClass("/Dashboard")} id="mainFunction">
          <img src="./Images/Dashboard.png" alt="Add Icon" />
          <p>Dashboard</p>
        </Link>

        <Link to="/History" className={getNavItemClass("/History")}>
          <img src="./Images/History.png" alt="Home Icon" />
          <p>History</p>
        </Link>

        <Link to="/Profile" className={getNavItemClass("/Profile")}>
          <img src="./Images/Profile.png" alt="Profile Icon" />
          <p>Profile</p>
        </Link>

        <Link to="/" className={getNavItemClass("/")} id="logout">
          <img src="./Images/logout.png" alt="Logout Icon" />
          <p>Log out</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
