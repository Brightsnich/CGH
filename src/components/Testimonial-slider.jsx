import Testimonyslider from "./testimonies";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Assets/css/slider.css"

function Testimonials() {
    const testimonies = [{
        text: "Sleek styles, fast shipping, and friendly customer service. A perfect online shopping experience!"
    },
    {
        text: "High-quality fashion at affordable prices. Easy returns and secure checkout. Love it!"
    },
    {
        text: "Found my new favorite online store! Trendy clothes, great deals, and excellent customer support"
    },
    {
        text: "The clothes fit perfectly and the quality is amazing. Fast shipping and easy returns too!"
    },
    {
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
                    testimony={testimony.text}
                    key = {index}
                />
            })}
            </Slider>
        </div>
    </>
}

export default Testimonials;