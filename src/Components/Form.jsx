// src/MedicalForm.js

import { useState } from 'react';
import emailjs from 'emailjs-com';

const MedicalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        doctor: '',
        date: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
        doctor: '',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (formData.name.trim().length < 2) {
            tempErrors.name = 'Name must be at least 2 characters long.';
            isValid = false;
        }

        const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
        if (!emailPattern.test(formData.email)) {
            tempErrors.email = 'Email is not valid.';
            isValid = false;
        }

        if (formData.phone.trim().length < 10) {
            tempErrors.phone = 'Phone must be at least 10 digits long.';
            isValid = false;
        }

        if (!formData.department) {
            tempErrors.department = 'Please select a department.';
            isValid = false;
        }

        if (!formData.doctor) {
            tempErrors.doctor = 'Please select a doctor.';
            isValid = false;
        }

        if (!formData.date) {
            tempErrors.date = 'Please select a date.';
            isValid = false;
        }

        if (formData.message.trim().length < 10) {
            tempErrors.message = 'Message must be at least 10 characters long.';
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            emailjs.send('service_ff4rhr2', 'template_sb2lmzi', formData, 'tGY7t552uCMAMdtlS')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Form submitted successfully!');
                }, (error) => {
                    console.log('FAILED...', error);
                    alert('Form submission failed. Please try again.');
                });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container mt-5">
            <fieldset>
                {/* <legend>
                    Personal Information
                </legend> */}
                <div className="mb-3">
                    {/* <label htmlFor="name" className="form-label">Name</label> */}
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Name'}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Name'
                    />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">Email</label> */}
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Email'}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Email'
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="phone" className="form-label">Phone</label> */}
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Phone'}
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder='Phone'
                    />
                    {errors.phone && <div className="text-danger">{errors.phone}</div>}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="department" className="form-label">Department</label> */}
                    <select
                        className="form-select"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                    >
                        <option value="">Select Department</option>
                        <option value="Cardiac Clinic">Cardiac Clinic</option>
                        <option value="Neurology">Neurology</option>
                        <option value="Dentistry">Dentistry</option>
                        <option value="Gastroenterology">Gastroenterology</option>
                    </select>
                    {errors.department && <div className="text-danger">{errors.department}</div>}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="doctor" className="form-label">Doctor</label> */}
                    <select
                        className="form-select"
                        id="doctor"
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                    >
                        <option value="">Select Doctor</option>
                        <option value="Dr. Ali Ajmal Awan">Dr. Ali Ajmal Awan</option>
                        <option value="Dr. Erum Ghaffar">Dr. Erum Ghaffar</option>
                        <option value="Dr. Jahanzaib">Dr. Jahanzaib</option>
                    </select>
                    {errors.doctor && <div className="text-danger">{errors.doctor}</div>}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="date" className="form-label">Date</label> */}
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        placeholder='Date'
                    />
                    {errors.date && <div className="text-danger">{errors.date}</div>}
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="message" className="form-label">Message</label> */}
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Write Your Message Here'}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder='Write Your Message Here'
                    ></textarea>
                    {errors.message && <div className="text-danger">{errors.message}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Book An Appointment</button> &nbsp;&nbsp;&nbsp;&nbsp; <span>( We will be confirm by an Text Message )</span>
                {/* <cite style={{float:'right'}}> -ALI AJMAL AWAN </cite> */}
            </fieldset>
        </form>
    );
};

export default MedicalForm;
