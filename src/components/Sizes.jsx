import "../Assets/css/sizes.css";
import React from "react";
import Slider from "react-slick";

function Sizes() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: true

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <>
        <div className="sizes-slider p-5">
            {/* <h3 className="sizeH3"> Sizes </h3> */}
            <Slider {...settings}>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
                <div className="slide-container">
                    <thead>
                        S
                    </thead>
                    <tr>
                        <td className="a">Neck</td>
                        <td>14.5-15</td>
                    </tr>
                    <tr>
                        <td className="a">Chest</td>
                        <td>36-38</td>
                    </tr>
                    <tr>
                        <td className="a">Waist</td>
                        <td>30-32</td>
                    </tr>
                    <tr>
                        <td className="a">Sleeve</td>
                        <td>32.5-33</td>
                    </tr>
                </div>
            </Slider>
        </div>
    </>
}

export default Sizes;