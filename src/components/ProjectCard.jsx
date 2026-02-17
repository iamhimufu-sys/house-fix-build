import React from 'react'
import '../styles/project-card.css'
import { ArrowRight } from 'lucide-react'

const ProjectCard = ({ title, category, image, description }) => {
    return (
        <div className="project-card">
            <div className="project-image-container">
                {/* Placeholder for image if no src provided */}
                {image ? (
                    <img src={image} alt={title} className="project-image" />
                ) : (
                    <div className="project-placeholder">
                        <span>Project Image</span>
                    </div>
                )}
                <div className="project-overlay">
                    <button className="view-btn">View Details <ArrowRight size={16} /></button>
                </div>
            </div>
            <div className="project-content">
                <span className="project-category">{category}</span>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard
