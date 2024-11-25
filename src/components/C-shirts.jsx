import pexels1 from "../Assets/images/Plain Shirt.jpg";
import pexels4 from "../Assets/images/Patterned Shirt.jpg";
import pexels5 from "../Assets/images/vintage shirt3.jpeg";
import "../Assets/css/Cs.css";

function Corpshirts() {
    const csContents = [{
        imgURL: pexels1,
        firstButton: "Shop now",
        secondButton: "Plain shirts"
    },
    {
        imgURL: pexels4,
        firstButton: "Shop now",
        secondButton: "Pattern shirts"
    },
    {
        imgURL: pexels5,
        firstButton: "Shop now",
        secondButton: "Vintage shirts"
    }
    ];

    return (
        <>
            <div className="cs-container" id="corpshirts">
                {csContents.map((content, index) => {
                    return <div className="imgHolder">
                    <img src={content.imgURL} alt="" className="img-fluid" />
                        <button className="custom-btn1"><a href="https://wa.me/c/2349065813508">
                            {content.firstButton}
                        </a> </button>
                        <button className="custom-btn2">{content.secondButton}</button>
                    </div>
                    
                })}
            </div>
        </>
    )
};

export default Corpshirts; 