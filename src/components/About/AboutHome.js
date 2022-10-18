import React from 'react'

function About_page() {
    return (
        <div>
            {/* <!-- ======= About Section ======= -->*/}
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                            <div className="about-img">
                                <img src="assets/img/about.jpg" alt="" className='w-100' />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Kathak</h3>
                            <p className="fst-italic">
                                Kathak is characterized by intricate footwork and precise rhythmic patterns that the dancer articulates by controlling about 100 ankle bells. It takes its movements from life, stylizes them, and adds the complex rhythmic patterns. Kathak is danced by both males and females; many of the dances convey moods of love.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"></i> वेदवेदाङ्गविद्वांसस्तथैवाध्यात्मचिन्तकाः | <br />
                                    चौक्षाश्च भगवद्भक्ताः सूताः पौराणिकाश्च ये ||२||<br />
                                    कथकाश्चापरे राजञ्श्रमणाश्च वनौकसः |<br />
                                    दिव्याख्यानानि ये चापि पठन्ति मधुरं द्विजाः ||३||</li>
                                <li><i className="bi bi-check-circle"></i> Followed by the scholars of the Vedas and Vedangas, and by those who ponder on their soul,<br />
                                    by persons skilled in music, by the devotees of Bhagavata, <br />
                                    by Kathakas (reciters of the sacred lore), by dwellers of forests, <br />
                                    by those who sweetly recite celestial histories.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section -->*/}
        </div>
    )
}

export default About_page