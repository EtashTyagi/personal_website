import React from 'react';
import globalVariables from "../../other/GlobalVariables";
import PictureCard from "../PictureCard";
import resume from "../../../resources/resume_scr.PNG"
import interactiveLight from "../../../resources/interactive_light.PNG"
import useWindowDimensions from "../../other/useWindowDimensions";

const Resume = () => {
    const {height, width}=useWindowDimensions();
    const flexDir = (height>0.85*width ? "column" : "row");
    const cardWidth=(height>0.85*width ? 85 : 48);
    const cardStyle={width:`${cardWidth}vw`, maxWidth:"100%"};
    return (
        <div className={"mainContents " + globalVariables.colorMode} style={
            {justifyContent:"space-evenly",
                flexDirection: flexDir,
                alignItems:"center"}}>
            <a rel={"noreferrer"} style={{textDecoration:"none", color:"inherit"}}
               href={"https://drive.google.com/file/d/1kVBPNnSOb8-VCF58reKhRxOSMkhKNZqx/view?usp=sharing"} target={"_blank"}>
                <PictureCard head={"Official Resume"} body={"Google Drive"} image={resume} style={cardStyle}/>
            </a>
            <PictureCard link={true}
                         to={globalVariables.rootDir+"/"+globalVariables.componentNameToAddress["Interactive Resume"]}
                         head={"Interactive Resume"}
                         body={"Mario type game.[Incomplete]"}
                         image={interactiveLight} style={cardStyle}/>
        </div>
    );
};

export default Resume;