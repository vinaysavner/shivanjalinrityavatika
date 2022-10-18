import React from 'react'
import Video from "./Video"

const Index = ({ id, poster, autoPlay, width, height, parentClass, iframeClass, isPlaylist }) => {
    const videoId = encodeURIComponent("jMLT2YjawNM");
    const videoid = encodeURIComponent("-VRcN4m5nxc");
    const videoid3 = encodeURIComponent("uMZoZjpDTWI");
    // const posterUrl = `https://i.ytimg.com/vi/${videoId}/${hqdefault}.jpg`;
    const iframeSrc1 = !isPlaylist ? `https://www.youtube.com/embed/${videoId}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoId}`;
    const iframeSrc2 = !isPlaylist ? `https://www.youtube.com/embed/${videoid}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoid}`;
    const iframeSrc3 = !isPlaylist ? `https://www.youtube.com/embed/${videoid3}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoid3}`;
    const iframeSrc4 = !isPlaylist ? `https://www.youtube.com/embed/${videoId}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoId}`;
    const iframeSrc5 = !isPlaylist ? `https://www.youtube.com/embed/${videoid}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoid}`;
    const iframeSrc6 = !isPlaylist ? `https://www.youtube.com/embed/${videoid3}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoid3}`;
    const iframeSrc7 = !isPlaylist ? `https://www.youtube.com/embed/${videoId}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoId}`;
    const iframeSrc8 = !isPlaylist ? `https://www.youtube.com/embed/${videoid}?autoplay=${(autoPlay) ? '1' : '0'}` : `https://www.youtube.com/embed/videoseries?list=${videoid}`;
    return (
        <div>
            {/* <!-- ======= Gallery Section ======= --> */}
            <section id="gallery" class="gallery pt-145">

                <div class="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Gallery</h2>
                        <p>Youtube Video Gallery</p>
                    </div>
                </div>

                <div class="container" data-aos="fade-up" data-aos-delay="100">

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
                        <Video />
                        
                        {/* <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc2}
                                ></iframe>

                            </div>
                        </div>


                        <div class="col-lg-3 col-md-4">

                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc3}
                                ></iframe>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc4}
                                ></iframe>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc5}
                                ></iframe>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc6}
                                ></iframe>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc7}
                                ></iframe>

                            </div>
                        </div>

                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item">
                                <iframe
                                    className="iframe img-fluid"
                                    width={width}
                                    height={height}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    src={iframeSrc8}
                                ></iframe>

                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
            {/* <!-- End Gallery Section --> */}
        </div>
    )
}

export default Index