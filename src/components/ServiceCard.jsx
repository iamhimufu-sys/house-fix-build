import React from 'react'
import '../styles/service-card.css'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ icon, title, description, link = "/contact" }) => {
    return (
        <div className="service-card">
            <div className="card-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link || "/contact"} className="card-link">
                Learn More <ArrowRight size={16} />
            </Link>
        </div>
    )
}

export default ServiceCard
