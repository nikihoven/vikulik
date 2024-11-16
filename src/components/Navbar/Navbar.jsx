import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <>


        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              Shop-co
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navmenu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    On Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Brands
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="container-fluid bg-dark text-white text-center py-2">
          <p className="sale_top_text m-0">
            Sign up and get 20% off to your first order. Sign Up Now
          </p>
        </div>
    </>
  );
}

export default Navbar;
