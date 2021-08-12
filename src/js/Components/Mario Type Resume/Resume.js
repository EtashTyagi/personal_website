import "../../../css/App.css"
import "../../../css/Resume.css"
import Range from "../../other/Range";
import Level from "./Level";

const TUNNEL_X_RANGES = [new Range(700, 775), new Range(1000, 1075), new Range(1300, 1375)]
const SCENE_WIDTH=1550;


const Resume = () => {
    return (<Level TUNNEL_X_RANGES={TUNNEL_X_RANGES} SCENE_WIDTH={SCENE_WIDTH}/>)
};
export default Resume;