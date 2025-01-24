import banners from "./banners.js";
import "../Assets/css/banner.css";
import bannerbg from "../Assets/images/ASH 1.png";
import aboutImg from "../Assets/images/CALSNICH FLYER.png";

function Banner() {
    return (
        <div className="bannerbg">
            {banners.map((banner, index) => {
                return <div>
                    <img src={bannerbg} class="img-fluid first-image" alt="Show pic" />
                    <div className="color-overlay"></div>
                    <div class="banner-contents px-5">
                        <div class="A">
                            <div className="boxes">
                                <div className="box1"></div>
                                <div className="box2"></div>
                            </div>
                            <div>
                                <h1 className="pb-3  ">{banner.caption}</h1>
                                <p className="mt-4">{banner.note1}</p>
                                <p>{banner.note2}</p>
                                <button type="button" class="btn btn-lg mt-4">
                                    <a href="https://wa.me/c/2349065813508">Shop &rarr;</a>
                                </button>
                            </div>
                        </div>
                        <div class="B">
                            <img src={aboutImg} class="img-fluid banner-pic" alt="..." />
                        </div>
                    </div>
                </div>
            })
            }
        </div>
    )
}

export default Banner;