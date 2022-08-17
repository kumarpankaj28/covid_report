import React from "react";  
import Button from "./Button";

const HelpSection = () => {
  return (
    <>
      <div className="card  mb-3">
        <h5 className="card-header">Need Help?</h5>
        <div className="card-body">
          <form
            id="quick-contact-form"
            method="POST"
            action="/"
            novalidate="novalidate"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value=""
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value=""
                placeholder="Corporate Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value=""
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value=" "
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                placeholder="Specific Interest"
              ></textarea>
            </div>
            <div className="form-group">
              <div id="quick-contact-response"></div>
            </div>
            <Button  title="Button "/>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default HelpSection;
