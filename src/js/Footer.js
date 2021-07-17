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

const Footer = (props) => {
    return (
        <div>
            <div className={"hLine "+props.colorMode}/>
            <div className={"mainContainer "+props.colorMode + " footer"}>
                <span style={{paddingLeft:24}}>©Etash Tyagi, 2021</span>
            </div>
            <div className={"hLine "+props.colorMode}/>
            <div style={{justifyContent: "space-evenly"}} className={"mainContainer "+props.colorMode + " footer"}>
                <SocialLinks src={githubIcon} name={"Github"} link={"https://github.com/EtashTyagi"}/>
                <SocialLinks src={linkedinIcon} name={"LinkedIn"} link={"https://www.linkedin.com/in/etash-tyagi-19b489214/"}/>
                <SocialLinks src={hackerrankIcon} name={"HackerRank"} link={"https://www.hackerrank.com/Etash19360"}/>
                <SocialLinks src={codeforcesIcon} name={"Codeforces"} link={"https://codeforces.com/profile/etash"}/>
                <SocialLinks src={codechefIcon} name={"CodeChef"} link={"https://www.codechef.com/users/etasht"}/>
                <SocialLinks src={facebookIcon} name={"Facebook"} link={"https://facebook.com/etash.tyagi"}/>
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