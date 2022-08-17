import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import Button from "./Button";

const Card = (props) => {
  return (
    <>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade active show"
          id="pills-latest-rep"
          role="tabpanel"
          aria-labelledby="pills-latest-rep-tab"
        >
          <div className="car-box-2">
            <div className="row">
              <div className="col-lg-12 col-md-12 p-3 col-pad align-self-center">
                <div className="detail">
                  <h5 className="title">
                    <a href="/">{props.title}</a>
                  </h5>
                  <h5 className="location">
                    <a href="/">
                      <BsCalendar3 /> Mar 3, 2022{" "}
                    </a>
                  </h5>
                  <p className="text-muted">{props.text}</p>
                  <div className="my-2 ">
                    <Button title="Buy Now" />
                    <Button title="Sample Request" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
