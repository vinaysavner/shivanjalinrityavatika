import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../assets/Yellow logo.png'

function Footer() {
  return (
    <div>
         {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row text-center">

          <div className="col-lg-4 col-md-6">
            <div className="footer-info">
            <img width="50%" class="img" src={image}></img>
            
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <br/>
            <ul>
              <li> <Link exact to='/'>Home</Link></li>
              <li> <Link exact to='/about'>About us</Link></li>
              <li> <Link href="#">Services</Link></li>
              <li> <Link href="#">Terms of service</Link></li>
              <li> <Link href="#">Privacy policy</Link></li>
            </ul>
          </div>


          <div className="col-lg-4 col-md-6 footer-newsletter float-right">
            <h4>Location</h4>
            <br/>

            <p>
                Star Sillicon City<br/>
                Indore Madhya Pradesh, 452001<br/><br/>
                <strong>Phone:</strong> 9754378876<br/>
                <strong>Email:</strong> Priya@gmail.com<br/>
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="https://m.facebook.com/profile.php?id=100063529015344&_rdr" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="https://www.instagram.com/shivanjalinrityavatika/?hl=en" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="aedin"><i className="bx bxl-linkedin"></i></a>
              </div>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Shivanjali Nritya Vatika</span></strong>. All Rights Reserved
      </div>
   
    </div>
  </footer>
  {/* <!-- End Footer --> */}
 
  </div>
  )
}

export default Footer