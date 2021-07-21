import React, {useState} from 'react';
import smt from "../../resources/superMarioTunnels.svg"
import ground from "../../resources/ground.svg"
import {bool} from "prop-types";

let lp=false, rp=false;

const Resume = () => {
    const [x, setX]=useState(0);
    const [leftPressed, setLeftPressed]=useState(false);
    const [rightPressed, setRightPressed]=useState(false);
    const [y, setY]=useState(10);
    const [yVelocity, setYVelocity]=useState(0);
    const [constructed, setConstructed]=useState(false);
    if (!constructed) {
        setConstructed(()=>{

            gameThread(setX, setY, setYVelocity, setLeftPressed, setRightPressed)
            return true;
        })
    }
    return (
        <div className={"mainContents"} tabIndex={"0"} style={{position:"relative", border: "none", outline:"none"}}
             onKeyDown={(event)=>{
                 handleKeyDown(event, setLeftPressed, setRightPressed, setYVelocity, yVelocity)
             }} onKeyUp={(event)=>{
            handleKeyUp(event, setLeftPressed, setRightPressed, setYVelocity)}}>
            <img height={"5%"} src={ground} style={{position:"absolute", bottom: `${y}%`, left:`${x}%`}}/>
            <img width={"100%"} height={"10%"} src={ground} style={{position:"absolute", bottom:0}}/>
            <img height={"15%"} style={{position:"absolute", bottom:"10%", left:"40%"}} src={smt}/>
            <img height={"15%"} style={{position:"absolute", bottom:"10%", left:"60%"}} src={smt}/>
            <img height={"15%"} style={{position:"absolute", bottom:"10%", left:"80%"}} src={smt}/>
        </div>
    );
};

async function gameThread(setX, setY, setYVelocity, setLeftPressed, setRightPressed) {

    let frame=()=>(new Promise((resolve => {
        setTimeout(()=>{
            let newY=0;
            setYVelocity((prev)=>(newY=prev-1));
            setY((prevY)=>{
                if (prevY+newY<=10) {
                    setYVelocity(()=>0);
                    return 10;
                } else {
                    return prevY+newY;
                }
            })

            setLeftPressed((prevLBP)=>{
                setRightPressed((prevRBP)=>{
                    if (prevRBP) {
                        setX((prevX)=>(prevX+1))
                    } else if (prevLBP) {
                        setX((prevX)=>(prevX-1))
                    }
                    return prevRBP;
                })
                return prevLBP;
            })
            resolve();
        }, 30);
    })));

    while (true) {
        await frame();
    }
}

function handleKeyDown(event, setLeftPressed, setRightPressed, setYVelocity, yVelocity) {

    if (event.keyCode===39) { // right
        setRightPressed(()=>true)
    } else if (event.keyCode===37) { // left
        setLeftPressed(()=>true)
    } else if (event.key === " " && yVelocity===0) {
        setYVelocity(()=>10)
    }
}
function handleKeyUp(event, setLeftPressed, setRightPressed) {
    if (event.keyCode===39) { // right
        setRightPressed(()=>false)
    } else if (event.keyCode===37) { // left
        setLeftPressed(()=>false)
    }
}

export default Resume;