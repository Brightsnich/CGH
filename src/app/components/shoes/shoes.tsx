import React from 'react';
import style from './shoes.module.css';
import Image from 'next/image';
import image1 from './coming soon.webp';

export const Shoes = () => {
    const csContents = [{
        imgURL: image1,
        firstButton: "Shop now",
        secondButton: "Plain shirts"
    },
    {
        imgURL: image1,
        firstButton: "Shop now",
        secondButton: "Pattern shirts"
    },
    {
        imgURL: image1,
        firstButton: "Shop now",
        secondButton: "Vintage shirts"
    }
    ];

    return (
        <div className={style.csContainer}>
            {csContents.map((content, index) => {
                return <div key={index} className={style.imgHolder}>
                    <div>
                        <Image src={content.imgURL} alt={content.secondButton} className={style.imgFluid} />
                        <button className={style.customBtn1}><a className={style.a} href="https://wa.me/c/2349065813508">
                            {content.firstButton}
                        </a> </button>
                        <div className={style.darkOverlay}></div>
                    </div>
                    <button className= {style.customBtn2} > {content.secondButton} </button>
                </div>

            })}
        </div>
    )
}
