import { useEffect, useState } from "react";

const LINKS = [
	{ id: "about", label: "About" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "contact", label: "Contact" },
];

export default function Nav() {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState("about");

	// Highlight the section currently on screen.
	useEffect(() => {
		const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: "-45% 0px -50% 0px" }
		);
		sections.forEach((s) => observer.observe(s));
		return () => observer.disconnect();
	}, []);

	return (
		<header className="site-header">
			<div className="container nav-bar">
				<a className="brand" href="#about" onClick={() => setOpen(false)}>
					Davit Shirkhanyan
				</a>
				<button
					type="button"
					className="nav-toggle"
					aria-expanded={open}
					aria-controls="site-nav"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					<span aria-hidden="true">{open ? "✕" : "☰"}</span>
				</button>
				<nav id="site-nav" className={open ? "nav-links open" : "nav-links"} aria-label="Main">
					<ul>
						{LINKS.map((link) => (
							<li key={link.id}>
								<a
									href={`#${link.id}`}
									className={active === link.id ? "active" : undefined}
									aria-current={active === link.id ? "true" : undefined}
									onClick={() => setOpen(false)}
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
