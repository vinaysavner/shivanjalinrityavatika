import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../home/Banner';
import About from '../About/AboutHome';
import GalleryHome from '../Gallery/GalleryHome';
import Index from '../Testimonials/Index'
import Youtube from '../Youtube Gallery/YoutubeHome';
import Contact from '../Contact/ContactHome';
import Footer from '../partials/Footer';
import Header from '../partials/Header';
import Topbar from '../partials/Topbar';

function Home() {
  return (
    <>

      <Topbar />
      {/* <Header /> */}
      <Banner />
      <main id="main">
        <About />
        <GalleryHome />
        <Index />
        <Youtube />
        <Contact />
      </main>
      <Footer />

    </>

  )
}

export default Home