import React from "react";
import { BsLinkedin, BsTwitter, BsTelegram,BsFillGeoAltFill } from "react-icons/bs";
import { MdEmail,MdPermPhoneMsg } from "react-icons/md";
import Button from "./Button";

const Footer = (props) => {
  return (
    <>
      <footer className="page-footer font-small indigo">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <img
                      src="https://www.insidemarketreports.com/img/logos/logo.png"
                      alt="logo"
                    />
                  </a>
                </li>
                <li>
                  <a href="#!"><BsFillGeoAltFill/>
                    1 Apache Way, Westford, Massachusetts 01886, USA
                  </a>
                </li>
                <li>
                  <a href="#!"><MdEmail/>sales@insidemarketreports.com</a>
                </li>
                <li>
                  <a href="#!"><MdPermPhoneMsg/>+1-617-230-0741</a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Other Links
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">Blogs</a>
                </li>
                <li>
                  <a href="#!">Press Release</a>
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms and Conditions</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Connect with Us
              </h5>

              <ul className=" d-flex  justify-content-center list-unstyled">
                <li>
                  <a href="#!">
                    <BsLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <BsTelegram />
                  </a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto">
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Subscribe
              </h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    To get market insights, subscribe <br />
                    to our newsletter.
                  </a>
                </li>
                <li>
                  <div className="input-group d-flex form-outline">
                    <input type="search" id="form1" className="form-control" />
                  </div>
                  <Button title="Touch" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="container"/>

        <div className=" d-flex footer-copyright text-center py-3">
          <p className="left">
            {" "}
            © 2022 <a href="/">Inside Market Reports</a> All Rights Reserved.
          </p>
          <p className="right">
            Powered By <a href="/">VRUSAC Technologies</a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
