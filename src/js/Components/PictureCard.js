import React from 'react';
import globalVariables from "../other/GlobalVariables";
import "../../css/Card.css"
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const PictureCard = (props) => {
    const borderRadius="10px";
    const internal= [<img src={props.image} width={"100%"} className={"notDraggable"}
                                        style={{borderTopLeftRadius:borderRadius,
                                            borderTopRightRadius:borderRadius}} alt={"card"}/>,
    <h2 className={"notDraggable"} style={{margin:"0", padding:"5px 0 0px 5px", fontWeight:"500"}}>{props.head}</h2>,
    <p className={"notDraggable"} style={{margin:"0", padding:"0 0 10px 10px"}}>{props.body}</p>];

    return (
        <div className={"box-shadow " + globalVariables.colorMode} style={{...props.style,
            height:"100%",
            justifyItems:"start",
            overflowWrap:"break-word",
            margin:"8px",
            marginBottom:"10px",
            marginTop: "10px",
            borderRadius:borderRadius,
            display:"flex", flexDirection:"column"}}>
            {props.link?
                <NavLink activeClassName={"notDraggable"}
                                 style={{textDecoration:"none", color:"inherit"}}
                                 className={"notDraggable"} to={props.to}>
                    {internal.map((element)=>(element))}
                </NavLink>
                :internal.map((element)=>(element))}

        </div>
    );
};
PictureCard.propTypes = {
    link: PropTypes.bool,
};
PictureCard.defaultProps= {
    link:false
}
export default PictureCard;