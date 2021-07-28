import React, {useState} from 'react';
import smt from "../../resources/superMarioTunnels.svg"
import ground from "../../resources/ground.svg"
import "../../css/App.css"
import "../../css/Resume.css"
import globalVariables from "../other/GlobalVariables";

const FPS=60;
const TUNNEL_PERCENTS=[40, 60, 80]

// TODO: WHEN RELEASED REPLACE STARTS WITH WITH ===

const Resume = () => {
    const xState=useState(0);
    const leftState=useState(false);
    const rightState=useState(false);
    const jumpState=useState(false);
    const yState=useState(0);
    const setYVelocity=useState(0)[1];
    const dwState=useState([0, 0]);
    const [constructed, setConstructed]=useState(false);
    if (!constructed) {
        setConstructed(()=>{
            gameThread(xState, yState,
                setYVelocity,
                leftState, rightState, jumpState,
                dwState);
            return true;
        })
    }
    return (
        <div id={"resCont"} className={"mainContents "+globalVariables.colorMode+" interactiveResume"}
             tabIndex={"0"} style={{position:"relative", border: "none", outline:"none"}}
             onKeyDown={(event)=>{
                 handleKeyDown(event, leftState, rightState, jumpState);
             }} onKeyUp={(event)=>{
            handleKeyUp(event, leftState, rightState, jumpState)}}>
            <span>INTERACTIVE RESUME</span>
            <img width={"5%"} src={ground} style={{transitionDuration:"0s",position:"absolute", bottom: `calc(${yState[0]}px + 10%)`, left:`${xState[0]}%`}}/>
            <img width={"100%"} height={"10%"} src={ground} style={{transitionDuration:"0s",position:"absolute", bottom:0}}/>
            {TUNNEL_PERCENTS.map((element)=>(
                <img width={"10%"} style={{transitionDuration:"0s",maxHeight: "80%",position:"absolute", bottom:"10%", left:`${element}%`}} src={smt}/>
            ))}
        </div>
    );
};

async function gameThread(xState, yState,
                    setYVelocity,
                    leftState, rightState, jumpState,
                    dwState) {
    let frame=()=>(new Promise((resolve)=>{
        setTimeout(()=>{
            let newYVel=0;
            let width=0, height=0;
            dwState[1](()=>([width=
                document.getElementById('resCont').clientWidth,
                height=document.getElementById('resCont').clientHeight]));
            setYVelocity((prevVel)=>(newYVel=prevVel-0.001*width));
            yState[1]((prevY)=>{
                if (prevY+newYVel<=0) {
                    jumpState[1]((jumping)=>{
                        if (jumping) {
                            setYVelocity(()=>(Math.sqrt(2*width*0.001*(width*0.25))))
                        } else {
                            setYVelocity(()=>0);
                        }
                        return jumping;
                    })
                    return 0;
                } else {
                    if (prevY+newYVel > 0.9*height-0.06*width) {
                        setYVelocity(()=>(0));
                    }
                    return Math.min(prevY+newYVel, 0.9*height-0.06*width);
                }
            })
            leftState[1]((prevL)=>{
                rightState[1]((prevR)=>{
                    if (prevR) {
                        xState[1]((prevX)=>(Math.min(95, prevX+0.5)))
                    }
                    if (prevL) {
                        xState[1]((prevX)=>(Math.max(0, prevX-0.5)))
                    }
                    return prevR;
                })
                return prevL;
            })

            resolve();
        }, 1000/FPS);
    }))
    while (window.location.pathname.startsWith(globalVariables.rootDir+"/Resume")) {
        await frame();
        console.log("WTF")
    }
}

function handleKeyDown(event, leftState, rightState, jumpState) {
    event.preventDefault();
    if (event.keyCode===39 || event.key === "d") { // right
        rightState[1](()=>true)
    } else if (event.keyCode===37||event.key === "a") { // left
        leftState[1](()=>true)
    } else if ((event.key === "w"||event.key===" ")) {
        jumpState[1](()=>true)
    }
}
function handleKeyUp(event, leftState, rightState, jumpState) {
    event.preventDefault();
    if (event.keyCode===39 || event.key === "d") { // right
        rightState[1](()=>false)
    } else if (event.keyCode===37||event.key === "a") { // left
        leftState[1](()=>false)
    } else if ((event.key === "w"||event.key===" ")) {
        jumpState[1](()=>false)
    }
}

export default Resume;