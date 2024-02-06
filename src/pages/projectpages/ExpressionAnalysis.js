import React from "react";
import pic1 from "../../assets/images/MoodImage1.png";
import pic2 from "../../assets/images/MoodImage2.png";
import pic3 from "../../assets/images/MoodImage3.png";
import GithubIcon from "@material-ui/icons/GitHub";
import "../../styles/ExpressionAnalysis.css"; 





function ExpressionAnalysis() {
    return (
        <div className="ExpressionAnalysisContainer">
            <div className="HeaderContainer">
                <h1>Expression Analysis Mobile Application</h1>
                <p>This application is a basic mobile app that runs some analysis on facial expressions, which I created to learn more about app development and neural networks. The application takes as input an image saved to the local device,
                    and outputs some information about the person in the photograph including some expression analysis. This is achieved using Firebase's Machine Learning kit
                    for face detection. These screenshots show most recent functionality, although this application is a work in progress.
                </p>
                <a href="https://github.com/twpennie/MoodRecognitionAndroidApplication" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
                </a>
            </div>
            <div className="DemoContainer">
                <img src={pic1} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <img src={pic2} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <img src={pic3} alt="loading.." />
            </div>
        </div>
    );
}

export default ExpressionAnalysis;
