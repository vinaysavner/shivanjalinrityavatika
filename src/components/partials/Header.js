import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

function Header() {
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click );
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <Link to="/" className="logo me-auto me-lg-0">
          <img src="../assets/img/logo.png" alt="" className="img-fluid" />
          </Link>

          <nav id="navbar" className="navbar order-last order-lg-0">
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
        </div>
            <ul>
            <li className='nav-item'>
                <Link exact to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link exact to='/about' className='nav-links' onClick={closeMobileMenu}>
                 About
                </Link>
              </li>
              <li className='nav-item'>
                <Link exact to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                  Gallery
                </Link>
              </li>
              <li className='nav-item'>
                <Link exact to='/video-gallery' className='nav-links' onClick={closeMobileMenu}>
                  Video Gallery
                </Link>
              </li>
              <li className='nav-item'>
                <Link exact to='/testimonials' className='nav-links' onClick={closeMobileMenu}>
                  Testimonials
                </Link>
              </li>
              <li className='nav-item'>
                <Link exact to='/contact' className='nav-links' onClick={closeMobileMenu}>
                  Contact us
                </Link>
              </li>
            </ul>
            {/* <i className="bi bi-list mobile-nav-toggle" onClick={handleClick}></i> */}
         
          </nav>
          {/* <!-- .navbar --> */}
          {/* <Link href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</Link> */}

        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  )
}

export default Header