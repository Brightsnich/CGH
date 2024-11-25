import Testimonyslider from "./testimonies";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pexels1 from "../Assets/images/pexels1.jpg";
import pexels2 from "../Assets/images/pexels2.jpg";
import pexels3 from "../Assets/images/pexels3.jpg";
import pexels4 from "../Assets/images/pexels4.jpg";
import pexels5 from "../Assets/images/about.jpg";
import "../Assets/css/slider.css"

function Testimonials() {
    const testimonies = [{
        img: pexels1,
        text: "Sleek styles, fast shipping, and friendly customer service. A perfect online shopping experience!"
    },
    {
        img: pexels2,
        text: "High-quality fashion at affordable prices. Easy returns and secure checkout. Love it!"
    },
    {
        img: pexels3,
        text: "Found my new favorite online store! Trendy clothes, great deals, and excellent customer support"
    },
    {
        img: pexels4,
        text: "The clothes fit perfectly and the quality is amazing. Fast shipping and easy returns too!"
    },
    {
        img: pexels5,
        text: "The customer service was exceptional! They helped me find the perfect outfit. Highly recommend!"
    }
    ];

    var settings = {
        dots: false,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: true,
              slidesToScroll: 1
            }
          }
        ]
    };
    return <>
        <div className="slider">
          <h3> Testimonials </h3>
            <Slider {...settings}>
            {testimonies.map((testimony, index) => {
                return <Testimonyslider
                    imgUrl={testimony.img}
                    testimony={testimony.text}
                    key = {index}
                />
            })}
            </Slider>
        </div>
    </>
}

export default Testimonials;