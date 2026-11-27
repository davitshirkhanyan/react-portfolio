import React from "react";
import Card from "react-bootstrap/Card";

function Project({ project }) {
	const { name, image, technologies, deployed, github } = project;

	return (
		<Card id="main-card">
			<Card.Img
				id="card-img"
				variant="top"
				src={require(`../../assets/images/${image}`).default}
				alt={`Screenshot of ${name}`}
				loading="lazy"
				className="card-image"
			/>
			<div className="cardDiv">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
					<Card.Text className="card-techs">{technologies.join(", ")}</Card.Text>
					{deployed && (
						<a href={deployed} target="_blank" rel="noreferrer" className="card-btn">
							{name} App
						</a>
					)}
					{github && (
						<a href={github} target="_blank" rel="noreferrer" className="card-btn">
							{name} Github
						</a>
					)}
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;
