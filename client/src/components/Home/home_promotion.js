import React from "react";
import MyButton from "../utils/button";

const HomePromotion = props => {
  const promotion = {
    img: "/images/featured/featured_home_4.png",
    lineOne: "Up to 40% off",
    lineTwo: "In promo soft opening ",
    linkTitle: "Shop now",
    linkTo: "/shop"
  };

  const renderPromotion = () =>
    promotion ? (
      <div className="home_promotion_img">
        <div className="tag title">{promotion.lineOne}</div>
        <div className="tag low_title">{promotion.lineTwo}</div>
        <div>
          <MyButton
            type="default"
            title={promotion.linkTitle}
            linkTo={promotion.linkTo}
            addStyles={{
              margin: "25px 45% 0"
            }}
          />
        </div>
      </div>
    ) : null;

  return <div className="home_promotion">{renderPromotion()}</div>;
};

export default HomePromotion;
