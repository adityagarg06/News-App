import React from "react";
import spinner from "./../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
