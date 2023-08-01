import Carousel from "react-bootstrap/Carousel";
import s from "./slider.module.css";
import slide1 from "../../assets/slider/slide1.png";
import slide2 from "../../assets/slider/slide2.png";
import slide3 from "../../assets/slider/slide3.png";
import slide4 from "../../assets/slider/slide4.png";
import slide5 from "../../assets/slider/slide5.png";

function Slider() {
  const slides = [slide1, slide2, slide3, slide4, slide5];

  return (
    <Carousel className={s.slider}>
      {slides.map((slide, i) => (
        <Carousel.Item
          className={s.slide}
          key={i}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}
    </Carousel>
  );
}

export default Slider;
