import React from "react";
import HomeSlider from "./home_slider";
import MyButton from "../utils/button";

const home_header = () => {
  return (
    <div className="featured_container">
      <div className="featured_action">
        <div className="tag title">Change your room better</div>
        <div className="tag low_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          reprehenderit dolores ducimus totam explicabo unde doloremque
          aliquam..
        </div>
        <div>
          <MyButton
            type="default"
            title="Shop now"
            linkTo="/shop"
            addStyles={{
              margin: `28px 0 0 0`,
              background: `#080808`,
              color: `#fff`
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
