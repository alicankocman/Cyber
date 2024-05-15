import React from "react";
import "./frame2.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import resim1 from "../assets/1.png";
import resim2 from "../assets/2.png";
import resim3 from "../assets/3.png";
import resim4 from "../assets/4.png";
import resim5 from "../assets/5.png";
import resim6 from "../assets/6.png";
import prevArrow from "../assets/prev-arrow.png";
import nextArrow from "../assets/next-arrow.png";


function Frame2() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true
  };
  return (
    <div className="frame2">
    <div className="slider-container">
      <h2 className="titlecategory">Browse By Category</h2>
      <Slider {...settings}>
        <div>
          <h3><img src={resim1} alt="resim1" className="resim1" /></h3>
        </div>
        <div>
          <h3><img src={resim2}></img></h3>
        </div>
        <div>
          <h3><img src={resim3}></img></h3>
        </div>
        <div>
          <h3><img src={resim4}></img></h3>
        </div>
        <div>
          <h3><img src={resim5}></img></h3>
        </div>
        <div>
          <h3><img src={resim6}></img></h3>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Frame2;
