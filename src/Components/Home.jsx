// import react from 'react';
import { NavLink } from "react-router-dom";
import "./Home.css";
import Form from "./Form";
import slider from "../assets/slider.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import icon from "../assets/section-img.png";
import ambulance from "../assets/ambulance.png";
import pharmacy from "../assets/Pharmacy.png";
import meditool from "../assets/Meditool.png";
// import codevideo from '../assets/Codding.mp4';
import sl1 from "../assets/sl1.jpg";
import sl2 from "../assets/sl2.jpg";
import sl3 from "../assets/sl3.jpg";
import sl4 from "../assets/sl4.jpg";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import cl1 from "../assets/client1.png";
import cl2 from "../assets/client2.png";
import cl3 from "../assets/client3.png";
import cl4 from "../assets/client4.png";
import cl5 from "../assets/client5.png";
import doctor from "../assets/contact-img.png";
// import Subscription from './Subscription';
import Newsletter from "./Newsletter";
// import { CgNotes } from "react-icons/cg";
const videoId = "uZTZC2nFk_8";
const videoUrl = `https://www.youtube.com/embed/${videoId}`;

const bluclr = {
  color: "#1A76D1",
};
const secicon = {
  display: "block",
  margin: "0 auto",
  width: "80px",
};

function Home() {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={slider} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption">
              <h1 style={{ fontWeight: "bold" }}>
                Our strength is your well-being
              </h1>
              {/* <h1>That you Can Trust!</h1> */}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slider2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption">
              <h1 style={{ fontWeight: "bold" }}>
                We want to heal the patient with services
              </h1>
              {/* <h1>That you Can Trust!</h1> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption">
              <h1 style={{ fontWeight: "bold" }}>
                Need your expertise we are ready
              </h1>
              {/* <h1>That you Can Trust!</h1> */}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Slider End */}

      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 ">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule first">
                  <div className="inner">
                    <div className="icon">
                      <i className="fa fa-ambulance"></i>
                    </div>
                    <div className="single-content">
                      <h4>Emergency Cases</h4>
                      <p>
                        For severe injuries or life-threatening conditions like
                        heart attacks, strokes, or severe allergic reactions,
                        call emergency services immediately and provide clear
                        details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule middle">
                  <div className="inner">
                    <div className="icon">
                      {/* <FontAwesomeIcon icon="fa-solid fa-phone" /> */}
                      <i className="fa-solid fa-clipboard"></i>
                    </div>
                    <div className="single-content2">
                      <h4>Doctors Timetable</h4>
                      <p>
                        <b>Dr.Ali AJmal Awan:</b> 6 AM To 2 PM.
                      </p>
                      <p>
                        <b>Dr.Erum Ghaffar:</b> 2 PM To 10 PM.
                      </p>
                      <p>
                        <b>Dr.Jahanzaib:</b> 11 PM To 6 AM.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12">
                {/* <!-- single-schedule --> */}
                <div className="single-schedule last">
                  <div className="inner">
                    <div className="icon">
                      {/* <i className="icofont-ui-clock"></i> */}
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="single-content3">
                      <h4>Opening Hours</h4>
                      <ul className="time-sidual">
                        <li className="day">
                          Monday - Fridayp <span>8.00-20.00</span>
                        </li>
                        <br />
                        <li className="day">
                          Saturday <span>9.00-18.30</span>
                        </li>
                        <br />
                        <li className="day">
                          Monday - Thusday <span>9.00-15.00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section1">
        <h1 className="sec1">We are always ready to help you & your family</h1>
        <img src={icon} alt="sec1-icon" style={secicon} />
        <p>
          At{" "}
          <b>
            <span style={{ color: "#1A76D1" }}>Medi</span>plus
          </b>
          , we understand that your health and well-being are paramount. That’s
          why we are dedicated to providing exceptional care and support to you
          and your loved ones, 24/7.
        </p>
        <p>
          Your family’s health is our top priority. Trust us to be there for you
          with personalized attention, expert advice, and a commitment to
          excellence. We are more than just healthcare providers; we are your
          partners in maintaining a healthy and happy life.
        </p>
      </section>

      <section className="section2">
        <div className="card-group">
          <div className="card">
            <img
              src={ambulance}
              className="card-img-top mx-auto"
              alt="..."
              style={{
                width: "100px",
                padding: "15px",
                border: "1px solid",
                borderRadius: "30px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Emergency Help</h5>
              <p className="card-text">
                Emergency Help Available 24/7: Your Safety is Our Priority.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={pharmacy}
              className="card-img-top mx-auto"
              alt="..."
              style={{
                width: "100px",
                padding: "15px",
                border: "1px solid",
                borderRadius: "30px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <b>
                  <span style={bluclr}>Medi</span>plus
                </b>{" "}
                Pharmacy
              </h5>
              <p className="card-text">
                Quality Medications and Expert Advice, Always Available.
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src={meditool}
              className="card-img-top mx-auto"
              alt="..."
              style={{
                width: "100px",
                padding: "15px",
                border: "1px solid",
                borderRadius: "30px",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">Sthethoscope</h5>
              <p className="card-text">
                A stethoscope is an essential medical device used by healthcare
                professionals to listen to heart, lung, and other body sounds
                for diagnostic purposes.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="rating">
        <div className="card-group">
          <div className="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-house homeicon"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <div className="content">
              <span
                className="counter"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                3468
              </span>
              <p>
                <b>Hospital Rooms</b>
              </p>
            </div>
          </div>

          <div className="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
            <div className="content">
              <span
                className="counter"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                80
              </span>
              <p>
                <b>Specialist Doctors</b>
              </p>
            </div>
          </div>

          <div className="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
            <div className="content">
              <span
                className="counter"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                5270
              </span>
              <p>
                <b>Happy Patients</b>
              </p>
            </div>
          </div>

          <div className="content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-calendar-date"
              viewBox="0 0 16 16"
            >
              <path d="M6.445 11.688V6.354h-.633A13 13 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
            </svg>
            <div className="content">
              <span
                className="counter"
                style={{ fontWeight: "bold", fontSize: "30px" }}
              >
                19
              </span>
              <p>
                <b>Years of Experience</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services text-center">
        <div className="col-lg-12">
          <div className="section-title text-center">
            <h2 className="capitalize">
              We Offer Different Services To Improve Your Health
            </h2>
            <img src={icon} alt="sec1-icon" style={secicon} />
            <p>
              Our dedicated team of healthcare professionals is committed to
              providing personalized, compassionate care to ensure the
              well-being of you and your family. Trust us to be your partner in
              health, every step of the way.
            </p>
          </div>
        </div>
      </section>
      {/* content & Video */}

      <section className="content01">
        <div className="seccont1">
          <h2>
            {" "}
            <span style={{ color: "#1A76D1" }}>
              <u>Who</u>
            </span>{" "}
            We Are
          </h2>
          <div className="whosec1">
            Welcome to{" "}
            <b>
              <span style={{ color: "#1A76D1" }}>Medi</span>plus
            </b>
            , where your health and well-being are our top priorities.
            Established with a commitment to excellence, we are a comprehensive
            healthcare provider dedicated to delivering personalized and
            compassionate care to our community.
          </div>
          <div className="points">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ float: "left" }}
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-right"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
            </svg>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We treat every patient with
              kindness, empathy, and respect.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ float: "left" }}
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-right"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
            </svg>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are committed to delivering the
              highest quality of care through continuous improvement and
              innovation.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ float: "left" }}
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-right"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
            </svg>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We uphold the highest standards of
              honesty and ethical behavior in all our interactions.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ float: "left" }}
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-return-right"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5" />
            </svg>
            <p>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We work together as a team and with
              our patients to achieve the best health outcomes.
            </p>
          </div>
        </div>
        <div className="seccont1">
          <div className="video-container">
            <iframe
              width="650"
              height="400"
              src={`${videoUrl}?autoplay=1`}
              // src={`${codevideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <h2 style={{ textAlign: "center" }}>Emergency Medical Care? Call</h2>
      <img src={icon} style={secicon}></img>
      <section
        className="call-action overlay"
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-9 col-9">
              <div className="content">
                <h2>
                  Do you need Emergency Medical Care? Call @ +92 308 7905450
                </h2>
                <p>
                  Need emergency medical care? Our expert team is here 24/7 to
                  provide urgent and compassionate assistance. Your health and
                  safety are our top priorities.
                </p>
                <div className="button">
                  <a href="#" className="btn">
                    Contact Now
                  </a>
                  <a href="#" className="btn second" id="second">
                    Learn More<i className="fa fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="col-lg-12" style={{ padding: "20px 0px" }}>
        <div className="section-title text-center">
          <h2 className="Capitalize">
            We maintain cleanliness rules inside our hospital
          </h2>
          <img src={icon} alt="" style={secicon} />
          <p>
            Our dedicated team of healthcare professionals is committed to
            providing personalized, compassionate care to ensure the well-being
            of you and your family. Trust us to be your partner in health, every
            step of the way.
          </p>
        </div>
      </div>

      <section className="portfolio section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <div className="owl-carousel portfolio-slider">
                <div className="single-pf">
                  <img src={sl1} alt="#" />
                  <NavLink to="/services" className="btn">
                    View Detail
                  </NavLink>
                  {/* <a href="/services" className="btn">View Details</a> */}
                </div>
                <div className="single-pf">
                  <img src={sl2} alt="#" />
                  <NavLink to="/services" className="btn">
                    View Detail
                  </NavLink>
                  {/* <a href="/services" className="btn">View Details</a> */}
                </div>
                <div className="single-pf">
                  <img src={sl3} alt="#" />
                  <NavLink to="/services" className="btn">
                    View Detail
                  </NavLink>
                  {/* <a href="/services" className="btn">View Details</a> */}
                </div>
                <div className="single-pf">
                  <img src={sl4} alt="#" />
                  <NavLink to="/services" className="btn">
                    View Detail
                  </NavLink>
                  {/* <a href="/services" className="btn">View Details</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="col-lg-12" style={{ padding: "20px 0px" }}>
        <div className="section-title text-center">
          <h2 className="Capitalize">
            We Offer Different Services To Improve Your Health
          </h2>
          <img src={icon} alt="" style={secicon} />
          <p>
            At{" "}
            <b>
              <span style={{ color: "#1A76D1" }}>Medi</span>plus
            </b>
            , we&apos;re dedicated to helping you achieve and maintain optimal
            health through a variety of personalized services. Whether
            you&apos;re looking to enhance your physical fitness, manage stress,
            or improve your overall well-being, we have the expertise and
            resources to support your journey
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-12">
          {/* <!-- Start Single Service --> */}
          <div className="single-service">
            <div className="text">
              <h4>
                <a href="/">General Treatment</a>
              </h4>
              <p>
                At{" "}
                <b>
                  <span style={{ color: "#1A76D1" }}>Medi</span>plus
                </b>
                , we offer comprehensive health services, from primary care to
                specialized treatments, to improve your well-being. Let our
                personalized and professional care support your journey to
                optimal health.{" "}
              </p>
            </div>
          </div>
          {/* <!-- End Single Service --> */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* <!-- Start Single Service --> */}
          <div className="single-service">
            <i className="icofont icofont-tooth"></i>
            <h4>
              <a href="/">Teeth Whitening</a>
            </h4>
            <p>
              Brighten your smile with our professional teeth whitening services
              at{" "}
              <b>
                <span style={{ color: "#1A76D1" }}>Medi</span>plus
              </b>
              . Achieve a radiant, confident smile with safe and effective
              treatments tailored to your needs.
            </p>
          </div>
          {/* <!-- End Single Service --> */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* <!-- Start Single Service --> */}
          <div className="single-service">
            <i className="icofont icofont-heart-alt"></i>
            <h4>
              <a href="/">Heart Surgery</a>
            </h4>
            <p>
              At{" "}
              <b>
                <span style={{ color: "#1A76D1" }}>Medi</span>plus
              </b>
              , we offer advanced heart surgery services performed by
              experienced cardiac specialists. Trust us to provide expert care
              and support for your heart health needs.
            </p>
          </div>
          {/* <!-- End Single Service --> */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* <!-- Start Single Service --> */}
          <div className="single-service">
            <i className="icofont icofont-listening"></i>
            <h4>
              <a href="/">Ear Treatment</a>
            </h4>
            <p>
              At{" "}
              <b>
                <span style={{ color: "#1A76D1" }}>Medi</span>plus
              </b>
              , we provide comprehensive ear treatment services for all ages.
              From routine check-ups to advanced procedures, our expert team is
              dedicated to ensuring your ear health and well-being.{" "}
            </p>
          </div>
          {/* <!-- End Single Service --> */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* <!-- Start Single Service --> */}
          <div className="single-service">
            <i className="icofont icofont-eye-alt"></i>
            <h4>
              <a href="/">Vision Problems</a>
            </h4>
            <p>
              At{" "}
              <b>
                <span style={{ color: "#1A76D1" }}>Medi</span>plus
              </b>
              , we offer expert care for vision problems, including
              comprehensive eye exams and advanced treatments. Trust our
              specialists to help you achieve and maintain optimal eye health.
            </p>
          </div>
          {/* <!-- End Single Service --> */}
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          {/* <!-- Start Single Service --> */}
          <div className="single-service">
            <i className="icofont icofont-blood"></i>
            <h4>
              <a href="/">Blood Transfusion</a>
            </h4>
            <p>
              At{" "}
              <b>
                <span style={{ color: "#1A76D1" }}>Medi</span>plus
              </b>
              , we provide safe and reliable blood transfusion services. Our
              experienced medical team ensures the highest standards of care to
              support your health and recovery.{" "}
            </p>
          </div>
          {/* <!-- End Single Service --> */}
        </div>
      </div>

      <div className="col-lg-12" style={{ padding: "20px 0px" }}>
        <div className="section-title text-center">
          <h2 className="Capitalize">
            Keep up with Our Most Recent Medical News.
          </h2>
          <img src={icon} alt="" style={secicon} />
          <p>
            Stay updated with the latest medical news from Mediplus. Follow us
            for cutting-edge health information and updates.
          </p>
        </div>
      </div>

      <div className="blog">
        <div className="card1" style={{ width: "20rem", float: "left" }}>
          <img src={blog1} className="card-img-top" alt="..." />
          <div className="card-body">
            <NavLink
              to="/services"
              className=""
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="card-title">We have announced our new Product.</h5>
            </NavLink>
            <p className="card-text">
              We are excited to announce our new product at Mediplus! Stay tuned
              for more details on this innovative addition designed to enhance
              your health and well-being.
            </p>
          </div>
        </div>

        <div className="card1" style={{ width: "20rem", float: "left" }}>
          <img src={blog2} className="card-img-top" alt="..." />
          <div className="card-body">
            <NavLink
              to="/services"
              className=""
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="card-title">
                Top five way for solving teeth problems.
              </h5>
            </NavLink>
            <p className="card-text">
              Ensure a healthy smile with regular dental check-ups and proper
              oral hygiene. Maintain a balanced diet, avoid tobacco, and use
              mouthguards to protect your teeth.
            </p>
          </div>
        </div>

        <div className="card1" style={{ width: "20rem", float: "left" }}>
          <img src={blog3} className="card-img-top" alt="..." />
          <div className="card-body">
            <NavLink
              to="/services"
              className=""
              style={{ textDecoration: "none", color: "black" }}
            >
              <h5 className="card-title">
                We provide highly business soliutions.
              </h5>
            </NavLink>
            <p className="card-text">
              We provide high-quality business solutions tailored to your needs.
              Enhance your operations with our expert services and innovative
              strategies.
            </p>
          </div>
        </div>
      </div>

      <section className="clients">
        <div className="marquee">
          <div className="marquee-content">
            <img src={cl1} alt="Client 1" className="clientimgs" />
            <img src={cl2} alt="Client 5" className="clientimgs" />
            <img src={cl3} alt="Client 3" className="clientimgs" />
            <img src={cl4} alt="Client 4" className="clientimgs" />
            <img src={cl5} alt="Client 2" className="clientimgs" />
            <img src={cl1} alt="Client 1" className="clientimgs" />
            <img src={cl2} alt="Client 5" className="clientimgs" />
            <img src={cl3} alt="Client 3" className="clientimgs" />
            <img src={cl4} alt="Client 4" className="clientimgs" />
            <img src={cl5} alt="Client 2" className="clientimgs" />
          </div>
        </div>
      </section>

      <div className="col-lg-12" style={{ padding: "20px 0px" }}>
        <div className="section-title text-center">
          <h2 className="Capitalize">
            We are always ready to help you <br /> Book an appointment{" "}
          </h2>
          <img src={icon} alt="" style={secicon} />
          <p>
            We are always here to assist you. Schedule your appointment today!
          </p>
        </div>
      </div>

      <section className="contact">
        <div className="containerform">
          <div className="contactd" id="ContactForm">
            <Form />
          </div>
        </div>
        <div className="containerform">
          <div className="contactd">
            <img src={doctor} alt="" style={{ width: "90%" }} />
          </div>
        </div>
      </section>

      <section className="newsletter">
        {/* <Subscription /> */}
        <Newsletter />
      </section>
    </>
  );
}

export default Home;
