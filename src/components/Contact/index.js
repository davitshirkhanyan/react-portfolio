import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const MY_EMAIL = "davit.shirkhanyan@gmail.com";

function getError(field, value) {
	const trimmed = value.trim();
	if (field === "email") {
		if (!trimmed) return "Email is required.";
		if (!validateEmail(trimmed)) return "Your email is invalid.";
		return "";
	}
	if (!trimmed) return `${field === "name" ? "Name" : "Message"} is required.`;
	return "";
}

function Contact() {
	const [formState, setFormState] = useState({ name: "", email: "", message: "" });
	const [errors, setErrors] = useState({ name: "", email: "", message: "" });
	const { name, email, message } = formState;
	const errorMessage = errors.name || errors.email || errors.message;

	function handleChange(e) {
		setFormState({ ...formState, [e.target.name]: e.target.value });
	}

	function handleBlur(e) {
		setErrors({ ...errors, [e.target.name]: getError(e.target.name, e.target.value) });
	}

	function handleSubmit(e) {
		e.preventDefault();
		const newErrors = {
			name: getError("name", name),
			email: getError("email", email),
			message: getError("message", message),
		};
		setErrors(newErrors);
		if (newErrors.name || newErrors.email || newErrors.message) return;

		const subject = `Portfolio message from ${name.trim()}`;
		const text = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
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
				<form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
					<div>
						<label htmlFor="contact-name" className="input-title">Name:</label>
						<br />
						<input
							id="contact-name"
							type="text"
							name="name"
							value={name}
							onChange={handleChange}
							onBlur={handleBlur}
							size="60"
							placeholder="Please Enter your Name"
						/>
					</div>
					<div>
						<label htmlFor="contact-email" className="input-title">Email address:</label>
						<br />
						<input
							id="contact-email"
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							onBlur={handleBlur}
							size="60"
							placeholder="Please Enter your Email Address"
						/>
					</div>
					<div>
						<label htmlFor="contact-message" className="message">Message:</label>
						<br />
						<textarea
							id="contact-message"
							name="message"
							value={message}
							onChange={handleChange}
							onBlur={handleBlur}
							rows="7"
							placeholder="Message"
						/>
					</div>
					{errorMessage && (
						<div>
							<p className="error-text" role="alert">{errorMessage}</p>
						</div>
					)}
					<button type="submit" className="submit-btn">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
