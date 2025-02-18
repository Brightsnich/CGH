"use client"
import React from 'react';
import style from './products.module.css';
import { Shirts } from '../shirts/shirts';
import { Pants } from '../pants/pants';
import { Ties } from '../ties/ties';
import { Shoes } from '../shoes/shoes';
import { useState } from 'react';

export const Products = () => {
    const [page, setPage] = useState("corpshirts")

    function handlePage(event: React.MouseEvent<HTMLInputElement>) {
            const button = event.target as HTMLInputElement; // Type assertion
            const buttonName = button.dataset.name;
            console.log("Button name:", buttonName);
        setPage(`${buttonName}`);
    }

    return (
        <div className={style.container}>
            <h3 className={style.productsH3}>Products</h3>
            <div className={style.prductsButtons}>
                <input type="button" value=" shirts" onClick={handlePage} className={style.btn} data-name="corpshirts" />
                <input type="button" value=" pants" onClick={handlePage} className={style.btn} data-name="corppants" />
                <input type="button" value="Ties" onClick={handlePage} className={style.btn} data-name="ties" />
                <input type="button" value="Shoes" onClick={handlePage} className={style.btn} data-name="shoes" />
            </div>
            {page === "corpshirts" && <Shirts />}
            {page === "corppants" && <Pants />}
            {page === "ties" && <Ties />}
            {page === "shoes" && <Shoes />}
        </div>
    )
}
