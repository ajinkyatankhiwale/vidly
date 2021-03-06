import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">Vidly</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/movies">
            Movies
          </Link>
          <Link className="nav-item nav-link" to="/customer">
            Customers
          </Link>
          <Link className="nav-item nav-link" to="/rentals">
            Rental
          </Link>
          <Link className="nav-item nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-item nav-link" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
