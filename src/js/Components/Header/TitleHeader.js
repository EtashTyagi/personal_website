import React, {useState, useEffect} from 'react';
import '../../../css/Header.css'
import darkMode from '../../../resources/lightModeIcon.svg'
import lightMode from '../../../resources/darkModeIcon.svg'
import PropTypes from "prop-types";
import TypingAnimation from "../../Animations/TypingAnimation";

const titleSequence=["Etash Tyagi"];
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
    useEffect(()=>{
        if (!constructed) {
            document.documentElement.style.setProperty("color-scheme", "light")
            setConstructed(()=>{
                TypingAnimation(setTitleIndex, setCurTitleIndex, titleIndex, titleSequence,
                    WRITING_SPEED,
                    WAIT_CHANGE_SPEED,
                    DELETE_SPEED);
                return true;
            });
        }
        // eslint-disable-next-line
    }, [constructed]);

    return (
        <div className={"mainContainer "+colorMode+" titleHeader"}>
            <span className={"headingText notDraggable "+colorMode+" titleHeader"}>{titleSequence[titleIndex].substr(0, curTitleIndex)}</span>
            <div className={"blinkingRectangle notDraggable"} style={{fontSize:28}}>|</div>
            <img className={"icon titleHeader notDraggable"} src={(colorMode==="dark"?darkMode:lightMode)} alt={"dark/light"}
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

export default TitleHeader;