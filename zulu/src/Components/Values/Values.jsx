import React from "react";
import "./Values.css";
import imgsec from "../../assets/imgforth.jpg";
const Values = () => {
  return (
    <section className="ValuesSection">
      <h1>About Us</h1>
      <div className="AboutUsDiv">
        <div className="TextDesc">
          <h2>Long Trip , Less Cost</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptas soluta placeat necessitatibus ad totam quam voluptate, debitis magnam ab iure earum cum, cupiditate itaque corporis officiis a saepe vitae dicta sint quaerat esse excepturi accusantium. Aliquam doloribus numquam vitae?
          </p>
            <button className="ctaAboutUs"> Know More</button>
        </div>
        <div className="ImgContainer">
          <img src={imgsec} />
        </div>
      </div>
    </section>
  );
};

export default Values;
