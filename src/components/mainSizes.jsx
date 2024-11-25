import { useState } from "react";
import Sizes from "./Sizes";
import Pants from "./pants";
import "../Assets/css/mainSizes.css";

function MainSizes() {

    const [page, setPage] = useState("shirts")

    function handlePages(event) {
        let response = event.target.name
        setPage(response);
    }
    return (
        <>
            <div className="container-fluid ">
                <div className="sizes-container">
                    <h3 className="sizesH3">Sizes</h3>
                    <div className="sizes-buttons">
                        <input type="button" value="shirts" onClick={handlePages} className="sizes-btn" name="shirts" />
                        <input type="button" value="pants" onClick={handlePages} className="sizes-btn" name="pants" />
                    </div>
                </div>
                {page === "shirts" && <Sizes />}
                {page === "pants" && <Pants />}
            </div>
        </>
    )
}

export default MainSizes;

