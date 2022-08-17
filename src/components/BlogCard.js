import React from "react";
import { BsBox } from "react-icons/bs";

const BlogCard = () => {
  return (
    <>
      <div className=" blogcard  d-sm-none col-12">
        <div className="d-flex  blog-1 mb-3 p-3">
          <div className="date-box position-static p-2 mr-3">
          <BsBox className="cube "/>
          </div>
          <h6>
            <a href="/">
              Dream of bringing displays into Wearable...
            </a>
          </h6>
        </div>
      </div>
      <hr />
    </>
  );
};

export default BlogCard;
