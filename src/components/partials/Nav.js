import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/Yellow logo.png'
import { Button } from './Button';
import './Nav.css'



function Nav() {
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
    
      <nav className='navbar'>
        <div className='navbar-container'></div>
        <Link exact to="/" className="navbar-logo">
          {/* Shivanajali Nritya Vatika <i className='fab fa-typo3'></i> */}
          <img width="100%" height="70px" src={image}/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fa fa-bars'} />
        </div>
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
        {/* {button && <Button buttonStyle='btn--outline'>Signup</Button>} */}
      </nav>
    </>
  )
}


export default Nav