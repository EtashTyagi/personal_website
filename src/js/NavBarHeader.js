import React from 'react';
import '../css/Header.css'
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

const NavBarHeader = (props) => {
    let i=-1;
    return (
        <div className={"mainContainer "+props.colorMode+" navBarHeader"}>
            {props.tabs.map((element)=>{
                i++;
                return ([
                    (i===0?<div/>:<div className={"vLine"}/>),
                    <NavLink activeClassName={"tabContainer "+ props.colorMode+" selected"}
                             to={"/"+element} className={"tabContainer "+props.colorMode}
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
    tabs: PropTypes.array,
    initTab: PropTypes.number,
    setTab: PropTypes.func
};
NavBarHeader.defaultProps = {
    colorMode: PropTypes.string
};
export default NavBarHeader;