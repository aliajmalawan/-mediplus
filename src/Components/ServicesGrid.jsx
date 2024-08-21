// import React from 'react';
import ServiceCard from './ServiceCard.jsx';
import placeholderImage from '../assets/author2.jpg'; // Replace with real images

function ServicesGrid() {
  const services = [
    {
      title: "Cardiology",
      description: "Our cardiology department offers comprehensive heart care services, including advanced diagnostics, personalized treatments, and preventive measures to maintain cardiovascular health.",
      image: placeholderImage,
      link: "/services/cardiology"
    },
    {
      title: "Pediatrics",
      description: "Our pediatric specialists provide expert care for infants, children, and adolescents, ensuring your child's health and development are supported at every stage of growth.",
      image: placeholderImage,
      link: "/services/pediatrics"
    },
    {
      title: "Surgery",
      description: "With state-of-the-art surgical facilities and experienced surgeons, we offer a range of advanced procedures to treat both minor and complex conditions with precision and care.",
      image: placeholderImage,
      link: "/services/surgery"
    },
    {
      title: "Dermatology",
      description: "From skin cancer screenings to cosmetic treatments, our dermatology services cover a wide range of skin care needs, helping you maintain healthy, radiant skin throughout life.",
      image: placeholderImage,
      link: "/services/dermatology"
    },
    {
      title: "Oncology",
      description: "Our oncology team provides personalized cancer care, utilizing the latest therapies and technologies to ensure the best possible outcomes for our patients at every stage of treatment.",
      image: placeholderImage,
      link: "/services/oncology"
    },
    {
      title: "Orthopedics",
      description: "Our orthopedic specialists provide comprehensive care for bone, joint, and muscle conditions, including injuries, arthritis, and surgical procedures to help restore mobility and function.",
      image: placeholderImage,
      link: "/services/orthopedics"
    },
    {
      title: "Neurology",
      description: "Our neurology department offers expert care for disorders of the brain, spine, and nervous system, including stroke, epilepsy, multiple sclerosis, and other neurological conditions.",
      image: placeholderImage,
      link: "/services/neurology"
    },
    {
      title: "Gastroenterology",
      description: "Our gastroenterology services offer expert care for the digestive system, addressing conditions such as Crohn's disease, ulcerative colitis, liver disease, and gastrointestinal cancers.",
      image: placeholderImage,
      link: "/services/gastroenterology"
    },
    {
      title: "Endocrinology",
      description: "We provide specialized care for hormonal imbalances, including diabetes, thyroid disorders, and metabolic conditions, using the latest medical advancements for effective management.",
      image: placeholderImage,
      link: "/services/endocrinology"
    },
    {
      title: "Pulmonology",
      description: "Our pulmonology services focus on the diagnosis and treatment of lung and respiratory conditions, including asthma, chronic obstructive pulmonary disease (COPD), and sleep apnea.",
      image: placeholderImage,
      link: "/services/pulmonology"
    },
    {
      title: "Ophthalmology",
      description: "Our ophthalmology department offers advanced eye care, including cataract surgery, glaucoma treatment, and comprehensive eye exams to preserve and enhance your vision.",
      image: placeholderImage,
      link: "/services/ophthalmology"
    },
    {
      title: "Rheumatology",
      description: "We specialize in the diagnosis and treatment of autoimmune and musculoskeletal diseases, including rheumatoid arthritis, lupus, and other chronic inflammatory conditions.",
      image: placeholderImage,
      link: "/services/rheumatology"
    },
    {
      title: "Urology",
      description: "Our urology team provides expert care for conditions affecting the urinary tract and male reproductive system, including prostate issues, kidney stones, and incontinence.",
      image: placeholderImage,
      link: "/services/urology"
    },
    {
      title: "Nephrology",
      description: "Our nephrology services offer comprehensive care for kidney diseases, including dialysis, transplant preparation, and long-term management of chronic kidney conditions.",
      image: placeholderImage,
      link: "/services/nephrology"
    },
    {
      title: "Obstetrics & Gynecology",
      description: "We provide a full range of women's health services, including prenatal care, childbirth, gynecological exams, and treatments for reproductive health conditions and menopause.",
      image: placeholderImage,
      link: "/services/obgyn"
    },
    {
      title: "Psychiatry",
      description: "Our psychiatry department offers mental health services, including individual therapy, medication management, and support for conditions such as anxiety, depression, and bipolar disorder.",
      image: placeholderImage,
      link: "/services/psychiatry"
    },
    {
      title: "Hematology",
      description: "Our hematology services specialize in the diagnosis and treatment of blood disorders, including anemia, clotting disorders, leukemia, and other conditions affecting the blood.",
      image: placeholderImage,
      link: "/services/hematology"
    },
    {
      title: "Radiology",
      description: "Our radiology department offers cutting-edge imaging services, including X-rays, MRIs, and CT scans, to assist in the diagnosis and treatment of a wide range of medical conditions.",
      image: placeholderImage,
      link: "/services/radiology"
    },
    {
      title: "Anesthesiology",
      description: "Our anesthesiologists ensure patient safety and comfort during surgical procedures by providing expert pain management and anesthesia tailored to individual needs and conditions.",
      image: placeholderImage,
      link: "/services/anesthesiology"
    },
    {
      title: "Plastic Surgery",
      description: "Our plastic surgery department offers both cosmetic and reconstructive procedures, helping patients enhance their appearance or recover from injury with expert surgical care.",
      image: placeholderImage,
      link: "/services/plasticsurgery"
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="">
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;
