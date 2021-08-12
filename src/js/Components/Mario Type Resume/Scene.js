import ground from "../../../resources/ground.svg"
import "../../../css/App.css"
import "../../../css/Scene.css"
import globalVariables from "../../other/GlobalVariables";
import cloud from "../../../resources/clouds.svg"



const Scene = (props) => {
    return (
        <div id={"resCont"} className={"mainContents " + globalVariables.colorMode + " interactiveResume"}
             tabIndex={"0"}
             onKeyDown={props.onPressDown}
             onKeyUp={props.onPressUp}
             onTouchStart={props.onPressDown}
             onTouchEnd={props.onPressUp}>
            <div style={{width: props.sceneWidth, position:"relative", bottom:"0%", transform: `translateX(${props.translateX}px)`}}>
                {props.children}
                <img className={"ground notDraggable"} height={"10%"} width={props.sceneWidth} src={ground} alt={"Ground"}/>
                <img width={100} style={{left:"25px", top:"0", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"150px", top:"10%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"275px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"400px", top:"0%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"} alt={"cloud"}/>
                <img width={100} style={{left:"525px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"650px", top:"12%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"775px", top:"7%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"900px", top:"2%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"1025px", top:"10%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"1150px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
                <img width={100} style={{left:"1275px", top:"0%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"} alt={"cloud"}/>
                <img width={100} style={{left:"1400px", top:"5%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"} />
                <img width={100} style={{left:"1525px", top:"12%", transform:`translateX(${-props.translateX*0.9}px)`}} src={cloud} className={"cloud notDraggable"}  alt={"cloud"}/>
            </div>
        </div>
    );
};



export default Scene;