import React, { useEffect, useState } from "react";
import { BsSearch, BsCart3 } from "react-icons/bs";

const Header = () => {
  const [show, setShow] = useState(false);
  const changeBg = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.addEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <>
      {" "}
      {/* <nav className={"navbar navbar-expand-sm fixed-top"}> */}
        <nav
        className={
          show
            ? "navbar scroll navbar-expand-sm fixed-top"
            : "navbar navbar-expand-sm  fixed-top"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://www.insidemarketreports.com/img/logos/logo.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link d-md-none" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Publishers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Browse Reports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Press Release
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">
                  Careers
                </a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link" href="/">
                  Log In
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  <BsSearch />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  <BsCart3 />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
