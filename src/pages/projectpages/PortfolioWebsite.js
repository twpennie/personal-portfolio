import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import "../../styles/PersonalPortfolio.css"


function PortfolioWebsite(){
    return(
    <div>
        <div className="Header">
                <h1>Personal Porfolio Website</h1>
                <p>This website was created to show off some of the personal projects I have created/worked on, as well as learn how to use JavaScript and React.
                    The website is still a work in progress, but has been a great way to expand my skillset. All code for this website is available at the repository linked below!
                </p>
                <a href="https://github.com/twpennie/personal-portfolio" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                </a>
            </div>
    </div>
    );
}

export default PortfolioWebsite;