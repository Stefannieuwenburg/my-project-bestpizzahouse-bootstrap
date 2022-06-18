import React from "react";
import "../styles/Navbar.module.css";
import { Link } from "react-scroll";


const HomeNavbar = () => {
  return (
      <>
          <nav className="navbar navbar-expand-lg navbar-light " id="navbar">
              <div className="container-fluid">
                  <h3 className="navbar-brand">
                      PIZZA HOUSE
                  </h3>
                  <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNav"
                      aria-controls="navbarNav"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                  >
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li>
                              {" "}
                              <Link
                                  activeClass="active"
                                  to="main"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                              >
                                  MAIN
                              </Link>
                          </li>
                          <li>
                              <Link
                                  activeClass="active"
                                  to="gallery"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                              >
                                  GALLERY
                              </Link>
                          </li>
                          <li>
                              <Link
                                  activeClass="active"
                                  to="contact"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                              >
                                  CONTACT
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          ;
      </>
  );
}
export default HomeNavbar;

