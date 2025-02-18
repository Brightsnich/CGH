"use client"
import React from 'react';
import style from './navbar.module.css';
import { useState, useEffect} from 'react';
import Image from 'next/image';
import image from './blueCropped (1).png';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediumScreen, setIsMediumScreen] = useState(false); // New state
  
    useEffect(() => {
      const handleResize = () => {
        setIsMediumScreen(window.innerWidth <= 1024); // Example breakpoint
      };
  
      window.addEventListener('resize', handleResize); // Add resize listener
      handleResize(); // Initial check on mount
  
      return () => {
        window.removeEventListener('resize', handleResize); // Remove listener
      };
    }, []);
    
    const handleClick = () => {
        if (isMediumScreen) {  // Only toggle on medium screens
          setIsMenuOpen(!isMenuOpen);
        }
      };
    
  return (
    <nav className={style.nav}>
        <div className= {style.navbar}>
            <a href='#'>
                <Image className={style.navBrand} src={image} alt='Logo' width={100} height={100}/>
            </a>
            <div onClick={handleClick} className={style.menuButton}>
                <button className={style.menu}></button>
            </div>
            <ul className={style.menuList} style={{display: isMediumScreen ? (isMenuOpen ? 'flex' : 'none') : 'flex'}}>
                <li className={style.li}><a className={style.a} href='#home'> home </a></li>
                <li className={style.li}><a className={style.a} href='#about'> about us </a></li>
                <li className={style.li}><a className={style.a} href='#products'> Products </a></li>
                <li className={style.li}><a className={style.a} href='#testimonials'> Testimonials </a></li>
                <li className={style.li}><a className={style.a} href='#footer'> Contact us </a></li>
            </ul>
        </div>
    </nav>
  );
}