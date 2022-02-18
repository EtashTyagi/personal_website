import React from 'react';
import globalVariables from "../../other/GlobalVariables";
import PictureCard from "../PictureCard";
import selfImage from "../../../resources/SelfWebsite.jpg";
import ecommerceImg from "../../../resources/fcs_ecommerce.png"
import colorSwitchImg from "../../../resources/ColorSwitch.PNG"
import kasekiImage from "../../../resources/Kaseki.jpg"
import arduinoImage from "../../../resources/Arduino.PNG"
import useWindowDimensions from "../../other/useWindowDimensions";
import marioLight from "../../../resources/mario_light.PNG";
import marioDark from "../../../resources/mario_dark.PNG";

// Images must be 1600*900

const Projects = () => {
    const {height, width}=useWindowDimensions();
    const flexDir = (width < 980 ? "column" :  "row");
    const cardWidth=(width < 980 ? "600px" : (width < 1400) ? "45%" : "30%");
    const cardStyle={width:`${cardWidth}`, maxWidth:"90%"};
    const mario = {"dark":marioDark, "light":marioLight}
    return (
        <div className={"mainContents " + globalVariables.colorMode} style={
            {justifyContent:"space-evenly",
                flexWrap:"wrap",
                flexDirection: flexDir,
                alignItems:"center", paddingTop:"14px", paddingBottom:"14px"}}>

            <PictureCard link={true}
                         to={globalVariables.rootDir+globalVariables.componentNameToAddress["ElectroVerse"]}
                         head={"ElectroVerse e-commerce"}
                         body={"Full stack secure Django E-commerce app."}
                         image={ecommerceImg}
                         style={cardStyle}/>

            <PictureCard link={true}
                         to={globalVariables.rootDir+globalVariables.componentNameToAddress["Kaseki"]}
                         head={"Kaseki Android App"}
                         body={"Youtube Song Downloader And Player"}
                         image={kasekiImage}
                         style={cardStyle}/>

            <PictureCard link={true}
                         to={globalVariables.rootDir+globalVariables.componentNameToAddress["Color Switch"]}
                         head={"Color Switch Game"}
                         body={"JavaFX desktop game without any game library"}
                         image={colorSwitchImg}
                         style={cardStyle}/>


            <PictureCard link={true}
                         to={globalVariables.rootDir+globalVariables.componentNameToAddress["This Website"]}
                            head={"This Website"} body={"ReactJS Front End Website"}
                            image={selfImage}
                            style={cardStyle}/>

            <PictureCard link={true}
                         to={globalVariables.rootDir+globalVariables.componentNameToAddress["Arduino Game"]}
                         head={"Arduino Game and Controller"}
                         body={"Pong android game with arduino controller"}
                         image={arduinoImage}
                         style={cardStyle}/>

            <PictureCard link={true}
                         to={globalVariables.rootDir+globalVariables.componentNameToAddress["Mario Game"]}
                         head={"Mario Game"}
                         body={"[Incomplete]"}
                         image={mario[globalVariables.colorMode]} style={cardStyle}/>


        </div>
    );
};

export default Projects;
