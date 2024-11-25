import pexels2 from "../Assets/images/patterned ties3.jpg";
import pexels3 from "../Assets/images/Plain tie (2).jpg";
import pexels4 from "../Assets/images/vintage ties.jpg";
import "../Assets/css/ties.css";

function Ties() {
    const csContents = [{
        imgURL: pexels3,
        firstButton: "Shop now",
        secondButton: "Plain ties"
    },
    {
        imgURL: pexels2,
        firstButton: "Shop now",
        secondButton: "Pattern ties"
    },
    {
        imgURL: pexels4,
        firstButton: "Shop now",
        secondButton: "Vintage ties"
    }
];

    return (
        <>
            <div className="ties-container" id="ties">
                {csContents.map((content, index) => {
                    return <div className="ties_imgHolder">
                        <img src={content.imgURL} alt="" className="img-fluid" />
                        <button className="ties-custom-btn1"><a href="https://wa.me/c/2349065813508">
                            {content.firstButton}
                        </a></button>
                        <button className="ties-custom-btn2">{content.secondButton}</button>
                    </div>
                })}
            </div>
        </>
    )
};

export default Ties; 