// import React from 'react';
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function ServiceCard({ title, description, image, link }) {
  return (
    <div className="card h-100">
      <div className="d-flex align-items-start">
        {/* Image Section */}
        <img
          src={image}
          className="img-fluid"
          alt={title}
          style={{
            width: "20%",
            height: "95%",
            objectFit: "contain",
            marginRight: "15px",
          }}
        />

        {/* Card Body Section */}
        <div style={{ width: "80%" }}>
          <div className="card-body">
            <NavLink to={link}>
              <h5 className="card-title">{title}</h5>
            </NavLink>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ServiceCard;
