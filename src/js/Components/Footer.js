import React from 'react';
import '../../css/Footer.css'
import "../../css/App.css"
import linkedinIcon from "../../resources/linkedinIcon.svg"
import facebookIcon from "../../resources/facebookIcon.svg"
import githubIcon from "../../resources/githubIcon.svg"
import hackerrankIcon from "../../resources/hackerrankIcon.svg"
import codeforcesIcon from "../../resources/codeforcesIcon.svg"
import codechefIcon from "../../resources/codechefIcon.svg"
import globalVariables from "../other/GlobalVariables";

const Footer = () => {
    return (
        <div style={{zIndex:1}}>
            <div className={"mainContainer "+globalVariables.colorMode + " footer"}>
                <span style={{paddingLeft:24}}>©Etash Tyagi, 2021</span>
            </div>
            <div className={"hLine "+globalVariables.colorMode}/>
            <div style={{justifyContent: "space-evenly"}} className={"mainContainer "+globalVariables.colorMode + " footer"}>
                <SocialLinks src={githubIcon} name={"Github"} link={globalVariables.githubLink}/>
                <SocialLinks src={linkedinIcon} name={"LinkedIn"} link={globalVariables.linkedinLink}/>
                <SocialLinks src={hackerrankIcon} name={"HackerRank"} link={globalVariables.hackerrankLink}/>
                <SocialLinks src={codeforcesIcon} name={"Codeforces"} link={globalVariables.codeforcesLink}/>
                <SocialLinks src={codechefIcon} name={"CodeChef"} link={globalVariables.codechefLink}/>
                <SocialLinks src={facebookIcon} name={"Facebook"} link={globalVariables.facebookLink}/>
            </div>
        </div>

    );
};

const SocialLinks = (props) => {
    return (
        <div>
            <a className={"links footer"} target={"_blank"} rel="noreferrer"
               href={props.link}>
                <img src={props.src} height={24} alt={props.name+" icon"}/>
                <span style={{paddingLeft: 3}}>{props.name}</span>
            </a>
        </div>
    );
};

export default Footer;