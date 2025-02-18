import React from 'react';
import style from './about.module.css';
import Image from 'next/image';
import image1 from './elegance2.jpeg';
import image2 from './affordability.png';
import image3 from './professionality.webp';
import image4 from './quality.jpg';

export const About = () => {
    return (
        <div id="about" className={style.about}>
            <h2 className={style.h3}> What we offer</h2>
            <div className={style.cards}>
                <div className={style.card}>
                    <Image className={style.cardImg} src={image1} alt="" width="300" height="300" />
                    <div className={style.overlay}></div>
                    <div className={style.cardText}>
                        <h3> Elegance</h3>
                        <p>Timeless designs that elevate your style effortlessly.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <Image className={style.cardImg} src={image3} alt="" width="300" height="300" />
                    <div className={style.overlay}></div>
                    <div className={style.cardText}>
                        <h3> Professionality</h3>
                        <p>Impeccable service and attention to detail, every step of the way.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <Image className={style.cardImg} src={image2} alt="" width="300" height="300" />
                    <div className={style.overlay}></div>
                    <div className={style.cardText}>
                        <h3> Affordability</h3>
                        <p>Luxury looks at prices that fit your budget .</p>
                    </div>
                </div>
                <div className={style.card}>
                    <Image className={style.cardImg} src={image4} alt="" width="300" height="300" />
                    <div className={style.overlay}></div>
                    <div className={style.cardText}>
                        <h3> Quality</h3>
                        <p>Premium fabrics and craftsmanship you can trust.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
