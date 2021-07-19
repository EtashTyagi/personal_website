import React, {useState} from 'react';
import "../../css/App.css";
import "../../css/Welcome.css";

const welcomeSequence=["Hello World!", "Welcome to my website.", "Select a tab to continue."];
const WRITE_TIME=2000;
const Welcome = (props) => {
    const [welcomeIndex, setWelcomeIndex] = useState(0);
    const [constructed, setConstructed] = useState(false);
    const [animating, setAnimating] = useState(true);
    if (!constructed) {
        setConstructed(()=>{
            test(setWelcomeIndex, welcomeIndex, setAnimating);
            return true
        });
    }
    return (
        <div className={"mainContents welcomeMain "+props.colorMode}
             style={{fontSize:"7vmin", paddingLeft:10, paddingRight: 10}}>
            <div style={{width:"100%"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width={"100%"} height={"100%"}
                     className={"helloWorld "+props.colorMode + (animating?(" animating"):(""))}
                        style={{animationDuration: `${WRITE_TIME}ms`}}>
                    <text x={"50%"} y={"15%"} style={{strokeWidth: "0.15vmin", fontFamily:"Segoe Print", overflow:"hidden", textOverflow:"ellipsis", border:"solid red"}}>
                        {welcomeSequence[welcomeIndex]}
                    </text>

                </svg>
            </div>
        </div>
    );
};
async function test(setIndex, index, setAnimating) {
    let frame = (i)=>(new Promise(resolve => {setTimeout(()=>{setIndex(i);resolve()},2*WRITE_TIME-10)}))
    while (++index < welcomeSequence.length) {
        await frame(index);
    }
    await new Promise((resolve)=>{setTimeout(()=>{setAnimating(false);resolve()}, WRITE_TIME)});
}
export default Welcome;