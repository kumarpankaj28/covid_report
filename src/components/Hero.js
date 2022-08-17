import React from "react";
import img1 from "../assets/banner-1.png";
import img2 from "../assets/banner-2.png";
import img4 from "../assets/banner-4.png";

const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
            <h3 className="animated bounceInRight" style={{"animation-delay":"3s"}}>All our reports come with <span className="text-danger">COVID-19</span><br/> impact analysis</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
            <h3>Insights at Your Finger Tips</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
            <h3>Data For Profitability</h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Hero;
