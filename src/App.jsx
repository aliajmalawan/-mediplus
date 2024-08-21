// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Doctors from './Components/Doctors';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
