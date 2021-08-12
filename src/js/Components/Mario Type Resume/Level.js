import React, {useEffect, useState} from 'react';
import useWindowDimensions from "../../other/useWindowDimensions";
import globalVariables from "../../other/GlobalVariables";
import GameThread from "../../Animations/GameThread";
import Scene from "./Scene";
import Player from "./Player";
import Tunnel from "./Tunnel";
import Range from "../../other/Range";
import {PropTypes} from "prop-types";

const TUNNEL_Y_ASPECT = new Range(0, 1.275)
const TUNNEL_PADDING=2;

const Level = (props) => {
    const playerXState = useState(0);
    const leftState = useState(false);
    const rightState = useState(false);
    const jumpState = useState(false);
    const pageDims=useWindowDimensions();
    const playerYState = useState(0);
    const setYVelocity = useState(0)[1];
    const [constructed, setConstructed] = useState(false);
    const flip=useState(false);
    useEffect(()=>{
        if (!constructed) {
            setConstructed(() => {
                (globalVariables.currentGameThread=new GameThread(playerXState,
                    playerYState,
                    setYVelocity,
                    leftState,
                    rightState,
                    jumpState,
                    props.TUNNEL_X_RANGES,
                    TUNNEL_Y_ASPECT,
                    TUNNEL_PADDING,
                    props.SCENE_WIDTH,
                    props.PLAYER_WIDTH,
                    props.X_SPEED,
                    props.GRAVITY,
                    props.JUMP_VELOCITY)).start().then();
                return true;
            })
        }
        // eslint-disable-next-line
    }, [constructed])
    let sceneXTranslate=Math.max(Math.min(0, -playerXState[0]+pageDims.width/2), -props.SCENE_WIDTH+pageDims.width);
    return (
        <Scene onPressDown={(event) =>{handlePressDown(event, leftState, rightState, jumpState, pageDims, flip)}}
               onPressUp={(event) => {handlePressUp(event, leftState, rightState, jumpState, pageDims)}}
               sceneWidth={props.SCENE_WIDTH} translateX={sceneXTranslate}>
            <Player flip={flip[0]} x={playerXState[0]} y={playerYState[0]} width={props.PLAYER_WIDTH}/>
            {props.TUNNEL_X_RANGES.map((element) => (
                <Tunnel startPixel={element.from} endPixel={element.to}/>
            ))}
        </Scene>
    );
};
Level.propTypes={
    TUNNEL_X_RANGES: PropTypes.array,
    SCENE_WIDTH: PropTypes.number,
    PLAYER_WIDTH: PropTypes.number,
    X_SPEED: PropTypes.number,
    GRAVITY: PropTypes.number,
    JUMP_VELOCITY: PropTypes.number
}
Level.defaultProps={
    TUNNEL_X_RANGES: [],
    SCENE_WIDTH: 50,
    PLAYER_WIDTH: 30,
    X_SPEED: 150,
    GRAVITY: 1000,
    JUMP_VELOCITY: 500
}

function handlePressDown(event, leftState, rightState, jumpState, pageDims, flip) {
    let {left,right,up}=getLeftUpRightChange(event, pageDims);
    if (right) { // right
        flip[1](false);
        rightState[1](true)
    } else if (left) { // left
        flip[1](true);
        leftState[1](true)
    } else if (up) {
        jumpState[1](true)
    }
}

function handlePressUp(event, leftState, rightState, jumpState, pageDims) {
    let {left,right,up}=getLeftUpRightChange(event, pageDims);
    if (right) { // right
        rightState[1](false)
    } else if (left) { // left
        leftState[1](false)
    } else if ((up)) {
        jumpState[1](false)
    }
}
function getLeftUpRightChange(event, pageDims) {
    let left,right,up;
    if (event.type.startsWith("key")) {
        event.preventDefault();
        left=event.keyCode === 37 || event.key === "a"
        up=event.key === "w" || event.key === " ";
        right=event.keyCode === 39 || event.key === "d";
    } else if (event.type.startsWith("touch")){
        event.preventDefault();
        left=event.changedTouches[0].pageX<=pageDims.width*0.33333
        up=event.changedTouches[0].pageY<=pageDims.height/2
            &&event.changedTouches[0].pageX>pageDims.width*0.33333
            &&event.changedTouches[0].pageX<=pageDims.width*0.66666;
        right=event.changedTouches[0].pageX>=pageDims.width*0.66666;
    }
    return {left:left, up:up, right:right}
}
export default Level;