import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const MY_EMAIL = "davit.shirkhanyan@gmail.com";

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

	function handleSubmit(e) {
		e.preventDefault();
		const form = e.target;
		const senderName = form.Name.value.trim();
		const senderEmail = form.email.value.trim();
		const body = form.Message.value.trim();

		if (!senderName || !body) {
			setErrorMessage("Name and Message are required.");
			return;
		}
		if (!validateEmail(senderEmail)) {
			setErrorMessage("Your email is invalid.");
			return;
		}
		setErrorMessage("");

		const subject = `Portfolio message from ${senderName}`;
		const text = `${body}\n\n${senderName}\n${senderEmail}`;
		window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
	}

	return (
		<section>
			<div className="contactDiv">
				<h2 className="contact-title" id="contact">Contact Me</h2>
				<p className="contact-email">
					Email me at <a href={`mailto:${MY_EMAIL}`}>{MY_EMAIL}</a> or use the form below.
				</p>
			</div>
			<div className="formDiv">
				<form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
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
					<button type="submit" className="submit-btn">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;