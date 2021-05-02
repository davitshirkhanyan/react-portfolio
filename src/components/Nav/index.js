function Nav() {
   
  
    return (
      <header className="flex-row">
        <h2>
          <a data-testid="link" className="portfolio-title" href="/">
            Davit Shirkhanyan
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" className="about" href="#about" >
                About me
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="portfolio" className="portfolio" href="#portfolio" >
                Portfolio
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="contact" className="contact" href="#contact" >
              Contact
              </a>
            </li>
            <li className="mx-2">
              <a data-testid="resume" className="resume" href="#resume" >
              Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;