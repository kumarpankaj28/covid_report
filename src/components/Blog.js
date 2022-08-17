import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div className="recent-posts d-lg-none">
        <div className="row">
          <div className="col-12 col-sm-6">
            <div className="main-title">
              <h1 className="text-left">Press Release</h1>
            </div>
            <div className=" cd d-sm-none" >
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
