import ground from "../../../../resources/ground.svg"
import "../../../../css/App.css"
import "../../../../css/Scene.css"
import globalVariables from "../../../other/GlobalVariables";
import cloudLight from "../../../../resources/clouds_light.svg"
import cloudDark from "../../../../resources/clouds_dark.svg"
import React from "react";

const cloud={"light":cloudLight, "dark":cloudDark}

const Scene = (props) => {
    let border=props.highlightTouchButtons?"solid 0.5px slateblue":"none";
    let translate=`translateX(${-props.translateX}px)`;
    return (
        <div id={"resCont"} className={"mainContents " + globalVariables.colorMode + " interactiveResume"}
             tabIndex={"0"}
             onKeyDown={props.onPressDown}
             onKeyUp={props.onPressUp}>
            <div style={{width: props.sceneWidth, position:"relative", bottom:"0%", transform: `translateX(${props.translateX}px)`}}>
                {props.children}
                <div onTouchStart={props.onPressDown}
                     onTouchEnd={props.onPressUp}
                     id={"left"} className={"overlayButtons"}
                     style={{transform:translate, border: border}}/>

                <div onTouchStart={props.onPressDown}
                     onTouchEnd={props.onPressUp}
                     id={"right"} className={"overlayButtons"}
                        style={{transform: translate, border: border, right:"0"}}/>

                <div onTouchStart={props.onPressDown}
                     onTouchEnd={props.onPressUp}
                     id={"up"} className={"overlayButtons"}
                        style={{transform: translate, border: border, left:`${100.0/3}%`, top:"0", height:"calc(45% - 0.5px)"}}/>

                <div onTouchStart={props.onPressDown}
                     onTouchEnd={props.onPressUp}
                     id={"down"} className={"overlayButtons"}
                     style={{transform: translate, border: border, left:`${100.0/3}%`, bottom:"calc(10% - 0.5px)", height:"calc(45% - 0.5px)"}}/>

                <img className={"ground notDraggable"} height={"10%"} width={props.sceneWidth} src={ground} alt={"Ground"}/>
                <img width={100} style={{left:"25px", top:"0", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"150px", top:"10%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"275px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"400px", top:"0%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"} alt={"cloud"}/>
                <img width={100} style={{left:"525px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"650px", top:"12%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"775px", top:"7%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"900px", top:"2%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"1025px", top:"10%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"1150px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"1275px", top:"0%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"} alt={"cloud"}/>
                <img width={100} style={{left:"1400px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"1525px", top:"12%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud[globalVariables.colorMode]} className={"cloud notDraggable"}  alt={"cloud"}/>
            </div>
        </div>
    );
};



export default Scene;