import React from 'react'

function Index() {
    return (
        <div>
            {/* <!-- ======= Chefs Section ======= --> */}
            <section id="photo_gallery" className="chefs pt-145">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>My Gallery</h2>
                        <p>Events Gallery</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="100">
                                <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt="" />
                                <div className="member-info">
                                    <div className="member-info-content">
                                    <h4>Gallery</h4>
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

export default Index