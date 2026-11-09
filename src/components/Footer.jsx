import githubLogo from "../assets/logos/github-logo.png";
import linkedinLogo from "../assets/logos/linkedin-logo.png";
import stackLogo from "../assets/logos/stack-overflow.png";

const LINKS = [
	{ href: "https://github.com/davitshirkhanyan/", label: "GitHub", logo: githubLogo },
	{ href: "https://www.linkedin.com/in/davit-shirkhanyan-9255b3161/", label: "LinkedIn", logo: linkedinLogo },
	{ href: "https://stackoverflow.com/users/14679770/davit-shirkhanyan", label: "Stack Overflow", logo: stackLogo },
];

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-inner">
				<ul className="social">
					{LINKS.map((link) => (
						<li key={link.label}>
							<a href={link.href} target="_blank" rel="noreferrer">
								<img src={link.logo} alt="" width="36" height="36" />
								<span>{link.label}</span>
							</a>
						</li>
					))}
				</ul>
				<p className="muted small">© {new Date().getFullYear()} Davit Shirkhanyan</p>
			</div>
		</footer>
	);
}
