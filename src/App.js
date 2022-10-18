import React from 'react';
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import Topbar from './components/partials/Topbar';
import Header from './components/partials/Header';
import Navbar from './components/partials/Navbar';
import Nav from './components/partials/Nav';
import Youtube from './components/pages/Youtube';
import Testimonials from './components/pages/Testimonials';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 function App() {
  return (
      <>
      <Router>
         {/* <Topbar/> */}
         <Header/>
        {/* <Navbar/> */}
        {/* <Nav/> */}
        <Routes>
          <Route exact path='' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route exact path='/gallery' element={<Gallery/>} />
          <Route exact path='/video-gallery' element={<Youtube/>} />
          <Route exact path='/testimonials' element={<Testimonials/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
    </Router>
    </>
     
  )

 }

 export default App