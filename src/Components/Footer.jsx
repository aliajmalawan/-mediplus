// import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'
import logo from '../assets/logo.png'


const currentYear = new Date().getFullYear();


const Footer = () => {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
          {/* Single Widget*/}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              <img src={logo} alt="" style={{ width: '70%' }} />
              {/* Footer Logo*/}
              <div className="footer-logo mb-3"></div>
              <p>Your partner in health, every step of the way.</p>

              {/* Footer Social Area*/}
              <div className="footer_social_area">
                <SocialIcon url='https://www.instagram.com/aliajmalawan/' target='_blank' />
                <SocialIcon url="https://www.facebook.com/aliajmalawan1" target='_blank' />
                <SocialIcon url="https://www.linkedin.com/in/ali-ajmal-awan-b90795233/" target='_blank' />
                <SocialIcon url="https://web.whatsapp.com/wa.me/+923087905450" target='_blank' />
                <SocialIcon url="https://twitter.com/" target='_blank' />
              </div>
              {/* Copywrite Text*/}
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  Designed <i className="lni-heart mr-1"></i>by &nbsp;
                  <a className="ml-1" href="">Ali Ajmal Awan</a>
                </p>
              </div>
            </div>
          </div>
          {/* Single Widget*/}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title*/}
              <h5 className="widget-title">About</h5>
              {/* Footer Menu*/}
              <div className="footer_menu">
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/doctor">Doctors</NavLink></li>
                  <li><NavLink to="/services">Services</NavLink></li>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Widget*/}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title*/}
              <h5 className="widget-title">Support</h5>
              {/* Footer Menu*/}
              <div className="footer_menu">
                <ul>
                  <li><NavLink to="#">Help</NavLink></li>
                  <li><NavLink to="#">Support</NavLink></li>
                  <li><NavLink to="#">Privacy Policy</NavLink></li>
                  <li><NavLink to="#">Term & Conditions</NavLink></li>
                  <li><NavLink to="#">Help & Support</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Single Widget*/}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              {/* Widget Title*/}
              <h5 className="widget-title">Open Hours</h5>
              {/* Footer Menu*/}
              <div className="footer_menu">
                <ul>
                  <li className="day">Monday - Fridayp <span>8.00-20.00</span></li>
                  <li className="day">Saturday <span>9.00-18.30</span></li>
                  <li className="day">Monday - Thusday <span>9.00-15.00</span></li>
                  <li><a href="tel:+923087905450">Call Us: +92 3087905450</a></li>
                  <li><a href="mailto:aliajmalawan@gmail.com">Email Us: info@mediplus.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='copyright'>
        &copy; Copyright {currentYear} | All Rights Reserved by <NavLink to="/">
          <b>Medi<span className='medifooter'>plus</span></b>
        </NavLink>
      </section>
    </footer>
  );
};

export default Footer;