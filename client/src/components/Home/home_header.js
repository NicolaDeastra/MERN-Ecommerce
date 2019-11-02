import React from "react";
import MyButton from "../utils/button";

const home_header = () => {
  const header = {
    img: "/images/featured/featured_home.png",
    lineOne: "Change your room better",
    lineTwo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut, mollitia iure nisi sunt at, neque aut delectus iusto laborum inventore recusandae! ",
    linkTitle: "Shop now",
    linkTo: "/shop"
  };

  const renderHeader = () =>
    header ? (
      <div
        className="featured_image"
        style={{
          background: `url(${header.img})`
        }}
      >
        <div className="featured_action">
          <div className="tag title">{header.lineOne}</div>
          <div className="tag low_title">{header.lineTwo}</div>
          <div>
            <MyButton
              type="default"
              title={header.linkTitle}
              linkTo={header.linkTo}
              addStyles={{
                margin: `28px 0 0 0`,
                background: `#fff`,
                color: `#000s`
              }}
            />
          </div>
        </div>
      </div>
    ) : null;
  return <div className="featured_container">{renderHeader()}</div>;
};

export default home_header;
