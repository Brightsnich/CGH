"use client"
import React from 'react';
import style from './testimonial.module.css';
import { StarIcon } from '@heroicons/react/24/outline';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles

export const Testimonial = () => {
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

    return (
        <div className={style.container}>
            <h3 className={style.h3}>Testimonials</h3>
            <div className={style.cards}>
                <Swiper spaceBetween={30} 
                slidesPerView={3} 
                direction='horizontal'
                loop= {true}
                navigation={false}
                modules={[Navigation]}
                className={style.swiper}
                breakpoints={{
                    300: {slidesPerView: 1},
                    600: {slidesPerView: 2},
                    940: {slidesPerView: 3}
                }}
                >
                    {testimonies.map((testimony, index) => {
                        return <SwiperSlide key={index}>
                            <div className={style.card}>
                                <StarIcon className={style.icon} />
                                <p className={style.p}>{testimony.text}</p>
                            </div>
                        </SwiperSlide>
                    })}
                </Swiper>

            </div>
        </div>
    )
}

//              

