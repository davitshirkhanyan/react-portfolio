import React, { useState } from "react";
import { validateEmail, checkBlank } from "../../utils/helpers";

const CONTACT_EMAIL = "davit.shirkhanyan@gmail.com";

const LABELS = {
	name: "Name",
	email: "Email address",
	message: "Message",
};

// Returns an error message for a field, or "" if it's valid.
function validateField(field, value) {
	if (checkBlank(value)) {
		return `${LABELS[field]} is required.`;
	}
	if (field === "email" && !validateEmail(value)) {
		return "Your email is invalid.";
	}
	return "";
}

function Contact() {
	const [formState, setFormState] = useState({ name: "", email: "", message: "" });
	const [errors, setErrors] = useState({});
	const [sent, setSent] = useState(false);
	const { name, email, message } = formState;

	function handleChange(e) {
		const { name: field, value } = e.target;
		setFormState({ ...formState, [field]: value });
		setSent(false);
		// Clear a field's error as soon as it becomes valid while typing.
		if (errors[field] && !validateField(field, value)) {
			setErrors({ ...errors, [field]: "" });
		}
	}

	function handleBlur(e) {
		const { name: field, value } = e.target;
		setErrors({ ...errors, [field]: validateField(field, value) });
	}

	function handleSubmit(e) {
		e.preventDefault();

		const newErrors = {};
		Object.keys(formState).forEach((field) => {
			newErrors[field] = validateField(field, formState[field]);
		});
		setErrors(newErrors);
		if (Object.values(newErrors).some(Boolean)) {
			return;
		}

		// The site is static (no server to send mail), so open the visitor's
		// email app with the message filled in.
		const subject = `Portfolio contact from ${name.trim()}`;
		const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
		window.location.href =
			`mailto:${CONTACT_EMAIL}` +
			`?subject=${encodeURIComponent(subject)}` +
			`&body=${encodeURIComponent(body)}`;
		setSent(true);
	}

	const errorList = Object.values(errors).filter(Boolean);

	return (
		<section>
			<div className="contactDiv">
				<h2 className="contact-title" id="contact">Contact Me</h2>
			</div>
			<div className="formDiv">
				<form id="contact-form" className="contact-form" onSubmit={handleSubmit} noValidate>
					<div>
						<label htmlFor="contact-name" className="input-title">Name:</label>
						<br></br>
						<input
							id="contact-name"
							type="text"
							name="name"
							value={name}
							onChange={handleChange}
							onBlur={handleBlur}
							size="60"
							placeholder="Please Enter your Name"
							aria-invalid={!!errors.name}
						/>
					</div>
					<div>
						<label htmlFor="contact-email" className="input-title">Email address:</label>
						<br></br>
						<input
							id="contact-email"
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							onBlur={handleBlur}
							size="60"
							placeholder="Please Enter your Email Address"
							aria-invalid={!!errors.email}
						/>
					</div>
					<div>
						<label htmlFor="contact-message" className="message">Message:</label>
						<br></br>
						<textarea
							id="contact-message"
							name="message"
							value={message}
							onChange={handleChange}
							onBlur={handleBlur}
							rows="7"
							placeholder="Message"
							aria-invalid={!!errors.message}
						/>
					</div>
					{errorList.length > 0 && (
						<div role="alert">
							{errorList.map((err) => (
								<p key={err} className="error-text">{err}</p>
							))}
						</div>
					)}
					{sent && (
						<p role="status">
							Your email app should open with the message ready to send. If it
							doesn't, email me at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
						</p>
					)}
					<button type="submit" className="submit-btn">Submit</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
