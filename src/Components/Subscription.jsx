import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Home.css'; // Ensure this path is correct

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            email: email
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Subscription successful!');
                setEmail(''); // Clear the email input after submission
            }, (error) => {
                console.log('FAILED...', error);
                alert('Subscription failed. Please try again.');
            });
    };

    return (
        <section className="newsletter">
            <div className="contentnews">
                <h2>Sign up for newsletter</h2>
                <p>Stay informed! Sign up for our newsletter today.</p>
            </div>
            <div className="contentnews">
                <form className="subscription" onSubmit={handleSubmit}>
                    <input
                        name='EMAIL'
                        placeholder='Your email address'
                        className='newsinput'
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Your email address'}
                        required
                        type='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <button type="submit" id='button' className="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
