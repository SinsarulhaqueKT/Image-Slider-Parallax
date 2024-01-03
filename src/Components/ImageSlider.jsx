import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <center>
      {" "}
      <Slider {...settings}>
        <div className="parallax-slide">
          <img
            src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/502379620.jpg?k=03f6cb4f3362ac09648c5f7c0dd4f370e69b0ee8d815b59fa350d1b84bde19be&o="
            alt="Slide 1"
          />
        </div>
        <div className="parallax-slide">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/878/961/175/nature-landscape-beach-tropical-wallpaper-preview.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="parallax-slide">
          <img
            src="https://www.thoughtco.com/thmb/HKtQOtFbj_0hU6g3hNbq0TeSRXs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/461695431-58b9d5ed3df78c353c3af489.jpg"
            alt="Slide 2"
          />
        </div>
      </Slider>
    </center>
  );
};

export default ImageSlider;
