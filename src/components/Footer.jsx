import React from 'react'
import { Hammer, Phone, Mail, MapPin } from 'lucide-react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section brand">
                    <div className="logo">
                        <Hammer size={24} />
                        <span>House Fix & Build</span>
                    </div>
                    <p>Professional house repair and construction services. Building trust, one home at a time.</p>
                </div>

                <div className="footer-section links">
                    <h4>Quick Links</h4>
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <Phone size={18} />
                        <span>+1 (234) 567-890</span>
                    </div>
                    <div className="contact-item">
                        <Mail size={18} />
                        <span>info@housefix.com</span>
                    </div>
                    <div className="contact-item">
                        <MapPin size={18} />
                        <span>123 Builder Lane, Cityville</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} House Fix & Build. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
