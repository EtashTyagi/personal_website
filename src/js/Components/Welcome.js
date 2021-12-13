import React, {useEffect, useState} from 'react';
import "../../css/App.css";
import "../../css/Welcome.css";
import globalVariables from "../other/GlobalVariables";

const welcomeSequence=["Hello World!", "Welcome to my website.", "Select a tab to continue."];
const WRITE_TIME=2000;
const WIGGLE = 10;
const Welcome = () => {
    const [welcomeIndex, setWelcomeIndex] = useState(0);
    const [animating, setAnimating] = useState(true);
    const [mouseOffset, setMouseOffset] = useState({x:0, y:0})
    useEffect(()=>{
        setTimeout(()=>{
            if (welcomeIndex===welcomeSequence.length-1||welcomeSequence.length===0) {
                setAnimating(false);
            } else {
                setWelcomeIndex(welcomeIndex+1)
            }
            }, (welcomeIndex===welcomeSequence.length-1 ? WRITE_TIME-1:2*WRITE_TIME-1))
    }, [welcomeIndex])
    return (
        <div className={"mainContents welcomeMain "+globalVariables.colorMode}
             style={{fontSize:"7vmin", paddingLeft:10, paddingRight: 10,
                 backgroundPositionX:`calc(50% + ${Math.max(-WIGGLE,
                     Math.min(WIGGLE,mouseOffset.x))}px)`,
                 backgroundPositionY:`calc(100% + ${Math.max(-WIGGLE,
                     Math.min(WIGGLE,mouseOffset.y))}px)`}}
                onMouseMove={(event)=>{
                    setMouseOffset(()=>({x:event.movementX, y:event.movementY}))
                }
                }>
            <div style={{width:"100%"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"}
                     className={"text "+globalVariables.colorMode + (animating?(" animating"):(""))}
                        style={{animationDuration: `${WRITE_TIME}ms`}}>
                    <text x={`${50+0.01*Math.max(-WIGGLE,
                        Math.min(WIGGLE,mouseOffset.x))}%`} y={`${15+0.01*Math.max(-WIGGLE,
                        Math.min(WIGGLE,mouseOffset.y))}%`} style={{
                        strokeWidth: "0.15vmin",
                        fontFamily:"Segoe Print",
                        overflow:"hidden",
                        textOverflow:"ellipsis",
                        border:"solid red"}}>
                        {welcomeSequence[welcomeIndex]}
                    </text>
                </svg>
            </div>
        </div>
    );
};
export default Welcome;