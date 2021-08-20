import React, {useState, useEffect} from 'react';
import '../../../css/Header.css'
import darkMode from '../../../resources/lightModeIcon.svg'
import lightMode from '../../../resources/darkModeIcon.svg'
import PropTypes from "prop-types";
import globalVariables from "../../other/GlobalVariables";

const titleSequence=["Etash Tyagi"];
const WRITING_SPEED=100;
const DELETE_SPEED=69;
const WAIT_CHANGE_SPEED=690;

const TitleHeader = (props) => {
    const [writtenLen, setWrittenLen]=useState(0);
    const [tick, setTick]=useState(false);
    const [state, setState]=useState('f'); // f->forwards, b->backwards, w->wait
    const [sequenceIndex, setSequenceIndex]=useState(0);

    const onColorChange=()=>{
        let newMode=(globalVariables.colorMode === "dark" ? "light" : "dark");
        props.setColorMode(newMode)
    }
    useEffect(()=>{
        switch (state) {
            case 'f':
                setTimeout(()=>{
                    let changeState = writtenLen+1 >= titleSequence[sequenceIndex].length;
                    let lastSeq=sequenceIndex===titleSequence.length-1||titleSequence.length===0;
                    setWrittenLen(Math.min(titleSequence[sequenceIndex].length, writtenLen+1))
                    if (changeState && lastSeq) {
                        setState('x');
                        setTick(!tick);
                        return;
                    }
                    setState(changeState?'w':state);
                    setTick(!tick);
                }, WRITING_SPEED)
                break;
            case 'b':
                setTimeout(()=>{
                    let changeState = writtenLen-1 <= 0;
                    setWrittenLen(Math.max(writtenLen-1, 0));
                    if (changeState) {
                        setSequenceIndex(sequenceIndex+1);
                        setState('f');
                    }
                    setTick(!tick);
                }, DELETE_SPEED)
                break;
            case 'w':
                setTimeout(()=>{setState('b'); setTick(!tick)},WAIT_CHANGE_SPEED)
                break;
            case 'x':
                console.log("SEQUENCE COMPLETE");
                break;
            default:
                console.error("WRONG SEQ");
        }
        // eslint-disable-next-line
    }, [tick]);

    return (
        <div className={"mainContainer "+globalVariables.colorMode+" titleHeader"}>
            <span className={"headingText notDraggable "+globalVariables.colorMode+" titleHeader"}>{titleSequence[sequenceIndex].substr(0, writtenLen)}</span>
            <div className={"blinkingRectangle notDraggable"} style={{fontSize:28}}>|</div>
            <img className={"icon titleHeader notDraggable"} src={(globalVariables.colorMode==="dark"?darkMode:lightMode)} alt={"dark/light"}
                 onClick={()=>{onColorChange()}}/>
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