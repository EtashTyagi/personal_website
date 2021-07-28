import React from 'react';
import '../../css/Header.css'
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import globalVariables from "../other/GlobalVariables";

const NavBarHeader = (props) => {
    let i=-1;
    return (
        <div className={"mainContainer "+props.colorMode+" navBarHeader"}>
            {Object.keys(globalVariables.tabToComponent)
                .map((element, index)=>{
                i++;
                return ([
                    (i===0?<div/>:<div className={"vLine"}/>),
                    <NavLink activeClassName={"tabContainer "+ props.colorMode+" selected"}
                             to={globalVariables.rootDir+"/"+element} className={"tabContainer "+props.colorMode}
                             onlyActiveOnIndex>
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