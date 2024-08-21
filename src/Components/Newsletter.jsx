import { useState } from 'react';
import './Home.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert('Subscription successful!');
                setEmail(''); // Clear the email input after submission
            } else {
                alert('Subscription failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Subscription failed. Please try again.');
        }
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
