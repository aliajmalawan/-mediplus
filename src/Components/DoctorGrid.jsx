// import React from 'react';
import DoctorCard from "./DoctorCard.jsx";
import Doctor1 from "../assets/team-1.jpg";
import Doctor2 from "../assets/team-3.jpg";
import Doctor3 from "../assets/team-2.jpg";
import Doctor4 from "../assets/team-4.jpg";
import Doctor5 from "../assets/team-5.jpg";
import Doctor6 from "../assets/team-6.jpg";
import Doctor7 from "../assets/team-7.jpg";
import Doctor8 from "../assets/team-8.jpg";
import Doctor9 from "../assets/team-9.jpg";
// Repeat the import for remaining images or add placeholder images

function DoctorGrid() {
  const doctors = [
    {
      title: "Ali Ajmal Awan",
      description: "General Practitioner",
      image: Doctor1,
      link: "/services",
    },
    {
      title: "John Doe",
      description: "Cardiologist",
      image: Doctor2,
      link: "/services",
    },
    {
      title: "Jane Smith",
      description: "Pediatrician",
      image: Doctor3,
      link: "/services",
    },
    {
      title: "Robert Wilson",
      description: "Neurologist",
      image: Doctor4,
      link: "/services",
    },
    {
      title: "Emily Johnson",
      description: "Dermatologist",
      image: Doctor5,
      link: "/services",
    },
    {
      title: "Michael Brown",
      description: "Orthopedic Surgeon",
      image: Doctor6,
      link: "/services",
    },
    {
      title: "Sarah Davis",
      description: "Oncologist",
      image: Doctor7,
      link: "/services",
    },
    {
      title: "David Miller",
      description: "Endocrinologist",
      image: Doctor8,
      link: "/services",
    },
    {
      title: "Lisa Taylor",
      description: "Ophthalmologist",
      image: Doctor9,
      link: "/services",
    },
    {
      title: "William Anderson",
      description: "Pulmonologist",
      image: Doctor1,
      link: "/services",
    },
    {
      title: "James Thomas",
      description: "Necrologist",
      image: Doctor2,
      link: "/services",
    },
    {
      title: "Patricia Moore",
      description: "Rheumatology",
      image: Doctor3,
      link: "/services",
    },
    {
      title: "Christopher Jackson",
      description: "Surgeon",
      image: Doctor4,
      link: "/services",
    },
    {
      title: "Linda Harris",
      description: "Radiologist",
      image: Doctor5,
      link: "/services",
    },
    {
      title: "Richard Clark",
      description: "Anesthesiologist",
      image: Doctor6,
      link: "/services",
    },
    {
      title: "Barbara Lee",
      description: "Hematologist",
      image: Doctor7,
      link: "/services",
    },
    {
      title: "Joseph Lewis",
      description: "Urologist",
      image: Doctor8,
      link: "/services",
    },
    {
      title: "Margaret Walker",
      description: "Psychiatrist",
      image: Doctor9,
      link: "/services",
    },
    {
      title: "Charles Hall",
      description: "Gastroenterologist",
      image: Doctor1,
      link: "/services",
    },
    {
      title: "Betty Young",
      description: "OB-GYN",
      image: Doctor2,
      link: "/services",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Meet Our Doctors</h1>
      <div className="row">
        {doctors.map((doctor, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <DoctorCard
              title={doctor.title}
              description={doctor.description}
              image={doctor.image}
              link={doctor.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorGrid;
