import React from 'react'
import Video from './Video';

const Index = ({ id, poster, autoPlay, width, height, parentClass, iframeClass, isPlaylist }) => {
    const videoId = encodeURIComponent("jMLT2YjawNM");
    // const posterUrl = `https://i.ytimg.com/vi/${videoId}/${hqdefault}.jpg`;
    const iframeSrc1 = !isPlaylist ? `https://www.youtube.com/embed/${videoId}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoId}`;
    
    return (
        <div>
            {/* <!-- ======= Gallery Section ======= --> */}
            <section id="gallery" class="gallery">

                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Gallery</h2>
                        <p>Youtube Video Gallery</p>
                    </div>
                </div>

                <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

                    <div class="row g-0">

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc1}
                                ></iframe>
                            </div>
                        </div>


                        <Video/>
                    </div>

                </div>
            </section>
            {/* <!-- End Gallery Section --> */}
        </div>
    )
}

export default Index