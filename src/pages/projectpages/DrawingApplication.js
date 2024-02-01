import React from "react";
import gif1 from "../../assets/images/gifs/DrawDemoGif1.gif"
import gif2 from "../../assets/images/gifs/DrawDemoGif2.gif"
import gif3 from "../../assets/images/gifs/DrawDemoGif3.gif"
import gif4 from "../../assets/images/gifs/DrawDemoGif4.gif"
import gif5 from "../../assets/images/gifs/DrawDemoGif5.gif"

function DrawingApplication(){
    return(
        <div>
            <div>
                <p>Drawing Different Shapes</p>
                <img src={gif1} alt="loading.." />
            </div>
            <div>
                <p>Selecting/Moving Shapes and Undo/Redo</p>
                <img src={gif2} alt="loading.." />
            </div>
            <div>
                <p>Composite Shape</p>
                <img src={gif3} alt="loading.." />
            </div>
            <div>
                <p>Loading a File</p>
                <img src={gif4} alt="loading.." />
            </div>
            <div>
                <p>Editing and Saving a File</p>
                <img src={gif5} alt="loading.." />
            </div>
        </div>
        );
}

export default DrawingApplication;