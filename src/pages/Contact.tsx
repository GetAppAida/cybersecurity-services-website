import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>If you have any questions or need assistance, please reach out to us using the form below or through our contact information.</p>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>
            </form>
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Email: support@cybersecurityfirm.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Cyber St, Security City, SC 12345</p>
            </div>
        </div>
    );
};

export default Contact;