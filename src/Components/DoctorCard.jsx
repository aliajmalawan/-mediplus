// import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function DoctorCard({ title, description, image, link }) {
  return (
    <div className="card h-100">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        // style={{ width: "18rem", height: "20rem", objectFit: "contain" }}
      />
      <div className="card-body">
        <NavLink to={link}>
          <h5 className="card-title">{title}</h5>
        </NavLink>

        <p className="card-text">{description}</p>
        {/* <NavLink to={link} className="btn btn-primary">Learn More</NavLink> */}
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default DoctorCard;
