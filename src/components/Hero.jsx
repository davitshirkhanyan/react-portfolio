import photo from "../assets/images/davitshirkhanyan.jpg";
import resume from "../assets/files/davitshirkhanyan-resume.pdf";

export default function Hero() {
	return (
		<section id="about" className="hero section">
			<div className="container hero-grid">
				<div className="hero-text">
					<p className="eyebrow">Full-stack developer</p>
					<h1>
						I build fast, friendly web apps with <span className="accent">React</span> and{" "}
						<span className="accent">Node.js</span>.
					</h1>
					<p className="lead">
						I’m Davit, a UCLA Full Stack Development graduate. I enjoy turning real-world needs into
						polished products, from a multilingual website with an AI assistant for a family-run
						after-school center to apps that pull together live data from several APIs.
					</p>
					<p className="lead">
						I care about clean, accessible interfaces, reliable back ends, and shipping work that
						people actually use.
					</p>
					<div className="hero-actions">
						<a className="btn btn-primary" href="#projects">See my work</a>
						<a className="btn btn-outline" href="#contact">Get in touch</a>
						<a className="btn btn-link" href={resume} download="Davit-Shirkhanyan-Resume.pdf">
							Download résumé
						</a>
					</div>
				</div>
				<img
					className="hero-photo"
					src={photo}
					alt="Portrait of Davit Shirkhanyan"
					width="300"
					height="300"
				/>
			</div>
		</section>
	);
}
