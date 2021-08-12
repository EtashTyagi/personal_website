import React from 'react';
import man from "../../../resources/standing.svg";
import {PropTypes} from "prop-types";

const Player = (props) => {
    return (
        <img className={"notDraggable"} width={`${props.width}px`}
             src={man} style={{
            transform: `rotateY(${props.flip?180:0}deg)`,
            transitionDuration: "0s",
            position: "absolute",
            bottom: `calc(${props.y}px + ${props.groundHeight}%)`,
            left: `${props.x}px`
        }} alt={"Player"}/>
    )
};
Player.propTypes={
    groundHeight:PropTypes.number
}
Player.defaultProps={
    groundHeight:10
}
export default Player;