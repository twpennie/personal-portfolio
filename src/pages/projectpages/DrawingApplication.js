import React from "react";
import gif1 from "../../assets/images/gifs/DrawDemoGif1.gif";
import gif2 from "../../assets/images/gifs/DrawDemoGif2.gif";
import gif3 from "../../assets/images/gifs/DrawDemoGif3.gif";
import gif4 from "../../assets/images/gifs/DrawDemoGif4.gif";
import gif5 from "../../assets/images/gifs/DrawDemoGif5.gif";
import "../../styles/DrawingApplication.css";

function DrawingApplication(){
    return(
        <div>
            <div className="HeaderContainer">
                <h1>Drawing Application</h1>
                <p>This application was created using C++ and Microsoft Visual Studio. Similar to Microsoft Paint or Draw.io,
                    the user can draw various shapes. Also included are various common functionalities such as undo/redo, selecting shapes,
                    deleting shapes, and creating composite shapes.
                    The main purpose of this project was to practice using object oriented design patterns. The design patterns used in this application are
                    command, model-view-controller, observer, and composite. The application also supports file saving and loading. Code for this project is in a private repository
                    as the code was used as a class project. If interested, send me an email and I would be happy to discuss the code! Functionality can be seen below.
                </p>
                
            </div>
            <div className="DemoContainer">
                <p>Drawing Different Shapes</p>
                <img src={gif1} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <p>Selecting/Moving Shapes and Undo/Redo</p>
                <img src={gif2} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <p>Composite Shape</p>
                <img src={gif3} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <p>Loading a File</p>
                <img src={gif4} alt="loading.." />
            </div>
            <div className="DemoContainer">
                <p>Editing and Saving a File</p>
                <img src={gif5} alt="loading.." />
            </div>
        </div>
        );
}

export default DrawingApplication;