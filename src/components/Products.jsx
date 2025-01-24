import { useState } from "react";
import Corpshirts from "./C-shirts";
import Corppants from "./C-pants";
import Shoes from "./Shoes";
import Ties from "./Ties";
import "../Assets/css/products.css";


function Products() {

    const [page, setPage] = useState("corpshirts")

    function handlePage(event) {
        let response = event.target.name
        setPage(response);
    }
    return (
        <>
            <div className="container-fluid px-5 products">
                <div className="products-container">
                    <h3 className="productsH3 px-3">Products</h3>
                    <div className="prductsButtons text-left">
                        <input type="button" value=" shirts" onClick={handlePage} className="btn" name="corpshirts" />
                        <input type="button" value=" pants" onClick={handlePage} className="btn" name="corppants" />
                        <input type="button" value="Ties" onClick={handlePage} className="btn" name="ties" />
                        <input type="button" value="Shoes" onClick={handlePage} className="btn" name="shoes" />
                    </div>
                </div>
                {page === "corpshirts" && <Corpshirts />}
                {page === "corppants" && <Corppants />}
                {page === "ties" && <Ties />}
                {page === "shoes" && <Shoes />}
            </div>
        </>
    )
}

export default Products;

