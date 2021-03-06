import React from 'react';
import globalVariables from "../../other/GlobalVariables";
import PictureCard from "../PictureCard";
import resume from "../../../resources/resume_scr.PNG"
import useWindowDimensions from "../../other/useWindowDimensions";

/* Image dims 1600*900 */

const Resume = () => {
    const {height, width}=useWindowDimensions();
    const flexDir = (height>0.85*width ? "column" : "row");
    const cardWidth=(height>0.85*width ? 80 : 45);
    const cardStyle={width:`${cardWidth}vw`, maxWidth:"100%"};
    return (
        <div className={"mainContents " + globalVariables.colorMode}  style={
            {justifyContent:"space-evenly",
                flexWrap:"wrap",
                flexDirection: flexDir,
                alignItems:"center", paddingTop:"14px", paddingBottom:"14px"}}>
            <a rel={"noreferrer"} style={{textDecoration:"none", color:"inherit"}}
               href={"https://drive.google.com/file/d/1kVBPNnSOb8-VCF58reKhRxOSMkhKNZqx/view?usp=sharing"} target={"_blank"}>
                <PictureCard head={"Official Resume"} body={"Google Drive"} image={resume} style={cardStyle}/>
            </a>

        </div>
    );
};

export default Resume;