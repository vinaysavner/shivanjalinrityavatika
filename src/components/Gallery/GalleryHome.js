import React from 'react'
import {Link} from 'react-router-dom'

function GalleryHome() {
    return (
        <div>
            {/* <!-- ======= Chefs Section ======= --> */}
            <section id="gallery" className="chefs ">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Gallery</h2>
                        <p>Events Gallery</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                        <h4>Gallery</h4>
                                        {/* <span>Master Chef</span> */}
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="200">
                                <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                    <h4>Gallery</h4>
                                        {/* <span>Patissier</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="300">
                                <img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                    <h4>Gallery</h4>
                                        {/* <span>Cook</span> */}
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>                   

                </div>
            </section>
            {/* <!-- End Chefs Section --> */}
        </div>
    )
}

export default GalleryHome