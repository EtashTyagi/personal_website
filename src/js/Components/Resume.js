import React, {useState} from 'react';
import smt from "../../resources/superMarioTunnels.svg"
import ground from "../../resources/ground.svg"
import "../../css/App.css"
import "../../css/Resume.css"
import globalVariables from "../other/GlobalVariables";
import man from "../../resources/standing.svg"

class Range {
    constructor(n1, n2) {
        this.from = Math.min(n1, n2);
        this.to = Math.max(n1, n2);
    }
}

const FPS = 60;
const TUNNEL_X_RANGES_PERCENT = [new Range(30, 40), new Range(55, 65), new Range(80, 90)]
const TUNNEL_Y_RANGE_PERCENT = new Range(0, 12.75)
const X_SPEED_PERCENT = 0.5;
const JUMP_WIDTH_MULTIPLIER = 0.25;
const TUNNEL_PADDING_PERCENT = 0.01;
const PLAYER_WIDTH_PERCENT = 4;
const PLAYER_ASPECT = 1.8;

// TODO: WHEN RELEASED REPLACE STARTS WITH WITH ===

const Resume = () => {
    const xState = useState(0);
    const leftState = useState(false);
    const rightState = useState(false);
    const jumpState = useState(false);
    const yState = useState(0);
    const setYVelocity = useState(0)[1];
    const dwState = useState([0, 0]);
    const [constructed, setConstructed] = useState(false);
    if (!constructed) {
        setConstructed(() => {
            gameThread(xState, yState,
                setYVelocity,
                leftState, rightState, jumpState,
                dwState);
            return true;
        })
    }
    return (
        <div id={"resCont"} className={"mainContents " + globalVariables.colorMode + " interactiveResume"}
             tabIndex={"0"} style={{position: "relative", border: "none", outline: "none"}}
             onKeyDown={(event) => {
                 handleKeyDown(event, leftState, rightState, jumpState);
             }} onKeyUp={(event) => {
            handleKeyUp(event, leftState, rightState, jumpState)
        }}>
            <span>INTERACTIVE RESUME</span>
            <img width={`${PLAYER_WIDTH_PERCENT}%`}
                 src={man} style={{
                transitionDuration: "0s",
                maxHeight: "90%",
                position: "absolute",
                bottom: `calc(${yState[0]}px + 10%)`,
                left: `${xState[0]}%`
            }} alt={"Player"}/>
            <img width={"100%"} height={"10%"} src={ground}
                 style={{transitionDuration: "0s", position: "absolute", bottom: 0}} alt={"Ground"}/>
            {TUNNEL_X_RANGES_PERCENT.map((element) => (
                <img width={`${element.to - element.from}%`} style={{
                    transitionDuration: "0s",
                    maxHeight: "90%",
                    position: "absolute",
                    bottom: "10%",
                    left: `${element.from}%`
                }} src={smt} alt={"TUNNELS"}/>//TODO CHANGE ALT
            ))}
        </div>
    );
};


async function gameThread(xState, yState,
                          setYVelocity,
                          leftState, rightState, jumpState,
                          dwState) {
    let x = 0, y = 0;
    let frame = () => (new Promise((resolve) => {
        setTimeout(() => {
            let newYVel = 0;
            let width = 0, height = 0;
            dwState[1](() => ([width =
                document.getElementById('resCont').clientWidth,
                height = document.getElementById('resCont').clientHeight]));
            setYVelocity((prevVel) => (newYVel = prevVel - 0.001 * width));

            // TODO: FOR EFFICIENCY WITH MULTIPLE TUNNEL, STORE RANGES IN TREE FOR COMPARISON IN LOG(N) INSTEAD OF N

            yState[1]((prevY) => {
                y = prevY + newYVel;
                let inAir = false;
                for (let i = 0; i < TUNNEL_X_RANGES_PERCENT.length && !inAir; ++i) {
                    let curTunRange = TUNNEL_X_RANGES_PERCENT[i];
                    inAir = y <= TUNNEL_Y_RANGE_PERCENT.to * width * 0.01
                        && prevY >= TUNNEL_Y_RANGE_PERCENT.to * width * 0.01
                        && (x + PLAYER_WIDTH_PERCENT >= curTunRange.from + TUNNEL_PADDING_PERCENT
                            && x <= curTunRange.to - TUNNEL_PADDING_PERCENT);
                }
                inAir = inAir && newYVel <= 0;
                if (prevY + newYVel <= 0 || inAir) {
                    jumpState[1]((jumping) => {
                        if (jumping) {
                            setYVelocity(() => (Math.sqrt(2 * width * 0.001 * (width * JUMP_WIDTH_MULTIPLIER))))
                        } else {
                            setYVelocity(() => 0);
                        }
                        return jumping;
                    })
                    return y = (prevY + newYVel <= 0 ? 0 : TUNNEL_Y_RANGE_PERCENT.to * width * 0.01);
                } else {
                    if (y + width * PLAYER_WIDTH_PERCENT * 0.01 * PLAYER_ASPECT > 0.9 * height) {
                        setYVelocity(() => (0));
                    }
                    return y = Math.min(y, 0.9 * height - width * (PLAYER_WIDTH_PERCENT) * 0.01 * PLAYER_ASPECT);
                }
            })

            leftState[1]((prevL) => {
                rightState[1]((prevR) => {
                    xState[1]((prevX) => {
                        x = prevX;
                        if (prevR && !prevL) {
                            x = Math.min(100 - PLAYER_WIDTH_PERCENT, prevX + X_SPEED_PERCENT);
                        } else if (prevL && !prevR) {
                            x = Math.max(0, prevX - X_SPEED_PERCENT);
                        }

                        for (let i = 0; i < TUNNEL_X_RANGES_PERCENT.length; ++i) {
                            let curTunRange = TUNNEL_X_RANGES_PERCENT[i];
                            if (x >= curTunRange.from - PLAYER_WIDTH_PERCENT
                                && x <= curTunRange.to
                                && y < TUNNEL_Y_RANGE_PERCENT.to * width * 0.01) {
                                console.log(y + " " + (TUNNEL_Y_RANGE_PERCENT.to * width * 0.01))
                                return (x - (curTunRange.from - PLAYER_WIDTH_PERCENT + 1)
                                > curTunRange.to - 1 - x ?
                                    curTunRange.to + TUNNEL_PADDING_PERCENT :
                                    curTunRange.from - PLAYER_WIDTH_PERCENT - TUNNEL_PADDING_PERCENT);
                            }
                        }
                        return x;
                    })
                    return prevR;
                })
                return prevL;
            })

            resolve();
        }, 1000 / FPS);
    }))
    while (window.location.pathname.startsWith(globalVariables.rootDir + "/Resume")) {
        await frame();
    }
}

function handleKeyDown(event, leftState, rightState, jumpState) {
    event.preventDefault();
    if (event.keyCode === 39 || event.key === "d") { // right
        rightState[1](() => true)
    } else if (event.keyCode === 37 || event.key === "a") { // left
        leftState[1](() => true)
    } else if ((event.key === "w" || event.key === " ")) {
        jumpState[1](() => true)
    }
}

function handleKeyUp(event, leftState, rightState, jumpState) {
    event.preventDefault();
    if (event.keyCode === 39 || event.key === "d") { // right
        rightState[1](() => false)
    } else if (event.keyCode === 37 || event.key === "a") { // left
        leftState[1](() => false)
    } else if ((event.key === "w" || event.key === " ")) {
        jumpState[1](() => false)
    }
}

export default Resume;