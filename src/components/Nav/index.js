function Nav(props) {
    const { currentTab, setCurrentTab } = props;
   
  
    return (
      <header className="flex-row">
        <h2>
          <a data-testid="link" className="portfolio-title" href="/">
            Davit Shirkhanyan
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <a data-testid="link" href="#about" className={currentTab === "about" ? "mx-2 navActive" : "mx-2 about"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</a>
				<a data-testid="link" href="#portfolio" className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2 portfolio"}>
					<span onClick={() => setCurrentTab("portfolio")}>Portfolio</span>
				</a>
				<a data-testid="link" href="#contact" className={currentTab === "contact" ? "mx-2 navActive" : "mx-2 contact"}>
					<span onClick={() => setCurrentTab("contact")}>Contact</span>
				</a>
				<a data-testid="link" href="#resume" className={currentTab === "resume" ? "mx-2 navActive" : "mx-2 resume"}>
					<span onClick={() => setCurrentTab("resume")}>Resume</span>
				</a>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;