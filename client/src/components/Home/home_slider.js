import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = props => {
  const slides = [
    {
      img: "/images/featured/featured_home.png"
    },
    {
      img: "/images/featured/featured_home_2.png"
    },
    {
      img: "/images/featured/featured_home_3.png"
    }
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 1000,
    slidesToShow: 1,
    slideToScroll: 1,
    fade: true
  };

  const generateSlides = () =>
    slides
      ? slides.map((item, i) => (
          <div key={i}>
            <div
              className="featured_image"
              style={{
                background: `url(${item.img})`,
                height: `350px`,
                width: `550px`
              }}
            ></div>
          </div>
        ))
      : null;

  return <Slider {...settings}>{generateSlides()}</Slider>;
};

export default HomeSlider;
