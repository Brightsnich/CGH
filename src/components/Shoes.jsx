import pexels1 from "../Assets/images/coming soon.webp";
import pexels2 from "../Assets/images/coming soon.webp";
import pexels3 from "../Assets/images/coming soon.webp";
import "../Assets/css/Cs.css";

function Shoes() {
    const csContents = [{
        imgURL: pexels1,
        firstButton: "Shop now",
        secondButton: "Plain shirts"
    },
    {
        imgURL: pexels2,
        firstButton: "Shop now",
        secondButton: "Pattern shirts"
    },
    {
        imgURL: pexels3,
        firstButton: "Shop now",
        secondButton: "Vintage shirts"
    }
];

    return (
        <>
            <div className="cs-container" id="shoes">
                {csContents.map((content, index) => {
                    return <div className="imgHolder">
                        <img src={content.imgURL} alt="" className="img-fluid" />
                    </div>
                })}
            </div>
        </>
    )
};

export default Shoes; 