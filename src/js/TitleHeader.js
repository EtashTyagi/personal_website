import React, {useState} from 'react';
import '../css/Header.css'
import darkMode from '../resources/lightModeIcon.svg'
import lightMode from '../resources/darkModeIcon.svg'
import PropTypes from "prop-types";

const welcomeSequence=["Hello World!", "Welcome to my website", "Etash Tyagi"];
const WRITING_SPEED=100;
const DELETE_SPEED=69;
const WAIT_CHANGE_SPEED=690;

const TitleHeader = (props) => {
    const [colorMode, setColorMode] = useState("light");
    const [curTitleIndex, setCurTitleIndex]=useState(0);
    const [constructed, setConstructed]=useState(false);
    const [titleIndex, setTitleIndex]=useState(0);
    const onColorChange=()=>{
        setColorMode(()=> {
            let newMode=(colorMode === "dark" ? "light" : "dark");
            document.documentElement.style.setProperty("color-scheme", newMode)
            props.setColorMode(newMode)
            return (newMode)
        })
    }

    if (!constructed) {
        document.documentElement.style.setProperty("color-scheme", "light")
        setConstructed(()=>{
            animateTitle(setTitleIndex, setCurTitleIndex, titleIndex);
            return true;
        });
    }
    return (
        <div className={"mainContainer "+colorMode+" titleHeader"}>
            <span className={"headingText "+colorMode+" titleHeader"}>{welcomeSequence[titleIndex].substr(0, curTitleIndex)}</span>
            <div className={"blinkingRectangle"}>|</div>
            <img draggable={false} className={"icon titleHeader"} src={(colorMode==="dark"?darkMode:lightMode)} alt={"dark/light"}
                 onClick={()=>onColorChange()}/>
        </div>
    );
};
TitleHeader.propTypes = {
    setColorMode: PropTypes.func
};
TitleHeader.defaultProps= {
    setColorMode: () => {}
}
async function animateTitle(setTitleIndex, setCurTitleIndex, titleIndex) {
    let i=0;
    if (titleIndex < welcomeSequence.length) {
        let frameProceed = ()=>(new Promise((resolve)=>{
            setTimeout(()=>{
                setCurTitleIndex(prev=>(prev+1));
                resolve();
            }, WRITING_SPEED);
        }));
        while (i < welcomeSequence[titleIndex].length) {
            await frameProceed();
            i++;
        }
        if (titleIndex < welcomeSequence.length-1) {
            frameProceed = ()=>(new Promise((resolve)=>{
                setTimeout(()=>{resolve();}, WAIT_CHANGE_SPEED);
            }));
            await frameProceed();
            frameProceed = ()=>(new Promise((resolve)=>{
                setTimeout(()=>{
                    setCurTitleIndex(prev=>(prev-1));
                    resolve();
                }, DELETE_SPEED);
            }));
            while (i > 0) {
                await frameProceed();
                i--;
            }
            frameProceed = ()=>(new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve();
                }, WRITING_SPEED);
            }));
            await frameProceed();
            setTitleIndex(titleIndex+1);
            animateTitle(setTitleIndex, setCurTitleIndex, titleIndex+1);
        }
    }
}
export default TitleHeader;