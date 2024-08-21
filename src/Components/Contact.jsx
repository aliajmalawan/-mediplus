// import React from 'react';
import ContactForm from './ContactForm';
import HeroSection from './HeroSection';
import './Contact.css';
import GoogleMap from './GoogleMap';

function Contact() {
  return (
    <>
      <HeroSection
        title='Get In Touch'
        subtitle='Contact us for any further questions. possible projects and business partnership'
      /> <br />
      <section className="contact">
        <div className="containerform">
          <div className="contactd" id='Googlemap'>
            {/* <h2>Our Location</h2> */}
            <GoogleMap />

          </div>
        </div>
        <div className="containerform">
          <div className="contactd" id='ContactForm'>
            <div className="contactformcontent">
              <h2>Contact With Us</h2>
              <p>If you have any questions please fell free to contact with us.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="row custom-row">
          <div className="col-sm-4">
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="title">
                  <i className="fa-solid fa-phone"></i> +92 3087905450
                </h4>
                <h4 className="card-text">
                  <i className="fa-solid fa-envelope"></i> info@mediplus.com
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="col-sm-4">
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="title">+92 3087905450 </h4>
                <h5 className="card-text">info@mediplus.com</h5>
              </div>
            </div>
          </div> */}
          <div className="col-sm-4">
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="title">
                  <i className="fa-solid fa-location-dot"></i> Ghalib Road</h4>
                <h5 className="card-text">Ghalib Road Sialkot</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="title">
                  <i className="fa-solid fa-clock"></i> Mon - Sat: 8am - 5pm</h4>
                <h5 className="card-text">Sunday Closed</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
