import githubicon from "../../media/icons/github.svg";
import linkedinicon from "../../media/icons/linkedin.svg";
import emailicon from "../../media/icons/email.svg";

function Footer() {
    return (
        <footer className="footer-base flex">
        <div className="footer-heading">Social Links</div>
        <ul className="footer-social-links list-style-none flex">
            <li><a href="https://linkedin.com/in/abhijeetsingla1553" target="_blank" rel="noopener noreferrer"><img src={linkedinicon} alt="linkedin" width="25px" height="25px" /></a></li>
            <li><a href="https://github.com/AbhijeetSingla" target="_blank" rel="noopener noreferrer"><img src={githubicon} alt="github" width="25px" height="25px" /></a></li>
            <li><a href="mailto:abhijeetsingla1553@gmail.com" ><img src={emailicon} alt="email" width="25px" height="25px" /></a></li>
        </ul>
        <p>Copyright © 2022. Made by Abhijeet Singla</p>
        </footer>
    );
}

export default Footer;