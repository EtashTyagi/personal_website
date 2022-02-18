import React, {useEffect, useState} from 'react';
import useWindowDimensions from "../../../other/useWindowDimensions";
import Scene from "./Scene";
import Player from "./Player";
import Tunnel from "./Tunnel";
import Range from "../../../other/Range";
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
    const flip=useState(false);
    const touchAvailable=useState(false);
    const time=useState(0);
    const tick=useState(false);
    useEffect(()=>{
        proceedGameFrame(playerXState,
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
                    props.JUMP_VELOCITY, time, flip, tick)
        // eslint-disable-next-line
    }, [tick[0]])
    let sceneXTranslate=Math.max(Math.min(0, -playerXState[0]+pageDims.width/2), -props.SCENE_WIDTH+pageDims.width);
    return (
        <Scene onPressDown={(event) =>{handlePressDown(event, leftState, rightState, jumpState, touchAvailable)}}
               onPressUp={(event) => {handlePressUp(event, leftState, rightState, jumpState, touchAvailable)}}
               sceneWidth={props.SCENE_WIDTH} translateX={sceneXTranslate}
                highlightTouchButtons={touchAvailable[0]}>
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
};
Level.defaultProps={
    TUNNEL_X_RANGES: [],
    SCENE_WIDTH: 50,
    PLAYER_WIDTH: 30,
    X_SPEED: 390,
    GRAVITY: 2000,
    JUMP_VELOCITY: 750
};

function handlePressDown(event, leftState, rightState, jumpState, touchAvailable) {
    let {left,right,up}=getLeftUpRightChange(event, touchAvailable);
    if (right) { // right
        rightState[1](true)
    } else if (left) { // left
        leftState[1](true)
    } else if (up) {
        jumpState[1](true)
    }
}

function handlePressUp(event, leftState, rightState, jumpState, touchAvailable) {
    let {left,right,up}=getLeftUpRightChange(event, touchAvailable);
    if (right) { // right
        rightState[1](false)
    } else if (left) { // left
        leftState[1](false)
    } else if ((up)) {
        jumpState[1](false)
    }
}
function getLeftUpRightChange(event, touchAvailable) {
    let left,right,up;
    if (event.type.startsWith("key")) {
        event.preventDefault();
        touchAvailable[1](false);
        left=event.keyCode === 37 || event.key === "a" || event.key === "A" || event.key==="4"
        up=event.key === "w" || event.key === " " || event.keyCode===38 || event.key==="8";
        right=event.keyCode === 39 || event.key === "d"||event.key === "D" || event.key==="6";
    } else if (event.type.startsWith("touch")){
        event.preventDefault();
        touchAvailable[1](true);
        left=event.target.id==="left";
        up=event.target.id==="up";
        right=event.target.id==="right";
    }
    return {left:left, up:up, right:right}
}
function proceedGameFrame(xState,
                          yState,
                          setYVelocity,
                          leftState,
                          rightState,
                          jumpState,
                          TUNNEL_X_RANGES,
                          TUNNEL_Y_ASPECT,
                          TUNNEL_PADDING,
                          SCENE_WIDTH,
                          PLAYER_WIDTH,
                          X_SPEED,
                          GRAVITY,
                          JUMP_VELOCITY, time, flip, tick) {
        setTimeout(() => {
            let x = xState[0], y = yState[0];
            let ntn=performance.now();
            let delay = (ntn-time[0]) / 1000.0;
            time[1](ntn);
            let newYVel = 0;
            setYVelocity((prevVel) => (newYVel = prevVel - GRAVITY*delay));
            yState[1]((prevY) => {
                y = prevY + newYVel * delay + 0.5*GRAVITY*delay*delay;
                let aboveTunnel = -1;
                for (let i = 0; i < TUNNEL_X_RANGES.length && aboveTunnel === -1; ++i) {
                    let curTunRange = TUNNEL_X_RANGES[i];
                    aboveTunnel = (y <= TUNNEL_Y_ASPECT.to * (TUNNEL_X_RANGES[i].length())
                        && prevY >= TUNNEL_Y_ASPECT.to * (TUNNEL_X_RANGES[i].length())
                        && (x + PLAYER_WIDTH >= curTunRange.from
                            && x <= curTunRange.to)) ? i : -1;
                }
                aboveTunnel = newYVel <= 0 ? aboveTunnel : -1;
                if ((y <= 0 && x <= SCENE_WIDTH) || aboveTunnel !== -1) {
                    if (jumpState[0]) {
                        setYVelocity(() => (JUMP_VELOCITY))
                    } else {
                        setYVelocity(() => 0);
                    }
                    return y = (y <= 0 ? 0 : TUNNEL_Y_ASPECT.to * (TUNNEL_X_RANGES[aboveTunnel].length()));
                }
                return y;
            })
            xState[1]((prevX) => {
                if (rightState[0] && !leftState[0]) {
                    flip[1](false);
                    x = Math.min(prevX + X_SPEED * delay, SCENE_WIDTH - PLAYER_WIDTH - TUNNEL_PADDING);
                } else if (leftState[0] && !rightState[0]) {
                    flip[1](true);
                    x = Math.max(prevX - X_SPEED * delay, TUNNEL_PADDING);
                }
                for (let i = 0; i < TUNNEL_X_RANGES.length; ++i) {
                    let curTunRange = TUNNEL_X_RANGES[i];
                    if (x >= curTunRange.from - PLAYER_WIDTH -TUNNEL_PADDING
                        && x <= curTunRange.to + TUNNEL_PADDING
                        && y < TUNNEL_Y_ASPECT.to * (TUNNEL_X_RANGES[i].length())) {
                        return (x - curTunRange.from - TUNNEL_PADDING
                        > curTunRange.to - x + TUNNEL_PADDING ?
                            curTunRange.to + TUNNEL_PADDING :
                            curTunRange.from - PLAYER_WIDTH - TUNNEL_PADDING);
                    }
                }
                return x;
            })
            tick[1](!tick[0]);
        }, 1)
}
export default Level;