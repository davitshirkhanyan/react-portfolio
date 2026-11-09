import { useState } from "react";
import { validateEmail, checkBlank } from "../utils/helpers.js";

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
		return "Please enter a valid email address.";
	}
	return "";
}

export default function Contact() {
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

	function fieldProps(field) {
		return {
			id: `contact-${field}`,
			name: field,
			value: formState[field],
			onChange: handleChange,
			onBlur: handleBlur,
			"aria-invalid": errors[field] ? true : undefined,
			"aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
		};
	}

	function FieldError({ field }) {
		return errors[field] ? (
			<p className="field-error" id={`contact-${field}-error`}>
				{errors[field]}
			</p>
		) : null;
	}

	return (
		<section id="contact" className="section">
			<div className="container contact-grid">
				<div>
					<h2 className="section-title">Let’s talk</h2>
					<p className="lead">
						Have a role, a project or a question? Send me a message, or email me directly at{" "}
						<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
					</p>
				</div>

				<form className="contact-form" onSubmit={handleSubmit} noValidate>
					<div className="field">
						<label htmlFor="contact-name">Name</label>
						<input type="text" autoComplete="name" {...fieldProps("name")} />
						<FieldError field="name" />
					</div>
					<div className="field">
						<label htmlFor="contact-email">Email address</label>
						<input type="email" autoComplete="email" {...fieldProps("email")} />
						<FieldError field="email" />
					</div>
					<div className="field">
						<label htmlFor="contact-message">Message</label>
						<textarea rows="6" {...fieldProps("message")} />
						<FieldError field="message" />
					</div>
					<button type="submit" className="btn btn-primary">Send message</button>
					{sent && (
						<p className="form-status" role="status">
							Your email app should open with the message ready to send. If it doesn’t, email me at{" "}
							<a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
						</p>
					)}
				</form>
			</div>
		</section>
	);
}
