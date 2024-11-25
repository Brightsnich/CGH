import "../Assets/css/contact.css";
import axios from "axios";
import imgi from "../Assets/images/blueCropped (2).png";
import React, { useState, useCallback, useEffect } from "react";

function Contact() {
    const [error, setError] = useState('')
    const [init, setInit] = useState("");
    const [formData, setFormData] = useState({
        email: ''
    });

    const handleChange = useCallback((e) => {
        setInit(e.target.value);
    }, [init]);

    function handleSubmit(event) {
        // Basic email validation using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(init)) {
            setError('Invalid email address');
        } else {
            // Submit the form or perform other actions
            setFormData({
                email: init
            });
                setError('');
        }
        axios.post("http://localhost:3000", formData);
        setInit("");
    };

    useEffect(() => {
        const initialFormData = {email: ""};
        if (JSON.stringify(formData) !== JSON.stringify(initialFormData)) {
            // If it's different, submit the form
            handleSubmit();
          }
        }, [formData]);
    
    return <>
        <footer>
            <div className="contact p-3">
                <img className="img-fluid mb-3" src={imgi} alt="" width="270" height="270" />
                <div className="box">
                    <p className="footerText"> Subscribe to our newsletter and get </p>
                    <p className="footerText b"> updates on our Men's life hack and promotional offers</p>
                </div>
                <form className="p-2 mb-4" onSubmit={handleSubmit}>
                    <input value={init} name="email" onChange={handleChange} className="p-4" type="email" id="subscription" placeholder="Type your email" required />
                    {error && <p className="error">{error}</p>}
                    <button type="Submit" className="p-2" htmlFor="#subscription"> Subscribe </button>
                </form>
                <a href="https://www.tiktok.com/@calsnich_?_t=8qNgrWkPI5m&_r=1"> <ion-icon name="logo-tiktok"></ion-icon> </a>
                <a href="https://www.instagram.com/calsnich_?igsh=MTdjMWJhaWZld2Jjcw=="> <ion-icon name="logo-instagram"></ion-icon> </a>
                <a href="https://wa.me/c/2349065813508"><ion-icon name="logo-whatsapp"></ion-icon></a>
                <a className="p-1" href="https://medium.com/@calsnichgentlemenshome"><ion-icon name="logo-markdown"></ion-icon></a>
            </div>
        </footer>
    </>
}

export default Contact;