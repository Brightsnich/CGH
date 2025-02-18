"use client"
import React from 'react'
import style from './carousel.module.css';
import Image from 'next/image';
import image2 from './CALSNICH FLYER.png';
import { useRef, useEffect, useState } from 'react';


export const Carousel = () => {
    const banners =
    {
        caption: "Where Style Meets Profesionalism",
        note: "Every item speaks to Confidence, Composure, and courage",
    };


    const [currentSlide, setCurrentSlide] = useState(0);
    const targetElementsRef = useRef<HTMLDivElement[]>([]);


    useEffect(() => {
        const generatedClassName = style.target;
        const elements = document.querySelectorAll(`.${generatedClassName}`);
        targetElementsRef.current = Array.from(elements) as HTMLDivElement[];

        // Set the initial active slide (after elements are in the ref)
        if (elements.length > 0) {
            elements[currentSlide].classList.add('active');
        }

        return () => { // Cleanup (important!)
            targetElementsRef.current.forEach(element => {
                element.classList.remove('active');
                element.classList.remove('inactive');
            });
        };
    }, []); // Empty dependency array ensures this runs only once

    const showSlide = (newV: number) => {
        console.log(currentSlide);
        console.log(newV);
        if (targetElementsRef.current.length === 0) return; // Guard clause

        targetElementsRef.current[currentSlide].classList.remove(style.active);
        targetElementsRef.current[currentSlide].classList.add(style.inactive);
        targetElementsRef.current[newV].classList.remove(style.inactive);
        targetElementsRef.current[newV].classList.add(style.active);
        setCurrentSlide(newV);
    };

    const prevSlide = () => {
        const newSlide = (currentSlide - 1 + targetElementsRef.current.length) % targetElementsRef.current.length;
        showSlide(newSlide);
    };

    const nextSlide = () => {
        const newSlide = (currentSlide + 1) % targetElementsRef.current.length;
        showSlide(newSlide);
    };

    return (
        <div id="home" className={style.carousel}>
            <div className={style.carouselBoxes}>
                {/* Add more divs here to form a carousel */}
                <div className={style.target}>
                    <Image className={style.active} src={image2} alt="" width={500} height={300} />
                    <div className={style.overlay}></div>
                </div>
            </div>
            <div className={style.bannerContents}>
                <div className={style.boxes}>
                    <div className={style.box1}></div>
                    <div className={style.box2}></div>
                </div>
                <div className={style.text}>
                    <h1 className={style.h1}> {banners.caption}</h1>
                    <p className={style.p}>{banners.note}</p>
                    <a className={style.btn} href="https://wa.me/c/2349065813508">Shop &rarr;</a>
                </div>
            </div>
            {/* Carousel buttons */}
            {/* <div className={style.carouselControls}>
                    <button className={style.carouselControl} onClick={prevSlide}>&#10094;</button>
                    <button className={` ${style.carouselControl} ${style.b} `} onClick={nextSlide}>&#10095;</button>
                </div> */}
        </div>

    )
}
