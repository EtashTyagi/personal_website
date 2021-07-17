import React from 'react';
import '../css/Footer.css'
import "../css/App.css"
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <div>
            <div className={"hLine "+props.colorMode}/>
            <div className={"mainContainer "+props.colorMode + " footer"}>
                <span style={{paddingLeft:24}}>©Etash Tyagi, 2021</span>
            </div>
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