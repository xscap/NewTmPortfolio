import React from 'react'
import { FaGithub,FaGlobe } from 'react-icons/fa'
const Projects = ({ projects = [] }) => {
	return (
		<section className="projects-card">
			<div className="section-heading">
				<h2>Projects</h2>
			</div>

			<div className="projects-list">
				{projects.map((p) => (
					<article key={p.id} className="project-card">
						<div className="project-media">
							{p.image ? (
								<img src={p.image} alt={p.title} />
							) : (
								<div className="project-thumb">No Image</div>
							)}
						</div>

						<div className="project-body">
							<h4>{p.title} </h4>
							<div className="proj-icons">
								<FaGithub size={18} color="#cbd5e1" style={{ marginLeft: '4px' }} />
								<FaGlobe size={18} color="#cbd5e1" style={{ marginLeft: '10px' }} />	
							</div>
							<p className="muted">{p.description}</p>
							<div className="tag-row">
								{p.tags && p.tags.map((t, i) => (
									<span key={i} className="tag">{t}</span>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Projects
