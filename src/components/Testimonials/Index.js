import { useState, useEffect } from "react";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./SliderData";
// import "./HeroSection.css";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section id="testimonials" className="testimonials section-bg pt-145">
    <div className="container" data-aos="fade-up">

        <div className="section-title">
        <h2>Testimonials</h2>
        <p>What they're saying about us</p>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
            
        <div className="swiper-wrapper">
    <div className="slider">
      {/* <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} /> */}
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="swiper-slide" >
              
                <div className="testimonial-item">
                  {/* <h2>{slide.heading}</h2> */}
                  <p> <i className="bx bxs-quote-alt-left quote-icon-left">
                  </i>
                  {slide.desc}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <h3>{slide.heading}</h3>
                 
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
    </div>
    </div>

</div>
</section>
  );
};

export default Index;

