import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import '../styles/contact.css'

const Contact = () => {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>We're here to help with all your construction and repair needs. Reach out for a free quote today.</p>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-info">
                    <div className="info-card">
                        <h2>Get In Touch</h2>
                        <p>Have a project in mind? Call us or fill out the form, and we'll get back to you within 24 hours.</p>

                        <div className="info-item">
                            <div className="icon"><Phone /></div>
                            <div>
                                <h4>Phone</h4>
                                <p>+1 (234) 567-890</p>
                                <p>+1 (987) 654-321</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon"><Mail /></div>
                            <div>
                                <h4>Email</h4>
                                <p>info@housefix.com</p>
                                <p>support@housefix.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon"><MapPin /></div>
                            <div>
                                <h4>Location</h4>
                                <p>123 Builder Lane, Suite 100</p>
                                <p>Cityville, ST 12345</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon"><Clock /></div>
                            <div>
                                <h4>Business Hours</h4>
                                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                <p>Sat: 9:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        {/* Embed Google Map Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623164966779!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact
