import Home from "../Components/Home/Home";
import MarioGame from "../Components/Projects/Mario Game/MarioGame";
import Projects from "../Components/Projects/Projects";
import Resume from "../Components/Resume/Resume";
import Kaseki from "../Components/Projects/Kaseki";
import ColorSwitch from "../Components/Projects/ColorSwitch";
import ThisWebsite from "../Components/Projects/ThisWebsite";
import ArduinoGame from "../Components/Projects/ArduinoGame";
import ElectroVerse from "../Components/Projects/ElectroVerse";
import UnderConstruction from "../Components/UnderConstruction";

const globalVariables={
    tabToComponent: {"Home":Home,
                "Projects": Projects,
                "Resume": Resume
    },
    componentNameToAddress: {
        "Home":"Home",
        "Welcome":"",
        "Resume": "Resume",
        "Mario Game":"Projects/MarioGame",
        "Projects": "Projects",
        "ElectroVerse": "Projects/ElectroVerse",
        "Kaseki": "Projects/Kaseki",
        "Color Switch": "Projects/Color Switch",
        "This Website": "Projects/This Website",
        "Arduino Game": "Projects/Arduino Game"
    },
    allComponents: {
        "Home":UnderConstruction,
        "Resume": Resume,
        "Mario Game":MarioGame,
        "Projects": Projects,
        "ElectroVerse": ElectroVerse,
        "Kaseki": Kaseki,
        "Color Switch": ColorSwitch,
        "This Website": ThisWebsite,
        "Arduino Game": ArduinoGame
    },
    rootDir: "/",
    githubLink: "https://github.com/EtashTyagi",
    linkedinLink: "https://www.linkedin.com/in/etash-tyagi-19b489214/",
    hackerrankLink: "https://www.hackerrank.com/Etash19360",
    codeforcesLink: "https://codeforces.com/profile/etash",
    codechefLink: "https://www.codechef.com/users/etasht",
    facebookLink: "https://facebook.com/etash.tyagi",
    colorMode: "light",
}
export default globalVariables;
