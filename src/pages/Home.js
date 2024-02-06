import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css";

function Home(){
    return (
    <div className="home">
        <div className="about">
            <h2> Thomas Pennie</h2>
            <div className="prompt"> 
            <p> Software Developer graduating in May 2024</p>
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
            </div>
            </div>
            <div className="skills"> 
            <h1> Skills</h1>
            <ol className="list">
                <li className="item">
                    <h2> Computer Programming </h2>
                    <span> 
                        Python, Java, C++, C, SQL, JavaScript,
                        React, Scheme, RISC-V Assembly 
                    </span>
                </li>
                <li className="item">
                    <h2> App Development </h2>
                    <span> 
                        Android Studio, Kotlin, Firebase, Tensorflow
                    </span>
                </li>
                <li className="item">
                    <h2> CyberSecurity </h2>
                    <span> 
                        Hashing/Salting Data, Homomorphic Encryption,
                        Penetration Testing, Cryptography
                    </span>
                </li>
            </ol>
            </div>
        </div>
    );
}

export default Home;