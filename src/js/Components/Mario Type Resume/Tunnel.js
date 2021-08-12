import React from 'react';
import smt from "../../../resources/superMarioTunnels.svg";
import PropTypes from 'prop-types';

const Tunnel = (props) => {

    return (
        <img className={"notDraggable"} width={`${props.endPixel - props.startPixel}px`} style={{
            transitionDuration: "0s",
            position: "absolute",
            bottom: `${props.bottom}%`,
            left: `${props.startPixel}px`
        }} src={smt} alt={"TUNNELS"}/>
    );
};
Tunnel.propTypes={
    startPixel:PropTypes.number,
    endPixel:PropTypes.number,
    height:PropTypes.number,
    bottom:PropTypes.number,
}
Tunnel.defaultProps={
    bottom: 10,

}

export default Tunnel;