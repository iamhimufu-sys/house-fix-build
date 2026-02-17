import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { Droplet, Sun, PaintBucket, Home, PenTool, CheckCircle, Truck, Wrench, Ruler } from 'lucide-react'
import '../styles/services.css'

const Services = () => {
    const services = [
        { icon: <Droplet />, title: 'Plumbing', desc: 'Expert leak detection, pipe repair, and new installations for kitchens and bathrooms.' },
        { icon: <Sun />, title: 'Electrical', desc: 'Safe and certified wiring, lighting installation, and electrical panel upgrades.' },
        { icon: <PaintBucket />, title: 'Painting', desc: 'High-quality interior and exterior painting with premium weather-resistant paints.' },
        { icon: <Home />, title: 'Renovation', desc: 'Complete home makeovers, from basement finishing to kitchen remodeling.' },
        { icon: <PenTool />, title: 'Roofing', desc: 'Durable roofing solutions, including repairs, shingles, and waterproofing.' },
        { icon: <CheckCircle />, title: 'New Construction', desc: 'Ground-up construction services for new homes and additions.' },
        { icon: <Truck />, title: 'Hauling', desc: 'Debris removal and material delivery for all your construction needs.' },
        { icon: <Wrench />, title: 'General Repair', desc: 'Quick fixes for broken doors, windows, drywall, and more.' },
        { icon: <Ruler />, title: 'Flooring', desc: 'Installation of hardwood, tile, laminate, and carpet flooring.' },
    ]

    return (
        <div className="services-page">
            <div className="services-header">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>We provide a comprehensive range of construction and repair services to keep your home in top condition.</p>
                </div>
            </div>

            <div className="container services-content">
                <div className="services-grid-page">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="custom-quote-banner">
                    <h2>Need something else?</h2>
                    <p>We handle custom projects too. Contact us for a free consultation.</p>
                    <a href="/contact" className="btn btn-primary">Get Custom Quote</a>
                </div>
            </div>
        </div>
    )
}

export default Services
