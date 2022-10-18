import React from 'react'
import {Link} from 'react-router-dom'


function TestimonialHome() {
  return (
    <div>
        
        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                <h2>Testimonials</h2>
                <p>What they're saying about us</p>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    
                <div className="swiper-wrapper">

                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Shivanjali Nritya Vatika is a good platform for kids to learn Indian culture though Dance. I really loved it.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        {/* <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt=""/> */}
                        <h3>Anchal Keserwani</h3>
                        {/* <h4>Ceo &amp; Founder</h4> */}
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
                        <h3>Sara Wilsson</h3>
                        <h4>Designer</h4>
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        #New learning#new concept#familiar environment#amazing palace#Indian classical dance form #always learn something new #superb #😍😍#🤩🤩
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
                        <h3>Vipul Gaba</h3>
                        {/* <h4>Store Owner</h4> */}
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Best place to learn kathak dance...
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
                        <h3>Mitoshi Saha</h3>
                        {/* <h4>Freelancer</h4> */}
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                    <div className="swiper-slide">
                    <div className="testimonial-item">
                        <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                        </p>
                        <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
                        <h3>John Larson</h3>
                        <h4>Entrepreneur</h4>
                    </div>
                    </div>
                    {/* <!-- End testimonial item --> */}

                </div>
                <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
        {/* <!-- End Testimonials Section --> */}
    </div>
  )
}

export default TestimonialHome