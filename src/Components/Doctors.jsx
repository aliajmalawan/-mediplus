// import React from 'react'
import HeroSection from "./HeroSection";
import DoctorGrid from "./DoctorGrid";

function Doctors() {
  return (
    <>
      <HeroSection
        title="Our Specialists"
        subtitle="We have all the professional specialists in our hospital"
      />
      <DoctorGrid />
    </>
  );
}

export default Doctors;
