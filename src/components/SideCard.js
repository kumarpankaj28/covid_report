import React from "react";
import { BsListUl,BsRecord2,BsRecord } from "react-icons/bs";

const SideCard = () => {
  return (
    <>
      <div className="card mb-3">
        <h5 className="card-header">
          <BsListUl/> Why Inside Market Reports
        </h5>
        <div className="card-body ">
          <ul className="list">
            <li>
              <BsRecord2/> Explore extensive library of
              market reports
            </li>
            <li>
            <BsRecord2/> Accurate and Actionable
              insights
            </li>
            <li>
            <BsRecord2/> Focus on Key Trends and Market
              Movements
            </li>
            <li>
            <BsRecord2/> Critical Consulting Project
              Execution
            </li>
            <li>
            <BsRecord2/> 24/7 Online and Offline Support
            </li>
            <li>
            <BsRecord2/> Most-detailed market
              segmentation
            </li>
            <li>
            <BsRecord2/> Delivery Time:
            </li>
            <ul>
              <li>
              <BsRecord/> Upto 24 hrs - working days
              </li>
              <li>
              <BsRecord/> Upto 48 hrs max - weekends and
                public holidays
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideCard;
