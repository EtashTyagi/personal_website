import React from 'react';
import {Link} from "react-router-dom";

const ColorSwitch = () => {
    return (
        <div className={"mainContents"} style={{flexDirection:"column", alignItems:"center", justifyContent:"center", fontSize:28}}>
            <a target={"_blank"} href={"https://github.com/EtashTyagi/Color-Switch-Game"} rel={"noreferrer"}>Source Code</a>
            <Link target="_blank" to={"/downloads/Color_Switch.jar"} download>Download JAR</Link>
        </div>
    );
};

export default ColorSwitch;