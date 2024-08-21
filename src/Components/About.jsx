// import React from 'react';
import { NavLink } from "react-router-dom";
import Hospital from '../assets/rsz_hospital_image.jpg';
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";

function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center bg-primary text-white py-5">
        <h1 className="display-4">About Us</h1>
        <p className="lead">
          Committed to delivering the best healthcare services with compassion
          and expertise.
        </p>
      </div>

      {/* Company Description */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <img src= {Hospital} alt="Company" />
          </div>
          <div className="col-md-6">
            <h2>Our Story</h2>
            <p>
              Founded in 2000, our healthcare facility has been dedicated to
              providing top-quality medical care to patients across the region.
              We believe in a patient-first approach, and our team is committed
              to offering personalized and effective healthcare services. Our
              facility is equipped with state-of-the-art technology, and our
              experienced staff works tirelessly to ensure that every patient
              receives the care they deserve.
            </p>
            <p>
              From humble beginnings to becoming one of the leading healthcare
              providers, we have always focused on compassion, innovation, and
              excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container my-5">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row text-center">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={team1} alt="Team Member" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Dr. Ali Ajmal Awan</h5>
                <p className="card-text">Chief Medical Officer</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={team2} alt="Team Member" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Dr. Sarah Smith</h5>
                <p className="card-text">Head of Pediatrics</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img src={team3} alt="Team Member" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Dr. John Doe</h5>
                <p className="card-text">Surgeon</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section text-center bg-primary text-white py-5">
        <h2>Get in Touch</h2>
        <p className="lead">
          We are here to help you with your healthcare needs. Contact us today
          to learn more about our services.
        </p>
        <NavLink to="/contact">
          <button className="btn btn-light btn-lg">Contact Us</button>
        </NavLink>
      </div>
    </div>
  );
}

export default AboutUs;
