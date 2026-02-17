import React, { useState } from 'react'
import { Send, Phone, MessageCircle } from 'lucide-react'
import '../styles/contact-form.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'General Inquiry',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // In a real app, this would send data to a backend or API.
        // For now, we'll simulate a WhatsApp redirect or just an alert.
        alert(`Thank you, ${formData.name}! We will contact you shortly regarding ${formData.service}.`)
        console.log('Form Submitted:', formData)
    }

    const handleWhatsApp = () => {
        const text = `Hi, I'm interested in ${formData.service}. My name is ${formData.name}.`
        window.open(`https://wa.me/1234567890?text=${encodeURIComponent(text)}`, '_blank')
    }

    return (
        <div className="contact-form-container">
            <h3>Get a Free Quote</h3>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Service Needed</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option>General Inquiry</option>
                        <option>Plumbing</option>
                        <option>Electrical</option>
                        <option>Renovation</option>
                        <option>Painting</option>
                        <option>Roofing</option>
                        <option>New Construction</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows="4"
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-submit">
                    <Send size={18} /> Send Message
                </button>

                <div className="divider">
                    <span>OR</span>
                </div>

                <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp}>
                    <MessageCircle size={18} /> Chat on WhatsApp
                </button>
            </form>
        </div>
    )
}

export default ContactForm
