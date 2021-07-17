import React, {useState} from 'react';
import Header from "./Header";
import "../css/App.css"
import Footer from "./Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";

const tabs = ["Home", "Resume", "Projects", "About Me"];
const App = () => {
    const [colorMode, setColorMode]=useState("light");
    return (
        <Router>
            <div className={"fullHeight "+colorMode + " mainApp"}>
                <Header setColorMode={setColorMode} tabs={tabs}/>
                <div className={"mainContents"}>

                </div>
                <Footer colorMode={colorMode}/>
            </div>
        </Router>
    );
};

export default App;
