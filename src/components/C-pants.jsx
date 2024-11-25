import pexels1 from "../Assets/images/Trouser3.jpeg";
import pexels2 from "../Assets/images/Trouser1.webp";
import pexels3 from "../Assets/images/Trouser4.jpeg";
import "../Assets/css/Cs.css";

function Corppants() {
    const csContents = [{
        imgURL: pexels1,
        firstButton: "Shop now",
        secondButton: "Plain pants"
    },
    {
        imgURL: pexels2,
        firstButton: "Shop now",
        secondButton: "Pattern pants"
    },
    {
        imgURL: pexels3,
        firstButton: "Shop now",
        secondButton: "Vintage pants"
    }
];

    return (
        <>
            <div className="cs-container" id="corppants">
                {csContents.map((content, index) => {
                    return <div className="imgHolder">
                        <img src={content.imgURL} alt="" className="img-fluid" />
                        <button className="custom-btn1"><a href="https://wa.me/c/2349065813508">
                            {content.firstButton}
                        </a> </button>
                    </div>
                })}
            </div>
        </>
    )
};

export default Corppants; 