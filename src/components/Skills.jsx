import { skillGroups } from "../data/projects.js";
import resume from "../assets/files/davitshirkhanyan-resume.pdf";

export default function Skills() {
	return (
		<section id="skills" className="section section-alt">
			<div className="container">
				<h2 className="section-title">Skills</h2>
				<div className="skills-grid">
					{skillGroups.map((group) => (
						<div className="skill-group" key={group.title}>
							<h3>{group.title}</h3>
							<ul>
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<p className="resume-cta">
					Want the full picture?{" "}
					<a className="btn btn-primary btn-sm" href={resume} download="Davit-Shirkhanyan-Resume.pdf">
						Download my résumé (PDF)
					</a>
				</p>
			</div>
		</section>
	);
}
