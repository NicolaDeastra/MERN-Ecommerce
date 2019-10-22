import React from "react";
import HomeSlider from "./home_slider";
import MyButton from "../utils/button";

const home_header = () => {
  return (
    <div className="featured_container">
      <div className="featured_action">
        <div className="tag title">lorem ipsum</div>
        <div className="tag low_title">Lorem, ipsum dolor.</div>
        <div>
          <MyButton
            type="default"
            title="Shop now"
            linkTo="/shop"
            addStyles={{
              margin: "10px 0 0 0"
            }}
          />
        </div>
      </div>
      <div className="sliderWrapper">
        <HomeSlider />
      </div>
    </div>
  );
};

export default home_header;
