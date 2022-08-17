import React from "react";

const Button = (props) => {
  return (
    <>
      <button href="/" className="btn button-theme pricing-btn btn-md mx-2 mb-2">
        {props.title}  
      </button>
    </>
  );
};

export default Button;
