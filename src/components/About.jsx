import "../Assets/css/About.css";
import Elegance from "../Assets/images/elegance2.jpeg";
import Professionality from "../Assets/images/professionality.webp";
import affordability from "../Assets/images/affordability.png";
import quality from "../Assets/images/quality.jpg";

function About() {
    return (
        <div className="about">
            <div className="aboutContents">
                <p className="p-4 text-center px-5 p1">At Calsnich gentlemen's home, we cause men to
                    believe in themselves and dreams
                    by speaking to confidence,
                    composure, and courage in every item we sell</p>
                <div className="about_container">
                <h3 className=" about_h3 mx-3">What we offer</h3>
                    <div className="card">
                        <img src={Elegance} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5>Elegance</h5>
                            <p className="card-text  p2">Timeless designs that elevate your style effortlessly.</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                    <div className="card">
                        <img src={Professionality} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5>Professionality</h5>
                            <p className="card-text  p2">Impeccable service and attention to detail, every step of the way.</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                    <div className="card">
                        <img src={affordability} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5>Affordability</h5>
                            <p className="card-text  p2">Luxury looks at prices that fit your budget.</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                    <div className="card">
                        <img src={quality} className="card-img-top" alt="..." />
                        <div className="card-body text-center">
                            <h5>Quality</h5>
                            <p className="card-text  p2">Premium fabrics and craftsmanship you can trust.</p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;