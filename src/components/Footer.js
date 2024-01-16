import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";


function Footer(){
    return <div className="footer">
        <div className="socialMedia">
            <a href="https://www.linkedin.com/in/thomas-p-28195b23b/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://github.com/twpennie" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
            </a>
            <a href="mailto:twpennie@gmail.com" target="_blank" rel="noopener noreferrer">
                <EmailIcon />
            </a>
        </div>
        <p> &copy; 2024 twpennie.com</p>
        </div>;
}

export default Footer;