const tabs = [
	{ id: "about", label: "About Me" },
	{ id: "portfolio", label: "Portfolio" },
	{ id: "contact", label: "Contact" },
	{ id: "resume", label: "Resume" },
];

function Nav({ currentTab, setCurrentTab }) {
	return (
		<header className="flex-row">
			<h2>
				<a data-testid="link" className="portfolio-title" href="/">
					Davit Shirkhanyan
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					{tabs.map(({ id, label }) => (
						<li key={id}>
							<a
								data-testid="link"
								href={`#${id}`}
								className={currentTab === id ? "mx-2 navActive" : `mx-2 ${id}`}
								aria-current={currentTab === id ? "page" : undefined}
								onClick={() => setCurrentTab(id)}
							>
								{label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
