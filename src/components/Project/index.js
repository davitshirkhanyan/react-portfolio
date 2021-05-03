import React, { useState } from "react";
import Card from "react-bootstrap/Card";


function Project(props) {
	// This imports the information for the current project sent down.
	const currentProject = useState(props)[0].projects;
	const name = currentProject.name;
	const image = currentProject.image;
	const techs = currentProject.technologies;
	const appLink = currentProject.deployed;
	const gitLink = currentProject.github;

	// This function parses the information from the array and creates a list.
	function getTechs(techArray) {
		let techList = "";

		for (let i = 0; i < techArray.length; i++) {
			if (i === techArray.length - 1) {
				techList += techArray[i];
			} else {
				techList += techArray[i] + ", ";
			}
		}

		return techList;
	}

	return (
        
		<Card id="main-card">
			<Card.Img id="card-img"
				variant="top"
				src={(`../../assets/images/${image}`).default}
                alt={image.name}
				className="card-image"
			/>
			<div className="cardDiv">
				<Card.Body>
					<Card.Title className="card-title">{name}</Card.Title>
					<Card.Subtitle className="card-subtitle">Techs Used</Card.Subtitle>
					<Card.Text className="card-techs">{getTechs(techs)}</Card.Text>
					<button><Card.Link href={appLink} target="_blank" className="card-link">
						{name} App
					</Card.Link></button>
					<br></br>
					<button><Card.Link href={gitLink} target="_blank" className="card-link">
						{name} Github
					</Card.Link></button>
				</Card.Body>
			</div>
		</Card>
	);
}

export default Project;