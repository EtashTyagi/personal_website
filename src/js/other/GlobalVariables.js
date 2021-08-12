import Home from "../Components/Home";
import Resume from "../Components/Mario Type Resume/Resume";
import Projects from "../Components/Projects";
import AboutMe from "../Components/AboutMe";
import GameThread from "../Animations/GameThread";

const globalVariables={
    tabToComponent: {"Home":Home,
                "Resume": Resume,
                "Projects": Projects,
                "About Me": AboutMe
    },
    rootDir: "/personal_website",
    githubLink: "https://github.com/EtashTyagi",
    linkedinLink: "https://www.linkedin.com/in/etash-tyagi-19b489214/",
    hackerrankLink: "https://www.hackerrank.com/Etash19360",
    codeforcesLink: "https://codeforces.com/profile/etash",
    codechefLink: "https://www.codechef.com/users/etasht",
    facebookLink: "https://facebook.com/etash.tyagi",
    colorMode: "light",
    currentGameThread: new GameThread(null, null, null, null, null, null)
}
export default globalVariables;