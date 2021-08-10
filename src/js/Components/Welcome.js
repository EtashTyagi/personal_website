import React, {useEffect, useState} from 'react';
import "../../css/App.css";
import "../../css/Welcome.css";
import globalVariables from "../other/GlobalVariables";

const welcomeSequence=["Hello World!", "Welcome to my website.", "Select a tab to continue."];
const WRITE_TIME=2000;
const WIGGLE = 10;
const Welcome = () => {
    const [welcomeIndex, setWelcomeIndex] = useState(0);
    const [constructed, setConstructed] = useState(false);
    const [animating, setAnimating] = useState(true);
    const [mouseOffset, setMouseOffset] = useState({x:0, y:0})
    useEffect(()=>{
        if (!constructed) {
            setConstructed(()=>{
                test(setWelcomeIndex, welcomeIndex, setAnimating);
                return true
            });
        }
    }, [constructed, welcomeIndex])
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
                     className={"helloWorld "+globalVariables.colorMode + (animating?(" animating"):(""))}
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
async function test(setIndex, index, setAnimating) {
    let frame = (i)=>(new Promise(resolve => {setTimeout(()=>{setIndex(i);resolve()},2*WRITE_TIME-1)}))
    while (++index < welcomeSequence.length) {
        await frame(index);
    }
    await new Promise((resolve)=>{setTimeout(()=>{setAnimating(false);resolve()}, WRITE_TIME)});
}
export default Welcome;