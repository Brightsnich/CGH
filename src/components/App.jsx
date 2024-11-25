import "../Assets/css/App.css";
import bannerbg from "../Assets/images/ASH 1.png";
import Navbar from "./Navbar";
import Banner from "./Banner-carousel";
import About from "./About";
import Products from "./Products";
import Testimonials from "./Testimonial-slider";
import Contact from "./Footer";

function App() {
    return (
        <div className="main">
            <Navbar />
            <section id="home">
                <Banner />
            </section>
            <img src={bannerbg} class="img-fluid second-image" alt="Show pic" />
            <img src={bannerbg} class="img-fluid second-image" alt="Show pic" />
            <img src={bannerbg} class="img-fluid second-image" alt="Show pic" />
            <section id="about">
                <About />
            </section>
            <section id="products">
                <Products />
            </section>
            <section id="testimonials">
                <Testimonials />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    )
}

export default App;