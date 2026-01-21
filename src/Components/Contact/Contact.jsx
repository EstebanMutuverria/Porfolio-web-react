import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';
import { HoverBorderGradient } from '../Animations/HoverBorderGradient/HoverBorderGradient';

const Contact = () => {
    const [state, handleSubmit] = useForm("xykkwyvy");

    if (state.succeeded) {
        return (
            <section id="contact" className="contact-section">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-container success-message">
                    <h3>Thanks for your message!</h3>
                    <p>I will get back to you as soon as possible.</p>
                    <button onClick={() => window.location.reload()} className="btn primary">Send Another</button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="sr-only">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            required
                        ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <HoverBorderGradient
                        as="button"
                        type="submit"
                        disabled={state.submitting}
                        containerClassName="rounded-full"
                        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                    >
                        <span className='btn-curriculum'>{state.submitting ? 'Sending...' : 'Send Message'}</span>
                    </HoverBorderGradient>
                </form>
                <div className="contact-info">
                    <p>Or reach me via:</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/esteban-mutuverria/" className="social-link">LinkedIn</a>
                        <a href="https://github.com/EstebanMutuverria" className="social-link">GitHub</a>
                        <a href="mailto:mutuverriaestebanpaul@gmail.com" className="social-link">Email</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
