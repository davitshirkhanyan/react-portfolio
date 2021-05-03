import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const { name, email, message } = formState;

	function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	return (
		<section>
			<div className="contactDiv">
				<h2 className="contact-title" id="contact">Contact Me</h2>
			</div>
			<div className="formDiv">
				<form id="contact-form" className="contact-form">
					<div>
						<label htmlFor="Name" className="input-title">Name:</label>
						<br></br>
						<input
							type="text"
							defaultValue={name}
							onBlur={handleBlank}
							name="Name"
                            size="60"
                            placeholder="Please Enter your Name"
						/>
					</div>
					<div>
						<label htmlFor="email" className="input-title">Email address:</label>
						<br></br>
						<input
							type="email"
							defaultValue={email}
							name="email"
							onBlur={handleChange}
                            size="60"
                            placeholder="Please Enter your Email Address"
						/>
					</div>
					<div>
						<label htmlFor="Message" className="message">Message:</label>
						<br></br>
						<textarea
							name="Message"
							defaultValue={message}
							onBlur={handleBlank}
							rows="7"
                            placeholder="Message"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
					<button type="submit">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;