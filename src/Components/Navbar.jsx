// import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
      <div className="container-fluid">
        <NavLink 
          className='nav-link active' to="/" ><img src={Logo} alt="Logo" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/doctor">Doctors</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="col-lg-2 col-12">
								<div className="get-quote">
									<NavLink className="btn btn-primary" to="/">Book Appointment</NavLink>
								</div>
							</div>
        </div>
      </div>
    </nav>



    </>
  );
}

export default Navbar;