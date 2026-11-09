const TABS = [
  { id: "about", label: "About Me" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume" },
];

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
          {TABS.map((tab) => (
            <li key={tab.id}>
              <a
                data-testid="link"
                href={`#${tab.id}`}
                className={currentTab === tab.id ? "mx-2 navActive" : `mx-2 ${tab.id}`}
                aria-current={currentTab === tab.id ? "page" : undefined}
                onClick={() => setCurrentTab(tab.id)}
              >
                <span>{tab.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
