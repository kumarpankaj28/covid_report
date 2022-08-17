import React from "react";
import { BsFillTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";

const TopHeader = () => {
  return (
    <>
      <div className="top-header ">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-md-5 d-none d-sm-block">
              <ul className=" d-flex align-items-center ">
                <li className="pr-3">
                  <a href="/">
                    <BsFillTelephoneFill /> +91 8384862113
                  </a>
                </li>
                <li className="pr-3">
                  <a href="/">
                    <BsFillEnvelopeFill /> pankajkumar2841997@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-7 d-none d-md-block">
              <ul className="d-flex top-menu justify-content-end">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
                <li>
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;


