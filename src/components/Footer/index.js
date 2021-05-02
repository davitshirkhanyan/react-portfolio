import githubLogo from "../../assets/logos/github-logo.png";
import linkedinLogo from "../../assets/logos/linkedin-logo.png";
import stackLogo from "../../assets/logos/stack-overflow.png";

function Footer () {
    return (    
    <footer className="footer">
        <div className="copyright">
                <a href="https://github.com/davitshirkhanyan/" target="_blank" rel="noreferrer">
                    <img src={githubLogo} className="github-logo" alt="Github Logo"></img></a>
                <a href="https://www.linkedin.com/in/davit-shirkhanyan-9255b3161/" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} className="linkedin-logo" alt="Github Logo"></img></a>
                <a href="https://stackoverflow.com/users/14679770/davit-shirkhanyan" target="_blank" rel="noreferrer">
                <img src={stackLogo} className="stack-logo" alt="Github Logo"></img></a>
        </div>
    </footer>
    );
}
    
    export default Footer;