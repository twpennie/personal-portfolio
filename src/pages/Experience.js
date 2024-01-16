import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import FlagIcon from "@material-ui/icons/Flag";
import WorkIcon from "@material-ui/icons/Work";
import AndroidIcon from "@material-ui/icons/Android";
import StarIcon from "@material-ui/icons/Star";
import LockIcon from '@material-ui/icons/Lock';





function Experience(){
    const centeredTextStyle = {
        textAlign: "center"
    };
    return (
    <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education" animate={true} 
            date="Graduated Spring 2019"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> Lyme-Old Lyme High School
                </h3>
                <p style={centeredTextStyle}> High School Diploma </p>


            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" animate={true} 
            date="Started Attending Fall 2019"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<SchoolIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> University of Connecticut
                </h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" animate={true} 
            date="Spring 2021"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<AndroidIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> UCONN School of Engineering
                </h3>
                <p style={centeredTextStyle}> 
                    Switched majors to Computer Science
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" animate={true} 
            date="Hired Spring 2022"
            iconStyle={{background: "#e9d35b", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> UCONN School of Engineering
                </h3>
                <p style={centeredTextStyle}> 
                    Computer Science Peer Mentor
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" animate={true} 
            date="Summer 2023"
            iconStyle={{background: "#e9d35b", color: "#fff"}}
            icon={<WorkIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> OTIS Elevator Co.
                </h3>
                <p style={centeredTextStyle}> 
                    Software Engineering Internship
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" animate={true} 
            date="Fall 2023"
            iconStyle={{background: "#e9d35b", color: "#fff"}}
            icon={<LockIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> The Hartford Insurance
                </h3>
                <p style={centeredTextStyle}> 
                    Senior Design Project: Homomorphic Encryption
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education" animate={true} 
            date="Graduation: May 2024"
            iconStyle={{background: "#3e497a", color: "#fff"}}
            icon={<FlagIcon/>}
            >
                <h3 className="vertical-timeline-element-title" style={centeredTextStyle}> Bachelor of Science: Computer Science
                </h3>
                <p style={centeredTextStyle}> 
                Concentration: Software Design and Development
                </p>
                <p style={centeredTextStyle}>
                Minor: Psychological Sciences 
                </p>
            </VerticalTimelineElement>
        <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
        />
        </VerticalTimeline>
    </div>
    );
}

export default Experience;