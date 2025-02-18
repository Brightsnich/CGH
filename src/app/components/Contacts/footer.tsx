"use client"
import React from 'react';
import style from './footer.module.css';
import Image from 'next/image';
import image from './blueCropped (2).png';
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { useState } from "react";


export const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Add success message state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Invalid email address');
      setSuccess(''); // Clear any previous success message
      return;
    }

    try {
      console.log(JSON.stringify({ email }))
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail(''); // Clear the input field
        setError('');
        setSuccess(data.message); // Set the success message from the API
      } else {
        setError(data.error || 'An error occurred. Please try again.');
        setSuccess(''); // Clear any previous success message
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError('A network error occurred. Please try again.');
      setSuccess(''); // Clear any previous success message
    }
  };
  return (
    <div id="contact" className={style.footer}>
      <div className={style.contact}>
        <Image className={style.imgFluid} src={image} alt="Calsnich Logo" width="100" height="100" />
        <div className={style.box}>
          <p className={style.footerText}> Subscribe to our newsletter and get </p>
          <p className={style.footerText}> updates on our Men's life hack and promotional offers</p>
        </div>
        <form className={style.form} onSubmit={handleSubmit} >
          <input value={email} name="email" className={style.input} type="email" onChange={(e) => setEmail(e.target.value)} id="subscription" placeholder="Type your email" required />
          {error && <p className={style.error}>{error}</p>}
          {success && <p className={style.success}>{success}</p>} {/* Display success message */}
          <button type='submit' className={style.btn}> Subscribe </button>
        </form>
        <div className={style.links}>
          <a className={style.a} href="https://www.tiktok.com/@calsnich_?_t=8qNgrWkPI5m&_r=1"> <FaTiktok /> </a>
          <a className={style.a} href="https://www.instagram.com/calsnich_?igsh=MTdjMWJhaWZld2Jjcw==">< FaInstagram /></a>
          <a className={style.a} href="https://wa.me/c/2349065813508">< FaWhatsapp /></a>
          <a className={style.a} href="https://medium.com/@calsnichgentlemenshome">< FaMedium /></a>
        </div>
      </div>
    </div>
  );
}
