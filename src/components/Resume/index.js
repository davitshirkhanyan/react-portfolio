import resume from "../../assets/files/davitshirkhanyan-resume.pdf"

function Resume() {
	return (
		<section>
            <div>
			<div className="resumeDiv">
				<h1 className="resume-title" id="resume">My Resume</h1>
			</div>
			<div className="downloadDiv">
            <span className="resDownload">Download my </span><a href={resume} download className="resume"><span>Resume</span></a>
			</div>
            </div>
			<div className="skillsDiv">
                <div className="skills-1">
				<h5>Front-End</h5>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				</ol>
				<h5>Back-End</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View <br />Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web <br /> Applications (PWA)</li>
				</ol>
                </div>
                <div className="skills-2">
				<h5>Dev Tools</h5>
				<ol>
					<li>Git</li>
					<li>Jest</li>
					<li>Webpack</li>
					<li>Stripe</li>
				</ol>
				<h5>Database</h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
                </div>
			</div>
		</section>
	);
}

export default Resume;
