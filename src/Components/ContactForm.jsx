// src/MedicalForm.js

import { useState } from 'react';
import emailjs from 'emailjs-com';

const MedicalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
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

        if (formData.subject.trim().length < 2) {
            tempErrors.subject = 'Subject must be at least 2 characters long.';
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
                <div className="mb-3">
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
                    <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Subject'}
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder='Subject'
                    />
                    {errors.subject && <div className="text-danger">{errors.subject}</div>}
                </div>
                <div className="mb-3">
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
                <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg btn-block">Send Message</button>
                </div>
                {/* <button type="submit" className="btn btn-primary btn-lg btn-block">Send Message</button> */}
            </fieldset>
        </form>
    );
};

export default MedicalForm;
