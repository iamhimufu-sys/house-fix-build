import React from 'react'
import { CheckCircle, Users, Award, ShieldCheck } from 'lucide-react'
import '../styles/about.css'

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1>About House Fix & Build</h1>
                    <p>Building trust and homes with over 15 years of experience.</p>
                </div>
            </div>

            <div className="container">
                <section className="about-section mission">
                    <div className="about-text">
                        <h2>Our Mission</h2>
                        <p>
                            At House Fix & Build, our mission is simple: to provide top-quality construction and repair services
                            that homeowners can trust. We believe in transparency, reliability, and craftsmanship that stands the test of time.
                        </p>
                        <p>
                            Whether it's a small repair or a large-scale renovation, we treat every project with the same level of care
                            and attention to detail. Your home is your sanctuary, and we are here to help you maintain and improve it.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-card">
                            <h3>15+</h3>
                            <p>Years Experience</p>
                        </div>
                        <div className="stat-card">
                            <h3>500+</h3>
                            <p>Projects Completed</p>
                        </div>
                        <div className="stat-card">
                            <h3>100%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                    </div>
                </section>

                <section className="about-section values">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <ShieldCheck size={40} className="value-icon" />
                            <h3>Safety First</h3>
                            <p>We adhere to strict safety protocols to protect our workers and your property.</p>
                        </div>
                        <div className="value-card">
                            <Award size={40} className="value-icon" />
                            <h3>Quality</h3>
                            <p>We use only the best materials and proven techniques to ensure lasting results.</p>
                        </div>
                        <div className="value-card">
                            <Users size={40} className="value-icon" />
                            <h3>Customer Focus</h3>
                            <p>Your satisfaction is our priority. We listen, plan, and deliver exactly what you need.</p>
                        </div>
                        <div className="value-card">
                            <CheckCircle size={40} className="value-icon" />
                            <h3>Integrity</h3>
                            <p>Honest pricing, clear communication, and no hidden surprises.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
