import React from "react";
import "./img.css";
const ImgSec = () => {
  return (
    <section>
      <div className="box">
        <div className="image"></div>
        <div>
          <h3 className="sale">
            <span>Flat</span> 75% Off
          </h3>
          <h1 className="season">IT'S HAPPENING<br/>THIS SEASON</h1>
          <button className="purcbtn">PURCHASE NOW</button>
        </div>
      </div>
    </section>
  );
};

export default ImgSec;
