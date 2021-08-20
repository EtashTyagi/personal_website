import React from 'react';
import globalVariables from "../../other/GlobalVariables";
import PictureCard from "../PictureCard";
import selfImage from "../../../resources/SelfWebsite.jpg";
import colorSwitchImg from "../../../resources/ColorSwitch.PNG"
import kasekiImage from "../../../resources/Kaseki.jpg"
import arduinoImage from "../../../resources/Arduino.PNG"
import useWindowDimensions from "../../other/useWindowDimensions";

// Images must be 1600*900

const Projects = () => {
    const {height, width}=useWindowDimensions();
    const flexDir = (height>0.85*width ? "column" : "row");
    const cardWidth=(height>0.85*width ? 80 : 45);
    const cardStyle={width:`${cardWidth}vw`, maxWidth:"100%"};
    const align=(flexDir==="column"?"center":"stretch")
    return (
        <div className={"mainContents " + globalVariables.colorMode} style={
            {justifyContent:"space-evenly",
                flexWrap:"wrap",
                flexDirection: flexDir,
                alignItems:align, paddingTop:"14px", paddingBottom:"14px"}}>

            <PictureCard link={true}
                         to={globalVariables.rootDir+"/"+globalVariables.componentNameToAddress["Kaseki"]}
                         head={"Kaseki Android App"}
                         body={"Youtube Song Downloader And Player"}
                         image={kasekiImage}
                         style={cardStyle}/>

            <PictureCard link={true}
                         to={globalVariables.rootDir+"/"+globalVariables.componentNameToAddress["Color Switch"]}
                         head={"Color Switch Game"}
                         body={"JavaFX desktop game without any game library"}
                         image={colorSwitchImg}
                         style={cardStyle}/>


            <PictureCard link={true}
                         to={globalVariables.rootDir+"/"+globalVariables.componentNameToAddress["This Website"]}
                            head={"This Website"} body={"ReactJS Front End Website"}
                            image={selfImage}
                            style={cardStyle}/>

            <PictureCard link={true}
                         to={globalVariables.rootDir+"/"+globalVariables.componentNameToAddress["Arduino Game"]}
                         head={"Arduino Game and Controller"}
                         body={"Pong android game with arduino controller"}
                         image={arduinoImage}
                         style={cardStyle}/>


        </div>
    );
};

export default Projects;