import React from "react";
import pic2 from "../../assets/images/BasicGPSOutput.PNG"
import pic1 from "../../assets/images/GPSascii.PNG"
import GithubIcon from "@material-ui/icons/GitHub";
import "../../styles/BasicGPS.css"


function BasicGPS(){
    return (
        <div>
            <div className="HeaderContainer">
                <h1>Basic Graph Algorithms</h1>
                <p>This is a basic application that demonstrates some Graph data type capabilities and algorithms.
                    For demonstration purposes, the algorithms were set up to demonstrate how they might be used as the basics 
                    for a GPS application. I wrote this code after taking one of my first coding courses, and it shows how much I have progressed as a programmer.
                    For future developments, I will add a UI and animations to visualize the algorithms working.
                </p>
            </div>
            <div className="DemoContainer">
                <p>Graph Used</p>
                <img src={pic1} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <p>Example Output Running LowestCost("New London")</p>
                <img src={pic2} alt="loading.." />
                <p>Output Format:</p>
                <p>destination city: (distance from source, previous city visited)</p>
                
            </div>
            <div className="HeaderContainer">
                <a href="https://github.com/twpennie/GPS-Simulation" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </div>
        </div>
    );
}

export default BasicGPS;