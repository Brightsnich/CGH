import "../Assets/css/Navbar.css";
import cals1 from "../Assets/images/blueCropped (1).png";
import { Link } from "react-scroll";

function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg bg-color">
            <div class="container-fluid p-2 px-5">
                <Link to="home" className="navbar-brand"><img className="img-fluid" src={cals1} alt="..." width="200" height="120" /></Link>
                <button class="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse p-2 navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav margin">
                        <li class="nav-item ps-3">
                            <Link class="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li class="nav-item ps-3">
                            <Link class="nav-link" to="about">About us</Link>
                        </li>
                        <li class="nav-item ps-3">
                            <Link class="nav-link" to="products">Products</Link>
                        </li>
                        <li class="nav-item ps-3">
                            <Link class="nav-link" to="testimonials">Testimonials</Link>
                        </li>
                        <li class="nav-item ps-3">
                            <Link class="nav-link" to="contact">Contact us</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>)
}

export default Navbar;