import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, PenTool, Home as HomeIcon, Droplet, Sun, PaintBucket } from 'lucide-react'
import HeroScene from '../webgl/HeroScene'
import '../styles/home.css'

const Home = () => {
    const services = [
        { icon: <Droplet />, title: 'Plumbing', desc: 'Leaks, pipes, and installations.' },
        { icon: <Sun />, title: 'Electrical', desc: 'Wiring, lighting, and repairs.' },
        { icon: <PaintBucket />, title: 'Painting', desc: 'Interior and exterior perfection.' },
        { icon: <HomeIcon />, title: 'Renovation', desc: 'Full house makeovers.' },
        { icon: <PenTool />, title: 'Roofing', desc: 'Repairs and new installations.' },
        { icon: <CheckCircle />, title: 'Construction', desc: 'Building your dream home.' },
    ]

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <div className="hero-text">
                        <h1>We Fix, Build & <span className="highlight">Renovate</span> Your Home</h1>
                        <p className="hero-sub">Professional craftsmanship for all your home needs. Trustworthy, experienced, and ready to help.</p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
                            <Link to="/services" className="btn btn-secondary">Our Services</Link>
                        </div>
                        <div className="trust-badges">
                            <span>⭐️ 15+ Years Exp</span>
                            <span>🛡️ Licensed & Insured</span>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <Suspense fallback={<div className="loader">Loading 3D...</div>}>
                            <HeroScene />
                        </Suspense>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section services-preview container">
                <div className="section-header">
                    <h2>Our Expertise</h2>
                    <p>Comprehensive solutions for every corner of your house.</p>
                </div>
                <div className="services-grid">
                    {services.map((s, i) => (
                        <div key={i} className="service-card-mini">
                            <div className="icon-box">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="center-btn">
                    <Link to="/services" className="btn btn-outline">View All Services <ArrowRight size={16} /></Link>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-us">
                <div className="container">
                    <div className="why-content">
                        <h2>Why Choose House Fix & Build?</h2>
                        <div className="features">
                            <div className="feature">
                                <h3>Reliable</h3>
                                <p>We show up on time and finish the job right.</p>
                            </div>
                            <div className="feature">
                                <h3>Skilled</h3>
                                <p>Expert craftsmen for every specific task.</p>
                            </div>
                            <div className="feature">
                                <h3>Transparent</h3>
                                <p>Upfront pricing with no hidden fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section cta-banner">
                <div className="container">
                    <h2>Ready to start your project?</h2>
                    <Link to="/contact" className="btn btn-large">Contact Us Today</Link>
                </div>
            </section>
        </div>
    )
}

export default Home
