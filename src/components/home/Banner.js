import React from 'react'
import {Link} from 'react-router-dom'
function Banner() {
  return (
    <>
        {/* <!-- ======= Hero Section ======= -->*/}
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
            <div className="row">
                <div className="col-lg-8">
                <h1>Welcome to <br/><span>Shivanjali Nritya Vatika</span></h1>
                <h2>Learn Ancient Art of Kathak and explore your True Potential.</h2>
               
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                  <a href="https://www.youtube.com/channel/UCmZrFfvHFDi3CU8gnDttsZw/featured" target="_blank" className="glightbox2 play-btn"></a>
                </div>

            </div>
            </div>
        </section>
        {/* <!-- End Hero -->*/}
    </>
  )
}

export default Banner