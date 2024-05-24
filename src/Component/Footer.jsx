import React from 'react';
import './Footer.css';
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <img src="https://html.themexriver.com/it-firm/images/footer-logo.png" alt="LOGO" />
          <p>We work with a passion of taking challenges and creating new ones in the advertising sector.</p>
          <button className='about-btn'>About us</button>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to get our latest updates & news</p>
          <form action="#">
            <input type="email" placeholder="Your email" />
            <button id='tele' type='submit'><FaTelegramPlane/></button>
          </form>
        </div>
        <div className="footer-column">
          <h3>Official Info</h3>
          <p className='col-3'><BsFillTelephoneFill style={{color:" rgba(8,150,252,1)"}} />30 Commercial Road Fratton, Australia</p>
          <p className='col-3'><IoMdMail style={{color:" rgba(8,150,252,1)"}} /> 1-888-452-1505</p>
          <h5>Open Hours:</h5>
          <p className='col-3'>Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</p>
        </div>
        <div className="footer-column">
          <h3>Gallery</h3>
          <div className="gallery-grid">
            <img src="https://html.themexriver.com/it-firm/images/resource/case-1.jpg" alt="" />
            <img src="https://html.themexriver.com/it-firm/images/resource/case-2.jpg" alt="" />
            <img src="https://html.themexriver.com/it-firm/images/resource/case-3.jpg" alt="" />
            <img src="https://html.themexriver.com/it-firm/images/resource/case-1.jpg" alt="" />
            <img src="https://html.themexriver.com/it-firm/images/resource/case-2.jpg" alt="" />
            <img src="https://html.themexriver.com/it-firm/images/resource/case-3.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="footer-row copyright">
        <p>2023 © All rights reserved by <span>Themexriver</span> </p>
      </div>
    </footer>
  );
}

export default Footer;
