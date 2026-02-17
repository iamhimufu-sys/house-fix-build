import React from 'react'
import ProjectCard from '../components/ProjectCard'
import '../styles/projects.css'

const Projects = () => {
    const projects = [
        { title: 'Modern Kitchen Remodel', category: 'Renovation', description: 'Complete overhaul of a 1980s kitchen into a modern chef\'s paradise.' },
        { title: 'Luxury Bathroom Suite', category: 'Plumbing & Tile', description: 'Spa-like master bathroom with heated floors and rain shower.' },
        { title: 'Custom Deck Construction', category: 'Carpentry', description: 'Multi-level cedar deck with built-in seating and pergola.' },
        { title: 'Whole Home Painting', category: 'Painting', description: 'Interior and exterior painting for a freshly built colonial home.' },
        { title: 'Basement Conversion', category: 'Renovation', description: 'Transforming an unfinished basement into a home theater and gym.' },
        { title: 'Roof Replacement', category: 'Roofing', description: 'Installation of high-durability architectural shingles.' },
    ]

    return (
        <div className="projects-page">
            <div className="projects-header">
                <div className="container">
                    <h1>Our Recent Work</h1>
                    <p>Browse through our gallery of completed projects demonstrating our quality and craftsmanship.</p>
                </div>
            </div>

            <div className="container projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
