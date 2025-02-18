import styles from "./page.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Carousel } from "./components/Carousel/Carousel";
import { Text } from "./components/Textarea/text";
import { About } from "./components/About/about";
import { Footer } from "./components/Contacts/footer";
import { Products } from "./components/products/products";
import { Testimonial } from "./components/Testimonials/testimonial";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.effect} id="home">
        <Carousel />
      </div>
      <div className={styles.effect} >
        <Text />
      </div>
      <div className={styles.effect}  id="about">
        <About />
      </div>
      <div className={styles.effect}  id="products">
        <Products />
      </div>
      <div className={styles.effect}  id="testimonials">
        <Testimonial />
      </div>
      <div className={styles.effect}  id="footer">
        <Footer />
      </div>
    </div>
  )
}
