import React, {useState} from 'react';
import '../../css/Header.css'
import "../../css/App.css"
import PropTypes from "prop-types";
import TitleHeader from "./TitleHeader";
import NavBarHeader from "./NavBarHeader";

const COLLAPSE_RELAPSE_CHECK_TIME=5;

const Header = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [colorMode, setColorMode] = useState("light");
    const [positionState, setPositionState]=useState({prevOffset:0, headerOffset:0});
    const [constructed, setConstructed]=useState(false);

    let newSetColorMode=(newMode)=>{
        props.setColorMode(()=>(newMode));
        setColorMode(()=>newMode);
    }

    if (!constructed) {
        document.documentElement.style.setProperty("color-scheme", "light")
        setConstructed(()=>{
            collapseRelapseAnimator(setPositionState);
            return true;
        });
    }

    return (
        <div style={{zIndex:1}}>
            <div style={{position: "fixed", width:"100%", transform: `translate(0px, ${positionState.headerOffset}px)` }}>
                <TitleHeader setColorMode={newSetColorMode}/>
                <div className={"hLine "+colorMode}/>
                <NavBarHeader colorMode={colorMode}/>
            </div>
            <div className={"spacer"}/>
        </div>

    );
};
Header.propTypes = {
    setColorMode: PropTypes.func,
};
Header.defaultProps= {
    setColorMode: () => {},
}

async function collapseRelapseAnimator(setPositionState) {
    let curOffset=0;
    let frameProceed = ()=>(new Promise((resolve)=>{
        setTimeout(()=>{
            if (window.pageYOffset!==curOffset) {
                curOffset=window.pageYOffset;
                setPositionState((prev)=>(
                    {
                        prevOffset: curOffset,
                        headerOffset: (prev.prevOffset>curOffset ?
                            (curOffset<=52?
                                Math.min(0, prev.headerOffset+(prev.prevOffset-curOffset)):
                                Math.min(-51.25, prev.headerOffset+(prev.prevOffset-curOffset)))
                            :Math.max(-113, prev.headerOffset+(prev.prevOffset-curOffset)))
                    }
                ));
            }
            resolve();
        }, COLLAPSE_RELAPSE_CHECK_TIME);
    }));
    while (true) {
        await frameProceed();
    }
}
export default Header;