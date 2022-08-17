import React from "react";
import Card from "./Card";
import HelpSection from "./HelpSection";
import SideCard from "./SideCard";

const Report = (props) => {
  const obj = {
    title:
      "(COVID Version) Global Spindle Tapes Market Status (2016-2020) and For...",
    text: "The report provides an exhaustive calculation of the Spindle Tapes comprising of industry chain stru...",
  };
  return (
    <>
    
      <div className="card">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-8">
              <div className="featured-car content-area">
                <div className="tabbing tabbing-box tab-box">
                  <ul
                    className="nav nav-tabs nav-justified rep-tabs mb-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active show"
                        id="pills-latest-rep-tab"
                        data-toggle="pill"
                        href="#pills-latest-rep"
                        role="tab"
                        aria-controls="pills-latest-rep"
                        aria-selected="false"
                      >
                        Latest Reports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="pills-featured-rep-tab"
                        data-toggle="pill"
                        href="#pills-featured-rep"
                        role="tab"
                        aria-controls="pills-featured-rep"
                        aria-selected="false"
                      >
                        Featured Reports
                      </a>
                    </li>
                  </ul>
                  <Card {...obj} />
                  <Card {...obj} />
                  <Card {...obj} />
                  <Card {...obj} />
                  <Card {...obj} />
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 col-xl-4r">
                <div class="home-sidebar content-area">
                    <SideCard/>
                    <HelpSection/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report;
