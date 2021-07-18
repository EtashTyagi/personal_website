import React from 'react';
import '../css/Footer.css'
import "../css/App.css"
import linkedinIcon from "../resources/linkedinIcon.svg"
import facebookIcon from "../resources/facebookIcon.svg"
import githubIcon from "../resources/githubIcon.svg"
import hackerrankIcon from "../resources/hackerrankIcon.svg"
import codeforcesIcon from "../resources/codeforcesIcon.svg"
import codechefIcon from "../resources/codechefIcon.svg"
import PropTypes from "prop-types";
import globalConstants from "./GlobalConstants";

const Footer = (props) => {
    return (
        <div>
            <div className={"mainContainer "+props.colorMode + " footer"}>
                <span style={{paddingLeft:24}}>©Etash Tyagi, 2021</span>
            </div>
            <div className={"hLine "+props.colorMode}/>
            <div style={{justifyContent: "space-evenly"}} className={"mainContainer "+props.colorMode + " footer"}>
                <SocialLinks src={githubIcon} name={"Github"} link={globalConstants.githubLink}/>
                <SocialLinks src={linkedinIcon} name={"LinkedIn"} link={globalConstants.linkedinLink}/>
                <SocialLinks src={hackerrankIcon} name={"HackerRank"} link={globalConstants.hackerrankLink}/>
                <SocialLinks src={codeforcesIcon} name={"Codeforces"} link={globalConstants.codeforcesLink}/>
                <SocialLinks src={codechefIcon} name={"CodeChef"} link={globalConstants.codechefLink}/>
                <SocialLinks src={facebookIcon} name={"Facebook"} link={globalConstants.facebookLink}/>
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


Footer.propTypes = {
    colorMode: PropTypes.string
};
Footer.defaultProps= {
    setColorMode: "light"
}

export default Footer;