// import React from 'react';
// import './Services.css'; // Add custom styling;
import PropTypes from 'prop-types';

function HeroSection({ title, subtitle }) {
    return (
      <div className="hero-section text-center bg-primary text-white py-5">
        <div className="container">
          <h1 className="display-4">{title}</h1>
          <p className="lead">{subtitle}</p>
        </div>
      </div>
    );
  }
  

  HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  };
  export default HeroSection;
  