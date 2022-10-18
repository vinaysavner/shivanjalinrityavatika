import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import image from '../assets/Yellow logo.png'
// import { Button } from './Button';





function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click );
  const closeMobileMenu = () => setClick(false);

  const showButton = () =>{
    if(window.innerWidth <= 960){
      setButton(false)
  }else{
    setButton(true)
  }
};
useEffect(() => {
  showButton();
}, []);

window.addEventListener('resize', showButton)
  return (
    <>
     <header id="header" className="fixed-top d-flex align-items-center">
        <div className=' container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
        <Link to="/" className="logo me-auto me-lg-0">
          <img width="100%" height="70px" src="../assets/img/logo.png" alt="" className="img-fluid" />
          </Link>
{/*            
        <div className='menu-icon' onClick={handleClick}>
          // <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
        </div> */}
          <nav id="navbar" className="navbar order-last order-lg-0 navbar">
         
     
   
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link exact to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link exact to='/gallery' className='nav-links' onClick={closeMobileMenu}>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/teachers' className='nav-links' onClick={closeMobileMenu}>
              About Teachers
            </Link>
          </li>
          <li className='nav-item'>
            <Link exact to='/youtube_gallery' className='nav-links' onClick={closeMobileMenu}>
              Youtube Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link exact to='/testimonials' className='nav-links' onClick={closeMobileMenu}>
              Testimonials
            </Link>
          </li>
          <li className='nav-item'>
            <Link exact to='/contact_us' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          
    
        </ul>
        
        {/* <div className='menu-icon' onClick={handleClick}>
          <i className="bi bi-list mobile-nav-toggle"  onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
          </i>
          
        </div> */}
        <div  className="bi bi-list mobile-nav-toggle"  onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
        </div>
        </nav>
      </div>
      </header>
    </>
  )
}


export default Navbar