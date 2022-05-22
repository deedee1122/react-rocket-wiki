import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark py-3 mb-5">
      <style jsx="true">
        {`
          .navbar a {
            text-decoration: none !important;
            color: white !important;
          }
        `}
      </style>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h4>Rocket Wiki</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink
              activeclassname="active"
              aria-current="page"
              className="nav-link"
              to="/"
            >
              Launches
            </NavLink>
            <NavLink className="nav-link " to="/rockets">
              Rockets
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
