import { featuredProjects, moreProjects } from "../data/projects.js";

function ExternalLink({ href, children, className = "btn btn-primary btn-sm" }) {
	return (
		<a className={className} href={href} target="_blank" rel="noreferrer">
			{children}
			<span className="sr-only"> (opens in a new tab)</span>
		</a>
	);
}

function TechList({ items }) {
	return (
		<ul className="tech-list" aria-label="Technologies used">
			{items.map((t) => (
				<li key={t}>{t}</li>
			))}
		</ul>
	);
}

function FeaturedProject({ project, reverse }) {
	return (
		<article className={reverse ? "featured reverse" : "featured"}>
			<div className="featured-media">
				<img src={project.image} alt={project.imageAlt} loading="lazy" width="1280" height="800" />
			</div>
			<div className="featured-body">
				<h3>{project.name}</h3>
				<p className="tagline">{project.tagline}</p>
				<ul className="highlights">
					{project.highlights.map((h) => (
						<li key={h}>{h}</li>
					))}
				</ul>
				<TechList items={project.tech} />
				<div className="card-actions">
					{project.live && <ExternalLink href={project.live}>Visit site</ExternalLink>}
					{project.github && (
						<ExternalLink href={project.github} className="btn btn-outline btn-sm">
							Code
						</ExternalLink>
					)}
					{!project.github && project.codeNote && <span className="muted small">{project.codeNote}</span>}
				</div>
			</div>
		</article>
	);
}

function ProjectCard({ project }) {
	return (
		<article className="card">
			<img src={project.image} alt={project.imageAlt} loading="lazy" width="1280" height="600" />
			<div className="card-body">
				<h3>
					{project.name}
					{project.team && <span className="badge">Team project</span>}
				</h3>
				<p>{project.description}</p>
				<TechList items={project.tech} />
				<div className="card-actions">
					{project.live && <ExternalLink href={project.live}>Live demo</ExternalLink>}
					{project.github && (
						<ExternalLink href={project.github} className="btn btn-outline btn-sm">
							Code
						</ExternalLink>
					)}
				</div>
			</div>
		</article>
	);
}

export default function Projects() {
	return (
		<section id="projects" className="section">
			<div className="container">
				<h2 className="section-title">Featured projects</h2>
				<div className="featured-list">
					{featuredProjects.map((p, i) => (
						<FeaturedProject key={p.name} project={p} reverse={i % 2 === 1} />
					))}
				</div>

				<h2 className="section-title section-title-sm">Earlier projects</h2>
				<div className="card-grid">
					{moreProjects.map((p) => (
						<ProjectCard key={p.name} project={p} />
					))}
				</div>
				<p className="muted more-link">
					More on{" "}
					<a href="https://github.com/davitshirkhanyan" target="_blank" rel="noreferrer">
						GitHub
					</a>
					.
				</p>
			</div>
		</section>
	);
}
