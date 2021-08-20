import React from 'react';
import '../../../css/Header.css'
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import globalVariables from "../../other/GlobalVariables";

const NavBarHeader = (props) => {
    let i=-1;
    return (
        <div className={"mainContainer "+props.colorMode+" navBarHeader"}>
            {Object.keys(globalVariables.tabToComponent)
                .map((element, index)=>{
                i++;
                return ([
                    (i===0?<div key={index.toLocaleString()}/>:<div key={index.toLocaleString()} className={"vLine"}/>),
                    <NavLink key={element}
                             activeClassName={"tabContainer "+ globalVariables.colorMode+" selected notDraggable"}
                             to={globalVariables.rootDir+"/"+element} className={"tabContainer notDraggable "+props.colorMode}>
                        {element}
                    </NavLink>
                ])
            })}
        </div>
    );
};
NavBarHeader.propTypes = {
    colorMode: PropTypes.string,
    initTab: PropTypes.number,
    setTab: PropTypes.func
};
NavBarHeader.defaultProps = {
    colorMode: "light"
};
export default NavBarHeader;